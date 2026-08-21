import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it, beforeEach } from 'vitest';

import { Seo } from './seo';
import { absoluteUrl } from './site.config';

function head(): HTMLHeadElement {
  return TestBed.inject(DOCUMENT).head;
}

function canonical(): string | null {
  return head().querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null;
}

function pageGraph(): Record<string, unknown>[] {
  const script = head().querySelector('script[data-page-schema]');
  return JSON.parse(script?.textContent ?? '{"@graph":[]}')['@graph'];
}

describe('absoluteUrl', () => {
  it('keeps the trailing slash only on the home page', () => {
    expect(absoluteUrl('/')).toBe('https://www.siwina.com/');
    expect(absoluteUrl('/pos')).toBe('https://www.siwina.com/pos');
    expect(absoluteUrl('/pos/')).toBe('https://www.siwina.com/pos');
  });
});

describe('Seo', () => {
  let seo: Seo;

  beforeEach(() => {
    head()
      .querySelectorAll('link[rel="canonical"], script[data-page-schema], link[data-lcp-preload]')
      .forEach((node) => node.remove());
    seo = TestBed.inject(Seo);
  });

  it('sets canonical and og:url to the absolute route URL', () => {
    seo.apply({ path: '/pos', title: 'POS', description: 'Punto de venta' });

    expect(canonical()).toBe('https://www.siwina.com/pos');
    expect(head().querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(
      'https://www.siwina.com/pos',
    );
  });

  it('drops the canonical and marks noindex for non-indexable pages', () => {
    seo.apply({ path: '/404', title: '404', description: 'No existe', index: false });

    expect(canonical()).toBeNull();
    expect(head().querySelector('meta[name="robots"]')?.getAttribute('content')).toContain(
      'noindex',
    );
  });

  it('emits BreadcrumbList and FAQPage nodes when the page declares them', () => {
    seo.apply({
      path: '/pos',
      title: 'POS',
      description: 'Punto de venta',
      breadcrumbs: [
        { label: 'Inicio', path: '/' },
        { label: 'POS', path: '/pos' },
      ],
      faq: [{ question: '¿Factura ante la DIAN?', answer: 'Sí.' }],
    });

    const types = pageGraph().map((node) => node['@type']);
    expect(types).toContain('BreadcrumbList');
    expect(types).toContain('FAQPage');
  });

  it('replaces the previous page schema instead of stacking blocks', () => {
    seo.apply({ path: '/pos', title: 'POS', description: 'a', faq: [{ question: 'q', answer: 'a' }] });
    seo.apply({ path: '/contacto', title: 'Contacto', description: 'b' });

    expect(head().querySelectorAll('script[data-page-schema]')).toHaveLength(1);
    expect(pageGraph().map((node) => node['@type'])).not.toContain('FAQPage');
  });

  it('removes the home hero preload on every other route', () => {
    const preload = TestBed.inject(DOCUMENT).createElement('link');
    preload.setAttribute('data-lcp-preload', '');
    preload.setAttribute('rel', 'preload');
    head().appendChild(preload);

    seo.apply({ path: '/pos', title: 'POS', description: 'Punto de venta' });

    expect(head().querySelector('link[data-lcp-preload]')).toBeNull();
  });
});

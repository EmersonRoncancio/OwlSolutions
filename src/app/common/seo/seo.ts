import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import {
  DEFAULT_OG_IMAGE,
  ORGANIZATION_ID,
  SITE_LOCALE,
  SITE_NAME,
  absoluteUrl,
} from './site.config';
import { BreadcrumbItem, FaqItem, PageSeo } from './seo.types';

/** Marks the JSON-LD block owned by the current route so it can be swapped on navigation. */
const PAGE_SCHEMA_ATTR = 'data-page-schema';

/**
 * Applies per-route head metadata. Runs during prerendering too, so every static
 * HTML file ships its own title, description, canonical, Open Graph and JSON-LD.
 */
@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  apply(page: PageSeo): void {
    const url = absoluteUrl(page.path);
    const image = page.image ?? DEFAULT_OG_IMAGE;
    const indexable = page.index !== false;

    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({
      name: 'robots',
      content: indexable
        ? 'index, follow, max-image-preview:large, max-snippet:-1'
        : 'noindex, follow',
    });

    this.setCanonical(indexable ? url : null);

    this.meta.updateTag({ property: 'og:type', content: page.ogType ?? 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:locale', content: SITE_LOCALE });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:image', content: image });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setHeroPreload(page.heroPreload === true);
    this.setPageSchema(this.buildGraph(page, url));
  }

  private buildGraph(page: PageSeo, url: string): Record<string, unknown>[] {
    const graph: Record<string, unknown>[] = [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: 'es-CO',
        isPartOf: { '@id': `${absoluteUrl('/')}#website` },
        publisher: { '@id': ORGANIZATION_ID },
      },
    ];

    if (page.breadcrumbs?.length) {
      graph.push(this.breadcrumbSchema(page.breadcrumbs, url));
    }

    if (page.faq?.length) {
      graph.push(this.faqSchema(page.faq, url));
    }

    return [...graph, ...(page.schema ?? [])];
  }

  private breadcrumbSchema(
    items: readonly BreadcrumbItem[],
    url: string,
  ): Record<string, unknown> {
    return {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: absoluteUrl(item.path),
      })),
    };
  }

  private faqSchema(items: readonly FaqItem[], url: string): Record<string, unknown> {
    return {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    };
  }

  /** The home hero preload only helps the home LCP; elsewhere it is wasted bandwidth. */
  private setHeroPreload(keep: boolean): void {
    if (keep) {
      return;
    }

    this.document.head
      .querySelectorAll('link[data-lcp-preload]')
      .forEach((node) => node.remove());
  }

  private setCanonical(url: string | null): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!url) {
      link?.remove();
      return;
    }

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private setPageSchema(graph: readonly Record<string, unknown>[]): void {
    const head = this.document.head;
    head.querySelectorAll(`script[${PAGE_SCHEMA_ATTR}]`).forEach((node) => node.remove());

    const script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute(PAGE_SCHEMA_ATTR, '');
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    head.appendChild(script);
  }
}

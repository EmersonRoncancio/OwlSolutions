import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Breadcrumbs } from '../../common/components/breadcrumbs/breadcrumbs';
import { CtaBand } from '../../common/components/cta-band/cta-band';
import { RelatedLinks } from '../../common/components/related-links/related-links';
import { Seo } from '../../common/seo/seo';
import { BreadcrumbItem } from '../../common/seo/seo.types';
import { ORGANIZATION_ID, SITE_NAME, absoluteUrl } from '../../common/seo/site.config';
import { findPost } from '../data/posts.data';

@Component({
  selector: 'app-post',
  imports: [RouterLink, DatePipe, Breadcrumbs, RelatedLinks, CtaBand],
  templateUrl: './post.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Post {
  /** Bound from the `:slug` route parameter via `withComponentInputBinding()`. */
  readonly slug = input('');

  private readonly seo = inject(Seo);

  protected readonly post = computed(() => findPost(this.slug()));

  protected readonly breadcrumbs = computed<readonly BreadcrumbItem[]>(() => {
    const post = this.post();
    const trail: BreadcrumbItem[] = [
      { label: 'Inicio', path: '/' },
      { label: 'Blog', path: '/blog' },
    ];

    return post ? [...trail, { label: post.title, path: `/blog/${post.slug}` }] : trail;
  });

  constructor() {
    effect(() => {
      const post = this.post();

      if (!post) {
        this.seo.apply({
          path: `/blog/${this.slug()}`,
          title: 'Artículo no encontrado | Siwina',
          description: 'El artículo que buscas no existe o cambió de dirección.',
          index: false,
        });
        return;
      }

      const url = absoluteUrl(`/blog/${post.slug}`);

      this.seo.apply({
        path: `/blog/${post.slug}`,
        title: post.metaTitle,
        description: post.description,
        ogType: 'article',
        breadcrumbs: this.breadcrumbs(),
        schema: [
          {
            '@type': 'BlogPosting',
            '@id': `${url}#article`,
            headline: post.title,
            description: post.description,
            url,
            datePublished: post.published,
            dateModified: post.published,
            inLanguage: 'es-CO',
            author: { '@id': ORGANIZATION_ID, name: SITE_NAME },
            publisher: { '@id': ORGANIZATION_ID },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${url}#webpage` },
          },
        ],
      });
    });
  }
}

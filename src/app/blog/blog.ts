import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Breadcrumbs } from '../common/components/breadcrumbs/breadcrumbs';
import { CtaBand } from '../common/components/cta-band/cta-band';
import { PageHero } from '../common/components/page-hero/page-hero';
import { Seo } from '../common/seo/seo';
import { BreadcrumbItem } from '../common/seo/seo.types';
import { absoluteUrl } from '../common/seo/site.config';
import { BLOG_POSTS } from './data/posts.data';

@Component({
  selector: 'app-blog',
  imports: [RouterLink, DatePipe, Breadcrumbs, PageHero, CtaBand],
  templateUrl: './blog.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Blog {
  private readonly seo = inject(Seo);

  protected readonly breadcrumbs: readonly BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Blog', path: '/blog' },
  ];

  protected readonly posts = BLOG_POSTS;

  constructor() {
    this.seo.apply({
      path: '/blog',
      title: 'Blog de Siwina | POS, facturación electrónica e IA',
      description:
        'Guías prácticas sobre punto de venta, facturación electrónica DIAN y agentes de inteligencia artificial para negocios en Colombia.',
      breadcrumbs: this.breadcrumbs,
      schema: [
        {
          '@type': 'Blog',
          '@id': `${absoluteUrl('/blog')}#blog`,
          url: absoluteUrl('/blog'),
          name: 'Blog de Siwina',
          inLanguage: 'es-CO',
          blogPost: BLOG_POSTS.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: absoluteUrl(`/blog/${post.slug}`),
            datePublished: post.published,
            description: post.description,
          })),
        },
      ],
    });
  }
}

export interface BreadcrumbItem {
  readonly label: string;
  /** App path, e.g. `/pos`. */
  readonly path: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface PageSeo {
  /** App path used for canonical and og:url, e.g. `/pos`. */
  readonly path: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly ogType?: 'website' | 'article';
  /** Set to false for pages that must stay out of the index (404). */
  readonly index?: boolean;
  readonly breadcrumbs?: readonly BreadcrumbItem[];
  readonly faq?: readonly FaqItem[];
  /** Keeps the home hero image preload in <head>. Every other page drops it. */
  readonly heroPreload?: boolean;
  /** Extra schema.org nodes merged into the page `@graph`. */
  readonly schema?: readonly Record<string, unknown>[];
}

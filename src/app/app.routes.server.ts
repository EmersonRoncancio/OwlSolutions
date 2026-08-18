import { RenderMode, ServerRoute } from '@angular/ssr';

import { BLOG_POSTS } from './blog/data/posts.data';

/**
 * Every public route is prerendered to static HTML at build time, so bots and
 * users get the full document on the first response and direct hits to internal
 * URLs work on any static host without an SPA rewrite.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return BLOG_POSTS.map((post) => ({ slug: post.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

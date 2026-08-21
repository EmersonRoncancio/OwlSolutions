/**
 * Post-build step for the static (prerendered) output.
 *
 * 1. Generates `sitemap.xml` from the pages Angular actually prerendered, so the
 *    router stays the single source of truth and the sitemap can never drift.
 * 2. Skips any page that renders `noindex`, so the sitemap only lists indexable URLs.
 * 3. Copies the prerendered `/404` document to `404.html`, the file most static
 *    hosts serve for unknown paths.
 * 4. Strips Angular's `modulepreload` hints. Every route is prerendered, so no
 *    JavaScript is needed to paint — but those hints fetch the framework chunk at
 *    High priority, ahead of the LCP image. The module script still loads when the
 *    parser reaches it, just without competing for the critical-path bandwidth.
 */
import { readFile, readdir, writeFile, copyFile, stat } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const SITE_URL = 'https://siwina.com';
const OUT_DIR = join(process.cwd(), 'dist', 'Siwina', 'browser');
const PUBLIC_SITEMAP = join(process.cwd(), 'public', 'sitemap.xml');

async function collectPages(dir) {
  const pages = [];

  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);

    if (entry.isDirectory()) {
      pages.push(...(await collectPages(full)));
    } else if (entry.name === 'index.html') {
      pages.push(full);
    }
  }

  return pages;
}

/** Turns `<out>/pos/index.html` into `/pos`, and the root file into `/`. */
function toRoutePath(file) {
  const dir = relative(OUT_DIR, file).split(sep).slice(0, -1).join('/');
  return dir ? `/${dir}` : '/';
}

function toLoc(routePath) {
  return routePath === '/' ? `${SITE_URL}/` : `${SITE_URL}${routePath}`;
}

function priorityFor(routePath) {
  if (routePath === '/') return '1.0';
  if (routePath.startsWith('/blog/')) return '0.6';
  return '0.8';
}

/**
 * Angular emits `<link rel="modulepreload">` for its entry chunks. On a prerendered
 * page that costs LCP without buying anything: measured on Lighthouse mobile, dropping
 * them moved the score from 93 to 95, FCP from 1.80s to 1.35s and LCP from 2.70s to
 * 2.57s. Interactivity arrives slightly later, which a static marketing page can afford.
 */
function stripModulePreloads(html) {
  return html.replace(/<link rel="modulepreload"[^>]*>/g, '');
}

async function main() {
  await stat(OUT_DIR);

  const files = await collectPages(OUT_DIR);
  const routes = [];
  let notFoundFile = null;
  let strippedCount = 0;

  for (const file of files) {
    const html = await readFile(file, 'utf8');
    const routePath = toRoutePath(file);

    const stripped = stripModulePreloads(html);
    if (stripped !== html) {
      await writeFile(file, stripped, 'utf8');
      strippedCount += 1;
    }

    if (routePath === '/404') {
      notFoundFile = file;
    }

    if (/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html)) {
      continue;
    }

    routes.push(routePath);
  }

  routes.sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

  const lastmod = new Date().toISOString().slice(0, 10);
  const body = routes
    .map(
      (routePath) =>
        `  <url>\n    <loc>${toLoc(routePath)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priorityFor(routePath)}</priority>\n  </url>`,
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

  await writeFile(join(OUT_DIR, 'sitemap.xml'), sitemap, 'utf8');
  // Keep the committed copy in sync so the repo never shows a stale sitemap.
  await writeFile(PUBLIC_SITEMAP, sitemap, 'utf8');

  if (notFoundFile) {
    await copyFile(notFoundFile, join(OUT_DIR, '404.html'));
  }

  console.log(
    `postbuild: sitemap.xml with ${routes.length} URLs${notFoundFile ? ', 404.html written' : ''}` +
      `, modulepreload stripped from ${strippedCount} documents`,
  );
}

main().catch((error) => {
  console.error('postbuild failed:', error);
  process.exit(1);
});

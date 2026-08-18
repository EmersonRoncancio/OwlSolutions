/** Single source of truth for absolute URLs and brand identity used across the site. */
export const SITE_URL = 'https://siwina.com';
export const SITE_NAME = 'Siwina';
export const SITE_LOCALE = 'es_CO';
export const SITE_LANG = 'es-CO';

export const CONTACT_EMAIL = 'contacto@siwina.com';
export const WHATSAPP_URL = 'https://wa.me/573007810339';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/siwina/about/';

export const DEFAULT_OG_IMAGE =
  'https://res.cloudinary.com/daezwxzg1/image/upload/v1772583219/VistapreviaPhotoshop_Imagenn_v5ycrg.webp';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Official profiles used as `sameAs` signals for the Organization entity. */
export const ORGANIZATION_SAME_AS: readonly string[] = [LINKEDIN_URL];

/**
 * Builds an absolute canonical URL from an app path.
 * The home page keeps its trailing slash; every other path stays slash-free
 * so a single canonical form is emitted per route.
 *
 * Deployment contract: the host must serve `/pos` (no trailing slash) as HTTP 200
 * from `pos/index.html`. If the host can only serve `/pos/`, add the trailing
 * slash here so the canonical matches the URL that actually answers 200.
 */
export function absoluteUrl(path: string): string {
  if (!path || path === '/') {
    return `${SITE_URL}/`;
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized.replace(/\/+$/, '')}`;
}

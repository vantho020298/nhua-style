import type { APIRoute } from 'astro';
import { LANGS, LANG_META, DEFAULT_LANG } from '../i18n/langs';
import { url, type Ctx } from '../lib/routes';
import { services, team, products, posts } from '../lib/data';

const PAGES = [
  '', 'services', 'team', 'products', 'blog', 'gallery', 'locations', 'about', 'booking', 'privacy',
  ...services.map((s) => `services/${s.key}`),
  ...team.map((m) => `team/${m.key}`),
  ...products.map((p) => `products/${p.key}`),
  ...posts.map((p) => `blog/${p.key}`),
];

export const GET: APIRoute = ({ site }) => {
  const abs = (ctx: Ctx, path: string) => new URL(url(ctx, path), site).href;
  const entries = PAGES.flatMap((path) =>
    LANGS.map((lang) => {
      const alternates = LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${LANG_META[l].html}" href="${abs({ lang: l }, path)}"/>`).join('');
      const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${abs({ lang: DEFAULT_LANG }, path)}"/>`;
      return `<url><loc>${abs({ lang }, path)}</loc>${alternates}${xDefault}</url>`;
    }),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

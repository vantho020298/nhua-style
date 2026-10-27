import { defineConfig } from 'astro/config';

// SITE_URL: the public domain (canonical links, hreflang, sitemap). BASE_PATH: the folder the site
// is served from, e.g. /nhua-style for a GitHub Pages project site (default: the domain root).
export default defineConfig({
  site: process.env.SITE_URL || 'https://nhuaprobarbershop.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: { remotePatterns: [] },
});

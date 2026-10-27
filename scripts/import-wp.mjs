// Pulls content from the current WordPress site (nhuaprobarbershop.com) into
// src/data/*.json and downloads the images it references into src/assets/media.
// Re-run with `npm run import:wp` whenever content changes in WordPress.
import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';

const SITE = 'https://nhuaprobarbershop.com';
const API = `${SITE}/wp-json/wp/v2`;
const ROOT = path.resolve(import.meta.dirname, '..');
const DATA_DIR = path.join(ROOT, 'src/data');
const MEDIA_DIR = path.join(ROOT, 'src/assets/media');
const LANGS = ['vi', 'en', 'ja', 'ko', 'zh', 'ru'];

async function getAll(type, extra = '') {
  const out = [];
  for (let page = 1; ; page++) {
    const res = await fetch(`${API}/${type}?per_page=100&page=${page}&_embed=wp:featuredmedia,wp:term${extra}`);
    if (!res.ok) break;
    const items = await res.json();
    out.push(...items);
    if (Number(res.headers.get('x-wp-totalpages') || 1) <= page) break;
  }
  return out;
}

const langOf = (item) => item.link.match(/^https?:\/\/[^/]+\/(en|ja|ko|zh|ru)\//)?.[1] ?? 'vi';

const decode = (s = '') =>
  s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&rsquo;/g, '’').replace(/&lsquo;/g, '‘').replace(/&ndash;/g, '–').replace(/&mdash;/g, '—');

const text = (html = '') => decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

const KEEP = new Set(['h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'b', 'i', 'br', 'blockquote', 'a']);

// Reduce WordPress/Elementor markup to a small set of plain tags.
function clean(html = '') {
  let h = html
    .replace(/<(script|style|svg|form|button|iframe|noscript|select|textarea)[\s\S]*?<\/\1>/gi, '')
    .replace(/<img[^>]*>/gi, '')
    .replace(/<h1(\s[^>]*)?>/gi, '<h2>').replace(/<\/h1>/gi, '</h2>')
    .replace(/<h[56](\s[^>]*)?>/gi, '<h4>').replace(/<\/h[56]>/gi, '</h4>');
  h = h.replace(/<(\/?)([a-z0-9]+)([^>]*)>/gi, (m, slash, tag, attrs) => {
    tag = tag.toLowerCase();
    if (!KEEP.has(tag)) return ' ';
    if (tag === 'a' && !slash) {
      const href = attrs.match(/href="([^"]*)"/)?.[1] ?? '';
      // Links into the old site are dropped: the new site has its own routes.
      if (!href || href.startsWith('/') || href.includes('nhuaprobarbershop.com')) return '<a>';
      return `<a href="${href}" rel="noopener">`;
    }
    return `<${slash}${tag}>`;
  });
  h = h.replace(/<a>([\s\S]*?)<\/a>/g, '$1')
    .replace(/\s+/g, ' ')
    .replace(/<(p|li|h2|h3|h4|strong|em|b|i)>\s*<\/\1>/g, '')
    .replace(/<(ul|ol)>\s*<\/\1>/g, '')
    .replace(/\s*(<\/?(?:h2|h3|h4|p|ul|ol|li|blockquote)>)\s*/g, '$1')
    .replace(/\s+([,.;:!?])/g, '$1');
  return decode(h).trim();
}

// Remove the "Book at Nhựa Pro · See other services" link line WordPress appends.
const dropTrailingLinks = (html) => html.replace(/<p>[^<]*(?:<a[^>]*>[^<]*<\/a>[^<]*){2,}<\/p>\s*$/, '').replace(/<p>[^<·]{0,80}·[^<]{0,80}<\/p>$/, '');

const firstList = (html) => {
  const ul = html.match(/<ul[^>]*>([\s\S]*?)<\/ul>/i)?.[1] ?? '';
  return [...ul.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((m) => text(m[1])).filter(Boolean);
};

const imageOf = (item) => item._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null;
const termsOf = (item) => (item._embedded?.['wp:term'] ?? []).flat().map((t) => t.slug);

const downloads = new Map();
function media(url) {
  if (!url) return null;
  const base = decodeURIComponent(url.split('/').pop())
    .normalize('NFKD').replace(/[^\x20-\x7e]/g, '').replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/-+/g, '-').toLowerCase();
  downloads.set(base, url);
  return base;
}

async function downloadAll() {
  await mkdir(MEDIA_DIR, { recursive: true });
  for (const [file, url] of downloads) {
    const dest = path.join(MEDIA_DIR, file);
    try { await access(dest); continue; } catch {}
    const res = await fetch(encodeURI(decodeURI(url)));
    if (!res.ok) { console.warn('  ! image failed', res.status, url); continue; }
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    console.log('  + media', file);
  }
}

// Translations of one item share the same featured image; fall back to menu order.
function groupTranslations(items) {
  const groups = new Map();
  for (const it of items) {
    const k = it.featured_media ? `m${it.featured_media}` : `o${it.menu_order}`;
    if (!groups.has(k)) groups.set(k, {});
    groups.get(k)[langOf(it)] = it;
  }
  return [...groups.values()].filter((g) => g.vi);
}

const num = (s) => Number(String(s).replace(/[^\d]/g, ''));
const priceIn = (s) => {
  const m = s.match(/(\d{1,3}(?:[.,\s]\d{3})+)\s*(?:₫|đ|VND|vnđ)/i);
  return m ? num(m[1]) : null;
};
const durationIn = (s) => {
  const m = s.match(/(\d{2,3})\s*-?\s*(?:minute|min|phút|分|분|мин)/i);
  return m ? Number(m[1]) : null;
};

// Some services have options: "60, 90 hoặc 120 phút", "450.000đ, 500.000đ hoặc 650.000đ",
// "700.000 ~ 800.000đ", "120–240 phút". Read the low and high ends from the Vietnamese summary.
function rangesIn(viSummary) {
  const prices = [...viSummary.matchAll(/\d{1,3}(?:\.\d{3})+/g)].map((m) => num(m[0]));
  const span = viSummary.match(/((?:\d{2,3}\s*(?:,|hoặc|–|-|~|đến)\s*)+\d{2,3})\s*phút/);
  const minutes = span ? [...span[1].matchAll(/\d{2,3}/g)].map((m) => Number(m[0])) : [];
  return {
    priceFrom: prices.length > 1 ? Math.min(...prices) : null,
    priceTo: prices.length > 1 ? Math.max(...prices) : null,
    durationFrom: minutes.length > 1 ? Math.min(...minutes) : null,
    durationTo: minutes.length > 1 ? Math.max(...minutes) : null,
  };
}

// Package and product prices are stored by the theme, not in the post content,
// so read them from the rendered catalog cards (slug -> price, slug -> brand).
async function catalogCards(listingPath) {
  const prices = new Map();
  const brands = new Map();
  for (let page = 1; page <= 10; page++) {
    const res = await fetch(`${SITE}${listingPath}${page > 1 ? `page/${page}/` : ''}`);
    if (!res.ok) break;
    const html = await res.text();
    const cards = [...html.matchAll(/<article class="rb-network-(?:service|product)-card[\s\S]*?<\/article>/g)].map((m) => m[0]);
    let added = 0;
    for (const card of cards) {
      const slug = card.match(/href="[^"]*\/([^/"]+)\/"/)?.[1];
      const price = card.match(/rb-price"><strong>([^<]+)</)?.[1];
      if (!slug || prices.has(slug)) continue;
      added++;
      if (price) prices.set(slug, num(price));
      const brand = card.match(/rb-widget-card__meta">([^<]+)</)?.[1];
      if (brand) brands.set(slug, decode(brand).trim());
    }
    if (!added) break;
  }
  return { prices, brands };
}

const SERVICE_GROUP ={ combo: 'signature', 'combo-thu-gian-khong-bao-gom-cat-toc': 'relax', 'dich-vu-hoa-chat': 'chemical', 'dich-vu-le': 'single' };

async function services() {
  const items = await getAll('rb_service');
  // The listing only renders its first page server-side; the homepage lists every package.
  const prices = new Map([...(await catalogCards('/')).prices, ...(await catalogCards('/dich-vu/')).prices]);
  return groupTranslations(items).map((g) => {
    const vi = g.vi;
    const viText = text(vi.excerpt.rendered + ' ' + vi.content.rendered);
    const range = rangesIn(text(vi.excerpt.rendered));
    const group =termsOf(vi).map((t) => SERVICE_GROUP[t]).find(Boolean) ?? 'single';
    const t = {};
    for (const l of LANGS) {
      const x = g[l] ?? g.en ?? vi;
      let body = dropTrailingLinks(clean(x.content.rendered)).replace(/^<h2>[^<]*<\/h2>/, '');
      t[l] = { name: text(x.title.rendered), summary: text(x.excerpt.rendered), includes: firstList(x.content.rendered), body };
    }
    return {
      key: vi.slug, group, order: vi.menu_order,
      price: range.priceFrom ?? prices.get(vi.slug) ?? priceIn(viText),
      priceTo: range.priceTo,
      duration: range.durationFrom ?? durationIn(text(vi.excerpt.rendered)) ?? durationIn(viText),
      durationTo: range.durationTo,
      image: media(imageOf(vi)), t,
    };
  }).sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
}

async function team() {
  const items = await getAll('rb_barber');
  return groupTranslations(items).map((g) => {
    const vi = g.vi;
    const t = {};
    for (const l of LANGS) {
      const x = g[l] ?? g.en ?? vi;
      t[l] = { summary: text(x.excerpt.rendered), body: clean(x.content.rendered) };
    }
    return {
      key: vi.slug, name: text(vi.title.rendered),
      role: termsOf(vi).includes('skinner') ? 'skinner' : 'barber',
      years: Number(text(vi.content.rendered).match(/(\d+)\s*năm/)?.[1] ?? 0) || null,
      order: vi.menu_order, image: media(imageOf(vi)), t,
    };
  }).sort((a, b) => (a.role === b.role ? a.order - b.order : a.role === 'barber' ? -1 : 1));
}

async function products() {
  const items = await getAll('rb_product');
  const { prices, brands } = await catalogCards('/san-pham/');
  return groupTranslations(items).map((g) => {
    const vi = g.vi;
    const t = {};
    for (const l of LANGS) {
      const x = g[l] ?? g.en ?? vi;
      t[l] = { name: text(x.title.rendered), summary: text(x.excerpt.rendered), body: clean(x.content.rendered) };
    }
    return {
      key: vi.slug, brand: brands.get(vi.slug) ?? null,
      price: prices.get(vi.slug) ?? priceIn(text(vi.content.rendered)),
      order: vi.menu_order, image: media(imageOf(vi)), t,
    };
  });
}

async function posts() {
  const items = await getAll('posts');
  return groupTranslations(items).map((g) => {
    const vi = g.vi;
    const t = {};
    for (const l of LANGS) {
      const x = g[l] ?? g.en ?? vi;
      t[l] = { title: text(x.title.rendered), excerpt: text(x.excerpt.rendered), body: clean(x.content.rendered) };
    }
    return { key: vi.slug, date: vi.date.slice(0, 10), image: media(imageOf(vi)), t };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

const PAGE_SLUGS = {
  about: { vi: 'gioi-thieu', en: 'about-us', ja: 'about-ja', ko: 'about-ko', zh: 'about-zh', ru: 'about-us-ru' },
  privacy: { vi: 'chinh-sach-bao-mat', en: 'privacy-policy', ja: 'privacy-policy-ja', ko: 'privacy-policy-ko', zh: 'privacy-policy-zh', ru: 'privacy-policy-ru' },
  booking: { vi: 'dat-lich', en: 'book-an-appointment', ja: 'booking-ja', ko: 'booking-ko', zh: 'booking-zh', ru: 'booking-ru' },
};

async function pages() {
  const items = await getAll('pages');
  const out = {};
  for (const [name, slugs] of Object.entries(PAGE_SLUGS)) {
    out[name] = {};
    for (const l of LANGS) {
      const x = items.find((i) => i.slug === slugs[l]);
      if (x) out[name][l] = { title: text(x.title.rendered), body: clean(x.content.rendered) };
    }
  }
  return out;
}

async function branches() {
  const items = await getAll('rb_branch');
  return items.map((b) => ({
    key: b.slug, name: text(b.title.rendered),
    address: b.meta._rb_address, phone: b.meta._rb_phone, email: b.meta._rb_email || null,
    hoursRaw: b.meta._rb_opening_hours,
    mapUrl: b.meta._rb_map_url, mapEmbed: b.meta._rb_maps_embed,
  })).sort((a, b) => (a.phone === '0908401384' ? -1 : 1));
}

// Videos and Google reviews only live in the rendered homepage.
async function fromHomepage() {
  const html = await (await fetch(`${SITE}/en/home/`)).text();
  const videos = [...html.matchAll(/data-lightbox-src="[^"]*\/embed\/([A-Za-z0-9_-]{11})[^"]*"[^>]*data-lightbox-title="([^"]*)"[\s\S]*?<img[^>]*src="([^"]+)"/g)]
    .map((m) => ({ youtube: m[1], title: decode(m[2]), thumb: media(m[3]) }));
  const reviews = [...html.matchAll(/ti-name[^>]*>\s*([^<]+?)\s*<[\s\S]*?ti-review-content[^>]*>([\s\S]*?)<\/div>/g)]
    .map((m) => ({ name: decode(m[1]).trim(), text: text(m[2]), source: 'Google' }));
  return { videos, reviews };
}

async function main() {
  await mkdir(DATA_DIR, { recursive: true });
  const data = {
    services: await services(),
    team: await team(),
    products: await products(),
    posts: await posts(),
    pages: await pages(),
    branches: await branches(),
    ...(await fromHomepage()),
  };
  for (const [name, value] of Object.entries(data)) {
    await writeFile(path.join(DATA_DIR, `${name}.json`), JSON.stringify(value, null, 2) + '\n');
    console.log(`${name}: ${Array.isArray(value) ? value.length : Object.keys(value).length}`);
  }
  await downloadAll();
}

main().catch((e) => { console.error(e); process.exit(1); });

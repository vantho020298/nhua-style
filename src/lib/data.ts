import servicesJson from '../data/services.json';
import teamJson from '../data/team.json';
import productsJson from '../data/products.json';
import postsJson from '../data/posts.json';
import pagesJson from '../data/pages.json';
import videosJson from '../data/videos.json';
import { LANG_META, type Lang } from '../i18n/langs';
import { ui } from '../i18n/ui';
import { branches } from '../config/site';

type Localized<T> = Record<Lang, T>;

export type ServiceGroup = 'signature' | 'relax' | 'chemical' | 'single';
export interface Service {
  key: string;
  group: ServiceGroup;
  order: number;
  price: number | null;
  priceTo: number | null;
  duration: number | null;
  durationTo: number | null;
  image: string | null;
  t: Localized<{ name: string; summary: string; includes: string[]; body: string }>;
}
export interface Member {
  key: string;
  name: string;
  role: 'barber' | 'skinner';
  years: number | null;
  order: number;
  image: string | null;
  t: Localized<{ summary: string; body: string }>;
}
export interface Product {
  key: string;
  brand: string | null;
  price: number | null;
  order: number;
  image: string | null;
  t: Localized<{ name: string; summary: string; body: string }>;
}
export interface Post {
  key: string;
  date: string;
  image: string | null;
  t: Localized<{ title: string; excerpt: string; body: string }>;
}

// Corrections on top of the WordPress import, kept here so a re-import doesn't undo them.
// Prices the owner has changed: the old amount is also rewritten in the imported text.
const PRICE_OVERRIDES: Record<string, number> = { 'cat-toc': 85000 };

// Package names that read as foreign or machine-translated (owner and reviewer feedback).
const NAME_OVERRIDES: Record<string, Partial<Record<Lang, string>>> = {
  'combo-basic': { vi: 'Combo Cơ Bản' },
  'combo-1': { ru: 'Комбо 1' },
  'combo-2': { ru: 'Комбо 2' },
  'combo-3': { ru: 'Комбо 3' },
  'combo-4': { ru: 'Комбо 4' },
  'combo-5': { ru: 'Комбо 5' },
  'combo-6': { ru: 'Комбо 6' },
  'combo-vietnamese-experience': { vi: 'Trải Nghiệm Việt', ru: 'Вьетнамский релакс' },
  'combo-premium-vietnamese-experience': { vi: 'Trải Nghiệm Việt Cao Cấp', ru: 'Вьетнамский релакс премиум' },
  'combo-the-full-vietnamese-experience': { vi: 'Trải Nghiệm Việt Trọn Vẹn', ru: 'Полный вьетнамский релакс' },
  'nhua-pro-vip-experience': { vi: 'Nhựa Pro VIP' },
  'massage-body': { vi: 'Massage toàn thân', ru: 'Массаж тела' },
  // Single services named the same way as inside the combos, so guests can match them up.
  'cat-mong-tay': { ja: '手の爪のカット' },
  'cat-mong-chan': { ja: '足の爪のカット' },
  'cha-got-chan': { ja: 'かかとの角質ケア', ru: 'Пилинг пяток' },
  'cao-mat-lam-rau': { vi: 'Cạo mặt thư giãn & tỉa râu' },
  'massage-chan': { ru: 'Массаж стоп' },
  'goi-dau-duong-sinh': { ja: 'ベトナム式ヘッドスパ', ru: 'Вьетнамское расслабляющее мытьё головы' },
  'ep-side': { ru: 'Прижатие боков (Side\u00a0Down)' },
  'danh-mi-mat': { vi: 'Vệ sinh mi mắt' },
};

// Typos and wording fixes in the imported text, per language.
const TEXT_FIXES: Partial<Record<Lang, [RegExp, string][]>> = {
  vi: [
    [/Đánh mí mắt/g, 'Vệ sinh mi mắt'], [/ĐÁNH MÍ MẮT/g, 'VỆ SINH MI MẮT'], [/ĐÁNH MI MẮT/g, 'VỆ SINH MI MẮT'],
    [/trải nghiệm grooming/g, 'trải nghiệm chăm sóc'], [/dịch vụ grooming/g, 'dịch vụ chăm sóc'], [/grooming/g, 'chăm sóc'],
    [/form tóc/g, 'dáng tóc'],
  ],
  en: [[/Da Nang/g, 'Đà Nẵng'], [/\bSkinner\b/g, 'Care therapist'], [/\bskinner\b/g, 'care therapist']],
  ja: [[/首・肩のマッサージ/g, '首・肩マッサージ'], [/ヘアカット＆すすぎ/g, 'ヘアカット＆シャンプー'], [/ベトナム式リラクゼーションシャンプー/g, 'ベトナム式ヘッドスパ']],
  ko: [[/남성 릴랙싱 전신 릴랙스 마사지/g, '전신 릴랙스 마사지']],
  zh: [
    [/潔/g, '洁'], [/服务服务/g, '服务'], [/尊贵\s*VIP\s*体验/gi, '尊贵 VIP 体验'], [/两侧头发服帖烫/g, '两侧压贴烫'], [/服帖烫/g, '压贴烫'],
    [/剪发及冲发/g, '理发及洗发'], [/修面及胡须修剪/g, '热毛巾剃须（含胡须修剪）'], [/理发及洗发/g, '理发及普通洗发'],
  ],
  ru: [
    [/Почему ([^<"]+?) в Nhựa Pro/g, 'Чем хороша услуга «$1» в Nhựa Pro'],
    [/([Бб])ритье/g, '$1ритьё'], [/([Чч])ерн/g, '$1ёрн'], [/учетом/g, 'учётом'],
    [/с опытом 3 лет/g, 'с трёхлетним опытом'], [/с опытом 6 лет/g, 'с шестилетним опытом'],
    [/ВЬЕТНАМСКИЙ СПА-УХОД ЗА КОЖЕЙ ГОЛОВЫ/g, 'ВЬЕТНАМСКОЕ РАССЛАБЛЯЮЩЕЕ МЫТЬЁ ГОЛОВЫ'], [/подойдет/g, 'подойдёт'], [/СТРИЖКА И ОПОЛАСКИВАНИЕ ВОЛОС/g, 'СТРИЖКА И МЫТЬЁ ГОЛОВЫ'], [/мытьем/g, 'мытьём'], [/ \+ /g, '\u00a0+ '],
  ],
};

// Real shop photos instead of the stock illustrations WordPress uses for these services.
const IMAGE_OVERRIDES: Record<string, string> = {
  'cat-toc': 'barber-work.jpg',
  'ep-side': 'cut-side.jpg',
  'nhuom-toc-co-ban': 'cut-color.jpg',
  'tay-toc-nhuom-mau': 'cut-blonde.jpg',
  'lay-ray-tai': 'ear.jpg',
};

const fixText = <T>(value: T, lang: Lang): T => {
  let json = JSON.stringify(value);
  for (const [re, to] of TEXT_FIXES[lang] ?? []) json = json.replace(re, to);
  return JSON.parse(json);
};

// The body says "200.000đ" while price boxes say "200.000₫": use one symbol everywhere.
const DONG = /(\d)\s?đ(?!\p{L})/gu;
const TILDE_RANGE = /(\d)\s?~\s?(\d)/g;

function corrected(s: Service): Service {
  const price = PRICE_OVERRIDES[s.key] ?? s.price;
  const oldPrice = price !== s.price && s.price != null
    ? new RegExp(`${String(s.price).replace(/(\d)(?=(\d{3})+$)/g, '$1[.,\\s]?')}\\s?[đ₫]`, 'gu')
    : null;
  const t = Object.fromEntries(Object.entries(s.t).map(([key, v]) => {
    const lang = key as Lang;
    let json = JSON.stringify(v);
    if (oldPrice) json = json.replace(oldPrice, formatPrice(price, lang));
    const name = NAME_OVERRIDES[s.key]?.[lang];
    if (name) json = json.split(v.name).join(name).split(displayName(v.name)).join(name);
    return [lang, fixText(JSON.parse(json.replace(DONG, '$1₫').replace(TILDE_RANGE, '$1 – $2')), lang)];
  })) as Service['t'];
  return { ...s, price, image: IMAGE_OVERRIDES[s.key] ?? s.image, t };
}

export const services = (servicesJson as Service[]).map(corrected).sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
// The body repeats the summary (already the page lead) at the top and again in a closing
// "About <name>" section; drop those copies and any heading left without content.
const plain = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
export const team = (teamJson as Member[]).map((m) => ({
  ...m,
  t: Object.fromEntries(Object.entries(m.t).map(([key, v]) => {
    const { summary, body } = fixText(v, key as Lang);
    const opening = plain(summary).slice(0, 40);
    const trimmed = body
      .replace(/<p>(?:(?!<\/p>).)*<\/p>/gs, (p) => (plain(p).startsWith(opening) ? '' : p))
      .replace(/<h2>[^<]*<\/h2>(?=\s*(?:<h2>|$))/g, '');
    return [key, { summary, body: trimmed }];
  })) as Member['t'],
}));
export const products = (productsJson as Product[]).sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
export const posts = postsJson as Post[];
export const pages = pagesJson as Record<'about' | 'privacy' | 'booking', Partial<Localized<{ title: string; body: string }>>>;
export const videos = videosJson as { youtube: string; title: string; thumb: string | null }[];

export { branches };
export type Branch = (typeof branches)[number];

export const SERVICE_GROUPS: ServiceGroup[] = ['signature', 'relax', 'single', 'chemical'];

// Haircut is what most guests come for, so it leads the single services everywhere.
export const servicesIn = (group: ServiceGroup) =>
  services.filter((s) => s.group === group).sort((a, b) => Number(b.key === 'cat-toc') - Number(a.key === 'cat-toc'));
export const serviceByKey = (key: string) => services.find((s) => s.key === key)!;


export function formatPrice(n: number | null, lang: Lang): string {
  if (n == null) return '';
  return `${new Intl.NumberFormat(LANG_META[lang].number).format(n)}₫`;
}

/** "320.000₫", or "450.000 – 650.000₫" for services with options. */
export function servicePrice(s: Service, lang: Lang): string {
  if (s.priceTo && s.priceTo !== s.price) {
    const fmt = new Intl.NumberFormat(LANG_META[lang].number);
    return `${fmt.format(s.price ?? 0)} – ${fmt.format(s.priceTo)}₫`;
  }
  return formatPrice(s.price, lang);
}

/** "0908401384" -> "0908 401 384" for display (links keep the raw number). */
export const formatPhone = (p: string) => p.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3');
/** International form so the link also works from a foreign SIM. */
export const telHref = (p: string) => `tel:+84${p.replace(/^0/, '')}`;

/** The chat app a visitor most likely has: Zalo for Vietnamese, WhatsApp (with a prefilled text) otherwise. */
export function chatLink(lang: Lang, branch: { whatsapp: string; zalo: string }, text = '') {
  return lang === 'vi'
    ? { label: 'Zalo', href: `https://zalo.me/${branch.zalo}` }
    : { label: 'WhatsApp', href: `https://wa.me/${branch.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}` };
}

export function formatDate(iso: string, lang: Lang): string {
  return new Intl.DateTimeFormat(LANG_META[lang].number, { dateStyle: 'long' }).format(new Date(iso));
}

function isShouting(s: string) {
  return s === s.toUpperCase() && /\p{Lu}/u.test(s);
}

/** "HOT TOWEL BEARD SHAVE" -> "Hot towel beard shave" (non-Latin text is left alone). */
export function sentence(s: string) {
  return isShouting(s) ? s.charAt(0) + s.slice(1).toLowerCase() : s;
}

const stripTags = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

/** First sentence of a paragraph, for cards and price rows. */
export function firstSentence(text: string): string {
  const m = text.match(/^.+?[.!?。！？](?=\s|$)/);
  return (m ? m[0] : text).trim();
}

/** Remove the closing "Book …" / "Ask us …" section WordPress pages end with (the template has its own buttons). */
export const dropClosingSection = (html: string) =>
  (html.match(/<h2>/g) ?? []).length >= 3 ? html.replace(/<h2>(?:(?!<h2>).)*$/s, '') : html;

/**
 * A service's WordPress body split for the detail page: the opening paragraph becomes the intro,
 * the "Included / Duration / Price" blocks (shown in the sidebar) and the closing booking section are
 * removed, and the ALL-CAPS service name is re-cased wherever it appears.
 */
const PRICE_SENTENCE = /\s*(?:Giá dịch vụ|Giá|Price|料金|가격|价格|Цена)\s*[:：]?\s*[\d.,\s  –-]+₫\s*[.。]?/g;

export function serviceText(s: Service, lang: Lang): { intro: string; body: string } {
  const tr = s.t[lang];
  const name = displayName(tr.name);
  let body = tr.body.replace(/<p><strong>[^<]*<\/strong><\/p>/g, '');
  const first = body.match(/<p>((?:(?!<\/p>).)*)<\/p>/s);
  const intro = first ? stripTags(first[1]) : '';
  if (first) body = body.replace(first[0], '');
  body = body.replace(/<h3>(?:(?!<h[23]>).)*/gs, '');
  body = dropClosingSection(body);
  // The price box already shows the price, and some bodies repeat the intro word for word.
  const opening = intro.slice(0, 30);
  body = body
    .replace(PRICE_SENTENCE, '')
    .replace(/<p>(?:(?!<\/p>).)*<\/p>/gs, (p) => (opening && stripTags(p).trim().startsWith(opening) ? '' : p))
    .replace(/<p>\s*<\/p>/g, '');
  const recase = (t: string) => (tr.name && tr.name !== name ? t.split(tr.name).join(name) : t);
  return { intro: recase(intro), body: recase(body) };
}

/** "60 min", "60–120 min", "12 services" for the VIP package, or '' when WordPress has no duration. */
export function durationLabel(s: Service, lang: Lang): string {
  // Korean, Japanese and Chinese write the unit straight after the number: "60분", "60分".
  const unit = `${['ko', 'ja', 'zh'].includes(lang) ? '' : ' '}${ui.minutes[lang]}`;
  if (s.duration && s.durationTo) return `${s.duration}–${s.durationTo}${unit}`;
  if (s.duration) return `${s.duration}${unit}`;
  return '';
}

/**
 * Short description for cards: the included items for packages (at most `maxItems`, then "+N"),
 * the first sentence of the intro otherwise.
 */
export function cardText(s: Service, lang: Lang, maxItems = Infinity): string {
  const tr = s.t[lang];
  if ((s.group === 'signature' || s.group === 'relax') && tr.includes.length) {
    const items = tr.includes.map(sentence);
    const shown = items.slice(0, maxItems).join(' · ');
    return items.length > maxItems ? `${shown} · +${items.length - maxItems}` : shown;
  }
  return firstSentence(serviceText(s, lang).intro);
}

/**
 * WordPress page-builder pages leave loose labels and button text between blocks
 * ("View ServicesChoose a Branch"); keep only proper headings, paragraphs and lists.
 */
export function tidyPage(html: string, { dropFirstParagraph = false } = {}): string {
  let out = html.replace(/(<\/(?:h2|h3|h4|p|ul|ol|blockquote)>|^)([^<]+)(?=<|$)/g, '$1').replace(/<a[^>]*>[\s\S]*?<\/a>/g, (m) => (m.includes('<h3>') ? '' : m));
  // The page's own title is rendered by the template.
  out = out.replace(/^<h2>[^<]*<\/h2>/, '');
  if (dropFirstParagraph) out = out.replace(/<p>[\s\S]*?<\/p>/, '');
  return out.trim();
}

/** Re-case the ALL-CAPS names WordPress uses for some services: Title Case for Latin, sentence case for Cyrillic. */
export function displayName(name: string): string {
  if (!isShouting(name)) return name;
  if (/\p{Script=Cyrillic}/u.test(name)) return sentence(name).replace(/\bNhua\b/gi, 'Nhựa').replace(/\bvip\b/gi, 'VIP').replace(/\bpro\b/gi, 'Pro');
  return name
    .toLowerCase()
    .replace(/(^|[\s(/&-])(\p{L})/gu, (_, sep, ch) => sep + ch.toUpperCase())
    .replace(/vip/gi, 'VIP')
    .replace(/\bNhua\b/g, 'Nhựa')
    .replace(/\bPro\b/g, 'Pro');
}

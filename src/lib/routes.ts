import { LANGS, DEFAULT_LANG, type Lang } from '../i18n/langs';

/** The folder the site is served from ("" at the domain root, "/nhua-style" on GitHub Pages). */
export const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export interface Ctx {
  lang: Lang;
}

/** URL prefix of a language: none for Vietnamese, "/en", "/ja"… for the others. */
export const prefixOf = ({ lang }: Ctx): string | undefined => (lang === DEFAULT_LANG ? undefined : lang);

/** Every language, as getStaticPaths entries for `[...prefix]` routes. */
export function contextPaths<T extends Record<string, unknown>>(extra: (ctx: Ctx) => T[] = () => [{} as T]) {
  return LANGS.flatMap((lang) =>
    extra({ lang }).map((params) => ({
      params: { prefix: prefixOf({ lang }), ...params },
      props: { ctx: { lang } as Ctx },
    })),
  );
}

/** Site-relative URL for a page in the given language. */
export function url(ctx: Ctx, path = ''): string {
  const [page, hash] = path.split('#');
  const prefix = prefixOf(ctx);
  const clean = page.replace(/^\/+|\/+$/g, '');
  const joined = [prefix, clean].filter(Boolean).join('/');
  return `${BASE}/${joined}${joined ? '/' : ''}${hash ? `#${hash}` : ''}`;
}

/** Booking page with the form pre-filled (service, barber, branch). */
export function bookingUrl(ctx: Ctx, preset: Record<string, string> = {}): string {
  const query = new URLSearchParams(preset).toString();
  return url(ctx, 'booking') + (query ? `?${query}` : '');
}

/** The same page in another language (used by the switcher and hreflang). */
export const switchLang = (ctx: Ctx, lang: Lang, path: string) => url({ ...ctx, lang }, path);

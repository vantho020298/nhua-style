export const LANGS = ['vi', 'en', 'ja', 'ko', 'zh', 'ru'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'vi';

export const LANG_META: Record<Lang, { label: string; short: string; html: string; og: string; number: string }> = {
  vi: { label: 'Tiếng Việt', short: 'VI', html: 'vi', og: 'vi_VN', number: 'vi-VN' },
  en: { label: 'English', short: 'EN', html: 'en', og: 'en_US', number: 'en-US' },
  ja: { label: '日本語', short: '日本語', html: 'ja', og: 'ja_JP', number: 'ja-JP' },
  ko: { label: '한국어', short: '한국어', html: 'ko', og: 'ko_KR', number: 'ko-KR' },
  zh: { label: '中文', short: '中文', html: 'zh-CN', og: 'zh_CN', number: 'zh-CN' },
  ru: { label: 'Русский', short: 'RU', html: 'ru', og: 'ru_RU', number: 'ru-RU' },
};

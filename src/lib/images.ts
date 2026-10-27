import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/{photos,media}/*.{jpg,jpeg,png,webp}', { eager: true });

/** Image metadata for a file name in src/assets/photos or src/assets/media. */
export function imageMeta(name: string | null | undefined): ImageMetadata | undefined {
  if (!name) return undefined;
  return files[`/src/assets/photos/${name}`]?.default ?? files[`/src/assets/media/${name}`]?.default;
}

/** All shop photos (for the gallery), excluding brand assets and crops used elsewhere. */
export const shopPhotos = Object.entries(files)
  .filter(([p]) => p.startsWith('/src/assets/photos/') && !/logo|wechat-qr/.test(p))
  .map(([p, m]) => ({ name: p.split('/').pop()!, meta: m.default }));

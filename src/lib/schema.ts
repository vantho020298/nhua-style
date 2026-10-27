// schema.org data so search engines can show address, hours and prices.
import { hours, site } from '../config/site';
import { branches, displayName, serviceText, type Service } from './data';
import type { Lang } from '../i18n/langs';
import { BASE, url } from './routes';

const opening = [
  { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: hours.monday.open, closes: hours.monday.close },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: hours.other.open,
    closes: hours.other.close,
  },
];

export function businessSchema(siteUrl: string) {
  const home = new URL(url({ lang: 'vi' }), siteUrl).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: home,
    logo: new URL(`${BASE}/apple-touch-icon.png`, siteUrl).href,
    email: site.email,
    sameAs: Object.values(site.social),
    subOrganization: branches.map((b) => ({
      '@type': 'HairSalon',
      '@id': new URL(url({ lang: 'vi' }, `locations#${b.key}`), siteUrl).href,
      name: b.name,
      telephone: `+84${b.phone.replace(/^0/, '')}`,
      priceRange: '₫₫',
      address: {
        '@type': 'PostalAddress',
        streetAddress: b.address.split(',').slice(0, 2).join(','),
        addressLocality: 'Đà Nẵng',
        addressRegion: 'Đà Nẵng',
        addressCountry: 'VN',
      },
      hasMap: b.mapUrl,
      openingHoursSpecification: opening,
    })),
  };
}

export function serviceSchema(s: Service, lang: Lang, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: displayName(s.t[lang].name),
    description: serviceText(s, lang).intro,
    url: pageUrl,
    provider: { '@type': 'Organization', name: site.name, url: new URL(url({ lang: 'vi' }), pageUrl).href, email: site.email },
    areaServed: 'Đà Nẵng',
    ...(s.priceTo
      ? { offers: { '@type': 'AggregateOffer', lowPrice: s.price, highPrice: s.priceTo, priceCurrency: 'VND' } }
      : s.price ? { offers: { '@type': 'Offer', price: s.price, priceCurrency: 'VND' } } : {}),
  };
}

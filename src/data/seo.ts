import type { City } from './cities';
import { getServiceByLocalSlug, type Service } from './services';

export const SITE_URL = 'https://www.scalecompany.com.br';

export const organizationId = `${SITE_URL}/#organization`;
export const websiteId = `${SITE_URL}/#website`;

export const brand = {
  name: 'Scale',
  legalName: 'Scale Marketing Digital',
  url: SITE_URL,
  telephone: '+55-22-99764-7844',
  email: 'contato@scalecompany.com.br',
  logo: `${SITE_URL}/assets/brand/logo.png`,
  image: `${SITE_URL}/assets/brand/og-default.jpg`,
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-18:00',
  address: {
    streetAddress: 'Av. Hugo Musso, Sala 105 - Estilo Center',
    addressLocality: 'Vila Velha',
    addressRegion: 'ES',
    postalCode: '29101-280',
    addressCountry: 'BR',
  },
  areaServed: ['Vila Velha', 'Vitoria', 'Serra', 'Cariacica', 'Guarapari', 'Espirito Santo'],
  sameAs: [] as string[],
};

export const nicheLocalServices: Record<string, Pick<Service, 'name' | 'description' | 'keywords' | 'localSlug' | 'slug' | 'shortDesc'>> = {
  'marketing-juridico': {
    name: 'Marketing Juridico',
    slug: 'marketing-juridico',
    localSlug: 'marketing-juridico',
    shortDesc: 'Marketing juridico, SEO local e conteudo para escritorios de advocacia.',
    description:
      'Marketing juridico com SEO local, conteudo informativo, site e presenca digital para escritorios de advocacia.',
    keywords: [
      'marketing juridico',
      'marketing para advogados',
      'seo para advogados',
      'publicidade digital para advogados',
    ],
  },
  'google-ads-para-advogados': {
    name: 'Google Ads para Advogados',
    slug: 'google-ads-para-advogados',
    localSlug: 'google-ads-para-advogados',
    shortDesc: 'Campanhas de Google Ads para escritorios de advocacia.',
    description:
      'Gestao de Google Ads para advogados e escritorios de advocacia com foco em demanda qualificada e comunicacao alinhada a etica profissional.',
    keywords: [
      'google ads para advogados',
      'trafego pago para advogados',
      'campanhas para escritorios de advocacia',
      'leads juridicos',
    ],
  },
};

export function getCanonicalUrl(pathname: string, siteUrl = SITE_URL) {
  return new URL(pathname, siteUrl).href;
}

export function getLocalBusinessId(city: City, siteUrl = SITE_URL) {
  return `${siteUrl}/${city.slug}#localbusiness`;
}

export function resolveLocalService(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  const localSlug = segments[1];
  if (!localSlug) return undefined;

  return getServiceByLocalSlug(localSlug) ?? nicheLocalServices[localSlug];
}

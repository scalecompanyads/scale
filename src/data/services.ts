// =============================================================================
// services.ts — Serviços principais da Scale + páginas legadas (ex.: sites)
// =============================================================================

export interface Service {
  id: string;
  name: string;
  slug: string;
  localSlug: string;
  description: string;
  shortDesc: string;
  icon: string;
  volume: string;
  tags: string[];
  upsell?: string;
  keywords: string[];
  /** Subitens exibidos no hub (ex.: artes dentro de redes) */
  includes?: string[];
}

/**
 * Quatro frentes principais (hub / menu / home pinned).
 * Ordem: tráfego primeiro, depois landing, SEO e redes/conteúdo.
 */
export const services: Service[] = [
  {
    id: 'trafego-pago',
    name: 'Tráfego Pago',
    slug: 'trafego-pago',
    localSlug: 'trafego-pago',
    description:
      'Gestão profissional de Google Ads e Meta Ads com foco em ROAS. Relatórios em linguagem de negócio, otimização contínua e alinhamento com o time comercial.',
    shortDesc: 'Google Ads, Meta Ads e performance com relatórios claros.',
    includes: [
      'Automações de campanhas, públicos e remarketing',
      'Treinamento comercial alinhado à captação de leads',
    ],
    icon: '💰',
    volume: '~6.600 buscas/mês',
    tags: ['Alta conversão', 'Recorrente'],
    upsell: 'Landing Pages',
    keywords: [
      'tráfego pago para empresas',
      'gestão google ads',
      'gestão meta ads',
      'agência de tráfego pago',
    ],
  },
  {
    id: 'landing-pages',
    name: 'Criação de Landing Pages',
    slug: 'criacao-de-landing-pages',
    localSlug: 'criacao-de-landing-pages',
    description:
      'Páginas de alta conversão para campanhas de tráfego, lançamentos e captação de leads — com design focado em resultado.',
    shortDesc: 'Páginas de conversão para campanhas e lançamentos.',
    icon: '⚡',
    volume: '~8.100 buscas/mês est.',
    tags: ['Alta intenção', 'Campanhas'],
    upsell: 'Tráfego Pago',
    keywords: [
      'criação de landing page',
      'landing page profissional',
      'landing page para google ads',
      'página de conversão',
    ],
  },
  {
    id: 'seo',
    name: 'Consultoria de SEO',
    slug: 'consultoria-seo',
    localSlug: 'seo',
    description:
      'Consultoria e gestão mensal de SEO: auditoria técnica, otimização on-page, produção de conteúdo estratégico e link building.',
    shortDesc: 'SEO técnico, conteúdo e autoridade no Google.',
    icon: '🔍',
    volume: '~3.600 buscas/mês',
    tags: ['Orgânico', 'Recorrente'],
    upsell: 'Conteúdo para redes',
    keywords: [
      'consultoria de SEO',
      'agência de SEO',
      'otimização de site para Google',
      'posicionamento no Google',
    ],
  },
  {
    id: 'redes-sociais',
    name: 'Gestão de Redes Sociais',
    slug: 'gestao-redes-sociais',
    localSlug: 'gestao-redes-sociais',
    description:
      'Presença digital consistente: estratégia, calendário editorial, criação de peças e acompanhamento de métricas que importam para o negócio.',
    shortDesc: 'Estratégia, conteúdo e criação de artes para suas redes.',
    includes: [
      'Criação de artes e peças para redes sociais',
      'Calendário editorial e ritmo de publicação',
    ],
    icon: '📱',
    volume: '~9.900 buscas/mês',
    tags: ['Recorrente', 'Marca'],
    upsell: 'Tráfego Pago',
    keywords: [
      'gestão de redes sociais',
      'social media para empresas',
      'criação de conteúdo para redes sociais',
    ],
  },
];

/** Páginas que seguem no ar fora dos 4 pilares (SEO / links legados) */
export const legacyServices: Service[] = [
  {
    id: 'criacao-de-sites',
    name: 'Criação de Sites',
    slug: 'criacao-de-sites',
    localSlug: 'criacao-de-sites',
    description:
      'Sites institucionais responsivos com SEO técnico incluso: velocidade otimizada, CMS para edição fácil e entrega em até 30 dias.',
    shortDesc: 'Sites institucionais com SEO e CMS incluso',
    icon: '🌐',
    volume: '~33.000 buscas/mês est.',
    tags: ['Projeto', 'Alto volume'],
    upsell: 'SEO + Redes Sociais',
    keywords: [
      'criação de site para empresa',
      'criar site profissional',
      'desenvolvimento de site',
      'site institucional para empresa',
    ],
  },
];

const allServicesList: Service[] = [...services, ...legacyServices];

export function getServiceBySlug(slug: string): Service | undefined {
  return allServicesList.find((s) => s.slug === slug);
}

export function getServiceByLocalSlug(localSlug: string): Service | undefined {
  return allServicesList.find((s) => s.localSlug === localSlug);
}

/** Select de contato: pilares + criação de sites */
export const contactServices: Service[] = [...services, ...legacyServices];

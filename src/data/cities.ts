// =============================================================================
// cities.ts — Dados das cidades alvo para SEO local
// =============================================================================

export interface City {
  id: string;
  name: string;
  /** Slug usado na URL: /[slug]/servico */
  slug: string;
  state: string;
  stateAbbr: string;
  /** DDD da cidade */
  ddd?: string;
  /**
   * Fase de prioridade:
   * 1 = Semana 1 (Vila Velha)
   * 2 = Mês 2–3 (Vitória, Serra)
   * 3 = Mês 4+ (Hub estadual)
   */
  phase: 1 | 2 | 3;
  phaseLabel: string;
  /** Bairros mencionados nas páginas locais (Vila Velha) */
  neighborhoods?: string[];
  /** Quais serviços têm página local nessa cidade */
  services: string[]; // service.localSlug[]
}

export const cities: City[] = [
  {
    id: 'vila-velha',
    name: 'Vila Velha',
    slug: 'vila-velha',
    state: 'Espírito Santo',
    stateAbbr: 'ES',
    ddd: '27',
    phase: 1,
    phaseLabel: 'Fase 1 — Semana 1 — foco principal',
    neighborhoods: [
      'Glória',
      'Praia da Costa',
      'Itapoã',
      'Coqueiral de Itaparica',
      'Terra Vermelha',
    ],
    services: [
      'criacao-de-sites',
      'criacao-de-landing-pages',
      'seo',
      'gestao-redes-sociais',
      'trafego-pago',
    ],
  },
  {
    id: 'vitoria',
    name: 'Vitória',
    slug: 'vitoria',
    state: 'Espírito Santo',
    stateAbbr: 'ES',
    ddd: '27',
    phase: 2,
    phaseLabel: 'Fase 2 — Mês 2',
    services: ['criacao-de-sites', 'seo', 'trafego-pago', 'gestao-redes-sociais', 'criacao-de-landing-pages'],
  },
  {
    id: 'serra',
    name: 'Serra',
    slug: 'serra',
    state: 'Espírito Santo',
    stateAbbr: 'ES',
    ddd: '27',
    phase: 2,
    phaseLabel: 'Fase 2 — Mês 3',
    services: ['criacao-de-sites', 'seo', 'trafego-pago'],
  },
  {
    id: 'espirito-santo',
    name: 'Espírito Santo',
    slug: 'espirito-santo',
    state: 'Espírito Santo',
    stateAbbr: 'ES',
    phase: 3,
    phaseLabel: 'Fase 3 — Mês 4+ — hub estadual',
    services: ['criacao-de-sites', 'criacao-de-landing-pages', 'seo', 'gestao-redes-sociais', 'trafego-pago'],
  },
  {
    id: 'cariacica',
    name: 'Cariacica',
    slug: 'cariacica',
    state: 'Espírito Santo',
    stateAbbr: 'ES',
    ddd: '27',
    phase: 2,
    phaseLabel: 'Fase 2 — Trimestre 2',
    services: ['criacao-de-sites', 'trafego-pago'],
  },
  {
    id: 'guarapari',
    name: 'Guarapari',
    slug: 'guarapari',
    state: 'Espírito Santo',
    stateAbbr: 'ES',
    ddd: '28',
    phase: 2,
    phaseLabel: 'Fase 2 — Trimestre 2',
    services: ['criacao-de-sites', 'seo'],
  },
  {
    id: 'linhares',
    name: 'Linhares',
    slug: 'linhares',
    state: 'Espírito Santo',
    stateAbbr: 'ES',
    ddd: '27',
    phase: 3,
    phaseLabel: 'Fase 3 — Trimestre 3',
    services: ['criacao-de-sites'],
  },
  {
    id: 'cachoeiro-de-itapemirim',
    name: 'Cachoeiro de Itapemirim',
    slug: 'cachoeiro-de-itapemirim',
    state: 'Espírito Santo',
    stateAbbr: 'ES',
    ddd: '28',
    phase: 3,
    phaseLabel: 'Fase 3 — Trimestre 3',
    services: ['criacao-de-sites', 'seo'],
  },
];

/** Retorna uma cidade pelo slug */
export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/** Retorna apenas cidades de uma fase específica */
export function getCitiesByPhase(phase: 1 | 2 | 3): City[] {
  return cities.filter((c) => c.phase === phase);
}

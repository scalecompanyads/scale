// =============================================================================
// trafegoPagoSearchArchitecture.ts — Mapa de palavras-chave e superfícies SEO
// Serviço: Tráfego pago (Google Ads e Meta Ads). Sem volumes de busca inventados:
// usar Google Keyword Planner / Search Console para priorizar.
// =============================================================================

/** Intenção de busca (alinhado ao planeamento de conteúdo) */
export type SearchIntentKind =
  | 'informational'
  | 'commercial'
  | 'transactional'
  | 'navigational';

/**
 * Onde o termo deve ser coberto no site.
 * - servicos_nacional: página money /servicos/trafego-pago
 * - servicos_local: /{cidade}/trafego-pago (só cidades com página publicada)
 * - blog: artigos (pilar, suporte ou conversão)
 * - combinacao: mais de uma superfície ou cruzamento local+nacional
 */
export type SurfaceKind =
  | 'servicos_nacional'
  | 'servicos_local'
  | 'blog'
  | 'combinacao';

/** Papel do conteúdo na arquitetura */
export type ContentRole = 'pillar' | 'support' | 'conversion' | 'local_money';

export interface TrafegoPagoKeywordTerm {
  /** Termo ou frase em PT-BR (pode repetir com variação de intenção) */
  term: string;
  intent: SearchIntentKind;
  role: ContentRole;
  surface: SurfaceKind;
  /** Observações para copy e cluster (não são números de mercado) */
  notes?: string;
}

/**
 * Termos agrupados por tema. Expandir com pesquisa (Planner, sugestões Google,
 * concorrentes, perguntas “People also ask”).
 */
export const trafegoPagoKeywordTerms: TrafegoPagoKeywordTerm[] = [
  // --- Núcleo do serviço (head + definição) ---
  {
    term: 'tráfego pago',
    intent: 'informational',
    role: 'pillar',
    surface: 'blog',
    notes: 'Definição + funil; artigo pilar ou secção forte na página nacional.',
  },
  {
    term: 'tráfego pago para empresas',
    intent: 'commercial',
    role: 'pillar',
    surface: 'combinacao',
    notes: 'Coberto no blog existente; reforçar título/H2 e links para /servicos/trafego-pago.',
  },
  {
    term: 'o que é tráfego pago',
    intent: 'informational',
    role: 'support',
    surface: 'blog',
    notes: 'Ótimo para FAQ + bloco “Próximos passos” para serviço.',
  },
  {
    term: 'como funciona tráfego pago',
    intent: 'informational',
    role: 'support',
    surface: 'blog',
    notes: 'Alinhar ao artigo atual ou novo guia em cluster.',
  },
  {
    term: 'mídia paga',
    intent: 'informational',
    role: 'support',
    surface: 'blog',
    notes: 'Sinónimo útil; pode ser H2 ou glossário.',
  },
  {
    term: 'marketing de performance',
    intent: 'commercial',
    role: 'support',
    surface: 'servicos_nacional',
    notes: 'Linguagem corporativa; usar na página de serviço e CTAs.',
  },

  // --- Google Ads ---
  {
    term: 'google ads',
    intent: 'informational',
    role: 'support',
    surface: 'blog',
    notes: 'Conteúdo educativo + link para gestão na Scale.',
  },
  {
    term: 'gestão de google ads',
    intent: 'commercial',
    role: 'conversion',
    surface: 'servicos_nacional',
    notes: 'Keyword principal da oferta; deve estar no title/H1 da página nacional.',
  },
  {
    term: 'agência google ads',
    intent: 'transactional',
    role: 'conversion',
    surface: 'combinacao',
    notes: 'Nacional + local “agência google ads [cidade]” onde houver página.',
  },
  {
    term: 'anúncios no google',
    intent: 'informational',
    role: 'support',
    surface: 'blog',
    notes: 'Variação leiga; bom para FAQ.',
  },
  {
    term: 'quanto custa google ads',
    intent: 'commercial',
    role: 'conversion',
    surface: 'blog',
    notes: 'Artigo “quanto custa” sem inventar valores; ranges ou fatores.',
  },

  // --- Meta / Facebook / Instagram ---
  {
    term: 'meta ads',
    intent: 'informational',
    role: 'support',
    surface: 'blog',
    notes: 'Explicar diferença vs Google.',
  },
  {
    term: 'gestão de meta ads',
    intent: 'commercial',
    role: 'conversion',
    surface: 'servicos_nacional',
    notes: 'Espelhar na página de serviço e cases (sem números não aprovados).',
  },
  {
    term: 'tráfego pago instagram',
    intent: 'commercial',
    role: 'support',
    surface: 'blog',
    notes: 'Intenção de canal; pode virar artigo de suporte ao cluster.',
  },
  {
    term: 'facebook ads para empresas',
    intent: 'commercial',
    role: 'support',
    surface: 'blog',
    notes: 'B2B/B2C conforme posicionamento da Scale.',
  },

  // --- Profissão / contratação ---
  {
    term: 'gestor de tráfego',
    intent: 'commercial',
    role: 'conversion',
    surface: 'combinacao',
    notes: 'Nacional + páginas locais “gestor de tráfego em [cidade]” (futuro).',
  },
  {
    term: 'agência de tráfego pago',
    intent: 'transactional',
    role: 'conversion',
    surface: 'combinacao',
    notes: 'Marca + prova social na home e /servicos/trafego-pago.',
  },
  {
    term: 'empresa de tráfego pago',
    intent: 'transactional',
    role: 'conversion',
    surface: 'servicos_nacional',
    notes: 'Sinónimo de agência; usar em H2 e meta.',
  },

  // --- Métricas e intenção avançada (conteúdo + conversão) ---
  {
    term: 'roas google ads',
    intent: 'informational',
    role: 'support',
    surface: 'blog',
    notes: 'Artigo ou secção; ligar a diagnóstico.',
  },
  {
    term: 'custo por lead meta ads',
    intent: 'commercial',
    role: 'support',
    surface: 'blog',
    notes: 'Explicar variáveis; sem inventar métricas de clientes.',
  },
  {
    term: 'remarketing',
    intent: 'informational',
    role: 'support',
    surface: 'blog',
    notes: 'Tópico de suporte ao pilar de tráfego pago.',
  },

  // --- Local (Espírito Santo) — modelo: repetir por cidade com página ---
  {
    term: 'tráfego pago vila velha',
    intent: 'transactional',
    role: 'local_money',
    surface: 'servicos_local',
    notes: 'URL alvo: /vila-velha/trafego-pago (já existe).',
  },
  {
    term: 'gestão google ads vitória',
    intent: 'transactional',
    role: 'local_money',
    surface: 'combinacao',
    notes: 'Criar /vitoria/trafego-pago quando existir página; até lá reforçar blog+ES.',
  },
  {
    term: 'agência tráfego pago espírito santo',
    intent: 'transactional',
    role: 'conversion',
    surface: 'combinacao',
    notes: 'Hub estadual + páginas locais conforme forem publicadas.',
  },
];

/** URLs já previstas no site para este serviço (atualizar quando criar novas rotas) */
export const trafegoPagoExistingCoverage: readonly {
  path: string;
  type: 'money_national' | 'money_local' | 'blog';
}[] = [
  { path: '/servicos/trafego-pago', type: 'money_national' },
  { path: '/vila-velha/trafego-pago', type: 'money_local' },
  { path: '/vila-velha', type: 'money_local' },
  { path: '/blog/como-funciona-trafego-pago-para-empresas', type: 'blog' },
  { path: '/blog/metricas-e-roas-em-trafego-pago-guia-para-empresas', type: 'blog' },
];

/**
 * Estrutura de camadas (resumo operacional):
 *
 * 1) Money nacional — /servicos/trafego-pago
 *    Foco: intenção comercial/transactional, prova, serviço, CTA.
 *
 * 2) Money local — /{cidade}/trafego-pago (só onde houver página)
 *    Foco: cidade + serviço + DDD/região; NAP alinhado ao Google Business.
 *
 * 3) Blog — cluster tráfego pago
 *    - Pilar: definição + “como funciona” + diferença canais.
 *    - Suporte: métricas, remarketing, custos (sem valores inventados).
 *    - Conversão: “quanto custa”, “gestor em X”, “empresa de tráfego pago em X”.
 *
 * 4) Interligação: sempre que fizer sentido, blog → serviço nacional + página local
 *    da mesma cidade (nunca cruzar cidade errada).
 */
export const trafegoPagoLayerStrategy = {
  moneyNationalPath: '/servicos/trafego-pago',
  blogCategory: 'trafego-pago' as const,
  localSlug: 'trafego-pago' as const,
};

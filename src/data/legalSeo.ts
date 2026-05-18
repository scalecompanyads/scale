export interface LegalArea {
  id: string;
  name: string;
  slug: string;
  audience: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  marketThesis: string;
  budgetLeak: string;
  technologyAngle: string;
  caseFrame: {
    before: string;
    intervention: string;
    evidenceToInsert: string;
  };
  corePain: string;
  paidIntent: string;
  landingStrategy: string;
  seoAsset: string;
  complianceNote: string;
  searchAngles: string[];
  funnelMetrics: string[];
  contentBlocks: Array<{
    title: string;
    desc: string;
  }>;
  qualifyingQuestions: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface LegalCaseStudy {
  areaId: string;
  clientName: string;
  context: string;
  before: string;
  intervention: string;
  results: Array<{
    value: string;
    label: string;
  }>;
  note?: string;
}

export const legalOffer = {
  name: 'Motor de Captação Jurídica',
  slug: 'trafego-pago-para-advogados',
  shortDescription:
    'Google Ads, Meta Ads, landing pages em Astro, SEO técnico e acompanhamento comercial para escritórios de advocacia.',
  description:
    'Uma operação de aquisição para escritórios que precisam gerar demanda qualificada com velocidade, sem abandonar a construção de autoridade orgânica.',
  promise:
    'Mais controle sobre demanda, leitura de qualidade dos leads e uma base digital pronta para campanhas e SEO.',
};

export const oabCompliance = {
  sourceName: 'Provimento 205/2021 do Conselho Federal da OAB',
  sourceUrl: 'https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021',
  principles: [
    'Informação objetiva e verdadeira',
    'Comunicação compatível com os preceitos éticos',
    'Sem promessa de resultado',
    'Sem uso de caso concreto para oferta de atuação profissional',
    'Sem sensacionalismo ou urgência artificial',
    'Validação final pelo escritório antes da veiculação',
  ],
};

export const acquisitionPillars = [
  {
    title: 'Google Ads de fundo de funil',
    desc: 'Campanhas para capturar busca ativa por problema, área de atuação e momento de decisão.',
    metric: 'CPL, taxa de contato e custo por oportunidade qualificada',
  },
  {
    title: 'Meta Ads para aquecimento',
    desc: 'Criativos informativos para reforçar autoridade e alimentar remarketing sem abordagem apelativa.',
    metric: 'CTR, retenção de vídeo, custo por conversa e frequência',
  },
  {
    title: 'Landing page em Astro',
    desc: 'Página rápida, sóbria e objetiva para reduzir atrito, aumentar confiança e melhorar conversão.',
    metric: 'Taxa de conversão, velocidade, scroll e eventos de formulário',
  },
  {
    title: 'SEO como ativo',
    desc: 'Conteúdo e arquitetura para o escritório depender menos de mídia paga ao longo do tempo.',
    metric: 'Impressão orgânica, cliques, posições e páginas indexadas',
  },
  {
    title: 'Leitura comercial dos leads',
    desc: 'Acompanhamento da qualidade dos contatos, não apenas do volume bruto gerado pela campanha.',
    metric: 'Agendamentos, comparecimento, propostas e contratos',
  },
];

export const technologyImpactCards = [
  {
    title: 'Clique pago não perdoa site lento',
    desc:
      'Quando a página demora para abrir no 4G, o escritório paga pelo clique e perde a conversa antes do formulário. Landing em Astro reduz esse desperdício.',
  },
  {
    title: 'Velocidade muda a qualidade da verba',
    desc:
      'Página rápida, headline direta e formulário curto aumentam a chance de transformar busca ativa em contato real, sem inflar o investimento de mídia.',
  },
  {
    title: 'Eventos certos revelam o gargalo',
    desc:
      'Não basta medir visita. Acompanhamos clique em WhatsApp, abertura de formulário, envio, origem da campanha e etapa comercial posterior.',
  },
];

export const legalTeam: TeamMember[] = [
  {
    name: 'Leonardo Carmo',
    role: 'CMO',
    image: '/images/image 60.png',
  },
  {
    name: 'Matheus Malaquias',
    role: 'Supervisor do time de criação',
    image: '/images/image 61.png',
  },
  {
    name: 'Isabela Trannin',
    role: 'Account Manager',
    image: '/images/image 62.png',
  },
  {
    name: 'Pedro Henrique',
    role: 'Supervisor de Projetos',
    image: '/images/image 63.png',
  },
  {
    name: 'Hyandra Oliveira',
    role: 'Account Manager',
    image: '/images/image 64.png',
  },
  {
    name: 'Pedro Henryque',
    role: 'Supervisor de Projetos',
    image: '/images/image_65.png',
  },
];

export const legalProofAssets = {
  videoEmbeds: ['https://www.youtube.com/embed/hZxR3DadbTg', 'https://www.youtube.com/embed/4V0ArJKXb-4'],
  testimonialScreenshots: Array.from({ length: 19 }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    return `/images/testimonials/testimonial-${n}.png`;
  }),
};

export const legalCaseStudies: LegalCaseStudy[] = [];

export const legalAreas: LegalArea[] = [
  {
    id: 'criminal',
    name: 'Advogados Criminalistas',
    slug: 'advogados-criminalistas',
    audience: 'escritórios e bancas de advocacia criminal',
    headline: 'Captação sóbria para advogados criminalistas.',
    metaTitle: 'Tráfego Pago para Advogados Criminalistas | Scale',
    metaDescription:
      'Google Ads, landing pages e funil comercial para advogados criminalistas com comunicação informativa e alinhada ao Provimento 205/2021.',
    marketThesis:
      'Na advocacia criminal, o concorrente mais perigoso nem sempre é o melhor tecnicamente. Muitas vezes é quem aparece primeiro, responde rápido e transmite segurança sem explorar o medo do cliente.',
    budgetLeak:
      'A verba costuma vazar em buscas amplas demais, curiosos, contatos fora da área de atuação e páginas que pedem detalhes sensíveis antes de construir confiança.',
    technologyAngle:
      'Uma landing rápida e discreta diminui abandono em buscas urgentes. O usuário que pesquisa pelo celular precisa entender em poucos segundos se pode pedir orientação sem expor o caso publicamente.',
    caseFrame: {
      before:
        'Escritório recebendo contatos misturados: dúvidas sem caso real, urgências fora da cidade atendida e formulários com baixa clareza.',
      intervention:
        'Separação entre termos de urgência, defesa técnica e conteúdo informativo; landing com triagem leve e eventos por tipo de contato.',
      evidenceToInsert:
        'Inserir redução de CPL válido, percentual de contatos com caso real e tempo médio até primeiro atendimento.',
    },
    corePain:
      'O cliente costuma estar em uma situação sensível, com urgência real, mas a comunicação não pode parecer exploração do medo.',
    paidIntent:
      'Priorizar termos de alta intenção ligados a flagrante, inquérito, audiência, defesa criminal e orientação jurídica, com filtros para reduzir contatos fora do perfil.',
    landingStrategy:
      'Landing page direta, discreta e rápida, com explicacao do atendimento, áreas de experiência e formulário que evita exposição desnecessaria do caso.',
    seoAsset:
      'Conteúdos educativos sobre etapas do processo penal, direitos do investigado, audiência de custodia e diferenças entre atuações criminais.',
    complianceNote:
      'Evitar qualquer linguagem de garantia, urgência artificial, exploração emocional ou promessa de absolucao.',
    searchAngles: [
      'advogado criminalista para flagrante',
      'defesa criminal como funciona',
      'advogado para inquérito policial',
      'audiência de custodia dúvidas',
    ],
    funnelMetrics: [
      'custo por conversa válida',
      'percentual de contatos com caso real',
      'tempo até primeiro atendimento',
      'reuniões agendadas',
    ],
    contentBlocks: [
      {
        title: 'Busca com urgência, atendimento com sobriedade',
        desc: 'A campanha precisa aparecer no momento certo, mas a página deve transmitir orientação e responsabilidade, não promessa.',
      },
      {
        title: 'Filtro de qualidade desde o formulário',
        desc: 'Perguntas simples ajudam a separar curiosidade, urgência real e demanda fora da área de atuação.',
      },
      {
        title: 'Remarketing institucional',
        desc: 'Aquecimento deve reforçar autoridade e disponibilidade de contato, sem perseguir o usuário com mensagens sensacionalistas.',
      },
    ],
    qualifyingQuestions: [
      'A demanda envolve flagrante, inquérito, processo ou orientação preventiva?',
      'A cidade de atendimento está dentro da capacidade do escritório?',
      'O contato tem urgência real ou está apenas pesquisando valores?',
    ],
  },
  {
    id: 'previdenciario',
    name: 'Advogados Previdenciários',
    slug: 'advogados-previdenciarios',
    audience: 'escritórios focados em aposentadoria, benefícios e revisões',
    headline: 'Demanda previsível para escritórios previdenciarios.',
    metaTitle: 'Tráfego Pago para Advogados Previdenciários | Scale',
    metaDescription:
      'Campanhas, landing pages e SEO para advogados previdenciários que querem qualificar contatos por benefício, etapa e perfil do segurado.',
    marketThesis:
      'No previdenciário, volume bruto engana. O escritório cresce quando separa dúvida inicial, benefício negado, planejamento e casos com documentação mínima para análise.',
    budgetLeak:
      'A verba se perde quando aposentadoria, BPC, revisão e auxílio-doença caem na mesma campanha e o atendimento precisa explicar tudo do zero para cada contato.',
    technologyAngle:
      'A landing em Astro ajuda a organizar uma triagem rápida por benefício e etapa do pedido, mantendo a experiência leve para usuarios que acessam pelo celular.',
    caseFrame: {
      before:
        'Muitos leads perguntando valor, sem documentos ou sem etapa definida no INSS.',
      intervention:
        'Campanhas por benefício, formulários com etapa do pedido e conteúdos de suporte para educar antes da conversa comercial.',
      evidenceToInsert:
        'Inserir custo por lead com documento, taxa de triagem concluída e reuniões de análise agendadas.',
    },
    corePain:
      'Existe alto volume de dúvidas, mas muitos contatos chegam sem documentos, sem etapa definida ou com expectativa desalinhada.',
    paidIntent:
      'Separar campanhas por aposentadoria, BPC/LOAS, auxílio-doença, revisão e planejamento previdenciário.',
    landingStrategy:
      'Página com triagem por tipo de benefício, etapa do pedido, documentação e cidade, reduzindo conversas improdutivas.',
    seoAsset:
      'Guias sobre requisitos, documentos, prazos e erros comuns, sempre com tom educativo e sem promessa de concessao.',
    complianceNote:
      'Evitar prometer concessão, prazo garantido ou resultado em benefício. O foco deve ser orientação e avaliação individual.',
    searchAngles: [
      'advogado aposentadoria por idade',
      'benefício negado o que fazer',
      'bpc loas advogado',
      'planejamento previdenciário vale a pena',
    ],
    funnelMetrics: [
      'custo por lead com documento',
      'taxa de triagem concluída',
      'reuniões de análise agendadas',
      'origem por tipo de benefício',
    ],
    contentBlocks: [
      {
        title: 'Campanhas por benefício',
        desc: 'Separar intenções evita misturar aposentadoria, revisão e benefícios assistenciais na mesma leitura de performance.',
      },
      {
        title: 'Triagem antes do atendimento',
        desc: 'O formulário pode capturar tipo de benefício, etapa atual e disponibilidade de documentos.',
      },
      {
        title: 'SEO de dúvidas recorrentes',
        desc: 'Conteúdos bem estruturados educam o segurado e reduzem o custo de explicacao no atendimento.',
      },
    ],
    qualifyingQuestions: [
      'Qual benefício ou revisão o contato busca?',
      'O pedido já foi feito no INSS?',
      'O contato possui documentos mínimos para análise?',
    ],
  },
  {
    id: 'trabalhista',
    name: 'Advogados Trabalhistas',
    slug: 'advogados-trabalhistas',
    audience: 'escritórios trabalhistas para reclamante, empresa ou consultivo',
    headline: 'Campanhas trabalhistas com segmentação por tipo de demanda.',
    metaTitle: 'Tráfego Pago para Advogados Trabalhistas | Scale',
    metaDescription:
      'Google Ads e landing pages para advogados trabalhistas com segmentação por reclamante, empresa, rescisão, verbas e consultivo.',
    marketThesis:
      'No trabalhista, a mesma busca pode esconder negócios completamente diferentes. Uma campanha madura separa empregado, empresa e consultivo antes de medir performance.',
    budgetLeak:
      'O desperdício aparece quando leads de reclamante, defesa empresarial e consultoria preventiva entram pelo mesmo anúncio e recebem a mesma página.',
    technologyAngle:
      'Uma landing rápida com caminhos separados reduz friccao e evita que o escritório pague por cliques que nunca teriam fit comercial.',
    caseFrame: {
      before:
        'Campanhas misturando perfis, custo por lead aparentemente bom e baixa taxa de proposta relevante.',
      intervention:
        'Segmentação por perfil de cliente, perguntas sobre relação de trabalho e páginas com argumento específico por demanda.',
      evidenceToInsert:
        'Inserir CPL por perfil, percentual de casos com documentos e taxa de proposta enviada.',
    },
    corePain:
      'A mesma palavra-chave pode trazer trabalhador, empresa, dúvida simples ou caso sem viabilidade econômica.',
    paidIntent:
      'Separar reclamante, defesa empresarial e consultivo trabalhista para não contaminar custo por lead e taxa de fechamento.',
    landingStrategy:
      'Página com caminhos distintos para empregado, empresa e demanda preventiva, evitando formulários genericos.',
    seoAsset:
      'Conteúdos sobre rescisão, horas extras, assédio, vínculo, defesa trabalhista e rotinas preventivas para empresas.',
    complianceNote:
      'Evitar promessa de indenização, cálculos chamativos ou comunicação que estimule litígio de forma mercantilizada.',
    searchAngles: [
      'advogado trabalhista rescisão',
      'verbas rescisórias dúvidas',
      'defesa trabalhista para empresa',
      'consultoria trabalhista preventiva',
    ],
    funnelMetrics: [
      'origem por perfil de cliente',
      'custo por lead qualificado',
      'percentual de casos com documentos',
      'propostas enviadas',
    ],
    contentBlocks: [
      {
        title: 'Separação entre reclamante e empresa',
        desc: 'Cada público tem linguagem, dor, página e critério de conversão diferentes.',
      },
      {
        title: 'Qualificacao por viabilidade',
        desc: 'A triagem deve identificar contrato, datas, provas e expectativa antes de consumir agenda.',
      },
      {
        title: 'Conteúdo sem incentivo indevido',
        desc: 'Explicar direitos e riscos é diferente de induzir litígio com promessa de ganho.',
      },
    ],
    qualifyingQuestions: [
      'O contato é trabalhador, empresa ou gestor?',
      'A relação de trabalho já terminou?',
      'Existem documentos, mensagens ou provas relevantes?',
    ],
  },
  {
    id: 'familia',
    name: 'Advogados de Família',
    slug: 'advogados-de-familia',
    audience: 'escritórios que atuam com divórcio, guarda, alimentos e inventário',
    headline: 'Aquisição para Direito de Família com cuidado e clareza.',
    metaTitle: 'Tráfego Pago para Advogados de Família | Scale',
    metaDescription:
      'Estratégia de tráfego pago, landing page e SEO para advogados de família com comunicação cuidadosa, informativa e orientada a triagem.',
    marketThesis:
      'Em Direito de Família, conversão nasce de privacidade e clareza. O escritório precisa aparecer quando a pessoa procura ajuda, mas sem transformar dor familiar em chamada agressiva.',
    budgetLeak:
      'A verba vaza quando divórcio, guarda, alimentos e inventário são tratados como uma única demanda emocional, sem distinguir urgência, acordo e documentação.',
    technologyAngle:
      'A landing precisa abrir rápido e permitir um primeiro contato discreto, sem obrigar o usuário a narrar detalhes sensíveis em público ou em formulários longos.',
    caseFrame: {
      before:
        'Contatos emocionalmente carregados, pouco qualificados e com dificuldade de explicar o momento do caso.',
      intervention:
        'Campanhas por tipo de demanda, copy acolhedora e triagem objetiva sobre acordo, documentos e urgência.',
      evidenceToInsert:
        'Inserir custo por contato com demanda definida, taxa de comparecimento e agendamentos por tipo de caso.',
    },
    corePain:
      'A demanda costuma envolver emoção, conflito e urgência, mas a comunicação precisa preservar dignidade e sobriedade.',
    paidIntent:
      'Campanhas separadas por divórcio, guarda, alimentos, inventário e planejamento familiar, com palavras negativas para reduzir curiosidade.',
    landingStrategy:
      'Página acolhedora e objetiva, com explicacao do processo, privacidade, próximo passo e canais de contato discretos.',
    seoAsset:
      'Guias sobre etapas do divórcio, guarda compartilhada, pensão alimentícia, inventário e documentos necessários.',
    complianceNote:
      'Evitar explorar conflito familiar, prometer velocidade ou usar linguagem de confronto como oferta.',
    searchAngles: [
      'advogado divórcio consensual',
      'guarda compartilhada como funciona',
      'pensão alimentícia revisão',
      'inventário extrajudicial documentos',
    ],
    funnelMetrics: [
      'custo por contato com demanda definida',
      'agendamentos por tipo de caso',
      'tempo de resposta',
      'taxa de comparecimento',
    ],
    contentBlocks: [
      {
        title: 'Privacidade como argumento de conversão',
        desc: 'O usuário precisa entender que pode pedir orientação sem expor detalhes sensíveis no primeiro contato.',
      },
      {
        title: 'Campanhas por momento do problema',
        desc: 'Divorcio consensual, litigioso, guarda e alimentos tem níveis de urgência e decisão diferentes.',
      },
      {
        title: 'Conteúdo que reduz ansiedade',
        desc: 'Artigos e páginas explicam etapas, documentos e possibilidades sem prometer resultado.',
      },
    ],
    qualifyingQuestions: [
      'A demanda envolve divórcio, guarda, alimentos, união estável ou inventário?',
      'Existe acordo entre as partes?',
      'O contato busca informação inicial ou atendimento jurídico imediato?',
    ],
  },
  {
    id: 'empresarial',
    name: 'Advogados Empresariais',
    slug: 'advogados-empresariais',
    audience: 'bancas empresariais, consultivas e societárias',
    headline: 'Aquisição B2B para advocacia empresarial.',
    metaTitle: 'Tráfego Pago para Advogados Empresariais | Scale',
    metaDescription:
      'Campanhas e páginas para advogados empresariais com foco em consultivo, contratos, societário, cobrança e demandas B2B qualificadas.',
    marketThesis:
      'Na advocacia empresarial, o decisor não compra impulso. Ele avalia método, escopo, risco e se o escritório entende linguagem de negócio.',
    budgetLeak:
      'A verba se dilui quando a campanha atrai pessoa física, demanda sem ticket, curiosos ou empresas sem decisor envolvido.',
    technologyAngle:
      'Uma página rápida e objetiva permite que sócio, diretor ou gestor entenda escopo, recorrência e próximo passo antes de agendar uma conversa.',
    caseFrame: {
      before:
        'Leads B2B sem decisor, demandas pontuais de baixo fit e pouca clareza sobre ticket potencial.',
      intervention:
        'Segmentação por serviço empresarial, formulário com porte/setor e página orientada a escopo de consultoria.',
      evidenceToInsert:
        'Inserir custo por lead B2B, percentual de decisores e reuniões comerciais qualificadas.',
    },
    corePain:
      'O decisor B2B pesquisa de forma racional e compara autoridade, clareza de escopo e capacidade de atendimento.',
    paidIntent:
      'Focar em termos de consultoria jurídica empresarial, contratos, societário, cobrança, LGPD e assessoria recorrente.',
    landingStrategy:
      'Página com posicionamento consultivo, escopos claros, setores atendidos, rotina de trabalho e formulário B2B.',
    seoAsset:
      'Conteúdos sobre contratos, riscos societarios, cobrança empresarial, compliance, LGPD e rotinas jurídicas preventivas.',
    complianceNote:
      'Evitar abordagem comercial agressiva ou comparação depreciativa com outros escritórios.',
    searchAngles: [
      'advogado empresarial para contratos',
      'assessoria jurídica para empresas',
      'advogado societário consultoria',
      'cobrança empresarial jurídica',
    ],
    funnelMetrics: [
      'custo por lead B2B',
      'cargo do decisor',
      'tamanho da empresa',
      'reuniões comerciais qualificadas',
    ],
    contentBlocks: [
      {
        title: 'Segmentação por decisor',
        desc: 'Empresários, sócios e gestores exigem prova de método, previsibilidade e linguagem de negócio.',
      },
      {
        title: 'Landing page com escopo claro',
        desc: 'A página precisa explicar se o escritório atua por projeto, consultoria recorrente ou demanda especifica.',
      },
      {
        title: 'SEO para risco e prevenção',
        desc: 'Conteúdos preventivos atraem empresas antes do problema virar urgência juridica.',
      },
    ],
    qualifyingQuestions: [
      'A empresa busca demanda pontual ou assessoria recorrente?',
      'Qual é o porte e o setor da empresa?',
      'O decisor jurídico ou financeiro participa da conversa?',
    ],
  },
  {
    id: 'tributario',
    name: 'Advogados Tributaristas',
    slug: 'advogados-tributaristas',
    audience: 'escritórios focados em consultivo e contencioso tributário',
    headline: 'Demanda tributária com educação, diagnóstico e autoridade.',
    metaTitle: 'Tráfego Pago para Advogados Tributaristas | Scale',
    metaDescription:
      'Estratégia de tráfego e SEO para advogados tributaristas com foco em diagnóstico, conteúdo técnico e demandas empresariais qualificadas.',
    marketThesis:
      'No tributário, autoridade vem antes da conversão. O decisor precisa sentir critério técnico e método de diagnóstico, não promessa de economia fácil.',
    budgetLeak:
      'A verba vaza quando recuperação, defesa, planejamento e consultivo entram na mesma mensagem e atraem empresas sem dados mínimos para avaliação.',
    technologyAngle:
      'Landing rápida e técnica ajuda o decisor a entender critérios de análise, documentos necessários e tipo de demanda antes de falar com o escritório.',
    caseFrame: {
      before:
        'Contatos empresariais sem clareza de regime, prazo fiscal ou valor potencial da demanda.',
      intervention:
        'Campanhas por tese/demanda, página com critérios de diagnóstico e formulário para separar consultivo, contencioso e recuperacao.',
      evidenceToInsert:
        'Inserir custo por lead empresarial, ticket potencial estimado e reuniões com decisor.',
    },
    corePain:
      'A área exige alto nível técnico e muitos leads chegam sem clareza sobre risco, crédito, passivo ou regime tributário.',
    paidIntent:
      'Campanhas para revisão tributária, defesas, parcelamentos, planejamento, recuperação de crédito e consultoria para empresas.',
    landingStrategy:
      'Página técnica com critérios de diagnóstico, setores atendidos, tipos de demanda e fluxo de avaliação inicial.',
    seoAsset:
      'Conteúdos sobre teses, riscos fiscais, planejamento, regimes, créditos e obrigações, com linguagem acessível ao decisor.',
    complianceNote:
      'Evitar promessa de recuperação de valores ou economia garantida sem análise individual.',
    searchAngles: [
      'advogado tributário para empresa',
      'recuperação de créditos tributarios',
      'defesa auto de infração',
      'planejamento tributário jurídico',
    ],
    funnelMetrics: [
      'custo por lead empresarial',
      'demanda por tipo tributário',
      'ticket potencial estimado',
      'reuniões com decisor',
    ],
    contentBlocks: [
      {
        title: 'Autoridade técnica antes da conversão',
        desc: 'O decisor precisa entender que existe método de análise, não promessa de economia fácil.',
      },
      {
        title: 'Campanhas por demanda fiscal',
        desc: 'Auto de infração, crédito e planejamento não devem dividir a mesma página nem o mesmo funil.',
      },
      {
        title: 'Conteúdo como prova de critério',
        desc: 'Artigos técnicos ajudam a mostrar repertorio sem transformar tese tributária em oferta milagrosa.',
      },
    ],
    qualifyingQuestions: [
      'A demanda é consultiva, contenciosa ou recuperação de crédito?',
      'A empresa conhece regime tributário e faturamento aproximado?',
      'Existe prazo fiscal ou auto de infração em andamento?',
    ],
  },
  {
    id: 'imobiliario',
    name: 'Advogados Imobiliários',
    slug: 'advogados-imobiliarios',
    audience: 'escritórios que atuam com contratos, regularização, locação e incorporação',
    headline: 'Campanhas para demandas imobiliárias de alto valor.',
    metaTitle: 'Tráfego Pago para Advogados Imobiliários | Scale',
    metaDescription:
      'Google Ads, landing pages e SEO para advogados imobiliários com foco em contratos, regularização, locação, compra e venda.',
    marketThesis:
      'No imobiliário, a dor é patrimonial. A pessoa ou empresa procura segurança para não perder dinheiro em contrato, regularização ou disputa.',
    budgetLeak:
      'A verba se perde quando compradores, locadores, incorporadores e conflitos condominiais são tratados como uma intenção unica.',
    technologyAngle:
      'Uma landing rápida com triagem documental reduz abandono e ajuda o escritório a identificar matrícula, contrato, prazo e tipo de conflito antes da reuniao.',
    caseFrame: {
      before:
        'Demandas patrimoniais misturadas, contatos sem documento e baixa clareza sobre urgência ou tipo de imovel.',
      intervention:
        'Campanhas por tipo de conflito, landing com checklist documental e SEO para dúvidas preventivas de alto risco.',
      evidenceToInsert:
        'Inserir custo por demanda patrimonial, documentos recebidos e reuniões de análise.',
    },
    corePain:
      'A decisão envolve patrimônio, risco contratual e documentação. O contato precisa perceber critério antes de enviar detalhes.',
    paidIntent:
      'Campanhas por compra e venda, distrato, locação, regularização, usucapião, incorporação e conflitos condominiais.',
    landingStrategy:
      'Página com tipos de demanda, documentos necessários, fluxo de análise e sinais de confiança institucional.',
    seoAsset:
      'Conteúdos sobre contrato imobiliário, escritura, regularização, locação, usucapião e riscos de compra.',
    complianceNote:
      'Evitar chamadas de oportunidade financeira ou promessa de resolução rápida de regularizacao.',
    searchAngles: [
      'advogado contrato imobiliário',
      'regularização de imóvel advogado',
      'usucapião documentos',
      'distrato imobiliário dúvidas',
    ],
    funnelMetrics: [
      'custo por demanda patrimonial',
      'documentos recebidos',
      'tipo de conflito',
      'reuniões de análise',
    ],
    contentBlocks: [
      {
        title: 'Intencao patrimonial e documental',
        desc: 'A triagem precisa identificar imóvel, contrato, etapa da negociação e urgência real.',
      },
      {
        title: 'Landing page orientada a segurança',
        desc: 'A página deve mostrar processo de análise e clareza de escopo antes do contato.',
      },
      {
        title: 'SEO para dúvidas de alto risco',
        desc: 'Conteúdos preventivos sobre contrato e regularização atraem leads antes do prejuizo acontecer.',
      },
    ],
    qualifyingQuestions: [
      'A demanda envolve compra, venda, locação, regularização ou conflito?',
      'O contato possui contrato, matrícula ou documentos do imóvel?',
      'Existe prazo de negociação ou processo em andamento?',
    ],
  },
];

export function getLegalAreaBySlug(slug: string): LegalArea | undefined {
  return legalAreas.find((area) => area.slug === slug);
}

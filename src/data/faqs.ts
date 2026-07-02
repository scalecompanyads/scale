import type { Faq } from "@/lib/schema";

// Fonte única dos FAQs: usada pelos accordions e pelo schema FAQPage (JSON-LD).
// O Google exige que o schema espelhe o conteúdo visível — editar aqui mantém os dois em sinc.

export const homeFaqs: Faq[] = [
  {
    question: "A Scale Company atua dentro das normas da OAB?",
    answer: "Absolutamente. Todo o nosso ecossistema de campanhas, landing pages, vídeos e criativos respeita rigorosamente os limites do provimento 205/2021 da OAB, garantindo captação ética, informativa e sem risco de mercantilização."
  },
  {
    question: "Funciona para qualquer área do direito?",
    answer: "Sim. Do preventivo empresarial ao criminal de urgência, passando por demandas de volume como previdenciário e consumidor. O que muda é a estratégia de funil e o nível de consciência do cliente, mas a máquina de conversão funciona."
  },
  {
    question: "Eu preciso criar as páginas e editar os vídeos?",
    answer: "Não. Esse é o nosso maior diferencial competitivo. Nós entregamos a operação pronta. Você grava os vídeos pelo celular (nós damos o roteiro), nos envia, e nossa equipe cuida de toda a edição cinematográfica, programação das LPs e otimização do tráfego."
  },
  {
    question: "É preciso ter um escritório físico gigante para contratar a Scale?",
    answer: "Não. Atendemos desde o advogado autônomo que atua 100% digital e precisa iniciar sua máquina de aquisição, até grandes bancas estruturadas que desejam escalar o volume e reduzir o custo de aquisição de clientes (CAC)."
  },
  {
    question: "Em quanto tempo começo a ver resultados em contratos fechados?",
    answer: "O tráfego pago é uma ferramenta de aceleração imediata. Logo na primeira semana de veiculação, o seu comercial começará a receber os primeiros contatos (leads). O tempo de conversão real depende da urgência da sua área, mas nossa máquina é calibrada para buscar o retorno sobre o investimento (ROI) já nos primeiros 30 a 60 dias."
  },
  {
    question: "O que é o CRM Jurídico Exclusivo e por que ele é essencial?",
    answer: "Atrair clientes é apenas metade do jogo. Se o seu WhatsApp vira uma bagunça, você perde dinheiro. Nosso CRM Exclusivo é uma tecnologia implantada para o seu escritório ter controle total do funil de vendas, saber exatamente a etapa de cada negociação e garantir um follow-up agressivo, sem deixar nenhum honorário na mesa."
  },
  {
    question: "Vocês atendem escritórios concorrentes na mesma cidade?",
    answer: "Para teses e atuações de hiper-segmentação local (como criminal, família ou previdenciário municipal), nós garantimos exclusividade por praça. Não competimos contra nós mesmos no leilão do Google. Se já temos um escritório faturando alto com uma tese na sua região, não fecharemos com o seu concorrente."
  },
  {
    question: "Nunca fiz marketing jurídico na vida. Isso é para mim?",
    answer: "Com certeza. Entrar no digital com uma máquina 360º pronta já te coloca anos à frente de escritórios mais antigos que tentam fazer tudo de forma amadora. Nós construímos a sua fundação digital (Landing page, posicionamento e campanhas) já no padrão de grandes bancas."
  }
];

export const hubFaqs: Faq[] = [
  {
    question: "Como funciona a captação de clientes para advogados de forma automatizada?",
    answer: "Ela funciona através da criação de um ecossistema digital. Em vez de panfletagem digital, nós posicionamos o seu site no topo dos buscadores (Google Ads e SEO) exatamente quando o cliente final pesquisa pelo seu serviço. O lead clica, entra em uma página de alta conversão e aciona o seu WhatsApp."
  },
  {
    question: "Anúncios no Google Ads não violam o código de ética da OAB?",
    answer: "Não. O Provimento 205/2021 da OAB permite explicitamente o marketing de conteúdos e o patrocínio de postagens/anúncios, desde que tenham caráter puramente informativo, sóbrio e não utilizem termos mercantilistas (como \"compre já\" ou \"desconto em honorários\"). É marketing receptivo (Inbound)."
  },
  {
    question: "Qual a diferença entre o Tráfego Pago e a Consultoria de SEO Local para Advogados?",
    answer: "O Tráfego Pago gera leads de forma imediata (em até 15-30 dias), pois você paga por cada clique que recebe no anúncio. A Consultoria de SEO Local e Google Meu Negócio cria um ativo de longo prazo para o escritório: posiciona seu negócio organicamente no mapa da sua região de forma fixa, gerando contatos sem custo por clique."
  }
];

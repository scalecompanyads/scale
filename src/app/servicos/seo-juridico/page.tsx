import type { Metadata } from "next";
import ServiceTemplate from "@/components/ServiceTemplate";
import { siteOgImage } from "@/lib/site-og";

const title = "SEO Jurídico para Advogados | Scale Company";
const description =
  "SEO jurídico para escritórios de advocacia: pesquisa de palavras-chave, conteúdo, SEO técnico, dados estruturados e SEO local para ranquear no Google sem depender só de anúncio pago.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/servicos/seo-juridico" },
  openGraph: { title, description, url: "/servicos/seo-juridico", images: [siteOgImage] },
};

export default function SeoJuridicoPage() {
  return (
    <ServiceTemplate
      number="03"
      category="SEO jurídico"
      title="Tráfego pago é aluguel de atenção. SEO jurídico é patrimônio digital."
      description={
        <>
          Estratégia de{" "}
          <strong className="font-semibold text-white">SEO técnico, conteúdo e autoridade</strong>{" "}
          para o escritório aparecer no Google quando alguém precisa de um advogado, com{" "}
          <strong className="font-semibold text-white">
            resultado que continua crescendo
          </strong>{" "}
          mesmo nos meses em que a verba de mídia paga é menor.
        </>
      }
      cover="/img-cards-services/seo-juridico.png"
      coverAlt="Painel de visibilidade orgânica e palavras-chave jurídicas ranqueando no Google"
      keywords={[
        "SEO JURÍDICO",
        "SEO PARA ADVOGADOS",
        "MARKETING JURÍDICO ORGÂNICO",
        "OTIMIZAÇÃO PARA MECANISMOS DE BUSCA",
        "CONTEÚDO JURÍDICO",
        "AUTORIDADE DIGITAL PARA ESCRITÓRIOS",
        "RANQUEAR NO GOOGLE ADVOCACIA",
      ]}
      intro={{
        eyebrow: "Estratégia orgânica",
        heading: "O Google trata conteúdo jurídico com o padrão mais alto que existe.",
        paragraphs: [
          "Buscas sobre divórcio, prisão, dívida ou aposentadoria entram na categoria que o Google chama de YMYL — Your Money or Your Life. São temas que podem afetar a vida, o patrimônio ou a liberdade de alguém, e por isso o algoritmo exige um nível mais alto de autoridade, experiência e confiabilidade antes de posicionar uma página bem.",
          "SEO jurídico na Scale significa construir essa base de forma técnica: estrutura do site, conteúdo com autoria e precisão real, dados estruturados que ajudam Google e IA a entender do que se trata cada página, e presença local consistente para quem busca um advogado na própria cidade.",
          "Diferente de mídia paga, que para de gerar oportunidade no instante em que o investimento pausa, o trabalho de SEO se acumula. Integramos essa frente com tráfego pago, landing page e CRM para que a busca orgânica vire mais um canal dentro da mesma operação de aquisição, não uma ação isolada.",
        ],
      }}
      differentiators={{
        eyebrow: "Por que é diferente",
        heading: "SEO jurídico não é aplicar o manual genérico de SEO num site de advocacia.",
        intro:
          "Otimizar um site de advocacia para busca exige entender três coisas que a maioria das agências de SEO generalista ignora: o padrão YMYL do Google, as regras da OAB e o jeito como alguém pesquisa antes de contratar um advogado.",
        image: {
          src: "/images/article-predictability/weekly-planning.png",
          alt: "Planejamento de pauta de conteúdo jurídico em reunião de equipe",
        },
        items: [
          {
            title: "Conteúdo em categoria YMYL",
            text: "Google exige mais evidência de expertise, experiência e confiabilidade em temas que afetam dinheiro, saúde ou liberdade. Autoria assinada, precisão técnica e revisão cuidadosa pesam mais aqui do que em qualquer outro nicho.",
          },
          {
            title: "Regras da OAB dentro do conteúdo",
            text: "Mesmo em artigo educativo, sem promessa de resultado, sem comparação com outros escritórios e sem linguagem que configure captação irregular de clientela. Compliance é parte da pauta editorial, não uma revisão de última hora.",
          },
          {
            title: "SEO local pesa mais que em outros mercados",
            text: "A maioria das buscas é do tipo 'advogado de [área] em [cidade]'. Perfil no Google Business, citações locais e dados estruturados de localização importam tanto quanto o conteúdo em si.",
          },
          {
            title: "Ciclo mais longo, custo por lead mais baixo no fim",
            text: "SEO não é canal de resultado no primeiro mês. Mas depois de maduro, sustenta um custo por oportunidade abaixo do que qualquer mídia paga consegue manter no longo prazo.",
          },
        ],
      }}
      areas={{
        eyebrow: "Por área de atuação",
        heading: "A pauta de conteúdo muda conforme a área do escritório.",
        intro:
          "O jeito como alguém busca um advogado de família é diferente de como busca um advogado tributarista. A estratégia de palavras-chave e conteúdo respeita essa diferença em vez de tratar todo visitante da mesma forma.",
        image: {
          src: "/images/article-google-ads/performance-review.png",
          alt: "Análise de performance de conteúdo e posições no Google",
        },
        items: [
          {
            title: "Direito de Família",
            text: "Volume alto e recorrente em termos como divórcio, guarda e pensão. A concorrência por termos genéricos é forte, então clusters de conteúdo de cauda longa, com perguntas específicas, costumam ranquear mais rápido.",
          },
          {
            title: "Direito Trabalhista",
            text: "Busca com picos sazonais em datas de pagamento de rescisão e períodos de demissão em massa. Conteúdo perene sobre direitos e verbas sustenta tráfego o ano inteiro, não só nos picos.",
          },
          {
            title: "Direito Previdenciário",
            text: "Público pesquisa de forma bem literal, como 'aposentadoria negada' ou 'revisão da vida toda'. Conteúdo explicativo e detalhado converte melhor do que peças curtas e genéricas.",
          },
          {
            title: "Direito do Consumidor",
            text: "Temas reagem a eventos: voo cancelado, negativação indevida, produto com defeito. A operação de conteúdo precisa de agilidade para publicar quando um assunto está em alta, além do conteúdo evergreen de base.",
          },
          {
            title: "Direito Empresarial e Tributário",
            text: "Ciclo de pesquisa mais longo, com sócios e diretores buscando por semanas antes de marcar uma reunião. Conteúdo aprofundado constrói a autoridade que pesa nesse tipo de decisão.",
          },
          {
            title: "Direito Criminal",
            text: "Buscas literais e urgentes, como 'advogado criminalista plantão'. SEO local e dados estruturados com contato e disponibilidade importam tanto quanto o texto da página.",
          },
        ],
      }}
      spotlight={{
        image: {
          src: "/images/article-predictability/cover.png",
          alt: "Equipe revisando planejamento de crescimento orgânico",
        },
        quote:
          "SEO jurídico não compete com tráfego pago pela atenção do mês. Ele reduz o custo de todos os outros canais com o tempo.",
      }}
      pillars={{
        eyebrow: "O que entregamos",
        heading: "Uma operação de SEO pensada para o ciclo de decisão jurídico.",
        items: [
          {
            title: "Pesquisa estratégica de palavras-chave",
            text: "Mapeamento de termos por área de atuação e intenção de busca, priorizando volume real de quem está perto de contratar, não apenas volume de busca genérico.",
          },
          {
            title: "SEO on-page para escritórios",
            text: "Estrutura de título, headings, meta description, arquitetura de URL e internal linking em formato hub-and-spoke entre página de área de atuação e conteúdo de blog.",
          },
          {
            title: "Conteúdo jurídico otimizado",
            text: "Pauta editorial escrita para responder à dúvida real de quem busca, revisada tecnicamente antes de publicar, sempre dentro dos limites da publicidade jurídica.",
          },
          {
            title: "Dados estruturados e schema",
            text: "Marcação em JSON-LD (Organization, LegalService, FAQPage, Article) para Google e assistentes de IA entenderem cada página e exibirem resultados enriquecidos.",
          },
          {
            title: "SEO local e Google Business Profile",
            text: "Otimização de perfil, categorias, avaliações e citações locais para aparecer no mapa e nas buscas do tipo 'advogado perto de mim'.",
          },
          {
            title: "Análises e relatórios mensais",
            text: "Acompanhamento de posições, tráfego orgânico e leads gerados por conteúdo, com prioridades de pauta revisadas todo mês com base em dado real.",
          },
        ],
      }}
      process={{
        eyebrow: "Como funciona",
        heading: "Do diagnóstico técnico à autoridade que sustenta a operação inteira.",
        items: [
          {
            title: "Auditoria técnica",
            text: "Avaliamos velocidade, indexação, estrutura de URLs, canonical e robots.txt antes de publicar qualquer conteúdo novo, para não construir autoridade sobre uma base quebrada.",
          },
          {
            title: "Arquitetura e pesquisa de palavras",
            text: "Mapeamos páginas de área de atuação e clusters de conteúdo, priorizados por intenção de busca e potencial de conversão para o escritório.",
          },
          {
            title: "Produção e otimização",
            text: "Escrita, revisão técnica e de compliance, e publicação de páginas e conteúdo, já com dados estruturados e internal linking aplicados.",
          },
          {
            title: "Autoridade e monitoramento",
            text: "Construção de citações e menções relevantes, acompanhamento mensal de posições, tráfego e leads, com ajuste contínuo de prioridade.",
          },
        ],
      }}
      proof={{
        eyebrow: "Resultado real",
        heading: "SEO jurídico sustenta resultado em qualquer canal.",
        text: "A Scale já estruturou a operação digital de mais de 700 escritórios de advocacia. A base técnica e de conteúdo trabalhada em SEO é o que mantém o custo por oportunidade baixo depois que uma campanha paga já otimizou o que dava para otimizar, e o que continua trazendo busca pelo nome do escritório mesmo com o investimento em mídia pausado.",
        stats: [
          { value: "+700", label: "Escritórios atendidos" },
          { value: "R$ 50M+", label: "Investimento em mídia gerenciado" },
          { value: "3 a 6 meses", label: "Para as primeiras posições subirem" },
        ],
        caseHref: "/cases/vinicio-rodrigues",
        caseLabel: "Ver case completo",
        caseTitle: "5 contratos e mais de R$ 10,5 mil em honorários no primeiro mês.",
        caseImage: "/images/case-vinicio-rodrigues-cover-v2.png",
      }}
      faq={{
        eyebrow: "Perguntas frequentes",
        heading: "Antes de investir, tire suas dúvidas.",
        items: [
          {
            question: "Vocês garantem que meu escritório vai ficar em primeiro no Google?",
            answer:
              "Não. Nenhuma agência séria pode prometer isso: o próprio Google desaconselha e a OAB proíbe promessa de resultado na publicidade jurídica. O que garantimos é um trabalho técnico consistente, com hipótese, execução e mensuração todo mês.",
          },
          {
            question: "Em quanto tempo aparecem os primeiros resultados de SEO?",
            answer:
              "Em geral, entre 3 e 6 meses para as primeiras posições relevantes subirem, dependendo da concorrência da área de atuação e da situação técnica do site no início do trabalho.",
          },
          {
            question: "Quem escreve o conteúdo jurídico, a Scale ou o advogado do escritório?",
            answer:
              "A Scale escreve e otimiza o conteúdo para SEO, com revisão técnica e de compliance do próprio escritório antes da publicação, garantindo precisão jurídica e responsabilidade sobre o que vai ao ar.",
          },
          {
            question: "SEO jurídico substitui o tráfego pago?",
            answer:
              "Não, eles se complementam. Tráfego pago traz resultado mais rápido e escalável no curto prazo. SEO constrói um ativo que se acumula e reduz o custo por oportunidade no médio e longo prazo. A combinação costuma ser o cenário mais eficiente.",
          },
          {
            question: "Funciona para um escritório pequeno, que ainda não publica conteúdo?",
            answer:
              "Funciona. O trabalho começa pela base técnica e pela estrutura do site, independente do volume de conteúdo já publicado, e a pauta editorial é construída a partir daí.",
          },
          {
            question: "Como o conteúdo respeita o Código de Ética da OAB?",
            answer:
              "Tom educativo e informativo, sem promessa de resultado, sem comparação com outros escritórios e sem linguagem que configure captação irregular de clientela. Toda pauta passa por checagem de compliance antes de publicar.",
          },
          {
            question: "O escritório tem mais de uma unidade. Isso muda a estratégia?",
            answer:
              "Muda. Trabalhamos SEO local dedicado por unidade, com páginas e dados estruturados de localização (LocalBusiness) específicos para cada cidade ou comarca atendida.",
          },
        ],
      }}
    />
  );
}

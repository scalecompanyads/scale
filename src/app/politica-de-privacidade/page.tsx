import type { Metadata } from "next";
import LegalPageTemplate from "@/components/LegalPageTemplate";
import { siteOgImage } from "@/lib/site-og";

const title = "Política de Privacidade | Scale Company";
const description =
  "Como a Scale Company coleta, usa e protege dados pessoais de visitantes e clientes, em conformidade com a LGPD.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/politica-de-privacidade" },
  openGraph: { title, description, url: "/politica-de-privacidade", images: [siteOgImage] },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPageTemplate
      eyebrow="Legal"
      title="Política de Privacidade"
      updatedAt="26 de agosto de 2026"
      intro="Esta política explica quais dados a Scale Company coleta quando você visita nosso site ou entra em contato com a gente, para que usamos essas informações e quais direitos você tem sobre elas, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)."
      sections={[
        {
          id: "quem-somos",
          heading: "1. Quem somos",
          paragraphs: [
            "A Scale Company (\"Scale\", \"nós\") é uma agência de marketing especializada em escritórios de advocacia, com sede na Av. Hugo Musso, Praia da Costa, Vila Velha - ES, CEP 29101-280. Para qualquer assunto relacionado a esta política ou ao tratamento dos seus dados, você pode falar com a gente pelo e-mail contato@scalecompany.com.br.",
          ],
        },
        {
          id: "dados-coletados",
          heading: "2. Quais dados coletamos",
          paragraphs: [
            "Coletamos dois tipos de informação, dependendo de como você interage com o site:",
          ],
          list: [
            "Dados que você nos fornece diretamente: nome, WhatsApp, e-mail, Instagram e faixa de faturamento mensal, quando você preenche um formulário de contato, diagnóstico ou inscrição em conteúdo.",
            "Dados coletados automaticamente durante a navegação: páginas visitadas, tempo de permanência, dispositivo, localização aproximada e interações com a página (cliques, rolagem, movimentos do cursor), por meio de cookies e ferramentas de análise.",
          ],
        },
        {
          id: "ferramentas",
          heading: "3. Cookies e ferramentas de análise",
          paragraphs: [
            "Usamos as seguintes ferramentas de terceiros para entender como o site é usado e melhorar nossa comunicação:",
          ],
          list: [
            "Google Tag Manager: gerencia o carregamento de tags de análise e publicidade (como Google Ads e Meta Ads) no site.",
            "Microsoft Clarity: grava sessões de navegação (de forma anonimizada) e gera mapas de calor para entendermos como os visitantes usam as páginas.",
            "Cookies de anúncio (Google Ads, Meta Ads): usados para medir a performance de campanhas e mostrar anúncios relevantes para quem já visitou o site.",
          ],
        },
        {
          id: "uso-dos-dados",
          heading: "4. Para que usamos seus dados",
          paragraphs: ["Usamos as informações coletadas para:"],
          list: [
            "Responder ao seu contato e agendar uma conversa comercial com nosso time.",
            "Entender o comportamento de navegação no site e melhorar conteúdo, layout e performance.",
            "Medir a efetividade de campanhas de mídia paga e ajustar nossa comunicação.",
            "Cumprir obrigações legais e regulatórias, quando aplicável.",
          ],
        },
        {
          id: "compartilhamento",
          heading: "5. Compartilhamento de dados",
          paragraphs: [
            "Não vendemos seus dados pessoais. Compartilhamos informações apenas com prestadores de serviço que nos ajudam a operar o site e a comunicação comercial — como Google (Tag Manager, Ads, Analytics), Microsoft (Clarity), Meta (Ads) e o nosso CRM interno — sempre limitado ao necessário para cada finalidade, e podemos divulgar dados quando exigido por lei ou ordem judicial.",
          ],
        },
        {
          id: "armazenamento",
          heading: "6. Armazenamento e segurança",
          paragraphs: [
            "Os dados enviados por formulário ficam armazenados em nosso CRM interno, com acesso restrito à equipe comercial. Adotamos medidas técnicas e organizacionais razoáveis para proteger essas informações contra acesso não autorizado, perda ou uso indevido. Mantemos seus dados pelo tempo necessário para a finalidade do contato ou enquanto exigido por lei, podendo solicitar a exclusão a qualquer momento conforme a seção 7.",
          ],
        },
        {
          id: "direitos",
          heading: "7. Seus direitos como titular de dados",
          paragraphs: ["De acordo com a LGPD, você tem direito a:"],
          list: [
            "Confirmar a existência de tratamento dos seus dados.",
            "Acessar os dados que temos sobre você.",
            "Corrigir dados incompletos, inexatos ou desatualizados.",
            "Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.",
            "Solicitar a portabilidade dos dados a outro fornecedor de serviço.",
            "Revogar o consentimento e solicitar a eliminação dos dados tratados com base nele.",
            "Obter informação sobre com quem compartilhamos seus dados.",
          ],
        },
        {
          id: "como-exercer",
          heading: "8. Como exercer seus direitos",
          paragraphs: [
            "Para exercer qualquer um desses direitos, entre em contato pelo e-mail contato@scalecompany.com.br. Vamos responder dentro de um prazo razoável e, quando necessário, solicitar informações adicionais para confirmar sua identidade antes de atender ao pedido.",
          ],
        },
        {
          id: "alteracoes",
          heading: "9. Alterações nesta política",
          paragraphs: [
            "Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. A data no topo desta página sempre indica a versão mais recente.",
          ],
        },
      ]}
    />
  );
}

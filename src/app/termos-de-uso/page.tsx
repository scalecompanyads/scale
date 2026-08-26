import type { Metadata } from "next";
import LegalPageTemplate from "@/components/LegalPageTemplate";
import { siteOgImage } from "@/lib/site-og";

const title = "Termos de Uso | Scale Company";
const description =
  "Condições de uso do site institucional da Scale Company: o que você pode fazer com o conteúdo, limites de responsabilidade e legislação aplicável.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/termos-de-uso" },
  openGraph: { title, description, url: "/termos-de-uso", images: [siteOgImage] },
};

export default function TermosDeUsoPage() {
  return (
    <LegalPageTemplate
      eyebrow="Legal"
      title="Termos de Uso"
      updatedAt="26 de agosto de 2026"
      intro="Estes termos regulam o uso do site institucional da Scale Company (scalecompany.com.br). Ao navegar por este site, você concorda com as condições descritas abaixo."
      sections={[
        {
          id: "aceitacao",
          heading: "1. Aceitação dos termos",
          paragraphs: [
            "O acesso e uso deste site implicam a aceitação integral destes Termos de Uso e da nossa Política de Privacidade. Se você não concorda com algum ponto, recomendamos não continuar a navegação.",
          ],
        },
        {
          id: "objeto",
          heading: "2. Sobre este site",
          paragraphs: [
            "Este site tem caráter institucional e informativo: apresenta os serviços da Scale Company, cases, conteúdos educativos sobre marketing jurídico e canais de contato. Não constitui, em nenhuma hipótese, aconselhamento jurídico, e nenhuma informação aqui publicada deve ser interpretada como tal.",
          ],
        },
        {
          id: "uso-permitido",
          heading: "3. Uso permitido",
          paragraphs: ["Ao usar este site, você concorda em não:"],
          list: [
            "Reproduzir, copiar ou redistribuir o conteúdo do site para fins comerciais sem autorização prévia por escrito.",
            "Tentar acessar áreas restritas, interferir no funcionamento do site ou realizar qualquer ação que sobrecarregue nossa infraestrutura.",
            "Utilizar os formulários de contato para envio de spam, conteúdo ofensivo ou informações falsas.",
          ],
        },
        {
          id: "propriedade-intelectual",
          heading: "4. Propriedade intelectual",
          paragraphs: [
            "Marca, logotipo, textos, imagens, vídeos e demais elementos deste site pertencem à Scale Company ou são utilizados sob licença, e são protegidos por leis de direito autoral e propriedade industrial. Nenhum conteúdo pode ser usado sem autorização prévia.",
          ],
        },
        {
          id: "sem-garantia-resultado",
          heading: "5. Ausência de garantia de resultado",
          paragraphs: [
            "Os cases, números e depoimentos apresentados neste site refletem resultados obtidos por clientes específicos, em contextos específicos. Resultados de marketing variam conforme área de atuação, região, investimento e outros fatores, e nada neste site deve ser interpretado como promessa ou garantia de resultado para qualquer novo cliente.",
          ],
        },
        {
          id: "links-externos",
          heading: "6. Links para outros sites",
          paragraphs: [
            "Este site pode conter links para sites de terceiros (redes sociais, parceiros, ferramentas). Não somos responsáveis pelo conteúdo, práticas de privacidade ou disponibilidade desses sites externos.",
          ],
        },
        {
          id: "limitacao-responsabilidade",
          heading: "7. Limitação de responsabilidade",
          paragraphs: [
            "Fazemos o possível para manter as informações deste site atualizadas e corretas, mas não garantimos que o site estará livre de erros, interrupções ou indisponibilidades. Não nos responsabilizamos por danos decorrentes do uso ou da impossibilidade de uso do site.",
          ],
        },
        {
          id: "alteracoes",
          heading: "8. Alterações destes termos",
          paragraphs: [
            "Podemos atualizar estes Termos de Uso a qualquer momento, para refletir mudanças no site ou na legislação aplicável. A data no topo desta página sempre indica a versão vigente.",
          ],
        },
        {
          id: "lei-aplicavel",
          heading: "9. Legislação aplicável e foro",
          paragraphs: [
            "Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de Vila Velha - ES para dirimir eventuais controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.",
          ],
        },
        {
          id: "contato",
          heading: "10. Contato",
          paragraphs: [
            "Dúvidas sobre estes Termos de Uso podem ser enviadas para contato@scalecompany.com.br.",
          ],
        },
      ]}
    />
  );
}

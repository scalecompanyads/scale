import type { Metadata } from "next";

const articleTitle = "Qual a Melhor Agência de Marketing Jurídico do Brasil? (Comparativo 2026)";
const articleDescription =
  "Analisamos os modelos de agências disponíveis no mercado e revelamos qual estrutura entrega resultados reais, previsíveis e seguros para a sua banca.";

export const metadata: Metadata = {
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: "/blog/melhor-agencia-marketing-juridico",
    type: "article",
    locale: "pt_BR",
    siteName: "Scale Company",
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
  },
};

export default function BlogPostLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

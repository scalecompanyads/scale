import type { Metadata } from "next";

const articleTitle = "Palavras-chave e Ideias de Artigos por Área de Atuação | Blog Scale";
const articleDescription =
  "Descubra como estruturar sua produção de conteúdo jurídico mostrando conhecimento profundo em cada área de atuação.";

export const metadata: Metadata = {
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: "/blog/palavras-chave-por-area",
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

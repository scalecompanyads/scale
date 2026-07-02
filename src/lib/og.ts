import type { Metadata } from "next";

// openGraph definido em um segmento SUBSTITUI o do pai por completo (sem merge),
// inclusive a imagem do file convention da raiz — por isso todo openGraph
// de página precisa declarar images explicitamente.

export const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Scale Company — Agência de Marketing Jurídico",
};

type PageOgInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  images?: { url: string; width: number; height: number; alt: string }[];
};

export function pageOpenGraph({
  title,
  description,
  path,
  type = "website",
  images = [defaultOgImage],
}: PageOgInput): NonNullable<Metadata["openGraph"]> {
  return {
    title,
    description,
    url: path,
    type,
    locale: "pt_BR",
    siteName: "Scale Company",
    images,
  };
}

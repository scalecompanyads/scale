import type { MetadataRoute } from "next";

const BASE_URL = "https://www.scalecompany.com.br";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const ROUTES: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/servicos", changeFrequency: "monthly", priority: 0.8 },
  { path: "/servicos/trafego-pago", changeFrequency: "monthly", priority: 0.8 },
  { path: "/servicos/landing-pages", changeFrequency: "monthly", priority: 0.8 },
  { path: "/servicos/seo-juridico", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sobre", changeFrequency: "monthly", priority: 0.7 },
  { path: "/cases", changeFrequency: "monthly", priority: 0.7 },
  { path: "/cases/vinicio-rodrigues", changeFrequency: "monthly", priority: 0.6 },
  { path: "/noticias", changeFrequency: "weekly", priority: 0.7 },
  {
    path: "/conteudos/aquisicao-juridica-operacao-continua",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  { path: "/conteudos/google-ads-para-advogados", changeFrequency: "monthly", priority: 0.6 },
  { path: "/conteudos/landing-pages-juridicas", changeFrequency: "monthly", priority: 0.6 },
  {
    path: "/conteudos/previsibilidade-na-aquisicao-juridica",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  { path: "/scale-advogados", changeFrequency: "monthly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

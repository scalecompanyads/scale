import { posts } from "./posts";

export const SITE_URL = "https://www.scalecompany.com.br";

export type SeoRoute = {
  path: string;
  /** Última alteração relevante de conteúdo (ISO). Atualizar ao editar a página. */
  lastModified: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

export const seoRoutes: SeoRoute[] = [
  { path: "", lastModified: "2026-06-15", changeFrequency: "weekly", priority: 1 },
  // Money pages
  { path: "/google-ads-advogados", lastModified: "2026-06-25", changeFrequency: "monthly", priority: 0.9 },
  { path: "/captacao-de-clientes-para-advogados", lastModified: "2026-06-09", changeFrequency: "monthly", priority: 0.9 },
  { path: "/servicos", lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.9 },
  { path: "/scale-advogados", lastModified: "2026-06-27", changeFrequency: "monthly", priority: 0.9 },
  { path: "/crm-advogados", lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.8 },
  { path: "/simulador-captacao", lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.7 },
  { path: "/depoimentos", lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.7 },
  // Índices
  { path: "/blog", lastModified: "2026-06-24", changeFrequency: "weekly", priority: 0.6 },
  { path: "/cases", lastModified: "2026-07-02", changeFrequency: "weekly", priority: 0.6 },
  // Posts do blog (derivados da fonte única em posts.ts)
  ...posts.map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: post.dateISO,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  // Cases
  { path: "/cases/rocha-e-sa", lastModified: "2026-06-27", changeFrequency: "monthly", priority: 0.7 },
  { path: "/cases/celino-e-silva", lastModified: "2026-06-25", changeFrequency: "monthly", priority: 0.7 },
  { path: "/cases/feitosa-advocacia", lastModified: "2026-07-02", changeFrequency: "monthly", priority: 0.7 },
  { path: "/cases/viniciosraider", lastModified: "2026-06-25", changeFrequency: "monthly", priority: 0.7 },
];

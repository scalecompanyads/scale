// TODO: substituir pelos links reais da Scale Company
export const INSTAGRAM_URL = "https://www.instagram.com/";

/** Prints de conversas (prova social). Carrossel na se├º├úo de depoimentos: 1 slide no mobile, 3 no desktop. */
export const TESTIMONIAL_SCREENSHOTS: string[] = Array.from({ length: 19 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/images/testimonials/testimonial-${n}.png`;
});

/** URLs de embed dos depoimentos em v├¡deo (YouTube, Vimeo, etc.). No desktop aparecem lado a lado; no mobile, empilhados. */
export const FEATURED_VIDEO_EMBED_URLS: string[] = [
  "https://www.youtube.com/embed/hZxR3DadbTg",
  "https://www.youtube.com/embed/4V0ArJKXb-4",
];

// TODO: substituir pelo n├║mero real da Scale Company
export const WHATSAPP_NUMBER = "5511999999999";

export const WHATSAPP_URL = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const ESPECIALIDADES = [
  "Previdenci├írio",
  "Criminal",
  "Fam├¡lia",
  "Tribut├írio",
  "Trabalhista",
  "Sa├║de Suplementar",
  "C├¡vel",
  "Outra ├írea",
] as const;

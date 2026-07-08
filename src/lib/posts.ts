export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Data ISO usada em sitemap, schema Article e ordenação */
  dateISO: string;
  /** Data por extenso exibida nos cards e no post */
  dateDisplay: string;
  category: string;
  image: string;
  imageAlt: string;
};

export const posts: BlogPost[] = [
  {
    slug: "neuromarketing-juridico",
    title:
      "Neuromarketing Jurídico: A Ciência Comportamental por trás do 'Sim' na Assinatura de Honorários",
    excerpt:
      "Descubra como estruturar sua comunicação e sua proposta de honorários para que o cérebro do seu cliente diga 'sim' antes mesmo de ler a última página do contrato.",
    dateISO: "2026-06-24",
    dateDisplay: "24 de Junho de 2026",
    category: "Vendas & Fechamento",
    image: "/images/blog/neuromarketing-juridico/hero_capa_v2.png",
    imageAlt:
      "Cérebro iluminado por conexões neurais sobreposto a um contrato jurídico e caneta-tinteiro",
  },
  {
    slug: "melhor-agencia-marketing-juridico",
    title:
      "Qual a Melhor Agência de Marketing Jurídico do Brasil? (Comparativo 2026)",
    excerpt:
      "Analisamos os modelos de agências disponíveis no mercado e revelamos qual estrutura entrega resultados reais, previsíveis e seguros para a sua banca.",
    dateISO: "2026-06-16",
    dateDisplay: "16 de Junho de 2026",
    category: "Mercado & Negócios",
    image: "/images/blog-comparativo-v3.png",
    imageAlt:
      "Mesa de reunião de escritório jurídico com balança de justiça, relatórios estratégicos e laptop com análises",
  },
  {
    slug: "palavras-chave-por-area",
    title:
      "Palavras-chave e Ideias de Artigos por Área de Atuação na Advocacia",
    excerpt:
      "Mostrar as palavras-chave e sugestões de artigos separados por área de atuação funciona como uma amostra grátis do seu conhecimento.",
    dateISO: "2026-06-16",
    dateDisplay: "16 de Junho de 2026",
    category: "Estratégia de Conteúdo",
    image: "/images/blog-keywords-v3.png",
    imageAlt:
      "Mesa de pesquisa em escritório jurídico com caderno de planejamento, livros e laptop para estratégia de conteúdo",
  },
  {
    slug: "autoridade-institucional-marketing-juridico",
    title:
      "Performance e Autoridade Não Se Excluem: Por Que Marca Também Fecha Contratos na Advocacia",
    excerpt:
      "Marca institucional e performance de tráfego não competem entre si. Entenda por que a autoridade percebida reduz o custo de aquisição no longo prazo.",
    dateISO: "2026-07-08",
    dateDisplay: "8 de Julho de 2026",
    category: "Posicionamento & Marca",
    image: "/images/blog/autoridade-institucional-marketing-juridico/hero.svg",
    imageAlt:
      "Ilustração abstrata de um escudo de confiança cruzado por uma linha ascendente de performance",
  },
];

export function getPost(slug: string): BlogPost {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post não encontrado: ${slug}`);
  return post;
}

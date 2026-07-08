import { SITE_URL } from "./seo-routes";
import type { BlogPost } from "./posts";

const LOGO_URL = `${SITE_URL}/images/scale-logo.svg`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "Scale Company",
    url: `${SITE_URL}/`,
    logo: LOGO_URL,
    slogan: "Máquinas de Aquisição para escritórios de advocacia",
    description:
      "Agência de marketing jurídico especializada em captação de clientes para advogados com Google Ads, Meta Ads e CRM, dentro do Provimento 205/2021 da OAB.",
    areaServed: { "@type": "Country", name: "Brasil" },
    knowsAbout: [
      "Marketing Jurídico",
      "Google Ads para Advogados",
      "Captação de Clientes para Advogados",
      "CRM Jurídico",
      "Tráfego Pago",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contato@scalecompany.com.br",
      contactType: "Atendimento",
    },
    employee: [
      { "@type": "Person", name: "Gabriel Dias", jobTitle: "Chief Organization Officer" },
      { "@type": "Person", name: "Pedro Clark", jobTitle: "Chief Executive Officer" },
      { "@type": "Person", name: "Vitor Escocard", jobTitle: "Sócio da Scale Company" },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Google Ads Search Certification (Skillshop)",
      recognizedBy: { "@type": "Organization", name: "Google" },
    },
  };
}

export type Faq = { question: string; answer: string };

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    inLanguage: "pt-BR",
    author: { "@type": "Organization", name: "Scale Company", url: `${SITE_URL}/` },
    publisher: {
      "@type": "Organization",
      name: "Scale Company",
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export type BreadcrumbItem = { name: string; path?: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path !== undefined && { item: `${SITE_URL}${item.path}` }),
    })),
  };
}

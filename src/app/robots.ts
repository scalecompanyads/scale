import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo-routes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/plano-comercial" },
      { userAgent: "*", disallow: "/scale-advogados-2" },
      { userAgent: "*", disallow: "/scale-advogados-3" },
      { userAgent: "*", disallow: "/treinamento-comercial" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

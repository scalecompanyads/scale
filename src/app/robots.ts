import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/scale-advogados-2", "/scale-advogados-3", "/scale-class"],
      },
    ],
    sitemap: "https://www.scalecompany.com.br/sitemap.xml",
  };
}

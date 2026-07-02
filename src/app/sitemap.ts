import { MetadataRoute } from 'next';
import { SITE_URL, seoRoutes } from '@/lib/seo-routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return seoRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

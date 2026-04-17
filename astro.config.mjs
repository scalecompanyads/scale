// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // URL canónica para sitemap, RSS e meta — alinhar ao domínio real na Vercel
  site: 'https://scaleco.com.br',

  trailingSlash: 'never',

  /**
   * `directory` gera `blog/index.html` → `/blog` funciona em hosts estáticos (ex.: Vercel).
   * `file` gerava só `blog.html` na raiz, sem `blog/index.html` → `/blog` dava 404.
   */
  build: {
    format: 'directory',
  },

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap({
      // i18n futuro: filter ou serialize
    }),
  ],

  vite: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@/lib': path.resolve(__dirname, 'src/lib'),
        '@/components': path.resolve(__dirname, 'src/components'),
      },
    },
  },
});

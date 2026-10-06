import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// SITE_URL and BASE_PATH are set by .github/workflows/deploy.yml from the repository:
// "/" on https://netsci2027.github.io, "/<repo>" for a dev preview (e.g. /conf-dev).
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://netsci2027.github.io';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  // Astro is the framework; it builds with Vite and renders React components.
  integrations: [react(), tailwind(), sitemap()],
});

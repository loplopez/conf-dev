import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// BASE_PATH is "/" for the public site and "/dev" for the dev preview
// (set by .github/workflows/deploy.yml depending on the repository).
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://netsci2027.github.io',
  base,
  // Astro is the framework; it builds with Vite and renders React components.
  integrations: [react(), tailwind(), sitemap()],
});

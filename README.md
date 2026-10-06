# NetSci Dresden 2026 — Conference Website

Conference website for **NetSci Dresden**, built with **Astro + React + Tailwind CSS**
(Astro builds with **Vite** under the hood). Static, fast, SEO-ready, and accessible.

> **Demo mode:** the site currently runs in *landing-only* mode — the full navbar is
> shown but only **Home** and **Registration** navigate; all other items are intentionally
> inactive until content is approved. One flag controls this (see below).

---

## 🚀 Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → ./dist/
npm run preview  # preview the production build
```

---

## 🧱 Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro 4** | File-based routing, static output, image optimization, SEO |
| Build tool | **Vite** | Comes built into Astro |
| UI components | **React 18** (`@astrojs/react`) | Components written as `.tsx`; rendered to static HTML, JS shipped only where needed (the navbar) |
| Styling | **Tailwind CSS 3** | Utility classes + design tokens (`tu.*` palette) in `tailwind.config.mjs` |
| Extras | `@astrojs/sitemap`, `astro:assets` | Sitemap, AVIF/responsive images |

**How React + Astro work together here:** Astro owns the pages/routes (`.astro`) and the
HTML document. The visual pieces are React components (`.tsx`). Astro renders them to plain
HTML at build time, so visitors get a fast, mostly-zero-JS page. Only the interactive
**Navbar** is hydrated in the browser (`client:load`).

---

## 📁 Folder structure

See [STRUCTURE.md](STRUCTURE.md) for a plain-language tour. In short:

```
src/
├─ assets/        Images (optimized at build time)
├─ components/
│  ├─ layout/     Site chrome: Navbar.tsx, Footer.tsx
│  ├─ sections/   Page building blocks: Hero, About, ImportantDates, Contributions,
│  │              DiscoverDresden, Registration   (all .tsx)
│  └─ ui/         Small reusable pieces: SectionLabel, PageHero, Prose   (.tsx)
├─ content/       Markdown content collections (speakers/, satellites/)
├─ data/          Plain data: conference, navigation, partners, program, site
├─ i18n/          Text strings (ui.ts) + helpers (utils.ts)
├─ layouts/       Astro page shells: Layout.astro, PageLayout.astro
├─ lib/           Small helpers: cn.ts (className combiner)
├─ pages/         Routes — each file is a URL (.astro)
└─ styles/        global.css
```

---

## ✏️ Common edits

| To change… | Edit… |
|---|---|
| Hero title, dates, all UI text | `src/i18n/ui.ts` |
| Important dates / stats / contribution formats | `src/data/conference.ts` |
| Navigation menu items | `src/data/navigation.ts` |
| Registration fees & policy | `src/components/sections/Registration.tsx` |
| Speakers / satellites | add a Markdown file under `src/content/` |
| Colours / fonts | `tailwind.config.mjs` |
| Hero / Dresden photo | replace `src/assets/tu-dresden.jpeg` |
| Site URL (sitemap, canonical, schema) | `astro.config.mjs` → `site` |

### Public site vs. dev preview

The same code builds two sites (see `.github/workflows/deploy.yml`):

| Repo | URL | What it shows |
|---|---|---|
| `netsci2027/netsci2027.github.io` | https://netsci2027.github.io | Public site: landing page only, menu hidden |
| `loplopez/conf-dev` (or any other copy) | https://loplopez.github.io/conf-dev | Dev preview: full site with menu, for sharing with the team |

Any repository other than `netsci2027/netsci2027.github.io` builds the full site under `/<repo-name>`;
the workflow sets `SITE_URL`, `BASE_PATH` and `PUBLIC_FULL_SITE` from the repository.
Locally, `npm run dev` always shows the full site (`.env.development`).

Publish the dev preview (the repo needs Settings → Pages → Source: GitHub Actions):

```bash
git remote add dev https://github.com/loplopez/conf-dev.git   # once
git push dev main                                              # every time you want to update it
```

Internal links and `/public` assets must use `u('/path')` from `src/lib/url.ts` so they work under a sub-path such as `/conf-dev`.

To launch the full public site, set `PUBLIC_FULL_SITE` to `'1'` for the main repo in the workflow.

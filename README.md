# Astrapē Motors — deployable site (`/site/`)

The **compiled marketing site**. Push the contents of this folder to the repo and GitHub
serves it at the domain root (`astrapemotors.com`) — pushing is the deploy. No FTP, no build
server.

## Architecture — lean + clean URLs
Pages are **lean**: each is just its own markup (8–40 KB) that links the **shared** design
system from `/ds/`, instead of inlining a ~450 KB copy of the bundle + fonts into every page.

```
site/
  index.html              → /                     (homepage)
  about/index.html        → /about/
  capabilities/index.html → /capabilities/
  systems-engineering/    → /systems-engineering/  (the "Process" nav target)
  integration/ controls/ electrification/ automation/ rnd/   (services)
  automotive/ marine/ industrial/ agricultural/ energy/ government/  (6 sectors)
  case-study/  bench/
  404.html                (self-contained)
  ds/                     ← SHARED, cached across every page
    support.js   (DC runtime)
    bundle.js    (component bundle — copy of _ds_bundle.js, renamed: no leading underscore)
    styles.css   (+ tokens/ + patterns/ — the one stylesheet, @imports the rest)
  favicon.svg  og-image.png  assets/
```

**Clean URLs:** every page is `<slug>/index.html`, served at `/<slug>/`. Internal nav links
use clean paths (`/about/`, `/bench/`, `/#sectors`).

**Shared assets are referenced *relatively*** (`ds/…` from the homepage, `../ds/…` from a
`<slug>/` page) — not root-absolute `/ds/…`. Relative survives any mount point and works in
preview; root-absolute would 404 under the preview's `…/serve/site/` prefix. **Never** name
the shared folder or any served file with a leading `_` — GitHub Pages/Jekyll silently drops
underscore-prefixed paths (that's why it's `ds/` + `bundle.js`, not `_ds/` + `_ds_bundle.js`).

Each page carries its own `<title>`, description, canonical, Open Graph + Twitter card,
theme-color and favicon in static `<head>` (crawler/OG facing — no JS needed). Fonts load from
Google Fonts CDN (via `ds/styles.css`).

## Page content
The six **sector pages** are generated from the one `templates/industry-page/` master by
substituting each market's name / label / lede / intro / focus / specs. Per-sector copy is the
single source of truth in `templates/industry-page/industries.data.js` (Automotive is the
master's own content).

**Placeholders never ship.** Any element marked `data-placeholder` in a template (e.g. the
homepage `#testimonials` block with demo quotes) is stripped from the built site but kept in
the template as a design reference — re-add real content there and it flows through on the next
build. The About bench panel shows the four disciplines on call (real content), not headshot
placeholders.

## How it's built (to regenerate)
These are **generated artifacts — never hand-edit them.** Rebuild from the templates:
1. Copy the shared design system into `site/ds/`: `support.js`, `styles.css`, `tokens/`,
   `patterns/`, and `_ds_bundle.js` → **renamed `bundle.js`**.
2. For each template, in the page markup: swap `./support.js` → relative `ds/support.js`
   (`../ds/…` for `<slug>/` pages), and replace the helmet's `./ds-base.js` line with a static
   `<link rel="stylesheet" href="…ds/styles.css">` + `<script src="…ds/bundle.js">`.
3. Strip the `<template id="__bundler_thumbnail">` and any `data-placeholder` element.
4. Rewrite cross-page links (`../<slug>/<File>.dc.html` → clean `/<slug>/`, home → `/`,
   flat `automotive.html` → `/automotive/`).
5. Inject the per-page `<head>` block (title/description/canonical/OG/Twitter/favicon).
6. Sectors: substitute each `industries.data.js` entry into the industry master.

## Social share card
`og-image.png` (1200×630, `twitter:card = summary_large_image`) and `favicon.svg` are the
bolt-over-hero-gradient mark — regenerate `og-image.png` from `assets/og-card.html`. The
`og:image` / `og:url` / canonical URLs are absolute to `astrapemotors.com`; on a staging
domain, swap the host or previews won't resolve.

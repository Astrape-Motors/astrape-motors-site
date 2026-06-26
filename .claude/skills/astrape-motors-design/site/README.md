# Astrapē Motors — deployable site (`/site/`)

This folder is the **compiled, self-contained marketing site** — ready to FTP to the web
root of `astrapemotors.com`. Every page is a single HTML file with the design-system
stylesheet, the component bundle, fonts (Google Fonts CDN), and the DC runtime **inlined**.
No build step, no server, no `_ds_bundle.js` dependency at runtime.

## Pages
| File | Page | Source template |
|---|---|---|
| `index.html` | Homepage | `templates/marketing-homepage/` |
| `capabilities.html` | Capabilities index | `templates/capabilities/` |
| `integration.html` | Systems Integration — what we do most (/00, blue→violet) | `templates/service-integration/` |
| `electrification.html` | Electrification (blue) | `templates/service-electrification/` |
| `controls.html` | Controls (clay) | `templates/service-controls/` |
| `automation.html` | Automation & Test (sage) | `templates/service-automation/` |
| `rnd.html` | R&D & Consulting (plum) | `templates/service-rnd/` |
| `automotive.html` | Automotive sector | `templates/industry-page/` |
| `marine.html` | Marine sector | `templates/industry-page/` |
| `industrial.html` | Industrial sector | `templates/industry-page/` |
| `agricultural.html` | Agricultural sector | `templates/industry-page/` |
| `energy.html` | Energy & Power sector | `templates/industry-page/` |
| `government.html` | Government & Defense sector | `templates/industry-page/` |
| `case-study.html` | Project case study | `templates/case-study/` |
| `about.html` | About / team | `templates/about/` |
| `bench.html` | Join the bench (PE recruiting / partner network) | `templates/join-the-bench/` |
| `404.html` | Not-found page | hand-written |
| `favicon.svg` | Bolt-over-gradient favicon (also inlined per-page) | — |
| `og-image.png` | 1200×630 social share card | `assets/og-card.html` |

Cross-page links are flat (`capabilities.html`, `automotive.html`, …) so the folder deploys
to the web root as-is. Each page carries its own `<title>`, `<meta name="description">`,
Open Graph + Twitter tags, theme-color, and the favicon. The six **sector pages** are all
generated from the one `templates/industry-page/` master — the build substitutes each
sector's name, lede, intro, focus points and spec tags into a copy (Automotive is the
master's own content). Edit the master once; every sector page inherits structure and chrome.
Per-sector copy lives in `templates/industry-page/industries.data.js` — the single source of
truth for the six markets; edit it there, then re-export.

## How it was built (to regenerate)
These are **generated artifacts** — never hand-edit them. To rebuild after changing a
template or the design system:
1. In each template, the helmet's `ds-base.js` line is swapped for static
   `<link rel="stylesheet" href="../../styles.css">` + `<script src="../../_ds_bundle.js">`
   (so the inliner can inline them), saved as a throwaway `_build.dc.html`.
2. **Homepage only — page/template divergence:** the deployed homepage is the *real*
   Astrapē site (a one-person firm with no stock imagery yet), so the build strips two
   demo-only blocks from `index.html` that stay in the template: the `#teamPortraits`
   placeholder grid (team panel rebalances to a single column) and the entire
   `#testimonials` section. They remain in `templates/marketing-homepage/` as reusable
   patterns — re-add real portraits/quotes there and drop the strip when you have them.
3. Bundle each `_build.dc.html` to a self-contained file (the project's HTML inliner).
4. Rewrite cross-page links (`../<slug>/<File>.dc.html` → flat `.html`), inject per-page
   `<title>`/meta/favicon into **both** the served outer `<head>` (crawler/OG facing) and
   the JS-swapped inner document (live tab), set the unpack splash to `#0A0907`.
5. Delete the `_build.dc.html` copies.

## Social share card
Every page serves a full Open Graph + Twitter card in its **static (no-JS) `<head>`** — so
crawlers (Facebook, LinkedIn, Slack, X) that don't run JavaScript pick it up. The share
image is `og-image.png` (1200×630, `twitter:card = summary_large_image`), referenced by its
absolute URL `https://astrapemotors.com/og-image.png`. Both the share image and `favicon.svg`
are the **bolt-over-hero-gradient rounded-square mark** — regenerate from `assets/og-card.html`
(OG) and the inline favicon SVG in the build step if the brand evolves.

> The `og:image` URL is absolute to `astrapemotors.com`. On a staging domain, swap the host
> or previews won't resolve.

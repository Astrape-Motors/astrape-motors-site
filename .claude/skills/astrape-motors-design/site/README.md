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
| `electrification.html` | Electrification (blue) | `templates/service-electrification/` |
| `controls.html` | Controls (clay) | `templates/service-page/` |
| `automation.html` | Automation & Test (sage) | `templates/service-automation/` |
| `rnd.html` | R&D & Consulting (plum) | `templates/service-rnd/` |
| `case-study.html` | Project case study | `templates/case-study/` |
| `about.html` | About / team | `templates/about/` |
| `404.html` | Not-found page | hand-written |
| `favicon.svg` | Bolt favicon (also inlined per-page) | — |

Cross-page links are flat (`capabilities.html`, `controls.html`, …) so the folder deploys
to the web root as-is. Each page carries its own `<title>`, `<meta name="description">`,
Open Graph + Twitter tags, theme-color, and the favicon.

## How it was built (to regenerate)
These are **generated artifacts** — never hand-edit them. To rebuild after changing a
template or the design system:
1. In each template, the helmet's `ds-base.js` line is swapped for static
   `<link rel="stylesheet" href="../../styles.css">` + `<script src="../../_ds_bundle.js">`
   (so the inliner can inline them), saved as a throwaway `_build.dc.html`.
2. Bundle each `_build.dc.html` to a self-contained file (the project's HTML inliner).
3. Rewrite cross-page links (`../<slug>/<File>.dc.html` → flat `.html`), inject per-page
   `<title>`/meta/favicon into the inner document, set the unpack splash to `#0A0907`.
4. Delete the `_build.dc.html` copies.

## Social share card
Every page serves a full Open Graph + Twitter card in its **static (no-JS) `<head>`** — so
crawlers (Facebook, LinkedIn, Slack, X) that don't run JavaScript pick it up. The share
image is `og-image.png` (1200×630, `twitter:card = summary_large_image`), referenced by its
absolute URL `https://astrapemotors.com/og-image.png`. The card art is regenerated from
`assets/og-card.html` (the brand bolt + hero glows + wordmark + headline); re-render it to a
1200×630 PNG if the brand evolves.

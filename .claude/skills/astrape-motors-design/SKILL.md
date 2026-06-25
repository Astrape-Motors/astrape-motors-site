---
name: astrape-motors-design
description: Use this skill to generate well-branded interfaces and assets for Astrapē Motors — a systems engineering firm that makes things move with electric motors and software (EV / HEV powertrains, controls, automation & test, R&D; automotive, marine & research). Use for production code or throwaway prototypes, mocks, slides, and marketing pages. Contains the full brand guide, design tokens, fonts, logo assets, React component library, page templates, and a deployable marketing site.
user-invocable: true
---

# Astrapē Motors — design system

You are designing for **Astrapē Motors** (ἀστραπή — Greek for *lightning*). A systems
engineering firm: senior, precise, engineering-honest, unshowy. They close the loop
**sense → compute → actuate** and take the hard problems no one else will.

**If invoked with no brief:** ask what they're building (production code? a prototype? a
slide? a marketing page?), ask a couple of scoping questions, then act as an expert brand
designer. Output **static HTML artifacts** for mocks/slides/prototypes (copy assets out
first); read the rules here and design directly in the repo for production work.

---

## Start here (read in this order)
1. **`readme.md`** — the full design guide. The three systems, content voice, visual
   foundations, iconography. Non-negotiable reading before you design.
2. This file — the fast API map and recipes.
3. The specific `components/*/*.prompt.md` for any component you'll use.
4. **`reference/handoff-homepage/`** — the canonical production master + the Color Harmony,
   Heading Stack, and Dichotomous Key system specs. Ground truth when in doubt.

---

## How to consume the system

**Foundations (always):** link the single entry point — every token, font, and foundation
comes with it:
```html
<link rel="stylesheet" href="styles.css">
```
Tokens are CSS custom properties (`--brand-blue`, `--bg`, `--text-primary`,
`--disc-controls`, `--font-display`, …). 140 of them; never hard-code a hex you can get
from a token. Fonts (Space Grotesk / IBM Plex Sans / IBM Plex Mono) load via `@import` in
`tokens/fonts.css` — no local binaries.

**Components (React):** the compiler bundles every component into `_ds_bundle.js` under
`window.AstrapMotorsDesignSystem_547f1f`. In a standalone HTML artifact:
```html
<link rel="stylesheet" href="styles.css">
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" …></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" …></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" …></script>
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Wordmark, Button, SiteNav, SiteFooter, CapabilityCard } = window.AstrapMotorsDesignSystem_547f1f;
  // …render…
</script>
```
In a real React app, import the `components/**/*.jsx` sources directly. They only import
React and read CSS custom properties — so they recolor automatically with the tokens.

---

## Component library (14) — `window.AstrapMotorsDesignSystem_547f1f.*`

Each lives in `components/<group>/<Name>.jsx` with a sibling `.d.ts` (props) and
`.prompt.md` (usage + examples). Read the prompt before using.

**brand/**
- `Bolt` — the lightning mark (CSS clip-path polygon). `size`, `glow`, `glowAmount`,
  `color`, `float`. The brand's only icon.
- `Wordmark` — `ASTRAPĒ MOTORS` lockup; the `Ē` is keyed in `accentColor` (electric blue
  by default; pass a discipline token for keyed pages). `size`, `glow`, `accentColor`.

**buttons/**
- `Button` — `variant` (`primary` glow · `ghost` hairline · `cream`), `size` (`sm`/default/`lg`),
  `href` or `onClick`. One CTA per view; never shrink on press.

**labels/**
- `Eyebrow` — mono uppercase kicker; `color` carries a discipline key.
- `Tag` — mono spec chip; `color` (discipline) or `variant="plain"`.
- `SectionHeading` — Space Grotesk display. `level` (`h1`/`h2`/`contact`), `gradient`
  (`none`/`brand`/`controls`/`rnd`). **Gradient rule:** only on the single subject heading
  of a view, and only one gradient on screen.

**content/**
- `CapabilityCard` — discipline card: `index` (`/01`), `title`, `body`, `tags`, key-bar `color`.
- `StatRow` — mono label / value / sub triplet row (hero & proof strips).
- `Marquee` — slow 24s scrolling term strip (`/`-separated).
- `ProcessStepper` — numbered phase walk (sense → compute → actuate).
- `LoopBlock` — the closed-loop capability block.
- `TestimonialCard` — quote + attribution, bordered (not shadowed).

**navigation/**
- `SiteNav` — sticky blurred header: wordmark + links + one Contact button. `links[]`,
  `cta`, `onContact`, `current`. The canonical page top.
- `SiteFooter` — wordmark + tagline, link columns, mono baseline. `columns[]`, `tagline`,
  `year`, `domain`. The canonical page foot.

> Build pages by **composing** these — never re-implement a Button/nav/footer inline.

---

## Page templates (`templates/<slug>/<Name>.dc.html`)

Copy-ready starting pages. Each loads the system via its `ds-base.js` and composes the
components. Edit the markup directly — it's plain editable HTML that can mount components.

- `marketing-homepage` — full homepage (nav → hero → cybernetics quote → process → sectors → team → testimonials → contact → footer)
- `capabilities` — capabilities index: the loop, the four specialties, software & data
- `service-page` (**Controls**) — the canonical service-detail pattern (L3 gradient rule)
- `service-electrification` · `service-automation` · `service-rnd` — the other three discipline pages (blue / sage / plum)
- `case-study` — project deep-dive (problem → sense/compute/actuate → metrics → quote)
- `about` — who we are, the cybernetics philosophy, the senior team (aubergine PEOPLE surface)
- `pitch-deck` — five 16:9 capability slides
- `coming-soon` — minimal holding page

---

## Deployable site (`site/`)

A compiled, self-contained marketing site — 9 pages + `404.html` + `favicon.svg` +
`og-image.png`, every dependency inlined, FTP-ready. Generated from the templates;
**never hand-edit** — re-export from the templates. Full page map + rebuild steps +
social-card details in **`site/README.md`**. Each page ships a complete Open Graph /
Twitter card in its static `<head>` (`og-image.png`, 1200×630).

---

## Recipes

- **New marketing page** → copy the closest `templates/<slug>/`, swap copy, keep `SiteNav`
  / `SiteFooter`, obey the heading-stack gradient rule. To deploy, re-bundle into `site/`
  (steps in `site/README.md`).
- **A slide** → start from `templates/pitch-deck/`; 1280×720, the bolt + wordmark, one
  gradient per slide max.
- **A throwaway mock/prototype** → standalone HTML: link `styles.css` + `_ds_bundle.js`,
  compose components, copy `assets/bolt*.svg` in. Don't reference the system by absolute path.
- **A static deliverable for a non-technical viewer** → render to HTML and hand them the file.

---

## Non-negotiables
- **Color = discipline.** Warm near-black spine `#0A0907` (low chroma — *never* blue-black).
  One electric blue + three muted warm keys (clay/sage/plum). Color appears **only** where
  it means a discipline; markets, sections, and chrome stay neutral.
- **One gradient per view**, on the single most important heading. Hero = brand pair
  (blue→violet); a discipline's own page drops to that discipline's two-tone.
- **Type:** Space Grotesk headings (tight −0.02 to −0.035em) · IBM Plex Sans body (1.6) ·
  IBM Plex Mono eyebrows/tags/readouts (wide .14–.30em).
- **Surface = content mode:** FOCAL (glow) · INFO (flat dark) · METHOD (recessed blueprint
  grid) · PEOPLE (floating aubergine panel).
- **Detailing:** small radii (tags 2px, cards 4–6px, pills round), 1px hairlines at
  `rgba(255,255,255,.07–.10)`, cards bordered not shadowed, discipline key-bars 30×3px.
- **Motion** minimal: marquee, a gentle bolt float, slow glow breathe, 6s quote cross-fade,
  whisper of scroll-parallax on glows only. No bounce, no spring, hover = brighten, press =
  no shrink. Always respect `prefers-reduced-motion`.
- **Voice:** confident, senior, blunt, engineering-honest. "We" to "you". Sentence-case
  headlines, often two-beat with a period. Proof over adjectives. **No emoji ever.** The
  only Unicode flourishes are `· / —` and the brand's own `ē`.
- **Iconography:** the bolt is the *only* glyph. No icon library, no emoji — use a mono
  label, key-bar, `/0N` index, or legend dot instead.
- **Copy guardrails (legal):** Astrapē holds no PE license / COA. **Never** ship "professional
  engineer(ing)", "P.E.", "licensed/registered engineer", or any "seal/stamp" claim. Use
  "engineering firm/services" only when tethered to the product/build frame, never as a
  services-for-hire offer; "systems engineering" as a *discipline* is fine. Full rule +
  rationale (ORC 4733.16): `guidelines/copy-guardrails.md`. Enforced by `node scripts/copy-audit.mjs`.

## Agent gotchas
- Don't hand-edit `_ds_bundle.js` / `_ds_manifest.json` / `_adherence.oxlintrc.json` or
  anything in `site/` — they're generated. Re-export from sources.
- Don't invent hexes or new accent colors — use tokens; if you must, derive in `oklch` from
  the existing wheel geometry (see Color Harmony spec).
- Don't add a second gradient or a second nav CTA to a view.
- The `Ē` is keyed (electric blue, or the page's discipline) — keep it; never flatten the
  wordmark to plain "ASTRAPE".
- Copy lives in many places (template `.dc.html`, the `SiteFooter` `tagline` default prop,
  per-page meta ×3, the exported `site/` + root HTML). Change copy at the **source** — the
  `.dc.html` template **and** any component default prop that bakes it in — then re-export;
  don't patch one rendered copy. Run `node scripts/copy-audit.mjs` before shipping.

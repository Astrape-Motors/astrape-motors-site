# Astrapē Motors — Design System

The brand, foundations, components and UI kit for **astrapemotors.com** — a **systems
engineering firm** specializing in making things move with electric motors and software
(EV / HEV powertrains, controls, automation & test, R&D; automotive, marine & research).
At the core it's cybernetics — *sense → compute → actuate* — held together by systems
engineering. This system lets a design agent produce on-brand interfaces, slides and assets
for Astrapē Motors.

> **Astrapē** (ἀστραπή) is Greek for *lightning / flash*. The brand is electric, precise,
> senior, and unshowy — systems engineers who make the things that move actually move.

## Sources (for the reader, if you have access)
- **GitHub:** [`Astrape-Motors/astrape-motors-site`](https://github.com/Astrape-Motors/astrape-motors-site)
  — the static marketing site. Explore it to build better Astrapē designs.
- The three **system specs** — **Color Harmony**, **Heading Stack** and **Dichotomous
  Key** — live in [`reference/handoff-homepage/system-specs/`](reference/handoff-homepage/system-specs/)
  and remain the ground truth for the color-wheel geometry and the gradient rules. The same
  folder keeps the original homepage design master + handoff `README.md` as a **historical
  record** of the first build — useful for context, but the live source of truth is now the
  templates, tokens and components in this project, not that handoff.

---

## The three systems this brand runs on
1. **Color = discipline.** Four keys — **blue** (Electrification), **clay** (Controls),
   **sage** (Automation & Test), **plum** (R&D) — appear *only* where they mean a
   discipline (capability cards, process phases, the hero legend). Markets, sections and
   chrome stay neutral. The warm tones aren't picked by eye; they're rotated off the
   electric blue on the color wheel (triad + complement). See `Color Harmony`.
2. **The gradient is leveled emphasis.** One gradient per view, on the most important
   heading. L1 hero = the brand pair (blue→violet). A heading that *names a discipline*
   in its own dedicated view drops to that discipline's two-tone gradient. Everything
   else stays solid, with the key carried by the eyebrow or a key-bar. See `Heading Stack`.
3. **Surfaces encode content mode.** FOCAL (glow — the two brand moments) · INFO (flat
   dark) · METHOD (recessed blueprint grid) · PEOPLE (a floating aubergine panel). A
   section's surface matches its mode.

*(A fourth axis — **shape = market** — is designed but **shelved**; see the Dichotomous
Key spec. Do not build it yet.)*

---

## Content fundamentals — how Astrapē writes
- **Voice:** confident, senior, blunt. Engineering-honest, never salesy. A systems
  engineering firm built on **four disciplines** — electrification, controls, automation & test,
  and R&D. **Systems integration is the work we do most**: most projects are, underneath, an
  integration problem — subsystems made to behave as one machine (requirements, interfaces,
  architecture, bring-up, V&V). Frame it as the most-common work and the thread through the
  four, **not** a fifth discipline or a tier ranked above them. We work at the **systems level**
  and bring in a PE for stamped detail design — copy claims architecture / integration /
  controls / V&V, never component-level ME/EE design. The brand is the team that "takes the
  hard problems no one else will."
- **Person:** "we" (the firm) speaking to "you" (the client). Direct address.
  *"You work directly with the people doing the work."*
- **Casing:** sentence case for headings (*"Land and sea."*, *"Senior engineers. No
  handoffs."*). ALL-CAPS reserved for mono eyebrows, tags, legends and the wordmark.
- **Headlines** are short, declarative, often two-beat with a period: *"Electrify
  everything that moves."* / *"From whiteboard to validated hardware."*
- **Proof over adjectives.** Copy leans on concrete method (*"HIL / SIL rigs"*,
  *"model-based design"*, *"production-ready release"*) not hype. *"Every stage produces
  something you can measure — not a slide deck."*
- **Anti-fluff stance** is itself a value: small team, few projects at a time, no account
  managers, no junior bench. Say it plainly.
- **Punctuation:** em-dashes for asides; a mid-dot ` · ` separates mono list items;
  a slash `/` separates marquee terms. No exclamation points.
- **Emoji:** never. **Unicode:** the mid-dot `·`, slash `/`, em-dash `—`, and the brand's
  own `ē` (e-macron) in "Astrapē".
- **Numbers/labels** are mono and terse: `/01`, `01 — WHAT WE DO`, `EV · HEV`, `© 2026`.

---

## Visual foundations
- **Color vibe:** a warm near-black spine (`#0A0907`, low-chroma, *not* blue-black) lit by
  one electric blue and three muted warm discipline keys. Cool brand, warm structure —
  they sit together because they share wheel geometry, not by accident.
- **Type:** **Space Grotesk** (display / all headings / wordmark, tight −0.02 to −0.035em
  tracking), **IBM Plex Sans** (body, 1.6 line-height), **IBM Plex Mono** (eyebrows, tags,
  readouts, wide .14–.30em tracking). Headings scale fluidly with `clamp()`.
- **Backgrounds:** flat dark fills, not photos. The only "imagery" is a faint **blueprint
  grid** on the METHOD band (1px lines at 6% blue, 36px cells) and soft **radial glows**
  on FOCAL sections (blue top-right, violet bottom-left). No textures, no noise, no
  full-bleed photography in chrome — real photos live only inside sector/team slots.
- **Light is the system.** CTAs and the lightning mark carry a soft colored **glow**
  (`box-shadow: 0 0 var(--glow) color-mix(accent, transparent)`). The PEOPLE panel
  **floats** on a big soft drop shadow + inset top highlight. The METHOD band is
  **recessed** with a double inset shadow so neighbours read as raised.
- **Borders:** 1px hairlines at `rgba(255,255,255,.07–.10)`. Cards are bordered, not
  shadowed. Discipline cards add a 30×3px **key-bar** in the discipline color.
- **Corner radii** are small and deliberate: tags 2px, cards 4–6px, portraits 10px, the
  one big panel 22px, pills fully round (40px). Engineering-flat, not bubbly.
- **Motion** is minimal and linear: a 24s marquee scroll, a 5s ±9px bolt float, a 6s quote
  cross-fade, an 18ms hover brighten, and a *whisper* of scroll-parallax on background glows
  only. **No bounce, no spring.** Respect reduced-motion.
- **Hover:** brighten (`filter: brightness(1.08)`) / underlineless link color shift.
  **Press:** no shrink — the brand stays still and precise.
- **Affordance — make clickable things obviously clickable.** A bordered card is a *container*
  unless it carries an affordance. Two shared utilities supply it (`patterns/affordance.css`):
  `.am-card` wraps a card in an `<a>` (corner arrow-chip + hover lift + border glow; set `--k`
  to a discipline color to key it, leave unset for neutral markets); `.am-arrow-link` is the
  inline mono CTA (brand-blue, underline, sliding `→`). Static cards get neither — that
  contrast is what tells a visitor what's a link.
- **Layout:** content capped at 1180px (1240px for the floating panel), centered, 8vw
  gutters, ~104px section padding. Sticky blurred nav. `overflow-x: hidden` wrapper.

---

## Iconography
Astrapē is **near-iconless by design** — an engineering brand that trusts type, color and
geometry over decoration.
- **The one glyph is the lightning mark** — a stylised bolt built from a CSS `clip-path`
  polygon (not a font, not a drawn illustration). It's in `assets/bolt.svg` (electric
  blue) and `assets/bolt-mono.svg` (`currentColor`), and as the `Bolt` / `Wordmark`
  components. Use it for the lockup, the contact moment, and favicons. Nothing else
  functions as an icon.
- **No icon library, no icon font, no emoji.** Where a UI elsewhere would reach for an
  icon, Astrapē uses a **mono label**, a **key-bar**, a **`/0N` index**, or a colored
  **legend dot**. Keep it that way — adding a Lucide/Heroicons set would be off-brand.
- If a future surface genuinely needs functional icons (e.g. a dense app UI not present
  today), match the system: 1.5px stroke, square-ish, monochrome, no fills — and flag it,
  because the current brand has no such precedent.

---

## Token substitution note
The three typefaces are the **real** brand fonts, served from **Google Fonts** (exactly as
the production site loads them) via `@import` in `tokens/fonts.css`. No local font binaries
ship with this system. If you need fully offline/self-hosted webfonts, drop the `.woff2`
files in `assets/fonts/` and swap the `@import` for `@font-face` rules — **ask the user for
the licensed files first.**

---

## Index / manifest
**Foundations (CSS, consumers link `styles.css`):**
- `styles.css` — entry point (`@import` manifest only)
- `tokens/fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`

**Components** (`window.AstrapMotorsDesignSystem_547f1f.*`):
- `components/brand/` — `Bolt`, `Wordmark`
- `components/buttons/` — `Button` (primary · ghost · cream)
- `components/labels/` — `Eyebrow`, `Tag`, `SectionHeading`
- `components/content/` — `CapabilityCard`, `StatRow`, `Marquee`, `ProcessStepper`, `LoopBlock`, `TestimonialCard`
- `components/navigation/` — `SiteNav` (sticky blurred header), `SiteFooter` (canonical page foot) — the shared page chrome; every page composes these rather than inlining a `<nav>`/`<footer>`
- `patterns/affordance.css` — `.am-card` / `.am-arrow-link` interaction utilities (shipped via `styles.css`)

**Foundation cards** (Design System tab): `guidelines/*.html` — grouped Colors / Type /
Spacing / Brand.

**UI kit:** `ui_kits/marketing-site/` — interactive homepage recreation (`index.html`,
`sections.jsx`, `app.jsx`).

**Deployable site:** `site/` — the compiled, self-contained marketing site (16 pages +
`404.html` + `favicon.svg` + `og-image.png`), ready to FTP to the web root. Generated from
the templates; see `site/README.md` for the full page map and rebuild steps. **Never
hand-edit** the files in `site/` — re-export from the templates instead.

**Templates** (`templates/<slug>/` — copy-ready starting pages, each a `.dc.html`):
- `marketing-homepage` — the full homepage (nav → hero → capabilities → process → sectors → cybernetics → team → testimonials → contact → footer)
- `capabilities` — capabilities index: the cybernetic loop, the systems-integration feature (what we do most), the four discipline specialties, and software & data
- `service-integration` — **Systems Integration** page: the work we do most, framed as the through-line under the four specialties (the only service page that earns the blue→violet brand pair)
- `service-controls` — **Controls** detail page (the canonical service-detail pattern; L3 discipline-gradient rule)
- `service-electrification` · `service-automation` · `service-rnd` — the other three discipline detail pages (blue / sage / plum), siblings of Controls
- `industry-page` — **sector page** master (Automotive); the six deployed sector pages (automotive, marine, industrial, agricultural, energy, government) are all generated from this one master by substituting `industries.data.js`. Markets stay neutral; only the capabilities they surface carry discipline color.
- `case-study` — project deep-dive (problem → sense/compute/actuate → metrics → quote)
- `about` — who we are, the cybernetics philosophy, the senior team (aubergine PEOPLE surface)
- `join-the-bench` — PE recruiting / partner-network page: the disciplines we call on, how the bench works, what we ask
- `pitch-deck` — five 16:9 capability slides
- `coming-soon` — minimal single-screen holding page

**Reference:** `reference/handoff-homepage/system-specs/` — the **Color Harmony**, **Heading
Stack** and **Dichotomous Key** specs (ground truth for color + gradient rules). The rest of
`reference/handoff-homepage/` is the original homepage design master + handoff, kept as a
historical record of the first build.

**Skill:** `SKILL.md` — portable Agent-Skill wrapper.

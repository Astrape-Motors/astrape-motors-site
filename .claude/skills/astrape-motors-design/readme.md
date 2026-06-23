# Astrapē Motors — Design System

The brand, foundations, components and UI kit for **astrapemotors.com** — an
electrification, controls & automation engineering consultancy (EV / HEV, automotive &
marine, controls/automation R&D). This system lets a design agent produce on-brand
interfaces, slides and assets for Astrapē Motors.

> **Astrapē** (ἀστραπή) is Greek for *lightning / flash*. The brand is electric, precise,
> senior, and unshowy — engineers who electrify the things that move.

## Sources (for the reader, if you have access)
- **GitHub:** [`Astrape-Motors/astrape-motors-site`](https://github.com/Astrape-Motors/astrape-motors-site)
  — the static marketing site. Explore it to build better Astrapē designs.
- The production design master + three reference specs are preserved in
  [`reference/handoff-homepage/`](reference/handoff-homepage/): the homepage `.dc.html`,
  a detailed handoff `README.md`, and the **Color Harmony**, **Heading Stack** and
  **Dichotomous Key** system specs. These are the canonical source of truth.

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
- **Voice:** confident, senior, blunt. Engineering-honest, never salesy. The brand is the
  team that "takes the hard electrification problems no one else will."
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
- **Motion** is minimal and linear: a 24s marquee scroll, a 5s ±9px bolt float, an 18ms
  hover brighten. **No bounce, no spring, no parallax.** Respect reduced-motion.
- **Hover:** brighten (`filter: brightness(1.08)`) / underlineless link color shift.
  **Press:** no shrink — the brand stays still and precise.
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
- `components/content/` — `CapabilityCard`, `StatRow`, `Marquee`, `ProcessStepper`

**Foundation cards** (Design System tab): `guidelines/*.html` — grouped Colors / Type /
Spacing / Brand.

**UI kit:** `ui_kits/marketing-site/` — interactive homepage recreation (`index.html`,
`sections.jsx`, `app.jsx`).

**Reference:** `reference/handoff-homepage/` — production design master + handoff +
Color Harmony / Heading Stack / Dichotomous Key specs.

**Skill:** `SKILL.md` — portable Agent-Skill wrapper.

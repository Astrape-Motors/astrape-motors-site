---
name: astrape-motors-design
description: Use this skill to generate well-branded interfaces and assets for Astrapē Motors (an EV / hybrid / marine electrification, controls & automation engineering consultancy), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out
and create static HTML files for the user to view. If working on production code, you can
copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build
or design, ask some questions, and act as an expert designer who outputs HTML artifacts
_or_ production code, depending on the need.

## Fast orientation
- **readme.md** — the full design guide: the three systems (color = discipline, gradient =
  leveled emphasis, surfaces = content mode), content voice, visual foundations, iconography.
- **styles.css** — the single CSS entry point. Link it (or `@import` it) and every token,
  font and foundation is available. Tokens live in `tokens/*.css`.
- **components/** — React primitives (`Bolt`, `Wordmark`, `Button`, `Eyebrow`, `Tag`,
  `SectionHeading`, `CapabilityCard`, `StatRow`, `Marquee`, `ProcessStepper`). Each has a
  `.prompt.md` with usage. They read CSS custom properties, so they recolor with the tokens.
- **ui_kits/marketing-site/** — a full interactive homepage recreation to copy from.
- **guidelines/*.html** — foundation specimen cards (colors, type, spacing, brand).
- **assets/** — the lightning mark (`bolt.svg`, `bolt-mono.svg`).
- **reference/handoff-homepage/** — the canonical production master + system specs.

## Non-negotiables
- Warm near-black spine (#0A0907, low chroma — never blue-black). One electric blue + three
  muted warm discipline keys. Color means discipline; never color a market or section.
- Space Grotesk headings (tight tracking) / IBM Plex Sans body / IBM Plex Mono labels.
- Small radii, 1px hairlines, soft glows, no bounce. No emoji. The bolt is the only icon.
- Sentence-case headlines; ALL-CAPS only for mono eyebrows/tags/wordmark.

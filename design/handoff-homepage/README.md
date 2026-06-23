# Handoff: Astrape Motors — Homepage

## Overview
Marketing homepage for **astrapemotors.com** — an electrification, controls & automation
engineering consultancy (EV / HEV, automotive & marine, controls/automation R&D). The page
introduces the brand, the four service disciplines, how the work gets done, the markets served,
the team, and a contact CTA. Replaces the Porkbun placeholder.

## About the Design Files
The design is authored as a **streaming "Design Component"** HTML file
(`Astrape Motors - Homepage (Real).dc.html`) in a visual design workspace. It is **already real,
production-grade HTML/CSS** — not a throwaway mock. It compiles to a **single self-contained
file** (`index.html`, ~418 KB, all fonts + runtime + markup inlined, works offline).

Because the source uses a small client runtime (`support.js`) that only the design workspace can
compile, the division of labor is:

- **Design master lives in the workspace** (the `.dc.html`). Visual/content changes happen there
  and a fresh `index.html` bundle is regenerated.
- **This repo's job** (you / Claude Code) is the **plumbing**: take the compiled `index.html`,
  place it at the repo root, run the existing quality/build/deploy pipeline, manage commits, and
  swap the image placeholders for real photography.

You do **not** need to "rebuild this in a framework." The site is intentionally a static,
self-contained page that matches this repo's existing static-hosting workflow. (If the team ever
moves to a component framework, the "Design Tokens" and "Sections" below are complete enough to
re-implement from scratch.)

## Fidelity
**High-fidelity.** Final colors, typography, spacing, layout, motion, and responsive behavior.
Recreate/treat pixel-for-pixel. The only unfinished pieces are the **6 image placeholders**
(see Assets).

## Repo Integration (this repository)
Observed from `README.md` + tree:
- Pipeline: `npm install` → `npm run dev` (local) → `npm run quality` (prettier/htmlhint/
  stylelint/eslint) → `npm run build` (outputs `dist/`) → `npm run deploy:ftp` (uploads `dist/`
  to Porkbun, FTP password via macOS Keychain service `astrape-motors-ftp`).
- A committed root `index.html` (~417 KB) — same self-contained-bundle shape as our output.

**Drop-in step:** replace the repo's root `index.html` with the `index.html` in this bundle, then
run the normal `build` + `deploy:ftp`.

⚠️ The bundle is one large inlined artifact, so `npm run quality` (htmlhint/stylelint/prettier)
will likely complain about it. Treat it like a build artifact: either add it to the relevant
lint/format ignore globs, or commit it to the path your build copies into `dist/` verbatim rather
than running it through the linters. Don't "fix" the lint warnings by reformatting the inlined
file — re-export from the design master instead.

## Sections (top → bottom)
Content max-width **1180–1240px**, centered, horizontal padding **8vw**.

1. **Nav** (sticky, `z-index:50`, `rgba(10,9,7,0.72)` + `backdrop-filter:blur(14px)`, 1px bottom
   hairline). Left: lightning mark (CSS `clip-path` polygon, electric blue, soft glow) + wordmark
   `ASTRAPE` (Space Grotesk 700, `letter-spacing:.2em`) + `MOTORS` at 45% opacity. Right: text
   links (Capabilities / Sectors / R&D / About) `#9AA3AF` + a filled blue pill "Contact".

2. **Hero** (FOCAL surface). Two soft radial glows (blue top-right, violet bottom-left).
   - Eyebrow = a **color legend**: `ELECTRIFICATION`(blue) · `CONTROLS`(clay) · `AUTOMATION`(sage)
     · `R&D`(plum), mono, `letter-spacing:.3em`, separators `#5d6470`.
   - H1 "Electrify everything that **moves.**" — Space Grotesk 700,
     `font-size:clamp(38px,8vw,88px)`, `line-height:.98`, `letter-spacing:-.035em`. The word
     "moves." uses a clipped gradient `linear-gradient(95deg,#5BE0FF,#9B8CFF)`.
   - Sub-paragraph `#A7AEB8`, 20px, max-width 560.
   - Buttons: primary blue pill "Start a project" (glow shadow) + ghost "Our capabilities".
   - Stat row: DOMAINS / METHOD / VALIDATION (mono labels `#5d6470` + Space Grotesk 600 values),
     1px dividers.

3. **Marquee** (toggleable). Mono ticker of capability terms, `#6b7280`, blue `/` separators,
   infinite `translateX(-50%)` scroll over `#090C10`, 1px hairlines top & bottom.

4. **Capabilities — "01 / WHAT WE DO"** (INFO surface, flat dark). Eyebrow neutral `#7d8590`.
   H2 "The full electrification stack, under one roof." + intro paragraph. 4-card grid
   (`#capGrid`, `repeat(4,1fr)`, gap 18). Each card: `#0C0F14`, 1px border `rgba(255,255,255,.08)`,
   radius 4, padding 28/24, and is **color-keyed by discipline**:
   - /01 Electrification → **#5BE0FF** (blue)
   - /02 Controls → **#E8924E** (clay)
   - /03 Automation & Test → **#A8BE6E** (sage)
   - /04 R&D & Consulting → **#C79AD6** (plum)
   Each card = a 30×3px key-color bar, mono `/0N` in key color, Space Grotesk 600 title, body
   `#9AA3AF`, and a key-color mono tag (border via `color-mix(... 32%, transparent)`).

5. **Process — "02 / HOW WE WORK"** (METHOD surface). Background `#0D0B08` + blueprint grid
   (two 1px `color-mix(#5BE0FF 6%)` line-gradients, 36px cell) + **recessed depth**:
   `box-shadow: inset 0 19px 32px -18px rgba(0,0,0,.72), inset 0 -19px 32px -18px rgba(0,0,0,.72)`
   and 1px hairlines top/bottom — so the neighboring sections read as raised above it.
   H2 "From whiteboard to validated hardware." 5-phase stepper (`repeat(5,1fr)`, 1px dividers),
   each phase **keyed to the discipline that leads it**:
   01 Scope → plum `#C79AD6`, 02 Model → clay `#E8924E`, 03 Build → blue `#5BE0FF`,
   04 Validate → sage `#A8BE6E`, 05 Handoff → neutral `#7d8590`.

6. **Sectors — "03 / WHERE WE WORK"** (INFO surface). H2 "Land and sea." 2-card grid (`#sectorGrid`):
   Automotive + Marine. Each card: 1px border, radius 6, `#0A0D11`; a **photo slot** on top
   (280px tall) and a body with Space Grotesk 600 title (26px), `#9AA3AF` paragraph, and a row of
   mono spec tags `#8c93a0`. (Markets are intentionally **not** color-keyed — color = discipline,
   not market. See "Dichotomous Key" below.)

7. **Team — "04 / WHO YOU WORK WITH"** (PEOPLE surface). A **floating rounded panel** on the black:
   `max-width:1240`, `background:linear-gradient(165deg,#31242F,#271B25)` (aubergine),
   `border:1px solid rgba(255,255,255,.055)`, `border-radius:22`,
   `box-shadow:0 36px 90px -34px rgba(0,0,0,.75), inset 0 1px 0 rgba(255,255,255,.07)`,
   section padding `36px 8vw`, panel padding `74px 60px`. 2-col grid (`#teamGrid`): left = neutral
   mauve eyebrow `#B3A6AF`, H2 "Senior engineers. No handoffs." (`clamp(30px,5vw,46px)`), two
   `#BFB2BA` paragraphs, a **cream pill** "Meet the team" (`#EFE2D8` bg / `#33231A` espresso text)
   + a mono outline chip "SENIOR-ONLY · SINCE DAY ONE". Right = `#teamPortraits` clean 2×2 of
   **square** portrait slots, gap 14.

8. **Contact** (FOCAL surface). Centered. Soft blue radial glow behind. Floating lightning mark
   (gentle `translateY` float). H2 "Let's build something that moves." (`clamp(34px,6.5vw,58px)`),
   paragraph, blue pill "Start a project" + mono `hello@astrapemotors.com` (both `mailto:`).

9. **Footer**. `#080705`, 1px top hairline. Wordmark + mono descriptor; EXPLORE / CONTACT link
   columns; bottom row "© 2026 ASTRAPE MOTORS" / "astrapemotors.com".

## Interactions & Behavior
- **Sticky nav** with blur backdrop.
- **Marquee**: CSS `@keyframes amMarq { to { transform:translateX(-50%) } }`, 24s linear infinite.
- **Contact bolt float**: `@keyframes amFloat`, 5s ease-in-out infinite (±9px).
- **CTA glow**: `box-shadow: 0 0 var(--glow) color-mix(in srgb, var(--accent) N%, transparent)`.
- **Anchor nav**: in-page `#capabilities / #sectors / #process / #team / #contact`.
- **Image slots**: drag-and-drop / click-to-browse; `cover` slots support double-click reframe.
- **Responsive breakpoints** (in the `<style>` head block):
  - `@media (max-width:920px)`: `#capGrid`→2 cols, `#sectorGrid`→1, `#teamGrid`→1 (gap 40),
    `#teamPanel` padding→`48px 34px`.
  - `@media (max-width:560px)`: `#capGrid`→1, `#teamPortraits` stays 2 cols.
  - All large headings use `clamp()` so type scales fluidly; wrapper is `overflow-x:hidden`.

## State Management
Effectively static. The only runtime "state" is three authoring tweaks exposed by the design
component (not required for the deployed page): `accent` (Electric Blue / Violet Surge /
Charged Lime), `glow` intensity (Subtle / Default / Charged), `showMarquee` (bool). Defaults:
Electric Blue / Subtle / true. These are baked into the exported bundle.

## Design Tokens

**Type**
- Display / headings & wordmark: **Space Grotesk** (500/600/700)
- Body: **IBM Plex Sans** (400/500/600)
- Labels / mono / spec readouts: **IBM Plex Mono** (400/500)
- Scale: H1 `clamp(38px,8vw,88px)` / section H2 `clamp(30px,5vw,46px)` / contact H2
  `clamp(34px,6.5vw,58px)` / card title 21–26px / body 16–20px / mono labels 11–13px,
  letter-spacing .12–.30em.

**Color — spine (warm neutral, low chroma)**
- Base/background `#0A0907` · process band `#0D0B08` · footer `#080705`
- Cards `#0C0F14` · sector cards `#0A0D11` · sector photo well `#10141A` · marquee `#090C10`
- Text: primary `#E7EAF0` · secondary `#A7AEB8` · tertiary `#9AA3AF` / `#8c93a0` ·
  muted/mono `#5d6470` · neutral eyebrow `#7d8590`
- Hairlines: `rgba(255,255,255,.07–.1)`

**Color — brand & discipline keys**
- Electric Blue (brand / Electrification) `#5BE0FF`, ink-on-blue `#06222B`
- Violet (secondary, brand pair) `#9B8CFF`
- Controls (clay) `#E8924E` · Automation & Test (sage) `#A8BE6E` · R&D (plum) `#C79AD6`
- Hero gradient `linear-gradient(95deg,#5BE0FF,#9B8CFF)`
- (Reserved L3 discipline gradients — see Heading Stack: Controls `#F4BE54→#DC5A26`,
  R&D `#DA98EA→#8597FF`.)

**Color — PEOPLE panel (aubergine)**
- Panel `linear-gradient(165deg,#31242F,#271B25)` · eyebrow `#B3A6AF` · body `#BFB2BA`
- Cream button `#EFE2D8` / espresso text `#33231A` · chip text `#A99DA5`
- Portrait placeholder `#C5BFB2` with plum stripe `rgba(122,74,99,.16)`

**Radius** tags 2 · cards 4–6 · portraits 10 · panel 22 · pills 40
**Shadows** panel `0 36px 90px -34px rgba(0,0,0,.75)` + `inset 0 1px 0 rgba(255,255,255,.07)` ·
process recessed `inset 0 ±19px 32px -18px rgba(0,0,0,.72)` · CTA glow (see above)

## The System (three reference specs included)
This brand runs on three deliberate systems — documented as standalone files in `system-specs/`:
1. **Color = discipline.** Four keys (blue/clay/sage/plum) used **only where they mean a
   discipline** (capability cards, process phases, hero legend). Markets/sections are neutral.
2. **Heading gradient is leveled emphasis** (`Heading Stack`). L1 hero = brand pair gradient;
   L2/L4 = solid (key lives in eyebrow/bar); L3 gets a gradient **only** when a heading is the
   single subject of its view AND it's the only gradient on screen.
3. **Dichotomous key (SHELVED, do not build yet)** — a future second axis where **shape = market**
   (circle/triangle/square/diamond/pentagon for automotive/marine/industrial/ag/defense) pairs
   with color = discipline. Included for context only.
4. **Surfaces encode content mode**: FOCAL (glow, the two brand moments) · INFO (flat dark) ·
   METHOD (recessed blueprint grid) · PEOPLE (floating aubergine panel). A section's surface
   should match its mode.

## Assets — ACTION NEEDED
6 placeholders await real imagery (all are drag-and-drop `image-slot` elements):
- **Sectors (2)**: `sec-auto` (EV chassis / powertrain), `sec-marine` (vessel / propulsion).
- **Team portraits (4)**: `team-p1..p4`.

Sourcing (free, real-photo, commercial-OK, **not AI**): Unsplash (electric-vehicle /
electric-car-battery / boat-propeller / engineer-portrait) and Pexels (motor boat / engineer).
**The team portraits must be the firm's actual people before launch** — stock strangers on a
"senior-only, no-handoffs" page reads as dishonest. Filter out Unsplash "+" / AI-tagged uploads.
Avoid recognizable faces/logos without a release. After images are placed in the design master,
re-export `index.html`.

## Files in this bundle
- `index.html` — compiled, self-contained, **drop-in for the repo root**.
- `Astrape Motors - Homepage (Real).dc.html` — editable design master (needs the workspace runtime).
- `support.js` — design-component runtime (dependency of the `.dc.html`).
- `image-slot.js` — drag-and-drop image placeholder component (dependency of the `.dc.html`).
- `system-specs/` — `Color Harmony`, `Heading Stack`, `Dichotomous Key` reference designs.

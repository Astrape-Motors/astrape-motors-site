# Marketing site — UI kit

A high-fidelity, interactive recreation of the **astrapemotors.com** homepage, rebuilt
from the production homepage and composed entirely from
this design system's component primitives.

## Run it
Open `index.html`. It loads the compiled bundle (`_ds_bundle.js`) + `styles.css`, then
mounts the React sections.

## Files
- `index.html` — page shell, responsive breakpoints, mounts the app. (Also a Starting Point.)
- `sections.jsx` — every page section: `Nav`, `Hero`, `Capabilities`, `Process`,
  `Sectors`, `Team`, `Contact`, `Footer`. Composes `Bolt`, `Wordmark`, `Button`,
  `Eyebrow`, `SectionHeading`, `Tag`, `CapabilityCard`, `StatRow`, `ProcessStepper`,
  `Marquee` from the bundle. Sections are assigned to `window` for cross-script scope.
- `app.jsx` — the interactive shell: composes the page and adds the **Start a project**
  contact dialog (fake submit → success state). Every CTA opens it.

## What's interactive
- **Contact dialog** — nav "Contact", hero/contact/team CTAs all open a modal with a
  validated form and a faked send → "Message sent" success screen.
- **Marquee** ticker scrolls; the contact **bolt floats**; buttons brighten on hover; nav
  anchors jump to sections.

## Honest placeholders
The 6 image slots (2 sector photos, 4 team portraits) render as labelled photo wells —
the production page awaits real, non-AI photography. Don't ship
stock strangers on the "senior-only" team panel.

## Surface system (why each section looks the way it does)
FOCAL (hero, contact — glow) · INFO (capabilities, sectors — flat dark) ·
METHOD (process — recessed blueprint grid) · PEOPLE (team — floating aubergine panel).

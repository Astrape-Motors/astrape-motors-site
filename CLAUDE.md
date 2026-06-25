# Astrapē Motors — repo + design-system guide for Claude Code

> Drop this file at the **root of the `astrape-motors-site` repo** (alongside the existing
> `README.md`). Claude Code reads `CLAUDE.md` automatically every session.

## Design system
The brand design system lives in **`.claude/skills/astrape-motors-design/`**
(move this whole project folder there). It is the single source of truth for tokens,
components, templates, and brand rules. Start by reading its `readme.md` and `SKILL.md`.

- Editable masters: the `.dc.html` templates, the `tokens/*.css`, and `components/**`.
- Generated — **never hand-edit**: `_ds_bundle.js`, `_ds_manifest.json`,
  `_adherence.oxlintrc.json`. They are rebuilt by the design workspace's compiler.
- The live marketing site is the compiled, self-contained **root `index.html`** (see the
  design master in `.claude/skills/astrape-motors-design/reference/handoff-homepage/`).

## Standing rule — auto-commit & push design-system changes
When I change tokens, components, or templates under
`.claude/skills/astrape-motors-design/`, automatically:
1. stage the changed files,
2. commit with a clear message (e.g. `design-system: <what changed>`),
3. push to the current branch.

Do **not** stage or "fix" the generated files listed above — if they changed, commit them
as-is (they're build output), don't reformat them.

## Lint / build caveat
`npm run quality` (prettier / htmlhint / stylelint / eslint) will complain about the
generated `_ds_bundle.js` and the inlined root `index.html`. Treat both as **build
artifacts**: add them to the relevant ignore globs (`.prettierignore`, stylelint/eslint
ignores) rather than reformatting them. Re-export from the design master instead of editing
compiled output by hand.

## Standing rule — copy guardrails (legal)
Astrapē Motors, LLC holds **no** PE license and **no** Certificate of Authorization. Marketing
copy must stay out of regulated-engineering / holding-out territory (Ohio ORC 4733.16 / Ch. 4733).

- **Never** introduce: "professional engineer(ing)", "P.E.", "licensed/registered engineer", or
  any "seal/stamp" claim. Treat "engineering firm/services" as services-for-hire language —
  allowed only when tethered to the product/build frame, never standalone. "systems engineering"
  as a *discipline* is fine.
- Run **`node scripts/copy-audit.mjs`** after any copy change and before build/deploy. Exit 1
  means a forbidden phrase is present — fix the **source** (the `.dc.html` template and any
  component default prop, e.g. `SiteFooter` `tagline`), then re-export; don't patch one rendered copy.
- Rationale + full do/don't list: `.claude/skills/astrape-motors-design/guidelines/copy-guardrails.md`.

## Build
Replace the root `index.html` with a fresh export from the design master, then run
`npm run build` to emit static assets to `dist/`. (There is no automated deploy step in this
repo — publish `dist/` however the site is hosted.) Run `node scripts/copy-audit.mjs` first.

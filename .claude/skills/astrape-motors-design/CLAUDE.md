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
- The live marketing site is the compiled, self-contained **root `index.html`**, re-exported
  from the homepage master at `.claude/skills/astrape-motors-design/templates/marketing-homepage/`.

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

## Deploy
Build the static site and push it to GitHub — that's the whole deploy. Pushing to the repo is
the deploy (Porkbun serves from GitHub); there is no FTP step, no `deploy:ftp`, and no manual
upload. Refresh the static export (design master → `site/`) before pushing.

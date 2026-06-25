# Copy guardrails (legal) — read before editing or regenerating any marketing copy

Astrapē Motors, LLC holds **no** PE license and **no** Certificate of Authorization (COA),
and the brand copy is written, on purpose, to keep it that way. These rules are part of the
design system's source of truth: any agent or person who edits a `.dc.html` template, a
component default prop, or regenerates `_ds_bundle.js` / `site/` / the root HTML must keep
the copy inside this lane.

## Why this exists

Under Ohio's engineering-licensure law (ORC Chapter 4733):

- **4733.16(B)** — a firm that **provides**, or **holds itself out as providing**,
  "professional engineering services," **or** uses "engineer/engineering/surveyor/surveying"
  (or any derivation) **in its name**, must hold a COA with a registered PE in responsible
  charge.
- **Title provisions / 4733.22** — no one may use "P.E.," call themselves a "professional
  engineer," or claim to stamp/seal engineering work, without a license. "Offer to practice"
  counts too — so marketing language can trip the wire even when the underlying work wouldn't.
- **4733.01(E)** — only work where a PE's qualifications are "required to protect the public
  welfare or to safeguard life, health, or property" is the regulated *practice of
  engineering*. Describing the **discipline** ("systems engineering") or the **product**
  ("electric motors and software") is not that.

The legal name **"Astrapē Motors, LLC"** contains no regulated word — keep it that way.
Never register or brand a `…Engineering` trade name.

## NEVER ship these (the audit hard-fails on them)

- "professional engineer" / "professional engineering" / "professional engineering services"
- "P.E." as a credential
- "licensed / registered / chartered engineer"
- "PE seal", "engineering seal/stamp", "stamp and seal", "sealed drawings/plans"

These assert a license or regulated-service offering Astrapē cannot currently make.

## Use with care (the audit warns; confirm the framing)

- "engineering **firm** / company / studio / practice" — badging the **entity** as an
  engineering provider leans toward *holding out*. Allowed **only** when tethered to the
  product/build frame (e.g. "a systems engineering firm … making things move — with electric
  motors and software"), never as a standalone "we sell engineering."
- "engineering **services**" — borderline holding-out phrase; prefer describing what we
  **build** over services we **sell** to the public.

### Accepted-with-rationale: "a systems engineering firm"
The current hero/about/meta copy uses "a systems engineering firm … making things move — with
electric motors and software." This is **kept on purpose**: "systems engineering" names a
discipline, and the line is anchored to building our own products (the manufactured-products
lane), not to offering professional engineering services to the public. If you reword near it,
keep it tethered to the product/build frame and run the audit.

## Always fine

- "systems engineering" as a **discipline / practice / approach"
- "electric motors and software," "sensor to actuator," "close the loop," product/capability copy
- naming the company "Astrapē" / "Astrapē Motors"

## The trip-wire that flips everything to "regulated"

If Astrapē ever **offers engineering services to outside clients on safety-relevant work**,
or signs/seals/certifies anything a third party relies on for safety, it needs a **PE in
responsible charge + a COA** regardless of wording. At that point, update this file and the
copy together.

## Enforcement

Run the guard after any copy change, and it is meant to run before build/deploy:

```bash
node scripts/copy-audit.mjs
```

Exit 0 = clean (warnings allowed). Exit 1 = a forbidden phrase is present — fix the **source**
(`.dc.html` template and/or the component default prop), then re-export to `site/` and the root
HTML so every copy of the string changes together. Do not patch generated files by hand.

> Plain-English map of the law, not legal advice. The public-welfare line has Board-decided
> gray zones; confirm edge cases with the Ohio PEPS Board or counsel. See the
> `Astrape-Motors-PE-vs-Industrial-Exception` reference for the full analysis.

Mono labels & display headings — the three pieces that frame every section.

```jsx
<Eyebrow color="var(--disc-electrification)">01 — WHAT WE DO</Eyebrow>
<SectionHeading level="h2">We're a systems engineering firm.</SectionHeading>

{/* L1 hero — the one place the brand-pair gradient lives */}
<SectionHeading level="h1">
  Electrify everything that <span className="am-grad-brand">moves.</span>
</SectionHeading>

{/* L3 dedicated discipline view — earns its key gradient */}
<SectionHeading level="h2" gradient="controls">Controls</SectionHeading>

<Tag color="var(--disc-automation)">HIL · SIL</Tag>
<Tag variant="plain">EV DRIVE</Tag>
```

Heading-stack rule: one gradient per view, on the most important heading. Solid everywhere else, with the discipline key carried by the eyebrow or the card key-bar. `Eyebrow` stays neutral grey for generic sections; tint it only when it carries the key.

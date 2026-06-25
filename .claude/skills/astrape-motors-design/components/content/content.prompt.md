Content blocks that compose the marketing page — all color-keyed by discipline.

```jsx
<CapabilityCard index="/01" title="Electrification" accent="var(--disc-electrification)"
  body="EV & hybrid powertrain architecture…" tag="EV · HEV" />

<StatRow items={[
  { label: "DOMAINS", value: "EV · HEV · Marine" },
  { label: "METHOD", value: "Model-based design" },
  { label: "VALIDATION", value: "HIL / SIL rigs" },
]} />

<Marquee items={["EV POWERTRAINS","HYBRID SYSTEMS","MARINE PROPULSION","EMBEDDED CONTROLS"]} />

<ProcessStepper phases={[
  { num: "01", title: "Scope",    body: "Feasibility, requirements…", color: "var(--disc-rnd)" },
  { num: "02", title: "Model",    body: "Plant & controller models…", color: "var(--disc-controls)" },
  { num: "03", title: "Build",    body: "Embedded code gen…",         color: "var(--disc-electrification)" },
  { num: "04", title: "Validate", body: "HIL / SIL campaigns…",       color: "var(--disc-automation)" },
  { num: "05", title: "Handoff",  body: "Production release…",        color: "var(--text-eyebrow)" },
]} />
```

Discipline → key color: Electrification `--disc-electrification` (blue), Controls `--disc-controls` (clay), Automation & Test `--disc-automation` (sage), R&D `--disc-rnd` (plum). Markets/sections stay neutral — never key them.

Astrapē Motors lightning mark — the brand's only logo glyph; use it for the nav lockup, contact moment, and favicons.

```jsx
<Bolt size={25} />
<Bolt size={32} float glowAmount="30px" />
<Bolt size={21} glow={false} color="var(--disc-controls)" />
```

Notes: width auto-derives from height (0.68 ratio). `glow` halo color tracks the fill via color-mix. Pair with `Wordmark` for the full lockup. Color is electric blue by default but accepts any discipline key.

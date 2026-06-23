The full wordmark lockup — bolt + "ASTRAPE MOTORS" in Space Grotesk 700, wide tracking, "MOTORS" dimmed. Use in nav, footer, brand headers.

```jsx
<Wordmark size={15} />
<Wordmark size={14} glow={false} />     {/* footer */}
<Wordmark size={20} showBolt={false} /> {/* text-only */}
```

Notes: the bolt height auto-scales to ~1.65× the text size. Letter-spacing is fixed at 0.2em (the --ls-wordmark token).

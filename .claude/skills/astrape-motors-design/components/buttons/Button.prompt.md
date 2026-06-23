Pill button / CTA — renders `<a>` with `href`, else `<button>`. Use `primary` for the one action per view, `ghost` for the secondary, `cream` only on the aubergine people panel.

```jsx
<Button href="#contact">Start a project</Button>
<Button variant="ghost" href="#capabilities">Our capabilities</Button>
<Button variant="cream">Meet the team</Button>
<Button size="sm" href="#contact">Contact</Button>  {/* nav */}
```

Notes: fully-round (40px radius). Primary inherits the live `--accent`/`--accent-ink`, so it recolors with the active discipline. Glow on by default; hover brightens. One primary CTA per view (complement = action).

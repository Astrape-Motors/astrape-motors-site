Sticky blurred site header with the wordmark lockup, text links, and one Contact button — use it as the top of every page.

```jsx
<SiteNav current="Capabilities" />

{/* service/detail page: trimmed links, mailto CTA */}
<SiteNav
  links={[{ label: "Capabilities", href: "/capabilities.html" }, { label: "About", href: "/about.html" }]}
  cta={{ label: "Start a project", href: "mailto:hello@astrapemotors.com" }}
/>

{/* interactive UI kit: open a dialog instead of navigating */}
<SiteNav onContact={() => setOpen(true)} />
```

- Wordmark links to `/`. `current` brightens the matching link to primary text.
- One CTA only — never two buttons in the nav (brand rule). Set `cta={null}` to drop it.
- Links stay neutral; the bar is `rgba(10,9,7,.72)` with a 14px blur and a hairline bottom border.

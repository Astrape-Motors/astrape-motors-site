Canonical page footer — wordmark + one-line mono descriptor, two link columns, and a mono baseline (© year · domain). Use at the foot of every page.

```jsx
<SiteFooter />

{/* custom columns */}
<SiteFooter
  columns={[
    { head: "PAGES", links: [{ label: "Capabilities", href: "/capabilities.html" }, { label: "About", href: "/about.html" }] },
    { head: "CONTACT", links: [{ label: "hello@astrapemotors.com", href: "mailto:hello@astrapemotors.com" }] },
  ]}
/>
```

- Defaults match the homepage (Explore / Contact columns, © 2026, astrapemotors.com).
- `tagline` accepts JSX so you can keep the two-line mono break.
- No icons, no social row — mono links only, per the brand.

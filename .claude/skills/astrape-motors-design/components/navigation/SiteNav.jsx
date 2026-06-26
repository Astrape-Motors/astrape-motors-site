import React from "react";
import { Wordmark } from "../brand/Wordmark.jsx";
import { Button } from "../buttons/Button.jsx";

/**
 * Astrapē sticky site navigation — the canonical header for every page.
 * Blurred near-black bar, wordmark lockup left, text links + one Contact
 * button right. Prop-driven so service/detail pages can swap the link set or
 * point the CTA at a mailto. Replaces the hand-inlined <nav> that used to live
 * in each template.
 */
export function SiteNav({
  links = [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Sectors", href: "#sectors" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#team" },
  ],
  cta = { label: "Contact", href: "#contact" },
  onContact,
  current,
  wordmarkSize = 15,
  style,
}) {
  const link = { color: "inherit", textDecoration: "none", transition: "color 120ms linear" };
  return (
    <nav
      style={{
        position: "sticky", top: 0, zIndex: 50, display: "flex",
        alignItems: "center", justifyContent: "space-between",
        padding: "20px 8vw", background: "rgba(10,9,7,0.72)",
        backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--line)", ...style,
      }}
    >
      <a href="/" style={{ display: "inline-flex", textDecoration: "none" }} aria-label="Astrapē Motors — home">
        <Wordmark size={wordmarkSize} />
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 32, fontSize: 14, color: "var(--text-tertiary)" }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{ ...link, color: current === l.label ? "var(--text-primary)" : "inherit" }}
          >
            {l.label}
          </a>
        ))}
        {cta && (
          <Button size="sm" href={onContact ? undefined : cta.href} onClick={onContact}>
            {cta.label}
          </Button>
        )}
      </div>
    </nav>
  );
}

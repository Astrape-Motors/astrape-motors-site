import React from "react";
import { Wordmark } from "../brand/Wordmark.jsx";

/**
 * Astrapē site footer — the canonical page foot. Wordmark + one-line mono
 * descriptor on the left, two link columns (Explore / Contact) on the right,
 * and a mono baseline (© year · domain). Prop-driven so pages can adjust the
 * columns; defaults match the homepage. Replaces the inlined <footer>.
 */
export function SiteFooter({
  tagline = (
    <>Systems engineering · making things move<br />Electric motors &amp; software · land, sea &amp; lab</>
  ),
  columns = [
    { head: "EXPLORE", links: [
      { label: "Capabilities", href: "#capabilities" },
      { label: "Sectors", href: "#sectors" },
      { label: "R&D", href: "#process" },
    ] },
    { head: "CONTACT", links: [
      { label: "hello@astrapemotors.com", href: "mailto:hello@astrapemotors.com" },
      { label: "Start a project", href: "#contact" },
    ] },
  ],
  year = 2026,
  domain = "astrapemotors.com",
  maxWidth = 1180,
  style,
}) {
  const col = { display: "flex", flexDirection: "column", gap: 10 };
  const head = { fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-mono-muted)", letterSpacing: ".16em", marginBottom: 4 };
  const link = { color: "var(--text-tertiary)", textDecoration: "none", fontSize: 14 };
  return (
    <footer style={{ padding: "54px 8vw", borderTop: "1px solid var(--line)", background: "var(--bg-footer)", ...style }}>
      <div style={{ maxWidth, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 40, flexWrap: "wrap" }}>
        <div>
          <Wordmark size={14} glow={false} style={{ marginBottom: 14 }} />
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-mono-muted)", lineHeight: 1.7, margin: 0 }}>
            {tagline}
          </p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          {columns.map((c) => (
            <div key={c.head} style={col}>
              <span style={head}>{c.head}</span>
              {c.links.map((l) => (
                <a key={l.label} href={l.href} style={link}>{l.label}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth, margin: "40px auto 0", fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--text-faint)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <span>© {year} ASTRAPĒ MOTORS</span>
        <span>{domain}</span>
      </div>
    </footer>
  );
}

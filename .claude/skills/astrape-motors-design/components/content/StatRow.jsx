import React from "react";

/**
 * Hero stat row — mono labels over Space Grotesk values, separated by 1px
 * vertical dividers. Used under the hero CTA (DOMAINS / METHOD / VALIDATION).
 */
export function StatRow({ items = [], gap = 40, style = {}, ...rest }) {
  return (
    <div style={{ display: "flex", gap, flexWrap: "wrap", alignItems: "stretch", ...style }} {...rest}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <div style={{ width: 1, background: "var(--line-strong, rgba(255,255,255,.1))" }} />}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 12,
                color: "var(--text-mono-muted, #5D6470)",
                letterSpacing: "var(--ls-mono-tight, 0.14em)",
                marginBottom: 6,
              }}
            >
              {it.label}
            </div>
            <div
              style={{
                fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                fontWeight: 600,
                fontSize: 17,
                color: "var(--text-primary, #E7EAF0)",
              }}
            >
              {it.value}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

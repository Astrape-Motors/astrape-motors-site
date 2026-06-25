import React from "react";

/**
 * Mono section eyebrow — the wide-tracked label that sits above a heading,
 * e.g. "01 — WHAT WE DO". Neutral grey by default; pass a discipline key to
 * tint it (the eyebrow is where the key lives when the heading stays solid).
 */
export function Eyebrow({
  children,
  color = "var(--text-eyebrow, #7D8590)",
  spacing = "var(--ls-mono, 0.28em)",
  size = "var(--fs-mono, 12.5px)",
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)",
        fontSize: size,
        letterSpacing: spacing,
        color,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

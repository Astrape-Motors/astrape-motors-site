import React from "react";

/**
 * Mono spec tag — a small wide-tracked chip used for readouts and discipline
 * keys, e.g. "EV · HEV", "HIL · SIL". Two looks: `outline` (key-color text +
 * color-mixed border, the default) and `plain` (muted text, no border).
 */
export function Tag({
  children,
  color = "var(--accent, #5BE0FF)",
  variant = "outline",
  style = {},
  ...rest
}) {
  const base = {
    display: "inline-block",
    fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)",
    fontSize: "var(--fs-mono-xs, 11px)",
    letterSpacing: "0.06em",
    padding: "5px 9px",
    borderRadius: "var(--r-tag, 2px)",
    whiteSpace: "nowrap",
  };
  const looks = {
    outline: {
      color,
      border: `1px solid color-mix(in srgb, ${color} 32%, transparent)`,
    },
    plain: {
      color: "var(--text-quaternary, #8C93A0)",
    },
  };
  return (
    <span style={{ ...base, ...(looks[variant] || looks.outline), ...style }} {...rest}>
      {children}
    </span>
  );
}

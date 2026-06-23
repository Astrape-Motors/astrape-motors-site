import React from "react";

/**
 * Astrapē Motors pill button / CTA. Renders an <a> when `href` is given,
 * otherwise a <button>. Three variants and two sizes. The primary variant
 * carries the discipline accent + a soft glow; ghost is a hairline outline;
 * cream is the warm pill used only on the aubergine people panel.
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  glow = true,
  children,
  style = {},
  ...rest
}) {
  const pad =
    size === "sm" ? "10px 20px" : size === "lg" ? "16px 32px" : "16px 30px";
  const fontSize = size === "sm" ? 14 : 16;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
    fontWeight: 600,
    fontSize,
    lineHeight: 1,
    padding: pad,
    borderRadius: "var(--r-pill, 40px)",
    textDecoration: "none",
    cursor: "pointer",
    border: "1px solid transparent",
    transition: "filter .18s var(--ease, ease), background .18s var(--ease, ease)",
    whiteSpace: "nowrap",
  };

  const variants = {
    primary: {
      background: "var(--accent, #5BE0FF)",
      color: "var(--accent-ink, #06222B)",
      boxShadow: glow
        ? "0 0 var(--glow, 10px) color-mix(in srgb, var(--accent, #5BE0FF) 40%, transparent)"
        : "none",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary, #E7EAF0)",
      border: "1px solid rgba(255,255,255,.22)",
    },
    cream: {
      background: "var(--people-cream, #EFE2D8)",
      color: "var(--people-espresso, #33231A)",
    },
  };

  const merged = { ...base, ...(variants[variant] || variants.primary), ...style };

  const onEnter = (e) => (e.currentTarget.style.filter = "brightness(1.08)");
  const onLeave = (e) => (e.currentTarget.style.filter = "none");

  if (href) {
    return (
      <a href={href} style={merged} onMouseEnter={onEnter} onMouseLeave={onLeave} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" style={merged} onMouseEnter={onEnter} onMouseLeave={onLeave} {...rest}>
      {children}
    </button>
  );
}

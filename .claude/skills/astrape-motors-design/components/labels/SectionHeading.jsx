import React from "react";

const GRADS = {
  brand: "var(--grad-brand, linear-gradient(95deg,#5BE0FF,#9B8CFF))",
  controls: "var(--grad-controls, linear-gradient(100deg,#F4BE54 8%,#DC5A26 92%))",
  rnd: "var(--grad-rnd, linear-gradient(100deg,#DA98EA 8%,#8597FF 92%))",
};

/**
 * Space Grotesk display heading. `level` sets the fluid size (h1 hero, h2
 * section, contact). Per the brand's "heading stack" rule, a gradient is
 * emphasis with a level: apply `gradient` ONLY when the heading is the single
 * subject of its view and the only gradient on screen — otherwise keep it
 * solid and let the eyebrow/bar carry the discipline key. When `gradient` is
 * set, wrap the emphasised words in {`<span data-grad>…</span>`} or pass
 * `gradientWord` to gradient just the trailing word.
 */
export function SectionHeading({
  children,
  level = "h2",
  gradient = "none",
  as,
  style = {},
  ...rest
}) {
  const sizes = {
    h1: { fontSize: "var(--fs-h1, clamp(38px,8vw,88px))", lineHeight: 0.98, letterSpacing: "-0.035em" },
    h2: { fontSize: "var(--fs-h2, clamp(30px,5vw,46px))", lineHeight: 1.05, letterSpacing: "-0.02em" },
    contact: { fontSize: "var(--fs-h2-contact, clamp(34px,6.5vw,58px))", lineHeight: 1.0, letterSpacing: "-0.03em" },
  };
  const Tag = as || (level === "h1" ? "h1" : "h2");
  const gradFill =
    gradient !== "none"
      ? {
          background: GRADS[gradient] || GRADS.brand,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }
      : {};

  return (
    <Tag
      style={{
        fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
        fontWeight: 700,
        margin: 0,
        color: "var(--text-primary, #E7EAF0)",
        ...(sizes[level] || sizes.h2),
        ...gradFill,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

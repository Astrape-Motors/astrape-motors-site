import React from "react";

/**
 * Astrapē Motors lightning mark. The brand's only logo glyph — a stylised
 * bolt built from the exact source clip-path. Electric blue with an optional
 * soft glow halo; floats gently when `float` is set (used on the contact CTA).
 */
export function Bolt({
  size = 25,
  color = "var(--accent, #5BE0FF)",
  glow = true,
  glowAmount = "var(--glow, 10px)",
  float = false,
  style = {},
  ...rest
}) {
  const w = Math.round(size * 0.68);
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: w,
        height: size,
        background: color,
        clipPath:
          "polygon(52% 0,100% 0,48% 44%,84% 44%,16% 100%,46% 52%,4% 52%)",
        boxShadow: glow
          ? `0 0 ${glowAmount} color-mix(in srgb, ${color} 55%, transparent)`
          : "none",
        animation: float ? "amFloat var(--dur-float, 5s) ease-in-out infinite" : "none",
        ...style,
      }}
      {...rest}
    />
  );
}

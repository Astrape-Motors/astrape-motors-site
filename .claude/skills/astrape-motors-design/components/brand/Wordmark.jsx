import React from "react";
import { Bolt } from "./Bolt.jsx";

/**
 * The full Astrapē Motors wordmark lockup: lightning mark + "ASTRAPE MOTORS"
 * set in Space Grotesk 700 with wide tracking. "MOTORS" sits at reduced
 * opacity. Use in the nav, footer, and any brand header.
 */
export function Wordmark({
  size = 15,
  showBolt = true,
  color = "var(--text-primary, #E7EAF0)",
  boltColor = "var(--accent, #5BE0FF)",
  glow = true,
  style = {},
  ...rest
}) {
  const boltH = Math.round(size * 1.65);
  return (
    <span
      style={{ display: "inline-flex", alignItems: "center", gap: 13, ...style }}
      {...rest}
    >
      {showBolt && <Bolt size={boltH} color={boltColor} glow={glow} />}
      <span
        style={{
          fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
          fontWeight: 700,
          fontSize: size,
          letterSpacing: "var(--ls-wordmark, 0.2em)",
          color,
          whiteSpace: "nowrap",
        }}
      >
        ASTRAPE{" "}
        <span style={{ opacity: 0.45, fontWeight: 500 }}>MOTORS</span>
      </span>
    </span>
  );
}

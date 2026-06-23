import React from "react";

/**
 * Infinite capability marquee — a mono ticker of terms separated by accent
 * slashes, scrolling left over the dark marquee surface with hairlines top &
 * bottom. The list is duplicated internally so the loop is seamless.
 */
export function Marquee({
  items = [],
  separatorColor = "var(--accent, #5BE0FF)",
  duration = "var(--dur-marquee, 24s)",
  style = {},
  ...rest
}) {
  const run = (keyPrefix) =>
    items.map((t, i) => (
      <React.Fragment key={`${keyPrefix}-${i}`}>
        <span style={{ padding: "0 28px" }}>{t}</span>
        <span style={{ color: separatorColor }}>/</span>
      </React.Fragment>
    ));

  return (
    <div
      style={{
        borderTop: "1px solid var(--line, rgba(255,255,255,.07))",
        borderBottom: "1px solid var(--line, rgba(255,255,255,.07))",
        padding: "18px 0",
        overflow: "hidden",
        background: "var(--surface-marquee, #090C10)",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `amMarq ${duration} linear infinite`,
          fontFamily: "var(--font-mono, monospace)",
          fontSize: 14,
          letterSpacing: "var(--ls-mono-tag, 0.16em)",
          color: "var(--text-mono-muted, #6b7280)",
        }}
      >
        {run("a")}
        {run("b")}
      </div>
    </div>
  );
}

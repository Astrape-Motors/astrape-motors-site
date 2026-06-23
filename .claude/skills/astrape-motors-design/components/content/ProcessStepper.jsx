import React from "react";

/**
 * Process stepper — a row of equal phases inside a single hairline-bordered
 * frame, divided by 1px lines. Each phase is keyed to the discipline that
 * leads it via its mono number color. Used in the recessed "method" band.
 */
export function ProcessStepper({ phases = [], style = {}, ...rest }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${phases.length || 5}, 1fr)`,
        gap: 0,
        border: "1px solid var(--line-strong, rgba(255,255,255,.1))",
        borderRadius: "var(--r-card-lg, 5px)",
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      {phases.map((p, i) => (
        <div
          key={i}
          style={{
            padding: "26px 22px",
            borderRight:
              i < phases.length - 1
                ? "1px solid var(--line-strong, rgba(255,255,255,.1))"
                : "none",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: 13,
              color: p.color || "var(--text-eyebrow, #7d8590)",
              marginBottom: 18,
            }}
          >
            {p.num}
          </div>
          <div
            style={{
              fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
              fontWeight: 600,
              fontSize: 17,
              marginBottom: 8,
              color: "var(--text-primary, #E7EAF0)",
            }}
          >
            {p.title}
          </div>
          <p
            style={{
              fontSize: "var(--fs-meta, 13.5px)",
              lineHeight: 1.55,
              color: "var(--text-quaternary, #8c93a0)",
              margin: 0,
            }}
          >
            {p.body}
          </p>
        </div>
      ))}
    </div>
  );
}

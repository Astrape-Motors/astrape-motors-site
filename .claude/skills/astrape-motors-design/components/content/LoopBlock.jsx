import React from "react";

/**
 * The sense → compute → actuate loop block — a bordered 3-column widget that
 * frames the cybernetic loop at the top of any capabilities or about section.
 * Each cell is keyed to its role color (blue · clay · sage) and separated by
 * 1px hairlines inside a single hairline-bordered frame.
 */
export function LoopBlock({
  steps = [
    { label: "SENSE",   color: "var(--disc-electrification, #5BE0FF)", title: "Sense",   body: "Sensors, instrumentation and telemetry — the true state of the machine." },
    { label: "COMPUTE", color: "var(--disc-controls, #E8924E)",        title: "Compute", body: "Control systems and software — deciding what should happen next." },
    { label: "ACTUATE", color: "var(--disc-automation, #A8BE6E)",      title: "Actuate", body: "Electric motors and power electronics — making it move." },
  ],
  headerLabel = "SENSE → COMPUTE → ACTUATE",
  footerLabel = "↺ CLOSED LOOP · MEASURED EVERY CYCLE",
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,.1)",
        borderRadius: "var(--r-card-lg, 6px)",
        background: "var(--surface-card, #0C0F14)",
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 14,
          flexWrap: "wrap",
          padding: "14px 22px",
          borderBottom: "1px solid rgba(255,255,255,.07)",
        }}
      >
        <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 12.5, letterSpacing: ".22em", color: "var(--text-secondary, #A7AEB8)" }}>
          {headerLabel}
        </span>
        {footerLabel && (
          <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11.5, letterSpacing: ".16em", color: "var(--text-mono-muted, #5d6470)" }}>
            {footerLabel}
          </span>
        )}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
        {steps.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "24px 22px",
              borderRight: i < steps.length - 1 ? "1px solid rgba(255,255,255,.07)" : "none",
              minWidth: 0,
            }}
          >
            <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 12, letterSpacing: ".16em", color: s.color, marginBottom: 14 }}>
              {s.label}
            </div>
            <h4 style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)", fontWeight: 600, fontSize: 20, margin: "0 0 10px", color: "var(--text-primary, #E7EAF0)" }}>
              {s.title}
            </h4>
            <p style={{ fontSize: "var(--fs-body-sm, 14.5px)", lineHeight: 1.6, color: "var(--text-tertiary, #9AA3AF)", margin: 0 }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

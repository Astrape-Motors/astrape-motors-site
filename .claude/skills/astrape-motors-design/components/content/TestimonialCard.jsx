import React from "react";

/**
 * Testimonial quote card — open-quote mark, italic body, avatar circle +
 * name/org. Text is intentionally left neutral (body text color, not accent)
 * so the client's words don't compete with the discipline palette. Used in
 * groups of 2–4, never solo.
 */
export function TestimonialCard({
  quote,
  name,
  role,
  org,
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,.07)",
        borderRadius: "var(--r-card-lg, 6px)",
        background: "var(--surface-card, #0C0F14)",
        padding: "28px 26px",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        ...style,
      }}
      {...rest}
    >
      {/* open-quote mark — brand blue, not accent, keeps it neutral */}
      <div
        style={{
          fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
          fontSize: 34,
          lineHeight: 1,
          color: "var(--brand-blue, #5BE0FF)",
          marginBottom: 14,
          userSelect: "none",
        }}
      >
        &#8220;
      </div>
      <p
        style={{
          fontSize: "var(--fs-body-sm, 14.5px)",
          lineHeight: 1.65,
          color: "var(--text-quaternary, #8C93A0)",
          fontStyle: "italic",
          margin: "0 0 22px",
          flex: 1,
        }}
      >
        {quote || "Client testimonial goes here — a sentence or two on the outcome we delivered and what it was like to work together."}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "var(--surface-well, #10141A)",
            border: "1px solid rgba(255,255,255,.1)",
            flexShrink: 0,
            overflow: "hidden",
          }}
        />
        <div>
          <div style={{ fontSize: "var(--fs-body-sm, 14.5px)", color: "var(--text-secondary, #A7AEB8)", fontWeight: 500 }}>
            {name || "Name"}{role ? `, ${role}` : ""}
          </div>
          {org && (
            <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11.5, color: "var(--text-mono-muted, #5D6470)" }}>
              {org}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

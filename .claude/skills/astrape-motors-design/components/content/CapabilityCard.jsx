import React from "react";
import { Tag } from "../labels/Tag.jsx";

/**
 * Color-keyed capability card. Each card is keyed to one discipline via
 * `accent` (blue / clay / sage / plum) — a key bar, a mono /0N index, a solid
 * Space Grotesk title, body copy, and a discipline tag. Flat (4px radius),
 * 1px hairline border. Color = discipline; the card itself stays dark.
 */
export function CapabilityCard({
  index,
  title,
  body,
  tag,
  accent = "var(--accent, #5BE0FF)",
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        // Flex column so the card splits into header / body / footer: the body
        // grows and the tag pins to the bottom, keeping tags aligned across a
        // row of cards no matter how long each body runs. Needs the card to
        // fill its grid cell — height:100% + a stretching grid (the default).
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
        background: "var(--surface-card, #0C0F14)",
        border: "var(--card-border, 1px solid rgba(255,255,255,.08))",
        borderRadius: "var(--r-card, 4px)",
        padding: "28px 24px",
        ...style,
      }}
      {...rest}
    >
      {/* header */}
      <div
        style={{
          width: "var(--keybar-w, 30px)",
          height: "var(--keybar-h, 3px)",
          background: accent,
          borderRadius: 2,
          marginBottom: 18,
        }}
      />
      {index && (
        <div
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 12,
            color: accent,
            marginBottom: 22,
          }}
        >
          {index}
        </div>
      )}
      <h3
        style={{
          fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
          fontWeight: 600,
          fontSize: "var(--fs-card-title, 21px)",
          margin: "0 0 12px",
          color: "var(--text-primary, #E7EAF0)",
        }}
      >
        {title}
      </h3>
      {/* body — grows to push the footer down */}
      <p
        style={{
          flex: 1,
          fontSize: "var(--fs-body-sm, 14.5px)",
          lineHeight: 1.6,
          color: "var(--text-tertiary, #9AA3AF)",
          margin: tag ? "0 0 18px" : 0,
        }}
      >
        {body}
      </p>
      {/* footer — pinned to the bottom */}
      {tag && (
        <div>
          <Tag color={accent}>{tag}</Tag>
        </div>
      )}
    </div>
  );
}

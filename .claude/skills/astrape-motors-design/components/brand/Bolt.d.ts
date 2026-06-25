import React from "react";

export interface BoltProps {
  /** Height of the mark in px. Width is auto (0.68 ratio). Default 25. */
  size?: number;
  /** Fill color. Defaults to the live --accent (electric blue). */
  color?: string;
  /** Soft colored glow halo behind the mark. Default true. */
  glow?: boolean;
  /** Glow blur radius (CSS length). Defaults to the --glow token. */
  glowAmount?: string;
  /** Gentle vertical float animation (used on the contact CTA). Default false. */
  float?: boolean;
  style?: React.CSSProperties;
}

/**
 * The Astrapē Motors lightning mark — the brand's sole logo glyph.
 * @startingPoint section="Brand" subtitle="Lightning mark + glow" viewport="200x160"
 */
export function Bolt(props: BoltProps): JSX.Element;

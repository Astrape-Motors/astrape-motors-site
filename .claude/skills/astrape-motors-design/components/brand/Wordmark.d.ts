import React from "react";

export interface WordmarkProps {
  /** Wordmark text size in px (the bolt scales with it). Default 15. */
  size?: number;
  /** Show the leading lightning mark. Default true. */
  showBolt?: boolean;
  /** Wordmark text color. Default --text-primary. */
  color?: string;
  /** Bolt fill color. Default --accent. */
  boltColor?: string;
  /** Color of the ē macron glyph. Default --accent (electric blue). Pass a discipline key on discipline-specific pages. */
  accentColor?: string;
  /** Glow on the bolt. Default true. */
  glow?: boolean;
  style?: React.CSSProperties;
}

/**
 * The Astrapē Motors wordmark lockup (bolt + "ASTRAPE MOTORS").
 * @startingPoint section="Brand" subtitle="Full wordmark lockup" viewport="320x60"
 */
export function Wordmark(props: WordmarkProps): JSX.Element;

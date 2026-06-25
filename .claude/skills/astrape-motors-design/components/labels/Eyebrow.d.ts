import React from "react";

export interface EyebrowProps {
  children?: React.ReactNode;
  /** Text color. Neutral grey by default; pass a discipline key to tint. */
  color?: string;
  /** Letter-spacing. Default --ls-mono (0.28em). */
  spacing?: string;
  /** Font size. Default --fs-mono. */
  size?: string;
  style?: React.CSSProperties;
}

/** Mono section eyebrow label (e.g. "01 — WHAT WE DO"). */
export function Eyebrow(props: EyebrowProps): JSX.Element;

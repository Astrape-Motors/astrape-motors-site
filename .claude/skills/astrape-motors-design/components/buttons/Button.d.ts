import React from "react";

export interface ButtonProps {
  /** Visual style. primary = accent pill w/ glow, ghost = hairline outline, cream = warm pill for the aubergine panel. Default "primary". */
  variant?: "primary" | "ghost" | "cream";
  /** Size. Default "md". sm = nav pill, lg = roomy CTA. */
  size?: "sm" | "md" | "lg";
  /** If set, renders an <a href> instead of a <button>. */
  href?: string;
  /** Soft accent glow on the primary variant. Default true. */
  glow?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * Astrapē Motors pill button / CTA.
 * @startingPoint section="Core" subtitle="Pill button — 3 variants" viewport="420x80"
 */
export function Button(props: ButtonProps): JSX.Element;

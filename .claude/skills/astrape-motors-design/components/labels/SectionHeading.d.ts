import React from "react";

export interface SectionHeadingProps {
  children?: React.ReactNode;
  /** Fluid size step. h1 = hero, h2 = section (default), contact = brand moment. */
  level?: "h1" | "h2" | "contact";
  /** Gradient fill — use ONLY when this heading is the single subject of its view. */
  gradient?: "none" | "brand" | "controls" | "rnd";
  /** Override the rendered tag (default h1 for level h1, else h2). */
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

/**
 * Space Grotesk display heading with the brand's leveled-emphasis gradient rule.
 * @startingPoint section="Core" subtitle="Display heading + gradient rule" viewport="640x200"
 */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;

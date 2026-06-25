import React from "react";

export interface TestimonialCardProps {
  /** The client quote. Rendered italic. Omit for a labelled placeholder. */
  quote?: React.ReactNode;
  /** Client name. */
  name?: string;
  /** Role, appended to name with a comma. */
  role?: string;
  /** Organisation, mono-styled below name. */
  org?: string;
  style?: React.CSSProperties;
}

/**
 * Open-quote testimonial card. Use in groups of 2–4 in a grid.
 * @startingPoint section="Content" subtitle="Testimonial quote card" viewport="340x220"
 */
export function TestimonialCard(props: TestimonialCardProps): JSX.Element;

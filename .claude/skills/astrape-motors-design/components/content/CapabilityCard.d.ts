import React from "react";

export interface CapabilityCardProps {
  /** Mono index, e.g. "/01". */
  index?: string;
  /** Card title (Space Grotesk, solid). */
  title?: React.ReactNode;
  /** Body copy. */
  body?: React.ReactNode;
  /** Discipline tag text, e.g. "EV · HEV". Omit for no tag. */
  tag?: React.ReactNode;
  /** Discipline key color — bar, index, tag all inherit it. Default --accent. */
  accent?: string;
  style?: React.CSSProperties;
}

/**
 * Color-keyed capability / service card.
 * @startingPoint section="Content" subtitle="Discipline-keyed service card" viewport="320x260"
 */
export function CapabilityCard(props: CapabilityCardProps): JSX.Element;

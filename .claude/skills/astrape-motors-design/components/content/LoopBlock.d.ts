import React from "react";

export interface LoopStep {
  /** Mono key label, e.g. "SENSE". */
  label: string;
  /** Discipline key color for the label. */
  color?: string;
  title: React.ReactNode;
  body: React.ReactNode;
}

export interface LoopBlockProps {
  /** Three loop steps (sense / compute / actuate). Customise for non-standard loops. */
  steps?: LoopStep[];
  /** Top-bar label. Default "SENSE → COMPUTE → ACTUATE". */
  headerLabel?: string;
  /** Top-bar right legend. Set to empty string to hide. */
  footerLabel?: string;
  style?: React.CSSProperties;
}

/**
 * The sense → compute → actuate bordered loop widget. Place at the top of
 * any capabilities or about section to frame the cybernetic practice.
 * @startingPoint section="Content" subtitle="Cybernetic loop widget" viewport="900x180"
 */
export function LoopBlock(props: LoopBlockProps): JSX.Element;

import React from "react";

export interface ProcessPhase {
  /** Mono phase number, e.g. "01". */
  num: string;
  title: React.ReactNode;
  body: React.ReactNode;
  /** Key color of the discipline that leads this phase. */
  color?: string;
}
export interface ProcessStepperProps {
  phases: ProcessPhase[];
  style?: React.CSSProperties;
}

/**
 * Equal-width phase stepper in one hairline frame; each phase number keyed to
 * its leading discipline. Use inside the recessed "method" band.
 * @startingPoint section="Content" subtitle="Keyed process stepper" viewport="900x180"
 */
export function ProcessStepper(props: ProcessStepperProps): JSX.Element;

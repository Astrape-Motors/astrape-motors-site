import React from "react";

export interface StatItem {
  label: string;
  value: React.ReactNode;
}
export interface StatRowProps {
  items: StatItem[];
  /** Gap between stats in px. Default 40. */
  gap?: number;
  style?: React.CSSProperties;
}

/** Hero stat row — mono label over Space Grotesk value, 1px dividers between. */
export function StatRow(props: StatRowProps): JSX.Element;

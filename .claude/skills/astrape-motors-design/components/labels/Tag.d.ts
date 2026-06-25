import React from "react";

export interface TagProps {
  children?: React.ReactNode;
  /** Key color (text + border). Default --accent. Pass a discipline key. */
  color?: string;
  /** outline = key text + color-mixed border; plain = muted, borderless. */
  variant?: "outline" | "plain";
  style?: React.CSSProperties;
}

/** Mono spec tag / discipline-key chip (e.g. "EV · HEV", "HIL · SIL"). */
export function Tag(props: TagProps): JSX.Element;

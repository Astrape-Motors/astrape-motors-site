import React from "react";

export interface MarqueeProps {
  /** Terms to scroll. Internally duplicated for a seamless loop. */
  items: React.ReactNode[];
  /** Slash separator color. Default --accent. */
  separatorColor?: string;
  /** Animation duration (CSS time). Default --dur-marquee (24s). */
  duration?: string;
  style?: React.CSSProperties;
}

/** Infinite mono capability ticker on the dark marquee surface. */
export function Marquee(props: MarqueeProps): JSX.Element;

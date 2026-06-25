import * as React from "react";

export interface NavLink {
  label: string;
  href: string;
}

/**
 * Text links shown right of the wordmark. Defaults to the homepage set.
 * @startingPoint section="Navigation" subtitle="Sticky blurred site header" viewport="1280x96"
 */
export interface SiteNavProps {
  /** Text links shown right of the wordmark. Defaults to the homepage set. */
  links?: NavLink[];
  /** The single CTA button. Set null to omit. */
  cta?: { label: string; href: string } | null;
  /** Click handler for the CTA (overrides cta.href — used in the interactive UI kit). */
  onContact?: () => void;
  /** Label of the link to mark active (brightened to primary text). */
  current?: string;
  /** Wordmark pixel size. Default 15. */
  wordmarkSize?: number;
  style?: React.CSSProperties;
}

/**
 * Sticky blurred site header — wordmark + links + one Contact button.
 * @startingPoint section="Navigation" subtitle="Sticky blurred site header" viewport="1280x96"
 */
export function SiteNav(props: SiteNavProps): React.ReactElement;

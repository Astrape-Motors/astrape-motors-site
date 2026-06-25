import * as React from "react";

export interface FooterColumn {
  head: string;
  links: { label: string; href: string }[];
}

export interface SiteFooterProps {
  /** Mono descriptor under the wordmark. */
  tagline?: React.ReactNode;
  /** Link columns on the right. Defaults to Explore / Contact. */
  columns?: FooterColumn[];
  /** Copyright year. Default 2026. */
  year?: number;
  /** Domain shown at the baseline right. */
  domain?: string;
  /** Inner content cap (px). Default 1180. */
  maxWidth?: number;
  style?: React.CSSProperties;
}

/**
 * Canonical page footer — wordmark + tagline, link columns, mono baseline.
 */
export function SiteFooter(props: SiteFooterProps): React.ReactElement;

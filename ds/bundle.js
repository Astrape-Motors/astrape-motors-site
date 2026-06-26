/* @ds-bundle: {"format":3,"namespace":"AstrapMotorsDesignSystem_547f1f","components":[{"name":"Bolt","sourcePath":"components/brand/Bolt.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"CapabilityCard","sourcePath":"components/content/CapabilityCard.jsx"},{"name":"LoopBlock","sourcePath":"components/content/LoopBlock.jsx"},{"name":"Marquee","sourcePath":"components/content/Marquee.jsx"},{"name":"ProcessStepper","sourcePath":"components/content/ProcessStepper.jsx"},{"name":"RecruitPanel","sourcePath":"components/content/RecruitPanel.jsx"},{"name":"StatRow","sourcePath":"components/content/StatRow.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"Eyebrow","sourcePath":"components/labels/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/labels/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/labels/Tag.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteNav","sourcePath":"components/navigation/SiteNav.jsx"}],"sourceHashes":{"components/brand/Bolt.jsx":"c5428ad18155","components/brand/Wordmark.jsx":"107288021286","components/buttons/Button.jsx":"0743da5a9114","components/content/CapabilityCard.jsx":"51b6e3339c7a","components/content/LoopBlock.jsx":"7cc1fe01d1d6","components/content/Marquee.jsx":"0a459f2175ee","components/content/ProcessStepper.jsx":"50c57b0f1b9d","components/content/RecruitPanel.jsx":"7d67e6460b30","components/content/StatRow.jsx":"56aa7f981db7","components/content/TestimonialCard.jsx":"0d05ee7947f6","components/labels/Eyebrow.jsx":"96cc8a7645f7","components/labels/SectionHeading.jsx":"d84179692067","components/labels/Tag.jsx":"0fe23aa34466","components/navigation/SiteFooter.jsx":"ea62441b3e73","components/navigation/SiteNav.jsx":"7f96e3f3579b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AstrapMotorsDesignSystem_547f1f = window.AstrapMotorsDesignSystem_547f1f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Bolt.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Astrapē Motors lightning mark. The brand's only logo glyph — a stylised
 * bolt built from the exact source clip-path. Electric blue with an optional
 * soft glow halo; floats gently when `float` is set (used on the contact CTA).
 */
function Bolt({
  size = 25,
  color = "var(--accent, #5BE0FF)",
  glow = true,
  glowAmount = "var(--glow, 10px)",
  float = false,
  style = {},
  ...rest
}) {
  const w = Math.round(size * 0.68);
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: w,
      height: size,
      background: color,
      clipPath: "polygon(52% 0,100% 0,48% 44%,84% 44%,16% 100%,46% 52%,4% 52%)",
      boxShadow: glow ? `0 0 ${glowAmount} color-mix(in srgb, ${color} 55%, transparent)` : "none",
      animation: float ? "amFloat var(--dur-float, 5s) ease-in-out infinite" : "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Bolt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Bolt.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The full Astrapē Motors wordmark lockup: lightning mark + "ASTRAPE MOTORS"
 * set in Space Grotesk 700 with wide tracking. "MOTORS" sits at reduced
 * opacity. Use in the nav, footer, and any brand header.
 */
function Wordmark({
  size = 15,
  showBolt = true,
  color = "var(--text-primary, #E7EAF0)",
  boltColor = "var(--accent, #5BE0FF)",
  accentColor = "var(--accent, #5BE0FF)",
  glow = true,
  style = {},
  ...rest
}) {
  const boltH = Math.round(size * 1.65);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 13,
      ...style
    }
  }, rest), showBolt && /*#__PURE__*/React.createElement(__ds_scope.Bolt, {
    size: boltH,
    color: boltColor,
    glow: glow
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
      fontWeight: 700,
      fontSize: size,
      letterSpacing: "var(--ls-wordmark, 0.2em)",
      color,
      whiteSpace: "nowrap"
    }
  }, "ASTRAP", /*#__PURE__*/React.createElement("span", {
    style: {
      color: accentColor,
      textShadow: glow ? `0 0 5px color-mix(in srgb, ${accentColor} 22%, transparent)` : "none"
    }
  }, "\u0112"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.45,
      fontWeight: 500
    }
  }, "MOTORS")));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Astrapē Motors pill button / CTA. Renders an <a> when `href` is given,
 * otherwise a <button>. Three variants and two sizes. The primary variant
 * carries the discipline accent + a soft glow; ghost is a hairline outline;
 * cream is the warm pill used only on the aubergine people panel.
 */
function Button({
  variant = "primary",
  size = "md",
  href,
  glow = true,
  children,
  style = {},
  ...rest
}) {
  const pad = size === "sm" ? "10px 20px" : size === "lg" ? "16px 32px" : "16px 30px";
  const fontSize = size === "sm" ? 14 : 16;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
    fontWeight: 600,
    fontSize,
    lineHeight: 1,
    padding: pad,
    borderRadius: "var(--r-pill, 40px)",
    textDecoration: "none",
    cursor: "pointer",
    border: "1px solid transparent",
    transition: "filter .18s var(--ease, ease), background .18s var(--ease, ease)",
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      background: "var(--accent, #5BE0FF)",
      color: "var(--accent-ink, #06222B)",
      boxShadow: glow ? "0 0 var(--glow, 10px) color-mix(in srgb, var(--accent, #5BE0FF) 40%, transparent)" : "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary, #E7EAF0)",
      border: "1px solid rgba(255,255,255,.22)"
    },
    cream: {
      background: "var(--people-cream, #EFE2D8)",
      color: "var(--people-espresso, #33231A)"
    }
  };
  const merged = {
    ...base,
    ...(variants[variant] || variants.primary),
    ...style
  };
  const onEnter = e => e.currentTarget.style.filter = "brightness(1.08)";
  const onLeave = e => e.currentTarget.style.filter = "none";
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: merged,
      onMouseEnter: onEnter,
      onMouseLeave: onLeave
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: merged,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/LoopBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The sense → compute → actuate loop block — a bordered 3-column widget that
 * frames the cybernetic loop at the top of any capabilities or about section.
 * Each cell is keyed to its role color (blue · clay · sage) and separated by
 * 1px hairlines inside a single hairline-bordered frame.
 */
function LoopBlock({
  steps = [{
    label: "SENSE",
    color: "var(--disc-electrification, #5BE0FF)",
    title: "Sense",
    body: "Sensors, instrumentation and telemetry — the true state of the machine."
  }, {
    label: "COMPUTE",
    color: "var(--disc-controls, #E8924E)",
    title: "Compute",
    body: "Control systems and software — deciding what should happen next."
  }, {
    label: "ACTUATE",
    color: "var(--disc-automation, #A8BE6E)",
    title: "Actuate",
    body: "Electric motors and power electronics — making it move."
  }],
  headerLabel = "SENSE → COMPUTE → ACTUATE",
  footerLabel = "↺ CLOSED LOOP · MEASURED EVERY CYCLE",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid rgba(255,255,255,.1)",
      borderRadius: "var(--r-card-lg, 6px)",
      background: "var(--surface-card, #0C0F14)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 14,
      flexWrap: "wrap",
      padding: "14px 22px",
      borderBottom: "1px solid rgba(255,255,255,.07)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono, monospace)",
      fontSize: 12.5,
      letterSpacing: ".22em",
      color: "var(--text-secondary, #A7AEB8)"
    }
  }, headerLabel), footerLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono, monospace)",
      fontSize: 11.5,
      letterSpacing: ".16em",
      color: "var(--text-mono-muted, #5d6470)"
    }
  }, footerLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${steps.length}, 1fr)`
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      padding: "24px 22px",
      borderRight: i < steps.length - 1 ? "1px solid rgba(255,255,255,.07)" : "none",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono, monospace)",
      fontSize: 12,
      letterSpacing: ".16em",
      color: s.color,
      marginBottom: 14
    }
  }, s.label), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
      fontWeight: 600,
      fontSize: 20,
      margin: "0 0 10px",
      color: "var(--text-primary, #E7EAF0)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm, 14.5px)",
      lineHeight: 1.6,
      color: "var(--text-tertiary, #9AA3AF)",
      margin: 0
    }
  }, s.body)))));
}
Object.assign(__ds_scope, { LoopBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LoopBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Infinite capability marquee — a mono ticker of terms separated by accent
 * slashes, scrolling left over the dark marquee surface with hairlines top &
 * bottom. The list is duplicated internally so the loop is seamless.
 */
function Marquee({
  items = [],
  separatorColor = "var(--accent, #5BE0FF)",
  duration = "var(--dur-marquee, 24s)",
  style = {},
  ...rest
}) {
  const run = keyPrefix => items.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: `${keyPrefix}-${i}`
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "0 28px"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      color: separatorColor
    }
  }, "/")));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: "1px solid var(--line, rgba(255,255,255,.07))",
      borderBottom: "1px solid var(--line, rgba(255,255,255,.07))",
      padding: "18px 0",
      overflow: "hidden",
      background: "var(--surface-marquee, #090C10)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      width: "max-content",
      animation: `amMarq ${duration} linear infinite`,
      fontFamily: "var(--font-mono, monospace)",
      fontSize: 14,
      letterSpacing: "var(--ls-mono-tag, 0.16em)",
      color: "var(--text-mono-muted, #6b7280)"
    }
  }, run("a"), run("b")));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/content/ProcessStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Process stepper — a row of equal phases inside a single hairline-bordered
 * frame, divided by 1px lines. Each phase is keyed to the discipline that
 * leads it via its mono number color. Used in the recessed "method" band.
 */
function ProcessStepper({
  phases = [],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${phases.length || 5}, 1fr)`,
      gap: 0,
      border: "1px solid var(--line-strong, rgba(255,255,255,.1))",
      borderRadius: "var(--r-card-lg, 5px)",
      overflow: "hidden",
      ...style
    }
  }, rest), phases.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "26px 22px",
      borderRight: i < phases.length - 1 ? "1px solid var(--line-strong, rgba(255,255,255,.1))" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono, monospace)",
      fontSize: 13,
      color: p.color || "var(--text-eyebrow, #7d8590)",
      marginBottom: 18
    }
  }, p.num), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
      fontWeight: 600,
      fontSize: 17,
      marginBottom: 8,
      color: "var(--text-primary, #E7EAF0)"
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-meta, 13.5px)",
      lineHeight: 1.55,
      color: "var(--text-quaternary, #8c93a0)",
      margin: 0
    }
  }, p.body))));
}
Object.assign(__ds_scope, { ProcessStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProcessStepper.jsx", error: String((e && e.message) || e) }); }

// components/content/RecruitPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Recruit panel — the inset, accent-topped CTA card used on the aubergine
 * PEOPLE surface (the "Enjoy engineering again." bench pitch on the homepage
 * team band). A self-contained recruiting moment: mono eyebrow, display
 * heading, one line of body, and a single cream pill. Keyed to a discipline
 * accent (plum by default) carried in the top rule + corner glow.
 *
 * Sits beside the client-facing column in a two-up; also works standalone in
 * any narrow slot that needs a "come work with us" beat.
 */
function RecruitPanel({
  eyebrow = "FOR LICENSED PES",
  heading = /*#__PURE__*/React.createElement(React.Fragment, null, "Enjoy engineering", /*#__PURE__*/React.createElement("br", null), "again."),
  body = "The hard problems, none of the bureaucracy. Bring your stamp to real systems — and work with engineers who still love the part where it powers on.",
  ctaLabel = "Join the bench →",
  ctaHref = "#",
  accent = "var(--disc-rnd, #C79AD6)",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      alignSelf: "stretch",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: "linear-gradient(168deg, rgba(0,0,0,0.30), rgba(0,0,0,0.14))",
      border: "1px solid var(--line, rgba(255,255,255,.08))",
      borderRadius: "var(--r-panel, 16px)",
      padding: "48px 44px",
      position: "relative",
      overflow: "hidden",
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: `linear-gradient(90deg, ${accent}, var(--brand-violet, #9B8CFF))`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -90,
      right: -70,
      width: 300,
      height: 300,
      background: `radial-gradient(circle, color-mix(in srgb, ${accent} 16%, transparent), transparent 66%)`,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)",
      fontSize: 12,
      letterSpacing: ".26em",
      color: accent,
      marginBottom: 20
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
      fontWeight: 700,
      fontSize: "clamp(28px, 3.6vw, 40px)",
      lineHeight: 1.02,
      letterSpacing: "-0.02em",
      margin: "0 0 18px",
      color: "var(--people-heading, #F0E8EC)"
    }
  }, heading), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.62,
      color: "var(--people-text, #BFB2BA)",
      margin: "0 0 30px",
      maxWidth: 380
    }
  }, body), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "cream",
    href: ctaHref
  }, ctaLabel)));
}
Object.assign(__ds_scope, { RecruitPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RecruitPanel.jsx", error: String((e && e.message) || e) }); }

// components/content/StatRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hero stat row — mono labels over Space Grotesk values, separated by 1px
 * vertical dividers. Used under the hero CTA (DOMAINS / METHOD / VALIDATION).
 */
function StatRow({
  items = [],
  gap = 40,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap,
      flexWrap: "wrap",
      alignItems: "stretch",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "var(--line-strong, rgba(255,255,255,.1))"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono, monospace)",
      fontSize: 12,
      color: "var(--text-mono-muted, #5D6470)",
      letterSpacing: "var(--ls-mono-tight, 0.14em)",
      marginBottom: 6
    }
  }, it.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
      fontWeight: 600,
      fontSize: 17,
      color: "var(--text-primary, #E7EAF0)"
    }
  }, it.value)))));
}
Object.assign(__ds_scope, { StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatRow.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial quote card — open-quote mark, italic body, avatar circle +
 * name/org. Text is intentionally left neutral (body text color, not accent)
 * so the client's words don't compete with the discipline palette. Used in
 * groups of 2–4, never solo.
 */
function TestimonialCard({
  quote,
  name,
  role,
  org,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid rgba(255,255,255,.07)",
      borderRadius: "var(--r-card-lg, 6px)",
      background: "var(--surface-card, #0C0F14)",
      padding: "28px 26px",
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
      fontSize: 34,
      lineHeight: 1,
      color: "var(--brand-blue, #5BE0FF)",
      marginBottom: 14,
      userSelect: "none"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm, 14.5px)",
      lineHeight: 1.65,
      color: "var(--text-quaternary, #8C93A0)",
      fontStyle: "italic",
      margin: "0 0 22px",
      flex: 1
    }
  }, quote || "Client testimonial goes here — a sentence or two on the outcome we delivered and what it was like to work together."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "50%",
      background: "var(--surface-well, #10141A)",
      border: "1px solid rgba(255,255,255,.1)",
      flexShrink: 0,
      overflow: "hidden"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm, 14.5px)",
      color: "var(--text-secondary, #A7AEB8)",
      fontWeight: 500
    }
  }, name || "Name", role ? `, ${role}` : ""), org && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono, monospace)",
      fontSize: 11.5,
      color: "var(--text-mono-muted, #5D6470)"
    }
  }, org))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/labels/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mono section eyebrow — the wide-tracked label that sits above a heading,
 * e.g. "01 — WHAT WE DO". Neutral grey by default; pass a discipline key to
 * tint it (the eyebrow is where the key lives when the heading stays solid).
 */
function Eyebrow({
  children,
  color = "var(--text-eyebrow, #7D8590)",
  spacing = "var(--ls-mono, 0.28em)",
  size = "var(--fs-mono, 12.5px)",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)",
      fontSize: size,
      letterSpacing: spacing,
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/labels/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GRADS = {
  brand: "var(--grad-brand, linear-gradient(95deg,#5BE0FF,#9B8CFF))",
  controls: "var(--grad-controls, linear-gradient(100deg,#F4BE54 8%,#DC5A26 92%))",
  rnd: "var(--grad-rnd, linear-gradient(100deg,#DA98EA 8%,#8597FF 92%))"
};

/**
 * Space Grotesk display heading. `level` sets the fluid size (h1 hero, h2
 * section, contact). Per the brand's "heading stack" rule, a gradient is
 * emphasis with a level: apply `gradient` ONLY when the heading is the single
 * subject of its view and the only gradient on screen — otherwise keep it
 * solid and let the eyebrow/bar carry the discipline key. When `gradient` is
 * set, wrap the emphasised words in {`<span data-grad>…</span>`} or pass
 * `gradientWord` to gradient just the trailing word.
 */
function SectionHeading({
  children,
  level = "h2",
  gradient = "none",
  as,
  style = {},
  ...rest
}) {
  const sizes = {
    h1: {
      fontSize: "var(--fs-h1, clamp(38px,8vw,88px))",
      lineHeight: 0.98,
      letterSpacing: "-0.035em"
    },
    h2: {
      fontSize: "var(--fs-h2, clamp(30px,5vw,46px))",
      lineHeight: 1.05,
      letterSpacing: "-0.02em"
    },
    contact: {
      fontSize: "var(--fs-h2-contact, clamp(34px,6.5vw,58px))",
      lineHeight: 1.0,
      letterSpacing: "-0.03em"
    }
  };
  const Tag = as || (level === "h1" ? "h1" : "h2");
  const gradFill = gradient !== "none" ? {
    background: GRADS[gradient] || GRADS.brand,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
      fontWeight: 700,
      margin: 0,
      color: "var(--text-primary, #E7EAF0)",
      ...(sizes[level] || sizes.h2),
      ...gradFill,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/labels/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mono spec tag — a small wide-tracked chip used for readouts and discipline
 * keys, e.g. "EV · HEV", "HIL · SIL". Two looks: `outline` (key-color text +
 * color-mixed border, the default) and `plain` (muted text, no border).
 */
function Tag({
  children,
  color = "var(--accent, #5BE0FF)",
  variant = "outline",
  style = {},
  ...rest
}) {
  const base = {
    display: "inline-block",
    fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)",
    fontSize: "var(--fs-mono-xs, 11px)",
    letterSpacing: "0.06em",
    padding: "5px 9px",
    borderRadius: "var(--r-tag, 2px)",
    whiteSpace: "nowrap"
  };
  const looks = {
    outline: {
      color,
      border: `1px solid color-mix(in srgb, ${color} 32%, transparent)`
    },
    plain: {
      color: "var(--text-quaternary, #8C93A0)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...(looks[variant] || looks.outline),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/CapabilityCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Color-keyed capability card. Each card is keyed to one discipline via
 * `accent` (blue / clay / sage / plum) — a key bar, a mono /0N index, a solid
 * Space Grotesk title, body copy, and a discipline tag. Flat (4px radius),
 * 1px hairline border. Color = discipline; the card itself stays dark.
 */
function CapabilityCard({
  index,
  title,
  body,
  tag,
  accent = "var(--accent, #5BE0FF)",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      // Flex column so the card splits into header / body / footer: the body
      // grows and the tag pins to the bottom, keeping tags aligned across a
      // row of cards no matter how long each body runs. Needs the card to
      // fill its grid cell — height:100% + a stretching grid (the default).
      display: "flex",
      flexDirection: "column",
      height: "100%",
      boxSizing: "border-box",
      background: "var(--surface-card, #0C0F14)",
      border: "var(--card-border, 1px solid rgba(255,255,255,.08))",
      borderRadius: "var(--r-card, 4px)",
      padding: "28px 24px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "var(--keybar-w, 30px)",
      height: "var(--keybar-h, 3px)",
      background: accent,
      borderRadius: 2,
      marginBottom: 18
    }
  }), index && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono, monospace)",
      fontSize: 12,
      color: accent,
      marginBottom: 22
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
      fontWeight: 600,
      fontSize: "var(--fs-card-title, 21px)",
      margin: "0 0 12px",
      color: "var(--text-primary, #E7EAF0)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      flex: 1,
      fontSize: "var(--fs-body-sm, 14.5px)",
      lineHeight: 1.6,
      color: "var(--text-tertiary, #9AA3AF)",
      margin: tag ? "0 0 18px" : 0
    }
  }, body), tag && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    color: accent
  }, tag)));
}
Object.assign(__ds_scope, { CapabilityCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CapabilityCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
/**
 * Astrapē site footer — the canonical page foot. Wordmark + one-line mono
 * descriptor on the left, two link columns (Explore / Contact) on the right,
 * and a mono baseline (© year · domain). Prop-driven so pages can adjust the
 * columns; defaults match the homepage. Replaces the inlined <footer>.
 */
function SiteFooter({
  tagline = /*#__PURE__*/React.createElement(React.Fragment, null, "Systems engineering \xB7 making things move", /*#__PURE__*/React.createElement("br", null), "Electric motors & software \xB7 land, sea & lab"),
  columns = [{
    head: "EXPLORE",
    links: [{
      label: "Capabilities",
      href: "#capabilities"
    }, {
      label: "Sectors",
      href: "#sectors"
    }, {
      label: "R&D",
      href: "#process"
    }]
  }, {
    head: "CONTACT",
    links: [{
      label: "hello@astrapemotors.com",
      href: "mailto:hello@astrapemotors.com"
    }, {
      label: "Start a project",
      href: "#contact"
    }]
  }],
  year = 2026,
  domain = "astrapemotors.com",
  maxWidth = 1180,
  style
}) {
  const col = {
    display: "flex",
    flexDirection: "column",
    gap: 10
  };
  const head = {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "var(--text-mono-muted)",
    letterSpacing: ".16em",
    marginBottom: 4
  };
  const link = {
    color: "var(--text-tertiary)",
    textDecoration: "none",
    fontSize: 14
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "54px 8vw",
      borderTop: "1px solid var(--line)",
      background: "var(--bg-footer)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 40,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 14,
    glow: false,
    style: {
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-mono-muted)",
      lineHeight: 1.7,
      margin: 0
    }
  }, tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.head,
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, c.head), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: link
  }, l.label)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth,
      margin: "40px auto 0",
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--text-faint)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", year, " ASTRAP\u0112 MOTORS"), /*#__PURE__*/React.createElement("span", null, domain)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteNav.jsx
try { (() => {
/**
 * Astrapē sticky site navigation — the canonical header for every page.
 * Blurred near-black bar, wordmark lockup left, text links + one Contact
 * button right. Prop-driven so service/detail pages can swap the link set or
 * point the CTA at a mailto. Replaces the hand-inlined <nav> that used to live
 * in each template.
 */
function SiteNav({
  links = [{
    label: "Capabilities",
    href: "#capabilities"
  }, {
    label: "Sectors",
    href: "#sectors"
  }, {
    label: "Process",
    href: "systems-engineering.html"
  }, {
    label: "About",
    href: "#team"
  }],
  cta = {
    label: "Contact",
    href: "#contact"
  },
  onContact,
  current,
  wordmarkSize = 15,
  style
}) {
  const link = {
    color: "inherit",
    textDecoration: "none",
    transition: "color 120ms linear"
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 8vw",
      background: "rgba(10,9,7,0.72)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--line)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      display: "inline-flex",
      textDecoration: "none"
    },
    "aria-label": "Astrap\u0113 Motors \u2014 home"
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: wordmarkSize
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32,
      fontSize: 14,
      color: "var(--text-tertiary)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      ...link,
      color: current === l.label ? "var(--text-primary)" : "inherit"
    }
  }, l.label)), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: onContact ? undefined : cta.href,
    onClick: onContact
  }, cta.label)));
}
Object.assign(__ds_scope, { SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Bolt = __ds_scope.Bolt;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CapabilityCard = __ds_scope.CapabilityCard;

__ds_ns.LoopBlock = __ds_scope.LoopBlock;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.ProcessStepper = __ds_scope.ProcessStepper;

__ds_ns.RecruitPanel = __ds_scope.RecruitPanel;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteNav = __ds_scope.SiteNav;

})();

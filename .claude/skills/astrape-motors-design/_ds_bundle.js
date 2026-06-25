/* @ds-bundle: {"format":3,"namespace":"AstrapMotorsDesignSystem_547f1f","components":[{"name":"Bolt","sourcePath":"components/brand/Bolt.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"CapabilityCard","sourcePath":"components/content/CapabilityCard.jsx"},{"name":"LoopBlock","sourcePath":"components/content/LoopBlock.jsx"},{"name":"Marquee","sourcePath":"components/content/Marquee.jsx"},{"name":"ProcessStepper","sourcePath":"components/content/ProcessStepper.jsx"},{"name":"StatRow","sourcePath":"components/content/StatRow.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"Eyebrow","sourcePath":"components/labels/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/labels/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/labels/Tag.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteNav","sourcePath":"components/navigation/SiteNav.jsx"}],"sourceHashes":{"components/brand/Bolt.jsx":"c5428ad18155","components/brand/Wordmark.jsx":"107288021286","components/buttons/Button.jsx":"0743da5a9114","components/content/CapabilityCard.jsx":"51b6e3339c7a","components/content/LoopBlock.jsx":"7cc1fe01d1d6","components/content/Marquee.jsx":"0a459f2175ee","components/content/ProcessStepper.jsx":"50c57b0f1b9d","components/content/StatRow.jsx":"56aa7f981db7","components/content/TestimonialCard.jsx":"0d05ee7947f6","components/labels/Eyebrow.jsx":"96cc8a7645f7","components/labels/SectionHeading.jsx":"d84179692067","components/labels/Tag.jsx":"0fe23aa34466","components/navigation/SiteFooter.jsx":"ea62441b3e73","components/navigation/SiteNav.jsx":"015e098875cd","reference/handoff-homepage/image-slot.js":"9309434cb09c","ui_kits/marketing-site/app.jsx":"b696533b8755","ui_kits/marketing-site/sections.jsx":"0b7ece35b55e"},"inlinedExternals":[],"unexposedExports":[]} */

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
    label: "R&D",
    href: "#process"
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

// reference/handoff-homepage/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/handoff-homepage/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/app.jsx
try { (() => {
/* Astrapē Motors — marketing site · interactive shell.
   Wires the homepage sections together and adds the one piece of real
   interaction: a "Start a project" contact dialog with a fake submit + success
   state. Demonstrates the brand's CTA flow without a backend. */

const {
  Bolt,
  Button,
  Eyebrow,
  SectionHeading
} = window.AstrapMotorsDesignSystem_547f1f;
const MARQUEE_TERMS = ["SYSTEMS ENGINEERING", "SENSE → COMPUTE → ACTUATE", "CONTROL SYSTEMS", "ELECTRIC POWERTRAINS", "EMBEDDED SOFTWARE", "MODEL-BASED DESIGN", "SIGNAL PROCESSING", "HIL · SIL VALIDATION", "MARINE PROPULSION", "CLOSED-LOOP CONTROL"];
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".16em",
      color: "var(--text-eyebrow)"
    }
  }, label), children);
}
const inputStyle = {
  background: "var(--surface-card)",
  border: "1px solid var(--line-strong)",
  borderRadius: 6,
  padding: "12px 14px",
  color: "var(--text-primary)",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  outline: "none"
};
function ContactDialog({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (!open) setTimeout(() => setSent(false), 200);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      background: "rgba(5,4,3,0.72)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(520px, 100%)",
      background: "#0C0B09",
      border: "1px solid var(--line-strong)",
      borderRadius: 16,
      boxShadow: "0 40px 100px -30px rgba(0,0,0,.8)",
      padding: "38px 38px 34px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: "absolute",
      top: 18,
      right: 18,
      background: "none",
      border: "none",
      color: "var(--text-tertiary)",
      fontSize: 22,
      cursor: "pointer",
      lineHeight: 1
    }
  }, "\xD7"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "26px 0 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Bolt, {
    size: 34,
    glowAmount: "30px"
  })), /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h2",
    style: {
      fontSize: 30,
      marginBottom: 12
    }
  }, "Message sent."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 16,
      lineHeight: 1.6,
      margin: "0 0 28px"
    }
  }, "Thanks \u2014 we read every note ourselves. Expect a straight answer within two business days."), /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, "Done")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 14
    }
  }, "START A PROJECT"), /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h2",
    style: {
      fontSize: 28,
      marginBottom: 8
    }
  }, "Tell us about the platform."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-tertiary)",
      fontSize: 14.5,
      lineHeight: 1.6,
      margin: "0 0 26px"
    }
  }, "The powertrain, the problem, the timeline \u2014 whatever you've got."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "NAME"
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    style: inputStyle,
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "EMAIL"
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "email",
    style: inputStyle,
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "WHAT ARE YOU BUILDING?"
  }, /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    style: {
      ...inputStyle,
      resize: "vertical"
    },
    placeholder: "EV drivetrain, marine hybrid, controls retrofit\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Send it"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-mono-muted)"
    }
  }, "or hello@astrapemotors.com"))))));
}
function App() {
  const [open, setOpen] = React.useState(false);
  const contact = () => setOpen(true);

  // Subtle scroll parallax on decorative glows only (never text). Respects
  // reduced-motion; tiny factors so it reads as atmosphere, not movement.
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let els = [],
      ticking = false;
    const collect = () => {
      els = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
    };
    const update = () => {
      const vh = window.innerHeight;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        const rel = (r.top + r.height / 2 - vh / 2) / vh;
        const f = parseFloat(el.getAttribute("data-parallax")) || 0.1;
        el.style.transform = `translate3d(0,${(rel * f * -110).toFixed(1)}px,0)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    collect();
    update();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", () => {
      collect();
      update();
    }, {
      passive: true
    });
    const t = setInterval(collect, 600);
    setTimeout(() => clearInterval(t), 3000);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sections are defined in sections.jsx and exposed on window. Read them at
  // render time (not module top) so load-order between the two babel scripts
  // can't leave any undefined — the mount below waits for the ready flag.
  const {
    Nav,
    Hero,
    Capabilities,
    CyberneticsQuote,
    Process,
    Sectors,
    Team,
    Testimonials,
    Contact,
    Footer
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      overflowX: "hidden",
      background: "var(--bg)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    onContact: contact
  }), /*#__PURE__*/React.createElement(Hero, {
    onContact: contact
  }), /*#__PURE__*/React.createElement(Marquee, {
    items: MARQUEE_TERMS
  }), /*#__PURE__*/React.createElement(Capabilities, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Sectors, null), /*#__PURE__*/React.createElement(CyberneticsQuote, null), /*#__PURE__*/React.createElement(Team, {
    onContact: contact
  }), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Contact, {
    onContact: contact
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(ContactDialog, {
    open: open,
    onClose: () => setOpen(false)
  }));
}

// Babel processes type="text/babel" src scripts in document order, so by the
// time this file runs, sections.jsx has already executed and window.Nav etc.
// are all set. Render directly — no polling needed.
// Guard: only run in a page that has #am-root (not inside _ds_bundle.js;
// the compiler only bundles PascalCase exports with .d.ts siblings, which
// this file doesn't have, but the guard makes it double-safe).
if (typeof document !== 'undefined' && document.getElementById('am-root') && !window.__astrapeMounted) {
  window.__astrapeMounted = true;
  ReactDOM.createRoot(document.getElementById('am-root')).render(React.createElement(App));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Astrapē Motors — marketing site UI kit · section components.
   Recreated from the production homepage (design/handoff-homepage). Composes the
   design-system primitives from the compiled bundle. Each section is exported to
   window so the Babel-scoped index.html can mount them. */

const {
  Bolt,
  Wordmark,
  Button,
  Eyebrow,
  SectionHeading,
  Tag,
  CapabilityCard,
  StatRow,
  Marquee,
  ProcessStepper,
  SiteNav,
  SiteFooter
} = window.AstrapMotorsDesignSystem_547f1f;
const MAX = 1180;

/* ---- Honest image placeholder (the 6 slots awaiting real photography) ---- */
function PhotoSlot({
  label,
  height = 280,
  radius = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: radius,
      background: "repeating-linear-gradient(135deg, var(--surface-well) 0 14px, #0C1117 14px 28px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      color: "var(--text-mono-muted)"
    }
  }, /*#__PURE__*/React.createElement(Bolt, {
    size: 22,
    glow: false,
    color: "var(--text-mono-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".18em"
    }
  }, label));
}

/* ============================ NAV ============================ */
function Nav({
  onContact
}) {
  // Thin wrapper over the DS SiteNav — keeps the interactive onContact handler.
  return /*#__PURE__*/React.createElement(SiteNav, {
    onContact: onContact
  });
}

/* ============================ HERO ============================ */
function Hero({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      minHeight: "calc(100svh - 124px)",
      padding: "48px 8vw"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-parallax": "0.18",
    style: {
      position: "absolute",
      top: -220,
      right: -120,
      width: 720,
      height: 720,
      background: "var(--focal-glow-blue)",
      pointerEvents: "none"
    },
    className: "am-glow"
  }), /*#__PURE__*/React.createElement("div", {
    "data-parallax": "0.28",
    style: {
      position: "absolute",
      bottom: -260,
      left: -160,
      width: 620,
      height: 620,
      background: "var(--focal-glow-violet)",
      pointerEvents: "none"
    },
    className: "am-glow"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: MAX,
      margin: "0 auto",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      letterSpacing: ".3em",
      marginBottom: 30,
      color: "var(--text-secondary)"
    }
  }, "SENSE ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-blue)"
    }
  }, "\u2192"), " COMPUTE ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-blue)"
    }
  }, "\u2192"), " ACTUATE ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-mono-muted)"
    }
  }, "\xB7 SYSTEMS ENGINEERING")), /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h1",
    style: {
      maxWidth: 980,
      marginBottom: 28
    }
  }, "Electrify everything", /*#__PURE__*/React.createElement("br", null), "that ", /*#__PURE__*/React.createElement("span", {
    className: "am-grad-brand"
  }, "moves.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.6,
      color: "var(--text-secondary)",
      maxWidth: 600,
      margin: "0 0 40px"
    }
  }, "A systems engineering firm specializing in making things move \u2014 with electric motors and software. We close the loop from sensor to actuator, and take the hard problems no one else will."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onContact
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#capabilities"
  }, "Our capabilities")), /*#__PURE__*/React.createElement("div", {
    id: "heroStats",
    style: {
      display: "flex",
      gap: 40,
      flexWrap: "wrap",
      marginTop: 60
    }
  }, [{
    label: "PRACTICE",
    value: "Systems engineering",
    sub: "Requirements · architecture · V&V"
  }, {
    label: "METHOD",
    value: "Model-based design",
    sub: "SIL · HIL · validation rigs"
  }, {
    label: "DOMAINS",
    value: "Land · sea · lab",
    sub: "EV · HEV · marine · research"
  }].map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.label
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      alignSelf: "stretch",
      background: "var(--line-strong)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-mono-muted)",
      letterSpacing: ".14em",
      marginBottom: 7
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 17,
      color: "var(--text-primary)",
      marginBottom: 4
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--text-quaternary)",
      letterSpacing: ".04em"
    }
  }, s.sub)))))));
}

/* ======================== CAPABILITIES ======================== */
const CAPS = [{
  index: "/01",
  title: "Electrification",
  accent: "var(--disc-electrification)",
  tag: "EV · HEV",
  body: "EV & hybrid powertrain architecture, battery and power-electronics integration, energy management."
}, {
  index: "/02",
  title: "Controls",
  accent: "var(--disc-controls)",
  tag: "MBD",
  body: "Embedded control software, model-based design, calibration and supervisory strategy for real powertrains."
}, {
  index: "/03",
  title: "Automation & Test",
  accent: "var(--disc-automation)",
  tag: "HIL · SIL",
  body: "HIL / SIL rigs, test automation and validation pipelines that catch failures before the road or the water does."
}, {
  index: "/04",
  title: "R\u0026D \u0026 Consulting",
  accent: "var(--disc-rnd)",
  tag: "R&D",
  body: "Feasibility, prototyping and the messy early-stage problems — brought to a working, measurable result."
}];
const SERVICES = [{
  title: "Software Development",
  body: "Embedded, application and tooling software — from real-time targets to the dashboards your team actually uses.",
  specs: ["EMBEDDED", "APPS", "TOOLING"]
}, {
  title: "Data & Analysis",
  body: "Scientific and statistical computing — signal processing, system identification and the analysis behind a test result, a lab, or a paper. The engineering kind of data, not web analytics.",
  specs: ["SIGNAL PROCESSING", "STATISTICAL", "SYSTEM ID"]
}];
const LOOP = [{
  title: "Sense",
  body: "Sensors, instrumentation and telemetry — the true state of the machine."
}, {
  title: "Compute",
  body: "Control systems and software — deciding what should happen next."
}, {
  title: "Actuate",
  body: "Electric motors and power electronics — making it move."
}];
function Capabilities() {
  return /*#__PURE__*/React.createElement("section", {
    id: "capabilities",
    style: {
      padding: "104px 8vw"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAX,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 18
    }
  }, "01 \u2014 WHAT WE DO"), /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h2",
    style: {
      marginBottom: 22
    }
  }, "We're a systems engineering firm."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.62,
      color: "var(--text-secondary)",
      margin: 0
    }
  }, "Our specialty is making things move \u2014 with electric motors and software. At the core it's cybernetics: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-primary)",
      fontWeight: 600
    }
  }, "sense, compute, actuate"), " \u2014 and close the loop. Systems engineering is the practice that holds it together \u2014 requirements, architecture, integration and V&V \u2014 so a platform behaves like one machine, not four subsystems that don't talk.")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--line-strong)",
      borderRadius: 6,
      background: "var(--surface-card)",
      overflow: "hidden",
      marginBottom: 46
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 14,
      flexWrap: "wrap",
      padding: "16px 22px",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      letterSpacing: ".22em",
      color: "var(--text-secondary)"
    }
  }, "SENSE ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-blue)"
    }
  }, "\u2192"), " COMPUTE ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-blue)"
    }
  }, "\u2192"), " ACTUATE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      letterSpacing: ".16em",
      color: "var(--text-mono-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-blue)"
    }
  }, "\u21BA"), " CLOSED LOOP \xB7 MEASURED EVERY CYCLE")), /*#__PURE__*/React.createElement("div", {
    id: "loopGrid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)"
    }
  }, LOOP.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      padding: "26px 24px",
      borderRight: i < 2 ? "1px solid var(--line)" : "none",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 21,
      margin: "0 0 10px",
      color: "var(--text-primary)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: "var(--text-tertiary)",
      margin: 0
    }
  }, s.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: ".24em",
      color: "var(--text-mono-muted)",
      marginBottom: 22
    }
  }, "SPECIALTIES"), /*#__PURE__*/React.createElement("div", {
    id: "capGrid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 18
    }
  }, CAPS.map(c => /*#__PURE__*/React.createElement(CapabilityCard, _extends({
    key: c.index
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 46
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: ".24em",
      color: "var(--text-mono-muted)",
      marginBottom: 22
    }
  }, "SOFTWARE & DATA"), /*#__PURE__*/React.createElement("div", {
    id: "servicesGrid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      border: "1px solid var(--line)",
      borderRadius: 6,
      background: "var(--surface-card)",
      padding: "26px 24px",
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 20,
      margin: "0 0 10px",
      color: "var(--text-primary)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: "var(--text-tertiary)",
      margin: "0 0 18px",
      flex: 1
    }
  }, s.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap",
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--text-quaternary)"
    }
  }, s.specs.map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, t)))))))));
}

/* =========================== PROCESS =========================== */
function Process() {
  const blueprint = "linear-gradient(color-mix(in srgb,var(--brand-blue) 6%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--brand-blue) 6%,transparent) 1px,transparent 1px)";
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: {
      position: "relative",
      padding: "104px 8vw",
      backgroundColor: "var(--bg-process)",
      backgroundImage: blueprint,
      backgroundSize: "36px 36px",
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)",
      boxShadow: "var(--shadow-recessed)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAX,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 18
    }
  }, "02 \u2014 HOW WE WORK"), /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h2",
    style: {
      maxWidth: 680,
      marginBottom: 16
    }
  }, "From whiteboard to validated hardware."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      lineHeight: 1.65,
      color: "var(--text-secondary)",
      maxWidth: 540,
      margin: "0 0 56px"
    }
  }, "A disciplined model-based pipeline. Every stage produces something you can measure \u2014 not a slide deck. Each phase is keyed to the discipline that leads it."), /*#__PURE__*/React.createElement(ProcessStepper, {
    phases: [{
      num: "01",
      title: "Scope",
      body: "Feasibility, requirements, architecture trade studies.",
      color: "var(--disc-rnd)"
    }, {
      num: "02",
      title: "Model",
      body: "Plant & controller models, SIL, control-strategy design.",
      color: "var(--disc-controls)"
    }, {
      num: "03",
      title: "Build",
      body: "Embedded code generation, calibration, bench bring-up.",
      color: "var(--disc-electrification)"
    }, {
      num: "04",
      title: "Validate",
      body: "HIL / SIL test campaigns, failure-mode coverage, sign-off.",
      color: "var(--disc-automation)"
    }, {
      num: "05",
      title: "Handoff",
      body: "Production-ready release, documentation, support.",
      color: "var(--text-eyebrow)"
    }]
  })));
}

/* =========================== SECTORS =========================== */
const MORE_SECTORS = [{
  title: "Industrial",
  body: "Factory automation, electric drives and motion control for production lines and heavy machinery.",
  specs: ["DRIVES", "MOTION", "PLC"]
}, {
  title: "Agricultural",
  body: "Electrified and autonomous off-highway equipment — tractors, harvesters and the systems that run them.",
  specs: ["OFF-HIGHWAY", "AUTONOMY"]
}, {
  title: "Energy & Power",
  body: "Stationary storage, microgrids and charging infrastructure — power electronics built for the field.",
  specs: ["STORAGE", "MICROGRID", "CHARGING"]
}, {
  title: "Government & Defense",
  body: "Ruggedized electric and hybrid powertrains for ground and marine platforms where failure isn't an option.",
  specs: ["GROUND", "MARINE", "RUGGED"]
}];
function Sectors() {
  const specRow = {
    display: "flex",
    gap: 22,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    color: "var(--text-quaternary)"
  };
  const moreSpecRow = {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "var(--text-quaternary)"
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "sectors",
    style: {
      padding: "104px 8vw"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAX,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 18
    }
  }, "03 \u2014 WHERE WE WORK"), /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h2",
    style: {
      marginBottom: 46
    }
  }, "Land and sea."), /*#__PURE__*/React.createElement("div", {
    id: "sectorGrid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--line-strong)",
      borderRadius: 6,
      overflow: "hidden",
      background: "var(--surface-card-sector)"
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "EV CHASSIS / POWERTRAIN"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 30
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 26,
      margin: "0 0 12px"
    }
  }, "Automotive"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.62,
      color: "var(--text-tertiary)",
      margin: "0 0 20px"
    }
  }, "Electric and hybrid drive systems, supervisory controls, and validation for passenger, commercial and off-highway platforms."), /*#__PURE__*/React.createElement("div", {
    style: specRow
  }, /*#__PURE__*/React.createElement("span", null, "EV DRIVE"), /*#__PURE__*/React.createElement("span", null, "HYBRID"), /*#__PURE__*/React.createElement("span", null, "SUPERVISORY CTRL")))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--line-strong)",
      borderRadius: 6,
      overflow: "hidden",
      background: "var(--surface-card-sector)"
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "VESSEL / PROPULSION"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 30
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 26,
      margin: "0 0 12px"
    }
  }, "Marine"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.62,
      color: "var(--text-tertiary)",
      margin: "0 0 20px"
    }
  }, "Electric and hybrid propulsion, power management and automation for vessels where reliability isn't optional."), /*#__PURE__*/React.createElement("div", {
    style: specRow
  }, /*#__PURE__*/React.createElement("span", null, "E-PROPULSION"), /*#__PURE__*/React.createElement("span", null, "POWER MGMT"), /*#__PURE__*/React.createElement("span", null, "AUTOMATION"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: ".24em",
      color: "var(--text-mono-muted)",
      marginBottom: 22
    }
  }, "ALSO SERVING"), /*#__PURE__*/React.createElement("div", {
    id: "sectorGridMore",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 18
    }
  }, MORE_SECTORS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      border: "1px solid var(--line)",
      borderRadius: 6,
      background: "var(--surface-card-sector)",
      padding: "24px 22px",
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 19,
      margin: "0 0 10px",
      color: "var(--text-primary)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--text-tertiary)",
      margin: "0 0 18px",
      flex: 1
    }
  }, s.body), /*#__PURE__*/React.createElement("div", {
    style: moreSpecRow
  }, s.specs.map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, t)))))))));
}

/* ============================ TEAM ============================ */
function Team({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "team",
    style: {
      padding: "36px 8vw",
      color: "var(--people-heading)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "teamPanel",
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      background: "var(--people-panel)",
      border: "1px solid var(--line-faint)",
      borderRadius: 22,
      boxShadow: "var(--shadow-panel)",
      padding: "74px 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "teamGrid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 60,
      alignItems: "center",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      letterSpacing: ".24em",
      color: "var(--people-eyebrow)",
      marginBottom: 22
    }
  }, "04 \u2014 WHO YOU WORK WITH"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(30px,5vw,46px)",
      lineHeight: 1.04,
      letterSpacing: "-0.02em",
      margin: "0 0 22px"
    }
  }, "Senior engineers.", /*#__PURE__*/React.createElement("br", null), "No handoffs."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: "var(--people-text)",
      margin: "0 0 18px",
      maxWidth: 440
    }
  }, "Astrap\u0113 is a small team of senior electrification and controls engineers. There's no account manager and no junior bench \u2014 you work directly with the people doing the work."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: "var(--people-text)",
      margin: "0 0 30px",
      maxWidth: 440
    }
  }, "We take a few projects at a time, on purpose. That's how the hard ones get finished."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cream",
    onClick: onContact
  }, "Meet the team"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: ".12em",
      color: "var(--people-chip)",
      border: "1px solid rgba(255,255,255,.2)",
      padding: "9px 13px",
      borderRadius: 2
    }
  }, "SENIOR-ONLY \xB7 SINCE DAY ONE"))), /*#__PURE__*/React.createElement("div", {
    id: "teamPortraits",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14,
      minWidth: 0
    }
  }, [1, 2, 3, 4].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      aspectRatio: "1/1"
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "PORTRAIT",
    height: "100%",
    radius: 10
  })))))));
}

/* ====================== CYBERNETICS QUOTE ====================== */
/* One dataset. QUOTES[0] is rendered static up top; the rest fill three
   rotating columns (3 each) whose offset delays cross-fade out of sync.
   Motion + timing live in index.html (.am-quote / @keyframes amQuoteCycle),
   gated behind prefers-reduced-motion. */
const QUOTES = [{
  pre: "Cybernetics: the science of ",
  key: "control and communication",
  post: " in the animal and the machine.",
  cite: "Norbert Wiener · 1948"
}, {
  pre: "Every good regulator of a system must be a ",
  key: "model",
  post: " of that system.",
  cite: "Conant & Ashby · 1970"
}, {
  pre: "We are not stuff that abides, but ",
  key: "patterns that perpetuate",
  post: " themselves.",
  cite: "Norbert Wiener · 1950"
}, {
  pre: "Information is a ",
  key: "difference that makes a difference",
  post: ".",
  cite: "Gregory Bateson"
}, {
  pre: "The purpose of a system is ",
  key: "what it does",
  post: ".",
  cite: "Stafford Beer"
}, {
  pre: "Act always so as to increase the ",
  key: "number of choices",
  post: ".",
  cite: "Heinz von Foerster"
}, {
  pre: "Cybernetics treats not things but ",
  key: "ways of behaving",
  post: ".",
  cite: "W. Ross Ashby · 1956"
}, {
  pre: "Only ",
  key: "variety",
  post: " can absorb variety.",
  cite: "W. Ross Ashby"
}, {
  pre: "The best material model of a cat is ",
  key: "another, or the same",
  post: ", cat.",
  cite: "Rosenblueth & Wiener · 1945"
}, {
  pre: "The ",
  key: "map",
  post: " is not the territory.",
  cite: "Alfred Korzybski"
}];
// Layout: which quote anchors, and the offset delays (seconds) per column slot.
const CY_LAYOUT = {
  anchor: 0,
  columns: [{
    source: [1, 2, 3],
    delays: [-1.5, 5.5, 12.5]
  }, {
    source: [4, 5, 6],
    delays: [-3.3, 3.7, 10.7]
  }, {
    source: [7, 8, 9],
    delays: [-5.1, 1.9, 8.9]
  }]
};
function CyberneticsQuote() {
  const anchor = QUOTES[CY_LAYOUT.anchor];
  return /*#__PURE__*/React.createElement("section", {
    id: "cybernetics",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "96px 8vw"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-parallax": "0.2",
    style: {
      position: "absolute",
      inset: "-12% 0",
      background: "radial-gradient(ellipse 54% 64% at 50% 40%,color-mix(in srgb,var(--brand-violet) 12%,transparent),transparent 64%)",
      pointerEvents: "none"
    },
    className: "am-glow"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1000,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      letterSpacing: ".3em",
      color: "var(--text-eyebrow)",
      marginBottom: 8
    }
  }, "ON CONTROL & COMMUNICATION"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 2,
      background: "var(--grad-brand)",
      margin: "0 auto"
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: "40px 0 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(28px,4.4vw,46px)",
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)",
      margin: "0 auto 26px",
      maxWidth: 900
    }
  }, anchor.pre, /*#__PURE__*/React.createElement("span", {
    className: "am-grad-brand"
  }, anchor.key), anchor.post), /*#__PURE__*/React.createElement("cite", {
    style: {
      fontFamily: "var(--font-mono)",
      fontStyle: "normal",
      fontSize: 13,
      letterSpacing: ".18em",
      color: "var(--text-tertiary)"
    }
  }, "\u2014 ", anchor.cite.toUpperCase())), /*#__PURE__*/React.createElement("div", {
    id: "aphorismGrid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24,
      marginTop: 48,
      textAlign: "left"
    }
  }, CY_LAYOUT.columns.map((col, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    className: "am-rotator",
    style: {
      minWidth: 0
    }
  }, col.source.map((qi, ii) => {
    const q = QUOTES[qi];
    return /*#__PURE__*/React.createElement("blockquote", {
      key: ii,
      className: `am-quote${ii === 0 ? " am-quote-0" : ""}`,
      style: {
        margin: 0,
        animationDelay: `${col.delays[ii]}s`
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 17,
        lineHeight: 1.42,
        color: "var(--text-secondary)",
        margin: "0 0 12px"
      }
    }, q.pre, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--brand-blue)"
      }
    }, q.key), q.post), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11.5,
        letterSpacing: ".1em",
        color: "var(--text-mono-muted)"
      }
    }, "\u2014 ", q.cite));
  }))))));
}

/* ========================= TESTIMONIALS ========================= */
/* Honest placeholders — swap in real, attributable client quotes before launch.
   Do not ship invented testimonials (same rule as the team photos). */
const TESTIMONIALS = [{
  role: "Program lead",
  org: "Client, automotive"
}, {
  role: "Chief engineer",
  org: "Client, marine"
}, {
  role: "Principal investigator",
  org: "Research lab"
}];
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    id: "testimonials",
    style: {
      padding: "104px 8vw"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAX,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 20,
      marginBottom: 46,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 18
    }
  }, "05 \u2014 IN THEIR WORDS"), /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h2"
  }, "Trusted on the hard ones.")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".14em",
      color: "var(--text-mono-muted)",
      border: "1px dashed var(--line-strong)",
      padding: "8px 12px",
      borderRadius: 2
    }
  }, "PLACEHOLDER \xB7 ADD REAL QUOTES")), /*#__PURE__*/React.createElement("div", {
    id: "testimonialGrid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18
    }
  }, TESTIMONIALS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: "1px solid var(--line)",
      borderRadius: 6,
      background: "var(--surface-card)",
      padding: "28px 26px",
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 30,
      lineHeight: 1,
      color: "var(--brand-blue)",
      marginBottom: 14
    }
  }, "\""), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.6,
      color: "var(--text-quaternary)",
      fontStyle: "italic",
      margin: "0 0 22px",
      flex: 1
    }
  }, "Client testimonial goes here \u2014 a sentence or two on the outcome we delivered and what it was like to work together."), /*#__PURE__*/React.createElement("div", {
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
      background: "var(--surface-well)",
      border: "1px solid var(--line-strong)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      fontWeight: 500
    }
  }, "Name, ", t.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--text-mono-muted)"
    }
  }, t.org))))))));
}

/* =========================== CONTACT =========================== */
function Contact({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "120px 8vw",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-parallax": "0.15",
    style: {
      position: "absolute",
      inset: "-15% 0",
      background: "radial-gradient(ellipse 60% 62% at 50% 58%,color-mix(in srgb,var(--brand-blue) 13%,transparent),transparent 62%)",
      pointerEvents: "none"
    },
    className: "am-glow"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 760,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(Bolt, {
    size: 32,
    float: true,
    glowAmount: "30px"
  })), /*#__PURE__*/React.createElement(SectionHeading, {
    level: "contact",
    style: {
      marginBottom: 22
    }
  }, "Let's build something", /*#__PURE__*/React.createElement("br", null), "that moves."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--text-secondary)",
      margin: "0 0 38px"
    }
  }, "Tell us about the platform, the system, or the problem \u2014 sensor to actuator. We'll tell you straight whether we can help."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onContact
  }, "Start a project"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@astrapemotors.com",
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--text-primary)",
      fontSize: 15,
      padding: "16px 8px",
      textDecoration: "none"
    }
  }, "hello@astrapemotors.com"))));
}

/* ============================ FOOTER ============================ */
function Footer() {
  // Thin wrapper over the DS SiteFooter (homepage defaults).
  return /*#__PURE__*/React.createElement(SiteFooter, null);
}
Object.assign(window, {
  Nav,
  Hero,
  Capabilities,
  CyberneticsQuote,
  Process,
  Sectors,
  Team,
  Testimonials,
  Contact,
  Footer
});
window.__astrapeSectionsReady = true;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Bolt = __ds_scope.Bolt;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CapabilityCard = __ds_scope.CapabilityCard;

__ds_ns.LoopBlock = __ds_scope.LoopBlock;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.ProcessStepper = __ds_scope.ProcessStepper;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteNav = __ds_scope.SiteNav;

})();

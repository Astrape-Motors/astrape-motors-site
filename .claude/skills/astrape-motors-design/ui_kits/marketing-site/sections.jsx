/* Astrapē Motors — marketing site UI kit · section components.
   Recreated from the production homepage (design/handoff-homepage). Composes the
   design-system primitives from the compiled bundle. Each section is exported to
   window so the Babel-scoped index.html can mount them. */

const { Bolt, Wordmark, Button, Eyebrow, SectionHeading, Tag,
        CapabilityCard, StatRow, Marquee, ProcessStepper } =
  window.AstrapMotorsDesignSystem_547f1f;

const MAX = 1180;

/* ---- Honest image placeholder (the 6 slots awaiting real photography) ---- */
function PhotoSlot({ label, height = 280, radius = 0 }) {
  return (
    <div
      style={{
        height,
        borderRadius: radius,
        background:
          "repeating-linear-gradient(135deg, var(--surface-well) 0 14px, #0C1117 14px 28px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        color: "var(--text-mono-muted)",
      }}
    >
      <Bolt size={22} glow={false} color="var(--text-mono-muted)" />
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em" }}>
        {label}
      </span>
    </div>
  );
}

/* ============================ NAV ============================ */
function Nav({ onContact }) {
  const link = { color: "inherit", textDecoration: "none" };
  return (
    <nav
      style={{
        position: "sticky", top: 0, zIndex: 50, display: "flex",
        alignItems: "center", justifyContent: "space-between",
        padding: "20px 8vw", background: "rgba(10,9,7,0.72)",
        backdropFilter: "blur(14px)", borderBottom: "1px solid var(--line)",
      }}
    >
      <Wordmark size={15} />
      <div style={{ display: "flex", alignItems: "center", gap: 32, fontSize: 14, color: "var(--text-tertiary)" }}>
        <a href="#capabilities" style={link}>Capabilities</a>
        <a href="#sectors" style={link}>Sectors</a>
        <a href="#process" style={link}>R&amp;D</a>
        <a href="#team" style={link}>About</a>
        <Button size="sm" onClick={onContact}>Contact</Button>
      </div>
    </nav>
  );
}

/* ============================ HERO ============================ */
function Hero({ onContact }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "118px 8vw 96px" }}>
      <div style={{ position: "absolute", top: -220, right: -120, width: 720, height: 720, background: "var(--focal-glow-blue)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -260, left: -160, width: 620, height: 620, background: "var(--focal-glow-violet)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: MAX, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: ".3em", marginBottom: 30 }}>
          <span style={{ color: "var(--disc-electrification)" }}>ELECTRIFICATION</span>
          <span style={{ color: "var(--text-mono-muted)" }}> · </span>
          <span style={{ color: "var(--disc-controls)" }}>CONTROLS</span>
          <span style={{ color: "var(--text-mono-muted)" }}> · </span>
          <span style={{ color: "var(--disc-automation)" }}>AUTOMATION</span>
          <span style={{ color: "var(--text-mono-muted)" }}> · </span>
          <span style={{ color: "var(--disc-rnd)" }}>R&amp;D</span>
        </div>
        <SectionHeading level="h1" style={{ maxWidth: 980, marginBottom: 28 }}>
          Electrify everything<br />that <span className="am-grad-brand">moves.</span>
        </SectionHeading>
        <p style={{ fontSize: 20, lineHeight: 1.6, color: "var(--text-secondary)", maxWidth: 560, margin: "0 0 40px" }}>
          Powertrain, controls, and automation engineering for automotive and marine — from bench
          prototype to production vessel. We take the hard electrification problems no one else will.
        </p>
        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <Button onClick={onContact}>Start a project</Button>
          <Button variant="ghost" href="#capabilities">Our capabilities</Button>
        </div>
        <StatRow
          style={{ marginTop: 64 }}
          items={[
            { label: "DOMAINS", value: "EV · HEV · Marine" },
            { label: "METHOD", value: "Model-based design" },
            { label: "VALIDATION", value: "HIL / SIL rigs" },
          ]}
        />
      </div>
    </section>
  );
}

/* ======================== CAPABILITIES ======================== */
const CAPS = [
  { index: "/01", title: "Electrification", accent: "var(--disc-electrification)", tag: "EV · HEV",
    body: "EV & hybrid powertrain architecture, battery and power-electronics integration, energy management." },
  { index: "/02", title: "Controls", accent: "var(--disc-controls)", tag: "MBD",
    body: "Embedded control software, model-based design, calibration and supervisory strategy for real powertrains." },
  { index: "/03", title: "Automation & Test", accent: "var(--disc-automation)", tag: "HIL · SIL",
    body: "HIL / SIL rigs, test automation and validation pipelines that catch failures before the road or the water does." },
  { index: "/04", title: "R\u0026D \u0026 Consulting", accent: "var(--disc-rnd)", tag: "R&D",
    body: "Feasibility, prototyping and the messy early-stage problems — brought to a working, measurable result." },
];
function Capabilities() {
  return (
    <section id="capabilities" style={{ padding: "104px 8vw" }}>
      <div style={{ maxWidth: MAX, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 30, marginBottom: 54, flexWrap: "wrap" }}>
          <div>
            <Eyebrow style={{ marginBottom: 18 }}>01 — WHAT WE DO</Eyebrow>
            <SectionHeading level="h2" style={{ maxWidth: 560 }}>The full electrification stack, under one roof.</SectionHeading>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--text-secondary)", maxWidth: 340, margin: 0 }}>
            Most teams need three vendors to electrify a platform. We are the one that does the
            architecture, the controls, and the validation.
          </p>
        </div>
        <div id="capGrid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
          {CAPS.map((c) => <CapabilityCard key={c.index} {...c} />)}
        </div>
      </div>
    </section>
  );
}

/* =========================== PROCESS =========================== */
function Process() {
  const blueprint =
    "linear-gradient(color-mix(in srgb,var(--brand-blue) 6%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--brand-blue) 6%,transparent) 1px,transparent 1px)";
  return (
    <section id="process" style={{
      position: "relative", padding: "104px 8vw", backgroundColor: "var(--bg-process)",
      backgroundImage: blueprint, backgroundSize: "36px 36px",
      borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
      boxShadow: "var(--shadow-recessed)",
    }}>
      <div style={{ maxWidth: MAX, margin: "0 auto" }}>
        <Eyebrow style={{ marginBottom: 18 }}>02 — HOW WE WORK</Eyebrow>
        <SectionHeading level="h2" style={{ maxWidth: 680, marginBottom: 16 }}>From whiteboard to validated hardware.</SectionHeading>
        <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--text-secondary)", maxWidth: 540, margin: "0 0 56px" }}>
          A disciplined model-based pipeline. Every stage produces something you can measure — not a
          slide deck. Each phase is keyed to the discipline that leads it.
        </p>
        <ProcessStepper phases={[
          { num: "01", title: "Scope",    body: "Feasibility, requirements, architecture trade studies.", color: "var(--disc-rnd)" },
          { num: "02", title: "Model",    body: "Plant & controller models, SIL, control-strategy design.", color: "var(--disc-controls)" },
          { num: "03", title: "Build",    body: "Embedded code generation, calibration, bench bring-up.", color: "var(--disc-electrification)" },
          { num: "04", title: "Validate", body: "HIL / SIL test campaigns, failure-mode coverage, sign-off.", color: "var(--disc-automation)" },
          { num: "05", title: "Handoff",  body: "Production-ready release, documentation, support.", color: "var(--text-eyebrow)" },
        ]} />
      </div>
    </section>
  );
}

/* =========================== SECTORS =========================== */
function Sectors() {
  const specRow = { display: "flex", gap: 22, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-quaternary)" };
  return (
    <section id="sectors" style={{ padding: "104px 8vw" }}>
      <div style={{ maxWidth: MAX, margin: "0 auto" }}>
        <Eyebrow style={{ marginBottom: 18 }}>03 — WHERE WE WORK</Eyebrow>
        <SectionHeading level="h2" style={{ marginBottom: 46 }}>Land and sea.</SectionHeading>
        <div id="sectorGrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
          <div style={{ border: "1px solid var(--line-strong)", borderRadius: 6, overflow: "hidden", background: "var(--surface-card-sector)" }}>
            <PhotoSlot label="EV CHASSIS / POWERTRAIN" />
            <div style={{ padding: 30 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26, margin: "0 0 12px" }}>Automotive</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.62, color: "var(--text-tertiary)", margin: "0 0 20px" }}>
                Electric and hybrid drive systems, supervisory controls, and validation for passenger,
                commercial and off-highway platforms.
              </p>
              <div style={specRow}><span>EV DRIVE</span><span>HYBRID</span><span>SUPERVISORY CTRL</span></div>
            </div>
          </div>
          <div style={{ border: "1px solid var(--line-strong)", borderRadius: 6, overflow: "hidden", background: "var(--surface-card-sector)" }}>
            <PhotoSlot label="VESSEL / PROPULSION" />
            <div style={{ padding: 30 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26, margin: "0 0 12px" }}>Marine</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.62, color: "var(--text-tertiary)", margin: "0 0 20px" }}>
                Electric and hybrid propulsion, power management and automation for vessels where
                reliability isn't optional.
              </p>
              <div style={specRow}><span>E-PROPULSION</span><span>POWER MGMT</span><span>AUTOMATION</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ TEAM ============================ */
function Team({ onContact }) {
  return (
    <section id="team" style={{ padding: "36px 8vw", color: "var(--people-heading)" }}>
      <div id="teamPanel" style={{
        maxWidth: 1240, margin: "0 auto", background: "var(--people-panel)",
        border: "1px solid var(--line-faint)", borderRadius: 22, boxShadow: "var(--shadow-panel)",
        padding: "74px 60px",
      }}>
        <div id="teamGrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: ".24em", color: "var(--people-eyebrow)", marginBottom: 22 }}>
              04 — WHO YOU WORK WITH
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(30px,5vw,46px)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: "0 0 22px" }}>
              Senior engineers.<br />No handoffs.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--people-text)", margin: "0 0 18px", maxWidth: 440 }}>
              Astrapē is a small team of senior electrification and controls engineers. There's no
              account manager and no junior bench — you work directly with the people doing the work.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--people-text)", margin: "0 0 30px", maxWidth: 440 }}>
              We take a few projects at a time, on purpose. That's how the hard ones get finished.
            </p>
            <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <Button variant="cream" onClick={onContact}>Meet the team</Button>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".12em", color: "var(--people-chip)", border: "1px solid rgba(255,255,255,.2)", padding: "9px 13px", borderRadius: 2 }}>
                SENIOR-ONLY · SINCE DAY ONE
              </span>
            </div>
          </div>
          <div id="teamPortraits" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[1, 2, 3, 4].map((n) => (
              <div key={n} style={{ aspectRatio: "1/1" }}>
                <PhotoSlot label="PORTRAIT" height="100%" radius={10} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================== CONTACT =========================== */
function Contact({ onContact }) {
  return (
    <section id="contact" style={{ position: "relative", overflow: "hidden", padding: "120px 8vw", textAlign: "center" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 62% at 50% 58%,color-mix(in srgb,var(--brand-blue) 13%,transparent),transparent 62%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 30 }}>
          <Bolt size={32} float glowAmount="30px" />
        </div>
        <SectionHeading level="contact" style={{ marginBottom: 22 }}>Let's build something<br />that moves.</SectionHeading>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--text-secondary)", margin: "0 0 38px" }}>
          Tell us about the platform, the powertrain, or the problem. We'll tell you straight whether
          we can help.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          <Button size="lg" onClick={onContact}>Start a project</Button>
          <a href="mailto:hello@astrapemotors.com" style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)", fontSize: 15, padding: "16px 8px", textDecoration: "none" }}>
            hello@astrapemotors.com
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================ FOOTER ============================ */
function Footer() {
  const col = { display: "flex", flexDirection: "column", gap: 10 };
  const head = { fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-mono-muted)", letterSpacing: ".16em", marginBottom: 4 };
  const link = { color: "var(--text-tertiary)", textDecoration: "none", fontSize: 14 };
  return (
    <footer style={{ padding: "54px 8vw", borderTop: "1px solid var(--line)", background: "var(--bg-footer)" }}>
      <div style={{ maxWidth: MAX, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 40, flexWrap: "wrap" }}>
        <div>
          <Wordmark size={14} glow={false} style={{ marginBottom: 14 }} />
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-mono-muted)", lineHeight: 1.7, margin: 0 }}>
            Electrification · Controls · Automation · R&amp;D<br />Automotive &amp; Marine
          </p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <div style={col}>
            <span style={head}>EXPLORE</span>
            <a href="#capabilities" style={link}>Capabilities</a>
            <a href="#sectors" style={link}>Sectors</a>
            <a href="#process" style={link}>R&amp;D</a>
          </div>
          <div style={col}>
            <span style={head}>CONTACT</span>
            <a href="mailto:hello@astrapemotors.com" style={link}>hello@astrapemotors.com</a>
            <a href="#contact" style={link}>Start a project</a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: MAX, margin: "40px auto 0", fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--text-faint)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <span>© 2026 ASTRAPĒ MOTORS</span>
        <span>astrapemotors.com</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Capabilities, Process, Sectors, Team, Contact, Footer, Marquee });

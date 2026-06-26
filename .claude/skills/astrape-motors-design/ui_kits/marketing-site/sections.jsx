/* Astrapē Motors — marketing site UI kit · section components.
   Recreated from the production homepage. Composes the
   design-system primitives from the compiled bundle. Each section is exported to
   window so the Babel-scoped index.html can mount them. */

const { Bolt, Wordmark, Button, Eyebrow, SectionHeading, Tag,
        CapabilityCard, StatRow, Marquee, ProcessStepper, SiteNav, SiteFooter } =
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
  // Thin wrapper over the DS SiteNav — keeps the interactive onContact handler.
  return <SiteNav onContact={onContact} />;
}

/* ============================ HERO ============================ */
function Hero({ onContact }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", display: "flex", alignItems: "center", minHeight: "calc(100svh - 124px)", padding: "48px 8vw" }}>
      <div data-parallax="0.18" style={{ position: "absolute", top: -220, right: -120, width: 720, height: 720, background: "var(--focal-glow-blue)", pointerEvents: "none" }} className="am-glow" />
      <div data-parallax="0.28" style={{ position: "absolute", bottom: -260, left: -160, width: 620, height: 620, background: "var(--focal-glow-violet)", pointerEvents: "none" }} className="am-glow" />
      <div style={{ position: "relative", maxWidth: MAX, margin: "0 auto", width: "100%" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: ".3em", marginBottom: 30, color: "var(--text-secondary)" }}>
          SENSE <span style={{ color: "var(--brand-blue)" }}>→</span> COMPUTE <span style={{ color: "var(--brand-blue)" }}>→</span> ACTUATE <span style={{ color: "var(--text-mono-muted)" }}>· SYSTEMS ENGINEERING</span>
        </div>
        <SectionHeading level="h1" style={{ maxWidth: 980, marginBottom: 28 }}>
          Electrify everything<br />that <span className="am-grad-brand">moves.</span>
        </SectionHeading>
        <p style={{ fontSize: 20, lineHeight: 1.6, color: "var(--text-secondary)", maxWidth: 600, margin: "0 0 40px" }}>
          A systems engineering firm specializing in making things move — with electric motors and software.
          We close the loop from sensor to actuator, and take the hard problems no one else will.
        </p>
        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <Button onClick={onContact}>Start a project</Button>
          <Button variant="ghost" href="#capabilities">Our capabilities</Button>
        </div>
        <div id="heroStats" style={{ display: "flex", gap: 40, flexWrap: "wrap", marginTop: 60 }}>
          {[
            { label: "PRACTICE", value: "Systems engineering", sub: "Requirements · architecture · V&V" },
            { label: "METHOD", value: "Model-based design", sub: "SIL · HIL · validation rigs" },
            { label: "DOMAINS", value: "Land · sea · lab", sub: "EV · HEV · marine · research" },
          ].map((s, i) => (
            <React.Fragment key={s.label}>
              {i > 0 && <div style={{ width: 1, alignSelf: "stretch", background: "var(--line-strong)" }} />}
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-mono-muted)", letterSpacing: ".14em", marginBottom: 7 }}>{s.label}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, color: "var(--text-primary)", marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--text-quaternary)", letterSpacing: ".04em" }}>{s.sub}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
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
const SERVICES = [
  { title: "Software Development", body: "Embedded, application and tooling software — from real-time targets to the dashboards your team actually uses.", specs: ["EMBEDDED", "APPS", "TOOLING"] },
  { title: "Data & Analysis", body: "Scientific and statistical computing — signal processing, system identification and the analysis behind a test result, a lab, or a paper. The engineering kind of data, not web analytics.", specs: ["SIGNAL PROCESSING", "STATISTICAL", "SYSTEM ID"] },
];
const LOOP = [
  { title: "Sense", body: "Sensors, instrumentation and telemetry — the true state of the machine." },
  { title: "Compute", body: "Control systems and software — deciding what should happen next." },
  { title: "Actuate", body: "Electric motors and power electronics — making it move." },
];
function Capabilities() {
  return (
    <section id="capabilities" style={{ padding: "104px 8vw" }}>
      <div style={{ maxWidth: MAX, margin: "0 auto" }}>
        <div style={{ maxWidth: 760, marginBottom: 40 }}>
          <Eyebrow style={{ marginBottom: 18 }}>01 — WHAT WE DO</Eyebrow>
          <SectionHeading level="h2" style={{ marginBottom: 22 }}>We're a systems engineering firm.</SectionHeading>
          <p style={{ fontSize: 18, lineHeight: 1.62, color: "var(--text-secondary)", margin: 0 }}>
            Our specialty is making things move — with electric motors and software. At the core it's
            cybernetics: <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>sense, compute,
            actuate</strong> — and close the loop. Systems engineering is the practice that holds it
            together — requirements, architecture, integration and V&amp;V — so a platform behaves like one
            machine, not four subsystems that don't talk.
          </p>
        </div>

        {/* The cybernetic loop */}
        <div style={{ border: "1px solid var(--line-strong)", borderRadius: 6, background: "var(--surface-card)", overflow: "hidden", marginBottom: 46 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, flexWrap: "wrap", padding: "16px 22px", borderBottom: "1px solid var(--line)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: ".22em", color: "var(--text-secondary)" }}>
              SENSE <span style={{ color: "var(--brand-blue)" }}>→</span> COMPUTE <span style={{ color: "var(--brand-blue)" }}>→</span> ACTUATE
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: ".16em", color: "var(--text-mono-muted)" }}>
              <span style={{ color: "var(--brand-blue)" }}>↺</span> CLOSED LOOP · MEASURED EVERY CYCLE
            </div>
          </div>
          <div id="loopGrid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
            {LOOP.map((s, i) => (
              <div key={s.title} style={{ padding: "26px 24px", borderRight: i < 2 ? "1px solid var(--line)" : "none", minWidth: 0 }}>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 21, margin: "0 0 10px", color: "var(--text-primary)" }}>{s.title}</h4>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--text-tertiary)", margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".24em", color: "var(--text-mono-muted)", marginBottom: 22 }}>
          SPECIALTIES
        </div>
        <div id="capGrid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
          {CAPS.map((c) => <CapabilityCard key={c.index} {...c} />)}
        </div>

        <div style={{ marginTop: 46 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".24em", color: "var(--text-mono-muted)", marginBottom: 22 }}>
            SOFTWARE &amp; DATA
          </div>
          <div id="servicesGrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {SERVICES.map((s) => (
              <div key={s.title} style={{ border: "1px solid var(--line)", borderRadius: 6, background: "var(--surface-card)", padding: "26px 24px", display: "flex", flexDirection: "column", minWidth: 0 }}>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, margin: "0 0 10px", color: "var(--text-primary)" }}>{s.title}</h4>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--text-tertiary)", margin: "0 0 18px", flex: 1 }}>{s.body}</p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--text-quaternary)" }}>
                  {s.specs.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
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
const MORE_SECTORS = [
  { title: "Industrial", body: "Factory automation, electric drives and motion control for production lines and heavy machinery.", specs: ["DRIVES", "MOTION", "PLC"] },
  { title: "Agricultural", body: "Electrified and autonomous off-highway equipment — tractors, harvesters and the systems that run them.", specs: ["OFF-HIGHWAY", "AUTONOMY"] },
  { title: "Energy & Power", body: "Stationary storage, microgrids and charging infrastructure — power electronics built for the field.", specs: ["STORAGE", "MICROGRID", "CHARGING"] },
  { title: "Government & Defense", body: "Ruggedized electric and hybrid powertrains for ground and marine platforms where failure isn't an option.", specs: ["GROUND", "MARINE", "RUGGED"] },
];
function Sectors() {
  const specRow = { display: "flex", gap: 22, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-quaternary)" };
  const moreSpecRow = { display: "flex", gap: 14, flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-quaternary)" };
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

        <div style={{ marginTop: 44 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".24em", color: "var(--text-mono-muted)", marginBottom: 22 }}>
            ALSO SERVING
          </div>
          <div id="sectorGridMore" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
            {MORE_SECTORS.map((s) => (
              <div key={s.title} style={{ border: "1px solid var(--line)", borderRadius: 6, background: "var(--surface-card-sector)", padding: "24px 22px", display: "flex", flexDirection: "column", minWidth: 0 }}>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, margin: "0 0 10px", color: "var(--text-primary)" }}>{s.title}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text-tertiary)", margin: "0 0 18px", flex: 1 }}>{s.body}</p>
                <div style={moreSpecRow}>{s.specs.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            ))}
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
        <div id="teamGrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", minWidth: 0 }}>
          <div style={{ minWidth: 0 }}>
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
          <div id="teamPortraits" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, minWidth: 0 }}>
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

/* ====================== CYBERNETICS QUOTE ====================== */
/* One dataset. QUOTES[0] is rendered static up top; the rest fill three
   rotating columns (3 each) whose offset delays cross-fade out of sync.
   Motion + timing live in index.html (.am-quote / @keyframes amQuoteCycle),
   gated behind prefers-reduced-motion. */
const QUOTES = [
  { pre: "Cybernetics: the science of ", key: "control and communication", post: " in the animal and the machine.", cite: "Norbert Wiener · 1948" },
  { pre: "Every good regulator of a system must be a ", key: "model", post: " of that system.", cite: "Conant & Ashby · 1970" },
  { pre: "We are not stuff that abides, but ", key: "patterns that perpetuate", post: " themselves.", cite: "Norbert Wiener · 1950" },
  { pre: "Information is a ", key: "difference that makes a difference", post: ".", cite: "Gregory Bateson" },
  { pre: "The purpose of a system is ", key: "what it does", post: ".", cite: "Stafford Beer" },
  { pre: "Act always so as to increase the ", key: "number of choices", post: ".", cite: "Heinz von Foerster" },
  { pre: "Cybernetics treats not things but ", key: "ways of behaving", post: ".", cite: "W. Ross Ashby · 1956" },
  { pre: "Only ", key: "variety", post: " can absorb variety.", cite: "W. Ross Ashby" },
  { pre: "The best material model of a cat is ", key: "another, or the same", post: ", cat.", cite: "Rosenblueth & Wiener · 1945" },
  { pre: "The ", key: "map", post: " is not the territory.", cite: "Alfred Korzybski" },
];
// Layout: which quote anchors, and the offset delays (seconds) per column slot.
const CY_LAYOUT = {
  anchor: 0,
  columns: [
    { source: [1, 2, 3], delays: [-1.5, 5.5, 12.5] },
    { source: [4, 5, 6], delays: [-3.3, 3.7, 10.7] },
    { source: [7, 8, 9], delays: [-5.1, 1.9, 8.9] },
  ],
};
function CyberneticsQuote() {
  const anchor = QUOTES[CY_LAYOUT.anchor];
  return (
    <section id="cybernetics" style={{ position: "relative", overflow: "hidden", padding: "96px 8vw" }}>
      <div data-parallax="0.2" style={{ position: "absolute", inset: "-12% 0", background: "radial-gradient(ellipse 54% 64% at 50% 40%,color-mix(in srgb,var(--brand-violet) 12%,transparent),transparent 64%)", pointerEvents: "none" }} className="am-glow" />
      <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: ".3em", color: "var(--text-eyebrow)", marginBottom: 8 }}>
          ON CONTROL &amp; COMMUNICATION
        </div>
        <div style={{ width: 40, height: 2, background: "var(--grad-brand)", margin: "0 auto" }} />
        {/* Anchor — static, but the same data shape as the rotating ones */}
        <blockquote style={{ margin: "40px 0 0" }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(28px,4.4vw,46px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: "0 auto 26px", maxWidth: 900 }}>
            {anchor.pre}<span className="am-grad-brand">{anchor.key}</span>{anchor.post}
          </p>
          <cite style={{ fontFamily: "var(--font-mono)", fontStyle: "normal", fontSize: 13, letterSpacing: ".18em", color: "var(--text-tertiary)" }}>
            — {anchor.cite.toUpperCase()}
          </cite>
        </blockquote>
        {/* Three offset rotators */}
        <div id="aphorismGrid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 48, textAlign: "left" }}>
          {CY_LAYOUT.columns.map((col, ci) => (
            <div key={ci} className="am-rotator" style={{ minWidth: 0 }}>
              {col.source.map((qi, ii) => {
                const q = QUOTES[qi];
                return (
                  <blockquote key={ii} className={`am-quote${ii === 0 ? " am-quote-0" : ""}`} style={{ margin: 0, animationDelay: `${col.delays[ii]}s` }}>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 17, lineHeight: 1.42, color: "var(--text-secondary)", margin: "0 0 12px" }}>
                      {q.pre}<span style={{ color: "var(--brand-blue)" }}>{q.key}</span>{q.post}
                    </p>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: ".1em", color: "var(--text-mono-muted)" }}>— {q.cite}</div>
                  </blockquote>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= TESTIMONIALS ========================= */
/* Honest placeholders — swap in real, attributable client quotes before launch.
   Do not ship invented testimonials (same rule as the team photos). */
const TESTIMONIALS = [
  { role: "Program lead", org: "Client, automotive" },
  { role: "Chief engineer", org: "Client, marine" },
  { role: "Principal investigator", org: "Research lab" },
];
function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "104px 8vw" }}>
      <div style={{ maxWidth: MAX, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 46, flexWrap: "wrap" }}>
          <div>
            <Eyebrow style={{ marginBottom: 18 }}>05 — IN THEIR WORDS</Eyebrow>
            <SectionHeading level="h2">Trusted on the hard ones.</SectionHeading>
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", color: "var(--text-mono-muted)", border: "1px dashed var(--line-strong)", padding: "8px 12px", borderRadius: 2 }}>
            PLACEHOLDER · ADD REAL QUOTES
          </span>
        </div>
        <div id="testimonialGrid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ border: "1px solid var(--line)", borderRadius: 6, background: "var(--surface-card)", padding: "28px 26px", display: "flex", flexDirection: "column", minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 30, lineHeight: 1, color: "var(--brand-blue)", marginBottom: 14 }}>"</div>
              <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--text-quaternary)", fontStyle: "italic", margin: "0 0 22px", flex: 1 }}>
                Client testimonial goes here — a sentence or two on the outcome we delivered and what it was
                like to work together.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--surface-well)", border: "1px solid var(--line-strong)", flex: "none" }} />
                <div>
                  <div style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 500 }}>Name, {t.role}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--text-mono-muted)" }}>{t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================== CONTACT =========================== */
function Contact({ onContact }) {
  return (
    <section id="contact" style={{ position: "relative", overflow: "hidden", padding: "120px 8vw", textAlign: "center" }}>
      <div data-parallax="0.15" style={{ position: "absolute", inset: "-15% 0", background: "radial-gradient(ellipse 60% 62% at 50% 58%,color-mix(in srgb,var(--brand-blue) 13%,transparent),transparent 62%)", pointerEvents: "none" }} className="am-glow" />
      <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 30 }}>
          <Bolt size={32} float glowAmount="30px" />
        </div>
        <SectionHeading level="contact" style={{ marginBottom: 22 }}>Let's build something<br />that moves.</SectionHeading>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--text-secondary)", margin: "0 0 38px" }}>
          Tell us about the platform, the system, or the problem — sensor to actuator. We'll tell you
          straight whether we can help.
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
  // Thin wrapper over the DS SiteFooter (homepage defaults).
  return <SiteFooter />;
}

Object.assign(window, { Nav, Hero, Capabilities, CyberneticsQuote, Process, Sectors, Team, Testimonials, Contact, Footer });
window.__astrapeSectionsReady = true;

/* Astrapē Motors — marketing site · interactive shell.
   Wires the homepage sections together and adds the one piece of real
   interaction: a "Start a project" contact dialog with a fake submit + success
   state. Demonstrates the brand's CTA flow without a backend. */

const { Bolt, Button, Eyebrow, SectionHeading } = window.AstrapMotorsDesignSystem_547f1f;
const { Nav, Hero, Capabilities, Process, Sectors, Team, Contact, Footer, Marquee } = window;

const MARQUEE_TERMS = [
  "EV POWERTRAINS", "HYBRID SYSTEMS", "MARINE PROPULSION", "EMBEDDED CONTROLS",
  "MODEL-BASED DESIGN", "HIL · SIL VALIDATION", "AUTOMATION",
];

function Field({ label, children }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".16em", color: "var(--text-eyebrow)" }}>
        {label}
      </span>
      {children}
    </label>
  );
}

const inputStyle = {
  background: "var(--surface-card)",
  border: "1px solid var(--line-strong)",
  borderRadius: 6,
  padding: "12px 14px",
  color: "var(--text-primary)",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  outline: "none",
};

function ContactDialog({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { if (!open) setTimeout(() => setSent(false), 200); }, [open]);
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100, display: "flex",
        alignItems: "center", justifyContent: "center", padding: 24,
        background: "rgba(5,4,3,0.72)", backdropFilter: "blur(8px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(520px, 100%)", background: "#0C0B09",
          border: "1px solid var(--line-strong)", borderRadius: 16,
          boxShadow: "0 40px 100px -30px rgba(0,0,0,.8)", padding: "38px 38px 34px",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{ position: "absolute", top: 18, right: 18, background: "none", border: "none", color: "var(--text-tertiary)", fontSize: 22, cursor: "pointer", lineHeight: 1 }}
        >×</button>

        {sent ? (
          <div style={{ textAlign: "center", padding: "26px 0 12px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
              <Bolt size={34} glowAmount="30px" />
            </div>
            <SectionHeading level="h2" style={{ fontSize: 30, marginBottom: 12 }}>Message sent.</SectionHeading>
            <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.6, margin: "0 0 28px" }}>
              Thanks — we read every note ourselves. Expect a straight answer within two business days.
            </p>
            <Button onClick={onClose}>Done</Button>
          </div>
        ) : (
          <React.Fragment>
            <Eyebrow style={{ marginBottom: 14 }}>START A PROJECT</Eyebrow>
            <SectionHeading level="h2" style={{ fontSize: 28, marginBottom: 8 }}>Tell us about the platform.</SectionHeading>
            <p style={{ color: "var(--text-tertiary)", fontSize: 14.5, lineHeight: 1.6, margin: "0 0 26px" }}>
              The powertrain, the problem, the timeline — whatever you've got.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <Field label="NAME"><input required style={inputStyle} placeholder="Your name" /></Field>
              <Field label="EMAIL"><input required type="email" style={inputStyle} placeholder="you@company.com" /></Field>
              <Field label="WHAT ARE YOU BUILDING?">
                <textarea rows={3} style={{ ...inputStyle, resize: "vertical" }} placeholder="EV drivetrain, marine hybrid, controls retrofit…" />
              </Field>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 4 }}>
                <Button>Send it</Button>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-mono-muted)" }}>
                  or hello@astrapemotors.com
                </span>
              </div>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);
  const contact = () => setOpen(true);
  return (
    <div style={{ width: "100%", overflowX: "hidden", background: "var(--bg)", color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
      <Nav onContact={contact} />
      <Hero onContact={contact} />
      <Marquee items={MARQUEE_TERMS} />
      <Capabilities />
      <Process />
      <Sectors />
      <Team onContact={contact} />
      <Contact onContact={contact} />
      <Footer />
      <ContactDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

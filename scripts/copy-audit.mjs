#!/usr/bin/env node
/**
 * copy-audit.mjs — legal/holding-out copy guard for the Astrapē Motors site + design system.
 *
 * WHY: Under Ohio's engineering-licensure law (ORC 4733.16 / Ch. 4733), a firm that holds
 * itself out as providing "professional engineering services," uses a regulated title
 * ("professional engineer," "P.E."), or claims to seal/stamp work, triggers Certificate-of-
 * Authorization and PE-licensure requirements. Astrapē currently has neither. The brand copy
 * is deliberately written to stay in the manufactured-products / non-safety lane. Because copy
 * is duplicated across templates, components, generated bundles, and deployed HTML, a single
 * stray phrase (or a future regeneration) can quietly reintroduce risk. This script fails the
 * build if any FORBIDDEN phrase appears and warns on REVIEW phrases that deserve a human eye.
 *
 * USAGE:  node scripts/copy-audit.mjs            (scans the whole repo)
 *         node scripts/copy-audit.mjs <dir>      (scan a specific subtree)
 * EXIT:   0 = clean (warnings allowed) · 1 = at least one FORBIDDEN hit
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(__dirname, ".."); // repo root (scripts/ -> ..)

const SCAN_EXTS = new Set([".html", ".htm", ".jsx", ".js", ".mjs", ".json"]);
const IGNORE_DIRS = new Set(["node_modules", ".git", "dist", ".cache", "uploads", "scraps"]);
// Files that legitimately CONTAIN the forbidden phrases as data/examples — skip them.
const IGNORE_SUBSTR = ["copy-audit", "copy-guardrails"];

// HARD FAIL — phrases that assert PE licensure/title or regulated-service offering.
const FORBIDDEN = [
  ['Title claim: "professional engineer/engineering"', /\bprofessional\s+engineer(ing)?\b/i],
  ['Credential "P.E."', /\bP\.E\.\b/],
  ['Licensed/registered/chartered engineer', /\b(licen[sc]ed|registered|chartered)\s+(professional\s+)?engineer/i],
  ['PE seal/stamp claim', /\bP\.?E\.?\s*(seal|stamp)/i],
  ['Engineering seal/stamp claim', /\bengineer(ing)?\s+(seal|stamp)/i],
  ['"stamp and seal"', /\bstamp(ed)?\s+and\s+seal/i],
  ['Sealed drawings/plans/documents', /\bseal(ed)?\s+(drawings?|plans?|documents?)/i],
];

// WARN — borderline holding-out language; allowed but a human should confirm context.
const REVIEW = [
  ['Entity badged as an engineering firm/company/studio/practice', /\bengineering\s+(firm|company|studio|practice|consultanc|consulting)/i],
  ['"engineering services" (holding-out phrase)', /\bengineering\s+services\b/i],
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      walk(full, out);
    } else if (SCAN_EXTS.has(path.extname(entry.name))) {
      if (IGNORE_SUBSTR.some((s) => full.includes(s))) continue;
      out.push(full);
    }
  }
  return out;
}

function scan(files, rules) {
  const hits = [];
  for (const file of files) {
    let text;
    try { text = fs.readFileSync(file, "utf8"); } catch { continue; }
    const lines = text.split(/\r?\n/);
    for (const [label, re] of rules) {
      for (let i = 0; i < lines.length; i++) {
        const m = lines[i].match(re);
        if (m) hits.push({ file: path.relative(ROOT, file), line: i + 1, label, match: m[0].trim() });
      }
    }
  }
  return hits;
}

const files = walk(ROOT);
// FORBIDDEN scans everything that ships (sources + generated + deployed).
const forbidden = scan(files, FORBIDDEN);
// REVIEW scans only the editable SOURCES of truth, so it points at the file to fix
// (the .dc.html template / component / ui_kit) instead of every mirrored/compiled copy.
const sourceFiles = files.filter((f) => /\/(templates|components|ui_kits)\//.test(f));
const review = scan(sourceFiles, REVIEW);

const C = { red: "\x1b[31m", yellow: "\x1b[33m", green: "\x1b[32m", dim: "\x1b[2m", reset: "\x1b[0m", bold: "\x1b[1m" };
const fmt = (h) => `  ${h.file}:${h.line}  ${C.dim}[${h.label}]${C.reset}  "${h.match}"`;

console.log(`\n${C.bold}Copy audit${C.reset} — scanned ${files.length} files under ${path.relative(process.cwd(), ROOT) || "."}\n`);

if (review.length) {
  console.log(`${C.yellow}⚠  REVIEW (${review.length}) — in source files; allowed if tethered to product/discipline, not a services offer:${C.reset}`);
  review.forEach((h) => console.log(C.yellow + fmt(h) + C.reset));
  console.log("");
}

if (forbidden.length) {
  console.log(`${C.red}${C.bold}✗ FORBIDDEN (${forbidden.length}) — these create PE-licensure / holding-out exposure (ORC 4733.16). Remove before shipping:${C.reset}`);
  forbidden.forEach((h) => console.log(C.red + fmt(h) + C.reset));
  console.log(`\n${C.red}Copy audit FAILED.${C.reset}\n`);
  process.exit(1);
}

console.log(`${C.green}✓ No forbidden phrases.${C.reset} ${review.length ? `(${review.length} review item${review.length > 1 ? "s" : ""} above.)` : ""}\n`);
process.exit(0);

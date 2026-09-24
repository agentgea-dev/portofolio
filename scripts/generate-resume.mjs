/**
 * Generate public/resume.pdf from the single source of truth (src/data/content.ts).
 * Run with:  npm run resume
 * Re-run any time you edit content.ts so the downloadable CV stays in sync.
 */
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";
import { readFileSync, writeFileSync, mkdirSync, unlinkSync, createWriteStream } from "node:fs";
import PDFDocument from "pdfkit";
import ts from "typescript";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// ── Load data from content.ts by transpiling it to ESM on the fly ──────────────
const tsSource = readFileSync(resolve(root, "src/data/content.ts"), "utf8");
const jsSource = ts.transpileModule(tsSource, {
  compilerOptions: { module: "ESNext", target: "ES2020" },
}).outputText;
const tmp = resolve(__dirname, ".content.mjs");
writeFileSync(tmp, jsSource);
const C = await import(pathToFileURL(tmp).href);
unlinkSync(tmp);

const { profile, about, techStack, tools, languages, experience, education, services, interests, projects } = C;

// ── Palette ──────────────────────────────────────────────────────────────────
const INK = "#0f172a"; // header band / strong text
const MUTED = "#475569"; // body text
const FAINT = "#94a3b8"; // meta
const ACCENT = "#2563eb"; // section accents (on white)
const ACCENT_LT = "#60a5fa"; // accent on dark band
const TRACK = "#e2e8f0"; // bar track / rules
const PAPER = "#f8fafc"; // stat chips bg
const ONDARK = "#cbd5e1"; // contact text on dark

// Fonts: pdfkit built-in (no font files needed)
const REG = "Helvetica";
const BOLD = "Helvetica-Bold";
const OBL = "Helvetica-Oblique";

const M = 48; // page margin
const doc = new PDFDocument({
  size: "A4",
  bufferPages: true,
  margins: { top: M, bottom: M, left: M, right: M },
});

mkdirSync(resolve(root, "public"), { recursive: true });
const outPath = resolve(root, "public/resume.pdf");
const stream = createWriteStream(outPath);
doc.pipe(stream);

const PW = doc.page.width;
const PH = doc.page.height;
const L = M;
const R = PW - M;
const CW = R - L; // content width

// ── Helpers ────────────────────────────────────────────────────────────────
function ensure(space) {
  if (doc.y + space > PH - M - 24) doc.addPage();
}

function heading(label) {
  ensure(46);
  doc.moveDown(0.7);
  const y = doc.y;
  // accent tick + label
  doc.rect(L, y + 1, 14, 10).fillColor(ACCENT).fill();
  doc.font(BOLD).fontSize(11).fillColor(INK).text(label.toUpperCase(), L + 22, y, { characterSpacing: 1.6 });
  doc.moveTo(L, doc.y + 4).lineTo(R, doc.y + 4).lineWidth(0.75).strokeColor(TRACK).stroke();
  doc.moveDown(0.7);
}

function bar(name, level, x, width) {
  const rowY = doc.y;
  doc.font(REG).fontSize(9.5).fillColor(INK).text(name, x, rowY, { width: width - 34 });
  doc.font(REG).fontSize(8.5).fillColor(FAINT).text(level + "%", x + width - 32, rowY, { width: 32, align: "right" });
  const barY = doc.y + 2;
  doc.roundedRect(x, barY, width, 4, 2).fillColor(TRACK).fill();
  doc.roundedRect(x, barY, (width * level) / 100, 4, 2).fillColor(ACCENT).fill();
  doc.y = barY + 4;
  doc.moveDown(0.62);
}

// ── Header band (dark, full-bleed) ───────────────────────────────────────────
const BAND_H = 150;
doc.rect(0, 0, PW, BAND_H).fillColor(INK).fill();
// thin accent rule under the band
doc.rect(0, BAND_H, PW, 3).fillColor(ACCENT).fill();

doc.font(BOLD).fontSize(30).fillColor("#ffffff").text(`${profile.firstName} ${profile.lastName}`, L, 34, { characterSpacing: 0.5 });
doc.font(REG).fontSize(13).fillColor(ACCENT_LT).text(profile.role, L, doc.y + 2, { characterSpacing: 1 });

const contactBits = [profile.email, profile.phone, profile.city].filter(Boolean).join("    •    ");
doc.font(REG).fontSize(9.5).fillColor(ONDARK).text(contactBits, L, 104);
if (profile.availability)
  doc.font(OBL).fontSize(9).fillColor(FAINT).text(profile.availability, L, doc.y + 1);

// move cursor below band
doc.y = BAND_H + 16;

// ── Stats strip ──────────────────────────────────────────────────────────────
if (about.stats?.length) {
  const gap = 12;
  const n = about.stats.length;
  const cw = (CW - gap * (n - 1)) / n;
  const sy = doc.y;
  const h = 50;
  about.stats.forEach((s, i) => {
    const x = L + i * (cw + gap);
    doc.roundedRect(x, sy, cw, h, 8).fillColor(PAPER).fill();
    doc.roundedRect(x, sy, cw, h, 8).lineWidth(0.75).strokeColor(TRACK).stroke();
    doc.font(BOLD).fontSize(17).fillColor(ACCENT).text(s.value, x, sy + 9, { width: cw, align: "center" });
    doc.font(REG).fontSize(8.5).fillColor(MUTED).text(s.label.toUpperCase(), x, sy + 31, { width: cw, align: "center", characterSpacing: 0.5 });
  });
  doc.y = sy + h;
}

// ── Profile ──────────────────────────────────────────────────────────────────
heading("Profile");
about.paragraphs.forEach((p) => {
  doc.font(REG).fontSize(9.5).fillColor(MUTED).text(p, L, doc.y, { width: CW, align: "justify", lineGap: 2.5 });
  doc.moveDown(0.45);
});

// ── Experience ───────────────────────────────────────────────────────────────
heading("Experience");
experience.forEach((e) => {
  ensure(58);
  const top = doc.y;
  doc.font(REG).fontSize(9).fillColor(FAINT).text(e.period, L, top, { width: CW, align: "right" });
  doc.font(BOLD).fontSize(10.5).fillColor(INK).text(e.role, L, top, { width: CW - 95 });
  doc.font(OBL).fontSize(9.5).fillColor(ACCENT).text(e.company, L, doc.y, { width: CW });
  doc.font(REG).fontSize(9.5).fillColor(MUTED).text(e.summary, L, doc.y + 1, { width: CW, lineGap: 1.5 });
  doc.moveDown(0.7);
});

// ── Skills (two columns) + Tools ─────────────────────────────────────────────
heading("Skills");
ensure(280); // keep both bar columns starting on the same page — avoids a mid-list split
const colGap = 30;
const colW = (CW - colGap) / 2;
const colLX = L;
const colRX = L + colW + colGap;
const startY = doc.y;

doc.font(BOLD).fontSize(9).fillColor(INK).text("Core Skills", colLX, startY);
doc.font(BOLD).fontSize(9).fillColor(INK).text("Languages", colRX, startY);
const barsY = doc.y + 6;

doc.y = barsY;
techStack.forEach((s) => bar(s.name, s.level, colLX, colW));
const leftEnd = doc.y;

doc.y = barsY;
languages.forEach((l) => bar(l.name, l.level, colRX, colW));
const rightEnd = doc.y;

doc.y = Math.max(leftEnd, rightEnd);
doc.moveDown(0.4);

doc.font(BOLD).fontSize(9).fillColor(INK).text("Tools & Platforms", L, doc.y);
doc.moveDown(0.2);
doc.font(REG).fontSize(9.5).fillColor(MUTED).text(tools.join("    ·    "), L, doc.y, { width: CW, lineGap: 3 });

// ── Selected Projects ────────────────────────────────────────────────────────
heading("Selected Projects");
projects.slice(0, 6).forEach((p) => {
  ensure(46);
  const top = doc.y;
  doc.font(REG).fontSize(8.5).fillColor(FAINT).text(p.category, L, top, { width: CW, align: "right" });
  doc.font(BOLD).fontSize(10).fillColor(INK).text(p.title, L, top, { width: CW - 120 });
  doc.font(REG).fontSize(9).fillColor(MUTED).text(p.description, L, doc.y, { width: CW, lineGap: 1.5 });
  doc.font(OBL).fontSize(8.5).fillColor(ACCENT).text(p.tags.join("   ·   "), L, doc.y + 1, { width: CW });
  doc.moveDown(0.6);
});

// ── Education ────────────────────────────────────────────────────────────────
heading("Education & Training");
education.forEach((ed) => {
  ensure(34);
  const top = doc.y;
  doc.font(REG).fontSize(9).fillColor(FAINT).text(ed.period, L, top, { width: CW, align: "right" });
  doc.font(BOLD).fontSize(10).fillColor(INK).text(ed.title, L, top, { width: CW - 70 });
  doc.font(REG).fontSize(9.5).fillColor(MUTED).text(ed.org, L, doc.y);
  doc.moveDown(0.55);
});

// ── What I Do + Interests ────────────────────────────────────────────────────
heading("What I Do");
ensure(160); // keep both bullet columns starting on the same page — avoids a mid-list split
const sStartY = doc.y;
const sColW = (CW - colGap) / 2;
// services as a two-column bullet list
const half = Math.ceil(services.length / 2);
const colA = services.slice(0, half);
const colB = services.slice(half);
function bullets(list, x) {
  doc.y = sStartY;
  list.forEach((s) => {
    ensure(16);
    const y = doc.y;
    doc.circle(x + 2, y + 4.5, 1.6).fillColor(ACCENT).fill();
    doc.font(REG).fontSize(9.5).fillColor(MUTED).text(s, x + 10, y, { width: sColW - 10 });
    doc.moveDown(0.35);
  });
  return doc.y;
}
const aEnd = bullets(colA, colLX);
const bEnd = bullets(colB, colRX);
doc.y = Math.max(aEnd, bEnd);

if (interests?.length) {
  doc.moveDown(0.4);
  doc.font(BOLD).fontSize(9).fillColor(INK).text("Interests", L, doc.y);
  doc.moveDown(0.2);
  doc.font(REG).fontSize(9.5).fillColor(MUTED).text(interests.map((i) => i.label).join("    ·    "), L, doc.y, { width: CW });
}

// ── Footer (name + page numbers on every page) ───────────────────────────────
const range = doc.bufferedPageRange();
for (let i = 0; i < range.count; i++) {
  doc.switchToPage(range.start + i);
  doc.page.margins.bottom = 0; // draw inside the bottom margin without triggering a page break
  const fy = PH - 34;
  doc.moveTo(L, fy - 7).lineTo(R, fy - 7).lineWidth(0.5).strokeColor(TRACK).stroke();
  doc.font(REG).fontSize(8).fillColor(FAINT).text(`${profile.firstName} ${profile.lastName} — Resume`, L, fy, { width: CW / 2, lineBreak: false });
  doc.font(REG).fontSize(8).fillColor(FAINT).text(`Page ${i + 1} of ${range.count}`, L, fy, { width: CW, align: "right", lineBreak: false });
}

doc.end();
stream.on("finish", () => console.log("✓ public/resume.pdf generated (" + range.count + " pages)"));

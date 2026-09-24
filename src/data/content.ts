/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING ABOUT YOUR PORTFOLIO HERE.
 *  This is the single source of truth — change the values below and the whole
 *  site updates. No need to touch the components.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  firstName: "AJI",
  lastName: "ZAELANI",
  role: "Video Editor & Content Creator · Fullstack Web & AI Developer",
  // Short one-liner shown in the hero
  tagline:
    "I edit scroll-stopping vertical video and ship production web & AI tools — two skill tracks, built in parallel, both live and working.",
  email: "muhammadajizaelani@gmail.com",
  phone: "0823-1626-9203",
  // GitHub username — the Work section pulls public repos tagged "portfolio" from here
  github: "agentgea-dev",
  // Location is shown bottom-left of the About section (two lines, like the reference)
  city: "Cianjur, Indonesia",
  street: "Cianjur, West Java",
  availability: "Full-time & freelance — remote / WFH",
  // Path under /public — drop your CV file there
  resumeUrl: "/resume.pdf",
  // ── Hero background ─────────────────────────────────────────────────────
  // Priority: heroImage → heroVideo → 3D scene.
  // Elegant 4K still under /public (set "" to disable and fall through).
  heroImage: "/bg/hero.jpg",
  // Drop a Higgsfield (or any) video under /public/video and point here, e.g.
  // "/video/hero.mp4". Leave "" to fall back to the 3D scene.
  heroVideo: "",
  // Optional still image shown before the video loads & when reduced-motion is on.
  heroPoster: "",
};

// Matches the reference navbar exactly: Home · About · Resume · Portfolio
export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Portfolio", href: "#portfolio" },
];

// Only real, working links — empty placeholders erode client trust.
// Add LinkedIn / X back here once you have the real profile URLs.
export const socials = [
  { label: "WhatsApp", href: "https://wa.me/6282316269203", icon: "whatsapp" },
  { label: "GitHub", href: "https://github.com/agentgea-dev", icon: "github" },
  { label: "Email", href: "mailto:muhammadajizaelani@gmail.com", icon: "mail" },
] as const;

export const about = {
  heading: "ABOUT",
  paragraphs: [
    "For the past four years (Aug 2022 – 2026) I've worked full-time at a food factory in Japan. Outside working hours, I built two skill tracks in parallel, self-taught: video editing — cutting and editing vertical content for TikTok/Reels, complete with subtitles and animated captions — and web/AI development — building production web tools (Next.js, TypeScript, LLM integrations) that are live and in use.",
    "I'm now based in Cianjur, open to full-time or freelance work in either — or both — of these tracks, with a work discipline that's already been tested: shipping real projects while working full-time shifts.",
  ],
  // Quick stats — rendered in the PDF resume (not on the page). Keep to numbers a client
  // can actually verify from the project list below.
  stats: [
    { value: "4+", label: "Years experience" },
    { value: "2", label: "Parallel skill tracks" },
    { value: "100%", label: "Remote-ready" },
  ],
};

/** SKILLS — proficiency bars (like the reference's "Software Skills" sliders) */
export const techStack = [
  { name: "CapCut / DaVinci Resolve", level: 95 },
  { name: "React / Next.js / TypeScript", level: 92 },
  { name: "Vertical Video (9:16 Format)", level: 95 },
  { name: "AI Engineering (LLM / RAG)", level: 85 },
  { name: "Subtitle & Animated Captions", level: 92 },
  { name: "Node.js / PostgreSQL", level: 82 },
  { name: "Audio & Dubbing Sync", level: 80 },
];

/** TOOLS & PLATFORMS — shown as tag chips */
export const tools = [
  "CapCut",
  "DaVinci Resolve",
  "Alight Motion",
  "Canva",
  "Meta Ads Manager",
  "Sony A7C",
  "Next.js / React",
  "TypeScript",
  "Node.js / Express",
  "PostgreSQL / Prisma",
  "GraphQL / tRPC",
  "OpenAI / Claude API",
  "LangChain",
  "RAG / Vector DB",
  "Docker",
  "AWS",
  "Vercel",
  "Google Workspace",
  "WhatsApp / Telegram",
];

/** Spoken languages — kept from the reference layout */
export const languages = [
  { name: "Indonesian", level: 100 },
  { name: "Japanese", level: 55 },
  { name: "English", level: 40 },
];

/** EXPERIENCE — the blue-dot timeline in the middle column */
// Grounded in real, verifiable work — no invented employers or metrics.
export const experience = [
  {
    period: "Aug 2022 — 2026",
    role: "Food Production Staff",
    company: "Fujimoto Rice Delica Co., Ltd. · Japan",
    summary:
      "Full-time primary job: produced bento and Japanese dishes to strict factory quality and schedule standards, shift-based with tight targets for quantity and punctuality — while running two self-directed tracks outside working hours: video editing and web/AI development.",
  },
  {
    period: "2022 — Now",
    role: "Video Editor & Clipper — TikTok Content",
    company: "Independent · Remote",
    summary:
      "Cut long-form video into short, vertical, publish-ready clips: moment selection, cut timing, subtitles, animated captions and music.",
  },
  {
    period: "Self-directed project",
    role: "Developer — Auto Clip (AI auto-clipping app)",
    company: "Independent · Remote",
    summary:
      "Built an app that automatically cuts long video into short, publish-ready clips with subtitles, including a modular 4-axis caption system for consistent results across many videos.",
  },
  {
    period: "2023 — Now",
    role: "Freelance Fullstack Developer",
    company: "Independent · Remote",
    summary:
      "Shipped production web tools live on Vercel — bulk J&T shipping labels, Rupiah invoicing, a PPh 21 tax calculator (Next.js, TypeScript). Self-directed LLM integration (OpenAI/Claude) and RAG pipelines since 2024, plus company-profile sites, internal dashboards and REST API work for local SMB clients (2023).",
  },
];

export const education = [
  {
    period: "Graduated 2019",
    title: "SMK Mandiri Bersemi Cianjur",
    org: "Teknik Komputer dan Jaringan (TKJ)",
  },
  {
    period: "2022 — Now",
    title: "Self-Taught Video Editing & Web/AI Development",
    org: "Self-directed — CapCut, DaVinci Resolve, Next.js, LLM / RAG, hands-on projects",
  },
];

/** WHAT I DO — the right-hand "What can I do?" column */
export const services = [
  "Vertical Video Editing (TikTok / Reels / Shorts)",
  "Subtitle & Animated Captions",
  "Web App Development (Next.js)",
  "AI / LLM Integration & RAG",
  "Voice Over & Dubbing Sync",
  "REST API & Backend Integration",
  "Meta Ads Setup & Content Strategy",
  "Admin & Content Scheduling",
];

/** INTERESTS — small icon grid bottom-right of the reference */
export const interests = [
  { label: "Video & Film", icon: "film" },
  { label: "Open Source", icon: "code" },
  { label: "Photography", icon: "camera" },
  { label: "Language Learning", icon: "languages" },
];

/**
 * PROJECTS — real, deployed, clickable work (also the source for the PDF resume).
 * The live site pulls these from GitHub (repos tagged `portfolio`); this array is
 * the truthful fallback + resume source. Keep it real — every href must work.
 */
export const projects = [
  {
    title: "Generator Label J&T Massal",
    category: "Web Tool",
    description:
      "Bulk shipping-label generator for Indonesian J&T couriers — paste/upload a CSV of orders and print 100×150mm PDF labels, fully in-browser with no backend.",
    tags: ["Next.js", "TypeScript", "jsPDF"],
    href: "https://2026-06-23-jnt-label-generator.vercel.app",
    accent: "from-cyan-400/20 to-blue-600/20",
  },
  {
    title: "Invoice Generator IDR",
    category: "Web Tool",
    description:
      "Rupiah invoice & receipt builder: automatic terbilang (number-to-words), PPN 11%, A5 print mode and localStorage state — no login, no backend.",
    tags: ["JavaScript", "PDF", "localStorage"],
    href: "https://2026-06-25-invoice-generator-idr.vercel.app",
    accent: "from-violet-400/20 to-fuchsia-600/20",
  },
  {
    title: "Kalkulator PPh 21 TER",
    category: "Web Tool",
    description:
      "Indonesian income-tax calculator (PPh 21 TER, PMK 168/2023) with BPJS deductions, a step-by-step breakdown and a printable A5 payslip — fully client-side.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://2026-06-27-kalkulator-pph21-ter.vercel.app",
    accent: "from-emerald-400/20 to-teal-600/20",
  },
  {
    title: "Export Commodity B2B Template",
    category: "Web Template",
    description:
      "SEO-first Astro landing site for Indonesian commodity exporters — JSON-LD product schema, sitemap and OG tags — re-skinnable from a single config file.",
    tags: ["Astro", "TypeScript", "SEO"],
    href: "https://2026-06-25-export-commodity-template.vercel.app",
    accent: "from-amber-400/20 to-orange-600/20",
  },
  {
    title: "SMK Job-Ready Pack",
    category: "Landing Page",
    description:
      "Sales landing page for an Indonesian SMK-graduate job-readiness bundle — ATS-safe CV templates, interview Q&A and application-email formats, with a clear who/what/why layout.",
    tags: ["Web", "Landing Page", "SEO"],
    href: "https://2026-06-24-smk-job-ready-pack.vercel.app",
    accent: "from-rose-400/20 to-pink-600/20",
  },
  {
    title: "Sakura Anki N3",
    category: "Web App",
    description:
      "Gamified JLPT N3 study app — Japanese grammar and vocabulary flashcards with a spaced-repetition flow, built to make N3 prep feel fun.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://nihongo-n3.vercel.app/landing.html",
    accent: "from-sky-400/20 to-indigo-600/20",
  },
  {
    title: "Kalkulator HPP UMKM",
    category: "Digital Product",
    description:
      "Ready-to-use spreadsheet (.xlsx) for Indonesian food & beverage micro-businesses — computes cost of goods (HPP), minimum selling price, margin and break-even across 5 linked sheets, with a filled example and a Bahasa Indonesia how-to PDF.",
    tags: ["Spreadsheet", "Excel", "UMKM"],
    href: "https://github.com/agentgea-dev/kalkulator-hpp-umkm",
    accent: "from-amber-400/20 to-orange-600/20",
  },
  {
    title: "Panduan NIB & Izin Usaha OSS",
    category: "Ebook",
    description:
      "Practical Bahasa Indonesia PDF guide (11 pages) walking UMKM owners through registering an NIB business licence on the OSS RBA portal — document checklist, 7-step walkthrough, common errors and a printable checklist.",
    tags: ["Ebook", "PDF", "UMKM"],
    href: "https://github.com/agentgea-dev/panduan-nib-oss",
    accent: "from-cyan-400/20 to-blue-600/20",
  },
];

export const contact = {
  heading: "LET'S WORK TOGETHER",
  subheading: "Need video content, a web app, or an AI integration built? I'm one message away.",
};

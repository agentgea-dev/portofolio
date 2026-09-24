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
  role: "Video Editor · Content Creator · Admin Digital",
  // Short one-liner shown in the hero
  tagline:
    "I cut raw footage into scroll-stopping vertical video — and handle the admin ops that keep a content pipeline on time.",
  email: "muhammadajizaelani@gmail.com",
  phone: "+62 823-1626-9203",
  // GitHub username — the Work section pulls public repos tagged "portfolio" from here
  github: "agentgea-dev",
  // Location is shown bottom-left of the About section (two lines, like the reference)
  city: "Cianjur, Indonesia",
  street: "Cianjur, West Java",
  availability: "Full-time WFH — available now",
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
    "For the past four years I worked at a food factory in Japan, while running a TikTok video-clipping side hustle after hours — cutting vertical video, writing subtitles, and building animated captions.",
    "That grew into building my own website and an AI-powered auto video-clipping app. I'm now based in Cianjur, looking for a long-term WFH role where I can own content production end-to-end — from raw footage to a file that's ready to publish.",
    "I'm used to working independently against targets, communicating over chat, and handling admin work that needs to stay tidy and on time.",
  ],
  // Quick stats — rendered in the PDF resume (not on the page). Keep to numbers a client
  // can actually verify from the project list below.
  stats: [
    { value: "4+", label: "Years experience" },
    { value: "N4", label: "Japanese (JLPT)" },
    { value: "100%", label: "WFH ready" },
  ],
};

/** SKILLS — proficiency bars (like the reference's "Software Skills" sliders) */
export const techStack = [
  { name: "CapCut / DaVinci Resolve", level: 95 },
  { name: "Vertical Video (9:16 Format)", level: 95 },
  { name: "Subtitle & Animated Captions", level: 92 },
  { name: "Audio & Dubbing Sync", level: 80 },
  { name: "Canva / Visual Design", level: 85 },
  { name: "Meta Ads & Social Media", level: 75 },
  { name: "Admin & Web Tools", level: 82 },
];

/** TOOLS & PLATFORMS — shown as tag chips */
export const tools = [
  "CapCut",
  "Alight Motion",
  "DaVinci Resolve",
  "Canva",
  "Meta Ads Manager",
  "Google Workspace",
  "Sony A7C",
  "Voice Over & Dubbing",
  "Spreadsheet / Excel",
  "WhatsApp / Telegram",
  "AI Image Generation",
  "Next.js / React",
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
      "Produced bento and Japanese dishes to strict factory quality and schedule standards. Worked shift-based with tight targets for quantity, cleanliness and punctuality — while running video-clipping work on the side outside working hours.",
  },
  {
    period: "2022 — Now",
    role: "Video Editor & Clipper — TikTok Content",
    company: "Independent · Remote",
    summary:
      "Cut long-form video into short, vertical, publish-ready clips: moment selection, cut timing, subtitles, animated captions and music — a consistent editing style across a high volume of clips.",
  },
  {
    period: "Self-directed project",
    role: "Developer — Auto Clip (AI auto-clipping app)",
    company: "Independent · Remote",
    summary:
      "Built an app that automatically cuts long video into short, publish-ready clips with subtitles. Designed a modular caption system — text-reveal style, word emphasis, motion and position — for consistent results across many videos. Owned the whole pipeline: input, render, quality control, through to a publish-ready file.",
  },
  {
    period: "Self-directed project",
    role: "Website & Web App Builder",
    company: "Independent · Remote",
    summary:
      "Built a portfolio website and booking system for a photo studio, landing pages, and a web-based learning app — design through to a live, working website, handled solo.",
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
    title: "Self-Taught Video Editing & AI Tooling",
    org: "Self-directed — CapCut, Alight Motion, DaVinci Resolve, AI automation",
  },
];

/** WHAT I DO — the right-hand "What can I do?" column */
export const services = [
  "Vertical Video Editing (TikTok / Reels / Shorts)",
  "Subtitle & Animated Captions",
  "Voice Over & Dubbing Sync",
  "Thumbnail & Social Visual Design",
  "Meta Ads Setup & Content Strategy",
  "Content Scheduling & Admin",
  "Product Photo & Video (Sony A7C)",
  "Website & Web App Building",
];

/** INTERESTS — small icon grid bottom-right of the reference */
export const interests = [
  { label: "Video & Film", icon: "film" },
  { label: "Photography", icon: "camera" },
  { label: "Audio & Music", icon: "music" },
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
  subheading: "Need content produced or a tool built? I'm one message away.",
};

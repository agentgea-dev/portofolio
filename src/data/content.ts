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
  role: "Fullstack Developer",
  // Short one-liner shown in the hero
  tagline: "I design and ship end-to-end web products — pixel to API.",
  email: "ajizaelani19@gmail.com",
  phone: "+62 823-1626-9203",
  // GitHub username — the Work section pulls public repos tagged "portfolio" from here
  github: "agentgea-dev",
  // Location is shown bottom-left of the About section (two lines, like the reference)
  city: "Cianjur, Indonesia",
  street: "Cianjur, West Java",
  availability: "Available for freelance & full-time",
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
  { label: "GitHub", href: "https://github.com/agentgea-dev", icon: "github" },
  { label: "Email", href: "mailto:ajizaelani19@gmail.com", icon: "mail" },
] as const;

export const about = {
  heading: "ABOUT",
  paragraphs: [
    "Self-taught Fullstack Developer with 2+ years building performant, accessible web applications from database to pixel — skills sharpened through self-directed study and real, shipped projects. I specialize in React/Next.js on the front and Node.js/PostgreSQL on the back.",
    "My strength is owning a feature end-to-end — turning fuzzy product ideas into shipped, maintainable software. I care about clean architecture, fast load times, and interfaces that feel effortless.",
    "Lately I focus on AI engineering — integrating LLMs (OpenAI / Claude), building RAG pipelines and AI-powered chat features into real production apps.",
  ],
  // Quick stats beside the bio — kept to numbers a client can actually verify on this page.
  stats: [
    { value: "2+", label: "Years experience" },
    { value: "8+", label: "Live projects" },
    { value: "100%", label: "Remote-ready" },
  ],
};

/** TECH STACK — proficiency bars (like the reference's "Software Skills" sliders) */
export const techStack = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "AI Engineering (LLM / RAG)", level: 88 },
  { name: "Node.js / Express", level: 90 },
  { name: "PostgreSQL / Prisma", level: 85 },
  { name: "Tailwind / CSS", level: 93 },
  { name: "Docker / CI-CD", level: 80 },
];

/** TOOLS & PLATFORMS — shown as tag chips */
export const tools = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "OpenAI / Claude API",
  "LangChain",
  "RAG / Vector DB",
  "Hugging Face",
  "GraphQL",
  "PostgreSQL",
  "Redis",
  "Prisma",
  "Docker",
  "AWS",
  "Vercel",
  "Figma",
  "Three.js",
  "tRPC",
];

/** Spoken languages — kept from the reference layout */
export const languages = [
  { name: "Indonesian", level: 100 },
  { name: "English", level: 76 },
  { name: "Japanese", level: 45 },
];

/** EXPERIENCE — the blue-dot timeline in the middle column */
// Mix of real freelance work + self-built projects (self-taught background).
// 👉 Replace with your actual roles, clients, capstones & years.
// Grounded in real, shipped, clickable work — no invented employers or metrics.
export const experience = [
  {
    period: "2024 — Now",
    role: "Freelance Fullstack Developer",
    company: "Self-employed · Remote",
    summary:
      "Building and shipping production web tools for the Indonesian market — bulk J&T shipping labels, Rupiah invoicing, PPh 21 tax calculator — with Next.js & TypeScript, deployed live on Vercel.",
  },
  {
    period: "2024 — Now",
    role: "AI Engineering (self-directed)",
    company: "Independent",
    summary:
      "Integrating LLMs (OpenAI / Claude), building RAG pipelines and AI chat features into real web applications.",
  },
  {
    period: "2023",
    role: "Freelance Web Developer",
    company: "Remote · local SMB clients",
    summary:
      "Company-profile sites, internal dashboards and REST API integrations for small businesses (Next.js, Node, Supabase).",
  },
  {
    period: "2023",
    role: "Project — E-Commerce Web App",
    company: "Personal build",
    summary:
      "Fullstack online store: product catalog, cart and checkout flow (Next.js + PostgreSQL).",
  },
];

// No university, no bootcamps — 100% self-taught. Honest, verifiable framing only.
export const education = [
  {
    period: "2022 — Now",
    title: "Self-Taught Fullstack Development",
    org: "Self-directed — online courses, official docs & hands-on projects",
  },
  {
    period: "2024 — Now",
    title: "AI Engineering — LLMs, RAG & Agents",
    org: "Self-directed study",
  },
  {
    period: "2021 — 2022",
    title: "Web Foundations — HTML, CSS & JavaScript",
    org: "Self-directed",
  },
];

/** WHAT I DO — the right-hand "What can I do?" column */
export const services = [
  "Web App Development",
  "AI / LLM Integration",
  "RAG & Chatbot Systems",
  "REST & GraphQL APIs",
  "Design Systems & UI",
  "Performance Optimization",
  "Database Architecture",
  "Cloud Deployment & DevOps",
];

/** INTERESTS — small icon grid bottom-right of the reference */
export const interests = [
  { label: "Open Source", icon: "code" },
  { label: "3D / WebGL", icon: "box" },
  { label: "Photography", icon: "camera" },
  { label: "Travel", icon: "plane" },
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
];

export const contact = {
  heading: "LET'S BUILD SOMETHING",
  subheading: "Have a project in mind? I'm one message away.",
};

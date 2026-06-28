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

export const socials = [
  { label: "GitHub", href: "https://github.com/", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
  { label: "X / Twitter", href: "https://x.com/", icon: "twitter" },
  { label: "Dribbble", href: "https://dribbble.com/", icon: "dribbble" },
  { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
  { label: "Email", href: "mailto:ajizaelani19@gmail.com", icon: "mail" },
] as const;

export const about = {
  heading: "ABOUT",
  paragraphs: [
    "Self-taught Fullstack Developer with 3+ years building performant, accessible web applications from database to pixel — skills sharpened through intensive bootcamps and real client projects. I specialize in React/Next.js on the front and Node.js/PostgreSQL on the back.",
    "My strength is owning a feature end-to-end — turning fuzzy product ideas into shipped, maintainable software. I care about clean architecture, fast load times, and interfaces that feel effortless.",
    "Lately I focus on AI engineering — integrating LLMs (OpenAI / Claude), building RAG pipelines and AI-powered chat features into real production apps.",
  ],
  // A few quick stats shown beside the bio
  stats: [
    { value: "3+", label: "Years experience" },
    { value: "40+", label: "Projects shipped" },
    { value: "20+", label: "Happy clients" },
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
// Mix of real work + self-built projects (bootcamp/self-taught background).
// 👉 Replace with your actual roles, clients, capstones & years.
export const experience = [
  {
    period: "2024 — Now",
    role: "Freelance Fullstack Developer",
    company: "Self-employed",
    summary: "Membangun web app & landing page untuk klien UMKM (Next.js, Node, Supabase).",
  },
  {
    period: "2023",
    role: "Web Developer (Kontrak)",
    company: "Studio Digital Lokal",
    summary: "Mengembangkan dashboard internal & integrasi REST API untuk tim operasional.",
  },
  {
    period: "2023",
    role: "Proyek — E-Commerce App",
    company: "Capstone Bootcamp",
    summary: "Toko online fullstack: katalog, keranjang, payment gateway (Next.js + PostgreSQL).",
  },
  {
    period: "2022",
    role: "Proyek — Company Profile & CMS",
    company: "Freelance",
    summary: "Situs profil perusahaan dengan CMS ringan, optimasi SEO & performa.",
  },
];

// No university — fully self-taught through bootcamps & intensive courses.
// 👉 Replace the names/years/titles below with the bootcamps you actually took.
export const education = [
  {
    period: "2023",
    title: "Fullstack JavaScript Bootcamp",
    org: "Hacktiv8",
  },
  {
    period: "2022",
    title: "React & Next.js Intensive",
    org: "Dicoding Indonesia",
  },
  {
    period: "2021",
    title: "Backend Engineering — Node.js & SQL",
    org: "Purwadhika Digital School",
  },
  {
    period: "2020",
    title: "Frontend Web Foundations",
    org: "BuildWithAngga",
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

/** PROJECTS — the portfolio grid */
export const projects = [
  {
    title: "Nimbus Analytics",
    category: "SaaS Dashboard",
    description:
      "Real-time analytics platform with custom charting, role-based access and a Stripe-powered billing flow.",
    tags: ["Next.js", "tRPC", "PostgreSQL", "Recharts"],
    href: "#",
    accent: "from-cyan-400/20 to-blue-600/20",
  },
  {
    title: "Bazaar Commerce",
    category: "E-commerce",
    description:
      "Headless storefront with sub-second navigation, Algolia search and an admin CMS.",
    tags: ["Next.js", "Shopify API", "Tailwind"],
    href: "#",
    accent: "from-violet-400/20 to-fuchsia-600/20",
  },
  {
    title: "Orbit Chat",
    category: "Realtime App",
    description:
      "Low-latency group chat with WebSockets, presence, typing indicators and message search.",
    tags: ["Node.js", "Socket.io", "Redis"],
    href: "#",
    accent: "from-emerald-400/20 to-teal-600/20",
  },
  {
    title: "Atlas Design System",
    category: "Open Source",
    description:
      "A themeable React component library with 50+ accessible components and full docs.",
    tags: ["React", "Radix", "Storybook"],
    href: "#",
    accent: "from-amber-400/20 to-orange-600/20",
  },
  {
    title: "Voyage 3D",
    category: "WebGL / 3D",
    description:
      "Interactive product configurator rendered with React Three Fiber and GPU instancing.",
    tags: ["Three.js", "R3F", "GLSL"],
    href: "#",
    accent: "from-sky-400/20 to-indigo-600/20",
  },
  {
    title: "DevPulse API",
    category: "Backend",
    description:
      "GraphQL API aggregating CI/CD metrics with caching, rate limiting and webhooks.",
    tags: ["GraphQL", "Prisma", "Docker"],
    href: "#",
    accent: "from-rose-400/20 to-pink-600/20",
  },
];

export const contact = {
  heading: "LET'S BUILD SOMETHING",
  subheading: "Have a project in mind? I'm one message away.",
};

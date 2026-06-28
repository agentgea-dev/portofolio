# Fullstack Developer Portfolio

A dark, 3D-animated single-page portfolio inspired by the **Jason Martin** reference
(in [`asset/Referensi`](asset/Referensi)) — same mood, color palette and typography,
adapted for a fullstack developer and given a tasteful WebGL hero.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · React Three Fiber (Three.js)

---

## Quick start

```bash
npm install      # already done
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

---

## ✏️ How to make it yours

**Everything you need to edit lives in one file:**
[`src/data/content.ts`](src/data/content.ts)

| What | Where in `content.ts` |
|------|------------------------|
| Name, role, email, phone, location | `profile` |
| Nav items | `nav` |
| Social links | `socials` |
| Bio + stats | `about` |
| Tech stack bars | `techStack` |
| Tools / chips | `tools` |
| Work experience timeline | `experience` |
| Education | `education` |
| Services ("What I Do") | `services` |
| Interests | `interests` |
| Projects grid | `projects` |
| Contact heading | `contact` |

### Add your photo
Drop a file at `public/portrait.jpg`, then in
[`src/components/About.tsx`](src/components/About.tsx) uncomment the `<img>` block
(it's marked with a `PORTRAIT` comment). Until then a monogram placeholder shows.

### Add your resume
Put your CV at `public/resume.pdf` (the **Resume** button already points there).

---

## 🎨 Design system

Tokens live in [`tailwind.config.ts`](tailwind.config.ts):

- **Background** — layered near-blacks `ink.900 → ink.500`
- **Text** — `chalk` (white) / `chalk-muted` / `chalk-dim`
- **Accent** — single azure→cyan `#2ea9e4` (links, timeline dots, underlines, glow) — matches the reference
- **Fonts** — `Montserrat` (display / headings) + `Inter` (body), loaded via `next/font`

To rebrand to a different accent, change the `accent` color in `tailwind.config.ts`.

---

## 🌐 The 3D scene

[`src/components/three/HeroScene.tsx`](src/components/three/HeroScene.tsx) — a restrained
WebGL backdrop: one slowly-distorting glass icosahedron + wireframe shell, a few
floating crystals, and a faint particle field with gentle pointer parallax.

- **Code-split** (`dynamic(..., { ssr: false })`) so it never blocks first paint.
- **Local lighting only** — no remote HDR fetch; works fully offline.
- **Respects `prefers-reduced-motion`** — freezes animation and drops the orbiting shapes.

To tune intensity, edit `distort`, `speed`, the `Sparkles count`, or the number of
`FloatingCrystals` in that file.

---

## 📁 Structure

```
src/
├── app/
│   ├── layout.tsx        # fonts + metadata
│   ├── page.tsx          # section assembly
│   └── globals.css       # base styles + component utilities
├── components/
│   ├── Navbar.tsx        # sticky nav + scrollspy + mobile menu
│   ├── Hero.tsx          # name, role, CTAs, 3D backdrop
│   ├── About.tsx         # bio, stats, portrait
│   ├── Skills.tsx        # 3-col: tech / experience / services
│   ├── Work.tsx          # project grid with tilt-on-hover
│   ├── Contact.tsx       # contact card
│   ├── Footer.tsx
│   ├── three/HeroScene.tsx
│   └── ui/               # Reveal, SkillBar, Socials, Icon
└── data/content.ts       # ⭐ single source of truth — edit this
```

---

## 🚀 Deploy

Push to GitHub and import to **Vercel** (zero config), or:

```bash
npm run build && npm run start
```

---

Built with Next.js & Three.js.

import { about, profile } from "@/data/content";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden py-24 md:py-32"
    >
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* ── Left: text column ─────────────────────────────── */}
        <div className="relative z-10 order-2 lg:order-1">
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              {about.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 inline-block text-sm text-chalk-muted transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          </Reveal>

          <div className="mt-10 space-y-4">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="max-w-md text-base leading-[1.8] text-chalk-muted">{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Location, bottom-left with a cyan dash — exactly like the reference */}
          <Reveal delay={0.3}>
            <div className="mt-12 flex items-start gap-4">
              <span className="mt-2 h-px w-9 shrink-0 bg-accent" />
              <div className="text-sm leading-relaxed text-chalk-muted">
                <div>{profile.city}</div>
                <div className="text-chalk-dim">{profile.street}</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Right: large grayscale portrait fading into black ── */}
        <Reveal delay={0.15} y={0} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md lg:max-w-none">
            {/*
              PORTRAIT — drop a photo at /public/portrait.jpg, then uncomment the
              <img> below. It will render grayscale and fade into the dark page
              on the left, matching the reference.

              <img
                src="/portrait.jpg"
                alt="${profile.firstName} ${profile.lastName}"
                className="absolute inset-0 h-full w-full object-cover object-top grayscale"
              />
            */}

            {/* Placeholder until you add a photo */}
            <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_70%_30%,#1c2026_0%,#0a0b0d_75%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="select-none font-display text-[9rem] font-extrabold leading-none text-white/[0.05]">
                {profile.firstName[0]}
                {profile.lastName[0]}
              </span>
            </div>

            {/* Fade-to-black on the left + bottom, so the portrait melts into the page */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/30 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

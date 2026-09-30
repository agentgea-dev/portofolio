"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/content";
import Socials from "@/components/ui/Socials";

// 3D scene is client-only & code-split so it never blocks first paint
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const ease = [0.22, 1, 0.36, 1] as const;
// Stagger helper to keep the reveal order matching the reference's top-down read
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function Hero() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section id="home" className="relative min-h-svh w-full overflow-hidden">
      {/* Backdrop — priority: elegant still → cinematic video → 3D scene */}
      {profile.heroImage ? (
        <div
          aria-hidden
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${profile.heroImage}')` }}
        />
      ) : profile.heroVideo ? (
        reduce ? (
          // reduced-motion: hold on the poster, never autoplay
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.heroPoster || undefined}
            alt=""
            aria-hidden
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />
        ) : (
          <video
            className="absolute inset-0 z-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={profile.heroPoster || undefined}
          >
            <source src={profile.heroVideo} type="video/mp4" />
          </video>
        )
      ) : (
        // 3D backdrop — shifted right on desktop, where the reference puts the photo
        <div className="pointer-events-none absolute inset-0 z-0 lg:left-[20%]">
          <HeroScene reducedMotion={reduce} />
        </div>
      )}

      {/* Readability gradients over the canvas */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-ink via-ink/80 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink via-transparent to-ink/30" />

      {/* ── Name block: left-aligned in the left area, like the reference ── */}
      <div className="container-px relative z-10 flex min-h-svh items-center">
        <div className="mx-auto max-w-lg text-center md:mx-0 md:ml-[3%] md:text-left lg:ml-[7%]">
          {/* First name — thin, wide-tracked, sitting just above the last name */}
          <motion.p
            {...rise(0.05)}
            className="font-display text-3xl font-light uppercase tracking-[0.4em] text-chalk sm:text-4xl lg:text-[43px]"
          >
            {profile.firstName}
          </motion.p>

          {/* Last name — the dominant element: huge, extra-bold */}
          <motion.h1
            {...rise(0.12)}
            className="mt-1 font-display text-6xl font-extrabold uppercase leading-[0.85] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            {profile.lastName}
          </motion.h1>

          {/* Role — title case, wide letter-spacing, muted */}
          <motion.p
            {...rise(0.22)}
            className="mt-5 font-display text-xs font-light tracking-[0.32em] text-chalk-muted sm:text-[0.8125rem]"
          >
            {profile.role}
          </motion.p>

          {/* Two outlined pills, side by side (both outlined, like the reference) */}
          <motion.div
            {...rise(0.32)}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <a
              href={profile.resumeUrl}
              download={`${profile.firstName}-${profile.lastName}-Resume.pdf`}
              className="pill-btn"
            >
              Resume
            </a>
            <a href="#portfolio" className="pill-btn">
              Portfolio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Social icons pinned bottom-left, aligned under the name block */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease }}
        className="container-px absolute inset-x-0 bottom-8 z-10"
      >
        <Socials className="justify-center md:ml-[3%] md:justify-start lg:ml-[7%]" />
      </motion.div>
    </section>
  );
}

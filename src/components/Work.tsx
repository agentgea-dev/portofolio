"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/github";
import Reveal from "@/components/ui/Reveal";

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  // Scale the live-preview iframe to exactly fit the tile width on any screen (incl. mobile)
  const tileRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.28);
  useEffect(() => {
    const el = tileRef.current;
    if (!el || !p.preview) return;
    const update = () => setScale(el.clientWidth / 1280);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [p.preview]);

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-4px)`;
  }
  function onLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateY(0)";
  }

  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <a
        ref={ref}
        href={p.href}
        target={p.href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="card group relative flex h-full flex-col overflow-hidden p-6 transition-[transform,border-color] duration-200 ease-out will-change-transform hover:border-accent/40"
      >
        {/* header tile — live website preview if deployed, else gradient */}
        <div ref={tileRef} className="relative mb-5 h-36 overflow-hidden rounded-xl bg-ink">
          {p.preview ? (
            <>
              <iframe
                src={p.preview}
                title={`${p.title} preview`}
                loading="lazy"
                tabIndex={-1}
                aria-hidden
                scrolling="no"
                className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
                style={{ width: "1280px", height: "860px", transform: `scale(${scale})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </>
          ) : (
            <>
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
              <div className="absolute inset-0 bg-ink/30" />
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />
            </>
          )}
          <span className="absolute left-4 top-4 z-10 rounded-full border border-white/15 bg-ink/50 px-3 py-1 text-[11px] font-medium tracking-wide text-chalk backdrop-blur-sm">
            {p.category}
          </span>
          <motion.span
            className="absolute bottom-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-ink"
            initial={false}
          >
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
          </motion.span>
        </div>

        <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-accent">
          {p.title}
        </h3>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-chalk-muted">{p.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/[0.04] px-2 py-1 text-[11px] text-chalk-dim"
            >
              {t}
            </span>
          ))}
        </div>
      </a>
    </Reveal>
  );
}

export default function Work({ projects }: { projects: Project[] }) {
  return (
    <section id="portfolio" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="container-px">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">Portfolio</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 max-w-lg font-display text-3xl font-extrabold text-white md:text-4xl">
                Selected work I&apos;m proud of
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm text-chalk-muted">
              Web tools, landing pages and digital products for the Indonesian market — built
              end to end and shipped live.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.href} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Check, GraduationCap, Download } from "lucide-react";
import {
  profile,
  techStack,
  languages,
  experience,
  education,
  services,
  tools,
  interests,
} from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SkillBar from "@/components/ui/SkillBar";
import Icon from "@/components/ui/Icon";

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="eyebrow mb-7 !text-xs">{children}</h3>
  );
}

export default function Skills() {
  return (
    <section
      id="resume"
      className="relative scroll-mt-20 overflow-hidden py-24 md:py-32"
    >
      {/* Background photo (saved under /public/bg) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/bg/resume.jpg')] bg-cover bg-center md:bg-fixed"
      />
      {/* Dark wash for readability, fading into the page at top & bottom */}
      <div aria-hidden className="absolute inset-0 bg-ink/[0.82]" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      <div className="container-px relative z-10">
        <Reveal>
          <p className="mb-2 text-center font-display text-xs font-semibold uppercase tracking-widest2 text-accent">
            What I bring
          </p>
          <h2 className="mb-8 text-center font-display text-3xl font-extrabold text-white md:text-4xl">
            Skills &amp; Experience
          </h2>
          <div className="mb-16 flex justify-center">
            <a
              href={profile.resumeUrl}
              download={`${profile.firstName}-${profile.lastName}-Resume.pdf`}
              className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/20"
            >
              <Download size={16} className="text-accent" />
              Download CV (PDF)
            </a>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          {/* Column 1 — Tech stack + languages */}
          <Reveal>
            <div>
              <ColTitle>Core Skills</ColTitle>
              <div className="space-y-5">
                {techStack.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>

              <ColTitle>Languages</ColTitle>
              <div className="space-y-5">
                {languages.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Column 2 — Experience timeline + education */}
          <Reveal delay={0.1}>
            <div>
              <ColTitle>Experience</ColTitle>
              <ol className="relative ml-1 border-l border-white/10">
                {experience.map((job, i) => (
                  <li key={i} className="relative mb-8 pl-6 last:mb-0">
                    {/* blue dot */}
                    <span className="absolute -left-[7px] top-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-accent shadow-glow">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-wide text-accent">
                      {job.period}
                    </span>
                    <h4 className="mt-1 text-sm font-semibold text-white">{job.role}</h4>
                    <p className="text-[13px] text-chalk-muted">{job.company}</p>
                    <p className="mt-1 text-[12px] leading-relaxed text-chalk-dim">{job.summary}</p>
                  </li>
                ))}
              </ol>

              <ColTitle>Learning &amp; Self-Study</ColTitle>
              <div className="space-y-4">
                {education.map((ed, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{ed.title}</h4>
                      <p className="text-[13px] text-chalk-muted">{ed.org}</p>
                      <p className="text-[11px] uppercase tracking-wide text-chalk-dim">{ed.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Column 3 — What I do + tools + interests */}
          <Reveal delay={0.2}>
            <div>
              <ColTitle>What I Do</ColTitle>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-[13px] text-chalk-muted">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                      <Check size={12} />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>

              <ColTitle>Tools &amp; Platforms</ColTitle>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-chalk-muted transition-colors hover:border-accent/50 hover:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ColTitle>Interests</ColTitle>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((it) => (
                  <div
                    key={it.label}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-3 transition-colors hover:border-accent/40"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/10 text-accent">
                      <Icon name={it.icon} size={16} />
                    </span>
                    <span className="text-[12px] text-chalk-muted">{it.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

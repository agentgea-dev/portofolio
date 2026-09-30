import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { contact, profile } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import Socials from "@/components/ui/Socials";

export default function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: profile.city, href: undefined },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/[0.05] py-24 md:py-32"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container-px relative z-10">
        <div className="card relative overflow-hidden p-8 md:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left — pitch */}
            <div>
              <Reveal>
                <span className="eyebrow">Contact</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white md:text-5xl">
                  {contact.heading}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-md text-base leading-relaxed text-chalk-muted">
                  {contact.subheading}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <a
                  href={`mailto:${profile.email}`}
                  className="pill-btn pill-btn--solid mt-8"
                >
                  Start a conversation <ArrowUpRight size={16} />
                </a>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8">
                  <Socials />
                </div>
              </Reveal>
            </div>

            {/* Right — contact details */}
            <div className="flex flex-col justify-center gap-4">
              {items.map((it) => {
                const Cmp = it.icon;
                const inner = (
                  <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition-colors hover:border-accent/40">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                      <Cmp size={18} />
                    </span>
                    <div>
                      <div className="text-2xs uppercase tracking-wide text-chalk-dim">
                        {it.label}
                      </div>
                      <div className="text-sm text-chalk">{it.value}</div>
                    </div>
                  </div>
                );
                return (
                  <Reveal key={it.label} delay={0.1}>
                    {it.href ? <a href={it.href}>{inner}</a> : inner}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

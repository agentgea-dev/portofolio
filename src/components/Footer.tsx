import { nav, profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative z-[2] border-t border-white/[0.05] py-10">
      <div className="container-px flex flex-col items-center justify-between gap-6 md:flex-row">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-grad font-display text-xs font-extrabold text-white">
            {profile.firstName[0]}
            {profile.lastName[0]}
          </span>
          <span className="font-display text-sm font-bold uppercase tracking-widest text-chalk">
            {profile.firstName} {profile.lastName}
          </span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-xs text-chalk-muted hover:text-white">
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-chalk-dim">
          © {profile.firstName} {profile.lastName}. Built with Next.js &amp; Three.js.
        </p>
      </div>
    </footer>
  );
}

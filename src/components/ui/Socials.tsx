import { socials } from "@/data/content";
import Icon from "./Icon";

export default function Socials({
  className = "",
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={s.label}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-chalk-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:text-white hover:shadow-glow"
        >
          <Icon name={s.icon} size={size} />
        </a>
      ))}
    </div>
  );
}

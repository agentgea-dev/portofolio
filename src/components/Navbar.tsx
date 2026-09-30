"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, profile } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy — highlight the section currently in view
  useEffect(() => {
    const ids = nav.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-ink/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-[72px]">
        {/* Left — nav links (exactly like the reference) */}
        <ul className="hidden items-center gap-9 md:flex">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link ${active === id ? "nav-link--active" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Brand on mobile only (since the reference is desktop) */}
        <span className="font-display text-sm font-bold uppercase tracking-widest text-chalk md:hidden">
          {profile.firstName}
          <span className="text-accent">.</span>
        </span>

        {/* Right — phone number with icon */}
        <a
          href={`tel:${profile.phone.replace(/\s/g, "")}`}
          className="hidden items-center gap-2 text-sm text-chalk-muted transition-colors hover:text-white md:flex"
        >
          <Phone size={14} className="text-accent" />
          {profile.phone}
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-chalk md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-white/[0.06] bg-ink/95 backdrop-blur-xl md:hidden">
          <ul className="container-px flex flex-col py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-chalk-muted hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-2 py-2 text-sm text-chalk-muted">
              <Phone size={14} className="text-accent" />
              {profile.phone}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

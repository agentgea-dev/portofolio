import { profile, projects as fallbackProjects } from "@/data/content";

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  href: string;
  accent: string;
  /** Live deployed URL (repo homepage) — rendered as a website preview when present. */
  preview?: string | null;
};

// Gradient tiles cycled across cards (same palette as the static fallbacks).
const ACCENTS = [
  "from-cyan-400/20 to-blue-600/20",
  "from-violet-400/20 to-fuchsia-600/20",
  "from-emerald-400/20 to-teal-600/20",
  "from-amber-400/20 to-orange-600/20",
  "from-sky-400/20 to-indigo-600/20",
  "from-rose-400/20 to-pink-600/20",
];

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  pushed_at: string;
};

function titleize(name: string): string {
  return name
    .replace(/[-_]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => (w.length <= 3 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
    .join(" ");
}

/**
 * Pull the owner's public repos tagged `portfolio` and map them to project cards.
 * Falls back to the curated static projects if GitHub is unreachable or none are tagged.
 * Revalidates hourly (ISR) so newly-published factory repos appear without a rebuild.
 */
export async function getGithubProjects(): Promise<Project[]> {
  const user = profile.github?.trim();
  if (!user) return fallbackProjects as Project[];
  try {
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?sort=pushed&per_page=100`,
      { headers: { Accept: "application/vnd.github+json" }, next: { revalidate: 3600 } },
    );
    if (!res.ok) return fallbackProjects as Project[];
    const repos = (await res.json()) as Repo[];
    const picked = repos
      .filter((r) => (r.topics ?? []).includes("portfolio") && !r.fork && !r.archived)
      .sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at));
    if (!picked.length) return fallbackProjects as Project[];
    return picked.map((r, i) => {
      const topics = (r.topics ?? []).filter((t) => t !== "portfolio");
      const tags = [r.language, ...topics].filter(Boolean).slice(0, 4) as string[];
      return {
        title: titleize(r.name),
        category: r.language || topics[0] || "Project",
        description: r.description || "Open-source project — see the repo.",
        tags,
        href: r.homepage || r.html_url,
        accent: ACCENTS[i % ACCENTS.length],
        preview: r.homepage || null,
      };
    });
  } catch {
    return fallbackProjects as Project[];
  }
}

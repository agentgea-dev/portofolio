import type { Config } from "tailwindcss";

/**
 * Design tokens reverse-engineered from the reference (Jason Martin dark portfolio):
 * near-black panels, white display type, single azure/cyan accent used for links,
 * timeline dots and underlines. Kept intentionally restrained.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Base surfaces — layered near-blacks
        ink: {
          DEFAULT: "#0a0b0d", // page background
          900: "#0a0b0d",
          800: "#0f1114", // panel
          700: "#15181d", // card
          600: "#1c2026", // elevated / border-ish
          500: "#262b32",
        },
        // Text
        chalk: {
          DEFAULT: "#f5f7fa",
          muted: "#aab1bb",
          // #6b7280 measured ~3.7:1 on card surfaces — below WCAG AA (4.5:1) at the
          // 11-13px sizes this token is used at. #7c8493 clears 4.7:1 on cards / 5.2:1
          // on the page background while staying visually dimmer than chalk-muted.
          dim: "#7c8493",
        },
        // Single brand accent (azure -> cyan), matching the reference dots/links
        accent: {
          DEFAULT: "#2ea9e4",
          400: "#38bdf8",
          500: "#2ea9e4",
          600: "#1c84c6",
          cyan: "#22d3ee",
          deep: "#2563eb",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      // One extra step below Tailwind's `xs` (12px) for micro-labels/badges —
      // replaces scattered one-off text-[11px]/[12px]/[13px]/[15px] arbitrary values.
      fontSize: {
        "2xs": "0.6875rem", // 11px
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(46,169,228,0.45)",
        card: "0 20px 50px -20px rgba(0,0,0,0.7)",
      },
      backgroundImage: {
        "accent-grad": "linear-gradient(135deg, #22d3ee 0%, #2ea9e4 45%, #2563eb 100%)",
        "panel-grad": "linear-gradient(160deg, #15181d 0%, #0f1114 100%)",
        "radial-glow": "radial-gradient(60% 60% at 50% 40%, rgba(46,169,228,0.18) 0%, rgba(10,11,13,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(46,169,228,0.5)" },
          "100%": { boxShadow: "0 0 0 14px rgba(46,169,228,0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

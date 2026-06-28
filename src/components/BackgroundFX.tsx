/**
 * Global low-opacity background asset layer.
 * Sits behind all content (z-0); content lives at z-[2]+, so this never
 * touches legibility. Two stacked assets: a blueprint grid and film grain,
 * both masked to fade out so they read as "atmosphere", not a pattern.
 */
export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Blueprint grid — faded toward the edges with a radial mask */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url(/bg/grid.svg)",
          backgroundSize: "64px 64px",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 50% 30%, #000 0%, transparent 78%)",
          maskImage: "radial-gradient(120% 90% at 50% 30%, #000 0%, transparent 78%)",
        }}
      />

      {/* Film grain — very subtle, breaks up the flat black */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-screen"
        style={{
          backgroundImage: "url(/bg/noise.svg)",
          backgroundSize: "300px 300px",
        }}
      />

      {/* Soft accent glow blooms, anchored to corners */}
      <div className="absolute -left-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-accent/[0.06] blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent-deep/[0.06] blur-[150px]" />
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Slider-style proficiency bar with a draggable-looking knob, like the reference. */
export default function SkillBar({ name, level }: { name: string; level: number }) {
  const reduce = useReducedMotion();

  return (
    <div className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-chalk">{name}</span>
        <span className="text-2xs tabular-nums text-chalk-dim">{level}%</span>
      </div>
      <div className="relative h-[3px] w-full rounded-full bg-white/10">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-accent-grad"
          initial={reduce ? { width: `${level}%` } : { width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* knob */}
          <span className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-accent bg-ink shadow-glow" />
        </motion.div>
      </div>
    </div>
  );
}

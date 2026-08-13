"use client";

import { motion } from "framer-motion";

const colors = {
  orange: {
    bar: "border-[#eac6b2] bg-[#f4e0d6]",
    hoverBar: "hover:border-[#c2410c] hover:bg-[#c2410c]",
    dot: "bg-[#c2410c]",
  },
  green: {
    bar: "border-[#b9d2b3] bg-[#d4e4d0]",
    hoverBar: "hover:border-[#15803d] hover:bg-[#15803d]",
    dot: "bg-[#15803d]",
  },
  teal: {
    bar: "border-[#aecbd4] bg-[#cfe2e7]",
    hoverBar: "hover:border-[#0e7490] hover:bg-[#0e7490]",
    dot: "bg-[#0e7490]",
  },
  blue: {
    bar: "border-[#b3c3e0] bg-[#cfd9ec]",
    hoverBar: "hover:border-[#1d4ed8] hover:bg-[#1d4ed8]",
    dot: "bg-[#1d4ed8]",
  },
};

export default function TaskBar({ task, totalWeeks, index }) {
  const c = colors[task.color] || colors.green;
  const left = ((task.start - 1) / totalWeeks) * 100;
  const width = ((task.end - task.start + 1) / totalWeeks) * 100;
  const nearRight = task.start > totalWeeks - 3;

  return (
    <div className="relative h-9 sm:h-10">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: `${width}%`, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        style={{ left: `${left}%` }}
        className="group absolute inset-y-0.5 sm:inset-y-1"
      >
        {/* Tooltip — bar ke upar (compact) */}
        <div
          className={`pointer-events-none absolute bottom-full z-20 mb-2 w-max max-w-[220px] translate-y-1 rounded-lg bg-zinc-900 px-3 py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 ${nearRight ? "right-2" : "left-3"}`}
        >
          <p className="text-xs leading-snug text-white">{task.note}</p>
          <span
            className={`absolute top-full -mt-1 h-2.5 w-2.5 rotate-45 bg-zinc-900 ${nearRight ? "right-4" : "left-4"}`}
          />
        </div>

        {/* Bar (compact) */}
        <div
          className={`flex h-full items-center justify-between overflow-hidden rounded-full border px-3 transition-colors duration-300 sm:px-4 ${c.bar} ${c.hoverBar}`}
        >
          <span className="truncate text-xs font-semibold text-zinc-800 transition-colors duration-300 group-hover:text-white sm:text-[13px]">
            {task.name}
          </span>
          <span
            className={`ml-2 h-2 w-2 shrink-0 rounded-full transition-colors duration-300 group-hover:bg-white ${c.dot}`}
          />
        </div>
      </motion.div>
    </div>
  );
}
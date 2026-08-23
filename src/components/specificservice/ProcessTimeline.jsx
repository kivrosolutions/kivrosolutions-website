"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BASE = 0.2;
const STEP = 0.6;

const STEPS = [
  {
    week: "Week 1",
    title: "Scope, Design & Architecture",
    description:
      "Define the MVP scope ruthlessly — the 3–5 features that make it viable — then design the UX, set the architecture, and stand up infrastructure in parallel.",
    color: "#c2410c",
    badgeBg: "#f4e0d6",
  },
  {
    week: "Week 2–3",
    title: "Core Build Sprint",
    description:
      "AI-accelerated development of the core features. You see working builds daily; feedback loops are measured in hours, not weeks.",
    color: "#15803d",
    badgeBg: "#d9e7d6",
  },
  {
    week: "Week 4–5",
    title: "Integration, Polish & QA",
    description:
      "Connect the pieces — third-party integrations, payments, email, analytics — then QA and performance-test across devices.",
    color: "#0e7490",
    badgeBg: "#cfe2e7",
  },
  {
    week: "Final Weeks",
    title: "Launch & Handoff",
    description:
      "Deploy to production, set up monitoring and alerting, and hand off complete docs and code. Ready for real users, not a beta test.",
    color: "#1d4ed8",
    badgeBg: "#cfd9ec",
  },
];

export default function ProcessTimeline({ steps = STEPS }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative">
      {/* Desktop connector — chote circles ke center pe (20px) */}
      <div
        className="absolute left-[12.5%] right-[12.5%] top-[19px] hidden md:flex"
        aria-hidden="true"
      >
        {steps.slice(0, -1).map((step, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: BASE + i * STEP + 0.25 }}
            className="h-[2px] flex-1 origin-left"
            style={{
              background: `linear-gradient(to right, ${step.color}, ${steps[i + 1].color})`,
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4">
        {steps.map((step, i) => (
          <div key={step.title} className="relative z-10 flex flex-col items-center text-center">
            {/* Number circle — compact pop */}
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: BASE + i * STEP }}
              className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-md"
              style={{ backgroundColor: step.color }}
            >
              {i + 1}
            </motion.span>

            {/* Badge + text — compact fade up */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: BASE + i * STEP + 0.3 }}
              className="flex flex-col items-center"
            >
              <span
                className="mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ backgroundColor: step.badgeBg, color: step.color }}
              >
                <span
                  className="h-1 w-1 rounded-full"
                  style={{ backgroundColor: step.color }}
                />
                {step.week}
              </span>

              <h3 className="mt-3 text-base font-bold tracking-tight text-zinc-900 sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500 sm:text-[13px]">
                {step.description}
              </p>
            </motion.div>

            {/* Mobile vertical connector */}
            {i < steps.length - 1 && (
              <motion.span
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.4, ease: "easeOut", delay: BASE + i * STEP + 0.45 }}
                className="mt-6 h-8 w-[2px] origin-top rounded-full md:hidden"
                style={{
                  background: `linear-gradient(to bottom, ${step.color}, ${steps[i + 1].color})`,
                }}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
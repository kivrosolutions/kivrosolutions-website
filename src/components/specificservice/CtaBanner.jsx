"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaBanner({
  badge = "Booking design sprints · 2 slots open",
  line1 = "Stop guessing what users want.",
  line2 = "Start with",
  line2Accent = "a design that proves it.",
  description = "Tell us the product and where it's stuck. We'll come back inside two business days with a read on fit and the first thing worth designing — no slide decks, no proposal theater.",
  cta = { label: "Book a discovery call", href: "/contact" },
  primary = "#0137a2",
  primaryLight = "#5b8cff",
  badgeClass = "bg-[#15803d]",
}) {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#171310] px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
      >
        {/* Dot grid — pure CSS */}
        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* Decorative outlines (compact) */}
        <div className="pointer-events-none absolute -top-6 right-[20%] h-20 w-16 rotate-12 rounded-2xl border border-white/10" />
        <div className="pointer-events-none absolute -bottom-10 left-[6%] h-32 w-32 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-4 left-[11%] h-16 w-16 rounded-full border border-white/10" />
        <svg
          className="pointer-events-none absolute left-[7%] top-6 h-4 w-4 text-white/20"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        <div className="pointer-events-none absolute bottom-4 right-[8%] h-1 w-1 rounded-full bg-white/25" />

        {/* Right-side glow */}
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-16 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full blur-2xl"
          style={{ background: `radial-gradient(circle, ${primary}99 0%, transparent 65%)` }}
        />

        {/* Content */}
        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-lg">
            {/* Badge */}
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-white ${badgeClass}`}>
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2c1 5 4 8 9 10-5 2-8 5-9 10-1-5-4-8-9-10 5-2 8-5 9-10z" />
              </svg>
              {badge}
            </span>

            {/* Headline */}
            <h2 className="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-[1.75rem] lg:leading-[1.2]">
              {line1}
              <br />
              {line2}{" "}
              <span style={{ color: primaryLight }}>{line2Accent}</span>
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-md text-[13px] leading-relaxed text-zinc-400 sm:text-sm">
              {description}
            </p>
          </div>

          {/* CTA button */}
          <div className="relative shrink-0">
            <Link
              href={cta.href}
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 sm:text-[13px]"
              style={{ backgroundColor: primary }}
            >
              {cta.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
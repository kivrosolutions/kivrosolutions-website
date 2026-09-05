"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ShowcaseCard from "./ShowcaseCard";
import { withBasePath } from "@/lib/paths";

/* Cards ka data — positions vw/vh mein hain taake responsive rahein */
const CARDS = [
  { src: withBasePath("/images/image.png"), alt: "Team collaborating around a laptop", x: [-5, -38], y: [12, -20], rotate: [5, -8] },
  { src: withBasePath("/images/image.png"), alt: "Designer sketching wireframes", x: [5, 38], y: [10, -20], rotate: [-5, 8] },
  { src: withBasePath("/images/image.png"), alt: "Code editor on a dark screen", x: [-4, -38], y: [18, 20], rotate: [4, -7] },
  { src: withBasePath("/images/image.png"), alt: "Sticky notes on a planning board", x: [4, 38], y: [16, 20], rotate: [-4, 7] },
];

export default function AboutShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  /* Text pehle appear hota hai aur zyada der dikhta hai */
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.85, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.3, 0.5], [40, 0]);

  return (
    <section ref={ref} className="relative h-[280vh]">
      {/* Sticky stage */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Scattered cards */}
        {CARDS.map((card, index) => (
          <ShowcaseCard key={index} card={card} progress={scrollYProgress} />
        ))}

        {/* Center text */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 max-w-3xl px-6 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b7a5f7]">
            About us
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl">
            A studio built to turn ideas into{" "}
            <span className="text-[#0137a2]">shipped products</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-zinc-500 sm:text-lg">
            Strategy, design, and engineering under one roof &ndash; moving at
            startup speed, with the craft of a senior team.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

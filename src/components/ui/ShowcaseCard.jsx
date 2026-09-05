"use client";

import { motion, useTransform } from "framer-motion";
import Image from "next/image";

export default function ShowcaseCard({ card, progress }) {
  const x = useTransform(progress, [0, 0.6], [`${card.x[0]}vw`, `${card.x[1]}vw`]);
  const y = useTransform(progress, [0, 0.6], [`${card.y[0]}vh`, `${card.y[1]}vh`]);
  const rotate = useTransform(progress, [0, 0.6], card.rotate);

  return (
    <motion.div
      style={{ x, y, rotate }}
      className="pointer-events-none absolute inset-0 m-auto h-40 w-28 overflow-hidden rounded-2xl border-1 border-[#0137a2]/30 bg-zinc-950 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] sm:h-52 sm:w-36 md:h-64 md:w-48"
    >
      <Image
        src={card.src}
        alt={card.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 176px, 288px"
      />
    </motion.div>
  );
}

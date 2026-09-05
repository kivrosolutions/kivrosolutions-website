"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiVercel,
  SiGit,
} from "react-icons/si";

const iconMap = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiVercel,
  SiGit,
};

const TechStackMarquee = ({
  technologies,
  title = "Powered by Modern Tech",
  subtitle = "The tools we use to build scalable solutions.",
}) => {
  // We duplicate the array to create a seamless infinite loop
  // [A, B, C] becomes [A, B, C, A, B, C]
  const loopedTechnologies = [...technologies, ...technologies];

  return (
    <section className="w-full overflow-hidden bg-white py-10">
      <div className="mx-auto mb-6 max-w-7xl px-4 text-center">
        <h2 className="mb-1 text-xl font-bold text-zinc-900">{title}</h2>
        <p className="text-xs text-zinc-500">{subtitle}</p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Left Fade Mask (Gradient to hide the hard edge) */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />

        {/* Right Fade Mask */}
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

        {/* Moving Track */}
        <motion.div
          className="flex w-max gap-4"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopedTechnologies.map((tech, index) => (
            <TechCard key={index} tech={tech} iconMap={iconMap} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TechCard = ({ tech, iconMap }) => {
  const IconComponent = iconMap[tech.icon];

  return (
    <div className="group flex h-[100px] min-w-[100px] flex-col items-center justify-center rounded-xl border border-zinc-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0137a2]/30 hover:shadow-md">
      <div className="mb-2 text-2xl text-zinc-700 transition-colors duration-300 group-hover:text-[#0137a2]">
        {IconComponent && <IconComponent />}
      </div>
      <span className="text-[11px] font-medium text-zinc-500 transition-colors group-hover:text-zinc-900">
        {tech.name}
      </span>
    </div>
  );
};

export default TechStackMarquee;

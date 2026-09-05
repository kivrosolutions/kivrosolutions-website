"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const FitComparisonSection = ({
  goodFit = [
    "You know which problem you're solving, from our audit or your own analysis",
    "You have inquiry, order, call, or paperwork volume worth automating",
    "Someone internally owns the rollout and can approve scripts",
    "You can give us API access to the systems the AI must work in",
    "You want production, not a pilot",
  ],
  notFit = [
    "You're still deciding whether AI is worth it. Start with the Opportunity Call",
    "You want the cheapest possible chatbot",
    "Your workflows are undocumented and nobody can describe them",
    "You need it live next week",
  ],
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="w-full bg-white px-4 py-10 md:px-8">
      <div className="container-custom grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Card 1: A Good Fit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex h-full flex-col rounded-2xl border border-[#0137a2]/20 bg-white p-5 shadow-sm md:p-6"
        >
          <h3 className="mb-4 text-xs font-bold tracking-widest text-[#0137a2] uppercase">
            A Good Fit
          </h3>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {goodFit.map((point, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 text-xs leading-relaxed text-zinc-700 md:text-sm"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0137a2]" strokeWidth={2.5} />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Card 2: Not a Fit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm md:p-6"
        >
          <h3 className="mb-4 text-xs font-bold tracking-widest text-zinc-500 uppercase">
            Not a Fit
          </h3>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {notFit.map((point, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 text-xs leading-relaxed text-zinc-500 md:text-sm"
              >
                <X className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" strokeWidth={2.5} />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default FitComparisonSection;

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

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
    <section className="w-full bg-[#0a0a0a] py-20 px-4 md:px-8">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Card 1: A Good Fit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-orange-900/40 bg-[#111111] rounded-2xl p-8 md:p-10 flex flex-col h-full"
        >
          <h3 className="text-orange-500 font-bold tracking-widest text-sm mb-8 uppercase">
            A Good Fit
          </h3>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {goodFit.map((point, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 text-gray-300 text-sm md:text-base leading-relaxed"
              >
                <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" strokeWidth={2.5} />
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
          className="border border-gray-800 bg-[#111111] rounded-2xl p-8 md:p-10 flex flex-col h-full"
        >
          <h3 className="text-gray-500 font-bold tracking-widest text-sm mb-8 uppercase">
            Not a Fit
          </h3>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {notFit.map((point, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 text-gray-400 text-sm md:text-base leading-relaxed"
              >
                <X className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" strokeWidth={2.5} />
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

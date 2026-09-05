import React from "react";
import { motion } from "framer-motion";

const PricingSection = () => {
  // Data for the three cards
  const pricingSteps = [
    {
      id: 1,
      title: "The AI Audit",
      priceDetails: "$3,000 · 14 days · credited to the build",
      description:
        "Two weeks of an AI engineer inside your business, mapping which roles pay for themselves fastest. You keep the plan either way.",
    },
    {
      id: 2,
      title: "The build",
      priceDetails: "From $15,000 · first role live in ~4 weeks",
      description:
        "The highest-payback employee first, wired into your real stack, launched supervised. Fixed scope, fixed price.",
    },
    {
      id: 3,
      title: "Run and optimize",
      priceDetails: "Monthly · scoped to what we run",
      description:
        "We watch the numbers, tune the systems, and add the next role when the math says go. You see the dashboards we see.",
    },
  ];

  return (
    <section className="flex w-full justify-center bg-[#050505] px-4 py-20 md:px-8">
      {/* Main Container with Border */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-7xl rounded-3xl border border-gray-800 bg-[#111111] p-8 md:p-16"
      >
        {/* Header Section */}
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl">
            What it costs.
          </h2>
          <p className="text-lg leading-relaxed text-gray-400">
            Priced as a build, not headcount. You own the system when it's done, and there is no
            per-seat meter running.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
              className="flex h-full flex-col rounded-2xl border border-gray-800/50 bg-[#0a0a0a] p-8 transition-colors duration-300 hover:border-gray-700"
            >
              {/* Card Title */}
              <h3 className="mb-3 text-xl font-bold text-white">
                {step.id}. {step.title}
              </h3>

              {/* Price/Details Line */}
              <p className="mb-6 text-sm font-semibold text-white">{step.priceDetails}</p>

              {/* Description */}
              <p className="mt-auto text-sm leading-relaxed text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;

"use client";

import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ end, prefix = "", suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default function HeroStatsSection() {
  const stats = [
    { value: 1, prefix: "$", suffix: "M+", label: "Client Work Delivered" },
    { value: 100, prefix: "", suffix: "%", label: "Job Success Score" },
    { value: 3, prefix: "", suffix: "", label: "Companies Run on Our AI" },
    { value: 8, prefix: "", suffix: "+", label: "Years Shipping Software" },
  ];

  return (
    <section className="bg-[#f6f7fb]">
      <div className="container-custom py-16 lg:py-24">
        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-[#0b1b3f] sm:text-5xl lg:text-6xl max-w-xl leading-tight">
          The Engineers Who Make Businesses AI-Native
        </h1>

        {/* Paragraph */}
        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg mb-16">
          Kivro Solution is a product engineering firm focused on AI integration.
          We embed an AI engineer with your team, find exactly where AI pays for
          itself, and build the AI employees that carry the work. We ran the
          method on our own companies before we ever sold it.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-between gap-10 border-b border-zinc-300 pb-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex-1 min-w-[180px]">
              <div className="text-5xl font-bold tracking-tight text-[#0b1b3f] mb-3">
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2000}
                />
              </div>
              <div className="text-base text-zinc-500 font-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect, useRef } from "react";
import {
  CalendarClock,
  Repeat,
  MessageSquareText,
  Gauge,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const ROTATION_DURATION = 5000;

const cadenceSteps = [
  {
    icon: CalendarClock,
    title: "A Week, Not a Promise",
    subtitle: "Weekly Sprint Rhythm",
    description:
      "Every sprint lands on a fixed week. Monday we pull the work, Friday we ship it. No drifting timelines, no ambiguous 'next week' — the week itself is the unit of progress.",
    image: "/images/cadence/A-Week.jpeg",
    accent: "#60a5fa",
  },
  {
    icon: Repeat,
    title: "Short Loops, Real Feedback",
    subtitle: "Build-Measure-Learn Cycles",
    description:
      "We keep each loop short enough to stay honest. Build, put it in front of you, measure, adjust. Cadence is how we turn 'working software' into 'working software that fits.'",
    image: "/images/cadence/Short-Loops.jpeg",
    accent: "#4ade80",
  },
  {
    icon: MessageSquareText,
    title: "A Standing Weekly Review",
    subtitle: "Demo, Decide, Adjust",
    description:
      "Every week ends with a live demo and a decision. You see exactly what shipped, we re-prioritize together, and nothing waits two months to surprise you.",
    image: "/images/cadence/A-Standing.jpeg",
    accent: "#f472b6",
  },
  {
    icon: Gauge,
    title: "Momentum You Can Measure",
    subtitle: "Visible Pace & Velocity",
    description:
      "Progress is tracked, not assumed. Velocity, blockers, and shipped scope are visible every week, so cadence becomes a habit both sides can feel — not a calendar relic.",
    image: "/images/cadence/Momentum.jpeg",
    accent: "#c084fc",
  },
];

export default function CadenceInteractive() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageError, setImageError] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    if (isTransitioning) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / ROTATION_DURATION) * 100, 100);
      setProgress(newProgress);

      if (elapsed < ROTATION_DURATION) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % cadenceSteps.length);
          setProgress(0);
          setIsTransitioning(false);
          setImageError(false);
        }, 300);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeIndex, isTransitioning]);

  const handleItemClick = (index) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setProgress(0);
      setIsTransitioning(false);
      setImageError(false);
    }, 300);
  };

  const activeStep = cadenceSteps[activeIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section className="relative overflow-hidden bg-[#0b1b3f] py-16 text-white lg:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(1, 55, 162, 0.18) 0%, transparent 50%)",
        }}
      />

      <div className="container-custom relative">
        <div className="mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#60a5fa]/15 px-4 py-2 text-xs font-semibold text-white">
            <Sparkles className="h-3.5 w-3.5" />
            How We Work · Cadence
          </span>

          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
            How Kivro Keeps{" "}
            <span className="text-[#60a5fa]">Every Week Shipping</span>
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Left — Steps list */}
          <div>
            <div className="flex flex-col">
              {cadenceSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    onClick={() => handleItemClick(index)}
                    className={`relative cursor-pointer border-b border-white/10 py-6 pl-8 pr-2 transition-all duration-300 hover:pl-10 ${
                      isTransitioning && isActive ? "opacity-50" : "opacity-100"
                    }`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleItemClick(index);
                      }
                    }}
                  >
                    {/* Dot */}
                    <span
                      className={`absolute left-0 top-7 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? "border-[#60a5fa] bg-[#60a5fa]"
                          : "border-white/30 bg-transparent"
                      }`}
                      style={{
                        boxShadow: isActive
                          ? "0 0 15px rgba(96, 165, 250, 0.6)"
                          : "none",
                      }}
                    />

                    {/* Icon + subtitle */}
                    <div className="mb-2 flex items-center gap-3">
                      <Icon
                        size={20}
                        className={`transition-colors duration-300 ${
                          isActive ? "text-[#60a5fa]" : "text-white/40"
                        }`}
                      />
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                          isActive ? "text-[#60a5fa]" : "text-white/40"
                        }`}
                      >
                        {step.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold leading-tight tracking-tight transition-colors duration-300 sm:text-2xl ${
                        isActive ? "text-white" : "text-white/50"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Visual + description */}
          <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            {/* Visual with Fallback */}
            <div className="relative mb-6 flex overflow-hidden rounded-xl border border-white/10 bg-black/30">
              {imageError ? (
                <div
                  className="flex h-[300px] w-full items-center justify-center sm:h-[320px]"
                  style={{ backgroundColor: `${activeStep.accent}20` }}
                >
                  <ActiveIcon
                    className="h-20 w-20"
                    style={{ color: activeStep.accent }}
                    strokeWidth={1.5}
                  />
                </div>
              ) : (
                <img
                  key={activeIndex}
                  src={activeStep.image}
                  alt={activeStep.title}
                  className="h-[300px] w-full object-cover sm:h-[320px]"
                  style={{
                    animation: isTransitioning ? "fadeScale 0.4s ease" : "none",
                  }}
                  onError={() => setImageError(true)}
                />
              )}

              {/* Floating icon badge */}
              <span
                className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-[#0b1b3f] shadow-xl"
                style={{
                  backgroundColor: activeStep.accent,
                  boxShadow: `0 10px 30px ${activeStep.accent}60`,
                }}
              >
                <ActiveIcon className="h-7 w-7 text-white" strokeWidth={2} />
              </span>
            </div>

            {/* Description */}
            <div>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
                {activeStep.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/70 sm:text-[15px]">
                {activeStep.description}
              </p>
            </div>

            {/* Step labels */}
            <div className="mt-3 flex items-center justify-between text-xs font-medium text-white/50">
              <span>
                Step {activeIndex + 1} of {cadenceSteps.length}
              </span>
              <span>
                Auto-advances in{" "}
                {Math.max(
                  0,
                  Math.ceil(
                    (ROTATION_DURATION -
                      (progress / 100) * ROTATION_DURATION) /
                      1000
                  )
                )}
                s
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex">
              {["M", "T", "W", "T", "F"].map((letter, i) => (
                <span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0b1b3f] text-sm font-bold text-white"
                  style={{
                    backgroundColor: [
                      "#60a5fa",
                      "#4ade80",
                      "#f472b6",
                      "#c084fc",
                      "#fbbf24",
                    ][i],
                    marginLeft: i > 0 ? "-10px" : "0",
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>

            <p className="max-w-md text-sm leading-relaxed text-white/80">
              A steady cadence turns scattered effort into a rhythm you can
              count on — shipping week after week, sprint after sprint.
            </p>
          </div>

          <button
            className="inline-flex shrink-0 cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-lg bg-[#60a5fa] px-7 py-3.5 text-[13px] font-bold tracking-wide uppercase text-[#0b1b3f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Book a Strategy Call
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}

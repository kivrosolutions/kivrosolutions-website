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
    { value: 197, prefix: "$", suffix: "+", label: "Client Work Delivered" },
    { value: 100, prefix: "", suffix: "%", label: "Job Success Score" },
    { value: 3, prefix: "", suffix: "", label: "Companies Run on Our AI" },
    { value: 8, prefix: "", suffix: "+", label: "Years Shipping Software" },
  ];

  // 5 Decorative balls with random positions
  const decorativeBalls = [
    {
      position: "top-10 right-16",
      size: "w-3 h-3",
      opacity: "opacity-30",
      animation: "dotFloat1 6s ease-in-out infinite",
    },
    {
      position: "bottom-24 right-8",
      size: "w-2 h-2",
      opacity: "opacity-20",
      animation: "dotFloat2 7s ease-in-out infinite",
    },
    {
      position: "top-20 left-10",
      size: "w-4 h-4",
      opacity: "opacity-25",
      animation: "dotFloat3 8s ease-in-out infinite",
    },
    {
      position: "bottom-10 left-20",
      size: "w-2 h-2",
      opacity: "opacity-30",
      animation: "dotFloat1 5s ease-in-out infinite",
    },
    {
      position: "top-1/2 right-0",
      size: "w-3 h-3",
      opacity: "opacity-20",
      animation: "dotFloat2 9s ease-in-out infinite",
    },
  ];

  return (
    <section className="bg-[#f6f7fb]">
      <div className="container-custom py-16 lg:py-24">
        {/* Two Column Layout: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-[#0b1b3f] sm:text-5xl lg:text-6xl leading-tight">
              The Engineers Who Make Businesses AI-Native
            </h1>

            <p className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
              KivroSolutions is a product engineering firm focused on AI integration.
              We embed an AI engineer with your team, find exactly where AI pays for
              itself, and build the AI employees that carry the work. We ran the
              method on our own companies before we ever sold it.
            </p>
          </div>

          {/* Right Column - Floating Ball */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            {/* Ball with Smooth Continuous Float Animation */}
            <div
              className="relative"
              style={{
                animation: "ballFloat 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            >
              {/* Ball Image - No Background */}
              <img
                src="/images/ball-about-hero.png"
                alt="AI Ball"
                className="w-full h-auto object-contain"
                style={{
                  maxWidth: "450px",
                  filter: "drop-shadow(0 30px 60px rgba(1, 55, 162, 0.25))",
                }}
              />

              {/* Glow Effect Behind Ball */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full -z-10"
                style={{
                  background: "radial-gradient(circle, rgba(1, 55, 162, 0.15) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  animation: "glowPulse 6s ease-in-out infinite",
                }}
              />
            </div>

            {/* Floating AI Badge */}
            <div
              className="absolute bottom-0 left-0 bg-white rounded-xl shadow-lg px-4 py-3 hidden lg:flex items-center gap-3"
              style={{
                animation: "badgeFloat 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            >
              <div className="w-10 h-10 bg-[#0137a2] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div>
                <div className="text-sm font-bold text-[#0b1b3f] leading-tight">AI-Powered</div>
                <div className="text-xs text-zinc-500 leading-tight">Solutions</div>
              </div>
            </div>

            {/* 5 Decorative Balls */}
            {decorativeBalls.map((ball, index) => (
              <div
                key={index}
                className={`absolute ${ball.position} ${ball.size} rounded-full bg-[#0137a2] ${ball.opacity} hidden lg:block`}
                style={{
                  animation: ball.animation,
                }}
              />
            ))}
          </div>
        </div>

        {/* Stats Row - Full Width */}
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

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes ballFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-18px) rotate(1.5deg);
          }
          50% {
            transform: translateY(-28px) rotate(0deg);
          }
          75% {
            transform: translateY(-18px) rotate(-1.5deg);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes badgeFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes dotFloat1 {
          0%, 100% {
            transform: translate(0px, 0px);
          }
          33% {
            transform: translate(8px, -12px);
          }
          66% {
            transform: translate(-5px, -8px);
          }
        }

        @keyframes dotFloat2 {
          0%, 100% {
            transform: translate(0px, 0px);
          }
          33% {
            transform: translate(-10px, -15px);
          }
          66% {
            transform: translate(6px, -10px);
          }
        }

        @keyframes dotFloat3 {
          0%, 100% {
            transform: translate(0px, 0px);
          }
          33% {
            transform: translate(12px, -10px);
          }
          66% {
            transform: translate(-8px, -14px);
          }
        }
      `}</style>
    </section>
  );
}
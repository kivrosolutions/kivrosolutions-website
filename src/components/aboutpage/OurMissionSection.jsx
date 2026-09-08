"use client";

export default function OurMissionSection() {
  return (
    <section className="bg-white">
      <div className="container-custom py-16 lg:py-24">
        {/* Section Title */}
        <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase text-center">
          Mission
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1b3f] text-center sm:text-4xl mb-16">
          Our Mission
        </h2>

        {/* Two Column Layout */}
        <div className="flex flex-wrap gap-14 items-center">
          {/* Left Column - Text Content */}
          <div className="flex-1 min-w-[300px]">
            <h3 className="text-2xl font-bold text-[#0b1b3f] mb-6 leading-snug">
              The Repeatable Work Belongs to Systems
            </h3>

            <p className="text-base leading-relaxed text-zinc-600 mb-6">
              Our mission is to take the work that quietly eats a business: the
              inquiries answered hours late, the follow-ups nobody sends, the
              reports nobody has time to compile, and hand it to AI employees a
              team can actually trust. Every system ships with guardrails and a
              human approval gate, because &quot;almost right&quot; doesn&apos;t get to talk to
              your customers.
            </p>

            <p className="text-base leading-relaxed text-zinc-600">
              The result we aim for is simple: inquiries answered in seconds
              instead of hours, teams that open a morning brief instead of a
              blank page, and revenue that stops leaking through missed
              follow-ups. AI is how we do it. Your time and your booked revenue
              are why.
            </p>
          </div>

          {/* Right Column - Floating Rings Image */}
          <div className="flex-1 min-w-[300px] flex items-center justify-center">
            <div className="relative w-full max-w-[500px]">
              {/* Glow Effect Behind Rings */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full -z-10"
                style={{
                  background: "radial-gradient(circle, rgba(1, 55, 162, 0.12) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  animation: "glowPulse 4s ease-in-out infinite",
                }}
              />

              {/* Floating Rings Container - Up/Down Animation */}
              <div
                className="relative"
                style={{
                  animation: "ringsFloat 5s ease-in-out infinite",
                }}
              >
                <img
                  src="/images/our-mission.png"
                  alt="Floating AI Rings"
                  className="w-full h-auto object-contain"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(1, 55, 162, 0.2))",
                  }}
                />
              </div>

              {/* Decorative Floating Particles */}
              <div
                className="absolute top-5 right-10 w-2 h-2 rounded-full bg-[#0137a2] opacity-30"
                style={{ animation: "particleFloat1 5s ease-in-out infinite" }}
              />
              <div
                className="absolute bottom-10 left-5 w-3 h-3 rounded-full bg-[#0137a2] opacity-20"
                style={{ animation: "particleFloat2 6s ease-in-out infinite" }}
              />
              <div
                className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-[#0137a2] opacity-25"
                style={{ animation: "particleFloat3 7s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes ringsFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.9;
          }
        }

        @keyframes particleFloat1 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(10px, -15px) scale(1.3);
            opacity: 0.5;
          }
        }

        @keyframes particleFloat2 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(-12px, -10px) scale(1.4);
            opacity: 0.4;
          }
        }

        @keyframes particleFloat3 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
            opacity: 0.25;
          }
          50% {
            transform: translate(8px, 12px) scale(1.2);
            opacity: 0.45;
          }
        }
      `}</style>
    </section>
  );
}
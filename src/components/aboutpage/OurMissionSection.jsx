"use client";

export default function OurMissionSection() {
  return (
    <section className="bg-white">
      <div className="container-custom py-16 lg:py-24">
        {/* Section Title */}
        <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase text-center">Mission</p>
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

          {/* Right Column - Image */}
          <div className="flex-1 min-w-[300px]">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/team-working.jpg"
                alt="Team working together on AI solutions"
                className="w-full h-auto block rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
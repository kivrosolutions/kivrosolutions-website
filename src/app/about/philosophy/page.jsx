import Link from "next/link";
import { Compass, Users, Rocket, Flag, Check, X, Sparkles } from "lucide-react";
import PhilosophyInteractive from "@/components/aboutpage/PhilosophyInteractive";

export const metadata = {
  title: "Philosophy — How We Work | Kivro Solutions",
  description:
    "The principles behind every Kivro engagement: understand before you build, senior craft with zero handoffs, ship to learn, and own the outcome.",
};

const cardAccents = {
  orange: {
    iconBg: "bg-[#f4e0d6]",
    iconText: "text-[#c2410c]",
    hoverBorder: "hover:border-[#eac6b2]",
  },
  blue: {
    iconBg: "bg-[#dbeafe]",
    iconText: "text-[#0137a2]",
    hoverBorder: "hover:border-[#b3c3e0]",
  },
  green: {
    iconBg: "bg-[#d9e7d6]",
    iconText: "text-[#15803d]",
    hoverBorder: "hover:border-[#b9d2b3]",
  },
  purple: {
    iconBg: "bg-[#e9d5ff]",
    iconText: "text-[#9333ea]",
    hoverBorder: "hover:border-[#d8b4fe]",
  },
};

const principles = [
  {
    icon: Compass,
    accent: "orange",
    title: "Understand before you build",
    description:
      "We dig until the problem is concrete. Scope, constraints, and the real bottleneck get nailed down before a single line of code.",
  },
  {
    icon: Users,
    accent: "blue",
    title: "Senior craft, zero handoffs",
    description:
      "The people who scope your project are the ones who build it. No BDRs, no juniors, no surprise bench swaps.",
  },
  {
    icon: Rocket,
    accent: "green",
    title: "Ship to learn",
    description:
      "Working software in front of real users beats speculation every time. We move in data-driven sprints and let feedback steer.",
  },
  {
    icon: Flag,
    accent: "purple",
    title: "Own the outcome",
    description:
      "We co-own the result. Quality, timeline, and business impact are our problem — not just the ticket list.",
  },
];

const believe = [
  "Constraints are a design tool, not a blocker.",
  "The best products aren't built overnight — they're grown in data-driven sprints.",
  "\u201cAlmost right\u201d doesn't get to talk to your customers.",
  "Clarity beats cleverness in every decision.",
];

const refuse = [
  "Bill for discovery that evaporates into slide decks.",
  "Swap a senior for a junior when the project gets busy.",
  "Call it a launch without real metrics attached.",
  "Ship work we wouldn't put in front of our own clients.",
];

export default function PhilosophyPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-[#f6f7fb]">
        <div className="container-custom py-16 sm:py-20">
          <span className="inline-flex rounded-full bg-[#0137a2]/15 p-1.5">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0137a2] px-4 py-2 text-xs font-semibold text-white">
              <Sparkles className="h-3.5 w-3.5" />
              How we work Â· Philosophy
            </span>
          </span>

          <h1 className="mt-6 max-w-5xl text-3xl font-bold tracking-[-0.02em] text-zinc-900 sm:text-4xl md:text-5xl">
            The principles behind every engagement.
            <span className="block text-[#0137a2]">
              Everything we ship starts with a belief.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
            Philosophy isn&apos;t a poster on our wall — it&apos;s the filter for every
            decision we make: what we build, what we refuse to build, who we put
            on your team, and how we define &quot;done.&quot; It&apos;s why our clients keep
            shipping.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0137a2] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              See the work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors duration-300 hover:border-zinc-400"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 — Principles */}
      <section className="bg-white">
        <div className="container-custom py-16 lg:py-24">
          <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
            Principles
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Four beliefs. <span className="text-[#0137a2]">No exceptions.</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-500">
            Every project passes through the same set of principles — whether it&apos;s
            a two-week prototype or a two-year platform.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => {
              const a = cardAccents[p.accent];
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className={`group w-full rounded-2xl border border-zinc-200/80 bg-[#f7f7f6] p-5 transition-colors duration-300 ${a.hoverBorder}`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ease-out group-hover:rotate-12 ${a.iconBg} ${a.iconText}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-base font-bold tracking-tight text-zinc-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {p.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <PhilosophyInteractive />

      {/* Section 3 — Philosophy in practice */}
      <section className="relative overflow-hidden bg-[#f7f7f6]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(1, 55, 162, 0.05) 0%, transparent 50%)",
          }}
        />
        <div className="container-custom relative py-16 lg:py-24">
          <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
            In practice
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            What that looks like{" "}
            <span className="text-[#0137a2]">on an actual Monday.</span>
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* We believe */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#0137a2] sm:text-xl">
                We believe
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {believe.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#15803d]/30 bg-[#15803d]/10">
                      <Check className="h-3.5 w-3.5 text-[#15803d]" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-zinc-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* We refuse to */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#be123c] sm:text-xl">
                We refuse to
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {refuse.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#be123c]/30 bg-[#be123c]/10">
                      <X className="h-3.5 w-3.5 text-[#be123c]" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-zinc-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

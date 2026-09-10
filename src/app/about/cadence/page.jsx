import Link from "next/link";
import {
  CalendarClock,
  Repeat,
  GitMerge,
  BarChart3,
  Check,
  X,
  Sparkles,
  Hourglass,
} from "lucide-react";
import CadenceInteractive from "@/components/aboutpage/CadenceInteractive";

export const metadata = {
  title: "Cadence — How a Sprint Actually Runs | Kivro Solutions",
  description:
    "How Kivro ships with a repeatable working rhythm: weekly sprints, short build-measure-learn loops, standing reviews, and momentum you can measure.",
};

const cardAccents = {
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
  pink: {
    iconBg: "bg-[#fce7f3]",
    iconText: "text-[#be185d]",
    hoverBorder: "hover:border-[#fbcfe8]",
  },
  purple: {
    iconBg: "bg-[#e9d5ff]",
    iconText: "text-[#9333ea]",
    hoverBorder: "hover:border-[#d8b4fe]",
  },
};

const rhythms = [
  {
    icon: CalendarClock,
    accent: "blue",
    title: "Weekly sprints, fixed boundaries",
    description:
      "Each sprint is one week, start and end set in stone. Monday we commit, Friday we ship. Cadence, not chaos, drives the timeline.",
  },
  {
    icon: Repeat,
    accent: "green",
    title: "Short build-measure-learn loops",
    description:
      "Small cycles keep us honest. Build a slice, show it, measure, adjust. Feedback steers the next sprint instead of ambushing the release.",
  },
  {
    icon: GitMerge,
    accent: "pink",
    title: "A standing weekly review",
    description:
      "Every week closes with a live demo and a decision. You see exactly what shipped and we re-prioritize together — nothing hides until it's too late.",
  },
  {
    icon: BarChart3,
    accent: "purple",
    title: "Momentum you can measure",
    description:
      "Velocity, blockers, and shipped scope are tracked and visible. A steady rhythm becomes a habit both sides can feel — not a calendar relic.",
  },
];

const enabled = [
  "One fixed week per sprint — no drifting 'next week'.",
  "A live demo and a re-prioritization decision every Friday.",
  "Blocker surfaced the moment it appears, not at month-end.",
  "Velocity and shipped scope visible to you at all times.",
];

const disabled = [
  "Timelines that quietly slide without anyone noticing.",
  "Two-month surprise reveals after the work is 'done'.",
  "Momentum that lives in a deck instead of in shipped scope.",
  "A calendar that looks busy but never actually lands work.",
];

export default function CadencePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-[#f6f7fb]">
        <div className="container-custom py-16 sm:py-20">
          <span className="inline-flex rounded-full bg-[#0137a2]/15 p-1.5">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0137a2] px-4 py-2 text-xs font-semibold text-white">
              <Sparkles className="h-3.5 w-3.5" />
              How we work · Cadence
            </span>
          </span>

          <h1 className="mt-6 max-w-5xl text-3xl font-bold tracking-[-0.02em] text-zinc-900 sm:text-4xl md:text-5xl">
            How a sprint actually runs.
            <span className="block text-[#0137a2]">
              Same week. Same rhythm. Every time.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
            Cadence is the beat behind our philosophy. It&apos;s not a project
            plan we write once — it&apos;s the weekly rhythm we keep: fixed sprint
            boundaries, short build-measure-learn loops, a standing review, and
            momentum you can watch build week after week.
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

      {/* Section 2 — Rhythm */}
      <section className="bg-white">
        <div className="container-custom py-16 lg:py-24">
          <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
            The rhythm
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Four beats to a sprint.{" "}
            <span className="text-[#0137a2]">No skipped measures.</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-500">
            Every engagement runs on the same cadence — whether it&apos;s a
            two-week prototype or a two-year platform. The rhythm is what makes
            the pace predictable.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rhythms.map((r) => {
              const a = cardAccents[r.accent];
              const Icon = r.icon;
              return (
                <article
                  key={r.title}
                  className={`group w-full rounded-2xl border border-zinc-200/80 bg-[#f7f7f6] p-5 transition-colors duration-300 ${a.hoverBorder}`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ease-out group-hover:rotate-12 ${a.iconBg} ${a.iconText}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-base font-bold tracking-tight text-zinc-900">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {r.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <CadenceInteractive />

      {/* Section 3 — Cadence in practice */}
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
            What steady cadence{" "}
            <span className="text-[#0137a2]">feels like on the ground.</span>
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* We keep */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#0137a2] sm:text-xl">
                A healthy cadence keeps
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {enabled.map((item) => (
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
                A broken cadence breaks
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {disabled.map((item) => (
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

          {/* Week-at-a-glance strip */}
          <div className="mt-10 grid gap-4 sm:grid-cols-5">
            {[
              ["Mon", "Pull scope, set the week"],
              ["Tue–Thu", "Build & integrate"],
              ["Thu", "Internal review"],
              ["Fri", "Live demo + decide"],
              ["Next", "Re-prioritize, repeat"],
            ].map(([day, note], i) => (
              <div
                key={day}
                className="rounded-2xl border border-zinc-200 bg-white p-5 text-center"
              >
                <Hourglass className="mx-auto h-5 w-5 text-[#0137a2]" strokeWidth={2} />
                <p className="mt-3 text-sm font-bold text-zinc-900">{day}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

const themes = {
  orange: {
    badge: "bg-[#c2410c]",
    badgeRing: "bg-[#c2410c]/15",
    accentText: "text-[#c2410c]",
    surface: "from-[#dfe9d8] via-[#f6f1e9] to-[#f9e7d6]",
  },
  blue: {
    badge: "bg-[#0137a2]",
    badgeRing: "bg-[#0137a2]/15",
    accentText: "text-[#0137a2]",
    surface: "from-[#dbe6f5] via-[#f2f5fa] to-[#e0eaf8]",
  },
  green: {
    badge: "bg-[#15803d]",
    badgeRing: "bg-[#15803d]/15",
    accentText: "text-[#15803d]",
    surface: "from-[#dcead9] via-[#f2f6ef] to-[#e3f0e0]",
  },
  purple: {
    badge: "bg-[#9333ea]",
    badgeRing: "bg-[#9333ea]/15",
    accentText: "text-[#9333ea]",
    surface: "from-[#e9defa] via-[#f5f1fa] to-[#f0e6fb]",
  },
};

export default function ServiceHero({
  theme = "orange",
  badge = "Service · UX / UI Design",
  title = "Design that makes the product obvious.",
  accentTitle = "Beautiful is the easy part.",
  description = "Research-led product design — interfaces that earn trust and turn interest into action. Shipped by senior designers who have been designing products that ship since 2008.",
  primaryCta = { label: "See how we design", href: "#work" },
  secondaryCta = { label: "Talk to a designer", href: "/contact" },
}) {
  const t = themes[theme] || themes.orange;

  return (
    <section className="bg-[#f6f7fb]">
      <div className="container-custom py-16 sm:py-20">
        {/* Double-pill badge */}
        <span className={`inline-flex rounded-full p-1.5 ${t.badgeRing}`}>
          <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white ${t.badge}`}
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2c1 5 4 8 9 10-5 2-8 5-9 10-1-5-4-8-9-10 5-2 8-5 9-10z" />
            </svg>
            {badge}
          </span>
        </span>

        {/* Headline */}
        <h1 className="mt-6 max-w-5xl text-3xl font-bold tracking-[-0.02em] text-zinc-900 sm:text-4xl md:text-5xl">
          {title}{" "}
          <span className={`block ${t.accentText}`}>{accentTitle}</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
          {description}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryCta.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0137a2] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            {primaryCta.label}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors duration-300 hover:border-zinc-400"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
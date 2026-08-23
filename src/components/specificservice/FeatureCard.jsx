const accents = {
  orange: {
    iconBg: "bg-[#f4e0d6]",
    iconText: "text-[#c2410c]",
    iconHover: "group-hover:bg-[#c2410c] group-hover:text-white",
    cardHover: "hover:border-[#eac6b2]",
  },
  blue: {
    iconBg: "bg-[#dbeafe]",
    iconText: "text-[#0137a2]",
    iconHover: "group-hover:bg-[#0137a2] group-hover:text-white",
    cardHover: "hover:border-[#b3c3e0]",
  },
  green: {
    iconBg: "bg-[#d9e7d6]",
    iconText: "text-[#15803d]",
    iconHover: "group-hover:bg-[#15803d] group-hover:text-white",
    cardHover: "hover:border-[#b9d2b3]",
  },
  purple: {
    iconBg: "bg-[#e9d5ff]",
    iconText: "text-[#9333ea]",
    iconHover: "group-hover:bg-[#9333ea] group-hover:text-white",
    cardHover: "hover:border-[#d8b4fe]",
  },
};

export default function FeatureCard({
  accent = "orange",
  title = "UX Audit",
  description = "A heuristic review of your live product, with every friction point found and prioritized.",
  icon,
}) {
  const a = accents[accent] || accents.orange;

  return (
    <article
      className={`group w-full rounded-2xl border border-zinc-200/80 bg-[#f7f7f6] p-4 transition-colors duration-300 sm:p-5 ${a.cardHover}`}
    >
      {/* Icon — compact, hover pe solid + white + tilt */}
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ease-out group-hover:rotate-12 ${a.iconBg} ${a.iconText} ${a.iconHover}`}
      >
        {icon ?? (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m8 11 2 2 4-4" />
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        )}
      </span>

      {/* Title */}
      <h3 className="mt-4 text-base font-bold tracking-tight text-zinc-900 sm:text-lg">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{description}</p>
    </article>
  );
}
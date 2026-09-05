const themes = {
  green: {
    surface: "bg-white",
    badgeBg: "bg-[#d9e7d6]",
    badgeText: "text-[#166534]",
    badgeDot: "bg-[#166534]",
    iconBg: "bg-[#cde2c9]",
    iconText: "text-[#166534]",
    iconHoverBg: "group-hover:bg-[#15803d]",
    accentText: "text-[#15803d]",
  },
  blue: {
    surface: "bg-white",
    badgeBg: "bg-[#dbeafe]",
    badgeText: "text-[#1e40af]",
    badgeDot: "bg-[#1e40af]",
    iconBg: "bg-[#bfdbfe]",
    iconText: "text-[#1e40af]",
    iconHoverBg: "group-hover:bg-[#2563eb]",
    accentText: "text-[#2563eb]",
  },
  purple: {
    surface: "bg-white",
    badgeBg: "bg-[#e9d5ff]",
    badgeText: "text-[#6b21a8]",
    badgeDot: "bg-[#6b21a8]",
    iconBg: "bg-[#d8b4fe]",
    iconText: "text-[#6b21a8]",
    iconHoverBg: "group-hover:bg-[#9333ea]",
    accentText: "text-[#9333ea]",
  },
  orange: {
    surface: "bg-white",
    badgeBg: "bg-[#fed7aa]",
    badgeText: "text-[#9a3412]",
    badgeDot: "bg-[#9a3412]",
    iconBg: "bg-[#fdba74]",
    iconText: "text-[#9a3412]",
    iconHoverBg: "group-hover:bg-[#ea580c]",
    accentText: "text-[#ea580c]",
  },
};

const hover = {
  floodFrom: "from-blue-500/30",
  floodVia: "via-blue-400/10",
  edgeVia: "via-blue-400/70",
  accentLine: "bg-[#2563eb]",
};

export default function ServiceCard({
  theme = "green",
  icon: Icon,
  badge = "Entry Point",
  title = "AI Audit",
  question = "Where should AI fit?",
  description = "Know where AI actually fits before you spend a dollar building it. Opportunity map, ROI model, and a prioritized roadmap in your hands.",
  timeline = "2–4 weeks",
  outcome = "Prioritized roadmap",
}) {
  const t = themes[theme] || themes.green;

  return (
    <article
      className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_35px_-12px_rgba(0,0,0,0.22)] sm:p-5 ${t.surface}`}
    >
      {/* Top row: badge + icon */}
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[9px] font-bold tracking-[0.18em] uppercase ${t.badgeBg} ${t.badgeText}`}
        >
          <span className={`h-1 w-1 rounded-full ${t.badgeDot}`} />
          {badge}
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ease-out group-hover:scale-105 group-hover:rotate-6 group-hover:text-white ${t.iconBg} ${t.iconText} ${t.iconHoverBg}`}
        >
          {Icon && <Icon className="h-3.5 w-3.5" />}
        </span>
      </div>

      {/* Body — sm+ pe 2 columns (width use, height kam) */}
      <div className="mt-4 gap-6 sm:grid sm:grid-cols-[1.5fr_1fr]">
        <div>
          <h3 className="text-base font-bold tracking-tight text-zinc-900 sm:text-lg">{title}</h3>
          <p className={`mt-1 text-[13px] font-medium italic ${t.accentText}`}>
            &mdash; {question}
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-zinc-500">{description}</p>
        </div>

        {/* Stats — mobile pe side-by-side, desktop pe right column */}
        <div className="mt-4 grid grid-cols-2 gap-2 border-t border-dashed border-zinc-300 pt-3 sm:mt-0 sm:grid-cols-1 sm:gap-3 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-5">
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-zinc-500 uppercase">
              Timeline
            </p>
            <p className="mt-1 text-sm font-bold text-zinc-900">{timeline}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-zinc-500 uppercase">
              Outcome
            </p>
            <p className="mt-1 text-sm font-bold text-zinc-900">{outcome}</p>
          </div>
        </div>
      </div>

      {/* ===== Crystal flood overlay ===== */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* 1) Corner flood — bottom-left se expand ho kar poora card cover */}
        <span
          className={`absolute inset-0 origin-bottom-left scale-0 bg-gradient-to-tr opacity-0 ${hover.floodFrom} ${hover.floodVia} to-transparent transition-all duration-[900ms] ease-out group-hover:scale-100 group-hover:opacity-100`}
        />
        {/* 2) Crystal edge — wide light front jo corner se nikal kar top-right se exit */}
        <span
          className={`absolute top-1/2 left-1/2 h-[300%] w-[38%] bg-gradient-to-b from-transparent ${hover.edgeVia} [transform:translate(-50%,-50%)_rotate(45deg)_translateY(40%)] to-transparent opacity-0 blur-md transition-all duration-[1100ms] ease-out group-hover:[transform:translate(-50%,-50%)_rotate(45deg)_translateY(-70%)] group-hover:opacity-100`}
        />
      </div>

      {/* Top load line */}
      <span
        className={`absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 rounded-r-full transition-transform duration-[1100ms] ease-out group-hover:scale-x-100 ${hover.accentLine}`}
      />
    </article>
  );
}

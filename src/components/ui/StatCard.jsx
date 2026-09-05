const accents = {
  orange: { icon: "text-[#c2410c]", hover: "group-hover:text-[#c2410c]" },
  green: { icon: "text-[#15803d]", hover: "group-hover:text-[#15803d]" },
  blue: { icon: "text-[#2563eb]", hover: "group-hover:text-[#2563eb]" },
  purple: { icon: "text-[#9333ea]", hover: "group-hover:text-[#9333ea]" },
};

export default function StatCard({
  accent = "orange",
  value = "$1B+",
  label = "Raised By Client Startups",
  icon,
}) {
  const a = accents[accent] || accents.orange;

  return (
    <article className="group w-full cursor-pointer rounded-2xl bg-white px-5 py-3 transition-transform duration-300 ease-out hover:-translate-y-1 sm:px-6 sm:py-3">
      <div className="flex items-center justify-between gap-4">
        <p
          className={`text-xl font-semibold tracking-tight text-zinc-900 transition-colors duration-300 sm:text-2xl ${a.hover}`}
        >
          {value}
        </p>

        <span
          className={`shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6 ${a.icon}`}
        >
          {icon ?? (
            <svg
              className="h-6 w-6 sm:h-7 sm:w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
              <path d="M12 6v12" />
            </svg>
          )}
        </span>
      </div>

      <p className="mt-1.5 font-mono text-[9px] tracking-[0.08em] text-zinc-500 sm:text-[10px]">
        {label}
      </p>
    </article>
  );
}

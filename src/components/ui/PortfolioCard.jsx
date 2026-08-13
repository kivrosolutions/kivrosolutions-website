import Link from "next/link";

export default function PortfolioCard({
  title = "Data Furnishing",
  description = "Credit building platform for data-driven coaches.",
  tag = "AI-powered apps",
  href = "/portfolio/data-furnishing",
  screenshot,
  accentColor = "#0137a2",
}) {
  return (
    <Link href={href} className="group relative block w-full">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#d8d8dc] px-4 pb-4 pt-6 transition-colors duration-500 group-hover:bg-[#dedee2] sm:px-6 sm:pt-8">
        {/* Phone mockup — compact */}
        <div className="relative mx-auto mb-16 h-64 w-40 transition-transform duration-500 ease-out group-hover:-translate-y-3 sm:h-72 sm:w-44">
          <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border-4 border-black bg-black shadow-[0_16px_40px_-12px_rgba(0,0,0,0.4)]">
            <div className="relative flex-1">
              <div className="absolute left-1/2 top-0 z-10 h-3 w-12 -translate-x-1/2 rounded-b-md bg-black" />
              {screenshot ? (
                <img src={screenshot} alt={title} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-center gap-1 bg-[#e9eef6] px-2 pb-3 pt-5">
                    <span style={{ color: accentColor }}>&#10022;</span>
                    <span className="text-[10px] font-semibold text-zinc-800">{title}</span>
                  </div>
                  <div className="flex flex-1 flex-col bg-[#0b0b0d] px-2 pb-4 pt-4 text-center">
                    <p className="text-[9px] font-medium text-white">
                      For <span style={{ color: accentColor }}>Coaches</span>
                    </p>
                    <p className="mt-2 text-[10px] font-semibold leading-snug text-white">
                      The Credit Building Software for Entrepreneurs
                    </p>
                    <p className="mt-2 flex-1 text-[6px] leading-relaxed text-zinc-400">
                      Your Own Credit Builder Program — Report History, Tradelines, Build Client Credit, and Scale.
                    </p>
                    <div className="mt-2 flex items-center justify-center gap-1">
                      <span
                        className="rounded-sm px-1.5 py-0.5 text-[5px] font-semibold text-white"
                        style={{ backgroundColor: accentColor }}
                      >
                        Start Reporting
                      </span>
                      <span
                        className="rounded-sm border px-1.5 py-0.5 text-[5px] font-semibold text-white"
                        style={{ borderColor: accentColor }}
                      >
                        Watch Demo
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Glass info card — compact */}
        <div className="absolute inset-x-3 bottom-4">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-600/60 p-4 shadow-xl backdrop-blur-xl transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:p-5">
            {/* Blue glow */}
            <span
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(70% 60% at 50% 0%, ${accentColor}b3, rgba(11,11,13,0.35) 70%)`,
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 shrink-0 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
                <h3 className="truncate text-lg font-bold tracking-tight text-white sm:text-xl">
                  {title}
                </h3>
              </div>
              <p className="mt-2 truncate text-sm text-zinc-300">{description}</p>
              <span className="mt-3 inline-flex rounded-full border border-white/40 px-4 py-1.5 text-xs font-medium text-white">
                {tag}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
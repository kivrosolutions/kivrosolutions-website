import Link from "next/link";

export default function DesignCaseCard({
  title = "Acme Studio",
  description = "Research-led redesign that lifted activation by 38%.",
  tag = "UX/UI Case Study",
  href = "/portfolio/acme-studio",
  accentColor = "#0137a2",
  cursors = ["Ayaan", "Sara"],
}) {
  return (
    <Link href={href} className="group relative block w-full">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#d8d8dc] px-3 pb-3 pt-5 transition-colors duration-500 group-hover:bg-[#dedee2] sm:px-5 sm:pt-7">
        {/* Figma-style canvas */}
        <div className="relative mb-14 h-36 transition-transform duration-500 ease-out group-hover:-translate-y-2 sm:h-40">
          <div className="h-full overflow-hidden rounded-xl border border-black/10 bg-[#fbfbfc] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)] [background-image:radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:12px_12px]">
            {/* Toolbar */}
            <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-white px-2.5 py-1.5">
              <span className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
              </span>
              <span className="mx-auto rounded-full bg-zinc-100 px-2.5 py-0.5 font-mono text-[6px] text-zinc-500">
                {title.toLowerCase().replace(/\s+/g, "-")} / frame-01
              </span>
              <span className="flex -space-x-1">
                <span className="h-3 w-3 rounded-full border border-white" style={{ backgroundColor: accentColor }} />
                <span className="h-3 w-3 rounded-full border border-white bg-[#e11d48]" />
              </span>
            </div>

            {/* Artboards: wireframe → final */}
            <div className="flex items-stretch gap-1.5 p-2.5">
              <div className="flex-1 rounded-md border border-zinc-200 bg-white p-1.5">
                <p className="font-mono text-[5px] text-zinc-400">v1 · wireframe</p>
                <div className="mt-1 h-1.5 w-3/4 rounded-full bg-zinc-200" />
                <div className="mt-1 h-1 w-full rounded-full bg-zinc-100" />
                <div className="mt-1 h-1 w-2/3 rounded-full bg-zinc-100" />
                <div className="mt-1.5 h-5 rounded-sm bg-zinc-100" />
                <div className="mt-1.5 flex gap-1">
                  <span className="h-2 w-6 rounded-full bg-zinc-200" />
                  <span className="h-2 w-6 rounded-full border border-zinc-200" />
                </div>
              </div>

              <span className="self-center text-[8px] text-zinc-400">&rarr;</span>

              <div className="flex-1 rounded-md border bg-white p-1.5" style={{ borderColor: `${accentColor}55` }}>
                <p className="font-mono text-[5px]" style={{ color: accentColor }}>v2 · final</p>
                <div className="mt-1 h-1.5 w-3/4 rounded-full" style={{ backgroundColor: accentColor }} />
                <div className="mt-1 h-1 w-full rounded-full bg-zinc-200" />
                <div className="mt-1 h-1 w-2/3 rounded-full bg-zinc-200" />
                <div className="mt-1.5 h-5 rounded-sm" style={{ backgroundColor: `${accentColor}22` }} />
                <div className="mt-1.5 flex gap-1">
                  <span className="h-2 w-6 rounded-full" style={{ backgroundColor: accentColor }} />
                  <span className="h-2 w-6 rounded-full border" style={{ borderColor: accentColor }} />
                </div>
              </div>
            </div>
          </div>

          {/* Multiplayer cursors — hover pe move */}
          <div className="absolute right-3 top-9 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill={accentColor}>
              <path d="M4 2l16 8-7 2-3 7z" />
            </svg>
            <span className="ml-1.5 rounded-full px-1.5 py-0.5 text-[6px] font-semibold text-white" style={{ backgroundColor: accentColor }}>
              {cursors[0]}
            </span>
          </div>
          <div className="absolute bottom-3 left-3 transition-transform duration-500 group-hover:translate-x-[-4px] group-hover:translate-y-1">
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="#e11d48">
              <path d="M4 2l16 8-7 2-3 7z" />
            </svg>
            <span className="ml-1.5 rounded-full bg-[#e11d48] px-1.5 py-0.5 text-[6px] font-semibold text-white">
              {cursors[1]}
            </span>
          </div>
        </div>

        {/* Glass info card */}
        <div className="absolute inset-x-3 bottom-4">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-600/60 p-3.5 shadow-xl backdrop-blur-xl transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:p-4">
            <span
              className="pointer-events-none absolute inset-0"
              style={{ background: `radial-gradient(70% 60% at 50% 0%, ${accentColor}b3, rgba(11,11,13,0.35) 70%)` }}
            />
            <div className="relative">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
                <h3 className="truncate text-base font-bold tracking-tight text-white sm:text-lg">{title}</h3>
              </div>
              <p className="mt-2 truncate text-[13px] text-zinc-300">{description}</p>
              <span className="mt-3 inline-flex rounded-full border border-white/40 px-3 py-1 text-[11px] font-medium text-white">
                {tag}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
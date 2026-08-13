import Link from "next/link";

/* ===== Website frame: browser window ===== */
function BrowserMock({ accentColor, url }) {
  return (
    <div className="flex h-full flex-col bg-white">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-100 px-3 py-1.5">
        <span className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
        </span>
        <span className="mx-auto rounded-full bg-white px-2.5 py-0.5 font-mono text-[6px] text-zinc-400">
          https://{url}
        </span>
        <span className="w-5" />
      </div>
      {/* Page skeleton */}
      <div className="flex-1 px-3 py-2.5">
        <div className="flex items-center justify-between">
          <span className="h-1.5 w-8 rounded-full" style={{ backgroundColor: accentColor }} />
          <span className="flex gap-1">
            <span className="h-1 w-5 rounded-full bg-zinc-200" />
            <span className="h-1 w-5 rounded-full bg-zinc-200" />
            <span className="h-1 w-5 rounded-full bg-zinc-200" />
          </span>
          <span className="h-3 w-9 rounded-full" style={{ backgroundColor: accentColor }} />
        </div>
        <div className="mt-3 space-y-1">
          <div className="h-2 w-3/4 rounded-full bg-zinc-800" />
          <div className="h-2 w-1/2 rounded-full bg-zinc-300" />
        </div>
        <div className="mt-2.5 flex gap-1">
          <span className="h-3.5 w-11 rounded-full" style={{ backgroundColor: accentColor }} />
          <span className="h-3.5 w-11 rounded-full border bg-white" style={{ borderColor: accentColor }} />
        </div>
      </div>
    </div>
  );
}

/* ===== Automation frame: workflow canvas ===== */
function AutomationMock({ accentColor }) {
  return (
    <div className="flex h-full flex-col bg-[#0b0b0d] px-3 py-2">
      {/* Status */}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-[7px] font-medium text-white">
          <span className="h-1 w-1 rounded-full bg-green-500" /> Running
        </span>
        <span className="font-mono text-[6px] text-zinc-500">1,248 runs this week</span>
      </div>
      {/* Nodes */}
      <div className="flex flex-1 items-center justify-center">
        <span className="rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-center">
          <span className="block text-[7px] font-semibold text-white">New Lead</span>
          <span className="block text-[5px] text-zinc-500">Trigger</span>
        </span>
        <span className="h-px w-2.5 bg-zinc-600 sm:w-4" />
        <span
          className="rounded-md border bg-zinc-900 px-2 py-1 text-center"
          style={{ borderColor: accentColor, boxShadow: `0 0 12px ${accentColor}66` }}
        >
          <span className="block text-[7px] font-semibold text-white">AI Agent</span>
          <span className="block text-[5px] text-zinc-400">Qualify + Reply</span>
        </span>
        <span className="h-px w-2.5 bg-zinc-600 sm:w-4" />
        <span className="rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-center">
          <span className="block text-[7px] font-semibold text-white">CRM</span>
          <span className="block text-[5px] text-zinc-500">Update</span>
        </span>
      </div>
      {/* Log */}
      <p className="font-mono text-[6px] text-zinc-500">
        ✓ Lead qualified — follow-up sent in 42s
      </p>
    </div>
  );
}

export default function ProjectCard({
  variant = "website", // "website" | "automation"
  title = "Acme Studio",
  description = "Marketing site with CMS and 99 Lighthouse scores.",
  tag = "Website",
  href = "/portfolio/acme-studio",
  url = "acme.studio",
  screenshot,
  accentColor = "#0137a2",
}) {
  return (
    <Link href={href} className="group relative block w-full">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#d8d8dc] px-4 pb-4 pt-6 transition-colors duration-500 group-hover:bg-[#dedee2] sm:px-6 sm:pt-8">
        {/* Frame — variant ke hisaab se */}
        <div className="relative mx-auto mb-20 h-40 transition-transform duration-500 ease-out group-hover:-translate-y-2 sm:h-44">
          <div className="h-full overflow-hidden rounded-xl border border-black/20 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)]">
            {variant === "website" ? (
              screenshot ? (
                <img src={screenshot} alt={title} className="h-full w-full object-cover object-top" />
              ) : (
                <BrowserMock accentColor={accentColor} url={url} />
              )
            ) : (
              <AutomationMock accentColor={accentColor} />
            )}
          </div>
        </div>

        {/* Glass info card */}
        <div className="absolute inset-x-3 bottom-4">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-600/60 p-4 shadow-xl backdrop-blur-xl transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:p-5">
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
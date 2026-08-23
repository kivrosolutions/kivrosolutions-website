import { HOURLY_CARD } from "@/lib/estimatorData";

export default function HourlyRateCard({ data = HOURLY_CARD }) {
  return (
    <aside className="flex flex-col rounded-3xl border border-[#0137a2]/30 bg-[#0137a2]/10 p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0137a2]/20 text-[#7fb0ff]">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </span>
        <div>
          <p className="text-[11px] text-[#7fb0ff]">{data.tagline}</p>
          <p className="text-sm font-bold text-white">{data.title}</p>
        </div>
      </div>

      <p className="mt-8 text-center text-5xl font-extrabold text-white">
        ${data.rate}
        <span className="text-base font-medium text-zinc-400">/hr</span>
      </p>
      <p className="mt-2 text-center text-sm text-zinc-400">{data.note}</p>

      <ul className="mt-6 space-y-2.5">
        {data.perks.map((perk) => (
          <li key={perk} className="flex items-center gap-2.5 text-sm text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7fb0ff]" />
            {perk}
          </li>
        ))}
      </ul>

      <a href={data.href} className="mt-auto block pt-6">
        <span className="block rounded-xl bg-[#0137a2] py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[#0246c9]">
          {data.cta}
        </span>
      </a>
    </aside>
  );
}
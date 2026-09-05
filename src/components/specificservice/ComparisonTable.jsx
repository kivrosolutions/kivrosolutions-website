const DEFAULT_DATA = {
  columns: [
    { label: "Kivro Solution", highlight: true },
    { label: "US / EU agency" },
    { label: "Solo freelancer" },
  ],
  rows: [
    {
      label: "Typical MVP cost",
      values: [
        { type: "check", text: "$5k–$12k, fixed" },
        { type: "cross", text: "$50k–$150k+" },
        { type: "dash", text: "$3k–$15k, unpredictable" },
      ],
    },
    {
      label: "Pricing model",
      values: [
        { type: "check", text: "Fixed price, milestones" },
        { type: "cross", text: "Hourly, often open-ended" },
        { type: "dash", text: "Varies, scope-creep risk" },
      ],
    },
    {
      label: "Timeline",
      values: [
        { type: "check", text: "2–8 weeks, 90% on-time" },
        { type: "cross", text: "Months, multiple stakeholders" },
        { type: "dash", text: "Solo bottleneck, unpredictable" },
      ],
    },
    {
      label: "Team",
      values: [
        { type: "check", text: "Vetted seniors + technical founder" },
        { type: "cross", text: "Account managers + rotating devs" },
        { type: "dash", text: "One person, bus factor of 1" },
      ],
    },
    {
      label: "Design, QA & store submission",
      values: [
        { type: "check", text: "Included" },
        { type: "cross", text: "Billed separately" },
        { type: "dash", text: "Usually extra or skipped" },
      ],
    },
    {
      label: "Code & IP",
      values: [
        { type: "check", text: "Full source + IP from milestone 1" },
        { type: "cross", text: "Often licensed or retained" },
        { type: "dash", text: "Varies, often informal" },
      ],
    },
  ],
};

function ValueIcon({ type }) {
  if (type === "check")
    return (
      <svg
        className="mt-0.5 h-4 w-4 shrink-0 text-[#0137a2]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  if (type === "cross")
    return (
      <svg
        className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    );
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

export default function ComparisonTable({ data = DEFAULT_DATA }) {
  const { columns, rows } = data;
  const gridCols = `1.1fr ${columns.map(() => "1fr").join(" ")}`;

  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <div className="min-w-[760px]">
          {/* Header */}
          <div className="grid border-b border-zinc-200" style={{ gridTemplateColumns: gridCols }}>
            <div className="p-5" />
            {columns.map((col) =>
              col.highlight ? (
                <div
                  key={col.label}
                  className="border-x border-[#0137a2]/10 bg-[#0137a2]/5 px-5 py-5"
                >
                  <span className="text-base font-bold tracking-tight text-[#0137a2]">
                    {col.label}
                  </span>
                </div>
              ) : (
                <div key={col.label} className="px-5 py-5 text-base font-semibold text-zinc-500">
                  {col.label}
                </div>
              )
            )}
          </div>

          {/* Rows */}
          {rows.map((row, ri) => (
            <div
              key={row.label}
              className={`grid ${ri < rows.length - 1 ? "border-b border-zinc-100" : ""}`}
              style={{ gridTemplateColumns: gridCols }}
            >
              <div className="p-5 text-sm font-medium text-zinc-700">{row.label}</div>
              {row.values.map((v, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2.5 px-5 py-4 ${columns[i].highlight ? "border-x border-[#0137a2]/10 bg-[#0137a2]/5" : ""}`}
                >
                  <ValueIcon type={v.type} />
                  <span
                    className={`text-sm leading-relaxed ${columns[i].highlight ? "font-semibold text-zinc-900" : "text-zinc-500"}`}
                  >
                    {v.text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

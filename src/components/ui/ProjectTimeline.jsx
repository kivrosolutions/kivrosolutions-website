import TaskBar from "./TaskBar";

export default function ProjectTimeline({ data }) {
  const totalWeeks = data.weeks.length;

  return (
    <section className="rounded-2xl border border-zinc-200/70 bg-white p-4 sm:p-6">
      <div className="overflow-x-auto">
        <div className="min-w-[760px]">
          {/* Phases */}
          <div className="grid grid-cols-12">
            {data.phases.map((p) => (
              <div
                key={p.label}
                style={{ gridColumn: `${p.start} / span ${p.end - p.start + 1}` }}
                className="pr-2"
              >
                <p className="font-mono text-[10px] font-bold tracking-[0.22em] text-zinc-800 uppercase">
                  {p.label}
                </p>
              </div>
            ))}
          </div>

          {/* Weeks */}
          <div className="mt-4 grid grid-cols-12">
            {data.weeks.map((w) => (
              <div key={w.label} className="pr-2">
                <p className="font-mono text-[9px] font-bold tracking-[0.14em] text-zinc-700 uppercase">
                  {w.label}
                </p>
                <p className="mt-0.5 font-mono text-[9px] text-zinc-400">{w.date}</p>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="relative mt-5">
            {/* Vertical grid lines */}
            <div className="absolute inset-0 grid grid-cols-12" aria-hidden="true">
              {data.weeks.map((w) => (
                <div key={w.label} className="border-l border-zinc-200/80" />
              ))}
            </div>

            {/* Task bars */}
            <div className="relative space-y-2">
              {data.tasks.map((task, i) => (
                <TaskBar key={task.name} task={task} totalWeeks={totalWeeks} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
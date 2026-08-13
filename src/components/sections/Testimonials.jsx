const testimonials = [
  {
    quote: "They delivered on time and exceeded our expectations.",
    author: "Client Name",
    role: "CEO, Company",
  },
  {
    quote: "Outstanding work. The team was professional and responsive.",
    author: "Client Name",
    role: "CTO, Company",
  },
  {
    quote: "A true partner in building our product from scratch.",
    author: "Client Name",
    role: "Founder, Startup",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f6f7fb] dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
          Testimonials
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          What our clients say
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{t.author}</p>
                <p className="text-xs text-zinc-500">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

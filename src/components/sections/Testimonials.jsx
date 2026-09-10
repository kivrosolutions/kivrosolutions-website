const testimonials = [
  {
    quote: "Kivro didn't just write code; they understood our business logic. The platform they built scaled perfectly with our user growth, and the handover was seamless.",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow Dynamics",
  },
  {
    quote: "Integrating AI into our workflow felt daunting, but the team made it effortless. We've seen a 40% reduction in manual support tickets since the new system launched.",
    author: "Marcus Webb",
    role: "Operations Director, Verano Health",
  },
  {
    quote: "A true partner in every sense. They challenged our initial assumptions and delivered a product with a UI/UX that our customers actually love using. Highly recommended.",
    author: "Priya Malhotra",
    role: "Founder & CEO, Northline Retail",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f6f7fb] dark:bg-black">
      <div className="container-custom py-24">
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
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <div>
                {/* Quote Icon */}
                <svg 
                  className="mb-4 h-8 w-8 text-blue-500/20" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              
              <footer className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                  {t.author}
                </p>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {t.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
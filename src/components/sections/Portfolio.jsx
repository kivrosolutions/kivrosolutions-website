import Link from "next/link";

const projects = [
  {
    title: "Project One",
    category: "Web Development",
    slug: "project-one",
  },
  {
    title: "Project Two",
    category: "Mobile App",
    slug: "project-two",
  },
  {
    title: "Project Three",
    category: "UI/UX Design",
    slug: "project-three",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-[#f6f7fb] dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
              Portfolio
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
              Selected work
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden text-sm font-medium text-zinc-900 hover:text-zinc-600 sm:inline-block dark:text-zinc-50 dark:hover:text-zinc-300"
          >
            See all projects &rarr;
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group">
              <div className="aspect-[4/3] rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
              <p className="mt-3 text-xs font-medium tracking-wider text-zinc-500 uppercase">
                {project.category}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="mt-8 inline-block text-sm font-medium text-zinc-900 hover:text-zinc-600 sm:hidden dark:text-zinc-50 dark:hover:text-zinc-300"
        >
          See all projects &rarr;
        </Link>
      </div>
    </section>
  );
}

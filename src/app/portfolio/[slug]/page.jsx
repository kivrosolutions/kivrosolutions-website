import Link from "next/link";

export default function ProjectPage({ params }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Link href="/portfolio" className="text-sm text-zinc-500 hover:text-zinc-900">
        &larr; Back to portfolio
      </Link>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Project: {params.slug}</h1>
      <p className="mt-4 text-lg text-zinc-600">Content coming soon.</p>
    </section>
  );
}

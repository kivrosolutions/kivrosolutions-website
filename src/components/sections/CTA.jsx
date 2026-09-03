import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-zinc-900 dark:bg-zinc-100">
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl dark:text-zinc-900">
          Ready to start your project?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-zinc-400 dark:text-zinc-600">
          Let&apos;s talk about your idea. We&apos;ll get back to you within 24 hours.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800"
        >
          Get in touch &rarr;
        </Link>
      </div>
    </section>
  );
}

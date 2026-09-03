import Link from "next/link";
import { Briefcase, MessageCircle } from "lucide-react";

const JoinTeamCTA = ({
  title = "Join our team",
  description = "Ready to make an impact and join our team? Let's connect!",
  ctaLabel = "Careers",
  ctaHref = "/contact",
  icon: Icon = Briefcase,
}) => {
  return (
    <section className="flex min-h-[50vh] w-full flex-col items-center justify-center bg-[#171310] px-6 py-24 text-center sm:py-32">
      <h2 className="max-w-4xl text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl md:text-7xl">
        {title}
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
        {description}
      </p>

      <Link
        href={ctaHref}
        className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#f5a623] px-8 py-4 text-base font-semibold text-[#171310] shadow-[0_12px_30px_-12px_rgba(245,166,35,0.8)] transition-[background-color,transform,box-shadow] hover:-translate-y-0.5 hover:bg-[#ffc05a] hover:shadow-[0_16px_34px_-12px_rgba(245,166,35,0.9)] focus-visible:ring-2 focus-visible:ring-[#f5a623] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171310] focus-visible:outline-none sm:text-lg"
      >
        <span>{ctaLabel}</span>
        <Icon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
      </Link>
    </section>
  );
};

export default JoinTeamCTA;

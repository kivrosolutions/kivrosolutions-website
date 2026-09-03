import Link from "next/link";
import { ShieldCheck, Star, CheckCircle2 } from "lucide-react";
import OrbitVisual from "../ui/OrbitVisual";

const TRUST = ["Results guaranteed", "Senior team only", "Ship in 6–8 weeks"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f7fb]">
      <div className="container-custom grid grid-cols-1 items-center gap-14 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Left */}
        <div className="max-w-xl">
          {/* Verified badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0137a2]/20 bg-white px-4 py-2 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-[#0137a2]" />
            <span className="text-xs font-semibold text-zinc-700 sm:text-sm">Verified studio</span>
            <span className="h-3 w-px bg-zinc-300" />
            <span className="flex items-center gap-1 text-xs font-semibold text-zinc-700 sm:text-sm">
              <Star className="h-3.5 w-3.5 fill-[#0137a2] text-[#0137a2]" />
              5.0 client rating
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#0b1b3f] sm:text-5xl lg:text-6xl">
            Turn ideas into{" "}
            <span className="text-[#0137a2]">shipped products</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Strategy, design, and engineering under one roof — moving at startup
            speed, with the craft of a senior team.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0137a2] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_3px_#f6f7fb,0_0_0_5px_#0137a2] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a project
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-[#0b1b3f]/25 bg-white px-7 py-3.5 text-sm font-semibold text-[#0b1b3f] transition-colors hover:border-[#0137a2] hover:text-[#0137a2]"
            >
              Book a demo
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {TRUST.map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-xs text-zinc-500 sm:text-sm">
                <CheckCircle2 className="h-4 w-4 text-[#0137a2]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right — animated orbit */}
        <OrbitVisual />
      </div>
    </section>
  );
}
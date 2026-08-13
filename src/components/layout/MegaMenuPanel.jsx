"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  Pencil,
  Smartphone,
  Monitor,
  Cloud,
  Code,
  Bot,
  Cpu,
  Search,
  TrendingUp,
  Volume2,
  Compass,
  RefreshCw,
  Users,
  Shield,
  Link2,
  Info,
  Flag,
  Mail,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const badgeColors = {
  orange: "bg-orange-100 text-orange-600",
  green: "bg-green-100 text-green-600",
  blue: "bg-blue-100 text-blue-600",
};

const hoverBgColors = {
  orange: "hover:bg-orange-50",
  green: "hover:bg-green-50",
  blue: "hover:bg-blue-50",
};

const iconMap = {
  pencil: Pencil,
  phone: Smartphone,
  monitor: Monitor,
  cloud: Cloud,
  code: Code,
  bot: Bot,
  cpu: Cpu,
  search: Search,
  "trending-up": TrendingUp,
  speaker: Volume2,
  compass: Compass,
  "refresh-cw": RefreshCw,
  users: Users,
  shield: Shield,
  link: Link2,
  info: Info,
  flag: Flag,
  mail: Mail,
};

function MegaMenuIcon({ icon }) {
  const IconComponent = iconMap[icon];
  return IconComponent ? <IconComponent size={18} strokeWidth={2} /> : null;
}

export default function MegaMenuPanel({ columns, cta, onSelect }) {
  const scrollRef = useRef(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollUp(el.scrollTop > 4);
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [columns]);

  const scrollBy = (amount) => {
    scrollRef.current?.scrollBy({ top: amount, behavior: "smooth" });
  };

  return (
    <div className="relative w-max max-w-[95vw] rounded-4xl border border-zinc-200 bg-[#f6f7fb] shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
      {/* Up arrow indicator */}
      {canScrollUp && (
        <button
          onClick={() => scrollBy(-160)}
          className="absolute top-2 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-md transition-colors hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-50"
          aria-label="Scroll up"
        >
          <ChevronUp size={16} strokeWidth={2.5} />
        </button>
      )}

      {/* Down arrow indicator */}
      {canScrollDown && (
        <button
          onClick={() => scrollBy(160)}
          className="absolute right-3 bottom-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-md transition-colors hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-50"
          aria-label="Scroll down"
        >
          <ChevronDown size={16} strokeWidth={2.5} />
        </button>
      )}

      <div
        ref={scrollRef}
        className="no-scrollbar flex max-h-[calc(100vh-96px)] gap-12 overflow-y-auto p-7"
      >
        {/* Left: Columns */}
        <div className="flex gap-10">
          {columns.map((column, index) => (
            <div
              key={column.title}
              className={`w-60 shrink-0 ${
                index < columns.length - 1
                  ? "border-r border-zinc-200 pr-10 dark:border-zinc-700"
                  : ""
              }`}
            >
              <h3 className="mb-5 text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-1.5">
                {column.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      onClick={onSelect}
                      className={`flex items-start gap-3 rounded-xl p-3 transition-colors ${hoverBgColors[item.badgeColor] || "hover:bg-zinc-100"}`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${badgeColors[item.badgeColor]}`}
                      >
                        <MegaMenuIcon icon={item.icon} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* View All link */}
              {column.viewAll && (
                <div className="mt-3 px-9">
                    <Link
                      href={column.viewAll.href}
                      onClick={onSelect}
                      className="text-sm font-medium text-[#0137a2] hover:text-[#012980]"
                    >
                    {column.viewAll.label}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: CTA Card */}
        {cta && (
          <div className="flex w-60 shrink-0 flex-col justify-between rounded-2xl bg-gradient-to-br from-zinc-800 to-black p-6">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#0137a2] uppercase">
                {cta.label}
              </p>
              <h4 className="mt-3 text-xl leading-snug font-bold text-white">{cta.heading}</h4>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{cta.subtext}</p>
            </div>
            <Link
              href={cta.href}
              onClick={onSelect}
              className="mt-6 inline-flex items-center gap-1 rounded-full bg-[#0137a2] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#012980]"
            >
              {cta.buttonText} →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

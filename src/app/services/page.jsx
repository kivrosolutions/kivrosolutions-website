import Link from "next/link";
import { services } from "@/lib/servicesData";
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
} from "lucide-react";

export const metadata = {
  title: "Services - Kivro Solution",
  description:
    "Explore our full range of services: UX/UI design, mobile and web development, cloud, AI, IoT, growth strategy, and app marketing.",
  keywords: [
    "software development",
    "UX design",
    "mobile apps",
    "web development",
    "AI development",
    "cloud services",
  ],
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
};

const badgeStyles = {
  orange: "bg-orange-100 text-orange-600",
  green: "bg-green-100 text-green-600",
  blue: "bg-blue-100 text-blue-600",
};

const hoverBadge = {
  orange: "group-hover:bg-orange-600 group-hover:text-white",
  green: "group-hover:bg-green-600 group-hover:text-white",
  blue: "group-hover:bg-blue-600 group-hover:text-white",
};

const categories = [
  { key: "DESIGN & BUILD", color: "orange" },
  { key: "INTELLIGENCE", color: "green" },
  { key: "GROW", color: "blue" },
];

export default function ServicesPage() {
  return (
    <section className="bg-[#f6f7fb] px-6 pt-32 pb-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600">
          Six ways to engage. One team behind all of them.
        </p>

        {categories.map((cat) => {
          const categoryServices = services.filter((s) => s.category === cat.key);
          return (
            <div key={cat.key} className="mt-16">
              <h2 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                {cat.key}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {categoryServices.map((service) => {
                  const Icon = iconMap[service.icon];
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-md hover:shadow-zinc-200/50"
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${badgeStyles[service.badgeColor]} ${hoverBadge[service.badgeColor]}`}
                      >
                        {Icon && <Icon size={22} strokeWidth={2} />}
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {service.description}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-medium text-[#0137a2] group-hover:text-[#012980]">
                        Learn more →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

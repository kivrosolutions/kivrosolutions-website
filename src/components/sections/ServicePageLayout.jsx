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
  LayoutGrid,
  Eye,
  Smile,
  Award,
} from "lucide-react";
import ProcessTimeline from "@/components/specificservice/ProcessTimeline";
import OrbitSphere from "@/components/specificservice/OrbitSphere";
import ServiceHero from "@/components/specificservice/ServiceHero";
import CtaBanner from "@/components/specificservice/CtaBanner";
import FeatureCard from "@/components/specificservice/FeatureCard";
import StatCard from "@/components/ui/StatCard";
import DesignCaseCard from "@/components/specificservice/DesignCaseCard";
import ComparisonTable from "@/components/specificservice/ComparisonTable";
import ProjectTimeline from "@/components/ui/ProjectTimeline";

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

const featureCardIconMap = {
  search: Search,
  layout: LayoutGrid,
  eye: Eye,
  pencil: Pencil,
  phone: Smartphone,
  monitor: Monitor,
  cloud: Cloud,
  code: Code,
  bot: Bot,
  cpu: Cpu,
  "trending-up": TrendingUp,
  speaker: Volume2,
};

const statIconMap = {
  layout: LayoutGrid,
  smile: Smile,
  award: Award,
  search: Search,
  pencil: Pencil,
  phone: Smartphone,
  monitor: Monitor,
  cloud: Cloud,
  code: Code,
  bot: Bot,
  cpu: Cpu,
  "trending-up": TrendingUp,
  speaker: Volume2,
  eye: Eye,
};

export default function ServicePageLayout({ service, processTimeline, orbitSphereItems, serviceHero, ctaBanner, featureSection, statCards, designCaseSection, comparisonTable, projectTimeline, beforeCta }) {
  const Icon = iconMap[service.icon];

  return (
    <>
      {/* Hero */}
      {serviceHero ? (
        <ServiceHero {...serviceHero} />
      ) : (
        <section className="bg-[#f6f7fb] px-6 pt-32 pb-20">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/services"
              className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-[#0137a2] hover:text-[#012980]"
            >
              ← All Services
            </Link>
            <div className="flex items-start gap-4">
              {Icon && (
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${badgeStyles[service.badgeColor]}`}
                >
                  <Icon size={28} strokeWidth={2} />
                </div>
              )}
              <div>
                <span
                  className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase ${badgeStyles[service.badgeColor]}`}
                >
                  {service.category}
                </span>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-zinc-600">
                  {service.longDescription}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stat Cards */}
      {statCards && statCards.length > 0 && (
        <section className="bg-[#f6f7fb] px-6 pb-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {statCards.map((stat) => {
                const StatIcon = statIconMap[stat.icon];
                return (
                  <StatCard
                    key={stat.label}
                    accent={stat.accent}
                    value={stat.value}
                    label={stat.label}
                    icon={StatIcon ? <StatIcon className="h-7 w-7 sm:h-8 sm:w-8" /> : null}
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Orbit Sphere */}
      {orbitSphereItems && (
        <section className="bg-[#f6f7fb] px-4 py-20">
          <div className="mx-auto h-[380px] max-w-4xl sm:h-[500px]">
            <OrbitSphere items={orbitSphereItems} className="h-full w-full" />
          </div>
        </section>
      )}

      {/* Features */}
      {featureSection ? (
        <section className="bg-[#f6f7fb] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl">
                <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                  {featureSection.label}
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                  {featureSection.heading}{" "}
                  <span className="text-[#0137a2]">{featureSection.headingAccent}</span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-zinc-500 lg:mt-8 lg:text-right">
                {featureSection.description}
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featureSection.cards.map((card) => {
                const CardIcon = featureCardIconMap[card.icon];
                return (
                  <FeatureCard
                    key={card.title}
                    accent={card.accent}
                    title={card.title}
                    description={card.description}
                    icon={CardIcon ? <CardIcon className="h-6 w-6" strokeWidth={2} /> : null}
                  />
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">What we do</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {service.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-zinc-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Design Case Studies */}
      {designCaseSection && (
        <section className="bg-[#f6f7fb] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl">
                <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                  {designCaseSection.label}
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                  {designCaseSection.heading}{" "}
                  <span className="text-[#0137a2]">{designCaseSection.headingAccent}</span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-zinc-500 lg:mt-8 lg:text-right">
                {designCaseSection.description}
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {designCaseSection.cards.map((card) => (
                <DesignCaseCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  cursors={card.cursors}
                  href={card.href}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="bg-[#f6f7fb] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Our process</h2>
          {projectTimeline ? (
            <div className="mt-10">
              <ProjectTimeline data={projectTimeline} />
            </div>
          ) : processTimeline ? (
            <div className="mt-10">
              <ProcessTimeline steps={processTimeline} />
            </div>
          ) : (
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step) => (
                <div key={step.step} className="relative">
                  <span className="text-5xl font-bold text-[#0137a2]/10">{step.step}</span>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      {comparisonTable && (
        <section className="bg-[#f6f7fb] px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                {comparisonTable.label}
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                {comparisonTable.heading}{" "}
                <span className="text-[#0137a2]">{comparisonTable.headingAccent}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
                {comparisonTable.description}
              </p>
            </div>
            <ComparisonTable data={comparisonTable.data} />
          </div>
        </section>
      )}

      {/* Custom section before CTA */}
      {beforeCta}

      {/* CTA Banner or Default CTA */}
      {ctaBanner ? (
        <section className="bg-[#f6f7fb]">
          <CtaBanner {...ctaBanner} />
        </section>
      ) : (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-3xl bg-[#0137a2] px-8 py-16 text-center sm:px-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Let&apos;s discuss how {service.title.toLowerCase()} can help your business.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0137a2] transition-colors hover:bg-zinc-100"
            >
              Get in touch →
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

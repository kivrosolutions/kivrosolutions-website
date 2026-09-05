import { DollarSign, Users, Rocket, Award } from "lucide-react";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import ProjectTimeline from "@/components/ui/ProjectTimeline";
import StatCard from "@/components/ui/StatCard";
import PortfolioCard from "@/components/ui/PortfolioCard";
import ProjectCard from "@/components/ui/ProjectCard";
import AboutShowcase from "@/components/ui/AboutShowcase";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { defaultTimeline } from "@/lib/timelineData";
import { withBasePath } from "@/lib/paths";

const stats = [
  { accent: "orange", value: "$1B+", label: "Raised By Client Startups", icon: DollarSign },
  { accent: "green", value: "150+", label: "Projects Delivered", icon: Rocket },
  { accent: "blue", value: "50+", label: "Senior Engineers", icon: Users },
  { accent: "purple", value: "12+", label: "Years In Business", icon: Award },
];

export const metadata = {
  title: "Kivro Solution - Software Agency",
  description:
    "We build innovative software solutions. Strategy, design, and engineering from our senior team.",
};

export default function Home() {
  return (
    <>
      <Hero />
            {/* Stats Section */}
      <section className="bg-[#f6f7fb]">
        <div className="container-custom pt-10 pb-2">
         
           <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                accent={stat.accent}
                value={stat.value}
                label={stat.label}
                icon={<stat.icon className="h-7 w-7 sm:h-8 sm:w-8" />}
              />
            ))}
          </div>
        </div>
      </section>
      <Services />
            {/* About Showcase Section */}
      <AboutShowcase />


      {/* Project Timeline Section */}
      <section className="bg-[#f6f7fb]">
        <div className="container-custom py-24 pb-10">
          <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">Process</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            How we ship
          </h2>
          <div className="mt-12">
            <ProjectTimeline data={defaultTimeline} />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-[#f6f7fb]">
        <div className="container-custom pt-10 pb-24">
          <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">Portfolio</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Our work speaks
          </h2>
           <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <PortfolioCard
              title="Data Furnishing"
              description="Credit building platform for data-driven coaches."
              tag="AI-powered apps"
              href="/portfolio/data-furnishing"
            />
            <PortfolioCard
              title="Clinic OS"
              description="Patient retention engine for healthcare clinics."
              tag="Healthcare automation"
              href="/portfolio/clinic-os"
              screenshot={withBasePath("/images/clinic-os.png")}
            />
            <PortfolioCard
              title="FinTrack"
              description="Real-time financial analytics dashboard."
              tag="Fintech"
              href="/portfolio/fintrack"
            />
            <PortfolioCard
              title="LearnHub"
              description="AI-powered learning management system."
              tag="EdTech"
              href="/portfolio/learnhub"
            />
            <ProjectCard
              variant="website"
              title="Acme Studio"
              description="Marketing site with CMS and 99 Lighthouse scores."
              tag="Website"
              url="acme.studio"
            />
            <ProjectCard
              variant="automation"
              title="Lead Flow AI"
              description="Automated lead qualification and follow-up system."
              tag="AI Automation"
            />
                        <ProjectCard
              variant="automation"
              title="Lead Flow AI"
              description="Automated lead qualification and follow-up system."
              tag="AI Automation"
            />
              <ProjectCard
              variant="automation"
              title="Lead Flow AI"
              description="Automated lead qualification and follow-up system."
              tag="AI Automation"
            />
            
          </div>
        </div>
      </section>


      <CTA />
    </>
  );
}

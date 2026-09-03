import { Globe, Smartphone, Palette, Cloud, Brain, TrendingUp } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    theme: "green",
    icon: Globe,
    badge: "Development",
    title: "Web Development",
    question: "What's your digital vision?",
    description:
      "Modern, scalable web applications built with cutting-edge frameworks. From MVPs to enterprise platforms.",
    timeline: "6–8 weeks",
    outcome: "Production-ready app",
  },
  {
    theme: "blue",
    icon: Smartphone,
    badge: "Mobile",
    title: "Mobile Apps",
    question: "Ready to go mobile-first?",
    description:
      "Native and cross-platform mobile applications for iOS and Android that users love.",
    timeline: "8–12 weeks",
    outcome: "App Store ready",
  },
  {
    theme: "purple",
    icon: Palette,
    badge: "Design",
    title: "UI/UX Design",
    question: "Design that converts?",
    description:
      "User-centered design that turns visitors into customers. Research, wireframes, and polished prototypes.",
    timeline: "3–5 weeks",
    outcome: "Design system + specs",
  },
  {
    theme: "orange",
    icon: Cloud,
    badge: "Infrastructure",
    title: "Cloud Solutions",
    question: "Scale without limits?",
    description:
      "Secure, adaptable cloud architectures that grow with your business. AWS, GCP, and Azure.",
    timeline: "4–6 weeks",
    outcome: "Scalable infrastructure",
  },
  {
    theme: "green",
    icon: Brain,
    badge: "Intelligence",
    title: "AI Integration",
    question: "Where does AI fit?",
    description:
      "Custom AI solutions that automate workflows, predict trends, and unlock data-driven insights.",
    timeline: "4–8 weeks",
    outcome: "AI-powered features",
  },
  {
    theme: "blue",
    icon: TrendingUp,
    badge: "Strategy",
    title: "Digital Strategy",
    question: "What's your growth plan?",
    description:
      "End-to-end digital transformation roadmaps aligned with your business goals and market reality.",
    timeline: "2–4 weeks",
    outcome: "Actionable roadmap",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f6f7fb] dark:bg-black">
      <div className="container-custom pt-10 pb-24">
        <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">Services</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          Six ways to engage.
          <br />
          <span style={{ color: "#0137a2" }}>One team</span> behind all of them.
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              theme={service.theme}
              icon={service.icon}
              badge={service.badge}
              title={service.title}
              question={service.question}
              description={service.description}
              timeline={service.timeline}
              outcome={service.outcome}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

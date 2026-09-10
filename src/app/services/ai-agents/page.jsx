import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/servicesData";
import ServicePageLayout from "@/components/sections/ServicePageLayout";
import FitComparisonSection from "@/components/specificservice/FitComparisonSection";
import TechStackMarquee from "@/components/specificservice/TechStackMarquee";

export function generateMetadata() {
  const service = getServiceBySlug("ai-agents");
  return {
    title: service.meta.title,
    description: service.meta.description,
    keywords: service.meta.keywords,
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      type: "website",
    },
  };
}

export default function AIAgentsPage() {
  const service = getServiceBySlug("ai-agents");
  if (!service) notFound();
  return (
    <>
      <ServicePageLayout
        service={service}
        serviceHero={service.serviceHero}
        statCards={service.statCards}
        featureSection={service.featureSection}
        processTimeline={service.processTimelineSteps}
      />
      {service.fitComparison && (
        <FitComparisonSection
          goodFit={service.fitComparison.goodFit}
          notFit={service.fitComparison.notFit}
        />
      )}
      {service.techStack && <TechStackMarquee technologies={service.techStack} />}
    </>
  );
}

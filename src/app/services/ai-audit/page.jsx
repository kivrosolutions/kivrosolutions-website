import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/servicesData";
import ServicePageLayout from "@/components/sections/ServicePageLayout";

export function generateMetadata() {
  const service = getServiceBySlug("ai-audit");
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

export default function AIAuditPage() {
  const service = getServiceBySlug("ai-audit");
  if (!service) notFound();
  return (
    <ServicePageLayout
      service={service}
      serviceHero={service.serviceHero}
      statCards={service.statCards}
      featureSection={service.featureSection}
      processTimeline={service.processTimelineSteps}
    />
  );
}

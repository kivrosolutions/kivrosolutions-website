import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/servicesData";
import ServicePageLayout from "@/components/sections/ServicePageLayout";

export function generateMetadata() {
  const service = getServiceBySlug("ai-native");
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

export default function AINativePage() {
  const service = getServiceBySlug("ai-native");
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

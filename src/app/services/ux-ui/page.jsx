import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/servicesData";
import ServicePageLayout from "@/components/sections/ServicePageLayout";

export function generateMetadata() {
  const service = getServiceBySlug("ux-ui");
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

export default function UXUIDesignPage() {
  const service = getServiceBySlug("ux-ui");
  if (!service) notFound();
  return (
    <ServicePageLayout
      service={service}
      serviceHero={service.serviceHero}
      statCards={service.statCards}
      featureSection={service.featureSection}
      designCaseSection={service.designCaseSection}
      processTimeline={service.processTimelineSteps}
      orbitSphereItems={service.orbitSphereItems}
      comparisonTable={service.comparisonTable}
      ctaBanner={service.ctaBanner}
    />
  );
}

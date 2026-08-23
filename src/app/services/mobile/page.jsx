import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/servicesData";
import ServicePageLayout from "@/components/sections/ServicePageLayout";
import CostEstimator from "@/components/specificservice/estimator/CostEstimator";

export function generateMetadata() {
  const service = getServiceBySlug("mobile");
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

export default function MobileAppPage() {
  const service = getServiceBySlug("mobile");
  if (!service) notFound();
  return (
    <ServicePageLayout
      service={service}
      serviceHero={service.serviceHero}
      statCards={service.statCards}
      featureSection={service.featureSection}
      projectTimeline={service.projectTimeline}
      comparisonTable={service.comparisonTable}
      ctaBanner={service.ctaBanner}
      beforeCta={<CostEstimator />}
    />
  );
}

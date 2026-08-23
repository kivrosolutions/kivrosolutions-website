import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/servicesData";
import ServicePageLayout from "@/components/sections/ServicePageLayout";

export function generateMetadata() {
  const service = getServiceBySlug("iot");
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

export default function IoTPage() {
  const service = getServiceBySlug("iot");
  if (!service) notFound();
  return <ServicePageLayout service={service} />;
}

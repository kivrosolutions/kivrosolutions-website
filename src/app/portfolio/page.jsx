import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";

export const metadata = {
  title: "Our Work | Kivro Solutions",
  description:
    "Explore web, mobile, e-commerce, AI automation and digital marketing projects delivered by Kivro Solutions.",
  keywords: [
    "Kivro Solutions portfolio",
    "web development projects",
    "mobile app projects",
    "AI automation projects",
    "e-commerce development",
  ],
  openGraph: {
    title: "Our Work | Kivro Solutions",
    description: "Selected digital products and growth projects delivered by Kivro Solutions.",
    type: "website",
  },
};

const projects = [
  {
    title: "RNR Chauffeur",
    description: "Passenger and driver mobile ecosystem",
    image: "/images/portfolio/rnr-chauffeur.webp",
    imageAlt: "RNR Chauffeur passenger and driver applications",
    tags: ["Mobile", "Transport"],
    categories: ["mobile"],
    outcome: "Faster booking workflow",
  },
  {
    title: "Zamindar",
    description: "WooCommerce-powered shopping experience",
    image: "/images/portfolio/zamindar.webp",
    imageAlt: "Zamindar mobile shopping application",
    tags: ["E-commerce", "Mobile"],
    categories: ["ecommerce", "mobile"],
    outcome: "Smoother online purchasing",
  },
  {
    title: "Mining Operations",
    description: "Field intelligence and workforce platform",
    image: "/images/portfolio/mining-operations.webp",
    imageAlt: "Mining operations management dashboard",
    tags: ["Web App", "Operations"],
    categories: ["web"],
    outcome: "Unified field reporting",
  },
  {
    title: "AI Support Assistant",
    description: "Automated customer support for growing teams",
    image: "/images/portfolio/ai-support-assistant.webp",
    imageAlt: "AI customer support assistant interface",
    tags: ["AI", "Automation"],
    categories: ["ai", "web"],
    outcome: "Lighter support workload",
  },
  {
    title: "Digital Growth Campaign",
    description: "Conversion-focused campaigns across social channels",
    image: "/images/portfolio/digital-growth-campaign.webp",
    imageAlt: "Digital marketing campaign performance dashboard",
    tags: ["Marketing", "Growth"],
    categories: ["marketing"],
    outcome: "Clearer campaign decisions",
  },
];

export default function PortfolioPage() {
  return <PortfolioShowcase projects={projects} />;
}

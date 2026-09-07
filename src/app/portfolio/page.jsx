import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";
import { getAllProjects } from "@/lib/projectsData";

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
    description:
      "Selected digital products and growth projects delivered by Kivro Solutions.",
    type: "website",
  },
};

export default function PortfolioPage() {
  return <PortfolioShowcase projects={getAllProjects()} />;
}

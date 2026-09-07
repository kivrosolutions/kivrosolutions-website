import { siteConfig } from "@/config/site";
import { getAllProjects } from "@/lib/projectsData";

export const dynamic = "force-static";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/blog",
  ];

  const projectRoutes = getAllProjects().map(
    (project) => "/portfolio/" + project.slug
  );

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: siteConfig.url + route,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/portfolio/") ? 0.7 : 0.8,
  }));
}

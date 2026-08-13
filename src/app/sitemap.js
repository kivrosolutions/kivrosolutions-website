import { siteConfig } from "@/config/site";

export default function sitemap() {
  const routes = ["", "/about", "/services", "/portfolio", "/contact", "/blog"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

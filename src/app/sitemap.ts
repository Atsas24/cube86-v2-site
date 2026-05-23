import { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://cube86.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/industries/small-business", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/industries/charities", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/industries/professional-services", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/industries/hospitality", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

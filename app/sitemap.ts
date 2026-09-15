import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: {
    path: string;
    priority: number;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/products", priority: 0.95, changeFrequency: "weekly" },
    { path: "/products/edible-oils", priority: 0.9, changeFrequency: "weekly" },
    { path: "/products/agricultural-commodities", priority: 0.9, changeFrequency: "weekly" },
    { path: "/products/sugar-jaggery-cereals", priority: 0.85, changeFrequency: "weekly" },
    { path: "/products/spices", priority: 0.85, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/supply-delivery", priority: 0.8, changeFrequency: "monthly" },
    { path: "/values", priority: 0.75, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
  ];

  const now = new Date();

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}


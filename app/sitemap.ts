import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/products",
    "/products/edible-oils",
    "/products/agricultural-commodities",
    "/products/sugar-jaggery-cereals",
    "/products/spices",
    "/values",
    "/supply-delivery",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `https://ssoilandfibres.example${route}`,
    lastModified: new Date(),
  }));
}

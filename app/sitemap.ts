import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { solutions } from "@/lib/solutions";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/a-celimed",
    "/solucoes",
    "/setor-publico",
    "/setor-privado",
    "/tecnologia-desenvolvimento",
    "/contato",
    ...solutions.map((s) => `/solucoes/${s.slug}`),
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

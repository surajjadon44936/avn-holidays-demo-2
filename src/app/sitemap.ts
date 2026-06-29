import type { MetadataRoute } from "next";
import { experiences } from "@/data/experiences";
import { journeys } from "@/data/journeys";
import { stays } from "@/data/stays";
import { siteConfig } from "@/data/contact";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    "",
    "/experiences",
    "/journeys",
    "/stays",
    "/getting-around",
    "/about",
    "/reviews",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const experiencePages = experiences.map((e) => ({
    url: `${base}/experiences/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const journeyPages = journeys.map((j) => ({
    url: `${base}/journeys/${j.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const stayPages = stays.map((s) => ({
    url: `${base}/stays/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...experiencePages, ...journeyPages, ...stayPages];
}

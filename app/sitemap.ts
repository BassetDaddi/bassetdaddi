import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";
import { LOCALES } from "@/lib/locale";

// Both locales for every route, each entry carrying its alternates.
const PATHS = ["", "/work", "/services", "/about", "/notes", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: string[] = [...PATHS, ...PROJECTS.map((p) => `/work/${p.slug}`)];
  const lastModified = new Date();

  return paths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE.url}/${locale}${path}`,
      lastModified,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path.startsWith("/work") ? 0.8 : 0.6,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, `${SITE.url}/${l}${path}`])),
      },
    })),
  );
}

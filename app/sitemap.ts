import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { LOCALES } from "@/lib/locale";

const PATHS = ["", "/services", "/about", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PATHS.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE.url}/${locale}${path}`,
      lastModified,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, `${SITE.url}/${l}${path}`])),
      },
    })),
  );
}

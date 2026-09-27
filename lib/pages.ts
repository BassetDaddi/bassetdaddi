import type { Metadata } from "next";
import type { PageKey } from "@/content";
import { getCopy } from "@/content";
import { toLocale } from "@/lib/locale";
import { localizedMetadata } from "@/lib/seo";

export type LocaleParams = { params: Promise<{ locale: string }> };

export const PAGE_PATHS: Record<Exclude<PageKey, "home">, `/${string}`> = {
  services: "/services",
  about: "/about",
  contact: "/contact",
};

export async function pageMetadata(
  key: Exclude<PageKey, "home">,
  { params }: LocaleParams,
): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const page = getCopy(locale).meta[key];
  return localizedMetadata({
    locale,
    path: PAGE_PATHS[key],
    title: page.title,
    description: page.description,
  });
}

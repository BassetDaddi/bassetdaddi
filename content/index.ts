import type { Locale } from "@/lib/locale";
import { ar } from "./ar/site";
import { en } from "./en/site";
import type { SiteCopy } from "./types";

const copy: Record<Locale, SiteCopy> = { en, ar };

export function getCopy(locale: Locale): SiteCopy {
  return copy[locale];
}

export type { PageCopy, PageKey, SiteCopy } from "./types";

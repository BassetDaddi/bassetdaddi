import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { LOCALES, type Locale } from "@/lib/locale";

type Args = {
  locale: Locale;
  /** Path without the locale prefix, e.g. "/work". "" for the home page. */
  path: string;
  title: string;
  description: string;
};

/**
 * Canonical + hreflang for one page. x-default points at the English page —
 * a real 200 — never at "/", which only redirects.
 */
export function localizedMetadata({ locale, path, title, description }: Args): Metadata {
  const href = (l: Locale) => `${SITE.url}/${l}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: href(locale),
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [l, href(l)])),
        "x-default": href("en"),
      },
    },
    openGraph: {
      title,
      description,
      url: href(locale),
      siteName: SITE.brand,
      locale: locale === "ar" ? "ar_DZ" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_DZ"],
      type: "website",
    },
  };
}

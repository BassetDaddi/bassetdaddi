// Locale primitives shared by the request interceptor (proxy.ts), the i18n
// routing config and the UI. Kept dependency-free so proxy.ts stays lean.

export const LOCALES = ["en", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

// Written only when the visitor switches language by hand (see
// components/layout/LanguageSwitcher.tsx). Read by proxy.ts to route "/" and
// any unprefixed path. Deliberately not next-intl's NEXT_LOCALE: that one is
// set on any locale-prefixed visit, which would let a shared /ar link
// silently overwrite an English speaker's preference.
export const LOCALE_COOKIE = "bd_locale";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // one year

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

export function toLocale(value: string): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function dirFor(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

// Formatting locale for Intl (dates, numbers). Algeria uses Western digits,
// which ar-DZ gives by default.
export function intlLocale(locale: Locale): string {
  return locale === "ar" ? "ar-DZ" : "en";
}

/**
 * Picks the locale from an Accept-Language header per the brief: if the
 * browser's preferred language begins with Arabic, Arabic; otherwise English.
 * "Preferred" is the highest-q entry, so "fr-DZ, ar;q=0.8" resolves to English.
 */
export function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;

  const entries = header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith("q="));
      const weight = q ? Number.parseFloat(q.slice(2)) : 1;
      return {
        tag: tag.trim().toLowerCase(),
        weight: Number.isFinite(weight) ? weight : 0,
        index,
      };
    })
    .filter((entry) => entry.tag.length > 0 && entry.weight > 0)
    .sort((a, b) => b.weight - a.weight || a.index - b.index);

  const preferred = entries[0]?.tag;
  if (!preferred) return DEFAULT_LOCALE;

  const primary = preferred.split("-")[0];
  return primary === "ar" ? "ar" : DEFAULT_LOCALE;
}

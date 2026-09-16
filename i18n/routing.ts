import { defineRouting } from "next-intl/routing";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/locale";

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  // Both locales are always prefixed; "/" is handled by proxy.ts.
  localePrefix: "always",
  // Detection and the preference cookie are owned by proxy.ts and the
  // language switcher, not by next-intl's middleware (which is not used).
  localeDetection: false,
  localeCookie: false,
});

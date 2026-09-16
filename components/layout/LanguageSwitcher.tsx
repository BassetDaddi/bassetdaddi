"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { LOCALES, LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE, type Locale } from "@/lib/locale";

const LABELS: Record<Locale, string> = { en: "EN", ar: "عربي" };

// EN · عربي. Each option is a real link to the same page in the other locale,
// so it works without JavaScript and is keyboard-accessible by nature. The
// click handler only adds the preference cookie that proxy.ts reads on later
// visits to "/" — the manual choice must beat the browser language.
function remember(locale: Locale) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
}

export function LanguageSwitcher({
  labels,
  groupLabel,
  className,
}: {
  /** Accessible "Switch to …" label per target locale, in the page language. */
  labels: Record<Locale, string>;
  groupLabel: string;
  className?: string;
}) {
  const current = useLocale();
  const pathname = usePathname();

  return (
    <span
      role="group"
      aria-label={groupLabel}
      className={cn("inline-flex items-center gap-3 t-ui", className)}
    >
      {LOCALES.map((locale, index) => (
        <span key={locale} className="inline-flex items-center gap-3">
          {index > 0 ? <span aria-hidden="true" className="h-3 w-px bg-line-strong" /> : null}
          <Link
            href={pathname}
            locale={locale}
            hrefLang={locale}
            lang={locale}
            aria-label={labels[locale]}
            aria-current={locale === current ? "true" : undefined}
            onClick={() => remember(locale)}
            className={cn(
              "no-underline transition-colors duration-150 ease-std hover:text-fg",
              locale === "ar" ? "font-arabic" : "font-latin",
              locale === current ? "text-fg" : "text-fg-3",
            )}
          >
            {LABELS[locale]}
          </Link>
        </span>
      ))}
    </span>
  );
}

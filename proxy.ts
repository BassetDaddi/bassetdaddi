import { NextResponse, type NextRequest } from "next/server";
import {
  LOCALES,
  LOCALE_COOKIE,
  isLocale,
  localeFromAcceptLanguage,
} from "@/lib/locale";

/**
 * The only request-time code on the site.
 *
 * Every page is prerendered under /en and /ar. This interceptor handles the
 * unprefixed URLs only — "/" and anything typed or shared without a locale —
 * and sends them to the right tree:
 *
 *   1. a locale the visitor chose by hand (cookie)
 *   2. the browser's preferred language, if it begins with Arabic
 *   3. English
 *
 * It never writes the cookie; only the switcher does. Redirects are 307 so
 * browsers never cache them — a cached 301 would break switching later.
 * Locale-prefixed paths pass straight through, so there is nothing to loop.
 */
function hasLocalePrefix(pathname: string): boolean {
  return LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (hasLocalePrefix(pathname)) {
    return NextResponse.next();
  }

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(saved)
    ? saved
    : localeFromAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  const response = NextResponse.redirect(url, 307);
  response.headers.set("Vary", "Accept-Language, Cookie");
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

export const config = {
  // Everything except Next internals, API routes, public assets and any path
  // that looks like a file (has an extension).
  matcher: ["/((?!_next/|api/|images/|.*\\..*).*)"],
};

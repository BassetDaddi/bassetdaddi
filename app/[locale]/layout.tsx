import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/ui/SkipLink";
import { getCopy } from "@/content";
import { SITE } from "@/data/site";
import { routing } from "@/i18n/routing";
import { arabic, latin } from "@/lib/fonts";
import { dirFor, toLocale } from "@/lib/locale";
import "../globals.css";

// Root layout, under the locale segment. Every page below is prerendered for
// both locales; there is no per-request rendering anywhere in the tree.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const copy = getCopy(locale);

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: copy.homeTitle,
      template: `%s — ${locale === "ar" ? "باسط دادي" : SITE.brand}`,
    },
    applicationName: SITE.brand,
    formatDetection: { telephone: false, address: false, email: false },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      dir={dirFor(locale)}
      className={`${latin.variable} ${arabic.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-surface text-fg">
        {/* Client components receive their strings as props, so no message
            bundle is serialized into the page; only the locale is provided. */}
        <NextIntlClientProvider messages={null}>
          <SkipLink />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

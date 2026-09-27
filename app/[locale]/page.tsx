import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getCopy } from "@/content";
import { toLocale } from "@/lib/locale";
import { localizedMetadata } from "@/lib/seo";
import { AboutTeaser } from "@/sections/AboutTeaser";
import { Approach } from "@/sections/Approach";
import { FinalCta } from "@/sections/FinalCta";
import { Hero } from "@/sections/Hero";
import { MediaBuyingOffer } from "@/sections/MediaBuyingOffer";
import { Positioning } from "@/sections/Positioning";
import { Services } from "@/sections/Services";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const copy = getCopy(locale);
  return {
    ...localizedMetadata({
      locale,
      path: "",
      title: copy.homeTitle,
      description: copy.meta.home.description,
    }),
    title: { absolute: copy.homeTitle },
  };
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const locale = toLocale((await params).locale);
  setRequestLocale(locale);

  return (
    <>
      <Hero locale={locale} />
      <Positioning locale={locale} />
      <Services locale={locale} />
      <MediaBuyingOffer locale={locale} surface="paper" />
      <Approach locale={locale} surface="navy" />
      <AboutTeaser locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}

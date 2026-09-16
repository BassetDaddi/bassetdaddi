import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getCopy } from "@/content";
import { toLocale } from "@/lib/locale";
import { localizedMetadata } from "@/lib/seo";
import { AboutTeaser } from "@/sections/AboutTeaser";
import { Approach } from "@/sections/Approach";
import { FinalCta } from "@/sections/FinalCta";
import { Hero } from "@/sections/Hero";
import { NotesTeaser } from "@/sections/NotesTeaser";
import { Positioning } from "@/sections/Positioning";
import { SelectedWork } from "@/sections/SelectedWork";
import { Services } from "@/sections/Services";

// Homepage narrative from the brief: nav · hero · positioning · selected work ·
// services · approach · about · notes · final CTA · footer. Surfaces: ink →
// ink → ink → navy → paper → paper → ink → ink.
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
      <SelectedWork locale={locale} />
      <Services locale={locale} />
      <Approach locale={locale} />
      <AboutTeaser locale={locale} />
      <NotesTeaser locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}

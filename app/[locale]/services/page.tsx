import { setRequestLocale } from "next-intl/server";
import { PageIntro } from "@/components/ui/PageIntro";
import { getCopy } from "@/content";
import { toLocale } from "@/lib/locale";
import { pageMetadata, type LocaleParams } from "@/lib/pages";

export const generateMetadata = (props: LocaleParams) =>
  pageMetadata("services", props);

// Phase 2 shell. The three pillars — Growth, Digital Experiences, Systems —
// are composed in Phase 5.
export default async function ServicesPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  setRequestLocale(locale);
  const page = getCopy(locale).pages.services;

  return <PageIntro eyebrow={page.eyebrow} title={page.h1} lede={page.lede} />;
}

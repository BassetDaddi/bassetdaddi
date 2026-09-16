import { setRequestLocale } from "next-intl/server";
import { PageIntro } from "@/components/ui/PageIntro";
import { getCopy } from "@/content";
import { toLocale } from "@/lib/locale";
import { pageMetadata, type LocaleParams } from "@/lib/pages";

export const generateMetadata = (props: LocaleParams) => pageMetadata("about", props);

// Phase 2 shell. This is the one page that carries the full name; the About
// portrait on the paper surface is composed in Phase 5.
export default async function AboutPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  setRequestLocale(locale);
  const page = getCopy(locale).pages.about;

  return <PageIntro eyebrow={page.eyebrow} title={page.h1} lede={page.lede} />;
}

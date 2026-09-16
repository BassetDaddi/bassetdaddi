import { setRequestLocale } from "next-intl/server";
import { PageIntro } from "@/components/ui/PageIntro";
import { getCopy } from "@/content";
import { toLocale } from "@/lib/locale";
import { pageMetadata, type LocaleParams } from "@/lib/pages";

export const generateMetadata = (props: LocaleParams) => pageMetadata("work", props);

// Phase 2 shell. The editorial project presentation and the FORCE SCREW case
// study (work in progress, no results until verified) arrive in Phase 5.
export default async function WorkPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  setRequestLocale(locale);
  const page = getCopy(locale).pages.work;

  return <PageIntro eyebrow={page.eyebrow} title={page.h1} lede={page.lede} />;
}

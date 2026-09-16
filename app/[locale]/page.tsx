import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Availability } from "@/components/ui/Availability";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getCopy } from "@/content";
import { SITE } from "@/data/site";
import { toLocale } from "@/lib/locale";
import { localizedMetadata } from "@/lib/seo";

// Phase 2: the page shell with the hero's *content* in plain form — headline,
// support line, location, availability, two CTAs. The composed hero (grid,
// portrait, reveal) is Phase 3 and replaces this block.
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
      description: copy.pages.home.description,
    }),
    title: { absolute: copy.homeTitle },
  };
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const locale = toLocale((await params).locale);
  setRequestLocale(locale);
  const copy = getCopy(locale);
  const page = copy.pages.home;

  return (
    <Container>
      <section className="grid grid-cols-6 gap-x-4 gap-y-8 border-b border-line py-20 md:grid-cols-12 md:gap-x-6 md:py-32 lg:gap-x-8 lg:py-40">
        <div className="col-span-6 md:col-span-9">
          <h1 className="t-display">{page.h1}</h1>
        </div>
        <div className="col-span-6 md:col-span-6 md:col-start-1">
          <p className="measure t-body-l text-fg-2">{page.lede}</p>
        </div>
        <div className="col-span-6 flex flex-col gap-3 md:col-span-4 md:col-start-9 md:items-end">
          <p className="t-meta text-fg-3">{SITE.location[locale]}</p>
          <Availability locale={locale} className="whitespace-nowrap" />
        </div>
        <div className="col-span-6 flex flex-wrap gap-3 md:col-span-8">
          <Button href="/work">{copy.home.primaryCta}</Button>
          <Button href="/contact" variant="secondary">
            {copy.home.secondaryCta}
          </Button>
        </div>
      </section>
    </Container>
  );
}

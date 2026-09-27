import { setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { PageIntro } from "@/components/ui/PageIntro";
import { getCopy } from "@/content";
import { IMAGERY } from "@/data/imagery";
import { toLocale } from "@/lib/locale";
import { pageMetadata, type LocaleParams } from "@/lib/pages";
import { Approach } from "@/sections/Approach";
import { FinalCta } from "@/sections/FinalCta";
import { MediaBuyingOffer } from "@/sections/MediaBuyingOffer";
import { Pillars } from "@/sections/Services";

export const generateMetadata = (props: LocaleParams) =>
  pageMetadata("services", props);

export default async function ServicesPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  setRequestLocale(locale);
  const { services, positioning, mediaBuying } = getCopy(locale);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: locale === "ar" ? "إدارة الإعلانات المدفوعة على Meta وTikTok" : "Meta & TikTok Media Buying Management",
    provider: {
      "@type": "Person",
      name: "Basset Daddi",
      url: "https://bassetdaddi.com",
    },
    areaServed: "DZ",
    description: mediaBuying.intro,
    offers: [
      {
        "@type": "Offer",
        name: mediaBuying.firstMonthLabel,
        price: "45000",
        priceCurrency: "DZD",
        description: mediaBuying.firstMonthNote,
      },
      {
        "@type": "Offer",
        name: mediaBuying.recurringLabel,
        price: "35000",
        priceCurrency: "DZD",
        description: mediaBuying.recurringNote,
      },
    ],
  };

  return (
    <>
      <PageIntro eyebrow={services.eyebrow} title={services.title} lede={services.intro} />

      <Container className="py-[clamp(4rem,8vw,7rem)]">
        <div className="grid grid-cols-6 gap-x-4 gap-y-12 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          <Reveal className="col-span-6 md:col-span-5">
            <EditorialImage
              image={IMAGERY.webDesign}
              locale={locale}
              aspect="4/5"
              sizes="(min-width: 1536px) 560px, (min-width: 768px) 40vw, 100vw"
            />
          </Reveal>
          <div className="col-span-6 md:col-span-6 md:col-start-7">
            <Pillars pillars={services.pillars} expanded />
          </div>
        </div>
      </Container>

      <MediaBuyingOffer locale={locale} surface="paper" />

      <section data-surface="navy" className="section-y bg-surface text-fg">
        <Container>
          <div className="grid grid-cols-6 gap-x-4 gap-y-8 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
            <Reveal className="col-span-6 md:col-span-4">
              <p className="t-meta text-fg-3">{positioning.words.join(" ")}</p>
            </Reveal>
            <Reveal delay={100} className="col-span-6 md:col-span-7 md:col-start-6">
              <h2 className="t-h2">{positioning.lead}</h2>
              <p className="mt-6 measure t-body-l text-fg-2">{positioning.body}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Approach locale={locale} surface="paper" />
      <FinalCta locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

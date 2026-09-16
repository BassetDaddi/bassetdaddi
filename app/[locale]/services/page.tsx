import { setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { PageIntro } from "@/components/ui/PageIntro";
import { Portrait, PORTRAITS } from "@/components/ui/Portrait";
import { getCopy } from "@/content";
import { IMAGERY } from "@/data/imagery";
import { toLocale } from "@/lib/locale";
import { pageMetadata, type LocaleParams } from "@/lib/pages";
import { Approach } from "@/sections/Approach";
import { FinalCta } from "@/sections/FinalCta";
import { Pillars } from "@/sections/Services";

export const generateMetadata = (props: LocaleParams) =>
  pageMetadata("services", props);

// Services: the intro, one structural photograph, the three pillars expanded,
// the work portrait as the section's closing image, then the approach.
export default async function ServicesPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  setRequestLocale(locale);
  const { services, positioning } = getCopy(locale);
  const alt = locale === "ar" ? "باسط دادي" : "Basset Daddi";

  return (
    <>
      <PageIntro eyebrow={services.eyebrow} title={services.title} lede={services.intro} />

      <Container className="pt-[clamp(4rem,8vw,7rem)]">
        <div className="grid grid-cols-6 gap-x-4 gap-y-12 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          <Reveal className="col-span-6 md:col-span-4">
            <EditorialImage
              image={IMAGERY.grid}
              locale={locale}
              aspect="3/4"
              sizes="(min-width: 1536px) 440px, (min-width: 768px) 33vw, 100vw"
            />
          </Reveal>
          <div className="col-span-6 md:col-span-7 md:col-start-6">
            <Pillars pillars={services.pillars} expanded />
          </div>
        </div>
      </Container>

      <Container className="pb-[clamp(6rem,12vw,10rem)] pt-[clamp(4rem,8vw,7rem)]">
        <div className="grid grid-cols-6 gap-x-4 gap-y-12 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          <Reveal className="col-span-6 md:col-span-5 md:self-end md:pb-12">
            <p className="t-h2">{positioning.lead}</p>
            <p className="mt-6 measure t-body-l text-fg-2">{positioning.body}</p>
          </Reveal>
          <div className="col-span-6 md:col-span-5 md:col-start-8">
            <Reveal delay={100}>
              <Portrait
                src={PORTRAITS.work}
                alt={alt}
                crop="full"
                drift
                sizes="(min-width: 1536px) 560px, (min-width: 768px) 40vw, 100vw"
              />
            </Reveal>
          </div>
        </div>
      </Container>

      <Approach locale={locale} surface="paper" />
      <FinalCta locale={locale} />
    </>
  );
}

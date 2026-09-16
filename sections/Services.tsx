import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { Portrait, PORTRAITS } from "@/components/ui/Portrait";
import { SectionHead } from "@/components/ui/SectionHead";
import { getCopy } from "@/content";
import type { Pillar } from "@/content/types";
import type { Locale } from "@/lib/locale";

// The three pillars as hairline rows — index, name, copy, and the practice
// list set as a single running line. No cards.
export function Pillars({ pillars, expanded = false }: { pillars: Pillar[]; expanded?: boolean }) {
  return (
    <ol className="border-t border-line">
      {pillars.map((pillar, i) => (
        <Reveal
          as="li"
          key={pillar.index}
          delay={i * 80}
          className="grid grid-cols-6 gap-x-4 gap-y-4 border-b border-line py-8 md:grid-cols-8 md:gap-x-6 md:py-10"
        >
          <span className="col-span-6 t-meta text-fg-3 md:col-span-1" aria-hidden="true">
            {pillar.index}
          </span>
          <div className="col-span-6 md:col-span-7">
            <h3 className={expanded ? "t-h2" : "t-h3"}>{pillar.name}</h3>
            <p className={`mt-4 measure text-fg-2 ${expanded ? "t-body-l" : "t-body"}`}>{pillar.copy}</p>
            <ul className={`mt-5 flex flex-wrap gap-x-5 gap-y-2 ${expanded ? "t-body" : "t-small"} text-fg-3`}>
              {pillar.items.map((item) => (
                <li key={item} className="flex items-center gap-5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

// 05 — Services / what I build. Navy band. Portrait on the first four
// columns, bleeding the bottom edge; the pillars on the remaining seven.
export async function Services({ locale }: { locale: Locale }) {
  const { services } = getCopy(locale);
  const t = await getTranslations("Services");
  const alt = locale === "ar" ? "باسط دادي" : "Basset Daddi";

  return (
    <section data-surface="navy" className="overflow-hidden bg-surface text-fg">
      <Container className="pt-[clamp(6rem,12vw,10rem)]">
        <SectionHead
          eyebrow={services.eyebrow}
          title={services.title}
          action={<ArrowLink href="/services">{t("all")}</ArrowLink>}
        />
      </Container>
      <Container>
        <div className="mt-12 grid grid-cols-6 gap-x-4 md:mt-16 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          <div className="col-span-6 md:col-span-7 md:col-start-6 md:pb-[clamp(6rem,12vw,10rem)]">
            <Pillars pillars={services.pillars} />
          </div>
          <div className="relative col-span-6 mt-16 md:col-span-4 md:col-start-1 md:row-start-1 md:mt-0">
            <div className="md:absolute md:inset-x-0 md:bottom-0">
              <Reveal>
                <Portrait
                  src={PORTRAITS.work}
                  alt={alt}
                  crop="full"
                  drift
                  sizes="(min-width: 1536px) 440px, (min-width: 768px) 33vw, 100vw"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

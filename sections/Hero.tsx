import type { CSSProperties } from "react";
import { Availability } from "@/components/ui/Availability";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Portrait, PORTRAITS } from "@/components/ui/Portrait";
import { getCopy } from "@/content";
import { SITE } from "@/data/site";
import type { Locale } from "@/lib/locale";

// 02 — Hero. Asymmetric: type on columns 1–7, the portrait on columns 8–12
// bleeding off the bottom of the section and dissolving into the ink. Mobile
// is composed separately: headline, then a head-and-shoulders crop, then body.
const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero({ locale }: { locale: Locale }) {
  const { hero } = getCopy(locale);
  const alt =
    locale === "ar" ? "باسط دادي — صورة شخصية" : "Basset Daddi — portrait";

  return (
    <section className="relative overflow-hidden">
      <Container className="relative">
        <div className="grid grid-cols-6 gap-x-4 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          {/* Type block */}
          <div className="col-span-6 flex flex-col pt-14 md:col-span-7 md:min-h-[82vh] md:justify-center md:pb-24 md:pt-16 lg:min-h-[86vh]">
            <p className="hero-in t-meta text-fg-3" style={d(0)}>
              {hero.eyebrow}
            </p>
            <h1 className="hero-in mt-6 t-hero" style={d(80)}>
              {hero.headline}
            </h1>

            {/* Mobile portrait: head and shoulders, between headline and body */}
            <div className="hero-in mt-10 md:hidden" style={d(140)}>
              <Portrait
                src={PORTRAITS.hero}
                alt={alt}
                crop="bust"
                priority
                sizes="100vw"
                className="ms-auto w-[86%]"
              />
            </div>

            <p className="hero-in mt-10 measure t-body-l text-fg-2 md:mt-10" style={d(180)}>
              {hero.body}
            </p>
            <div className="hero-in mt-10 flex flex-wrap gap-3" style={d(260)}>
              <Button href="/work">{hero.primaryCta}</Button>
              <Button href="/contact" variant="secondary">
                {hero.secondaryCta}
              </Button>
            </div>
            <div
              className="hero-in mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-5 md:mt-16"
              style={d(340)}
            >
              <span className="t-meta text-fg-3">{SITE.location[locale]}</span>
              <Availability locale={locale} />
            </div>
          </div>

          {/* Desktop portrait: columns 8–12, anchored to the bottom edge */}
          <div className="relative hidden md:col-span-5 md:col-start-8 md:block">
            <div className="absolute inset-x-0 bottom-0 md:inset-x-[-8%] lg:inset-x-[-6%]">
              <Portrait
                src={PORTRAITS.hero}
                alt={alt}
                crop="full"
                priority
                emerge
                sizes="(min-width: 1536px) 560px, (min-width: 768px) 42vw, 100vw"
                className="max-h-[86vh]"
              />
            </div>
          </div>
        </div>
      </Container>
      <div aria-hidden="true" className="h-px w-full bg-line" />
    </section>
  );
}

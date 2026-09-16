import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { Portrait, PORTRAITS } from "@/components/ui/Portrait";
import { getCopy } from "@/content";
import type { Locale } from "@/lib/locale";

// 07 — About. Paper surface: the seated portrait reads in full against the
// light ground. Portrait on columns 1–5, text on 7–12.
export function AboutTeaser({ locale }: { locale: Locale }) {
  const { about } = getCopy(locale);
  const alt = locale === "ar" ? "باسط دادي جالسًا" : "Basset Daddi, seated";

  return (
    <section data-surface="paper" className="overflow-hidden bg-surface text-fg">
      <Container>
        <div className="grid grid-cols-6 gap-x-4 border-t border-line md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          <div className="col-span-6 pt-[clamp(4rem,8vw,7rem)] md:col-span-6 md:col-start-7 md:pb-[clamp(6rem,12vw,10rem)] md:pt-[clamp(6rem,12vw,10rem)]">
            <Reveal>
              <p className="t-meta text-fg-3">{about.eyebrow}</p>
              <h2 className="mt-5 t-h1">{about.title}</h2>
            </Reveal>
            <Reveal delay={100} className="mt-8 flex flex-col gap-5">
              {about.excerpt.map((line) => (
                <p key={line} className="measure t-body-l text-fg-2">
                  {line}
                </p>
              ))}
            </Reveal>
            <Reveal delay={160} className="mt-10">
              <ArrowLink href="/about">{about.readMore}</ArrowLink>
            </Reveal>
          </div>
          <div className="col-span-6 mt-12 md:col-span-5 md:col-start-1 md:row-start-1 md:mt-0 md:self-end">
            <Reveal>
              <Portrait
                src={PORTRAITS.about}
                alt={alt}
                crop="full"
                drift
                sizes="(min-width: 1536px) 560px, (min-width: 768px) 40vw, 100vw"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

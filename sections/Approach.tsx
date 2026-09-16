import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { getCopy } from "@/content";
import type { Locale } from "@/lib/locale";

// 06 — Approach. Five steps as a numbered hairline list on the paper surface;
// the numbers carry real sequence, which is why they are allowed.
export function Approach({ locale, surface = "paper" }: { locale: Locale; surface?: "paper" | "ink" | "navy" }) {
  const { approach } = getCopy(locale);

  return (
    <section data-surface={surface} className="section-y bg-surface text-fg">
      <Container>
        <SectionHead eyebrow={approach.eyebrow} title={approach.title} />
        <ol className="mt-12 grid grid-cols-6 gap-x-4 md:mt-16 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          {approach.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.index}
              delay={i * 70}
              className="col-span-6 grid grid-cols-6 gap-x-4 border-t border-line py-7 md:col-span-12 md:grid-cols-12 md:gap-x-6 md:py-9 lg:gap-x-8"
            >
              <span className="col-span-1 t-meta text-fg-3 md:col-span-1" aria-hidden="true">
                {step.index}
              </span>
              <h3 className="col-span-5 t-h3 md:col-span-3">{step.name}</h3>
              <p className="col-span-6 mt-3 measure t-body-l text-fg-2 md:col-span-7 md:col-start-5 md:mt-0">
                {step.line}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { getCopy } from "@/content";
import type { Locale } from "@/lib/locale";

export function MediaBuyingOffer({
  locale,
  surface = "paper",
}: {
  locale: Locale;
  surface?: "paper" | "ink" | "navy";
}) {
  const { mediaBuying } = getCopy(locale);

  return (
    <section data-surface={surface} className="section-y bg-surface text-fg">
      <Container>
        <div className="grid grid-cols-6 gap-x-4 gap-y-12 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          <Reveal className="col-span-6 md:col-span-5">
            <p className="t-meta text-fg-3">{mediaBuying.eyebrow}</p>
            <h2 className="mt-5 t-h1">{mediaBuying.title}</h2>
            <p className="mt-7 measure t-body-l text-fg-2">{mediaBuying.intro}</p>
            <div className="mt-9">
              <Button href="/contact">{mediaBuying.cta}</Button>
            </div>
          </Reveal>

          <div className="col-span-6 md:col-span-6 md:col-start-7">
            <div className="grid gap-px overflow-hidden rounded-[4px] bg-line sm:grid-cols-2">
              <Reveal className="bg-surface-2 p-7 md:p-8">
                <p className="t-meta text-fg-3">{mediaBuying.firstMonthLabel}</p>
                <p className="mt-5 t-h1" lang="en">
                  {mediaBuying.firstMonthPrice}
                </p>
                <p className="mt-3 t-small text-fg-2">{mediaBuying.firstMonthNote}</p>
              </Reveal>
              <Reveal delay={80} className="bg-surface-2 p-7 md:p-8">
                <p className="t-meta text-fg-3">{mediaBuying.recurringLabel}</p>
                <p className="mt-5 t-h1" lang="en">
                  {mediaBuying.recurringPrice}
                </p>
                <p className="mt-3 t-small text-fg-2">{mediaBuying.recurringNote}</p>
              </Reveal>
            </div>

            <Reveal delay={120} className="mt-8 border-t border-line pt-7">
              <p className="t-meta text-fg-3">{mediaBuying.includesTitle}</p>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {mediaBuying.includes.map((item) => (
                  <li key={item} className="flex gap-3 t-body text-fg-2">
                    <span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160} className="mt-8 grid gap-6 border-t border-line pt-7 sm:grid-cols-2">
              <div>
                <h3 className="t-h3">{mediaBuying.budgetTitle}</h3>
                <p className="mt-3 t-body text-fg-2">{mediaBuying.budgetBody}</p>
                <p className="mt-3 t-small text-fg-3">{mediaBuying.creativeBody}</p>
              </div>
              <div>
                <h3 className="t-h3">{mediaBuying.outcomeTitle}</h3>
                <p className="mt-3 t-body text-fg-2">{mediaBuying.outcomeBody}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

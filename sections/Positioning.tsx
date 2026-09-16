import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { getCopy } from "@/content";
import type { Locale } from "@/lib/locale";

// 03 — Positioning. Three words at display scale on the left; the argument on
// the right. Typography does the work; there is nothing else on the surface.
export function Positioning({ locale }: { locale: Locale }) {
  const { positioning } = getCopy(locale);

  return (
    <section className="section-y">
      <Container>
        <div className="grid grid-cols-6 gap-x-4 gap-y-12 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          <Reveal as="ul" className="col-span-6 md:col-span-5">
            {positioning.words.map((word, i) => (
              <li
                key={word}
                className="t-h1 leading-none"
                style={{ color: i === 2 ? "var(--fg)" : "var(--fg-2)" }}
              >
                {word}
              </li>
            ))}
          </Reveal>
          <Reveal delay={120} className="col-span-6 md:col-span-6 md:col-start-7 md:self-end">
            <p className="t-h3">{positioning.lead}</p>
            <p className="mt-6 measure t-body-l text-fg-2">{positioning.body}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

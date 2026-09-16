import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowAnchor } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { getCopy } from "@/content";
import { PRIMARY_SOCIAL, SITE } from "@/data/site";
import type { Locale } from "@/lib/locale";

// 09 — Final CTA. Strong and minimal: the question at display scale, one
// line, the address as the action. Direct channels underneath.
export async function FinalCta({ locale }: { locale: Locale }) {
  const { finalCta } = getCopy(locale);
  const t = await getTranslations("A11y");

  return (
    <section className="section-y border-t border-line">
      <Container>
        <div className="grid grid-cols-6 gap-x-4 gap-y-12 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          <Reveal className="col-span-6 md:col-span-8">
            <h2 className="t-display">{finalCta.title}</h2>
            <p className="mt-8 measure t-body-l text-fg-2">{finalCta.body}</p>
          </Reveal>
          <Reveal delay={120} className="col-span-6 flex flex-col gap-6 border-t border-line pt-6 md:col-span-4 md:col-start-9 md:self-end">
            <a
              href={`mailto:${SITE.email}`}
              className="t-h3 no-underline transition-colors duration-150 ease-std hover:text-accent"
              lang="en"
            >
              {SITE.email}
            </a>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {PRIMARY_SOCIAL.map((link) => (
                <li key={link.id}>
                  <ArrowAnchor href={link.url} target="_blank" rel="me noopener" className="text-fg-2">
                    {link.label}
                    <span className="sr-only"> ({t("opensNewTab")})</span>
                  </ArrowAnchor>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

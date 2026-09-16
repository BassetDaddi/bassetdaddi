import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { ProjectFeature } from "@/components/work/ProjectFeature";
import { getCopy } from "@/content";
import { FEATURED_PROJECT } from "@/data/projects";
import type { Locale } from "@/lib/locale";

// 04 — Selected work. One project at full editorial scale.
export function SelectedWork({ locale }: { locale: Locale }) {
  const { work } = getCopy(locale);

  return (
    <section className="pb-[clamp(6rem,12vw,10rem)]">
      <Container>
        <SectionHead
          eyebrow={work.eyebrow}
          action={<ArrowLink href="/work">{work.allProjects}</ArrowLink>}
        />
        <div className="mt-12 md:mt-16">
          <ProjectFeature project={FEATURED_PROJECT} locale={locale} />
        </div>
      </Container>
    </section>
  );
}

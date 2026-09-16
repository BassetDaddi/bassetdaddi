import { setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProjectFeature } from "@/components/work/ProjectFeature";
import { getCopy } from "@/content";
import { PROJECTS } from "@/data/projects";
import { toLocale } from "@/lib/locale";
import { pageMetadata, type LocaleParams } from "@/lib/pages";
import { FinalCta } from "@/sections/FinalCta";

export const generateMetadata = (props: LocaleParams) => pageMetadata("work", props);

// Work index: every project at full editorial scale, newest first. Today that
// is one project, presented as a record — plus an honest line about what
// comes next, instead of invented entries.
export default async function WorkPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  setRequestLocale(locale);
  const { work } = getCopy(locale);

  return (
    <>
      <PageIntro eyebrow={work.eyebrow} title={work.title} lede={work.intro} />
      <Container className="pt-[clamp(4rem,8vw,7rem)] pb-[clamp(6rem,12vw,10rem)]">
        <div className="flex flex-col gap-[clamp(6rem,12vw,10rem)]">
          {PROJECTS.map((project) => (
            <ProjectFeature key={project.slug} project={project} locale={locale} />
          ))}
        </div>
        <Reveal className="mt-[clamp(4rem,8vw,7rem)] grid grid-cols-6 gap-x-4 border-t border-line pt-6 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          <p className="col-span-6 measure t-body text-fg-3 md:col-span-7 md:col-start-4">{work.moreSoon}</p>
        </Reveal>
      </Container>
      <FinalCta locale={locale} />
    </>
  );
}

import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { getCopy } from "@/content";
import { IMAGERY } from "@/data/imagery";
import { getProject, PROJECTS } from "@/data/projects";
import { routing } from "@/i18n/routing";
import { toLocale } from "@/lib/locale";
import { localizedMetadata } from "@/lib/seo";
import { FinalCta } from "@/sections/FinalCta";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    PROJECTS.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = toLocale(rawLocale);
  const project = getProject(slug);
  if (!project) return {};
  const t = await getTranslations({ locale, namespace: "Work" });
  return localizedMetadata({
    locale,
    path: `/work/${project.slug}`,
    title: `${project.client} — ${t("caseStudy")}`,
    description: project.summary[locale][0],
  });
}

// The case-study system from the brief: Introduction · Client · Industry ·
// Year · Role · Context · Problem · Strategy · Execution · Creative · Paid
// media · Experiments · Results · Learnings · Next project. Sections with real
// content render; the ones that depend on verified data render as one
// honest block until they exist.
export default async function CaseStudyPage({ params }: Params) {
  const { locale: rawLocale, slug } = await params;
  const locale = toLocale(rawLocale);
  setRequestLocale(locale);
  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations("Work");
  const { work } = getCopy(locale);
  const status = project.status === "in-progress" ? t("inProgress") : t("completed");

  const rail = [
    { label: t("client"), value: project.client, lang: "en" as const },
    { label: t("industry"), value: project.industry[locale] },
    { label: t("country"), value: project.country[locale] },
    { label: t("year"), value: project.year ?? t("ongoing") },
    { label: t("role"), value: project.role[locale] },
    { label: t("status"), value: status },
  ];

  const sections = [
    { index: "01", heading: t("context"), body: project.sections.context[locale] },
    { index: "02", heading: t("problem"), body: project.sections.problem[locale] },
    { index: "03", heading: t("strategy"), body: project.sections.strategy[locale] },
    { index: "04", heading: t("execution"), body: project.sections.execution[locale] },
  ];

  const pending = [
    { label: t("creative"), state: t("pending") },
    { label: t("paidMedia"), state: t("pending") },
    { label: t("experiments"), state: t("pending") },
    { label: t("results"), state: t("notVerified") },
    { label: t("learnings"), state: t("notVerified") },
  ];

  return (
    <>
      <Container>
        {/* Opening */}
        <div className="grid grid-cols-6 gap-x-4 gap-y-6 border-b border-line py-20 md:grid-cols-12 md:gap-x-6 md:py-32 lg:gap-x-8">
          <p className="col-span-6 t-meta text-fg-3 md:col-span-3">
            {t("caseStudy")} · {status}
          </p>
          <div className="col-span-6 md:col-span-9">
            <p className="t-meta text-fg-2" lang="en">
              {project.client}
            </p>
            <h1 className="mt-4 t-h1">{project.title[locale]}</h1>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-x-4 gap-y-14 py-[clamp(4rem,8vw,7rem)] md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          {/* Metadata rail — the case-file discipline */}
          <aside className="col-span-6 md:col-span-3 md:sticky md:top-24 md:self-start">
            <Reveal>
              <dl className="flex flex-col">
                {rail.map((item) => (
                  <div key={item.label} className="grid grid-cols-2 gap-x-4 border-t border-line py-3 md:grid-cols-1 md:gap-y-1">
                    <dt className="t-meta text-fg-3">{item.label}</dt>
                    <dd className="t-small" lang={item.lang}>
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <p className="t-meta text-fg-3">{t("scope")}</p>
                <ul className="mt-2">
                  {project.scope[locale].map((item) => (
                    <li key={item} className="border-t border-line py-3 t-small">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>

          {/* Body */}
          <div className="col-span-6 md:col-span-8 md:col-start-5">
            <Reveal>
              <p className="t-meta text-fg-3">{t("introduction")}</p>
              <div className="mt-5 flex flex-col gap-6">
                {project.summary[locale].map((paragraph) => (
                  <p key={paragraph} className="measure t-body-l text-fg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <EditorialImage
                image={IMAGERY.steel}
                locale={locale}
                aspect="16/10"
                sizes="(min-width: 1536px) 940px, (min-width: 768px) 66vw, 100vw"
              />
            </Reveal>

            <div className="mt-6">
              {sections.map((section, i) => (
                <Reveal
                  as="section"
                  key={section.index}
                  delay={i * 60}
                  className="grid grid-cols-6 gap-x-4 border-t border-line py-10 md:grid-cols-8 md:gap-x-6"
                >
                  <p className="col-span-1 t-meta text-fg-3" aria-hidden="true">
                    {section.index}
                  </p>
                  <div className="col-span-5 md:col-span-7">
                    <h2 className="t-h3">{section.heading}</h2>
                    <div className="mt-4 flex flex-col gap-5">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="measure t-body text-fg-2">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Sections that wait for verified data */}
              <Reveal as="section" className="grid grid-cols-6 gap-x-4 border-t border-line py-10 md:grid-cols-8 md:gap-x-6">
                <p className="col-span-1 t-meta text-fg-3" aria-hidden="true">
                  05
                </p>
                <div className="col-span-5 md:col-span-7">
                  <h2 className="t-h3">{t("pendingTitle")}</h2>
                  <p className="mt-4 measure t-body text-fg-2">{t("pendingBody")}</p>
                  <dl className="mt-6 grid grid-cols-1 gap-y-2 sm:grid-cols-2">
                    {pending.map((item) => (
                      <div key={item.label} className="flex items-baseline justify-between gap-4 border-t border-line py-2">
                        <dt className="t-small">{item.label}</dt>
                        <dd className="t-meta text-fg-3">{item.state}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>

              {/* Next project */}
              <Reveal as="section" className="grid grid-cols-6 gap-x-4 border-t border-line py-10 md:grid-cols-8 md:gap-x-6">
                <p className="col-span-1 t-meta text-fg-3" aria-hidden="true">
                  06
                </p>
                <div className="col-span-5 md:col-span-7">
                  <h2 className="t-h3">{t("nextProject")}</h2>
                  <p className="mt-4 measure t-body text-fg-2">{work.moreSoon}</p>
                  <div className="mt-6">
                    <ArrowLink href="/work">{t("backToWork")}</ArrowLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
      <FinalCta locale={locale} />
    </>
  );
}

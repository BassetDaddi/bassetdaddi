import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { getCopy } from "@/content";
import { IMAGERY } from "@/data/imagery";
import type { Project } from "@/data/projects";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/lib/locale";

// A large editorial project entry — not a card. Metadata row, title at H2,
// context, scope as a hairline list, and one plate: the client's real asset
// when it exists, otherwise a captioned editorial image that says what it is.
export async function ProjectFeature({
  project,
  locale,
  showPlate = true,
}: {
  project: Project;
  locale: Locale;
  showPlate?: boolean;
}) {
  const t = await getTranslations("Work");
  const copy = getCopy(locale);
  const href = `/work/${project.slug}` as const;
  const asset = project.images[0];

  const meta = [
    { label: t("client"), value: project.client, lang: "en" as const },
    { label: t("industry"), value: project.industry[locale] },
    { label: t("country"), value: project.country[locale] },
    {
      label: t("status"),
      value: project.status === "in-progress" ? t("inProgress") : t("completed"),
    },
  ];

  return (
    <article className="plate">
      <Reveal>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-5 md:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="t-meta text-fg-3">{m.label}</dt>
              <dd className="mt-1 t-ui" lang={m.lang}>
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {showPlate ? (
        <Reveal className="mt-10">
          {asset ? (
            <figure className="m-0">
              <div className="relative w-full overflow-hidden bg-surface-3" style={{ aspectRatio: "21/9" }}>
                <Image
                  src={asset.src}
                  alt={asset.alt[locale]}
                  fill
                  sizes="(min-width: 1536px) 1440px, 100vw"
                  className="plate-img img-reveal object-cover"
                />
              </div>
              {asset.caption ? (
                <figcaption className="mt-3 t-meta text-fg-3">{asset.caption[locale]}</figcaption>
              ) : null}
            </figure>
          ) : (
            <EditorialImage
              image={IMAGERY.steel}
              locale={locale}
              aspect="21/9"
              sizes="(min-width: 1536px) 1440px, 100vw"
            />
          )}
        </Reveal>
      ) : null}

      <div className="mt-12 grid grid-cols-6 gap-x-4 gap-y-10 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
        <Reveal className="col-span-6 md:col-span-7">
          <h3 className="t-h2">
            <Link href={href} className="no-underline transition-colors duration-150 ease-std hover:text-accent">
              {project.title[locale]}
            </Link>
          </h3>
          <div className="mt-8 flex flex-col gap-5">
            {project.summary[locale].map((paragraph) => (
              <p key={paragraph} className="measure t-body-l text-fg-2">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10">
            <ArrowLink href={href}>{copy.work.readCase}</ArrowLink>
          </div>
        </Reveal>

        <Reveal delay={120} as="div" className="col-span-6 md:col-span-4 md:col-start-9">
          <p className="t-meta text-fg-3">{t("scope")}</p>
          <ul className="mt-3">
            {project.scope[locale].map((item) => (
              <li key={item} className="border-t border-line py-3 t-ui">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </article>
  );
}

import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { PageIntro } from "@/components/ui/PageIntro";
import { getCopy } from "@/content";
import { IMAGERY } from "@/data/imagery";
import { NOTE_CATEGORIES, NOTES } from "@/data/notes";
import { toLocale } from "@/lib/locale";
import { pageMetadata, type LocaleParams } from "@/lib/pages";
import { FinalCta } from "@/sections/FinalCta";

export const generateMetadata = (props: LocaleParams) => pageMetadata("notes", props);

// Notes: the infrastructure is real, the list is empty until the first note
// is written. Categories as a large hairline list, an honest empty state,
// one quiet photograph so the page has presence without pretending.
export default async function NotesPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  setRequestLocale(locale);
  const { notes } = getCopy(locale);
  const t = await getTranslations("Notes");

  return (
    <>
      <PageIntro eyebrow={notes.eyebrow} title={notes.title} lede={notes.body} />

      <Container className="pb-[clamp(6rem,12vw,10rem)] pt-[clamp(4rem,8vw,7rem)]">
        <div className="grid grid-cols-6 gap-x-4 gap-y-12 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          <Reveal className="col-span-6 md:col-span-7">
            <p className="t-meta text-fg-3">{t("categories")}</p>
            <ol className="mt-4">
              {NOTE_CATEGORIES.map((category, i) => (
                <li
                  key={category.id}
                  className="grid grid-cols-6 items-baseline gap-x-4 border-t border-line py-5"
                >
                  <span className="col-span-1 t-meta text-fg-3" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-5 t-h2">{category.label[locale]}</span>
                </li>
              ))}
            </ol>
            {NOTES.length === 0 ? (
              <p className="mt-10 border-t border-line pt-6 t-body-l text-fg-2">{notes.empty}</p>
            ) : null}
          </Reveal>
          <Reveal delay={100} className="col-span-6 md:col-span-4 md:col-start-9">
            <EditorialImage
              image={IMAGERY.lattice}
              locale={locale}
              aspect="3/4"
              sizes="(min-width: 1536px) 440px, (min-width: 768px) 33vw, 100vw"
            />
          </Reveal>
        </div>
      </Container>

      <FinalCta locale={locale} />
    </>
  );
}

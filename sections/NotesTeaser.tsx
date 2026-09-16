import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { getCopy } from "@/content";
import { NOTE_CATEGORIES, NOTES } from "@/data/notes";
import type { Locale } from "@/lib/locale";

// 08 — Notes. Compact and honest: what the notes are, the categories, and
// the empty state until the first real note exists.
export async function NotesTeaser({ locale }: { locale: Locale }) {
  const { notes } = getCopy(locale);
  const t = await getTranslations("Notes");

  return (
    <section className="section-y">
      <Container>
        <SectionHead
          eyebrow={notes.eyebrow}
          title={notes.title}
          lede={notes.body}
          action={<ArrowLink href="/notes">{t("allNotes")}</ArrowLink>}
        />
        <Reveal className="mt-12 grid grid-cols-6 gap-x-4 gap-y-8 md:mt-16 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          <p className="col-span-6 t-meta text-fg-3 md:col-span-3">{t("categories")}</p>
          <ul className="col-span-6 flex flex-wrap gap-x-8 gap-y-3 md:col-span-9">
            {NOTE_CATEGORIES.map((c) => (
              <li key={c.id} className="t-h3 text-fg-2">
                {c.label[locale]}
              </li>
            ))}
          </ul>
          {NOTES.length === 0 ? (
            <p className="col-span-6 border-t border-line pt-5 t-body text-fg-3 md:col-span-9 md:col-start-4">
              {notes.empty}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}

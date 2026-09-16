import { setRequestLocale } from "next-intl/server";
import { PageIntro } from "@/components/ui/PageIntro";
import { getCopy } from "@/content";
import { toLocale } from "@/lib/locale";
import { pageMetadata, type LocaleParams } from "@/lib/pages";

export const generateMetadata = (props: LocaleParams) => pageMetadata("notes", props);

// Notes infrastructure ships with an honest empty state. No article is
// fabricated; the list, categories and article template arrive with the
// first real note.
export default async function NotesPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  setRequestLocale(locale);
  const copy = getCopy(locale);
  const page = copy.pages.notes;

  return (
    <PageIntro eyebrow={page.eyebrow} title={page.h1} lede={page.lede}>
      <div className="mt-16 border-t border-line pt-6">
        <p className="t-h3">{copy.notes.emptyTitle}</p>
        <p className="mt-2 measure t-body text-fg-2">{copy.notes.emptyBody}</p>
      </div>
    </PageIntro>
  );
}

import { getTranslations, setRequestLocale } from "next-intl/server";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { Availability } from "@/components/ui/Availability";
import { PageIntro } from "@/components/ui/PageIntro";
import { getCopy } from "@/content";
import { PRIMARY_SOCIAL, SECONDARY_SOCIAL, SITE } from "@/data/site";
import { toLocale } from "@/lib/locale";
import { pageMetadata, type LocaleParams } from "@/lib/pages";

export const generateMetadata = (props: LocaleParams) =>
  pageMetadata("contact", props);

// Direct channels only, in the client's priority order. The email address has
// not been provided yet, so its row is a visibly marked placeholder rather
// than an invented address (docs/DECISIONS.md).
export default async function ContactPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  setRequestLocale(locale);
  const page = getCopy(locale).pages.contact;
  const t = await getTranslations("Contact");

  return (
    <PageIntro eyebrow={page.eyebrow} title={page.h1} lede={page.lede}>
      <div className="mt-10">
        <Availability locale={locale} />
      </div>

      <div className="mt-16 grid gap-12 border-t border-line pt-8 sm:grid-cols-2">
        <div>
          <h2 className="t-meta text-fg-3">{t("channels")}</h2>
          <ul className="mt-5 flex flex-col gap-4">
            {SITE.email ? (
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="t-ui no-underline transition-colors duration-150 ease-std hover:text-accent"
                >
                  {SITE.email}
                </a>
              </li>
            ) : (
              <li className="t-ui text-fg-3">
                {t("email")} — {t("emailPending")}
              </li>
            )}
          </ul>
          <SocialLinks links={PRIMARY_SOCIAL} className="mt-4 flex-col gap-4" />
        </div>

        <div>
          <h2 className="t-meta text-fg-3">{t("elsewhere")}</h2>
          <SocialLinks
            links={SECONDARY_SOCIAL}
            className="mt-5 flex-col gap-4"
            itemClassName="text-fg-2"
          />
        </div>
      </div>
    </PageIntro>
  );
}

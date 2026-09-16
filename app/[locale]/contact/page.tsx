import type { CSSProperties } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { Reveal } from "@/components/motion/Reveal";
import { Availability } from "@/components/ui/Availability";
import { Container } from "@/components/ui/Container";
import { Avatar } from "@/components/ui/Portrait";
import { getCopy } from "@/content";
import { PRIMARY_SOCIAL, SECONDARY_SOCIAL, SITE } from "@/data/site";
import { toLocale } from "@/lib/locale";
import { pageMetadata, type LocaleParams } from "@/lib/pages";

export const generateMetadata = (props: LocaleParams) =>
  pageMetadata("contact", props);

// Contact: the question, one paragraph, the address as the action. Direct
// channels in the client's priority order; the avatar as the identity element.
export default async function ContactPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  setRequestLocale(locale);
  const { contact } = getCopy(locale);
  const t = await getTranslations("Contact");
  const mailto = `mailto:${SITE.email}`;

  return (
    <Container>
      <div className="grid grid-cols-6 gap-x-4 gap-y-14 py-20 md:grid-cols-12 md:gap-x-6 md:py-32 lg:gap-x-8 lg:py-40">
        <div className="col-span-6 md:col-span-8">
          <p className="hero-in t-meta text-fg-3">{contact.eyebrow}</p>
          <h1 className="hero-in mt-6 t-display" style={{ "--d": "80ms" } as CSSProperties}>
            {contact.title}
          </h1>
          <p className="hero-in mt-10 measure t-body-l text-fg-2" style={{ "--d": "160ms" } as CSSProperties}>
            {contact.body}
          </p>
          <div className="hero-in mt-12 border-t border-line pt-8" style={{ "--d": "240ms" } as CSSProperties}>
            <p className="t-meta text-fg-3">{t("writeTo")}</p>
            <a
              href={mailto}
              className="mt-3 inline-block t-h2 no-underline transition-colors duration-150 ease-std hover:text-accent"
              lang="en"
            >
              {SITE.email}
            </a>
            <div className="mt-8">
              <a
                href={mailto}
                className="inline-flex h-12 items-center justify-center rounded-[2px] bg-fg px-[22px] t-ui text-surface no-underline transition-colors duration-150 ease-std hover:bg-fg-hover"
              >
                {contact.cta}
              </a>
            </div>
          </div>
        </div>

        <Reveal className="col-span-6 flex flex-col gap-10 md:col-span-3 md:col-start-10">
          <div className="flex items-center gap-5 border-t border-line pt-6">
            <Avatar alt={SITE.brand} size={56} />
            <div>
              <p className="t-ui">{SITE.brand}</p>
              <p className="mt-1 t-small text-fg-3">{SITE.location[locale]}</p>
            </div>
          </div>
          <Availability locale={locale} />
          <div>
            <p className="t-meta text-fg-3">{t("channels")}</p>
            <SocialLinks links={PRIMARY_SOCIAL} className="mt-4 flex-col gap-4" />
          </div>
          <div>
            <p className="t-meta text-fg-3">{t("elsewhere")}</p>
            <SocialLinks links={SECONDARY_SOCIAL} className="mt-4 flex-col gap-4" itemClassName="text-fg-2" />
          </div>
        </Reveal>
      </div>
    </Container>
  );
}

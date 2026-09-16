import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Availability } from "@/components/ui/Availability";
import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Avatar, Portrait, PORTRAITS } from "@/components/ui/Portrait";
import { getCopy } from "@/content";
import { IMAGERY } from "@/data/imagery";
import { SITE, SOCIAL_URLS } from "@/data/site";
import { toLocale } from "@/lib/locale";
import { pageMetadata, type LocaleParams } from "@/lib/pages";
import { Approach } from "@/sections/Approach";
import { FinalCta } from "@/sections/FinalCta";

export const generateMetadata = (props: LocaleParams) => pageMetadata("about", props);

// About: the one page that carries the full name. Paper surface for the
// seated portrait; the copy runs as short lines, exactly as written; identity
// details as a definition list; the place as a captioned photograph.
export default async function AboutPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  setRequestLocale(locale);
  const { about } = getCopy(locale);
  const t = await getTranslations("Contact");
  const alt = locale === "ar" ? "باسط دادي جالسًا" : "Basset Daddi, seated";

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.person.name,
    alternateName: [SITE.brand, SITE.person.nameAr],
    url: `${SITE.url}/${locale}/about`,
    email: `mailto:${SITE.email}`,
    image: `${SITE.url}${PORTRAITS.avatar}`,
    jobTitle: locale === "ar" ? "مسوّق وبنّاء أنظمة رقمية" : "Growth marketer and builder",
    address: { "@type": "PostalAddress", addressCountry: "DZ" },
    sameAs: SOCIAL_URLS,
  };

  return (
    <>
      <section data-surface="paper" className="overflow-hidden bg-surface text-fg">
        <Container>
          <div className="grid grid-cols-6 gap-x-4 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
            <div className="col-span-6 py-20 md:col-span-6 md:col-start-7 md:py-32 lg:py-40">
              <p className="t-meta text-fg-3">{about.eyebrow}</p>
              <h1 className="mt-5 t-h1">{about.title}</h1>
              <div className="mt-10 flex flex-col gap-6">
                {about.full.map((block, i) => (
                  <p
                    key={block}
                    className={`measure whitespace-pre-line ${i === 0 ? "t-body-l text-fg" : "t-body-l text-fg-2"}`}
                  >
                    {block}
                  </p>
                ))}
              </div>
            </div>
            <div className="col-span-6 md:col-span-5 md:col-start-1 md:row-start-1 md:self-end">
              <Reveal>
                <Portrait
                  src={PORTRAITS.about}
                  alt={alt}
                  crop="full"
                  priority
                  drift
                  sizes="(min-width: 1536px) 560px, (min-width: 768px) 40vw, 100vw"
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-[clamp(4rem,8vw,7rem)]">
        <div className="grid grid-cols-6 gap-x-4 gap-y-12 md:grid-cols-12 md:gap-x-6 lg:gap-x-8">
          <Reveal className="col-span-6 md:col-span-5">
            <div className="flex items-center gap-5 border-t border-line pt-6">
              <Avatar alt={SITE.brand} size={56} />
              <div>
                <p className="t-ui">{SITE.brand}</p>
                <Availability locale={locale} className="mt-1" />
              </div>
            </div>
            <dl className="mt-8">
              {about.details.map((d) => (
                <div key={d.label} className="grid grid-cols-2 gap-x-4 border-t border-line py-3">
                  <dt className="t-meta text-fg-3">{d.label}</dt>
                  <dd className="t-small">{d.value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-x-4 border-t border-line py-3">
                <dt className="t-meta text-fg-3">{t("email")}</dt>
                <dd className="t-small">
                  <a href={`mailto:${SITE.email}`} className="no-underline hover:text-accent" lang="en">
                    {SITE.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={100} className="col-span-6 md:col-span-5 md:col-start-8">
            <EditorialImage
              image={IMAGERY.algiers}
              locale={locale}
              aspect="4/5"
              sizes="(min-width: 1536px) 560px, (min-width: 768px) 40vw, 100vw"
            />
          </Reveal>
        </div>
      </Container>

      <Approach locale={locale} surface="navy" />
      <FinalCta locale={locale} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}

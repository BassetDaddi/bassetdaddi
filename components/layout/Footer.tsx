import { getLocale, getTranslations } from "next-intl/server";
import { LogoLockup } from "@/components/brand/LogoLockup";
import { Container } from "@/components/ui/Container";
import { getCopy } from "@/content";
import { SITE, SOCIAL } from "@/data/site";
import { Link } from "@/i18n/navigation";
import { toLocale } from "@/lib/locale";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { NavItem } from "./NavLinks";

export async function Footer() {
  const locale = toLocale(await getLocale());
  const copy = getCopy(locale);
  const [nav, footer, switcher] = await Promise.all([
    getTranslations("Nav"),
    getTranslations("Footer"),
    getTranslations("Switcher"),
  ]);

  const items: NavItem[] = [
    { href: "/services", label: nav("services") },
    { href: "/about", label: nav("about") },
    { href: "/contact", label: nav("contact") },
  ];

  const year = new Date().getFullYear();
  const linkClass = "t-ui no-underline transition-colors duration-150 ease-std hover:text-accent";

  return (
    <footer data-surface="ink" className="border-t border-line bg-surface text-fg">
      <Container>
        <div className="grid grid-cols-6 gap-x-4 gap-y-12 py-16 md:grid-cols-12 md:gap-x-6 md:py-24 lg:gap-x-8">
          <div className="col-span-6 md:col-span-5">
            <LogoLockup height={88} label={SITE.brand} />
            <p className="mt-8 t-h3 text-fg">{copy.footer.tagline}</p>
            <p className="mt-6 t-small text-fg-3">{SITE.location[locale]}</p>
            <a href={`mailto:${SITE.email}`} className={`mt-1 inline-block ${linkClass}`} lang="en">
              {SITE.email}
            </a>
          </div>

          <div className="col-span-3 md:col-span-3 md:col-start-7">
            <h2 className="t-meta text-fg-3">{footer("navigation")}</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-3 md:col-span-3">
            <h2 className="t-meta text-fg-3">{footer("elsewhere")}</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {SOCIAL.map((link) => (
                <li key={link.id}>
                  <a href={link.url} target="_blank" rel="me noopener" className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-6">
          <p className="t-small text-fg-3">{footer("rights", { year })}</p>
          <LanguageSwitcher
            labels={{
              en: switcher("switchTo", { language: switcher("en") }),
              ar: switcher("switchTo", { language: switcher("ar") }),
            }}
            groupLabel={switcher("label")}
          />
        </div>
      </Container>
    </footer>
  );
}

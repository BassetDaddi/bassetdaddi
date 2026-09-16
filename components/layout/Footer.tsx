import { getLocale, getTranslations } from "next-intl/server";
import { LogoLockup } from "@/components/brand/LogoLockup";
import { Container } from "@/components/ui/Container";
import { getCopy } from "@/content";
import { SITE, SOCIAL } from "@/data/site";
import { Link } from "@/i18n/navigation";
import { toLocale } from "@/lib/locale";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { NavItem } from "./NavLinks";

// Footer on ink: the full lockup where the wordmark can be legible, the
// positioning line, the page list, the verified profiles, the switcher.
// Hairline rules, no boxes.
export async function Footer() {
  const locale = toLocale(await getLocale());
  const copy = getCopy(locale);
  const [nav, footer, switcher] = await Promise.all([
    getTranslations("Nav"),
    getTranslations("Footer"),
    getTranslations("Switcher"),
  ]);

  const items: NavItem[] = [
    { href: "/work", label: nav("work") },
    { href: "/services", label: nav("services") },
    { href: "/about", label: nav("about") },
    { href: "/notes", label: nav("notes") },
    { href: "/contact", label: nav("contact") },
  ];

  const year = new Date().getFullYear();

  return (
    <footer data-surface="ink" className="border-t border-line bg-surface text-fg">
      <Container>
        <div className="grid grid-cols-6 gap-x-4 gap-y-12 py-16 md:grid-cols-12 md:gap-x-6 md:py-24 lg:gap-x-8">
          <div className="col-span-6 md:col-span-5">
            <LogoLockup height={88} label={SITE.brand} />
            <p className="mt-8 measure t-body text-fg-2">{copy.positioning}</p>
            <p className="mt-3 t-small text-fg-3">
              {footer("basedIn", { location: SITE.location[locale] })}
            </p>
          </div>

          <div className="col-span-3 md:col-span-3 md:col-start-7">
            <h2 className="t-meta text-fg-3">{footer("navigation")}</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="t-ui no-underline transition-colors duration-150 ease-std hover:text-accent"
                  >
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
                  <a
                    href={link.url}
                    target="_blank"
                    rel="me noopener"
                    className="t-ui no-underline transition-colors duration-150 ease-std hover:text-accent"
                  >
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

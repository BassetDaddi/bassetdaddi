import { getTranslations } from "next-intl/server";
import { LogoMark } from "@/components/brand/LogoMark";
import { Container } from "@/components/ui/Container";
import { PRIMARY_SOCIAL } from "@/data/site";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { NavLinks, type NavItem } from "./NavLinks";
import { SocialLinks } from "./SocialLinks";

export async function Header() {
  const [nav, a11y, switcher] = await Promise.all([
    getTranslations("Nav"),
    getTranslations("A11y"),
    getTranslations("Switcher"),
  ]);

  const items: NavItem[] = [
    { href: "/services", label: nav("services") },
    { href: "/about", label: nav("about") },
  ];

  const switcherLabels = {
    en: switcher("switchTo", { language: switcher("en") }),
    ar: switcher("switchTo", { language: switcher("ar") }),
  };

  const brandLink = (
    <Link href="/" aria-label={a11y("home")} className="inline-flex no-underline">
      <LogoMark height={28} />
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center gap-6 md:h-[72px] lg:gap-8">
        {brandLink}
        <NavLinks items={items} label={a11y("primaryNav")} className="hidden md:flex" />
        <Link
          href="/contact"
          className="ms-auto hidden rounded-[2px] border border-line-strong px-4 py-2 t-ui no-underline transition-colors duration-150 ease-std hover:border-fg md:inline-block"
        >
          {nav("contact")}
        </Link>
        <div className="hidden md:block">
          <LanguageSwitcher labels={switcherLabels} groupLabel={switcher("label")} />
        </div>
        <MobileMenu
          items={[...items, { href: "/contact", label: nav("contact") }]}
          labels={{ menu: nav("menu"), close: nav("close") }}
          brand={brandLink}
          className="ms-auto md:hidden"
        >
          <LanguageSwitcher labels={switcherLabels} groupLabel={switcher("label")} />
          <SocialLinks links={PRIMARY_SOCIAL} itemClassName="text-fg-2" />
        </MobileMenu>
      </Container>
      <div aria-hidden="true" className="header-rule h-px w-full bg-line" />
    </header>
  );
}

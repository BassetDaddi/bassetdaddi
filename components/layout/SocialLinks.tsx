import { getTranslations } from "next-intl/server";
import { ArrowAnchor } from "@/components/ui/ArrowLink";
import type { SocialLink } from "@/data/site";
import { cn } from "@/lib/cn";

// Verified profiles as text links — no icon set, no invented accounts.
export async function SocialLinks({
  links,
  className,
  itemClassName,
}: {
  links: readonly SocialLink[];
  className?: string;
  itemClassName?: string;
}) {
  const t = await getTranslations("A11y");
  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-3", className)}>
      {links.map((link) => (
        <li key={link.id}>
          <ArrowAnchor
            href={link.url}
            target="_blank"
            rel="me noopener"
            className={itemClassName}
          >
            {link.label}
            <span className="sr-only"> ({t("opensNewTab")})</span>
          </ArrowAnchor>
        </li>
      ))}
    </ul>
  );
}

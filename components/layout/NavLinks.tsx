"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

export type NavItem = { href: "/work" | "/services" | "/about" | "/notes" | "/contact"; label: string };

// Desktop navigation links. Client-side only for aria-current: the underline
// grows from the inline-start edge on hover and stays, in the accent, on the
// current page — the one accent allowed in the bar.
export function NavLinks({
  items,
  label,
  className,
}: {
  items: NavItem[];
  label: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className={cn("items-center gap-6 lg:gap-7", className)}>
      {items.map((item) => {
        const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={current ? "page" : undefined}
            className={cn(
              "group relative py-1 t-ui no-underline",
              "after:absolute after:start-0 after:-bottom-1 after:h-px after:w-full after:origin-[0_50%] after:scale-x-0 after:bg-fg after:transition-transform after:duration-300 after:ease-out rtl:after:origin-[100%_50%]",
              "hover:after:scale-x-100",
              current && "after:scale-x-100 after:bg-accent",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

// Label + arrow. The arrow points along the reading direction and moves
// 4px further along it on hover. Only directional glyphs mirror (§10).
const linkClass =
  "group inline-flex items-center gap-2.5 t-ui no-underline transition-colors duration-150 ease-std hover:text-accent";

export function Arrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 rtl:group-hover:-translate-x-1",
        className,
      )}
    >
      <span className="rtl:hidden">→</span>
      <span className="hidden rtl:inline">←</span>
    </span>
  );
}

type Props = ComponentProps<typeof Link> & { children: ReactNode };

export function ArrowLink({ className, children, ...props }: Props) {
  return (
    <Link className={cn(linkClass, className)} {...props}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

// Same treatment for external destinations (social profiles): the arrow
// points out of the page instead of along it.
export function ArrowAnchor({
  className,
  children,
  ...props
}: ComponentProps<"a"> & { children: ReactNode }) {
  return (
    <a className={cn(linkClass, className)} {...props}>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
      >
        <span className="rtl:hidden">↗</span>
        <span className="hidden rtl:inline">↖</span>
      </span>
    </a>
  );
}

import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

// Two buttons, monochrome by rule (docs/design-system.md §8). The accent never
// fills a button.
const base =
  "inline-flex h-12 items-center justify-center rounded-[2px] border px-[22px] t-ui no-underline transition-[background-color,border-color,color] duration-150 ease-std active:translate-y-px";

const variants = {
  primary: "border-transparent bg-fg text-surface hover:bg-fg-hover",
  secondary: "border-line-strong bg-transparent text-fg hover:border-fg",
} as const;

type Props = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
};

export function Button({ variant = "primary", className, ...props }: Props) {
  return <Link className={cn(base, variants[variant], className)} {...props} />;
}

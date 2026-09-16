import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

// Section opener on the 12-column grid: eyebrow in the first three columns,
// title in the next eight (or seven, leaving the last empty on purpose),
// optional action at the inline-end.
type Props = {
  eyebrow: string;
  title?: string;
  lede?: string;
  action?: ReactNode;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHead({ eyebrow, title, lede, action, as = "h2", className }: Props) {
  const Heading = as;
  return (
    <Reveal
      className={cn(
        "grid grid-cols-6 gap-x-4 gap-y-5 border-t border-line pt-6 md:grid-cols-12 md:gap-x-6 lg:gap-x-8",
        className,
      )}
    >
      <p className="col-span-6 t-meta text-fg-3 md:col-span-3">{eyebrow}</p>
      <div className="col-span-6 md:col-span-7">
        {title ? <Heading className={as === "h1" ? "t-h1" : "t-h2"}>{title}</Heading> : null}
        {lede ? <p className="mt-5 measure t-body-l text-fg-2">{lede}</p> : null}
      </div>
      {action ? (
        <div className="col-span-6 md:col-span-2 md:justify-self-end md:self-end">{action}</div>
      ) : null}
    </Reveal>
  );
}

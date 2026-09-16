import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

// The text container: 1440px max, page margins per tier
// (20 / 40 / 64 / 96 px). Rules, bands and large imagery may sit outside it.
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-site px-5 md:px-10 lg:px-16 2xl:px-24",
        className,
      )}
    >
      {children}
    </div>
  );
}

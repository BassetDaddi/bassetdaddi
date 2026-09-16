import { AVAILABILITY } from "@/data/availability";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/locale";

// Renders data/availability.ts. The dot carries the state: accent only when
// available, muted otherwise. Text stays factual.
export function Availability({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const available = AVAILABILITY.state === "available";
  return (
    <span className={cn("inline-flex items-center gap-2.5 t-small text-fg-2", className)}>
      <span
        aria-hidden="true"
        className={cn("size-2 shrink-0 rounded-full", available ? "bg-accent" : "bg-fg-3")}
      />
      {AVAILABILITY.label[locale]}
    </span>
  );
}

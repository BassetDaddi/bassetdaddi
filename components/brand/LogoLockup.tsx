import Image from "next/image";
import { cn } from "@/lib/cn";

// Full lockup — mark and wordmark — shown where the wordmark has room to be
// legible (footer). Same non-destructive crop technique as LogoMark.
const CANVAS = 1254;
const LOCKUP = { x: 115, y: 339, w: 1040, h: 605 };

type Props = {
  /** Rendered height of the visible artwork in CSS px. */
  height?: number;
  tone?: "light" | "dark";
  className?: string;
  label?: string;
};

export function LogoLockup({
  height = 96,
  tone = "light",
  className,
  label = "Basset Daddi",
}: Props) {
  const scale = height / LOCKUP.h;
  const size = CANVAS * scale;
  const width = LOCKUP.w * scale;

  return (
    <span
      role="img"
      aria-label={label}
      className={cn("relative block shrink-0 overflow-hidden", className)}
      style={{ width, height }}
    >
      <Image
        src={tone === "light" ? "/images/logo/light-logo.png" : "/images/logo/dark-logo.png"}
        alt=""
        width={CANVAS}
        height={CANVAS}
        sizes={`${Math.ceil(size)}px`}
        className="absolute max-w-none"
        style={{
          width: size,
          height: size,
          left: -LOCKUP.x * scale,
          top: -LOCKUP.y * scale,
        }}
      />
    </span>
  );
}

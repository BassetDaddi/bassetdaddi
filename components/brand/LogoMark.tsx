import Image from "next/image";
import { cn } from "@/lib/cn";

// The logo files are a vertical lockup (mark above wordmark) inside a
// 1254 × 1254 canvas that is mostly transparent padding. Navigation shows the
// BD mark alone: the real file, positioned inside a fixed box so only the
// mark's measured pixel bounds are visible. Nothing is redrawn or recoloured.
//
// Bounds measured from the alpha channel (see docs/design-system.md §7.2):
const CANVAS = 1254;
const MARK = { x: 353, y: 339, w: 576, h: 434 };

type Props = {
  /** Rendered height of the mark in CSS px. */
  height?: number;
  tone?: "light" | "dark";
  className?: string;
};

export function LogoMark({ height = 28, tone = "light", className }: Props) {
  const scale = height / MARK.h;
  const size = CANVAS * scale;
  const width = MARK.w * scale;

  return (
    <span
      aria-hidden="true"
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
          left: -MARK.x * scale,
          top: -MARK.y * scale,
        }}
      />
    </span>
  );
}

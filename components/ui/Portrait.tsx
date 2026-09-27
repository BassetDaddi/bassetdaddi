import Image from "next/image";
import { cn } from "@/lib/cn";

// Real portrait assets. Frames stay restrained and are never filtered or mirrored.
export const PORTRAITS = {
  hero: "/images/portraits/basset-hero.png",
  about: "/images/portraits/basset-about.png",
  avatar: "/images/portraits/basset-avatar.png",
} as const;

type Crop = "full" | "bust";

type Props = {
  src: (typeof PORTRAITS)[keyof typeof PORTRAITS];
  alt: string;
  /** full: whole figure, bottom clipped · bust: head and shoulders. */
  crop?: Crop;
  priority?: boolean;
  sizes: string;
  className?: string;
  /** Adds the scroll-linked drift (CSS scroll-driven, static elsewhere). */
  drift?: boolean;
  /** Adds the hero load animation. */
  emerge?: boolean;
};

export function Portrait({
  src,
  alt,
  crop = "full",
  priority = false,
  sizes,
  className,
  drift = false,
  emerge = false,
}: Props) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        crop === "full" ? "aspect-[4/4.55]" : "aspect-[5/4]",
        drift && "drift",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover object-top",
          crop === "bust" && "scale-[1.15] origin-top",
          drift && "drift-target",
          emerge && "hero-portrait-in",
        )}
        style={crop === "bust" ? { objectPosition: "50% 0%" } : undefined}
      />
    </div>
  );
}

// Small identity element — the head-and-shoulders portrait cropped square.
export function Avatar({
  alt,
  size = 56,
  className,
}: {
  alt: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("relative block shrink-0 overflow-hidden rounded-full bg-surface-3", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={PORTRAITS.avatar}
        alt={alt}
        fill
        sizes={`${size * 2}px`}
        className="object-cover"
        style={{ objectPosition: "50% 22%" }}
      />
    </span>
  );
}

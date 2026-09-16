import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { EditorialImage as EditorialImageData } from "@/data/imagery";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/locale";

// An editorial photograph with its caption and credit set in metadata style.
// Used for atmosphere and context only; the caption says so where it matters.
type Props = {
  image: EditorialImageData;
  locale: Locale;
  /** CSS aspect ratio of the frame, e.g. "21/9". Defaults to the source ratio. */
  aspect?: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  drift?: boolean;
  /** Set when the image sits inside a Reveal wrapper. */
  reveal?: boolean;
  captionClassName?: string;
};

export async function EditorialImage({
  image,
  locale,
  aspect,
  sizes,
  className,
  priority = false,
  drift = true,
  reveal = true,
  captionClassName,
}: Props) {
  const t = await getTranslations("A11y");
  const ratio = aspect ?? `${image.ratio}`;

  return (
    <figure className={cn("m-0", className)}>
      <div
        className={cn("plate relative w-full overflow-hidden bg-surface-3", drift && "drift")}
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={image.src}
          alt={image.alt[locale]}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "editorial-img plate-img object-cover",
            drift && "drift-target",
            reveal && "img-reveal",
          )}
        />
      </div>
      <figcaption
        className={cn(
          "mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 t-meta text-fg-3",
          captionClassName,
        )}
      >
        <span>{image.caption[locale]}</span>
        <span>
          {t("photo")}{" "}
          <a
            href={image.credit.url}
            target="_blank"
            rel="noopener"
            className="no-underline transition-colors duration-150 ease-std hover:text-accent"
            lang="en"
          >
            {image.credit.name}
          </a>
        </span>
      </figcaption>
    </figure>
  );
}

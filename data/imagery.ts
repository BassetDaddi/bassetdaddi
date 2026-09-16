import type { Locale } from "@/lib/locale";

// Editorial imagery — atmosphere and context only, never evidence of work.
// All four are Unsplash photographs (Unsplash License: free to use, hotlinked
// through images.unsplash.com as Unsplash intends). Credits are shown in the
// caption line and listed in docs/imagery.md. Each image is used once.

export type EditorialImage = {
  id: string;
  src: string;
  /** Intrinsic aspect ratio of the source, used to reserve space. */
  ratio: number;
  alt: Record<Locale, string>;
  caption: Record<Locale, string>;
  credit: { name: string; url: string };
};

const unsplash = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?w=2000&q=80&auto=format`;

export const IMAGERY = {
  /** About page — place. White façade in Algiers, the flag on a balcony. */
  algiers: {
    id: "algiers",
    src: unsplash("photo-1771859995123-141e8e3c1cf7"),
    ratio: 2 / 3,
    alt: {
      en: "White façade of a building in Algiers with balconies and an Algerian flag",
      ar: "واجهة بيضاء لمبنى في الجزائر العاصمة بشرفات وعلم جزائري",
    },
    caption: { en: "Algiers", ar: "الجزائر العاصمة" },
    credit: { name: "@tomarquize", url: "https://unsplash.com/@tomarquize" },
  },
  /** Work / case study — industrial context. Brushed steel, abstract. */
  steel: {
    id: "steel",
    src: unsplash("photo-1667892702884-faa077e80d7b"),
    ratio: 1,
    alt: {
      en: "Brushed steel surface with a diagonal light reflection",
      ar: "سطح فولاذي مصقول مع انعكاس ضوء مائل",
    },
    caption: {
      en: "Industrial context — editorial image, not a client asset",
      ar: "سياق صناعي — صورة تحريرية، ليست من أصول العميل",
    },
    credit: { name: "@apryan_cahyo", url: "https://unsplash.com/@apryan_cahyo" },
  },
  /** Services — structure and repetition. */
  grid: {
    id: "grid",
    src: unsplash("photo-1781520423154-b4f0732488c6"),
    ratio: 2 / 3,
    alt: {
      en: "Black and white grid of windows on a building façade",
      ar: "شبكة نوافذ بالأبيض والأسود على واجهة مبنى",
    },
    caption: { en: "Structure", ar: "بنية" },
    credit: { name: "@redaska", url: "https://unsplash.com/@redaska" },
  },
  /** Notes — quiet lattice. */
  lattice: {
    id: "lattice",
    src: unsplash("photo-1769066137878-1d199b3eb010"),
    ratio: 2 / 3,
    alt: {
      en: "Soft grey lattice of squares receding into the distance",
      ar: "شبكة رمادية ناعمة من المربعات تمتد نحو العمق",
    },
    caption: { en: "Detail", ar: "تفصيل" },
    credit: { name: "@davidgeneugelijk", url: "https://unsplash.com/@davidgeneugelijk" },
  },
} satisfies Record<string, EditorialImage>;

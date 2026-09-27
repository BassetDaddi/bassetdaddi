import type { Locale } from "@/lib/locale";

export type EditorialImage = {
  id: string;
  src: string;
  ratio: number;
  alt: Record<Locale, string>;
  caption: Record<Locale, string>;
  credit: { name: string; url: string };
};

const unsplash = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?w=2000&q=82&auto=format`;

export const IMAGERY = {
  algiers: {
    id: "algiers",
    src: unsplash("photo-1771859995123-141e8e3c1cf7"),
    ratio: 2 / 3,
    alt: {
      en: "White façade in Algiers with balconies and an Algerian flag",
      ar: "واجهة بيضاء في الجزائر العاصمة بشرفات وعلم جزائري",
    },
    caption: { en: "Algiers", ar: "الجزائر العاصمة" },
    credit: { name: "@tomarquize", url: "https://unsplash.com/@tomarquize" },
  },
  performance: {
    id: "performance",
    src: unsplash("photo-1712904311028-f281948e9753"),
    ratio: 3 / 2,
    alt: {
      en: "Laptop displaying social media analytics and performance charts",
      ar: "حاسوب محمول يعرض تحليلات وسائل التواصل ومخططات الأداء",
    },
    caption: { en: "Performance, not vanity metrics", ar: "التركيز على الأداء لا الأرقام الشكلية" },
    credit: { name: "@walls_io", url: "https://unsplash.com/@walls_io" },
  },
  webDesign: {
    id: "web-design",
    src: unsplash("photo-1587355760421-b9de3226a046"),
    ratio: 3 / 2,
    alt: {
      en: "Designer reviewing website wireframes beside a laptop",
      ar: "مصمم يراجع مخططات واجهة موقع بجانب حاسوب محمول",
    },
    caption: { en: "Conversion starts with structure", ar: "التحويل يبدأ من بنية واضحة" },
    credit: { name: "@uxindo", url: "https://unsplash.com/@uxindo" },
  },
} satisfies Record<string, EditorialImage>;

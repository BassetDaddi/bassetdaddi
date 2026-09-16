import type { Locale } from "@/lib/locale";

// Project records. Everything here was supplied by the client; nothing is
// inferred beyond restating the given scope. Sections that depend on
// verified data stay `null` until it exists — the case-study template renders
// them as one honest "in progress" block, never as invented content.

export type Localized = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export type ProjectStatus = "in-progress" | "completed";

export type ProjectImage = {
  /** Path under /public, e.g. /images/projects/force-screw/hero.jpg */
  src: string;
  width: number;
  height: number;
  alt: Localized;
  caption?: Localized;
};

export type Project = {
  slug: string;
  client: string;
  industry: Localized;
  country: Localized;
  /** Left undefined until the client confirms the start year. */
  year?: string;
  status: ProjectStatus;
  role: Localized;
  title: Localized;
  /** Introduction paragraphs. */
  summary: LocalizedList;
  scope: LocalizedList;
  /** Real client assets only. Empty until they are added to /public. */
  images: ProjectImage[];
  /** Sections of the case-study system that have real content today. */
  sections: {
    context: LocalizedList;
    problem: LocalizedList;
    strategy: LocalizedList;
    execution: LocalizedList;
  };
  /** Verified results only. `null` renders "not yet verified". */
  results: null | { headline: Localized; items: { label: Localized; value: string }[] };
};

export const PROJECTS: Project[] = [
  {
    slug: "force-screw",
    client: "Force Screw",
    industry: { en: "Industrial manufacturing", ar: "الصناعة التحويلية" },
    country: { en: "Algeria", ar: "الجزائر" },
    status: "in-progress",
    role: {
      en: "Paid media, campaign, creative and audience strategy",
      ar: "الإعلانات المدفوعة، استراتيجية الحملات، المحتوى والجمهور",
    },
    title: {
      en: "Building a measurable acquisition system for an Algerian industrial brand.",
      ar: "بناء نظام استحواذ قابل للقياس لعلامة صناعية جزائرية.",
    },
    summary: {
      en: [
        "Force Screw is an Algerian manufacturer serving a professional B2B market including wholesalers, resellers, hardware stores, construction companies and tradespeople.",
        "My work focuses on building the digital acquisition system around the brand — from creative strategy and audience structure to paid media, WhatsApp lead generation, testing and reporting.",
      ],
      ar: [
        "Force Screw مصنع جزائري يستهدف سوقًا مهنيًا يضم تجار الجملة، الموزعين، محلات مواد البناء والمهنيين.",
        "يركّز عملي على بناء نظام الاستحواذ الرقمي للعلامة، من استراتيجية المحتوى والإعلانات والجمهور إلى توليد العملاء المحتملين عبر WhatsApp والاختبارات وقياس الأداء.",
      ],
    },
    scope: {
      en: [
        "Paid Media",
        "Campaign Strategy",
        "Creative Strategy",
        "Audience Strategy",
        "Lead Generation",
        "Testing",
        "Reporting",
      ],
      ar: [
        "الإعلانات المدفوعة",
        "استراتيجية الحملات",
        "الاستراتيجية الإبداعية",
        "استراتيجية الجمهور",
        "توليد العملاء المحتملين",
        "الاختبار",
        "التقارير",
      ],
    },
    images: [],
    sections: {
      context: {
        en: [
          "Force Screw manufactures in Algeria and sells to professionals — wholesalers, resellers, hardware stores, construction companies and tradespeople. Every part of the acquisition system is built around that audience.",
        ],
        ar: [
          "تُصنّع Force Screw في الجزائر وتبيع للمهنيين — تجار الجملة، الموزعين، محلات مواد البناء، شركات البناء والحرفيين. وكل جزء من نظام الاستحواذ مبني حول هذا الجمهور.",
        ],
      },
      problem: {
        en: [
          "A professional B2B audience has to be reached, qualified and converted through digital channels in a way that can be measured — not with disconnected campaigns, but with an acquisition system built around the brand.",
        ],
        ar: [
          "الجمهور المهني في سوق B2B يجب الوصول إليه وتأهيله وتحويله عبر القنوات الرقمية بطريقة قابلة للقياس — لا بحملات متفرقة، بل بنظام استحواذ مبني حول العلامة.",
        ],
      },
      strategy: {
        en: [
          "The system is built from connected parts: audience structure, creative strategy, paid media, WhatsApp as the lead channel, testing, and reporting that closes the loop between spend and business outcomes.",
        ],
        ar: [
          "يُبنى النظام من أجزاء مترابطة: هيكلة الجمهور، الاستراتيجية الإبداعية، الإعلانات المدفوعة، WhatsApp كقناة للعملاء المحتملين، الاختبارات، وتقارير تربط بين الإنفاق ونتائج الأعمال.",
        ],
      },
      execution: {
        en: [
          "Work is in progress. The audience structure, creative direction and paid media are being built and tested; each part is documented here as it matures.",
        ],
        ar: [
          "العمل قيد التنفيذ. تُبنى هيكلة الجمهور والاتجاه الإبداعي والإعلانات المدفوعة وتُختبر، ويُوثَّق كل جزء هنا مع نضجه.",
        ],
      },
    },
    results: null,
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export const FEATURED_PROJECT = PROJECTS[0];

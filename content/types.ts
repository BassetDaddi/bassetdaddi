export type PageKey = "home" | "services" | "about" | "contact";

export type PageMeta = {
  title: string;
  description: string;
};

export type Pillar = {
  index: string;
  name: string;
  copy: string;
  items: string[];
};

export type Step = {
  index: string;
  name: string;
  line: string;
};

export type Detail = {
  label: string;
  value: string;
};

export type SiteCopy = {
  homeTitle: string;
  meta: Record<PageKey, PageMeta>;
  hero: {
    eyebrow: string;
    headline: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  positioning: {
    words: [string, string, string];
    lead: string;
    body: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    pillars: Pillar[];
  };
  mediaBuying: {
    eyebrow: string;
    title: string;
    intro: string;
    firstMonthLabel: string;
    firstMonthPrice: string;
    firstMonthNote: string;
    recurringLabel: string;
    recurringPrice: string;
    recurringNote: string;
    includesTitle: string;
    includes: string[];
    budgetTitle: string;
    budgetBody: string;
    creativeBody: string;
    outcomeTitle: string;
    outcomeBody: string;
    cta: string;
  };
  approach: {
    eyebrow: string;
    title: string;
    steps: Step[];
  };
  about: {
    eyebrow: string;
    title: string;
    excerpt: string[];
    full: string[];
    details: Detail[];
    readMore: string;
    placeCaption: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  finalCta: {
    title: string;
    body: string;
  };
  footer: {
    tagline: string;
  };
};

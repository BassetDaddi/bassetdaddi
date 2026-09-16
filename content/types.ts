// Long-form, per-locale copy lives in content/{en,ar}/site.ts as typed objects —
// not in the JSON message files, which hold short UI strings only. Every
// locale file must satisfy these types, so a missing line fails the build
// instead of shipping a blank.

export type PageKey =
  | "home"
  | "work"
  | "services"
  | "about"
  | "notes"
  | "contact";

export type PageMeta = {
  /** Browser / search title (the layout adds the "— Basset Daddi" suffix). */
  title: string;
  /** Meta description, ≤ 160 characters. */
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
  /** Home page title, used without the suffix. */
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

  work: {
    eyebrow: string;
    title: string;
    intro: string;
    readCase: string;
    allProjects: string;
    /** Honest note under the single project; no invented entries. */
    moreSoon: string;
  };

  services: {
    eyebrow: string;
    title: string;
    intro: string;
    pillars: Pillar[];
  };

  approach: {
    eyebrow: string;
    title: string;
    steps: Step[];
  };

  about: {
    eyebrow: string;
    title: string;
    /** Lines shown on the home teaser. */
    excerpt: string[];
    /** Full page copy, one entry per paragraph or line. */
    full: string[];
    details: Detail[];
    readMore: string;
    placeCaption: string;
  };

  notes: {
    eyebrow: string;
    title: string;
    body: string;
    empty: string;
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

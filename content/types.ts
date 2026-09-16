// Long-form, per-locale copy lives in content/{en,ar}/*.ts as typed objects —
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

export type PageCopy = {
  /** Browser / search title (the layout adds the "— Basset Daddi" suffix). */
  title: string;
  /** Meta description, ≤ 160 characters. */
  description: string;
  /** Small label above the H1. */
  eyebrow: string;
  h1: string;
  lede: string;
};

export type SiteCopy = {
  /** Used as the home page title without the suffix. */
  homeTitle: string;
  /** One line under the footer lockup. */
  positioning: string;
  pages: Record<PageKey, PageCopy>;
  home: {
    primaryCta: string;
    secondaryCta: string;
  };
  notes: {
    emptyTitle: string;
    emptyBody: string;
  };
};

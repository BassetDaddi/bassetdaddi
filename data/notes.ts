import type { Locale } from "@/lib/locale";

// Notes infrastructure. Categories are fixed by the brief; the list is empty
// until a real note is written — nothing is fabricated. When the first note
// exists, add it here (or move to MDX) and the notes page renders the list.

export type NoteCategoryId =
  | "growth"
  | "paid-media"
  | "ai"
  | "automation"
  | "building"
  | "experiments";

export type NoteCategory = {
  id: NoteCategoryId;
  label: Record<Locale, string>;
};

export const NOTE_CATEGORIES: NoteCategory[] = [
  { id: "growth", label: { en: "Growth", ar: "النمو" } },
  { id: "paid-media", label: { en: "Paid Media", ar: "الإعلانات المدفوعة" } },
  { id: "ai", label: { en: "AI", ar: "الذكاء الاصطناعي" } },
  { id: "automation", label: { en: "Automation", ar: "الأتمتة" } },
  { id: "building", label: { en: "Building", ar: "البناء" } },
  { id: "experiments", label: { en: "Experiments", ar: "التجارب" } },
];

export type Note = {
  slug: string;
  category: NoteCategoryId;
  /** ISO date, e.g. "2026-10-01" */
  date: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
};

export const NOTES: Note[] = [];

// The availability status shown in the hero and on the contact page.
// Edit this one object; nothing else needs to change.
//
// state controls the indicator: "available" lights the accent dot, the other
// two states use the muted dot. Keep the label factual — no dates, no
// capacity claims (docs/DECISIONS.md).

export type AvailabilityState = "available" | "limited" | "unavailable";

export const AVAILABILITY = {
  state: "available" as AvailabilityState,
  label: {
    en: "Available for selected projects.",
    ar: "متاح لمشاريع مختارة.",
  },
} as const;

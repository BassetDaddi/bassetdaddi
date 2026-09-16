import type { SiteCopy } from "../types";

// English copy. Voice: first person, short, concrete. See
// docs/design-system.md §12 for the principles and the banned list.
// Phase 2 carries the page shells only; sections arrive in Phases 3–5.

export const en: SiteCopy = {
  homeTitle: "Basset Daddi — Growth strategist and builder",
  positioning:
    "Strategist and builder — paid media, web and automation, run as one system.",

  pages: {
    home: {
      title: "Basset Daddi",
      description:
        "Basset Daddi is a growth strategist and builder based in Algeria. Paid media, conversion-focused websites and automation, designed to work as one system.",
      eyebrow: "Basset Daddi",
      h1: "Growth is a system. I build it.",
      lede: "Paid media, conversion-focused websites and automation — designed to work as one system, so growth can be measured, repeated and improved.",
    },
    work: {
      title: "Work",
      description:
        "Selected work by Basset Daddi: paid media, campaign and creative strategy, and digital growth systems.",
      eyebrow: "Work",
      h1: "Selected work",
      lede: "Case studies are published with real context only — and with results only once they are verified.",
    },
    services: {
      title: "Services",
      description:
        "Three pillars — Growth, Digital Experiences, Systems — scoped by outcome, not by a list of deliverables.",
      eyebrow: "Services",
      h1: "What I build",
      lede: "Three pillars — Growth, Digital Experiences, Systems — and the work is scoped by the outcome it has to produce, not by a list of deliverables.",
    },
    about: {
      title: "About",
      description:
        "Abdelbasset Daddiouameur, known as Basset Daddi: a marketer who builds, based in Algeria.",
      eyebrow: "About",
      h1: "A marketer who builds.",
      lede: "Abdelbasset Daddiouameur, known as Basset Daddi. Interested in growth, technology and the systems that connect them. Based in Algeria.",
    },
    notes: {
      title: "Notes",
      description:
        "Field notes on growth, paid media, AI, automation and building.",
      eyebrow: "Notes",
      h1: "Notes",
      lede: "Field notes on growth, paid media, AI, automation, building and experiments.",
    },
    contact: {
      title: "Contact",
      description:
        "Start a project with Basset Daddi. Send a short brief: what you're building, where growth is stuck, and when you want to start.",
      eyebrow: "Contact",
      h1: "Serious project? Let's talk.",
      lede: "Send a short brief: what you're building, where growth is stuck, and when you want to start.",
    },
  },

  home: {
    primaryCta: "Selected work",
    secondaryCta: "Start a project",
  },

  notes: {
    emptyTitle: "No notes yet.",
    emptyBody: "When there is something worth writing down, it will appear here.",
  },
};

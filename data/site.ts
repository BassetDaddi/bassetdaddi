// Identity and channels. Source: docs/DECISIONS.md (locked 2026-09-16).
// Brand hierarchy: "Basset Daddi" is what visitors remember; the full name
// appears only where it adds context (About, structured data).

export const SITE = {
  url: "https://bassetdaddi.com",
  brand: "Basset Daddi",
  wordmark: "BASSET DADDI",
  person: {
    name: "Abdelbasset Daddiouameur",
    nameAr: "عبد الباسط دادي واعمر",
  },
  location: {
    en: "Algeria",
    ar: "الجزائر",
  },
  // Not yet provided — see docs/DECISIONS.md. Components render a marked
  // placeholder while this is null; nothing is invented.
  email: null as string | null,
} as const;

export type SocialId =
  | "linkedin"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "facebook";

export type SocialLink = {
  id: SocialId;
  label: string;
  url: string;
};

// Verified profiles, in the client's priority order. Sections that need
// fewer links take the first N.
export const SOCIAL: readonly SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/abdelbasset-daddiouameur-337a41337/",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/basset.daddi/",
  },
  { id: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@basset_daddi" },
  { id: "youtube", label: "YouTube", url: "https://www.youtube.com/@Basset_daddi" },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/abdelbasset.daddi.ouameur",
  },
] as const;

export const PRIMARY_SOCIAL = SOCIAL.slice(0, 2);
export const SECONDARY_SOCIAL = SOCIAL.slice(2);

# Locked decisions

Client decisions that supplement [BRIEF.md](BRIEF.md). Locked unless a technical conflict appears. Dates are when the decision was given.

## 2026-09-16 — Identity

- **Brand (what visitors remember):** BASSET DADDI. Used in navigation, hero, logo treatment, page titles, CTAs, social-facing elements, portfolio branding.
- **Person (supporting identity):** Abdelbasset Daddiouameur · عبد الباسط دادي واعمر. Used only where it adds context: About, structured data (`name` / `alternateName`), full biography. Never repeated through the interface.
- **Location:** Algeria · الجزائر. Understated and factual. No "serving clients worldwide" or similar unless evidence is supplied.

## 2026-09-16 — Logo

- Files: `public/images/logo/light-logo.png` (on dark / near-black / deep navy) and `public/images/logo/dark-logo.png` (on white / off-white / light). Both 1254 × 1254 RGBA, vertical lockup (BD mark above wordmark).
- Do not recreate, replace, stretch, recolour, or add glow / shadow / gradient / effects. No text-only substitute where the real logo is appropriate.
- Main navigation: real logo at a restrained size; it supports the interface and does not dominate the hero.
- Phase 1 proposal (pending approval): mark alone in navigation via non-destructive crop, full lockup in footer, none in the hero; SVG or separated exports requested.

## 2026-09-16 — Availability

- Real status, displayed, understated (not an "Open to Work" badge).
- Current value: **"Available for selected projects."** / **«متاح لمشاريع مختارة.»**
- Stored as editable data, rendered from one source. Future values may include "Limited availability" / "Currently unavailable". No dates, no capacity claims.

## 2026-09-16 — Verified social links

Treat as verified. Do not invent others. Not every section shows all of them; where simplicity matters, follow this priority.

| Priority | Channel | URL |
|---|---|---|
| 1 | LinkedIn | https://www.linkedin.com/in/abdelbasset-daddiouameur-337a41337/ |
| 2 | Instagram | https://www.instagram.com/basset.daddi/ |
| 3 | Email / Contact | **address not yet provided — use a marked placeholder until supplied** |
| 4 | TikTok | https://www.tiktok.com/@basset_daddi |
| 5 | YouTube | https://www.youtube.com/@Basset_daddi |
| 6 | Facebook | https://www.facebook.com/abdelbasset.daddi.ouameur |

## 2026-09-16 — Contact / project CTA

- A clear, direct, understated project/contact CTA. Appropriate for an independent strategist and builder.
- Banned: "Let's build something amazing", "Take your business to the next level", "Unlock your potential", and the brief's list.

## 2026-09-16 — Content integrity

No fake metrics, testimonials, clients, achievements, experience, availability claims, or generic AI copy. Missing facts get a clearly marked placeholder or a question before publishing.

## 2026-09-16 — Process

Phased delivery; at the end of each phase: stop, show the result, explain key design decisions briefly, wait for approval. Phase 0 approved 2026-09-16. Phase 1 (design system & voice) delivered 2026-09-16 — see [design-system.md](design-system.md).

## 2026-09-16 — Phase 2 (foundation) built

"Start building" approved Phase 1 as working defaults: Instrument Sans + IBM Plex Sans Arabic, hero headline candidate A, BD mark alone in navigation with the full lockup in the footer, surface rhythm as proposed, email as a marked placeholder. All remain open to change at review. Foundation delivered: Next.js 16 scaffold, tokens, i18n with `proxy.ts` (cookie → Accept-Language → en), header/footer/switcher/mobile menu, six routes per locale, hreflang/canonical, localized 404. Git repository initialized, nothing committed yet.

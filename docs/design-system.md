# BASSET DADDI — Design System v1

Status: **Adopted as the working defaults on 2026-09-16** ("start building"); Phase 2 tokens are implemented from this file (`app/globals.css`). Open items in §13 remain changeable at review. The rendered specimen (fonts, colours, components, copy candidates) is published separately; the URL is recorded at the bottom.

Brief: [BRIEF.md](BRIEF.md). Nothing here overrides the brief; where the brief is silent, this document decides.

---

## 0. Principles

1. **Typography, whitespace, grid, photography, hierarchy, contrast.** No gradients, blur, shadows, glow, illustration, or cards-as-default. Structure is drawn with hairline rules and column offsets.
2. **Two surfaces, one component set.** Every component reads its colours from semantic tokens; a `data-surface` attribute on a section swaps the whole set. No per-surface component variants.
3. **Accent is a signal, not a colour scheme.** Its budget is listed in §1.4 and is not negotiable by "it looks empty".
4. **Arabic is a first-class system** with its own scale, line-heights and label conventions. Never a mirrored, tracked or capitalised Latin.
5. **Real over impressive.** No element exists to fill space. If removing it makes the page more premium, it goes.

---

## 1. Colour

### 1.1 Raw palette

| Token | Hex | Role |
|---|---|---|
| `ink-0` | `#0A0C10` | Near-black, cool. Page ground. |
| `ink-1` | `#10141C` | Deep navy. Alternate section band, mobile menu overlay. |
| `ink-2` | `#1A1F2A` | Charcoal. Hover fills, raised details. |
| `paper-0` | `#F3F0EA` | Warm off-white. Light surface; primary text on ink. |
| `paper-1` | `#E9E5DC` | Warm off-white, deeper. Alternate light band. |
| `blue-500` | `#3D7BFF` | Electric blue. Accent on ink. |
| `blue-700` | `#1D5BE0` | Cobalt. Accent on paper (AA-safe as text). |

No purple. No second accent hue. No tints of the accent used as fills.

### 1.2 Semantic tokens

Components consume only these. Default surface is ink.

| Semantic | Ink (`data-surface="ink"` / default) | Paper (`data-surface="paper"`) |
|---|---|---|
| `--bg` | `ink-0` | `paper-0` |
| `--bg-2` | `ink-1` | `paper-1` |
| `--bg-3` | `ink-2` | `#DFDACF` |
| `--fg` | `paper-0` | `ink-0` |
| `--fg-2` | `#B9BDC6` | `#4B515E` |
| `--fg-3` | `#858B97` | `#5B6170` |
| `--line` | `rgb(243 240 234 / 0.10)` | `rgb(10 12 16 / 0.12)` |
| `--line-strong` | `rgb(243 240 234 / 0.24)` | `rgb(10 12 16 / 0.28)` |
| `--accent` | `blue-500` | `blue-700` |
| `--on-accent` | `ink-0` | `paper-0` |

A third value, `data-surface="navy"`, is ink with `--bg: ink-1` — used for one band on the homepage for tonal rhythm.

### 1.3 Contrast (WCAG 2.x, computed)

| Pair | Ratio | Use |
|---|---|---|
| `fg` on ink | 17.2 : 1 | Any size |
| `fg-2` on ink | 10.4 : 1 | Any size |
| `fg-3` on ink | 5.7 : 1 | Metadata ≥ 12px |
| `accent` on ink | 5.1 : 1 | Small signals, link hover |
| `fg` on paper | 17.2 : 1 | Any size |
| `fg-2` on paper | 7.0 : 1 | Any size |
| `fg-3` on paper | 5.5 : 1 | Metadata ≥ 12px |
| `accent` on paper | 5.1 : 1 | Small signals, link hover |

Everything that carries text passes AA at its intended size.

### 1.4 Accent budget

Allowed: the availability indicator (available state only), keyboard focus ring, link hover colour, current-page marker in navigation, at most one index rule per section.
Not allowed: backgrounds, buttons, headings, icons at rest, borders, large text, the logo.

### 1.5 Surface rhythm (homepage proposal)

Nav / Hero / Positioning → **ink** · Selected work → **ink** · Services → **navy** · Approach → **paper** · About → **paper** · Notes / Final CTA / Footer → **ink**.
Three tonal values, one light insert in the middle. The About portrait sits on paper because the black suit needs a light ground to read fully; the hero portrait sits on ink deliberately (see §7.2).

---

## 2. Typography

### 2.1 Families

| Role | Recommended | Alternative | Notes |
|---|---|---|---|
| Latin | **Instrument Sans** (variable, wght 400–700, wdth 75–100) | Schibsted Grotesk (variable 400–900) | Neo-grotesk, studio-precise; the geometric extended wordmark stays the only "display" voice. |
| Arabic | **IBM Plex Sans Arabic** (400 / 500 / 600) | Noto Kufi Arabic (variable) | Engineered rhythm that sits next to a grotesk without imitating it. Reserve: Almarai. |

Loading: `next/font/google`, self-hosted at build, `display: swap`, size-adjusted fallbacks (Arial / Tahoma). Subsets: `latin`, `latin-ext`; `arabic`. Only the current locale's family is preloaded; the other loads lazily for the switcher label alone.

Weights: **400** body, **500** headings, labels, buttons, nav. **600** exists only for inline emphasis. Nothing heavier — the wordmark is the only bold object on the site.

### 2.2 Scale — Latin (`lang="en"`)

Fluid sizes via `clamp()`; the two numbers are mobile → large desktop.

| Step | Size | Line-height | Tracking | Weight |
|---|---|---|---|---|
| Display | `clamp(2.75rem, 1.5rem + 5.5vw, 6.5rem)` 44 → 104 px | 0.95 | −0.03em | 500 |
| H1 | `clamp(2.25rem, 1.25rem + 4vw, 4.5rem)` 36 → 72 | 1.0 | −0.025em | 500 |
| H2 | `clamp(1.75rem, 1.2rem + 2.2vw, 2.75rem)` 28 → 44 | 1.1 | −0.02em | 500 |
| H3 | `clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)` 20 → 24 | 1.25 | −0.01em | 500 |
| Body L | `clamp(1.125rem, 1rem + 0.4vw, 1.25rem)` 18 → 20 | 1.5 | 0 | 400 |
| Body | `clamp(1rem, 0.95rem + 0.2vw, 1.0625rem)` 16 → 17 | 1.6 | 0 | 400 |
| Small | 0.875rem (14) | 1.5 | 0 | 400 |
| Metadata | 0.75rem (12), uppercase | 1.4 | +0.08em | 500 |

### 2.3 Scale — Arabic (`lang="ar"`)

Not derived from the Latin table by a multiplier; each step is set for the Arabic face's own proportions.

| Step | Size | Line-height | Tracking | Weight |
|---|---|---|---|---|
| Display | `clamp(2.5rem, 1.4rem + 5vw, 5.75rem)` 40 → 92 px | 1.2 | 0 | 500 |
| H1 | `clamp(2rem, 1.2rem + 3.5vw, 4rem)` 32 → 64 | 1.25 | 0 | 500 |
| H2 | `clamp(1.625rem, 1.1rem + 2vw, 2.5rem)` 26 → 40 | 1.35 | 0 | 500 |
| H3 | `clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)` 20 → 24 | 1.5 | 0 | 500 |
| Body L | `clamp(1.1875rem, 1.05rem + 0.4vw, 1.3125rem)` 19 → 21 | 1.75 | 0 | 400 |
| Body | `clamp(1.0625rem, 1rem + 0.2vw, 1.125rem)` 17 → 18 | 1.8 | 0 | 400 |
| Small | 0.9375rem (15) | 1.7 | 0 | 400 |
| Metadata | 0.8125rem (13), **no uppercase, no tracking** | 1.6 | 0 | 500 |

### 2.4 Rules

- `text-wrap: balance` on Display–H3; `text-wrap: pretty` on body.
- Prose measure: ≤ 40rem Latin, ≤ 38rem Arabic. Never a full-width paragraph on desktop.
- Arabic: `letter-spacing: 0` always (connected script breaks under tracking). No uppercase device exists — the "label" role is carried by size 13 / weight 500 / `fg-3`, not by caps or spacing.
- Digits: Western (`0–9`) in both locales; `Intl` formatting locale `ar-DZ`. `font-variant-numeric: tabular-nums` wherever numbers align.
- Hyphenation off in both languages.
- Emphasis: weight 600 or accent colour. No italics in Arabic. Latin italics only inside quoted editorial text.
- Mixed runs (a Latin brand name inside Arabic): wrap in `<bdi>` when adjacent to digits or punctuation; otherwise trust the bidi algorithm.

---

## 3. Spacing

Base 4px. Named steps only; no arbitrary values in components.

| Token | px | Typical use |
|---|---|---|
| `space-1` | 4 | Icon gaps |
| `space-2` | 8 | Inline gaps, label → value |
| `space-3` | 12 | Button inner padding (vertical) |
| `space-4` | 16 | Component inner padding |
| `space-5` | 24 | Paragraph stack, grid gutter (tablet) |
| `space-6` | 32 | Grid gutter (desktop), component gaps |
| `space-7` | 48 | Block gap (mobile) |
| `space-8` | 64 | Block gap |
| `space-9` | 96 | Section padding (mobile) |
| `space-10` | 128 | Section padding (desktop) |
| `space-11` | 160 | Section padding (large) |

Rhythm tokens: `--section: clamp(96px, 12vw, 160px)`; `--block: clamp(48px, 6vw, 96px)`; `--stack: 24px`.

---

## 4. Grid, containers, breakpoints

- **12 columns** at every width ≥ 768px; a 6-column grid below (mobile compositions are made on 6, not by collapsing 12).
- Gutter: 16px mobile · 24px tablet · 32px desktop and large.
- Page margin: 20px mobile · 40px tablet · 64px desktop · 96px large.
- Container: text and components live inside `max-width: 1440px`, centred. Hairline rules, surface bands and large imagery may run full-bleed.
- Text never spans more than 7 of 12 columns on desktop.
- Asymmetry rule: primary content starts at column 1 (inline-start) and leaves columns empty on purpose; metadata and secondary content sit at the inline-end. Empty columns are part of the composition, not a bug.

| Tier | Viewport | Tailwind screens |
|---|---|---|
| Mobile | < 768 | base, `sm` (640) |
| Tablet | 768 – 1023 | `md` |
| Desktop | 1024 – 1535 | `lg`, `xl` |
| Large | ≥ 1536 | `2xl` |

---

## 5. Borders and radius

- Rules are **1px** in `--line`; `--line-strong` only for interactive borders (secondary button, focused switcher).
- Section boundaries: a full-bleed hairline above the section, not a box around it.
- Lists (services, approach steps, notes): rows separated by hairlines, table-of-contents style. No boxes.
- Radius: `0` on everything structural, images included. `2px` on buttons only. `9999px` only on the availability dot and the avatar.
- No shadows, no blur, no glow, anywhere.

---

## 6. Motion

| Token | Value | Use |
|---|---|---|
| `--dur-1` | 150ms | Colour, opacity, underline |
| `--dur-2` | 300ms | Transforms, menu fade, switcher |
| `--dur-3` | 700ms | Content reveal, project hover scale |
| `--dur-4` | 1000ms | Hero portrait reveal (once) |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Reveals, hover-in |
| `--ease-std` | `cubic-bezier(0.2, 0, 0, 1)` | Everything else |

Rules:
- Reveal = opacity 0 → 1 with translateY 12px → 0, **once**, when 20% visible, 60ms stagger, at most 4 items per group. Applied to hero elements, section titles, project presentations, the About portrait. **Not** to body paragraphs, lists, or the footer.
- Hover: nav underline scales from the inline-start edge (`--dur-2`); arrow links move the arrow 4px along the inline-end axis; project image scales to 1.02 (`--dur-3`) inside an `overflow: hidden` frame.
- Page transitions: none. Mobile menu: fade + 8px rise, `--dur-2`.
- No parallax, no scroll-linked motion, no cursor effects, no looping animation.
- `prefers-reduced-motion: reduce`: all durations → 1ms, transforms removed, reveals render in their final state immediately.
- Implementation: CSS transitions + one small client component (IntersectionObserver) for reveals. **No Framer Motion in V1.**

---

## 7. Images and the logo

### 7.1 Portraits (the four existing files, 1122 × 1402, RGBA)

- Rendered with `next/image`; `priority` and explicit `sizes` on the hero only. AVIF/WebP with alpha preserved. No filters, no shadows, no outlines, no mirroring, never a crop through the face.
- Maximum render width 560 CSS px on desktop (source is 1122px; keeps 2× density). Mobile: the portrait is re-composed (head-and-shoulders crop via `object-position`), not shrunk.
- Three of the four are cut at thigh or knee: **they bleed off the bottom edge of their container.** The crop line is never visible.
- Hero on ink: the black suit dissolves into `ink-0`; the face, hands and the blue lens tint carry the image. This is the intended, art-directed treatment (the specimen shows it next to `ink-1` and paper for comparison). Decision to confirm in review.
- About on paper: full silhouette reads; the seated pose gets room at the inline-end.
- Work portrait: services/approach area, on the navy or paper band, never twice on one page with the hero.
- Avatar (head-and-shoulders): OG image, JSON-LD `image`, contact page. Square crop `object-position: 50% 30%`.

### 7.2 Logo (`public/images/logo/light-logo.png`, `dark-logo.png`, 1254 × 1254, RGBA)

- The file is a vertical lockup — BD mark above the wordmark — inside a canvas that is ~55% transparent padding. The mark occupies roughly x 28–73%, y 27–62% of the canvas; the wordmark y 69–75%.
- **Navigation: the BD mark alone**, 36px tall, cropped non-destructively from the real file (fixed box, `overflow: hidden`, the full image positioned inside). No text substitute, no redrawn mark.
- **Footer: the full lockup**, with the visible artwork ~96px tall so the wordmark is legible.
- **Hero: no logo.** The hero is typography and portrait; the brand name appears as text in the headline block.
- `light-logo.png` on ink and navy; `dark-logo.png` on paper. No recolouring, no effects, proportions locked.
- Request: an SVG (or separate mark / wordmark exports). Until then, the CSS crop is the interim; producing pixel-identical trimmed derivatives from the exact file is proposed, not done.

---

## 8. Buttons and links

Two buttons and one arrow link. No other variants.

| Component | Ink surface | Paper surface | Size |
|---|---|---|---|
| **Primary** | fill `--fg`, text `--bg`; hover fill `#FFFFFF` | fill `--fg`, text `--bg`; hover fill `ink-2` | height 48, padding 0 22px, 15px / 500, radius 2px |
| **Secondary** | transparent, 1px `--line-strong`, text `--fg`; hover border `--fg` | same | same |
| **Arrow link** | text `--fg` + `→` (`←` in RTL); hover: arrow +4px along inline-end, colour `--accent` | same | inherits type step |

- Active state: `translateY(1px)`. No loading or disabled states are needed in V1.
- Inline links: 1px underline in `--line-strong`, `text-underline-offset: 0.18em`; hover colour and underline → `--accent`.
- Focus-visible everywhere: `outline: 2px solid var(--accent); outline-offset: 3px`. Never removed without a replacement.
- Buttons are monochrome by rule; the accent never fills a button.

---

## 9. Navigation

- Height 72px desktop, 64px mobile. Sticky, solid `--bg` (no blur), a hairline bottom rule appears after 8px of scroll. No shrink or hide animation.
- Desktop order along the inline axis: **mark · Work · Services · About · Notes · (space) · Contact · EN / عربي**. Contact is separated by extra space, not a button.
- Current page: 1px rule under the label in `--accent`; `aria-current="page"`.
- Mobile: **mark · Menu**. Opens a full-screen `--bg-2` overlay: the five links at H2 size, then Contact, then the switcher and the two priority social links. "Close" replaces "Menu". Focus trapped, `Esc` closes, scroll locked, `aria-expanded` on the trigger.
- Language switcher: `EN · عربي`; current in `--fg`, other in `--fg-3`; each is a real `<a>` to the same path in the other locale with `hreflang` and `lang` attributes; keyboard-accessible by nature; on click, JS writes the locale cookie before navigation. `عربي` always renders in the Arabic face, `EN` in the Latin face.
- RTL: logical order flips automatically — mark at the right, links right-to-left, switcher at the far left.

---

## 10. RTL rules

1. `<html lang="ar" dir="rtl">`; layout uses logical properties only (`margin-inline-start`, `padding-inline`, `inset-inline-end`, `text-align: start`). No `left` / `right` utilities in components.
2. The grid flows RTL automatically; asymmetric compositions are **re-decided per section**, not mirrored blindly. Portraits are never flipped; where the body angle faces away from the text, the composition changes, not the photo.
3. Only directional glyphs mirror: arrows, chevrons. Dots, social marks and the logo do not.
4. Metadata labels: no uppercase, no tracking (see §2.3). Weight and colour carry the role.
5. Punctuation: `،` `؛` `؟`; the em-dash and quotation marks are neutral and stay. Digits Western.
6. Line-heights per §2.3; Arabic display never below 1.2.
7. Numbers, prices, ratios, dates: `ar-DZ` formatting via `Intl`; isolate mixed runs with `<bdi>`.
8. Brand wordmark stays Latin on both locales. The Arabic name عبد الباسط دادي واعمر appears only where the full name appears (About, structured data).
9. Underlines and rules grow from the inline-start edge in both directions.
10. Every component is reviewed in both directions before a phase is called done.

---

## 11. Content model notes

- `availability`: `{ state: 'available' | 'limited' | 'unavailable', label: { en, ar } }`. Default: `available` — "Available for selected projects." / "متاح لمشاريع مختارة." Rendered from this one object in the hero and on the contact page. The dot is `--accent` only when `available`; otherwise `--fg-3`. No dates, no capacity claims.
- `person`: `name: "Abdelbasset Daddiouameur"`, `nameAr: "عبد الباسط دادي واعمر"`, `brand: "Basset Daddi"`, `location: { en: "Algeria", ar: "الجزائر" }`.
- `social` (verified, in priority order): LinkedIn, Instagram, Email (address **not yet provided**), TikTok, YouTube, Facebook. Header/hero/final CTA show the top two plus email; the footer shows all.
- Brand hierarchy: `Basset Daddi` in navigation, hero, titles, CTAs, footer. Full name only in About and JSON-LD (`name` / `alternateName`).

---

## 12. Voice and copy — candidates for approval

### 12.1 Principles

English: first person, short sentences, concrete nouns (paid media, landing pages, automations), no superlatives, no numbers that are not real. Banned: the brief's list plus *leverage, empower, journey, passionate, at the intersection of, in today's fast-paced world*.

Arabic: authored, not translated. Modern Standard Arabic in a business register; first person (أبني، أعمل); short sentences; avoid bureaucratic constructions (يتم، القيام بـ، من خلال as filler); industry terms in Arabic where natural (الإعلانات المدفوعة، صفحة هبوط، أتمتة), Latin only where the Arabic would feel forced (ROAS, CAC, Meta Ads). Western digits, Arabic punctuation, no tracking.

### 12.2 Hero headline

| | English | Arabic |
|---|---|---|
| **A (recommended)** | Growth is a system. I build it. | النموّ نظام. وأنا أبنيه. |
| B | I build the systems behind growth. | أبني الأنظمة التي تصنع النموّ. |
| C | Marketing, media and technology — run as one system. | التسويق والإعلانات والتقنية — نظام واحد. |

Support line: **EN** "Paid media, conversion-focused websites and automation — designed to work as one system, so growth can be measured, repeated and improved." · **AR** «إعلانات مدفوعة، مواقع مصمّمة للتحويل، وأتمتة — تعمل كنظام واحد، حتى تقيس النموّ وتكرّره وتحسّنه.»

Meta line: **EN** "Based in Algeria · Available for selected projects." · **AR** «الجزائر · متاح لمشاريع مختارة.»

### 12.3 Calls to action

| | English | Arabic |
|---|---|---|
| Primary | Selected work → | الأعمال المختارة ← |
| Secondary | Start a project | ابدأ مشروعاً |
| Final CTA title | Serious project? Let's talk. | مشروع جادّ؟ لنتحدّث. |
| Final CTA support | Send a short brief: what you're building, where growth is stuck, and when you want to start. | أرسل ملخّصاً قصيراً: ماذا تبني، أين يتعثّر النموّ، ومتى تريد البدء. |
| Alternative title | Building something that needs to grow? Let's talk. | تبني شيئاً يحتاج إلى النموّ؟ لنتحدّث. |

### 12.4 Positioning line and meta description

- **EN line:** Strategist and builder — paid media, web and automation, run as one system.
- **AR line:** أخطّط وأبني: إعلانات مدفوعة، ويب، وأتمتة — كنظام واحد.
- **EN description:** Basset Daddi is a growth strategist and builder based in Algeria. Paid media, conversion-focused websites and automation, designed to work as one system.
- **AR description:** باسط دادي — استراتيجي نموّ من الجزائر يبني أنظمة رقمية عملية: إعلانات مدفوعة، مواقع مصمّمة للتحويل، وأتمتة تعمل كنظام واحد.

### 12.5 Approach (methodology)

**EN title:** The compounding loop · **sub:** Five moves, repeated.
**AR title:** كيف أعمل · **sub:** خمس خطوات تتكرّر.

| Step | English | Arabic |
|---|---|---|
| 1 | **Diagnose** — Find where growth is actually stuck, not where everyone assumes it is. | **تشخيص** — نحدّد أين يتعثّر النموّ فعلاً، لا أين يُفترض أنه يتعثّر. |
| 2 | **Design** — Choose the smallest system that can fix it: channels, pages, automations. | **تصميم** — نختار أصغر نظام قادر على حلّ المشكلة: قنوات، صفحات، أتمتة. |
| 3 | **Ship** — Build it and get it in front of real customers quickly. | **إطلاق** — نبنيه ونضعه أمام عملاء حقيقيين بسرعة. |
| 4 | **Measure** — Track what matters, not what's easy to report. | **قياس** — نتتبّع ما يهمّ فعلاً، لا ما يسهل عرضه في التقارير. |
| 5 | **Compound** — Keep what works, cut what doesn't, let the wins stack. | **تراكم** — نُبقي ما ينجح، نحذف ما لا ينجح، وندع النتائج تتراكم. |

### 12.6 Labels

| | English | Arabic |
|---|---|---|
| Nav | Work · Services · About · Notes · Contact | الأعمال · الخدمات · عنّي · ملاحظات · تواصل |
| Switcher | EN | عربي |
| Pillars | Growth · Digital Experiences · Systems | النموّ · التجارب الرقمية · الأنظمة |
| Note categories | Growth · Paid Media · AI · Automation · Building · Experiments | النموّ · الإعلانات المدفوعة · الذكاء الاصطناعي · الأتمتة · البناء · تجارب |
| Project status | Work in progress | قيد العمل |
| Case-study fields | Introduction · Client · Industry · Year · Role · Context · Problem · Strategy · Execution · Creative · Paid Media · Experiments · Results · Learnings · Next project | مقدّمة · العميل · القطاع · السنة · الدور · السياق · المشكلة · الاستراتيجية · التنفيذ · الإبداع · الإعلانات المدفوعة · التجارب · النتائج · الدروس · المشروع التالي |
| Menu / Close | Menu · Close | القائمة · إغلاق |

Alternatives to consider: About → نبذة (more formal); Notes → كتابات (reads as "writings").

---

## 13. Open decisions for this review

1. Font pairing: Instrument Sans + IBM Plex Sans Arabic (recommended), or either alternative.
2. Hero headline: A, B or C — in each language independently.
3. Arabic copy: native check of every line in §12, especially تراكم as the fifth step and عنّي / ملاحظات as labels.
4. Hero portrait treatment: on `ink-0` (dissolve, recommended), `ink-1`, or paper.
5. Logo: mark-only in navigation, full lockup in footer; SVG or separated exports requested; permission to produce trimmed, pixel-identical derivatives.
6. Email address for the contact channel (not yet provided).
7. Surface rhythm in §1.5.

Specimen URL: https://claude.ai/artifact/JEwdPi9vxMoZubPi9KNujo

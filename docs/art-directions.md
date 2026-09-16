# BASSET DADDI — Three art directions

Status: **Phase 2 proposal, awaiting approval** (2026-09-16). No code. All three respect [BRIEF.md](BRIEF.md) (near-black / deep navy / charcoal / warm off-white, controlled blue, Swiss editorial × premium technology × independent studio × founder portfolio, no clichés) and [DECISIONS.md](DECISIONS.md). Copy follows [brand.md](brand.md).

---

## Direction A — Editorial Ledger

**Visual concept.** The site as a quiet ledger of decisions. Type-led; structure drawn with hairline rules; two surfaces — ink and paper — alternating like signatures in a printed publication. Photography appears twice, at scale, and otherwise stays out of the way. Confidence expressed as restraint.

**Grid.** 12 columns, 32px gutters, 1440px container, 64–96px margins. Text never wider than 7 columns; asymmetry by leaving columns empty on purpose (or giving them to the portrait). Mobile composed on 6 columns, portrait recropped.

**Typography.** Instrument Sans (Latin, 400/500) + IBM Plex Sans Arabic (400/500). Display 44→104px, −0.03em Latin / 0 Arabic. Uppercase tracked metadata in Latin; 13px/500 labels in Arabic. Alternative Latin: Schibsted Grotesk for a more newspaper voice.

**Colors.** ink-0 ground (~75% of the page), one navy band, one paper insert (Approach + About). Off-white type. Accent budget: availability dot, focus ring, link hover, current-nav rule, one index rule per section. Never a fill.

**Portrait treatment.** Hero portrait ≤560px on columns 8–12, bleeding off the bottom, dissolving into ink — face, hands and blue lenses carry it. About portrait on paper, full silhouette, room at the inline-end. Work portrait on the navy band in Services. Avatar for OG only. Never mirrored.

**Project presentation.** *Entries.* Each project is a large editorial entry: index, client at H2, metadata row (industry · year · role · status), two or three sentences of context, an image slot on columns 4–12 that exists only when assets do, arrow link. Selected Work on the homepage shows one entry at full scale — FORCE SCREW, typographic, "Work in progress" — which reads as intentional, not empty. Case study: the 15 fields as a running document with a sticky metadata rail.

**Navigation.** Sticky solid bar (72/64px), hairline after 8px of scroll, current page marked by a 1px accent rule. Mobile "Menu" opens a full-screen navy dialog. No hide/reveal.

**Motion.** Publication restraint: one reveal pattern (opacity + 12px rise, once), nav underline from the inline-start, arrow shift, project image scale 1.02. No page transitions, no parallax. Reduced-motion collapses everything.

**Arabic / RTL.** A separate Arabic scale (larger leading, zero tracking, no caps device). Logical properties; the grid mirrors; the hero is recomposed, not flipped — portrait at the inline-end, headline at the right; the camera-facing gaze keeps it engaged. Arrows mirror; dots and logo don't. Western digits, Arabic punctuation.

**What makes it premium.** The rhythm of surfaces; one cinematic moment (portrait emerging from ink) against otherwise pure typography; Arabic as its own typographic system; the logo handled with precision; whitespace as confidence.

**Risks.** Austerity can read as emptiness while content is thin — mitigated by rhythm and copy, never by adding elements. "Dark, grotesk, hairlines" is a look good studios share; distinctiveness rests on execution (Arabic craft, the portrait moment, the copy). The dissolve depends on screen quality — test on a cheap Android panel.

---

## Direction B — Dark Room

**Visual concept.** The portraits are the site. Darkness is the material: a near-black room where the only light falls on the face and hands; typography is large but sparse and stays out of the picture's way. Cinematic, high-contrast, still. The founder as presence, not decoration.

**Grid.** 12 columns for type; imagery ignores the container — bleed lanes let the portrait run off the viewport edge (column 7 to the edge) and off the bottom; type lives in columns 1–6. Tall sections: hero at least 85vh, project plates full-width. Mobile: the portrait crops to the face at ~60vh, headline over the shoulder line.

**Typography.** Schibsted Grotesk 500 for display at 120–140px (masthead energy); Instrument Sans for body and UI at 16px in fg-2, deliberately quieter. Arabic display: IBM Plex Sans Arabic 500 at 96–110px (Noto Kufi Arabic as the bolder alternative); body in Plex Arabic.

**Colors.** ~95% ink-0 with ink-1 bands; off-white for text only. No paper except the final CTA, which inverts to paper as a deliberate bright ending. Accent reduced to two uses: availability dot and current-nav rule — the light in the room is the portrait, not the blue.

**Portrait treatment.** Hero: head-and-shoulders crop at ~70vh, inline-end, bleeding off edge and bottom; the headline overlaps the suit (near-black on near-black, still legible). About: the seated portrait at full silhouette on ink-1, chair included — the thinking image. Work: full-bleed band between sections — the cuff gesture as "building". Avatar: a small round crop beside the availability line. Never mirrored, never filtered.

**Project presentation.** *Plates.* Full-width plates with the client name overlaid at display size and one metadata line; hover scales the image 1.02 and shifts the name. Until assets exist the plate is typographic: FORCE SCREW at 140px on ink-1, one rule, the status. Case study: opening plate, then alternating image/text bands; the 15 fields grouped into five acts.

**Navigation.** Transparent bar over the hero, solid ink after it; hides on scroll-down, returns on scroll-up. Mobile: full-screen dialog. No fixed CTA.

**Motion.** Cinematic and sparse — three moments in total: the hero load (portrait fades up from black over 1s while headline lines rise), plates scale 1.04→1 on entry, nav hide/reveal. Nothing else moves. Reduced-motion → static.

**Arabic / RTL.** The portrait moves to the inline-end (left); with the body angled left, the composition opens outward — mitigated by cropping tighter to the face in Arabic, where the camera-facing gaze dominates. Arabic display at 100px+ needs leading ≥1.15 and lines of four words or fewer; Kufi holds that scale better than Plex, at the cost of a second Arabic family. The type-over-suit overlap must be re-composed in RTL (the shoulder is on the other side).

**What makes it premium.** Contrast and stillness; the confidence of letting one image and one sentence carry a screen; type at true display scale; darkness used as material rather than as "dark mode".

**Risks.** Its strength is photography and the library is four portraits of the same man in the same suit — repetition is the real danger, and there is no project imagery yet. Black-on-black collapses on cheap panels. A face this large can read as "personal-brand influencer" rather than strategist. Motion creep is one decision away from "overly animated". The hero LCP is a large image. RTL is the hardest of the three.

---

## Direction C — Blueprint

**Visual concept.** The site as a documented system — the way a builder documents his own work. A faint drafting grid, a metadata rail on every page, numbered sections that mirror the brief's own 01–10 structure, figures with captions. Rigor as the aesthetic: nothing decorative, everything labelled.

**Grid.** 12 columns with the grid *visible* as 1px lines at 6% opacity on the hero and section bands. One document layout on every page: metadata rail in columns 1–3, content in columns 4–12; 64px margins at every desktop tier (denser, more technical). Mobile: the rail collapses into a metadata row above the content.

**Typography.** One superfamily across scripts: IBM Plex Sans (Latin), IBM Plex Sans Arabic, IBM Plex Mono for Latin metadata, IDs and dates. Display Plex Sans 500 at 96px max; tabular numerals everywhere. Arabic metadata stays in Plex Sans Arabic 13/500 — there is no Arabic mono — a deliberate asymmetry.

**Colors.** ink-0 ground with the visible grid; paper for "documents" — the case-study body reads like a printed file. Accent for annotations: index numbers, the current-section marker, the caption rule. A slightly larger budget than A, still only small text and rules, never fills.

**Portrait treatment.** Portraits as figures: inside a hairline frame with a mono caption ("Fig. 01 — Basset Daddi, Algeria"). Hero figure on ink (dissolve), About figure on paper (full silhouette). Documentary, honest, slightly cold.

**Project presentation.** *Case files.* An index table — ID · client · industry · year · role · status — where a single row (FORCE SCREW · Manufacturing · 2026 · Paid media, campaign & creative strategy · In progress) reads as a record, not a gap. Each row opens a file: the 15 fields as numbered sections with the rail as table of contents, images as captioned figures, and a Results section that exists in the structure and states "not yet verified" until it is.

**Navigation.** Sticky top bar plus a per-page index in the rail (section numbers) that tracks the current section on scroll. Mobile collapses the index into a "Contents" toggle; main nav in the dialog overlay.

**Motion.** Mechanical: hairlines draw in from the inline-start (300ms), labels appear without fades, the index marker moves; hover states switch instantly; no image motion at all. Reduced-motion → no line-draws.

**Arabic / RTL.** Rail moves to the right; the grid mirrors; table columns reorder with the ID at the inline-start. The technical register in Arabic is carried by structure and Western numerals, not by a mono face. Section numbers stay Western digits at the inline-start. Captions in Plex Sans Arabic 13/500.

**What makes it premium.** Rigor and coherence — one type family across two scripts, a document logic that never breaks, the honesty of captions and "not yet verified". The feeling that everything was measured.

**Risks.** The closest of the three to the developer-portfolio / AI-template trope — numbered sections, mono labels, visible grid — and it escapes it only through editorial discipline. The coldest and least human: the person can disappear behind the document. Scroll-spy and the rail add JavaScript and complexity. The Arabic side loses the mono register and must feel equally "technical" by other means.

---

## Comparison

| Criterion | A · Editorial Ledger | B · Dark Room | C · Blueprint |
|---|---|---|---|
| Fit with the brief's direction | ●●● | ●●○ | ●●○ |
| Works with today's content (one WIP project, no project imagery, four portraits, no notes) | ●●● | ●○○ | ●●○ |
| Arabic as a first-class system | ●●● | ●○○ | ●●○ |
| Performance (LCP, JavaScript) | ●●● | ●○○ | ●●○ |
| Distinctiveness against generic portfolios | ●●○ | ●●● | ●○○ |
| Warmth — the person comes through | ●●○ | ●●● | ●○○ |
| Risk of a cliché reading | low | medium | high |
| Grows as projects and notes are added | ●●● | ●●● | ●●● |

## Recommendation — Direction A, with two borrows

1. **It doesn't depend on assets that don't exist yet.** Typography and copy carry it today; project imagery and notes strengthen it later. B's strength is a photo library that is four images deep; C needs volume to feel like a system.
2. **It serves Arabic best.** A type-led system is where "first-class Arabic" is actually decided. B's 100px+ display type and C's mono register both make Arabic harder.
3. **It matches the person.** Precise, calm, execution-oriented: restraint reads as confidence, which is the premium signal the brief asks for. B risks "influencer"; C risks "spec sheet".
4. **It is structurally easier to make fast and accessible** — static pages, one reveal pattern, no scroll-spy, no giant LCP image.
5. **Its main risk is already designed against.** The two-surface rhythm and the single cinematic portrait moment keep austerity from becoming emptiness.

**Borrow from B:** the hero's one cinematic moment — the portrait emerging from ink at real scale, the only place the site performs.
**Borrow from C:** case-file discipline — a metadata rail and numbered sections on case-study pages, and "not yet verified" as a visible state rather than a hidden section. No mono face, no visible grid.

Direction A is what the approved design system already encodes; the borrows are additions, not reversals.

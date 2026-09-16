# Imagery register

Every photograph on the site, where it is used, and where it came from. Nothing here is evidence of client work; the four editorial images are context and atmosphere only, and the site says so in the caption wherever it could be mistaken.

## Portraits (client-supplied, never filtered, never mirrored)

| File | Used on |
|---|---|
| `public/images/portraits/basset-hero.png` | Home hero (desktop: columns 8–12, bleeding the bottom edge; mobile: head-and-shoulders crop) |
| `public/images/portraits/basset-about.png` | Home about teaser and About page, on the paper surface |
| `public/images/portraits/basset-work.png` | Home services band and Services page closing composition |
| `public/images/portraits/basset-avatar.png` | Avatar element on About and Contact; JSON-LD `image` |

## Client assets

`public/images/projects/force-screw/` — none yet. `data/projects.ts` → `images: []`. When real assets are added, list them there and the project entry and case study render them in place of the editorial plate.

## Editorial imagery (Unsplash License — free to use; hotlinked via images.unsplash.com and optimised by Next)

| Key (`data/imagery.ts`) | Photo | Photographer | Used on | Caption on site |
|---|---|---|---|---|
| `algiers` | photo-1771859995123-141e8e3c1cf7 | [@tomarquize](https://unsplash.com/@tomarquize) | About page | "Algiers" |
| `steel` | photo-1667892702884-faa077e80d7b | [@apryan_cahyo](https://unsplash.com/@apryan_cahyo) | Home selected work, Work page, Force Screw case study | "Industrial context — editorial image, not a client asset" |
| `grid` | photo-1781520423154-b4f0732488c6 | [@redaska](https://unsplash.com/@redaska) | Services page | "Structure" |
| `lattice` | photo-1769066137878-1d199b3eb010 | [@davidgeneugelijk](https://unsplash.com/@davidgeneugelijk) | Notes page | "Detail" |

Treatment: `saturate(0.72) contrast(1.04)` so four photographs sit inside one palette. Each carries its photographer credit in the caption line.

# bassetdaddi.com

Bilingual (English / Arabic RTL) personal website for **Basset Daddi**, focused on paid media, conversion-focused web experiences and growth systems.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · next-intl 4.

## Main structure

```text
app/[locale]/        localized Home, Services, About and Contact pages
components/          reusable UI and layout components
content/{en,ar}/     typed English and Arabic website copy
sections/            homepage/service sections, including Media Buying pricing
data/                identity, imagery and availability
public/images/       brand assets and portraits
i18n/                locale routing and UI messages
lib/                 SEO, locale and utility helpers
```

## Media Buying pricing

The public pricing block is defined in:

- `content/en/site.ts`
- `content/ar/site.ts`
- rendered by `sections/MediaBuyingOffer.tsx`

Current structure:

- First month: **45,000 DA** — setup, launch and management
- Following months: **35,000 DA / month** — ongoing management and optimization
- Advertising spend is explicitly separate and paid directly by the client to the ad platforms.

## Quality / SEO

The site includes responsive layouts, bilingual metadata, canonical + hreflang tags, sitemap/robots support, Person structured data and Media Buying service/offer structured data.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Editing content

- Availability: `data/availability.ts`
- Identity and social links: `data/site.ts`
- Main copy and pricing: `content/en/site.ts`, `content/ar/site.ts`
- Navigation/UI labels: `i18n/messages/{en,ar}.json`

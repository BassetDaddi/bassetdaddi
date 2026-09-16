# bassetdaddi.com

Official personal site of **Basset Daddi** — growth strategist and builder, Algeria. English and Arabic (RTL), built as one static site with a single request-time interceptor for language routing.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · next-intl 4 · Vercel.

## Structure

```
app/[locale]/        routes — every page prerendered for en and ar
components/          brand marks, ui primitives, layout shell
content/{en,ar}/     long-form copy per locale (typed; a missing line fails the build)
data/                identity, verified links, availability status
i18n/                routing, navigation helpers, request config, UI messages
lib/                 locale primitives, fonts, SEO helpers
proxy.ts             cookie → Accept-Language → en, for unprefixed URLs only
docs/                brief, locked decisions, design system
public/images/       portraits and logo (never replaced, never redrawn)
```

## Scripts

```
npm run dev     # local development
npm run build   # production build + type check
npm run lint
```

## Editing content

- Availability status: `data/availability.ts`
- Identity and links: `data/site.ts`
- Page copy: `content/en/site.ts`, `content/ar/site.ts`
- UI labels: `i18n/messages/{en,ar}.json`

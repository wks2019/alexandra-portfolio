# Alexandra Vlasceanu — Portfolio

Next.js 16 (App Router) + TypeScript + Tailwind v4 + shadcn/ui + Framer Motion, Supabase-ready CMS backend.

## Status: Phase 1 of 4 (see plan below)

Phase 1 ships a complete, production-quality **static** site: every homepage
section, responsive layout, animations, SEO plumbing, and a working contact
form. Content lives in `src/lib/content/site-content.ts` in the exact shape
the Supabase tables use, so Phase 2 swaps the data source without touching
any component.

## Setup

```bash
npm install
cp .env.example .env.local   # fill in Supabase keys once Phase 2 lands
npm run dev
```

## Project structure

```
src/
  app/
    actions/contact.ts     Server action: validates + inserts contact_messages
    layout.tsx              Fonts (Fraunces/Inter/IBM Plex Mono), metadata
    page.tsx                Homepage section assembly
    sitemap.ts / robots.ts  SEO
  components/
    layout/                 Navbar, Footer
    sections/                One component per homepage section
    motion/reveal.tsx       Shared scroll-reveal wrapper
    ui/                      shadcn primitives
  lib/
    content/site-content.ts Seed content (CMS-shaped)
    types.ts                 Shared content types
    supabase/                Browser + server clients (Phase 2)
    site-config.ts           Name, nav, contact constants
  proxy.ts                   Next 16 middleware — protects /admin, refreshes auth session
supabase/
  schema.sql                 Full CMS schema + RLS policies (run in Supabase SQL editor)
```

## Design tokens

- **Palette**: warm ivory background, deep emerald primary (`#17423B`), brass accent (`#B08D57`) — hospitality heritage meets digital growth.
- **Type**: Fraunces (display), Inter (body), IBM Plex Mono (data/labels).
- **Signature shape**: `.keycard` utility — a rounded rectangle with one clipped corner, echoing a hotel key card, used for every card component.

## Roadmap

| Phase | Scope |
|---|---|
| 1 ✅ | Static homepage, design system, SEO, working contact form → Supabase `contact_messages` |
| 2 | Supabase auth, protected `/admin` shell, CRUD for Hero/About/Experience/Education/Certifications |
| 3 | Portfolio + Blog CMS (drafts, scheduling, SEO fields), Media Library (Supabase Storage) |
| 4 | Testimonials CMS, Resend email notifications, Lighthouse pass, dark mode, launch |

Run `supabase/schema.sql` in your Supabase project whenever you're ready to
start Phase 2 — it's written now so the schema won't need to change later.

## Commands

```bash
npm run dev     # local dev server
npm run build   # production build (type-checked, verified passing)
npm run lint    # eslint, zero warnings
```

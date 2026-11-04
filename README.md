# Satellite Outage Help

Independent informational website (Next.js 16, TypeScript, Tailwind CSS 4, Lucide, Framer Motion). Not affiliated with any satellite TV provider.

## Develop

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

## Structure

- `src/config/` — `site.ts` (business details from env), `navigation.ts`, `providers.ts` (external links)
- `src/content/` — FAQ and equipment copy
- `src/components/` — header, footer, accordion, cards, illustrations, contact form, consent-gated analytics
- `src/app/` — pages, `api/contact`, sitemap, robots, error pages, OG image
- Design tokens live in `src/app/globals.css` (`@theme`).

## Configuration (`.env.local`)

See `.env.example`. Legal entity, address and contact email are left blank until supplied; legal pages and footer
show clearly marked "to be supplied" notices. The contact form is hidden until `RESEND_API_KEY`, `CONTACT_TO_EMAIL`
and `CONTACT_FROM_EMAIL` are set. GA4 loads only if `NEXT_PUBLIC_GA_ID` is set **and** the visitor accepts the banner.

## Link verification

Re-check every URL in `src/config/providers.ts` in a normal browser before each release. directv.com blocks
automated checkers (HTTP 403), so it must be confirmed manually.

## Deploy

Any Node host (Vercel recommended): set the env vars, run `npm run build`, serve with `npm start`, and serve over HTTPS
(HSTS and CSP headers are set in `next.config.ts`). The contact route rate-limiter is in-memory; use a shared store
(e.g. Redis/Upstash) if you run multiple instances.

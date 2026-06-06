# arbor-landing

Marketing landing page for **Arbor** — PE deal-lifecycle intelligence platform.

Dark, self-contained marketing site. Separate design language from the app (which is light-themed).

## Files

| File | Role |
|------|------|
| `landing.html` | The entire page — self-contained (inline CSS + vanilla JS, no build step). Open directly in a browser. |
| `next.config.mjs` | Rewrite `/landing` → `/landing.html` (clean URL when served by the Arbor Next.js app). |
| `middleware.ts` | Matcher excludes `.html` so the static file bypasses auth. |
| `lib/supabase/middleware.ts` | Lists `/landing` as a public path (no auth redirect). |

The last three are integration glue for serving the page inside the main Arbor Next.js app. To run the page standalone, only `landing.html` is needed.

## Stack

- Inter (Google Fonts), Tabler icons (CDN webfont)
- Vanilla JS: hamburger nav, FAQ accordion, IntersectionObserver reveal + stat count-up
- All animations gated behind `@media (prefers-reduced-motion: no-preference)`

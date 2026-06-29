# AVN Holidays — Design Rationale

## Why the concierge re-structure (not a portal)

AVN Holidays cannot out-feature MakeMyTrip or Booking.com on search volume, filters, or instant checkout. Their competitive edge is human expertise and **insider agent rates** passed directly to the customer. The site is therefore structured as a **concierge narrative** — discover by experience, understand the Super Saver Club promise, meet the people, then enquire — rather than a destination grid with a search bar. Every page leads toward a conversation, not a transaction.

## Why muted pine, sand, and brass

Bright tropical palettes signal mass-market OTAs and magazine templates. AVN needed to feel **boutique, calm, and premium-but-warm** — closer to a refined travel journal than a holiday brochure. **Pine (#2B4A3F)** evokes forests, journeys, and quiet confidence. **Sand/ivory (#F4EFE6)** provides a warm editorial canvas with generous breathing room. **Brass (#B8956B)** appears as hairline accents — insider value without garish gold. **Charcoal ink (#1C1C1A)** grounds typography. The palette is intentionally desaturated so photography carries emotional weight.

## Why Cormorant Garamond

Display type is **Cormorant Garamond** — a high-contrast serif with refined stroke variation that reads as travel-journal luxury without feeling stuffy. Body and UI use **DM Sans**, a clean grotesque with excellent legibility at small sizes and tabular figures for phone numbers and durations. **Caveat** appears once on the About page as a handwritten signature — a human touch, used sparingly.

## Why experience-led discovery beats city grids

AVN's guests don't typically think "I want Hassan" — they think "I want tea country" or "a backwater honeymoon." Six **experience collections** (Backwaters & Beaches, Hills & Tea Country, Wildlife, Mountains, Islands, Heritage) map to real destinations while matching how people dream about travel. City names appear within collections, not as a overwhelming grid of 24 thumbnails.

## Image approach

All imagery is centralized in `src/data/images.ts` for single-point swapping. Destination photos are sourced from royalty-free libraries (primarily Pexels) and stored locally in `/public/images` for build reliability. **Named hotels use clearly labelled representative placeholders** — never random stock passed off as a specific property. Fewer, larger, cinematic crops reinforce the editorial spread aesthetic and reduce CLS via fixed aspect ratios and `next/image`.

## SEO choices

- **TravelAgency / LocalBusiness JSON-LD** on every page via root layout
- Per-page `metadata` with destination keywords (e.g. "Kerala backwater packages", "Coorg holidays from Mysore")
- `sitemap.ts` and `robots.ts` for crawlability
- Generated Open Graph image at `/opengraph-image`
- Semantic HTML, descriptive alt text on every image, breadcrumb JSON-LD on experience detail pages
- Phone numbers as `tel:` links for mobile tap-to-call

## Motion philosophy

Animations are slow and filmic — fade-ins, brass line draw-ins, gentle hover scales on editorial images. All motion respects `prefers-reduced-motion`. No bounce, no parallax overload.

## Anti-template guardrails applied

- No emoji, glassmorphism, or bright gradients
- Asymmetric editorial layouts on home and experience pages
- Horizontal scroll galleries instead of uniform 3-column card grids
- Real testimonials, real team names, real packages
- Super Saver Club given signature prominence — not buried in a features row

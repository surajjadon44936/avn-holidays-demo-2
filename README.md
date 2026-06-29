# AVN Holidays — Boutique Travel Concierge

Editorial-luxe travel concierge website for **AVN Holiday Networks**, Mysore. Built with Next.js 15+ (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

> *Your personal travel concierge. With insider rates.*

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Deploy to Vercel

1. Push this repository to GitHub (production branch: **`main`** or **`master`**)
2. Import the project at [vercel.com](https://vercel.com) → **Add New Project** → select the repo
3. Framework preset: **Next.js** (auto-detected — do not set a custom output directory)
4. **Production Branch:** set to `main` (or `master` if that is your default branch)
5. Root Directory: `.` (repository root)
6. Build Command: `npm run build` (default)
7. Deploy

If you see a Vercel `404: NOT_FOUND` page (not the site’s own 404), the project has no successful production deployment — check **Deployments** in the Vercel dashboard for build errors, and confirm the production branch matches your Git branch.

The enquiry API (`/api/enquiry`) currently logs to server console. Wire to email (Resend, SendGrid) or CRM in production.

## Project structure

```
src/
  app/              # Pages (App Router)
  components/       # UI, layout, home sections, forms
  data/             # Typed content layer (CMS-ready)
  lib/              # SEO helpers, utilities
public/images/      # Curated destination photography
```

## Design tokens

Defined in `src/app/globals.css` via Tailwind v4 `@theme`:

- `--color-pine` — primary brand green
- `--color-sand` — warm ivory background
- `--color-brass` — accent / hairline detail
- `--color-ink` — body text

Fonts: Cormorant Garamond (display), DM Sans (body), Caveat (signature, sparingly).

## Image management

All image references live in `src/data/images.ts`. See **IMAGES.md** for the full manifest, sources, and attribution.

Re-download stock images:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/download-images.ps1
```

---

## PLACEHOLDERS checklist

Items marked placeholder need client-provided content before launch:

### Photography
- [ ] Official hotel/resort photos for all 16 named properties (currently representative placeholders)
- [ ] Team headshots for Mysore HQ and resident reps (Bangalore, Kolkata, Patna)
- [ ] Location-accurate replacements for wildlife/forest fallbacks (Kabini, Thekkady, Wayanad)

### Content
- [ ] Day-wise itinerary details for all 11 journey packages (currently placeholder text)
- [ ] Complete inclusions/exclusions with pricing where applicable
- [ ] Car rental rate cards and fleet specifications
- [ ] Additional guest testimonials
- [ ] WhatsApp business number and click-to-chat link
- [ ] Social media URLs (Facebook, Instagram, etc.)
- [ ] Founder/company story refinements and establishment year confirmation

### Integrations
- [ ] Enquiry form → email notification (Resend/SendGrid) or CRM
- [ ] Google Analytics / conversion tracking
- [ ] Production domain (`siteConfig.url` in `src/data/contact.ts`)

### Legal
- [ ] Privacy policy page (if collecting form data)
- [ ] Terms of service

---

## Documentation

- **DESIGN_RATIONALE.md** — strategic and aesthetic decisions
- **IMAGES.md** — image manifest with sources and licenses

## Contact (AVN)

AVN Holiday Networks · Mysore 570 008  
+91 90196 01010 · info@avnholidays.com

# AVN Holidays — Image Manifest

All images are stored in `/public/images/` and referenced centrally via `src/data/images.ts`.
Swap any image by updating the file and/or the registry entry.

| Key | Place / Usage | File | Source | Photographer | License |
|-----|---------------|------|--------|--------------|---------|
| hero | Kerala backwaters — home hero | hero-kerala-backwaters.jpg | [Pexels 460672](https://www.pexels.com/photo/460672/) | Pexels Contributor | Pexels License |
| kerala-backwaters | Alleppey/Kumarakom backwaters | kerala-backwaters.jpg | [Pexels 460672](https://www.pexels.com/photo/460672/) | Pexels Contributor | Pexels License |
| munnar-tea-hills | Munnar tea plantations | munnar-tea-hills.jpg | [Pexels 1450360](https://www.pexels.com/photo/1450360/) | Pexels Contributor | Pexels License |
| kabini-wildlife | Kabini forest/river | kabini-wildlife.jpg | coorg-coffee-hills.jpg (fallback) | — | Pexels License |
| gangtok-mountains | Sikkim/Himalayan mountains | gangtok-mountains.jpg | [Pexels 417074](https://www.pexels.com/photo/417074/) | Pexels Contributor | Pexels License |
| andaman-beach | Havelock/Andaman beaches | andaman-beach.jpg | [Pexels 457882](https://www.pexels.com/photo/457882/) | Pexels Contributor | Pexels License |
| mysore-palace | Mysore Palace heritage | mysore-palace.jpg | [Pexels 358136](https://www.pexels.com/photo/358136/) | Pexels Contributor | Pexels License |
| coorg-coffee-hills | Coorg coffee estates | coorg-coffee-hills.jpg | [Pexels 1365425](https://www.pexels.com/photo/1365425/) | Pexels Contributor | Pexels License |
| ooty-nilgiris | Ooty/Nilgiri hills | ooty-nilgiris.jpg | [Pexels 1450360](https://www.pexels.com/photo/1450360/) | Pexels Contributor | Pexels License |
| thekkady-periyar | Thekkady/Periyar wildlife | thekkady-periyar.jpg | coorg-coffee-hills.jpg (fallback) | — | Pexels License |
| pelling-kanchenjunga | Pelling/Kanchenjunga | pelling-kanchenjunga.jpg | [Pexels 417074](https://www.pexels.com/photo/417074/) | Pexels Contributor | Pexels License |
| darjeeling-tea-garden | Darjeeling tea slopes | darjeeling-tea-garden.jpg | [Pexels 1450360](https://www.pexels.com/photo/1450360/) | Pexels Contributor | Pexels License |
| pondicherry-french-quarter | Pondicherry colonial | pondicherry-french-quarter.jpg | [Pexels 358136](https://www.pexels.com/photo/358136/) | Pexels Contributor | Pexels License |
| bangalore-skyline | Bangalore city | bangalore-skyline.jpg | [Pexels 358136](https://www.pexels.com/photo/358136/) | Pexels Contributor | Pexels License |
| kovalam-beach | Kovalam/Kerala beaches | kovalam-beach.jpg | [Pexels 457882](https://www.pexels.com/photo/457882/) | Pexels Contributor | Pexels License |
| wayanad-forest | Wayanad Western Ghats | wayanad-forest.jpg | coorg-coffee-hills.jpg (fallback) | — | Pexels License |
| chikmagalur-coffee | Chikmagalur coffee hills | chikmagalur-coffee.jpg | [Pexels 1365425](https://www.pexels.com/photo/1365425/) | Pexels Contributor | Pexels License |
| port-blair-andaman | Port Blair coastal | port-blair-andaman.jpg | [Pexels 457882](https://www.pexels.com/photo/457882/) | Pexels Contributor | Pexels License |
| concierge-team | Travel planning / people | concierge-planning.jpg | [Pexels 736831](https://www.pexels.com/photo/736831/) | Vlada Karpovich | Pexels License |
| super-saver | Concierge office | mysore-team-concierge.jpg | [Pexels 736831](https://www.pexels.com/photo/736831/) | Vlada Karpovich | Pexels License |
| car-rental | Getting around | car-rental-india.jpg | [Pexels 3802510](https://www.pexels.com/photo/3802510/) | Pexels Contributor | Pexels License |

## Hotel / resort placeholders (representative — NOT official property photos)

| Key | Category | File | Notes |
|-----|----------|------|-------|
| stay-hill-resort | Hill/tea country resorts | stay-hill-resort-placeholder.jpg | Replace with official photos from The Tall Trees, Java Rain, etc. |
| stay-beach-resort | Beach/backwater resorts | stay-beach-resort-placeholder.jpg | Replace with Xandari Pearl, Uday Samudra, Isola Di Cocco official photos |
| stay-heritage-hotel | City/heritage hotels | stay-heritage-hotel-placeholder.jpg | Replace with Radisson Blu, Windflower, Hoysala Village official photos |
| stay-wildlife-lodge | Wildlife lodges | stay-wildlife-lodge-placeholder.jpg | Replace with Elephant Court, Wild Corridor official photos |
| stay-backwater-resort | Backwater resorts | stay-backwater-resort-placeholder.jpg | Replace with Manor Backwater, Backwater Ripples official photos |

## Re-downloading images

```powershell
powershell -ExecutionPolicy Bypass -File scripts/download-images.ps1
```

Some forest/wildlife images use local fallbacks where remote URLs were unreachable. Replace with location-accurate photography when available.

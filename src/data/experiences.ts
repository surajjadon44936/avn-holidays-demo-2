import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    slug: "backwaters-beaches",
    title: "Backwaters & Beaches",
    tagline: "Houseboats, lagoons, and quiet shores",
    description:
      "Drift through Kerala's palm-lined canals on a private houseboat, wake to bird calls on a lagoon, and unwind on beaches where the Arabian Sea meets golden sand. From Alleppey to Poovar, we know the properties and the insider rates.",
    destinations: ["Alleppey", "Kumarakom", "Kovalam", "Poovar", "Mararikulam", "Bekal"],
    imageKey: "experience-backwaters",
    galleryKeys: ["kerala-backwaters", "kovalam-beach", "stay-backwater-resort-placeholder"],
    seoKeywords: [
      "Kerala backwater packages",
      "Alleppey houseboat booking",
      "Kovalam beach holidays",
      "Kumarakom resort packages",
    ],
  },
  {
    slug: "hills-tea-country",
    title: "Hills & Tea Country",
    tagline: "Mist, plantations, and cool mountain air",
    description:
      "The Western Ghats unfold in layers of green — tea terraces in Munnar, colonial charm in Ooty, coffee estates in Coorg and Chikmagalur, and the wild beauty of Wayanad. We craft hill escapes with the stays locals trust.",
    destinations: ["Munnar", "Ooty", "Kodaikanal", "Coorg", "Chikmagalur", "Wayanad"],
    imageKey: "experience-hills",
    galleryKeys: ["munnar-tea-hills", "coorg-coffee-hills", "ooty-nilgiris", "chikmagalur-coffee", "wayanad-forest"],
    seoKeywords: [
      "Munnar holiday packages",
      "Coorg holidays from Mysore",
      "Ooty tour packages",
      "Chikmagalur resort booking",
    ],
  },
  {
    slug: "wildlife-nature",
    title: "Wildlife & Nature",
    tagline: "Forests, rivers, and quiet encounters",
    description:
      "Kabini's riverbanks, Periyar's lake in Thekkady, Bandipur's teak forests — India's south offers wildlife without the crowds. Our concierge pairs the right lodge with the right season.",
    destinations: ["Kabini", "Thekkady", "Bandipur"],
    imageKey: "experience-wildlife",
    galleryKeys: ["kabini-wildlife", "thekkady-periyar", "stay-wildlife-lodge-placeholder"],
    seoKeywords: [
      "Kabini wildlife packages",
      "Thekkady Periyar tours",
      "Bandipur safari holidays",
    ],
  },
  {
    slug: "mountains-monasteries",
    title: "Mountains & Monasteries",
    tagline: "Himalayan heights and Buddhist calm",
    description:
      "From Gangtok's monasteries to Lachen and Lachung's high valleys, Pelling's Kanchenjunga views, and Darjeeling's tea slopes — Northeast and Himalayan journeys need local expertise. We have it.",
    destinations: ["Gangtok", "Lachen", "Lachung", "Pelling", "Darjeeling"],
    imageKey: "experience-mountains",
    galleryKeys: ["gangtok-mountains", "pelling-kanchenjunga", "darjeeling-tea-garden"],
    seoKeywords: [
      "Sikkim tour packages",
      "Gangtok Lachen Lachung packages",
      "Darjeeling holiday packages",
      "Pelling Kanchenjunga tours",
    ],
  },
  {
    slug: "islands",
    title: "Islands",
    tagline: "Andaman — turquoise, untouched, unforgettable",
    description:
      "Port Blair's history, Havelock's reefs, Neil Island's solitude. The Andamans reward travellers who plan well. We arrange ferries, stays, and insider rates across the archipelago.",
    destinations: ["Port Blair", "Havelock", "Neil Island"],
    imageKey: "experience-islands",
    galleryKeys: ["andaman-beach", "port-blair-andaman"],
    seoKeywords: [
      "Andaman tour packages",
      "Havelock Island holidays",
      "Port Blair travel packages",
    ],
  },
  {
    slug: "heritage-cities",
    title: "Heritage & Cities",
    tagline: "Palaces, boulevards, and living history",
    description:
      "Mysore's royal grandeur, Bangalore's cosmopolitan energy, Pondicherry's French lanes, and sacred Haridwar on the Ganges. City breaks and cultural journeys, planned by people who live here.",
    destinations: ["Mysore", "Bangalore", "Pondicherry", "Haridwar"],
    imageKey: "experience-heritage",
    galleryKeys: ["mysore-palace", "bangalore-skyline", "pondicherry-french-quarter"],
    seoKeywords: [
      "Mysore holiday packages",
      "Bangalore tour packages",
      "Pondicherry weekend getaways",
    ],
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

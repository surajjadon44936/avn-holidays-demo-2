import type { Destination } from "./types";

export const destinations: Destination[] = [
  { slug: "bangalore", name: "Bangalore", region: "Karnataka", description: "India's garden city — a cosmopolitan gateway to the south.", imageKey: "bangalore-city", experienceSlug: "heritage-cities" },
  { slug: "mysore", name: "Mysore", region: "Karnataka", description: "Royal palaces, silk markets, and the soul of Karnataka.", imageKey: "mysore-palace", experienceSlug: "heritage-cities" },
  { slug: "coorg", name: "Coorg", region: "Karnataka", description: "Coffee country wrapped in mist and forest.", imageKey: "coorg-coffee-hills", experienceSlug: "hills-tea-country" },
  { slug: "ooty", name: "Ooty", region: "Tamil Nadu", description: "Nilgiri hills, toy trains, and colonial hill-station charm.", imageKey: "ooty-nilgiris", experienceSlug: "hills-tea-country" },
  { slug: "kodaikanal", name: "Kodaikanal", region: "Tamil Nadu", description: "Lake, pine forests, and cool highland air.", imageKey: "ooty-nilgiris", experienceSlug: "hills-tea-country" },
  { slug: "hassan", name: "Hassan", region: "Karnataka", description: "Gateway to Hoysala heritage and nearby hill retreats.", imageKey: "coorg-coffee-hills", experienceSlug: "hills-tea-country" },
  { slug: "chikmagalur", name: "Chikmagalur", region: "Karnataka", description: "Birthplace of Indian coffee, draped in Western Ghats greenery.", imageKey: "chikmagalur-coffee", experienceSlug: "hills-tea-country" },
  { slug: "munnar", name: "Munnar", region: "Kerala", description: "Tea terraces, mist, and mountain trails.", imageKey: "munnar-tea-hills", experienceSlug: "hills-tea-country" },
  { slug: "mararikulam", name: "Mararikulam", region: "Kerala", description: "Quiet fishing village beaches on the Malabar coast.", imageKey: "kovalam-beach", experienceSlug: "backwaters-beaches" },
  { slug: "kovalam", name: "Kovalam", region: "Kerala", description: "Crescent beaches and Ayurvedic retreats near Thiruvananthapuram.", imageKey: "kovalam-beach", experienceSlug: "backwaters-beaches" },
  { slug: "thekkady", name: "Thekkady", region: "Kerala", description: "Periyar Wildlife Sanctuary and spice-scented forests.", imageKey: "thekkady-periyar", experienceSlug: "wildlife-nature" },
  { slug: "kumarakom", name: "Kumarakom", region: "Kerala", description: "Backwater bird sanctuary and languid canal life.", imageKey: "kerala-backwaters", experienceSlug: "backwaters-beaches" },
  { slug: "wayanad", name: "Wayanad", region: "Kerala", description: "Rainforests, waterfalls, and tribal heritage in the Western Ghats.", imageKey: "wayanad-forest", experienceSlug: "hills-tea-country" },
  { slug: "poovar", name: "Poovar", region: "Kerala", description: "Where backwaters meet the sea at India's southern tip.", imageKey: "kovalam-beach", experienceSlug: "backwaters-beaches" },
  { slug: "bekal", name: "Bekal", region: "Kerala", description: "Fort ruins and unspoiled northern Kerala coastline.", imageKey: "kovalam-beach", experienceSlug: "backwaters-beaches" },
  { slug: "pondicherry", name: "Pondicherry", region: "Tamil Nadu", description: "French colonial lanes, ashrams, and seaside promenades.", imageKey: "pondicherry-french-quarter", experienceSlug: "heritage-cities" },
  { slug: "haridwar", name: "Haridwar", region: "Uttarakhand", description: "Sacred Ganges ghats and gateway to the Himalayas.", imageKey: "gangtok-mountains", experienceSlug: "heritage-cities" },
  { slug: "darjeeling", name: "Darjeeling", region: "West Bengal", description: "Tea gardens, toy trains, and views of Kanchenjunga.", imageKey: "darjeeling-tea-garden", experienceSlug: "mountains-monasteries" },
  { slug: "gangtok", name: "Gangtok", region: "Sikkim", description: "Monasteries, mountain vistas, and Sikkimese culture.", imageKey: "gangtok-mountains", experienceSlug: "mountains-monasteries" },
  { slug: "pelling", name: "Pelling", region: "Sikkim", description: "Kanchenjunga panoramas and ancient monasteries.", imageKey: "pelling-kanchenjunga", experienceSlug: "mountains-monasteries" },
  { slug: "port-blair", name: "Port Blair", region: "Andaman", description: "Capital of the Andamans — history, harbour, and island gateway.", imageKey: "port-blair-andaman", experienceSlug: "islands" },
  { slug: "havelock", name: "Havelock", region: "Andaman", description: "Pristine beaches and world-class snorkelling.", imageKey: "andaman-beach", experienceSlug: "islands" },
  { slug: "neil-island", name: "Neil Island", region: "Andaman", description: "Quiet beaches and unhurried island life.", imageKey: "andaman-beach", experienceSlug: "islands" },
  { slug: "kabini", name: "Kabini", region: "Karnataka", description: "Riverine forests and some of India's best wildlife viewing.", imageKey: "kabini-wildlife", experienceSlug: "wildlife-nature" },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

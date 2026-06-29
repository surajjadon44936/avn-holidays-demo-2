import type { CarRental, ContactInfo, TeamMember } from "./types";

export const carRentals: CarRental[] = [
  {
    id: "sedan",
    vehicle: "Sedan (4+1)",
    category: "City & highway",
    description: "Comfortable sedan for couples and small families — ideal for city transfers and inter-city drives across South India.",
    note: "Rates vary by season and route. Enquire for current pricing.",
  },
  {
    id: "suv",
    vehicle: "SUV / Innova (6+1)",
    category: "Family & hills",
    description: "Spacious SUV or Toyota Innova for families and hill-station routes — Coorg, Ooty, Munnar, and beyond.",
    note: "Hill-station permits and driver allowance included on request.",
  },
  {
    id: "tempo",
    vehicle: "Tempo Traveller (12+1)",
    category: "Groups",
    description: "For larger families and group tours — comfortable multi-day travel with experienced drivers who know the routes.",
    note: "Group rates available. Contact us with your itinerary.",
  },
  {
    id: "luxury",
    vehicle: "Premium / Luxury",
    category: "Special occasions",
    description: "Premium vehicles for honeymoons, corporate travel, and special occasions. Chauffeur-driven with discretion.",
    note: "Availability and pricing on enquiry.",
  },
];

export const team: TeamMember[] = [
  { name: "AVN Mysore Team", role: "Head Office & Concierge", location: "Mysore" },
  { name: "Priyadarshini", role: "Resident Representative", location: "Bangalore", phone: "+91 96631 44722" },
  { name: "Aparajita", role: "Resident Representative", location: "Kolkata", phone: "+91 97484 49305" },
  { name: "Anupama", role: "Resident Representative", location: "Patna", phone: "+91 99348 44214" },
];

export const contact: ContactInfo = {
  company: "AVN Holiday Networks",
  address: "D-418, Brigade Sparkle, Industrial Layout, Vishweshwaranagar, Mysore 570 008",
  officePhone: "+91 821 4242463",
  cellPhones: ["+91 90196 01010", "+91 93416 63133"],
  emails: ["info@avnholidays.com", "aks2612@gmail.com"],
  reps: [
    { city: "Bangalore", name: "Priyadarshini", phone: "+91 96631 44722" },
    { city: "Kolkata", name: "Aparajita", phone: "+91 97484 49305" },
    { city: "Patna", name: "Anupama", phone: "+91 99348 44214" },
  ],
};

export const siteConfig = {
  name: "AVN Holidays",
  legalName: "AVN Holiday Networks",
  tagline: "Better Rates, Better Services, Better Memories.",
  promise: "Your personal travel concierge. With insider rates.",
  primaryPhone: "+91 90196 01010",
  primaryPhoneDisplay: "+91 90196 01010",
  url: "https://avnholidays.com",
};

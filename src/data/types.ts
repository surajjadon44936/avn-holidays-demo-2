export interface ImageRef {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
  license?: string;
  sourceUrl?: string;
  placeholder?: boolean;
}

export interface Experience {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  destinations: string[];
  imageKey: string;
  galleryKeys: string[];
  seoKeywords: string[];
}

export interface Destination {
  slug: string;
  name: string;
  region: string;
  description: string;
  imageKey: string;
  experienceSlug: string;
}

export interface Stay {
  slug: string;
  name: string;
  location: string;
  destinationSlug: string;
  description: string;
  highlights: string[];
  imageKey: string;
  galleryKeys: string[];
}

export interface JourneyDay {
  day: number;
  title: string;
  description: string;
}

export interface Journey {
  slug: string;
  title: string;
  duration: string;
  route: string;
  description: string;
  destinations: string[];
  experienceSlugs: string[];
  imageKey: string;
  days: JourneyDay[];
  inclusions: string[];
  exclusions: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  trip?: string;
}

export interface CarRental {
  id: string;
  vehicle: string;
  category: string;
  description: string;
  note?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  location?: string;
  phone?: string;
}

export interface ContactInfo {
  company: string;
  address: string;
  officePhone: string;
  cellPhones: string[];
  emails: string[];
  reps: { city: string; name: string; phone: string }[];
}

export interface EnquiryPayload {
  name: string;
  phone: string;
  email: string;
  destination?: string;
  dates?: string;
  partySize?: string;
  budget?: string;
  message?: string;
  source?: string;
}

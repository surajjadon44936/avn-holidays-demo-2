import { contact, siteConfig } from "@/data/contact";

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.promise,
    url: siteConfig.url,
    telephone: siteConfig.primaryPhone,
    email: contact.emails[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address,
      addressLocality: "Mysore",
      postalCode: "570008",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: ["India", "Kerala", "Karnataka", "Tamil Nadu", "Sikkim", "Andaman and Nicobar Islands"],
    priceRange: "$$",
    slogan: siteConfig.tagline,
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

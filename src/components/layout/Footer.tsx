import Link from "next/link";
import { contact, siteConfig } from "@/data/contact";

export function Footer() {
  return (
    <footer className="border-t border-sand-dark bg-pine-dark text-sand">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl text-sand">AVN Holidays</p>
            <p className="mt-3 max-w-md text-sm text-sand/70 leading-relaxed">
              {siteConfig.tagline} Your personal travel concierge in Mysore —
              insider rates, real human service, across India.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-light mb-4">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-sand/80">
              <li><Link href="/experiences" className="hover:text-sand transition-colors">Experiences</Link></li>
              <li><Link href="/journeys" className="hover:text-sand transition-colors">Journeys</Link></li>
              <li><Link href="/stays" className="hover:text-sand transition-colors">Stays</Link></li>
              <li><Link href="/getting-around" className="hover:text-sand transition-colors">Getting Around</Link></li>
              <li><Link href="/about" className="hover:text-sand transition-colors">About</Link></li>
              <li><Link href="/reviews" className="hover:text-sand transition-colors">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-light mb-4">
              Contact
            </p>
            <address className="not-italic text-sm text-sand/80 space-y-2">
              <p>{contact.company}</p>
              <p>{contact.address}</p>
              <p>
                <a href={`tel:${contact.officePhone.replace(/\s/g, "")}`} className="hover:text-sand tabular-nums">
                  Office {contact.officePhone}
                </a>
              </p>
              {contact.cellPhones.map((phone) => (
                <p key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-sand tabular-nums">
                    {phone}
                  </a>
                </p>
              ))}
              {contact.emails.map((email) => (
                <p key={email}>
                  <a href={`mailto:${email}`} className="hover:text-sand">
                    {email}
                  </a>
                </p>
              ))}
            </address>
          </div>
        </div>

        <div className="hairline mt-12 bg-brass/30" />

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-sand/50">
          <p>&copy; AVN Holidays {new Date().getFullYear()}. All rights reserved.</p>
          <p>
            Resident reps: Bangalore, Kolkata, Patna
          </p>
        </div>
      </div>
    </footer>
  );
}

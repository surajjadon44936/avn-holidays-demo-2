import type { Metadata } from "next";
import { contact, siteConfig } from "@/data/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { ConciergeForm } from "@/components/forms/ConciergeForm";
import { PhoneButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact & Plan My Trip",
  description:
    "Contact AVN Holidays Mysore — plan your trip with a personal concierge. Call +91 90196 01010 or send an enquiry.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Plan My Trip"
            description="Share your dream itinerary. Our Mysore concierge team responds within one business day — usually sooner."
          />
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <ConciergeForm source="contact-page" />
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="space-y-10">
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-brass mb-4">Mysore office</h2>
                <address className="not-italic text-ink-muted space-y-2">
                  <p className="font-medium text-ink">{contact.company}</p>
                  <p>{contact.address}</p>
                  <p>
                    Office{" "}
                    <a
                      href={`tel:${contact.officePhone.replace(/\s/g, "")}`}
                      className="text-pine tabular-nums hover:text-pine-dark"
                    >
                      {contact.officePhone}
                    </a>
                  </p>
                  {contact.cellPhones.map((phone) => (
                    <p key={phone}>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="text-pine tabular-nums hover:text-pine-dark"
                      >
                        {phone}
                      </a>
                    </p>
                  ))}
                  {contact.emails.map((email) => (
                    <p key={email}>
                      <a href={`mailto:${email}`} className="text-pine hover:text-pine-dark">
                        {email}
                      </a>
                    </p>
                  ))}
                </address>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-brass mb-4">
                  Resident representatives
                </h2>
                <ul className="space-y-4">
                  {contact.reps.map((rep) => (
                    <li key={rep.city} className="text-ink-muted">
                      <span className="font-medium text-ink">{rep.city}</span>
                      {" — "}
                      {rep.name}
                      <br />
                      <a
                        href={`tel:${rep.phone.replace(/\s/g, "")}`}
                        className="text-pine tabular-nums hover:text-pine-dark"
                      >
                        {rep.phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <PhoneButton
                phone={siteConfig.primaryPhone}
                display={`Call ${siteConfig.primaryPhoneDisplay}`}
                variant="primary"
                size="lg"
                className="w-full"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { contact, team, siteConfig } from "@/data/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "AVN Holiday Networks — Mysore-based travel concierge since 1998. Super Saver Club insider rates, personal service, across India.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <FadeIn>
          <SectionHeading
            eyebrow="About AVN"
            title="A Mysore travel house built on trust"
            description="For over two decades, AVN Holiday Networks has been crafting holidays for families, honeymooners, and explorers — not as a faceless portal, but as neighbours who happen to know every backroad in Kerala."
          />
        </FadeIn>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16 md:px-12">
        <FadeIn>
          <div className="editorial-prose space-y-6">
            <p>
              Based in Mysore, we began as a small reservation desk with a simple belief: travellers deserve
              the same insider rates that agents get — paired with genuine human care. That belief became the
              Super Saver Club.
            </p>
            <p>
              Today we arrange hotel and resort bookings, curated tour packages, and private transport across
              South India, Sikkim, the Northeast, and the Andamans. Our strength isn&apos;t competing with
              MakeMyTrip on search volume — it&apos;s knowing which Munnar resort has the best valley view,
              which Kumarakom houseboat operator is reliable, and which Gangtok hotel actually delivers on its
              photos.
            </p>
            <p className="font-signature text-2xl text-pine">
              — The AVN Team, Mysore
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="bg-sand-dark/30 py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <SectionHeading
                eyebrow="Super Saver Club"
                title={siteConfig.tagline}
                description="We're registered travel agents with negotiated access to hotel and resort tariffs. We don't inflate and we don't hide — the agent rate is your rate. That's the entire proposition."
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <EditorialImage
                imageKey="super-saver"
                className="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <FadeIn>
            <SectionHeading eyebrow="Our people" title="Mysore HQ & resident reps" />
          </FadeIn>
          <ul className="mt-12 grid gap-8 md:grid-cols-2">
            {team.map((member) => (
              <li key={member.name} className="border-t border-brass/40 pt-6">
                <p className="font-display text-2xl text-ink">{member.name}</p>
                <p className="text-sm text-ink-muted">
                  {member.role}
                  {member.location && ` · ${member.location}`}
                </p>
                {member.phone && (
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="mt-2 inline-block text-pine tabular-nums hover:text-pine-dark"
                  >
                    {member.phone}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <address className="mt-12 not-italic text-ink-muted">
            <p className="font-medium text-ink">{contact.company}</p>
            <p className="mt-2">{contact.address}</p>
            <p className="mt-2">
              <a href={`tel:${contact.officePhone.replace(/\s/g, "")}`} className="text-pine tabular-nums">
                {contact.officePhone}
              </a>
            </p>
          </address>
        </div>
      </section>

      <section className="bg-pine py-16 text-center">
        <Button href="/contact">Start planning with us</Button>
      </section>
    </div>
  );
}

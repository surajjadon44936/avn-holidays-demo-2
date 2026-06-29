import type { Metadata } from "next";
import { carRentals } from "@/data/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Getting Around",
  description:
    "Private car rentals across South India — sedans, SUVs, and tempo travellers with experienced drivers. A concierge add-on from AVN Holidays.",
};

export default function GettingAroundPage() {
  return (
    <div className="pt-24">
      <section className="relative min-h-[40vh]">
        <EditorialImage
          imageKey="car-rental"
          className="absolute inset-0 min-h-[40vh]"
          sizes="100vw"
          overlay
          priority
        />
        <div className="relative z-10 flex min-h-[40vh] items-end px-6 pb-12 md:px-12 lg:px-20">
          <h1 className="font-display text-5xl md:text-6xl text-sand">Getting Around</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-12">
        <FadeIn>
          <SectionHeading
            eyebrow="Concierge add-on"
            title="Travel in comfort, with drivers who know the roads"
            description="Car rental arranged as part of your trip — not a standalone booking desk. Tell us your route; we'll match the right vehicle and an experienced driver."
          />
        </FadeIn>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 md:px-12">
        <div className="space-y-8">
          {carRentals.map((rental, i) => (
            <FadeIn key={rental.id} delay={i * 0.08}>
              <article className="border-l-2 border-brass/50 pl-6 py-2">
                <p className="text-xs uppercase tracking-wider text-brass">{rental.category}</p>
                <h2 className="mt-1 font-display text-2xl text-ink">{rental.vehicle}</h2>
                <p className="mt-3 editorial-prose">{rental.description}</p>
                {rental.note && (
                  <p className="mt-3 text-sm text-ink-faint italic">{rental.note}</p>
                )}
              </article>
            </FadeIn>
          ))}
        </div>

        <p className="mt-12 text-sm text-ink-faint italic">
          Complete rate cards and fleet details — placeholder. Contact our concierge for current pricing and availability.
        </p>

        <Button href="/contact" className="mt-10">
          Enquire about transport
        </Button>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { journeys } from "@/data/journeys";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Journeys & Packages",
  description:
    "Curated tour packages — Kerala, Karnataka, Sikkim, Andaman. Real itineraries with insider rates from AVN Holidays Mysore.",
};

export default function JourneysPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Journeys"
            title="Signature packages, endlessly customisable"
            description="Starting points for your trip — every journey is tailored to your dates, pace, and preferences when you enquire."
          />
        </FadeIn>

        <div className="mt-16 divide-y divide-sand-dark">
          {journeys.map((journey, i) => (
            <FadeIn key={journey.slug} delay={i * 0.05}>
              <Link
                href={`/journeys/${journey.slug}`}
                className="group grid gap-4 py-10 md:grid-cols-[1fr_auto] md:items-center"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brass tabular-nums">
                    {journey.duration}
                  </p>
                  <h2 className="mt-2 font-display text-3xl md:text-4xl text-ink group-hover:text-pine transition-colors">
                    {journey.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-faint">{journey.route}</p>
                  <p className="mt-3 editorial-prose max-w-2xl">{journey.description}</p>
                </div>
                <span className="text-sm uppercase tracking-wider text-pine group-hover:text-pine-dark">
                  View →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

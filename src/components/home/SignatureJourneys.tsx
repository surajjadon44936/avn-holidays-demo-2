import Link from "next/link";
import { journeys } from "@/data/journeys";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { EditorialImage } from "@/components/ui/EditorialImage";

export function SignatureJourneys() {
  const featured = journeys.slice(0, 4);

  return (
    <section className="py-24 md:py-32" aria-labelledby="journeys-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Signature journeys"
            title="Crafted itineraries, not cookie-cutter tours"
            description="Real routes our concierge has refined over years — each one customisable to your pace, dates, and budget."
          />
        </FadeIn>

        <div className="mt-16 space-y-20">
          {featured.map((journey, i) => (
            <FadeIn key={journey.slug} delay={i * 0.1}>
              <Link
                href={`/journeys/${journey.slug}`}
                className={`group grid items-center gap-8 md:gap-12 ${
                  i % 2 === 1 ? "md:grid-cols-[1fr_1.2fr]" : "md:grid-cols-[1.2fr_1fr]"
                }`}
              >
                <EditorialImage
                  imageKey={journey.imageKey}
                  className={`aspect-[16/10] ${i % 2 === 1 ? "md:order-2" : ""}`}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  overlay
                />
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <p className="text-xs uppercase tracking-[0.2em] text-brass tabular-nums">
                    {journey.duration}
                  </p>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl text-ink group-hover:text-pine transition-colors">
                    {journey.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-faint">{journey.route}</p>
                  <p className="mt-4 editorial-prose">{journey.description}</p>
                  <span className="mt-6 inline-block text-sm uppercase tracking-wider text-pine group-hover:text-pine-dark">
                    View itinerary →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/journeys"
            className="text-sm uppercase tracking-wider text-pine hover:text-pine-dark"
          >
            All journeys & packages
          </Link>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { journeys, getJourney } from "@/data/journeys";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Button, PhoneButton } from "@/components/ui/Button";
import { siteConfig } from "@/data/contact";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journeys.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) return {};
  return {
    title: journey.title,
    description: `${journey.duration}: ${journey.route}. ${journey.description}`,
  };
}

export default async function JourneyDetailPage({ params }: Props) {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) notFound();

  return (
    <div className="pt-24">
      <section className="relative min-h-[50vh]">
        <EditorialImage
          imageKey={journey.imageKey}
          className="absolute inset-0 min-h-[50vh]"
          sizes="100vw"
          overlay
          priority
        />
        <div className="relative z-10 flex min-h-[50vh] items-end px-6 pb-16 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-brass-light tabular-nums">
              {journey.duration}
            </p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl text-sand">
              {journey.title}
            </h1>
            <p className="mt-4 text-lg text-sand/85">{journey.route}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-12">
        <FadeIn>
          <p className="editorial-prose text-lg">{journey.description}</p>
        </FadeIn>
      </section>

      <section className="bg-sand-dark/30 py-16">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading eyebrow="Itinerary" title="Day by day" />
            <ol className="mt-10 space-y-8">
              {journey.days.map((day) => (
                <li key={day.day} className="border-l-2 border-brass/40 pl-6">
                  <p className="text-xs uppercase tracking-wider text-brass tabular-nums">
                    Day {day.day}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-ink">{day.title}</h3>
                  <p className="mt-2 text-ink-muted">{day.description}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-ink-faint italic">
              Detailed day-wise itinerary provided on enquiry — customised to your preferences.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-2">
            <FadeIn>
              <h2 className="font-display text-2xl text-ink">Inclusions</h2>
              <ul className="mt-4 space-y-2 text-ink-muted">
                {journey.inclusions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brass">+</span> {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-2xl text-ink">Exclusions</h2>
              <ul className="mt-4 space-y-2 text-ink-muted">
                {journey.exclusions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-ink-faint">—</span> {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-pine py-16">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="font-display text-3xl text-sand">Plan this trip</h2>
          <p className="mt-4 text-sand/80">
            Enquire for customised dates, insider rates, and a detailed itinerary.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={`/contact?journey=${slug}`}>Enquire now</Button>
            <PhoneButton phone={siteConfig.primaryPhone} display="Call us" />
          </div>
        </div>
      </section>
    </div>
  );
}

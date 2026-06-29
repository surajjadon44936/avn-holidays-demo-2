import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { experiences, getExperience } from "@/data/experiences";
import { getJourneysByExperience } from "@/data/journeys";
import { stays } from "@/data/stays";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";
import { Button } from "@/components/ui/Button";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/data/contact";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) return {};
  return {
    title: exp.title,
    description: exp.description,
    keywords: exp.seoKeywords,
  };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) notFound();

  const relatedJourneys = getJourneysByExperience(slug);
  const relatedStays = stays.filter((s) =>
    exp.destinations.some((d) =>
      s.location.toLowerCase().includes(d.toLowerCase())
    )
  ).slice(0, 4);

  const breadcrumb = getBreadcrumbJsonLd([
    { name: "Home", url: siteConfig.url },
    { name: "Experiences", url: `${siteConfig.url}/experiences` },
    { name: exp.title, url: `${siteConfig.url}/experiences/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="pt-24">
        <section className="relative min-h-[60vh]">
          <EditorialImage
            imageKey={exp.imageKey}
            className="absolute inset-0 min-h-[60vh]"
            sizes="100vw"
            overlay
            priority
          />
          <div className="relative z-10 flex min-h-[60vh] items-end px-6 pb-16 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-brass-light">
                Experience
              </p>
              <h1 className="mt-3 font-display text-5xl md:text-7xl text-sand">
                {exp.title}
              </h1>
              <p className="mt-4 text-xl text-sand/85 italic">{exp.tagline}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16 md:px-12">
          <FadeIn>
            <p className="editorial-prose text-lg">{exp.description}</p>
            <p className="mt-6 text-sm text-ink-faint">
              Destinations: {exp.destinations.join(", ")}
            </p>
          </FadeIn>
        </section>

        {exp.galleryKeys.length > 0 && (
          <section className="pb-16" aria-label="Gallery">
            <HorizontalScroll label={`${exp.title} photo gallery`} className="px-6 md:px-12 lg:px-20">
              {exp.galleryKeys.map((key) => (
                <EditorialImage
                  key={key}
                  imageKey={key}
                  className="snap-start shrink-0 w-[80vw] md:w-[500px] aspect-[16/10]"
                  sizes="(max-width: 768px) 80vw, 500px"
                />
              ))}
            </HorizontalScroll>
          </section>
        )}

        {relatedJourneys.length > 0 && (
          <section className="bg-sand-dark/30 py-16">
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
              <FadeIn>
                <SectionHeading
                  eyebrow="Journeys"
                  title="Packages in this experience"
                />
              </FadeIn>
              <ul className="mt-10 space-y-4">
                {relatedJourneys.map((j) => (
                  <li key={j.slug}>
                    <Link
                      href={`/journeys/${j.slug}`}
                      className="group flex flex-col border-b border-sand-dark py-5 md:flex-row md:items-center md:justify-between"
                    >
                      <div>
                        <h3 className="font-display text-2xl text-ink group-hover:text-pine">
                          {j.title}
                        </h3>
                        <p className="text-sm text-ink-faint">{j.route}</p>
                      </div>
                      <span className="mt-2 text-xs uppercase tracking-wider text-brass tabular-nums md:mt-0">
                        {j.duration}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {relatedStays.length > 0 && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
              <FadeIn>
                <SectionHeading eyebrow="Stays" title="Handpicked properties" />
              </FadeIn>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {relatedStays.map((stay) => (
                  <Link
                    key={stay.slug}
                    href={`/stays/${stay.slug}`}
                    className="group border-l-2 border-brass/40 pl-6"
                  >
                    <p className="text-xs uppercase tracking-wider text-brass">
                      {stay.location}
                    </p>
                    <h3 className="mt-1 font-display text-2xl group-hover:text-pine">
                      {stay.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-pine py-16 text-center">
          <div className="mx-auto max-w-xl px-6">
            <h2 className="font-display text-3xl text-sand">
              Plan this experience with us
            </h2>
            <p className="mt-4 text-sand/80">
              Insider rates, personalised itinerary, on-ground support.
            </p>
            <Button href={`/contact?experience=${slug}`} className="mt-8">
              Enquire now
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stays, getStay } from "@/data/stays";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return stays.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const stay = getStay(slug);
  if (!stay) return {};
  return {
    title: stay.name,
    description: `${stay.name} in ${stay.location}. Insider rates via AVN Holidays Super Saver Club.`,
  };
}

export default async function StayDetailPage({ params }: Props) {
  const { slug } = await params;
  const stay = getStay(slug);
  if (!stay) notFound();

  return (
    <div className="pt-24">
      <section className="relative min-h-[50vh]">
        <EditorialImage
          imageKey={stay.imageKey}
          className="absolute inset-0 min-h-[50vh]"
          sizes="100vw"
          overlay
          priority
        />
        <div className="relative z-10 flex min-h-[50vh] items-end px-6 pb-16 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-brass-light">
              {stay.location}
            </p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl text-sand">
              {stay.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-12">
        <FadeIn>
          <p className="editorial-prose text-lg">{stay.description}</p>
          <ul className="mt-8 space-y-2">
            {stay.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-ink-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      {stay.galleryKeys.length > 1 && (
        <section className="pb-16" aria-label="Gallery">
          <HorizontalScroll label={`${stay.name} gallery`} className="px-6 md:px-12 lg:px-20">
            {stay.galleryKeys.map((key) => (
              <EditorialImage
                key={key}
                imageKey={key}
                className="snap-start shrink-0 w-[80vw] md:w-[480px] aspect-[16/10]"
                sizes="(max-width: 768px) 80vw, 480px"
              />
            ))}
          </HorizontalScroll>
        </section>
      )}

      <section className="bg-pine py-16 text-center">
        <div className="mx-auto max-w-xl px-6">
          <FadeIn>
            <SectionHeading
              title="Enquire for insider rates"
              description="As Super Saver Club agents, we access negotiated tariffs — and pass them to you unchanged."
              dark
              align="center"
              className="mx-auto"
            />
            <Button href={`/contact?stay=${slug}`} className="mt-8">
              Plan your stay
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

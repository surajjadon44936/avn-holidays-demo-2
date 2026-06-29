import Link from "next/link";
import { stays } from "@/data/stays";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";
import { EditorialImage } from "@/components/ui/EditorialImage";

export function HandpickedStays() {
  const featured = stays.slice(0, 6);

  return (
    <section className="bg-pine-dark py-24 md:py-32 text-sand" aria-labelledby="stays-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 mb-12">
        <FadeIn>
          <SectionHeading
            eyebrow="Handpicked stays"
            title="Our little black book"
            description="Properties we know personally — where we'd send our own family. Insider rates on every one."
            dark
          />
        </FadeIn>
      </div>

      <HorizontalScroll label="Handpicked hotel and resort collection" className="px-6 md:px-12 lg:px-20">
        {featured.map((stay, i) => (
          <FadeIn key={stay.slug} delay={i * 0.06} className="snap-start shrink-0">
            <Link
              href={`/stays/${stay.slug}`}
              className="group block w-[75vw] md:w-[360px]"
            >
              <EditorialImage
                imageKey={stay.imageKey}
                className="aspect-[4/3]"
                sizes="(max-width: 768px) 75vw, 360px"
                overlay
              />
              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.15em] text-brass-light">
                  {stay.location}
                </p>
                <h3 className="mt-2 font-display text-2xl text-sand group-hover:text-brass-light transition-colors">
                  {stay.name}
                </h3>
              </div>
            </Link>
          </FadeIn>
        ))}
      </HorizontalScroll>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 mt-12">
        <Link
          href="/stays"
          className="text-sm uppercase tracking-wider text-brass-light hover:text-sand transition-colors"
        >
          Browse all stays →
        </Link>
      </div>
    </section>
  );
}

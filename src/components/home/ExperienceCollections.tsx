import Link from "next/link";
import { experiences } from "@/data/experiences";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";
import { EditorialImage } from "@/components/ui/EditorialImage";

export function ExperienceCollections() {
  return (
    <section className="bg-sand-dark/40 py-24 md:py-32" aria-labelledby="experiences-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 mb-12">
        <FadeIn>
          <SectionHeading
            eyebrow="Discover by experience"
            title="Where will your next story begin?"
            description="Forget city grids. Start with how you want to feel — drifting through backwaters, waking in tea country, or watching Kanchenjunga at dawn."
          />
        </FadeIn>
      </div>

      <HorizontalScroll label="Travel experience collections" className="px-6 md:px-12 lg:px-20">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.slug} delay={i * 0.08} className="snap-start shrink-0">
            <Link
              href={`/experiences/${exp.slug}`}
              className="group block w-[85vw] md:w-[420px] lg:w-[480px]"
            >
              <EditorialImage
                imageKey={exp.imageKey}
                className="aspect-[3/4] transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 85vw, 480px"
                overlay
              />
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-brass">
                  {exp.destinations.slice(0, 3).join(" · ")}
                </p>
                <h3 className="mt-2 font-display text-3xl text-ink group-hover:text-pine transition-colors">
                  {exp.title}
                </h3>
                <p className="mt-2 text-ink-muted text-sm">{exp.tagline}</p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </HorizontalScroll>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 mt-12">
        <Link
          href="/experiences"
          className="text-sm uppercase tracking-wider text-pine hover:text-pine-dark transition-colors"
        >
          View all experiences →
        </Link>
      </div>
    </section>
  );
}

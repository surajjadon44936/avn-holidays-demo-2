import type { Metadata } from "next";
import Link from "next/link";
import { experiences } from "@/data/experiences";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { EditorialImage } from "@/components/ui/EditorialImage";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Discover India by experience — Kerala backwaters, tea hills, wildlife, Himalayas, Andaman islands, and heritage cities. Curated by AVN Holidays concierge.",
};

export default function ExperiencesPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Experiences"
            title="Travel by how you want to feel"
            description="Six curated collections spanning AVN's destinations across South India, the Northeast, and the Andamans."
          />
        </FadeIn>
      </section>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.slug}>
            <Link
              href={`/experiences/${exp.slug}`}
              className={`group grid md:grid-cols-2 ${
                i % 2 === 1 ? "bg-sand-dark/30" : ""
              }`}
            >
              <EditorialImage
                imageKey={exp.imageKey}
                className={`aspect-[16/10] md:aspect-auto md:min-h-[480px] ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
                overlay
              />
              <div
                className={`flex flex-col justify-center px-6 py-12 md:px-16 lg:px-20 ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-brass">
                  {exp.destinations.join(" · ")}
                </p>
                <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink group-hover:text-pine transition-colors">
                  {exp.title}
                </h2>
                <p className="mt-2 text-lg text-ink-muted italic">{exp.tagline}</p>
                <p className="mt-6 editorial-prose">{exp.description}</p>
                <span className="mt-8 text-sm uppercase tracking-wider text-pine">
                  Explore →
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

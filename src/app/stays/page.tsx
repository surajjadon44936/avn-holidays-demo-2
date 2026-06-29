import type { Metadata } from "next";
import Link from "next/link";
import { stays } from "@/data/stays";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { EditorialImage } from "@/components/ui/EditorialImage";

export const metadata: Metadata = {
  title: "Handpicked Stays",
  description:
    "Curated hotels and resorts across Kerala, Karnataka, and South India — with insider Super Saver Club rates from AVN Holidays.",
};

export default function StaysPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Stays"
            title="Properties we know and trust"
            description="A curated little black book — not a database. Every property personally vetted, every rate negotiated as agents."
          />
          <p className="mt-6 text-sm text-ink-faint italic max-w-2xl">
            Images marked as representative are placeholders pending official property photography from hotel partners.
          </p>
        </FadeIn>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-24 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2">
          {stays.map((stay, i) => (
            <FadeIn key={stay.slug} delay={i * 0.05}>
              <Link href={`/stays/${stay.slug}`} className="group block">
                <EditorialImage
                  imageKey={stay.imageKey}
                  className="aspect-[16/10]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  overlay
                />
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-brass">
                    {stay.location}
                  </p>
                  <h2 className="mt-2 font-display text-3xl text-ink group-hover:text-pine transition-colors">
                    {stay.name}
                  </h2>
                  <p className="mt-3 editorial-prose line-clamp-2">{stay.description}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

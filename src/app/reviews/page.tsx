import type { Metadata } from "next";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Real testimonials from AVN Holidays travellers — Mumbai, Delhi, Bangalore guests on Kerala, Coorg, Sikkim, and Andaman trips.",
};

export default function ReviewsPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Guest voices"
            title="Stories from travellers who trusted us"
            description="Verbatim testimonials from guests across India — lightly edited only for clarity."
            align="center"
            className="mx-auto"
          />
        </FadeIn>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 md:px-12">
        <div className="space-y-16">
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.05}>
              <blockquote className="border-t-2 border-brass/40 pt-10">
                <p className="font-display text-2xl md:text-3xl leading-relaxed text-ink italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <cite className="not-italic">
                    <span className="block font-medium text-ink">{t.author}</span>
                    <span className="text-sm text-ink-faint">
                      {t.location}
                      {t.trip && ` · ${t.trip}`}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-pine py-16 text-center">
        <p className="font-display text-2xl text-sand">Ready to write your own story?</p>
        <Button href="/contact" className="mt-8">
          Plan your trip
        </Button>
      </section>
    </div>
  );
}

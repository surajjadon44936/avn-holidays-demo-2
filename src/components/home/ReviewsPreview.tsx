import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";

export function ReviewsPreview() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="py-24 md:py-32" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Guest voices"
            title="Stories from travellers who trusted us"
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {featured.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.1}>
              <blockquote className="flex h-full flex-col border-t-2 border-brass/40 pt-8">
                <p className="font-display text-xl leading-relaxed text-ink italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="block text-sm font-medium text-ink">{t.author}</span>
                    <span className="text-xs text-ink-faint">{t.location}{t.trip && ` · ${t.trip}`}</span>
                  </cite>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/reviews"
            className="text-sm uppercase tracking-wider text-pine hover:text-pine-dark"
          >
            Read all reviews
          </Link>
        </div>
      </div>
    </section>
  );
}

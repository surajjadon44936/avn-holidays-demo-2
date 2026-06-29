import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Button } from "@/components/ui/Button";

export function SuperSaverClub() {
  return (
    <section className="bg-sand py-24 md:py-32" aria-labelledby="super-saver-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <SectionHeading
              eyebrow="Super Saver Club"
              title="We're travel agents. We get insider rates. We give them to you."
              description="Online portals show you rack rates. As registered agents, AVN accesses negotiated hotel and resort tariffs — the same rates we'd use for ourselves — and passes them to you unchanged. No markup games. No algorithm. A real person who knows the properties."
            />
            <ul className="mt-8 space-y-4 text-ink-muted">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden />
                Insider access to 200+ hotels and resorts across South India
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden />
                Rates typically 15–30% below online portals
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden />
                Personal concierge from enquiry to return
              </li>
            </ul>
            <Button href="/about" variant="outline" className="mt-10">
              Our story
            </Button>
          </FadeIn>
          <FadeIn delay={0.15}>
            <EditorialImage
              imageKey="super-saver"
              className="aspect-[4/5] md:aspect-[3/4]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

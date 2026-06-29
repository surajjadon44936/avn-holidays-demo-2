import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";

const steps = [
  {
    number: "01",
    title: "Tell us your dream",
    description:
      "Share your dates, destinations, and what matters most — a quiet honeymoon, a family adventure, or a spiritual retreat. No forms to fight with; a real conversation.",
  },
  {
    number: "02",
    title: "We craft it & apply insider rates",
    description:
      "Our Mysore team designs your itinerary, selects the right properties, and applies Super Saver Club agent rates — the same tariffs we'd use ourselves.",
  },
  {
    number: "03",
    title: "You travel; we support you",
    description:
      "From confirmation to on-ground assistance via our resident reps in Bangalore, Kolkata, and Patna — you're never alone on the road.",
  },
];

export function ConciergeSteps() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="concierge-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <FadeIn>
          <SectionHeading
            eyebrow="How it works"
            title="Planning with a human expert"
            description="Three steps from dream to departure. No algorithms, no call centres — just experienced travellers who've walked these roads."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.12}>
              <div className="relative pt-8 border-t border-brass/40">
                <span className="absolute -top-3 left-0 bg-sand px-2 font-display text-4xl text-brass tabular-nums">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 editorial-prose text-base">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

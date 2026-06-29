import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { Button, PhoneButton } from "@/components/ui/Button";
import { ConciergeForm } from "@/components/forms/ConciergeForm";
import { siteConfig } from "@/data/contact";

export function ClosingCTA() {
  return (
    <section className="bg-pine py-24 md:py-32" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <SectionHeading
              eyebrow="Begin"
              title="Let's plan your next trip"
              description="Tell us where you'd like to go. We'll handle the rest — with insider rates and a human touch."
              dark
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <PhoneButton
                phone={siteConfig.primaryPhone}
                display={siteConfig.primaryPhoneDisplay}
                variant="secondary"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-sand p-8 md:p-10">
              <ConciergeForm source="home-closing" compact />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

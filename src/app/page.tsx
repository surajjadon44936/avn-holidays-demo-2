import { Hero } from "@/components/home/Hero";
import { SuperSaverClub } from "@/components/home/SuperSaverClub";
import { ExperienceCollections } from "@/components/home/ExperienceCollections";
import { SignatureJourneys } from "@/components/home/SignatureJourneys";
import { HandpickedStays } from "@/components/home/HandpickedStays";
import { ConciergeSteps } from "@/components/home/ConciergeSteps";
import { ThePeople } from "@/components/home/ThePeople";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";
import { ClosingCTA } from "@/components/home/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SuperSaverClub />
      <ExperienceCollections />
      <SignatureJourneys />
      <HandpickedStays />
      <ConciergeSteps />
      <ThePeople />
      <ReviewsPreview />
      <ClosingCTA />
    </>
  );
}

"use client";

import Link from "next/link";
import { CinematicHeroImage } from "@/components/ui/EditorialImage";
import { Button, PhoneButton } from "@/components/ui/Button";
import { siteConfig } from "@/data/contact";

export function Hero() {
  return (
    <CinematicHeroImage imageKey="hero" priority>
      <div className="max-w-3xl">
        <p className="mb-4 text-xs font-body uppercase tracking-[0.25em] text-brass-light">
          Mysore · Since 1998
        </p>
        <h1 className="font-display text-5xl leading-[1.05] text-sand md:text-7xl lg:text-8xl text-balance">
          Better Rates.
          <br />
          Better Services.
          <br />
          Better Memories.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-sand/85 md:text-xl leading-relaxed">
          {siteConfig.promise} We are travel agents with insider hotel rates —
          and we pass every saving directly to you.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="primary" size="lg">
            Start Planning
          </Button>
          <PhoneButton
            phone={siteConfig.primaryPhone}
            display={`Call ${siteConfig.primaryPhoneDisplay}`}
            size="lg"
          />
        </div>
      </div>
    </CinematicHeroImage>
  );
}

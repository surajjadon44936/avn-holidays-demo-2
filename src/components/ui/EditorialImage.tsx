"use client";

import Image from "next/image";
import { getImage } from "@/data/images";
import { cn } from "@/lib/utils";

interface EditorialImageProps {
  imageKey: string;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  sizes?: string;
  overlay?: boolean;
}

export function EditorialImage({
  imageKey,
  priority = false,
  className,
  fill = true,
  sizes = "(max-width: 768px) 100vw, 50vw",
  overlay = false,
}: EditorialImageProps) {
  const img = getImage(imageKey);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={img.src}
        alt={img.alt}
        fill={fill}
        width={fill ? undefined : img.width}
        height={fill ? undefined : img.height}
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {overlay && <div className="absolute inset-0 scrim-full" aria-hidden />}
      {img.placeholder && (
        <span className="absolute bottom-3 left-3 bg-ink/70 px-2 py-1 text-[10px] uppercase tracking-wider text-sand/90">
          Representative image
        </span>
      )}
    </div>
  );
}

interface CinematicHeroImageProps {
  imageKey: string;
  children?: React.ReactNode;
  priority?: boolean;
}

export function CinematicHeroImage({
  imageKey,
  children,
  priority = true,
}: CinematicHeroImageProps) {
  const img = getImage(imageKey);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen">
      <Image
        src={img.src}
        alt={img.alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 scrim-full" aria-hidden />
      <div className="relative z-10 flex min-h-[90vh] md:min-h-screen flex-col justify-end px-6 pb-16 pt-32 md:px-12 md:pb-24 lg:px-20">
        {children}
      </div>
    </section>
  );
}

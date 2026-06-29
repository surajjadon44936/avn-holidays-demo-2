"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

export function HorizontalScroll({
  children,
  className,
  label = "Scroll gallery",
}: HorizontalScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div
        ref={ref}
        role="region"
        aria-label={label}
        tabIndex={0}
        className={cn(
          "scroll-gallery flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-body font-medium uppercase tracking-[0.2em]",
            dark ? "text-brass-light" : "text-brass"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance",
          dark ? "text-sand" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 editorial-prose text-balance",
            dark ? "text-sand/80" : undefined
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "hairline mt-8 w-16",
          align === "center" && "mx-auto",
          dark ? "bg-brass-light/50" : undefined
        )}
        aria-hidden
      />
    </div>
  );
}

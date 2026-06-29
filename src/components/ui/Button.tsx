import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href: string;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-pine text-sand hover:bg-pine-dark border border-pine",
  secondary: "bg-brass/15 text-pine border border-brass/50 hover:bg-brass/25",
  ghost: "text-sand hover:text-sand/80 border border-sand/30 hover:border-sand/50",
  outline: "bg-transparent text-pine border border-pine/30 hover:border-pine hover:bg-pine/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-widest uppercase",
  md: "px-6 py-3 text-sm tracking-wider uppercase",
  lg: "px-8 py-4 text-sm tracking-wider uppercase",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center font-body font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

interface PhoneButtonProps {
  phone: string;
  display?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function PhoneButton({
  phone,
  display,
  variant = "ghost",
  size = "md",
  className,
}: PhoneButtonProps) {
  return (
    <a
      href={`tel:${phone.replace(/\s/g, "")}`}
      className={cn(
        "inline-flex items-center justify-center font-body font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {display ?? phone}
    </a>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, contact } from "@/data/contact";
import { cn } from "@/lib/utils";
import { PhoneButton } from "@/components/ui/Button";

const navLinks = [
  { href: "/experiences", label: "Experiences" },
  { href: "/journeys", label: "Journeys" },
  { href: "/stays", label: "Stays" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

/** Pages with a full-bleed dark hero under the header at scroll top. */
function isOverHero(pathname: string): boolean {
  if (pathname === "/") return true;
  if (pathname === "/getting-around") return true;
  if (/^\/(experiences|journeys|stays)\/[^/]+$/.test(pathname)) return true;
  return false;
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const overHero = isOverHero(pathname);
  const useLightNav = overHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setScrolled(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        useLightNav
          ? "bg-transparent"
          : scrolled
            ? "bg-sand/95 backdrop-blur-sm border-b border-sand-dark shadow-sm"
            : "bg-sand/90 backdrop-blur-sm border-b border-sand-dark/60"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link
          href="/"
          className={cn(
            "font-display text-xl md:text-2xl tracking-tight transition-colors",
            useLightNav ? "text-sand" : "text-pine"
          )}
        >
          AVN Holidays
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-body uppercase tracking-[0.15em] transition-colors",
                useLightNav
                  ? "text-sand/90 hover:text-sand"
                  : "text-ink-muted hover:text-pine"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className={cn(
              "text-xs font-body uppercase tracking-wider transition-colors",
              useLightNav
                ? "text-sand hover:text-sand/80"
                : "text-pine hover:text-pine-dark"
            )}
          >
            Plan My Trip
          </Link>
          <PhoneButton
            phone={siteConfig.primaryPhone}
            display="Call"
            variant={useLightNav ? "ghost" : "outline"}
            size="sm"
            className={useLightNav ? "" : "!text-pine !border-pine/30"}
          />
        </div>

        <button
          type="button"
          className={cn(
            "lg:hidden p-2",
            useLightNav ? "text-sand" : "text-pine"
          )}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="fixed inset-0 top-[60px] z-40 bg-sand lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1 px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-sand-dark py-4 font-display text-2xl text-pine"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center bg-pine px-6 py-4 text-sm uppercase tracking-wider text-sand"
              onClick={() => setMenuOpen(false)}
            >
              Plan My Trip
            </Link>
            <a
              href={`tel:${contact.cellPhones[0].replace(/\s/g, "")}`}
              className="mt-3 text-center text-pine tabular-nums"
            >
              {siteConfig.primaryPhoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

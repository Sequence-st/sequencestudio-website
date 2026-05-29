"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/service", label: "SERVICE" },
  { href: "/work", label: "WORK" },
  { href: "/contact", label: "CONTACT" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const showWhite = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Logo white={showWhite} />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wider transition-colors font-[family-name:var(--font-montserrat)]",
                  pathname === item.href
                    ? showWhite
                      ? "text-white"
                      : "text-primary"
                    : showWhite
                      ? "text-white/70 hover:text-white"
                      : "text-dark-light hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
            <SocialLinks
              className={showWhite ? "text-white/70" : "text-dark-light"}
              iconClassName="w-4 h-4"
            />
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
          >
            <span
              className={cn(
                "block w-6 h-0.5 transition-all duration-300",
                mobileOpen
                  ? "rotate-45 translate-y-1 bg-dark"
                  : showWhite
                    ? "bg-white"
                    : "bg-dark"
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 transition-all duration-300",
                mobileOpen
                  ? "-rotate-45 -translate-y-1 bg-dark"
                  : showWhite
                    ? "bg-white"
                    : "bg-dark"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-2xl font-medium tracking-wider font-[family-name:var(--font-montserrat)]",
              pathname === item.href ? "text-primary" : "text-dark"
            )}
          >
            {item.label}
          </Link>
        ))}
        <SocialLinks className="text-dark-light mt-4" />
      </div>
    </header>
  );
}

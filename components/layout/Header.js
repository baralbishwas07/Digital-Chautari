"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`
        sticky top-0 z-50 backdrop-blur-xl transition-all duration-300
        ${
          isScrolled
            ? "bg-paper/95 shadow-[0_1px_0_var(--color-line)]"
            : "bg-paper/85"
        }
      `}
      id="site-header"
    >
      <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
        <nav
          className="flex h-[72px] items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Digital Chautari Home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-icon bg-gradient-to-br from-primary to-primary-dark text-white font-heading font-extrabold text-base">
              DC
            </span>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base text-ink leading-tight">
                Digital Chautari
              </span>
              <span className="text-[11px] text-muted leading-tight">
                Creative Technology
              </span>
            </div>
          </Link>
          {/* Desktop Nav */}
          <ul
            className={`
              flex items-center gap-8
              max-[760px]:fixed max-[760px]:top-[72px] max-[760px]:left-0
              max-[760px]:right-0 max-[760px]:bottom-0 max-[760px]:flex-col
              max-[760px]:items-center max-[760px]:justify-center max-[760px]:gap-8
              max-[760px]:bg-paper max-[760px]:transition-transform max-[760px]:duration-[0.45s]
              max-[760px]:z-[999]
              ${isMenuOpen ? "max-[760px]:translate-x-0" : "max-[760px]:translate-x-full"}
            `}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    relative font-body text-sm font-medium transition-colors duration-150
                    max-[760px]:text-xl
                    ${
                      pathname === link.href
                        ? 'text-primary font-semibold after:content-[""] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-[5px] after:h-[5px] after:rounded-full after:bg-primary'
                        : "text-muted hover:text-primary"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden min-[761px]:inline-flex items-center px-6 py-2.5 bg-primary text-white font-body text-sm font-semibold rounded-button hover:bg-primary-dark transition-colors duration-150"
            >
              Contact Us
            </Link>
            {/* Hamburger — mobile only */}
            <button
              className="hidden max-[760px]:flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X size={24} className="text-ink" />
              ) : (
                <Menu size={24} className="text-ink" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

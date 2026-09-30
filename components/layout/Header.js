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

  // Scroll listener for sticky header styling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
  }

  // Close menu on resize when crossing the 760px breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`
          sticky top-0 transition-all duration-300
          ${
            isMenuOpen
              ? "z-[1001] bg-[#fbfbf9]"
              : `z-50 backdrop-blur-xl ${
                  isScrolled
                    ? "bg-paper/95 shadow-[0_1px_0_var(--color-line)]"
                    : "bg-paper/85"
                }`
          }
        `}
        id="site-header"
      >
        <div className="mx-auto max-w-[1120px] px-10 max-[1024px]:px-5 max-[760px]:px-[22px]">
          <nav
            className="flex h-[72px] items-center justify-between gap-4"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="relative z-[1001] flex items-center gap-2 flex-shrink-0"
              aria-label="Digital Chautari Home"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-icon bg-gradient-to-br from-primary to-primary-dark text-white font-heading font-extrabold text-base flex-shrink-0">
                DC
              </span>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base text-ink leading-tight whitespace-nowrap">
                  Digital Chautari
                </span>
                <span className="text-[11px] text-muted leading-tight whitespace-nowrap">
                  Creative Technology
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden min-[761px]:flex items-center gap-7 max-[1024px]:gap-4 max-[860px]:gap-2.5 flex-shrink-0">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.href}
                  className={link.href === "/contact" ? "max-[960px]:hidden" : ""}
                >
                  <Link
                    href={link.href}
                    className={`
                      relative font-body text-sm max-[900px]:text-[13px] font-medium transition-colors duration-150 whitespace-nowrap px-1 py-1
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
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="hidden min-[761px]:inline-flex items-center px-6 py-2.5 max-[1024px]:px-4 max-[1024px]:py-2 max-[860px]:px-3.5 max-[860px]:py-1.5 max-[860px]:text-xs bg-primary text-white font-body text-sm font-semibold rounded-button hover:bg-primary-dark transition-colors duration-150 flex-shrink-0 whitespace-nowrap"
              >
                Contact Us
              </Link>

              {/* Hamburger button (Mobile only) */}
              <button
                className="relative z-[1001] hidden max-[760px]:flex items-center justify-center w-10 h-10 -mr-2 bg-transparent border-none cursor-pointer text-ink"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isMenuOpen ? (
                  <X size={26} className="text-ink" />
                ) : (
                  <Menu size={26} className="text-ink" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`
          fixed inset-0 z-[1000] bg-[#fbfbf9] min-[761px]:hidden
          flex flex-col items-center justify-center px-6 pt-[72px]
          transition-all duration-300 ease-in-out
          ${
            isMenuOpen
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col items-center gap-7 text-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  font-body text-2xl font-medium transition-colors duration-150
                  ${
                    pathname === link.href
                      ? "text-primary font-bold"
                      : "text-ink hover:text-primary"
                  }
                `}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Contact Button */}
        <div className="mt-10">
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center px-8 py-3 bg-primary text-white font-body text-base font-semibold rounded-button hover:bg-primary-dark transition-colors duration-150 shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import {
  COMPANY_NAME,
  navLinks,
  PHONE_DISPLAY,
  PHONE_TEL,
  TRADING_DESK_LABEL,
  WHATSAPP_URL,
} from "@/lib/site";
import { useEnquiry } from "@/lib/enquiry-context";

export function Header() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  // Close mobile drawer upon route change without triggering setState in useEffect
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setProductsOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-cream/95 shadow-sm backdrop-blur-md"
          : "border-b border-line/40 bg-cream"
      }`}
    >
      {/* Top Utility Bar for B2B Wholesale Trading */}
      <div className="border-b border-line/60 bg-navy-deep text-white/85">
        <div className="container-page flex items-center justify-between py-1.5 text-[0.7rem] sm:text-xs">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium tracking-wider text-gold uppercase">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {TRADING_DESK_LABEL}
            </span>
            <span className="hidden text-white/40 md:inline">|</span>
            <span className="hidden text-white/70 md:inline">
              PAN India Bulk Supply & Tanker Logistics
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-1 font-semibold text-white transition-colors hover:text-gold"
              title="Call Trading Desk"
            >
              <svg
                className="h-3 w-3 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{PHONE_DISPLAY}</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1 font-semibold text-emerald-400 transition-colors hover:text-emerald-300 sm:flex"
              title="Chat on WhatsApp"
            >
              <span>WhatsApp Rates</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container-page flex items-center justify-between gap-3 py-2 sm:gap-4 sm:py-2.5">
        <Link
          href="/"
          className="logo-pop shrink-0"
          aria-label={`${COMPANY_NAME} home`}
        >
          <BrandLogo priority className="h-14 w-auto sm:h-16 md:h-20" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1 rounded px-3 py-2 text-[0.74rem] font-semibold tracking-[0.08em] uppercase transition-colors ${
                    pathname.startsWith("/products")
                      ? "text-navy bg-paper/70 font-bold"
                      : "text-muted hover:text-navy hover:bg-paper/50"
                  }`}
                >
                  {link.label}
                  <span aria-hidden className="text-[0.6rem] transition-transform group-hover:rotate-180">
                    ▾
                  </span>
                </Link>
                <div className="invisible absolute left-0 top-full z-30 min-w-72 translate-y-2 rounded-sm bg-white py-2 opacity-0 shadow-xl ring-1 ring-line transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="border-b border-line px-4 py-2 text-[0.68rem] font-semibold tracking-wider text-gold uppercase">
                    Trading Categories
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-ink transition-colors hover:bg-paper hover:text-navy"
                    >
                      {child.label}
                    </Link>
                  ))}
                  <div className="mt-1 border-t border-line/60 p-2">
                    <Link
                      href="/products"
                      className="block rounded bg-cream px-3 py-2 text-center text-xs font-semibold text-navy hover:bg-paper"
                    >
                      View Full Catalogue →
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded px-3 py-2 text-[0.74rem] font-semibold tracking-[0.08em] uppercase transition-colors ${
                  pathname === link.href
                    ? "text-navy bg-paper/70 font-bold"
                    : "text-muted hover:text-navy hover:bg-paper/50"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-sm border border-emerald-600/30 bg-emerald-50 px-3 py-2 text-[0.76rem] font-bold text-emerald-800 transition-all hover:bg-emerald-100 lg:inline-flex"
            aria-label="Direct WhatsApp quote"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            WhatsApp Rates
          </a>

          <button
            type="button"
            className="btn btn-gold hidden px-4 py-2.5 sm:inline-flex"
            onClick={() => openEnquiry()}
          >
            Request Quote
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-sm border border-line bg-white text-navy transition-colors hover:bg-paper xl:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className={`burger ${open ? "burger-open" : ""}`} aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer xl:hidden ${open ? "mobile-drawer-open" : ""}`}
      >
        <nav className="container-page flex flex-col py-4" aria-label="Mobile">
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.href} className="border-b border-line/60">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3.5 text-left text-sm font-semibold tracking-[0.08em] text-navy uppercase"
                  onClick={() => setProductsOpen((v) => !v)}
                  aria-expanded={productsOpen}
                >
                  <span>{link.label}</span>
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-cream text-xs">
                    {productsOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`mobile-sub ${
                    productsOpen ? "mobile-sub-open" : ""
                  }`}
                >
                  <div className="space-y-1 pb-3 pl-3">
                    <Link
                      href="/products"
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm font-semibold text-gold hover:text-navy"
                    >
                      All Products (Full Catalogue)
                    </Link>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-sm text-muted hover:text-navy"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3.5 text-sm font-semibold tracking-[0.08em] text-navy uppercase transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ),
          )}

          {/* Quick Action Grid in Mobile Drawer */}
          <div className="mt-5 grid grid-cols-2 gap-2">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center justify-center gap-1.5 rounded-sm border border-line bg-white py-3 text-xs font-bold text-navy shadow-sm"
            >
              📞 Call Desk
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-sm border border-emerald-600 bg-emerald-600 py-3 text-xs font-bold text-white shadow-sm"
            >
              💬 WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="btn btn-gold mt-3 w-full"
            onClick={() => {
              setOpen(false);
              openEnquiry();
            }}
          >
            Send Trading Enquiry
          </button>
        </nav>
      </div>
    </header>
  );
}


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { COMPANY_NAME, navLinks } from "@/lib/site";
import { useEnquiry } from "@/lib/enquiry-context";

export function Header() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-line bg-cream/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-cream"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-3 py-2 sm:gap-4 sm:py-2.5">
        <Link
          href="/"
          className="logo-pop shrink-0"
          aria-label={`${COMPANY_NAME} home`}
        >
          <BrandLogo priority className="h-16 w-auto sm:h-[4.75rem] md:h-[5.5rem]" />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1 px-2.5 py-2 text-[0.74rem] font-semibold tracking-[0.08em] uppercase transition-colors ${
                    pathname.startsWith("/products")
                      ? "text-navy"
                      : "text-muted hover:text-navy"
                  }`}
                >
                  {link.label}
                  <span aria-hidden className="text-[0.6rem]">
                    ▾
                  </span>
                </Link>
                <div className="invisible absolute left-0 top-full z-20 min-w-60 translate-y-1 bg-white py-2 opacity-0 shadow-lg ring-1 ring-line transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-ink transition-colors hover:bg-paper hover:text-navy"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-2 text-[0.74rem] font-semibold tracking-[0.08em] uppercase transition-colors ${
                  pathname === link.href
                    ? "text-navy"
                    : "text-muted hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="btn btn-gold hidden px-3 py-2.5 md:inline-flex"
            onClick={() => openEnquiry()}
          >
            Send Enquiry
          </button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-line text-navy xl:hidden"
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

      <div className={`mobile-drawer xl:hidden ${open ? "mobile-drawer-open" : ""}`}>
        <nav className="container-page flex flex-col py-3" aria-label="Mobile">
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.href}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold tracking-[0.08em] text-navy uppercase"
                  onClick={() => setProductsOpen((v) => !v)}
                >
                  {link.label}
                  <span>{productsOpen ? "−" : "+"}</span>
                </button>
                <div className={`mobile-sub ${productsOpen ? "mobile-sub-open" : ""}`}>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2 pl-3 text-sm text-muted"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-sm font-semibold tracking-[0.08em] text-navy uppercase"
              >
                {link.label}
              </Link>
            ),
          )}
          <button
            type="button"
            className="btn btn-gold mt-3 w-full"
            onClick={() => {
              setOpen(false);
              openEnquiry();
            }}
          >
            Send Enquiry
          </button>
        </nav>
      </div>
    </header>
  );
}

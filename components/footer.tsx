import Image from "next/image";
import Link from "next/link";
import { COMPANY_NAME, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/values", label: "Our Values" },
  { href: "/supply-delivery", label: "Supply & Delivery" },
  { href: "/contact", label: "Contact" },
];

const productLinks = [
  { href: "/products/edible-oils", label: "Edible Oils" },
  { href: "/products/agricultural-commodities", label: "Agricultural Seeds" },
  { href: "/products/sugar-jaggery-cereals", label: "Sugar & Jaggery" },
  { href: "/products/sugar-jaggery-cereals", label: "Cereals & Pulses" },
  { href: "/products/spices", label: "Spices" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-navy-deep text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label={`${COMPANY_NAME} home`} className="inline-block">
            <Image
              src="/logo-footer.png"
              alt={COMPANY_NAME}
              width={746}
              height={444}
              unoptimized
              className="footer-logo h-20 w-auto object-contain sm:h-24 md:h-28"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Trading in Edible Oils, Agricultural Commodities and Food Products.
          </p>
        </div>
        <div>
          <h2 className="text-[0.72rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[0.72rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Product Categories
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[0.72rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Contact
          </h2>
          <p className="mt-4 text-sm text-white/75">
            Phone
            <br />
            <a href={`tel:${PHONE_TEL}`} className="text-lg text-white hover:text-gold-soft">
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-5 text-xs tracking-wide text-white/50">
          © 2026 {COMPANY_NAME}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

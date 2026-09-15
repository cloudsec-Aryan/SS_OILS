import Image from "next/image";
import Link from "next/link";
import {
  COMPANY_NAME,
  OPERATING_HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  TRADING_DESK_LABEL,
  WHATSAPP_URL,
} from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Our Heritage" },
  { href: "/products", label: "All Products Catalogue" },
  { href: "/values", label: "Core Trading Values" },
  { href: "/supply-delivery", label: "Supply & Tanker Logistics" },
  { href: "/contact", label: "Contact & Live Rates" },
];

const productLinks = [
  { href: "/products/edible-oils", label: "Kachi Ghani Mustard Oil" },
  { href: "/products/edible-oils", label: "Soya Refined Oil (Bulk)" },
  { href: "/products/edible-oils", label: "Cottonseed & Cotton Refined Oil" },
  { href: "/products/edible-oils", label: "Rice Bran Oil" },
  { href: "/products/agricultural-commodities", label: "Sesame Seeds (Til)" },
  { href: "/products/agricultural-commodities", label: "Groundnut Seeds & Mustard" },
  { href: "/products/sugar-jaggery-cereals", label: "Commercial Sugar & Natural Jaggery" },
  { href: "/products/spices", label: "Wholesale Indian Spices" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-navy-deep text-white">
      {/* Top Footer Banner */}
      <div className="border-b border-white/10 bg-navy/60 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="font-display text-xl text-white sm:text-2xl">
              Ready to Discuss Bulk Mandi Bargains & Dispatch?
            </p>
            <p className="text-xs text-white/70 sm:text-sm">
              Connect with our second-generation trading desk for current market rates.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={`tel:${PHONE_TEL}`}
              className="btn btn-gold py-2.5 text-xs"
            >
              📞 Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-emerald-500 bg-emerald-600/90 py-2.5 text-xs text-white hover:bg-emerald-600"
            >
              💬 WhatsApp Trading Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label={`${COMPANY_NAME} home`} className="inline-block">
            <Image
              src="/logo-footer.png"
              alt={COMPANY_NAME}
              width={746}
              height={444}
              unoptimized
              className="footer-logo h-16 w-auto object-contain sm:h-20"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Backed by over 40 years of market heritage. Trading in Edible Oils,
            Agricultural Seeds, Food Commodities, and Spices across India.
          </p>
          <div className="mt-4 text-xs text-white/60">
            <p className="font-semibold text-gold uppercase">{TRADING_DESK_LABEL}</p>
            <p className="mt-1">{OPERATING_HOURS}</p>
          </div>
        </div>

        <div>
          <h2 className="text-[0.72rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.72rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Trading Portfolio
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.72rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Trading Desk & Support
          </h2>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <div>
              <p className="text-xs text-white/50 uppercase">Direct Phone</p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-0.5 inline-block text-lg font-bold text-white transition-colors hover:text-gold-soft"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div>
              <p className="text-xs text-white/50 uppercase">Supply Timelines</p>
              <p className="text-sm text-white/80">
                Current delivery to ~10–15 days as negotiated. Bulk Tankers, Drums & Bags.
              </p>
            </div>

            <div>
              <p className="text-xs text-white/50 uppercase">Origin / Coverage</p>
              <p className="text-sm text-white/80">
                Direct Mandi & Mill Sourcing, All-India Logistics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keyword Cluster Footer Strip */}
      <div className="border-t border-white/10 bg-navy-deep/80 py-4">
        <div className="container-page text-[0.68rem] leading-relaxed text-white/40">
          <p className="font-semibold uppercase tracking-wider text-white/60 mb-1">
            Core Trading Commodities:
          </p>
          <p>
            Kachi Ghani Mustard Oil Wholesale • Soya Refined Oil Bulk Tankers • Cottonseed Oil Supply • Yellow Mustard Seed • Sesame Seeds Exporter India • Bold Groundnut Seeds • Commercial Sugar M-30 • Pure Sugarcane Jaggery (Gur) • Pulses & Cereals • Indian Spices Bulk Sourcing.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-4 text-xs tracking-wide text-white/50 sm:flex-row">
          <p>© 2026 {COMPANY_NAME}. All Rights Reserved.</p>
          <p>B2B Edible Oil & Agricultural Commodity Trading</p>
        </div>
      </div>
    </footer>
  );
}


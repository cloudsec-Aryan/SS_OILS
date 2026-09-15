import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EnquireButton } from "@/components/enquire-button";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import {
  COMPANY_NAME,
  EMAIL_DISPLAY,
  OPERATING_HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
  TRADING_DESK_LABEL,
  WHATSAPP_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Live Rates | B2B Edible Oil & Commodity Trading Desk",
  description: `Contact ${COMPANY_NAME} at ${PHONE_DISPLAY} or via WhatsApp for live mandi rates, bulk edible oil tankers, agricultural seeds, sugar, and pulses across India.`,
  keywords: [
    "contact SS OIL AND FIBRES",
    "edible oil supplier phone number",
    "wholesale mustard oil trader contact",
    "WhatsApp mandi rates edible oil",
    "bulk agricultural commodity enquiry",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact Trading Desk | ${COMPANY_NAME}`,
    description:
      "Direct trading desk communication for live price discovery, road tanker bookings, and bulk commodity contracts.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${COMPANY_NAME}`,
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: COMPANY_NAME,
      telephone: PHONE_TEL,
      email: EMAIL_DISPLAY,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE_TEL,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <PageHero
        eyebrow="Commercial Trading Desk"
        title="Connect for Live Mandi Rates"
        copy="Have an immediate requirement for bulk edible oils, oilseeds, or food commodities? Reach our second-generation trading team directly."
        image="/images/contact-hero.jpg"
      />

      <Breadcrumbs items={[{ label: "Contact & Rates" }]} />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <div className="rounded-sm bg-white p-7 ring-1 ring-line shadow-sm sm:p-10 md:p-12">
              <span className="badge-gold">Immediate Price Discovery</span>
              <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
                Speak with Our Trading Desk
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Share your target commodity, required volume (MT / Tins / Bags),
                and delivery destination. We will respond promptly based on
                active mandi parity and mill crushing conditions.
              </p>

              <dl className="mt-8 space-y-6 border-y border-line/60 py-6">
                <div>
                  <dt className="text-[0.7rem] font-semibold tracking-[0.18em] text-gold uppercase">
                    Direct Phone / Trading Call
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="font-display text-3xl sm:text-4xl font-bold text-navy transition-colors hover:text-brand-blue"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[0.7rem] font-semibold tracking-[0.18em] text-gold uppercase">
                    Trading Desk Hours
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-ink/80">
                    {OPERATING_HOURS}
                  </dd>
                </div>

                <div>
                  <dt className="text-[0.7rem] font-semibold tracking-[0.18em] text-gold uppercase">
                    Trading Scope
                  </dt>
                  <dd className="mt-1 text-sm text-muted">
                    {TRADING_DESK_LABEL} • Mandi & Mill Direct Allocation • PAN-India Delivery
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <EnquireButton className="btn btn-gold text-xs">
                  Submit Online Enquiry
                </EnquireButton>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700 text-xs"
                >
                  💬 Chat on WhatsApp
                </a>

                <a
                  href={`tel:${PHONE_TEL}`}
                  className="btn btn-outline-dark text-xs"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-sm bg-navy-deep p-7 text-white shadow-sm sm:p-10 md:p-12 h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest text-gold uppercase">
                  Fast Quotation Checklist
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl">
                  Information to Include
                </h2>
                <p className="mt-3 text-xs text-white/70 sm:text-sm">
                  To help us quote the most accurate mandi parity, please specify:
                </p>

                <ul className="mt-6 space-y-3.5 text-xs sm:text-sm leading-relaxed text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✔</span>
                    <span><strong>Product Variety:</strong> e.g., Kachi Ghani Mustard Oil, Refined Soya, Sesame Seeds, M-30 Sugar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✔</span>
                    <span><strong>Quantity:</strong> e.g., 10–30 MT Road Tanker, 500 Tins, or 100 Bags.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✔</span>
                    <span><strong>Delivery Destination:</strong> City / State for exact freight calculation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✔</span>
                    <span><strong>Preferred Timeline:</strong> Immediate prompt loading or scheduled within 10–15 days.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-sm border border-white/10 bg-white/5 p-4 text-xs text-white/60">
                <p className="font-semibold text-gold uppercase">Commercial Note</p>
                <p className="mt-1">
                  All transactions follow contractual terms agreed at the time of bargain booking.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}


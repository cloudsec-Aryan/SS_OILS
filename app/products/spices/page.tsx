import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { EnquireButton } from "@/components/enquire-button";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { COMPANY_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Spices & Food Commodities Trading | Wholesale Indian Spices",
  description:
    "Wholesale trading in whole and ground Indian spices (Turmeric, Cumin, Coriander, Red Chilli, Mustard Seeds) aligned to seasonal harvests and commercial food processing specifications.",
  keywords: [
    "indian spices wholesale trading",
    "bulk spices supplier India",
    "turmeric whole bulk supplier",
    "cumin seeds jeera wholesale",
    "coriander seeds dhaniya bulk",
    "red chilli whole commercial trade",
    "agricultural food commodities trading",
  ],
  alternates: {
    canonical: "/products/spices",
  },
  openGraph: {
    title: `Spices Trading | ${COMPANY_NAME}`,
    description:
      "Commercial trading in whole Indian spices and agricultural food commodities with custom batch packing.",
    url: `${SITE_URL}/products/spices`,
  },
};

const spicesGallery = [
  { src: "/images/spices.jpg", alt: "Whole natural Indian spices and condiments wholesale trading" },
  { src: "/images/indian-spices.jpg", alt: "Indian spice blends and seeds in commercial bulk parcels" },
  { src: "/images/spice-seeds.jpg", alt: "Mustard, coriander and cumin spice seeds ready for dispatch" },
  { src: "/images/spice-market.jpg", alt: "Traditional Indian spice mandi wholesale trading and procurement" },
];

export default function SpicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Agricultural Food Commodities"
        title="Indian Spices Trading"
        copy="Connecting spice demand with seasonal agricultural harvests, disciplined grading, and dependable bulk delivery."
        image="/images/spices-bowls.jpg"
      />

      <Breadcrumbs
        items={[
          { label: "Products", href: "/products" },
          { label: "Spices" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <div className="badge-gold mb-3">Agro Food Commodities</div>
            <h2 className="font-display text-3xl text-navy sm:text-4xl md:text-5xl">
              Connecting Spice Demand with Reliable Mandi Sourcing
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Spice trading sits seamlessly alongside our edible-oil and
              oilseed business. Requirements vary widely by harvest season,
              regional variety, moisture index, and essential oil content.
            </p>
            <p className="mt-3.5 text-sm leading-relaxed text-muted sm:text-base">
              We deal in whole and ground spices including turmeric (haldi),
              coriander (dhaniya), cumin (jeera), red chilli, and mustard seeds.
              Rather than generic quotes, we tailor parcel sizes, packing types
              (25kg/50kg bags), and delivery terms to your exact trade requirement.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <EnquireButton product="Spices" className="btn btn-gold text-xs">
                Enquire About Spices
              </EnquireButton>

              <a
                href={`${WHATSAPP_URL}&text=${encodeURIComponent(
                  "Hello SS OIL AND FIBRES, I would like to enquire about wholesale spice rates and varieties."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700 text-xs"
              >
                💬 WhatsApp Spice Desk
              </a>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
              {spicesGallery.map((img) => (
                <div
                  key={img.src}
                  className="img-zoom relative aspect-square overflow-hidden rounded-sm ring-1 ring-line shadow-xs"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBand
        title="Have a Bulk Spice Requirement?"
        copy="Share your preferred variety, volume, and destination to receive an immediate market quote."
      />
    </>
  );
}


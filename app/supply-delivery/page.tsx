import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { EnquireButton } from "@/components/enquire-button";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { COMPANY_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Supply, Logistics & Nationwide Delivery | SS OIL AND FIBRES",
  description:
    "Learn about our B2B supply logistics: Dedicated edible oil road tankers (10–30 MT), commercial truckloads, prompt spot dispatches, and scheduled 10–15 day delivery pipelines across India.",
  keywords: [
    "edible oil tanker delivery India",
    "bulk commodity supply logistics",
    "mustard oil tanker dispatch timeline",
    "wholesale agricultural transport India",
    "FTL full truckload grain logistics",
  ],
  alternates: {
    canonical: "/supply-delivery",
  },
  openGraph: {
    title: `Supply & Logistics | ${COMPANY_NAME}`,
    description:
      "Reliable freight coordination and timely dispatch of edible oils, agricultural seeds, and food commodities.",
    url: `${SITE_URL}/supply-delivery`,
  },
};

const steps = [
  { step: "01", title: "Trade Bargain", desc: "Agreement on volume, grade parameters, price parity, and packing format." },
  { step: "02", title: "Order Confirmation", desc: "Written agreement detailing loading schedules, payment milestones, and terms." },
  { step: "03", title: "Quality Lab Inspection", desc: "Inspection of moisture, FFA, and cleanliness before loading authorization." },
  { step: "04", title: "Allocation & Packaging", desc: "Bulk road tanker filling or palletized bag allocation at designated mills." },
  { step: "05", title: "Transit & Logistics", desc: "Dedicated road freight with live transit coordination and transport bilty." },
  { step: "06", title: "Doorstep Delivery", desc: "Safe unloading at buyer processing plant or regional mandi warehouse." },
];

export default function SupplyDeliveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Nationwide Freight & Fleet"
        title="Disciplined Supply & Tanker Logistics"
        copy="Delivery is structured around the agreed terms of each trade — ensuring timely transit, quality preservation, and complete transparency."
        image="/images/supply-trucks.jpg"
      />

      <Breadcrumbs items={[{ label: "Supply & Delivery" }]} />

      {/* Logistics Overview */}
      <section className="py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <div className="badge-gold mb-3">PAN-India Logistics</div>
            <h2 className="font-display text-3xl text-navy sm:text-4xl md:text-5xl">
              Supply Schedules Aligned to Your Production Timeline
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Supply timelines depend on the terms negotiated for each
              transaction. Deliveries can be structured for current requirements
              or scheduled over an agreed period extending up to approximately
              10–15 days.
            </p>
            <p className="mt-3.5 text-sm leading-relaxed text-muted sm:text-base">
              We partner with trusted fleet operators specializing in edible oil
              tankers (food-grade stainless steel/MS) and dry bulk cargo trucks
              to guarantee contamination-free transit and punctuality.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <EnquireButton className="btn btn-gold text-xs">
                Check Delivery Rates
              </EnquireButton>

              <a
                href={`${WHATSAPP_URL}&text=${encodeURIComponent(
                  "Hello SS OIL AND FIBRES, I want to check delivery turnaround and tanker availability for my location."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700 text-xs"
              >
                💬 Ask on WhatsApp
              </a>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-sm ring-1 ring-line shadow-md">
              <Image
                src="/images/supply-dispatch.jpg"
                alt="Warehouse dispatch of traded commodities - SS OIL AND FIBRES"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6-Step Execution Timeline */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="container-page">
          <div className="max-w-2xl mb-10 text-center sm:text-left">
            <span className="text-[0.7rem] font-bold tracking-[0.2em] text-gold uppercase">
              Operational Sequence
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl">
              From Order Booking to Mill Delivery
            </h2>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((item) => (
              <li
                key={item.title}
                className="border border-white/15 bg-white/5 p-6 rounded-sm backdrop-blur-xs transition-transform hover:-translate-y-1"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
                  Step {item.step}
                </span>
                <h3 className="mt-2 font-display text-2xl text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fleet & Facilities Showcase */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-[0.7rem] font-bold tracking-[0.2em] text-gold uppercase">
              Infrastructure
            </span>
            <h2 className="mt-2 font-display text-3xl text-navy sm:text-4xl">
              Logistics & Handling Infrastructure
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                image: "/images/supply-trucks.jpg",
                label: "Dedicated Road Fleet",
                desc: "10 to 30 MT capacity road tankers and heavy goods vehicles.",
              },
              {
                image: "/images/supply-warehouse.jpg",
                label: "Mandi Storage & Sorting",
                desc: "Hygienic warehouse facilities for dry seeds and grains.",
              },
              {
                image: "/images/shipping.jpg",
                label: "Dispatch Route Planning",
                desc: "Real-time coordination minimizing transit delays across states.",
              },
            ].map((item) => (
              <article
                key={item.label}
                className="card-lift overflow-hidden rounded-sm bg-white ring-1 ring-line shadow-xs"
              >
                <div className="img-zoom relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={`${item.label} - SS OIL AND FIBRES Logistics`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}


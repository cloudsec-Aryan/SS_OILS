import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Supply & Delivery",
  description:
    "Supply timelines depend on negotiated terms. Deliveries may be current or scheduled up to approximately 15 days.",
};

const steps = [
  "Requirement",
  "Negotiation",
  "Order Confirmation",
  "Procurement / Allocation",
  "Transportation",
  "Delivery",
];

export default function SupplyDeliveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Logistics"
        title="Efficient Supply & Delivery"
        copy="Delivery is planned around the agreed terms of each trade — not a one-size schedule."
        image="/images/trucks.jpg"
      />

      <section className="py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-display text-4xl text-navy md:text-5xl">
              Supply follows the bargain
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Supply timelines depend on the terms negotiated for each
              transaction. Deliveries may be arranged for current requirements or
              scheduled over a period that can extend up to approximately 15 days.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We do not treat delivery as a guaranteed clock. Transportation and
              dispatch are coordinated after confirmation, according to the deal
              that has been struck.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/dispatch.jpg"
                alt="Warehouse dispatch of traded goods"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="container-page">
          <h2 className="font-display text-3xl text-white md:text-4xl">
            From requirement to delivery
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step} className="border border-white/15 p-5">
                <p className="text-xs tracking-[0.2em] text-gold uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-display text-2xl text-white">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {[
            { image: "/images/trucks.jpg", label: "Road transportation" },
            { image: "/images/warehouse.jpg", label: "Warehouse coordination" },
            { image: "/images/shipping.jpg", label: "Dispatch planning" },
          ].map((item) => (
            <figure key={item.label} className="overflow-hidden rounded-sm">
              <div className="img-zoom relative aspect-[4/3]">
                <Image src={item.image} alt={item.label} fill className="object-cover" sizes="33vw" />
              </div>
              <figcaption className="mt-3 text-sm text-muted">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

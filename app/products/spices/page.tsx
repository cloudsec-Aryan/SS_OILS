import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { EnquireButton } from "@/components/enquire-button";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Spices",
  description:
    "SS OIL AND FIBRES also deals in the trading of agricultural food commodities and spices.",
};

export default function SpicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Spices"
        title="Spices Trading"
        copy="We also deal in the trading of agricultural food commodities and spices, connecting market requirements with reliable supply."
        image="/images/spices-bowls.jpg"
      />

      <section className="py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-display text-4xl text-navy md:text-5xl">
              Connecting spice demand with supply
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Spice trading sits alongside our edible-oil and agricultural
              commodity activity. Requirements vary by market, season and buyer,
              so we discuss varieties and quantities individually rather than
              publishing an assumed list.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Share the spice, packing preference and quantity you have in mind
              and we will respond according to current trading conditions.
            </p>
            <EnquireButton product="Spices" className="btn btn-gold mt-8">
              Enquire About Spices
            </EnquireButton>
          </FadeIn>
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-2">
              {["/images/spices.jpg", "/images/indian-spices.jpg", "/images/seeds-spices.jpg", "/images/market.jpg"].map(
                (src) => (
                  <div key={src} className="img-zoom relative aspect-square overflow-hidden rounded-sm">
                    <Image src={src} alt="Spices and agricultural food commodities" fill className="object-cover" sizes="25vw" />
                  </div>
                ),
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

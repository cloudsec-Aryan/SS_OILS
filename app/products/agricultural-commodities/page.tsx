import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { agriculturalSeeds } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agricultural Commodities",
  description:
    "Trading in sesame seed, groundnut seed, mustard seed and yellow mustard seed.",
};

const flow = ["Procurement", "Trading", "Transportation", "Delivery"];

export default function AgriculturalCommoditiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Seeds & Commodities"
        title="Agricultural Commodity Trading"
        copy="Sesame, groundnut and mustard seeds sourced through our agricultural trading network."
        image="/images/crops.jpg"
      />

      <section className="py-20">
        <div className="container-page">
          <FadeIn>
            <p className="max-w-3xl text-base leading-relaxed text-muted">
              We trade agricultural seeds according to market conditions and the
              terms of each transaction. Photography and listings below reflect
              the commodities we handle — not production or processing claims.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {agriculturalSeeds.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="container-page grid gap-5 sm:grid-cols-4">
          {flow.map((step, index) => (
            <div key={step} className="border-l border-gold pl-4">
              <p className="text-xs tracking-[0.18em] text-gold uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-display text-3xl text-white">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

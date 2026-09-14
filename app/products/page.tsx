import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import {
  agriculturalSeeds,
  edibleOils,
  foodCommodities,
  spicesProduct,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Catalogue of edible oils, agricultural seeds, sugar, jaggery, cereals, pulses and spices traded by SS OIL AND FIBRES.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A complete trading catalogue"
        copy="Edible oils, agricultural seeds and food commodities sourced and traded according to market requirements."
        image="/images/products-hero.jpg"
      />

      <section className="py-20">
        <div className="container-page">
          <FadeIn>
            <h2 className="font-display text-4xl text-navy">Edible Oils</h2>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {edibleOils.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-page">
          <FadeIn>
            <h2 className="font-display text-4xl text-navy">
              Seeds & Agricultural Commodities
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {agriculturalSeeds.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <FadeIn>
            <h2 className="font-display text-4xl text-navy">Food Commodities</h2>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {foodCommodities.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-page">
          <FadeIn>
            <h2 className="font-display text-4xl text-navy">Spices</h2>
            <p className="mt-3 max-w-2xl text-muted">
              We deal in spices as part of our agricultural food-commodity trading.
              Specific varieties can be discussed according to requirement.
            </p>
          </FadeIn>
          <div className="mt-8 max-w-md">
            <ProductCard product={spicesProduct} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import {
  agriculturalSeeds,
  allProducts,
  COMPANY_NAME,
  edibleOils,
  foodCommodities,
  SITE_URL,
  spicesProduct,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Bulk Products Catalogue | Edible Oils, Seeds & Commodities",
  description:
    "Comprehensive B2B catalogue of wholesale edible oils (Mustard, Soya, Cotton, Rice Bran), agricultural seeds (Sesame, Groundnut), sugar, jaggery, cereals and spices traded by SS OIL AND FIBRES.",
  keywords: [
    "edible oil wholesale catalogue",
    "mustard oil bulk suppliers list",
    "kachi ghani mustard oil wholesale",
    "refined soyabean oil price list",
    "sesame seeds wholesale trader India",
    "groundnut bold seeds bulk rate",
    "jaggery gur wholesale suppliers",
    "B2B commodity trading products India",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: `Products Catalogue | ${COMPANY_NAME}`,
    description:
      "Wholesale supply of edible oils in bulk road tankers and tins, agricultural seeds in bags, and food commodities across India.",
    url: `${SITE_URL}/products`,
  },
};

export default function ProductsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SS OIL AND FIBRES B2B Trading Catalogue",
    description:
      "Wholesale catalogue of edible oils, agricultural seeds, and food commodities.",
    numberOfItems: allProducts.length,
    itemListElement: allProducts.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: p.name,
      description: p.description,
      image: `${SITE_URL}${p.image}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <PageHero
        eyebrow="Trading Catalogue"
        title="Wholesale Commodity & Edible Oil Catalogue"
        copy="Bulk parcels, prompt mandi parity, and flexible dispatch terms across all major edible oils, oilseeds, and commercial food staples."
        image="/images/products-hero.jpg"
      />

      <Breadcrumbs items={[{ label: "Products" }]} />

      {/* Quick Jump Category Pills */}
      <section className="border-b border-line bg-white/70 py-4">
        <div className="container-page flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted">
            Jump to Category:
          </span>
          <div className="flex flex-wrap gap-2">
            <a
              href="#edible-oils"
              className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-xs font-semibold text-navy transition-colors hover:border-gold hover:bg-gold-soft/20"
            >
              Edible Oils (8)
            </a>
            <a
              href="#agricultural-seeds"
              className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-xs font-semibold text-navy transition-colors hover:border-gold hover:bg-gold-soft/20"
            >
              Agricultural Seeds (4)
            </a>
            <a
              href="#food-commodities"
              className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-xs font-semibold text-navy transition-colors hover:border-gold hover:bg-gold-soft/20"
            >
              Food Commodities (4)
            </a>
            <a
              href="#spices"
              className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-xs font-semibold text-navy transition-colors hover:border-gold hover:bg-gold-soft/20"
            >
              Spices
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Edible Oils */}
      <section id="edible-oils" className="py-16 sm:py-20 scroll-mt-20">
        <div className="container-page">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="text-[0.7rem] font-bold tracking-[0.2em] text-gold uppercase">
                  Bulk Tankers & Commercial Packs
                </span>
                <h2 className="mt-1.5 font-display text-3xl text-navy sm:text-4xl md:text-5xl">
                  Edible Oils
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
                  Kachi Ghani mustard, refined soya, cottonseed, and rice bran
                  oils supplied in road tankers (10–30 MT) and 15L tins.
                </p>
              </div>
              <Link
                href="/products/edible-oils"
                className="btn btn-outline-dark shrink-0 text-xs"
              >
                Edible Oils Overview →
              </Link>
            </div>
          </FadeIn>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {edibleOils.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Seeds & Agricultural Commodities */}
      <section
        id="agricultural-seeds"
        className="bg-paper py-16 sm:py-20 scroll-mt-20"
      >
        <div className="container-page">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="text-[0.7rem] font-bold tracking-[0.2em] text-gold uppercase">
                  Mandi Sourced Oilseeds
                </span>
                <h2 className="mt-1.5 font-display text-3xl text-navy sm:text-4xl md:text-5xl">
                  Agricultural Seeds
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
                  High oil-content mustard, sesame (Til), and bold groundnut
                  seeds sourced from agricultural mandis.
                </p>
              </div>
              <Link
                href="/products/agricultural-commodities"
                className="btn btn-outline-dark shrink-0 text-xs"
              >
                Agricultural Seeds Overview →
              </Link>
            </div>
          </FadeIn>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {agriculturalSeeds.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Food Commodities */}
      <section id="food-commodities" className="py-16 sm:py-20 scroll-mt-20">
        <div className="container-page">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="text-[0.7rem] font-bold tracking-[0.2em] text-gold uppercase">
                  Commercial Food Staples
                </span>
                <h2 className="mt-1.5 font-display text-3xl text-navy sm:text-4xl md:text-5xl">
                  Sugar, Jaggery, Cereals & Pulses
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
                  M-30/S-30 refined sugar, natural sugarcane jaggery (gur), and
                  graded cereals & pulses for institutional buyers.
                </p>
              </div>
              <Link
                href="/products/sugar-jaggery-cereals"
                className="btn btn-outline-dark shrink-0 text-xs"
              >
                Food Commodities Overview →
              </Link>
            </div>
          </FadeIn>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {foodCommodities.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Spices */}
      <section id="spices" className="bg-paper py-16 sm:py-20 scroll-mt-20">
        <div className="container-page">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="text-[0.7rem] font-bold tracking-[0.2em] text-gold uppercase">
                  Wholesale Agricultural Food Commodities
                </span>
                <h2 className="mt-1.5 font-display text-3xl text-navy sm:text-4xl md:text-5xl">
                  Spices Trading
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
                  Trading in whole and powdered Indian spices tailored to
                  seasonal harvests and buyer packing specifications.
                </p>
              </div>
              <Link
                href="/products/spices"
                className="btn btn-outline-dark shrink-0 text-xs"
              >
                Spices Overview →
              </Link>
            </div>
          </FadeIn>

          <div className="mt-10 max-w-sm sm:max-w-md">
            <ProductCard product={spicesProduct} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}


import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { EnquireButton } from "@/components/enquire-button";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { agriculturalSeeds, COMPANY_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agricultural Seeds & Commodities | Sesame, Groundnut, Mustard Seeds",
  description:
    "B2B wholesale trading in premium agricultural seeds: Natural & hulled sesame seeds (Til), Bold & Java groundnut seeds, brown mustard seeds, and bold yellow mustard seeds across India.",
  keywords: [
    "sesame seeds wholesale exporter India",
    "natural white sesame seeds bulk",
    "groundnut seeds wholesale supplier",
    "bold peanuts for oil milling",
    "mustard seeds sarson mandi rates",
    "yellow mustard seeds peeli sarson supplier",
    "agricultural commodities trading India",
  ],
  alternates: {
    canonical: "/products/agricultural-commodities",
  },
  openGraph: {
    title: `Agricultural Seeds Trading | ${COMPANY_NAME}`,
    description:
      "Wholesale sesame seeds, groundnut seeds, and crushing grade mustard seeds with verified moisture grading and bulk packing.",
    url: `${SITE_URL}/products/agricultural-commodities`,
  },
};

const flow = [
  { step: "01", name: "APMC Mandi Procurement", desc: "Direct purchase from primary agricultural producer mandis." },
  { step: "02", name: "Quality & Count Inspection", desc: "Grading for moisture content, purity, foreign matter, and seed size." },
  { step: "03", name: "Laminated Bag Packing", desc: "Standard 25kg, 30kg, and 50kg PP/jute bagging as requested." },
  { step: "04", name: "Truckload Transportation", desc: "Direct road transportation to buyer mills or export warehouse." },
];

export default function AgriculturalCommoditiesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Agricultural Seeds Portfolio - SS OIL AND FIBRES",
    description:
      "Commercial trading in sesame, groundnut, and mustard seeds for oil extraction and wholesale consumption.",
    numberOfItems: agriculturalSeeds.length,
    itemListElement: agriculturalSeeds.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow="Oilseeds & Agro Commodities"
        title="Agricultural Seeds & Commodities Trading"
        copy="Natural sesame seeds, bold groundnuts, and crushing-grade mustard seeds sourced directly through our established mandi trading network."
        image="/images/crops.jpg"
      />

      <Breadcrumbs
        items={[
          { label: "Products", href: "/products" },
          { label: "Agricultural Seeds" },
        ]}
      />

      {/* Specifications Strip */}
      <section className="border-b border-line bg-white/60 py-6">
        <div className="container-page grid gap-5 sm:grid-cols-3">
          <div className="border-l-2 border-gold pl-3">
            <p className="text-xs font-bold text-navy uppercase">Bagging Standards</p>
            <p className="mt-1 text-xs text-muted">
              Standard 25kg / 50kg high-density PP bags & food-grade jute sacks.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-3">
            <p className="text-xs font-bold text-navy uppercase">Grading & Purity</p>
            <p className="mt-1 text-xs text-muted">
              Auto-sorted purity up to 99/1 with minimal foreign matter and controlled moisture.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-3">
            <p className="text-xs font-bold text-navy uppercase">Order Execution</p>
            <p className="mt-1 text-xs text-muted">
              Full truckload (FTL) dispatches with guaranteed lot traceability to origin mandis.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <div className="max-w-3xl">
              <span className="text-[0.7rem] font-bold tracking-[0.2em] text-gold uppercase">
                Seed Catalogue
              </span>
              <h2 className="mt-1.5 font-display text-3xl text-navy sm:text-4xl">
                Graded Agricultural Seeds
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Traded according to current mandi arrivals, buyer oil-yield
                parameters, and delivery terms. Select any seed variety below to
                request current lot rates.
              </p>
            </div>
          </FadeIn>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {agriculturalSeeds.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-sm border border-line bg-paper p-5 sm:p-6">
            <div>
              <p className="font-display text-lg text-navy font-semibold">
                Looking for Specific Seed Counts or High Oil Yield Lots?
              </p>
              <p className="text-xs text-muted mt-0.5">
                Contact our commodity trading desk for current mandi arrivals and lot samples.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <EnquireButton product="Sesame Seed" className="btn btn-gold text-xs">
                Enquire for Seeds
              </EnquireButton>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700 text-xs"
              >
                💬 WhatsApp Rates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Sourcing Flow */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="container-page">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-[0.7rem] font-bold tracking-[0.2em] text-gold uppercase">
              Quality Assurance
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              From Mandi Yard to Factory Gate
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((step) => (
              <div
                key={step.name}
                className="border-l-2 border-gold/80 bg-white/5 p-5 backdrop-blur-xs"
              >
                <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">
                  Step {step.step}
                </p>
                <h3 className="mt-2 font-display text-2xl text-white">
                  {step.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Book an Agricultural Seed Bargain"
        copy="Share the seed variety, quantity, and destination mandi to receive today's competitive parity."
      />
    </>
  );
}


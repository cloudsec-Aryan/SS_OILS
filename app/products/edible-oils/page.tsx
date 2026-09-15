import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { EnquireButton } from "@/components/enquire-button";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { COMPANY_NAME, edibleOils, SITE_URL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Edible Oils Wholesale | Kachi Ghani Mustard, Soya & Cotton Oils",
  description:
    "Wholesale bulk supplier of pure Kachi Ghani mustard oil, soya refined oil, cottonseed oil, soya degummed oil, and rice bran oil. Available in road tankers, 200L drums, and 15L tins across India.",
  keywords: [
    "kachi ghani mustard oil wholesale",
    "pure sarson oil bulk supplier India",
    "refined soyabean oil road tankers",
    "cottonseed refined oil bulk price",
    "rice bran oil wholesale trader",
    "yellow mustard oil commercial supply",
    "edible oil wholesale mandi rates",
  ],
  alternates: {
    canonical: "/products/edible-oils",
  },
  openGraph: {
    title: `Edible Oils Wholesale Trading | ${COMPANY_NAME}`,
    description:
      "High pungency Kachi Ghani mustard oil, refined soybean oil, and cottonseed oil supplied in bulk road tankers and commercial packaging.",
    url: `${SITE_URL}/products/edible-oils`,
  },
};

export default function EdibleOilsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Edible Oils Wholesale Range - SS OIL AND FIBRES",
    description:
      "Bulk edible oils traded for commercial food manufacturers and wholesale packaging units.",
    numberOfItems: edibleOils.length,
    itemListElement: edibleOils.map((item, index) => ({
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
        eyebrow="Commercial Edible Oils"
        title="Edible Oils Wholesale & Bulk Trading"
        copy="Matching buyer specifications with trusted mill allocations, competitive mandi parity, and coordinated road tanker dispatch across India."
        image="/images/edible-oils-hero.jpg"
      />

      <Breadcrumbs
        items={[
          { label: "Products", href: "/products" },
          { label: "Edible Oils" },
        ]}
      />

      {/* Specifications & Packaging Strip */}
      <section className="border-b border-line bg-white/60 py-6">
        <div className="container-page grid gap-5 sm:grid-cols-3">
          <div className="border-l-2 border-gold pl-3">
            <p className="text-xs font-bold text-navy uppercase">Packaging Formats</p>
            <p className="mt-1 text-xs text-muted">
              Bulk Road Tankers (10–30 MT), 200L HDPE/Steel Drums, and 15L Standard Tins.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-3">
            <p className="text-xs font-bold text-navy uppercase">Quality Grading</p>
            <p className="mt-1 text-xs text-muted">
              Rigorous laboratory testing for Free Fatty Acids (FFA), Moisture & Pungency.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-3">
            <p className="text-xs font-bold text-navy uppercase">Dispatch Window</p>
            <p className="mt-1 text-xs text-muted">
              Current prompt loading to structured 10–15 day scheduled delivery pipelines.
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
                Product Catalogue
              </span>
              <h2 className="mt-1.5 font-display text-3xl text-navy sm:text-4xl">
                Commercial Edible Oil Varieties
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Our edible-oil trading desk covers raw cold-pressed varieties,
                bleached-deodorized refined oils, and crude degummed fractions.
                Select any oil below to request live market rates.
              </p>
            </div>
          </FadeIn>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {edibleOils.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {/* Quick Action Bar */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-3 rounded-sm border border-line bg-paper p-5 sm:p-6">
            <div className="flex-1 text-center sm:text-left">
              <p className="font-display text-lg text-navy font-semibold">
                Require Custom Pungency or Road Tanker Parcel?
              </p>
              <p className="text-xs text-muted mt-0.5">
                Share your target destination, volume, and specifications for immediate mandi quote.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <EnquireButton product="Kachi Ghani Mustard Oil" className="btn btn-gold text-xs">
                Request Tanker Quote
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

      <CtaBand
        title="Need an Edible Oil Parcel or Tanker Dispatch?"
        copy="Connect with our trading desk to discuss rate parity, delivery destination, and payment terms."
      />
    </>
  );
}


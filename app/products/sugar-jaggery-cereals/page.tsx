import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { EnquireButton } from "@/components/enquire-button";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { COMPANY_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sugar, Jaggery & Cereals Wholesale Trading | SS OIL AND FIBRES",
  description:
    "B2B wholesale trading in commercial food commodities: M-30 / S-30 refined crystal sugar, chemical-free sugarcane jaggery (gur), cereals (wheat, rice), and pulses across India.",
  keywords: [
    "sugar wholesale trader India",
    "refined sugar M-30 S-30 bulk",
    "jaggery gur wholesale supplier",
    "natural sugarcane jaggery blocks",
    "cereals and pulses bulk supplier",
    "wheat lentils trading mandi",
    "commercial food commodities supplier",
  ],
  alternates: {
    canonical: "/products/sugar-jaggery-cereals",
  },
  openGraph: {
    title: `Sugar, Jaggery & Cereals Trading | ${COMPANY_NAME}`,
    description:
      "Wholesale supply of refined crystal sugar, pure jaggery, and staple cereals for commercial food processors and distributors.",
    url: `${SITE_URL}/products/sugar-jaggery-cereals`,
  },
};

const sections = [
  {
    title: "Refined Crystal Sugar",
    product: "Sugar",
    image: "/images/sugar.jpg",
    specs: ["Grades: M-30 & S-30 Mill Direct", "Packing: 50kg Laminated PP Bags", "Sparkling Crystal Clarity"],
    copy: "Sourced directly from certified cooperative and private sugar mills across Maharashtra and Uttar Pradesh. We supply full truckload (FTL) consignments for confectioners, beverage bottlers, and wholesale distributors.",
  },
  {
    title: "Natural Sugarcane Jaggery (Gur)",
    product: "Jaggery",
    image: "/images/jaggery.jpg",
    specs: ["Format: Solid Blocks, Tubs & Granules", "No Chemical Bleaching Agents", "High Natural Mineral Content"],
    copy: "Traditional Indian jaggery (gur) sourced from premier sugarcane belts. Preserving natural molasses aroma and golden texture, supplied for food manufacturers and commercial consumption.",
  },
  {
    title: "Cereals & Pulses",
    product: "Cereals / Pulses",
    image: "/images/lentils.jpg",
    specs: ["Wheat, Rice, Chana, Toor, Moong & Urad", "Uniform Moisture & Density Testing", "Bulk Bagged Delivery"],
    copy: "Screened and graded agricultural cereals and lentils traded across key state mandis. Supplying commercial flour millers, dal millers, and institutional packaging partners.",
  },
];

export default function SugarJaggeryCerealsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sugar, Jaggery & Cereals Portfolio - SS OIL AND FIBRES",
    description: "Commercial trading in sugar, jaggery, cereals and pulses.",
    numberOfItems: sections.length,
    itemListElement: sections.map((s, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: s.title,
      description: s.copy,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow="Commercial Food Commodities"
        title="Sugar, Jaggery & Cereals Trading"
        copy="Staple food commodities traded with strict adherence to contractual grading, mill purity standards, and timely truckload delivery."
        image="/images/wheat.jpg"
      />

      <Breadcrumbs
        items={[
          { label: "Products", href: "/products" },
          { label: "Sugar, Jaggery & Cereals" },
        ]}
      />

      {/* Specifications Strip */}
      <section className="border-b border-line bg-white/60 py-6">
        <div className="container-page grid gap-5 sm:grid-cols-3">
          <div className="border-l-2 border-gold pl-3">
            <p className="text-xs font-bold text-navy uppercase">Direct Mill Allotments</p>
            <p className="mt-1 text-xs text-muted">
              Sourced directly from leading sugar and grain mills with transparent gate parity.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-3">
            <p className="text-xs font-bold text-navy uppercase">Standard Bagging</p>
            <p className="mt-1 text-xs text-muted">
              Supplied in 25kg, 30kg, and 50kg moisture-resistant laminated PP bags.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-3">
            <p className="text-xs font-bold text-navy uppercase">Nationwide Freight</p>
            <p className="mt-1 text-xs text-muted">
              Full truckload dispatch with coordinated logistics to commercial warehouses.
            </p>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <section className="py-16 sm:py-20">
        <div className="container-page space-y-16">
          {sections.map((section, index) => (
            <FadeIn key={section.title}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="img-zoom relative aspect-[5/4] overflow-hidden rounded-sm ring-1 ring-line shadow-md">
                  <Image
                    src={section.image}
                    alt={`${section.title} wholesale trading - SS OIL AND FIBRES`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div>
                  <span className="badge-gold">Commercial Grade</span>
                  <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {section.copy}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-line/60 pt-4 text-xs font-medium text-ink/80">
                    {section.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2">
                        <span className="text-gold font-bold">✔</span> {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <EnquireButton
                      product={section.product}
                      className="btn btn-gold text-xs"
                    >
                      Request Quote
                    </EnquireButton>

                    <a
                      href={`${WHATSAPP_URL}&text=${encodeURIComponent(
                        `Hello, please share wholesale price and availability for ${section.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn border border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700 text-xs"
                    >
                      💬 WhatsApp Rates
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <CtaBand
        title="Need Sugar, Jaggery or Grain Consignments?"
        copy="Contact our commercial food desk to discuss lot size, dispatch schedule, and payment terms."
      />
    </>
  );
}


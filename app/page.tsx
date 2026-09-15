import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { EnquireButton } from "@/components/enquire-button";
import { FadeIn } from "@/components/fade-in";
import { FaqSection } from "@/components/faq-section";
import { HomeEnquiryPrompt } from "@/components/home-enquiry-prompt";
import { ProductCard } from "@/components/product-card";
import {
  edibleOils,
  agriculturalSeeds,
  foodCommodities,
  productCategories,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site";

const stats = [
  { value: "40+ Years", label: "Market Heritage", sub: "Since 1980s in Commodity Mandis" },
  { value: "2nd Gen", label: "Trading Expertise", sub: "In-Depth Demand & Supply Parity" },
  { value: "Up to 15 Days", label: "Scheduled Delivery", sub: "Flexible Bargain Execution" },
  { value: "PAN India", label: "Logistics Network", sub: "Road Tankers, Drums & Bags" },
];

const sourcing = [
  {
    title: "Mandi Procurement",
    image: "/images/farm.jpg",
    desc: "Direct farm & APMC mandi sourcing across core agricultural production belts.",
  },
  {
    title: "Quality & Lab Grading",
    image: "/images/produce.jpg",
    desc: "Rigorous inspection of moisture levels, FFA, and oil extraction yields.",
  },
  {
    title: "Commercial Trading",
    image: "/images/market.jpg",
    desc: "Transparent price discovery, competitive parity, and contract bargains.",
  },
  {
    title: "Batch Packaging",
    image: "/images/business.jpg",
    desc: "Bulk road tankers (10–30 MT), 200L drums, 15L tins, and 50kg bags.",
  },
  {
    title: "Prompt Dispatch",
    image: "/images/dispatch.jpg",
    desc: "Coordinated freight network ensuring timely arrival at buyer facilities.",
  },
];

const reasons = [
  {
    title: "40+ Years Market Heritage",
    copy: "Built on parental experience and continued through the second generation, bringing unmatched market instinct and integrity.",
  },
  {
    title: "Direct Mandi & Mill Allocation",
    copy: "We source directly from crushing mills and agricultural mandis, ensuring competitive pricing and unadulterated quality.",
  },
  {
    title: "Comprehensive Edible Oil Range",
    copy: "From pungent Kachi Ghani mustard oil to light refined soya, cottonseed, and high-oryzanol rice bran oil for commercial buyers.",
  },
  {
    title: "Strict Quality Parameters",
    copy: "Commercial testing for FFA, moisture content, pungency, and shelf-stability to meet food processor requirements.",
  },
  {
    title: "Flexible Bargain Timelines",
    copy: "Delivery schedules arranged according to negotiated terms, ranging from prompt spot dispatch to scheduled 10–15 day pipelines.",
  },
  {
    title: "Reliable B2B Communication",
    copy: "Direct access to our trading desk via phone and WhatsApp with prompt updates on market fluctuations and dispatch milestones.",
  },
];

const trustCards = [
  {
    title: "Commercial Food Processors",
    desc: "Supplying bulk refined oils, seeds, and pulses to food manufacturers and bakeries.",
    image: "/images/partnership.jpg",
  },
  {
    title: "Wholesale Mandi Distributors",
    desc: "Long-term relationships with commodity traders and wholesale parcel dealers.",
    image: "/images/business.jpg",
  },
  {
    title: "Dedicated Storage & Logistics",
    desc: "Coordinated dispatch with verified tanker transport operators across India.",
    image: "/images/warehouse.jpg",
  },
];

export default function HomePage() {
  // Select 4 star products for instant showcase
  const featuredProducts = [
    edibleOils[0], // Kachi Ghani Mustard Oil
    edibleOils[2], // Soya Refined Oil
    agriculturalSeeds[0], // Sesame Seed
    foodCommodities[1], // Jaggery
  ];

  return (
    <>
      <HomeEnquiryPrompt />

      {/* Hero Section */}
      <section className="relative isolate min-h-[92svh] overflow-hidden bg-navy-deep sm:min-h-[85vh]">
        <Image
          src="/images/hero.jpg"
          alt="Golden pure edible oil being poured - SS OIL AND FIBRES bulk edible oil and agricultural commodity wholesale trading"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/40" />

        <div className="hero-copy container-page relative flex min-h-[92svh] flex-col justify-center py-16 sm:min-h-[85vh] sm:py-20">
          {/* Trust Badge */}
          <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-gold/40 bg-navy-deep/80 px-3.5 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="text-[0.66rem] font-bold tracking-[0.18em] text-gold uppercase sm:text-xs">
              40+ Years of Trading Heritage • PAN India Bulk Supply
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl font-display text-3xl leading-[1.12] text-white sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl">
            Edible Oil Wholesale & Agricultural Commodity Trading
          </h1>

          <p className="mt-3.5 max-w-2xl text-base font-medium text-gold-soft sm:mt-4 sm:text-xl">
            Pure Mustard Oil • Soya Refined Oil • Cottonseed Oil • Sesame Seeds • Sugar & Jaggery
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base">
            Backed by decades of market presence and second-generation trading
            expertise, <strong>SS OIL AND FIBRES</strong> connects commercial
            buyers, millers, and food processors with reliable sourcing,
            competitive mandi parity, and coordinated nationwide dispatch.
          </p>

          {/* Action CTAs */}
          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center sm:flex-wrap">
            <EnquireButton className="btn btn-gold w-full sm:w-auto shadow-lg shadow-gold/15">
              Request Mandi Rates
            </EnquireButton>

            <Link href="/products" className="btn btn-outline w-full sm:w-auto">
              Explore 17+ Products
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn flex items-center justify-center gap-2 border border-emerald-500 bg-emerald-600/90 text-white hover:bg-emerald-600 w-full sm:w-auto"
            >
              <span>💬 Instant WhatsApp Quote</span>
            </a>
          </div>
        </div>
      </section>

      {/* Key Metrics / Stats Ticker */}
      <section className="border-y border-gold/30 bg-navy py-6 text-white sm:py-8">
        <div className="container-page grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-l-2 border-gold pl-3.5 sm:pl-5"
            >
              <p className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs font-semibold tracking-wider text-gold uppercase sm:text-[0.8rem]">
                {stat.label}
              </p>
              <p className="mt-0.5 text-[0.7rem] text-white/60 sm:text-xs">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
                  Top Traded Commodities
                </p>
                <h2 className="mt-2 font-display text-3xl text-navy sm:text-4xl md:text-5xl">
                  Featured B2B Products
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  Direct mill allocation, high pungency grades, and bulk delivery
                  options tailored for commercial buyers.
                </p>
              </div>
              <Link href="/products" className="btn btn-outline-dark shrink-0">
                View All Products →
              </Link>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Trading Portfolios
            </p>
            <h2 className="mt-2.5 max-w-3xl font-display text-3xl text-navy sm:text-4xl md:text-5xl">
              Commercial Sourcing Across Oils, Seeds & Food Commodities
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Whether you need bulk road tankers of refined edible oils or graded
              bagged agricultural seeds, we match specifications to buyer demand.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {productCategories.map((category, index) => (
              <FadeIn key={category.title} delay={index * 80}>
                <article className="card-lift flex h-full flex-col overflow-hidden rounded-sm bg-white ring-1 ring-line">
                  <div className="img-zoom relative h-56">
                    <Image
                      src={category.image}
                      alt={`${category.title} bulk trading - SS OIL AND FIBRES`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge-navy bg-white/95 text-[0.65rem] font-bold">
                        {category.tagline}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {category.description}
                    </p>
                    <ul className="mt-4 space-y-1.5 border-t border-line/60 pt-4 text-xs font-medium text-ink/80">
                      {category.items.slice(0, 5).map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span className="text-gold font-bold">•</span> {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={category.href}
                      className="btn btn-outline-dark mt-6 self-start text-xs"
                    >
                      View Category Products →
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing & Quality Network */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Procurement & Supply Chain
            </p>
            <h2 className="mt-2.5 font-display text-3xl text-navy sm:text-4xl md:text-5xl">
              End-to-End Mandi & Mill Sourcing
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
              We work closely with primary crushing mills, mandi farmers, and
              freight partners across India to source commodities strictly
              aligned to contractual grade, moisture limits, and dispatch schedules.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sourcing.map((item, index) => (
              <FadeIn key={item.title} delay={index * 50}>
                <article className="overflow-hidden rounded-sm bg-white ring-1 ring-line">
                  <div className="img-zoom relative h-40">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="20vw"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[0.62rem] font-bold text-gold uppercase">
                      Stage 0{index + 1}
                    </span>
                    <h3 className="mt-1 text-sm font-bold tracking-wide text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step B2B Trade & Delivery Timeline */}
      <section className="relative isolate overflow-hidden bg-navy-deep py-20 text-white">
        <Image
          src="/images/trucks.jpg"
          alt="Commodity transportation trucks for edible oils and seeds"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />

        <div className="container-page relative">
          <FadeIn>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Logistics & Execution
            </p>
            <h2 className="mt-2 max-w-3xl font-display text-3xl text-white sm:text-4xl md:text-5xl">
              From Deal Bargain to Doorstep Delivery
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Timelines are planned around the agreed terms of each transaction.
              Deliveries range from prompt current dispatches up to 10–15 day
              structured supply windows.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                name: "Trade Bargain",
                desc: "Agree on product quantity, grade parameters, rate parity, and packaging type.",
              },
              {
                step: "02",
                name: "Order Confirmation",
                desc: "Written bargain confirmation with payment milestones and delivery dates.",
              },
              {
                step: "03",
                name: "Allocation & QA",
                desc: "Mill/mandi allocation, lot inspection for purity, FFA, and moisture.",
              },
              {
                step: "04",
                name: "Tanker Dispatch",
                desc: "Road tanker or truckload dispatch with live transit tracking to buyer depot.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-sm border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
                  Step {s.step}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-white">
                  {s.name}
                </p>
                <p className="mt-2.5 text-xs leading-relaxed text-white/75 sm:text-sm">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Trading Heritage & Reliability
            </p>
            <h2 className="mt-2 font-display text-3xl text-navy sm:text-4xl md:text-5xl">
              Why Commercial Buyers Trust Us
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <FadeIn key={reason.title} delay={index * 50}>
                <article className="h-full rounded-sm bg-white p-7 ring-1 ring-line">
                  <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2.5 font-display text-2xl text-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {reason.copy}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Trust Cards */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="container-page">
          <FadeIn>
            <h2 className="font-display text-3xl text-navy sm:text-4xl md:text-5xl">
              Building Enduring Commercial Relationships
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              We partner with businesses that value disciplined communication,
              transparent contract terms, and consistent trade execution.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {trustCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-sm bg-white ring-1 ring-line shadow-xs"
              >
                <div className="img-zoom relative h-52">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    {card.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section with JSON-LD Schema */}
      <FaqSection
        title="B2B Trading & Procurement FAQs"
        eyebrow="Answers for Commercial Buyers"
        description="Clear details on minimum orders, bulk packaging, delivery schedules, and price discovery."
      />

      <CtaBand
        title="Discuss Your Commodity Requirement"
        copy={`Contact our trading desk at ${PHONE_DISPLAY} or send an enquiry for today's market rates.`}
      />
    </>
  );
}


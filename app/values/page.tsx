import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { COMPANY_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Values & Ethics | Transparent B2B Commodity Trading",
  description:
    "Explore the guiding values of SS OIL AND FIBRES: 40+ years of integrity, reliable bargain execution, disciplined logistics, and long-term customer partnerships in edible oils and agro commodities.",
  keywords: [
    "trading ethics commodity market",
    "reliable edible oil supplier India",
    "transparent mandi trading standards",
    "second generation business values",
    "SS OIL AND FIBRES values",
  ],
  alternates: {
    canonical: "/values",
  },
  openGraph: {
    title: `Our Values | ${COMPANY_NAME}`,
    description:
      "A second-generation trading house judged by consistency, transparency, and dependable execution in every trade.",
    url: `${SITE_URL}/values`,
  },
};

const values = [
  {
    title: "40+ Years Market Heritage",
    copy: "Decades of deep market immersion guide how we evaluate crop arrivals, negotiate crushing parity, and structure balanced trade bargains.",
  },
  {
    title: "Contractual Reliability",
    copy: "In wholesale commodity trading, word and contract are paramount. We honor agreed prices, specifications, and supply commitments with integrity.",
  },
  {
    title: "Disciplined Timely Supply",
    copy: "We coordinate dedicated road tankers and truckload freight to ensure scheduled arrival within the negotiated 10–15 day pipeline.",
  },
  {
    title: "Dynamic Market Understanding",
    copy: "The ability to read shifts in crop availability, import tariffs, festive demand, and mandi sentiment protects our buyers from volatility.",
  },
  {
    title: "Enduring B2B Partnerships",
    copy: "We cultivate enduring relationships across decades rather than short-term opportunistic deals, acting as a dependable supply chain pillar.",
  },
  {
    title: "Transparent Communication",
    copy: "Direct access to our trading desk, clear grade reporting, prompt delivery updates, and straightforward commercial settlement.",
  },
];

export default function ValuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrity & Principles"
        title="How We Conduct Trading Relationships"
        copy="A second-generation trading enterprise is defined by consistency, transparency, and dependability in every deal struck."
        image="/images/values-hero.jpg"
      />

      <Breadcrumbs items={[{ label: "Our Values" }]} />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-[0.72rem] font-semibold tracking-[0.2em] text-gold uppercase">
              Core Principles
            </span>
            <h2 className="mt-2 font-display text-3xl text-navy sm:text-4xl md:text-5xl">
              Principles Behind Every Bargain
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 50}>
                <article className="card-lift h-full rounded-sm bg-white p-7 ring-1 ring-line shadow-xs">
                  <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2.5 font-display text-2xl text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {value.copy}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <div className="container-page max-w-4xl">
          <FadeIn>
            <span className="text-[0.72rem] font-semibold tracking-[0.2em] text-gold uppercase">
              Market Perspective
            </span>
            <h2 className="mt-2 font-display text-3xl text-navy sm:text-4xl md:text-5xl">
              Understanding Market Dynamics
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Agricultural and edible-oil markets experience continuous price and
              supply fluctuations. Weather conditions, regional crop yields,
              crushing parity, and festive consumption shift availability across
              mandi corridors.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              For this reason, trading bargains and dispatch schedules are
              structured with precision according to current market realities
              rather than theoretical promises — ensuring both buyers and sellers
              operate on clear, dependable ground.
            </p>
          </FadeIn>
        </div>
      </section>

      <CtaBand />
    </>
  );
}


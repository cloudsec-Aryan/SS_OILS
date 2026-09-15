import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { COMPANY_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | 40+ Years of Trading Heritage",
  description:
    "Learn about SS OIL AND FIBRES: Built on 40+ years of parental agricultural trading heritage and continued through second-generation expertise in edible oils and commodities across India.",
  keywords: [
    "about SS OIL AND FIBRES",
    "edible oil trading house India",
    "second generation commodity traders",
    "agricultural trading company history",
    "mustard oil traders Haryana Rajasthan India",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Us | ${COMPANY_NAME}`,
    description:
      "40+ years of parental industry foundation and second-generation trading leadership in edible oils and agricultural commodities.",
    url: `${SITE_URL}/about`,
  },
};

const pillars = [
  {
    title: "Parental Business Foundation",
    copy: "Our roots trace back through decades of active participation in India's agricultural mandi ecosystem, mastering crop cycles, seed yields, and oil extraction dynamics.",
  },
  {
    title: "Second-Generation Leadership",
    copy: "Continuing that parental legacy with modern trade execution, transparent commercial contracting, digital communication, and prompt financial settlement.",
  },
  {
    title: "Edible Oil Trading Specialty",
    copy: "Handling high-volume transactions in Kachi Ghani mustard oil, soya refined oil, cottonseed oil, and rice bran oil in tankers and commercial packs.",
  },
  {
    title: "Agricultural Commodity Network",
    copy: "Deep supplier relationships across major mandis for sesame seeds (white & black), groundnut seeds, yellow mustard, and black mustard seeds.",
  },
  {
    title: "Dynamic Market Parity Analysis",
    copy: "Decisions are guided by real-time mandi bhav tracking, crushing parity, festive demand spikes, and government tariff fluctuations.",
  },
  {
    title: "Sustainable Long-Term Relationships",
    copy: "We treat counterparties as long-term partners, prioritizing honest grading and consistent bargain fulfilment over quick opportunistic gains.",
  },
  {
    title: "Disciplined Supply & Logistics",
    copy: "Coordinating dedicated road tankers, container transport, and prompt transit tracking to ensure goods arrive safely at processing plants.",
  },
  {
    title: "Strict Contractual Integrity",
    copy: "Every deal negotiated reflects verified quality specifications, clear payment milestones, and agreed delivery windows without ambiguity.",
  },
];

const timeline = [
  { era: "1980s – 1990s", title: "First Generation", desc: "Foundational roots in regional agricultural mandis and seed trading." },
  { era: "2000s – 2010s", title: "Industry Deepening", desc: "Expansion into bulk edible oil parcels, mill allocations, and tanker logistics." },
  { era: "2015 – Present", title: "Second Generation", desc: "Modernized trading approach, PAN India network, and diversified food commodities." },
  { era: "Future Vision", title: "Continued Growth", desc: "Strengthening supply chains with tech-driven dispatch and trusted B2B relationships." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company Heritage"
        title="Experience Built Across Generations"
        copy="Combining 40+ years of traditional mandi knowledge with second-generation commercial precision in edible oils and agricultural commodities."
        image="/images/farmer.jpg"
      />

      <Breadcrumbs items={[{ label: "About Us" }]} />

      <section className="py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <div className="badge-gold mb-3">Est. Over 4 Decades of Experience</div>
            <h2 className="font-display text-3xl text-navy sm:text-4xl md:text-5xl">
              An Established Trading House with Deep Market Wisdom
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              <strong>SS OIL AND FIBRES</strong> is built on an enduring legacy of
              agricultural commodity and edible oil trading. With over 40 years of
              market presence and active second-generation involvement, we unite
              traditional crop expertise with structured modern trade execution.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              We operate purely as a specialized trading, sourcing, and logistics
              house — prioritizing verified quality selection, competitive parity,
              and coordinated dispatch over manufacturing constraints.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-sm ring-1 ring-line shadow-md">
              <Image
                src="/images/fields.jpg"
                alt="Lush agricultural mustard and crop fields representing long-term commodity sourcing - SS OIL AND FIBRES"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline Journey */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="container-page">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-[0.7rem] font-bold tracking-[0.2em] text-gold uppercase">
              Decades of Evolution
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Our Journey Across Generations
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <div
                key={item.title}
                className="border-t-2 border-gold/70 pt-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-gold uppercase">
                    0{index + 1}
                  </span>
                  <span className="text-[0.68rem] text-white/50">{item.era}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of Operation */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-gold uppercase">
              How We Operate
            </p>
            <h2 className="mt-2 font-display text-3xl text-navy sm:text-4xl md:text-5xl">
              Pillars of Our Trading Philosophy
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="card-lift rounded-sm bg-white p-6 ring-1 ring-line shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                    {pillar.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}


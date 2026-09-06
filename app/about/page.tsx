import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SS OIL AND FIBRES is built on decades of agricultural commodity and edible oil trading experience, continued through the second generation.",
};

const pillars = [
  {
    title: "Parental business experience",
    copy: "The foundation of our work comes from first-generation involvement in the trading ecosystem.",
  },
  {
    title: "Second-generation continuation",
    copy: "That experience continues today through the second generation, with a practical and modern approach to business.",
  },
  {
    title: "Agricultural commodity trading",
    copy: "We trade seeds and related agricultural commodities according to market demand and negotiated terms.",
  },
  {
    title: "Edible oil trading",
    copy: "Our edible-oil activity covers mustard, soya, cotton and rice bran oils for commercial buyers.",
  },
  {
    title: "Market understanding",
    copy: "Trading decisions are informed by a close reading of demand, supply and changing market conditions.",
  },
  {
    title: "Customer relationships",
    copy: "We focus on clear communication and relationships that can continue beyond a single transaction.",
  },
  {
    title: "Supply coordination",
    copy: "Once terms are agreed, we coordinate procurement, allocation and dispatch to the delivery schedule.",
  },
];

const timeline = [
  "First Generation",
  "Industry Experience",
  "Second Generation",
  "Continued Growth",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Experience Built Across Generations"
        copy="Our business is built on decades of experience in agricultural commodity and edible oil trading."
        image="/images/farmer.jpg"
      />

      <section className="py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-display text-4xl text-navy md:text-5xl">
              A trading house with inherited market knowledge
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Our business is built on decades of experience in agricultural
              commodity and edible oil trading. With approximately 26–40 years of
              working experience and second-generation involvement, we combine
              traditional market knowledge with a modern approach to business.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We are an agricultural commodity and edible oil trading company —
              focused on sourcing, trading and coordinated supply rather than
              manufacturing.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/fields.jpg"
                alt="Agricultural landscape representing long-term commodity trading"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <div key={item} className="border-t border-gold pt-5">
              <p className="text-xs tracking-[0.2em] text-gold uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-display text-2xl text-white">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-5 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-sm bg-white p-7 ring-1 ring-line">
              <h3 className="font-display text-2xl text-navy">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

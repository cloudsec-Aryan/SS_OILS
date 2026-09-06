import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Our Values",
  description:
    "Experience, reliability, timely supply, market understanding and professional trading.",
};

const values = [
  {
    title: "Experience",
    copy: "Decades of practical market experience inform how we source, negotiate and supply.",
  },
  {
    title: "Reliability",
    copy: "Consistent and professional business dealing is central to how we work with counterparties.",
  },
  {
    title: "Timely Supply",
    copy: "We commit to coordinating deliveries according to the schedules agreed in each trade.",
  },
  {
    title: "Market Understanding",
    copy: "The ability to navigate changing market conditions is part of everyday trading work.",
  },
  {
    title: "Long-Term Relationships",
    copy: "We focus on sustainable business relationships rather than one-off transactions alone.",
  },
  {
    title: "Professional Trading",
    copy: "Clear communication and disciplined execution guide how requirements are handled.",
  },
];

export default function ValuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Values"
        title="How we conduct trading relationships"
        copy="A second-generation trading business is judged by consistency more than slogans."
        image="/images/business.jpg"
      />

      <section className="py-20">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 50}>
              <article className="h-full rounded-sm bg-white p-8 ring-1 ring-line">
                <p className="text-xs tracking-[0.2em] text-gold uppercase">
                  0{index + 1}
                </p>
                <h2 className="mt-3 font-display text-3xl text-navy">{value.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">{value.copy}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-page max-w-4xl">
          <FadeIn>
            <h2 className="font-display text-4xl text-navy md:text-5xl">
              Understanding the Market
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Agricultural and edible-oil markets can experience fluctuations.
              Prices, availability and logistics shift with season, demand and
              wider trading conditions. For that reason, trading decisions and
              delivery arrangements depend on market conditions and the terms
              negotiated for each transaction — not on a single fixed promise.
            </p>
          </FadeIn>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { EnquireButton } from "@/components/enquire-button";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Sugar, Jaggery & Cereals",
  description:
    "Trading and supply of sugar, jaggery, cereals and pulses.",
};

const sections = [
  {
    title: "Sugar",
    product: "Sugar",
    image: "/images/sugar.jpg",
    copy: "Trading and supply of sugar, arranged according to the terms negotiated for each transaction.",
  },
  {
    title: "Jaggery",
    product: "Jaggery",
    image: "/images/jaggery.jpg",
    copy: "Trading of jaggery (gur) for commercial and market requirements.",
  },
  {
    title: "Cereals & Pulses",
    product: "Cereals / Pulses",
    image: "/images/lentils.jpg",
    copy: "Trading of cereals and pulses as part of our food-commodity activity.",
  },
];

export default function SugarJaggeryCerealsPage() {
  return (
    <>
      <PageHero
        eyebrow="Food Commodities"
        title="Sugar, Jaggery & Cereals"
        copy="Food commodities traded with the same emphasis on clear terms and coordinated supply."
        image="/images/wheat.jpg"
      />

      <section className="py-20">
        <div className="container-page space-y-16">
          {sections.map((section, index) => (
            <FadeIn key={section.title}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="img-zoom relative aspect-[5/4] overflow-hidden rounded-sm">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
                <div>
                  <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-gold uppercase">
                    Trading
                  </p>
                  <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">
                    {section.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    {section.copy}
                  </p>
                  <EnquireButton product={section.product} className="btn btn-outline-dark mt-7">
                    Enquire
                  </EnquireButton>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

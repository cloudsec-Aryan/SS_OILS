"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/site";
import { FadeIn } from "@/components/fade-in";

export function FaqSection({
  title = "Frequently Asked Questions",
  eyebrow = "Wholesale & Trading Queries",
  description = "Get quick clarity on trading terms, packaging, minimum orders, and supply timelines.",
}: {
  title?: string;
  eyebrow?: string;
  description?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((curr) => (curr === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="bg-paper py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-page max-w-4xl">
        <FadeIn>
          <div className="text-center">
            {eyebrow ? (
              <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-2.5 font-display text-3xl text-navy sm:text-4xl md:text-5xl">
              {title}
            </h2>
            {description ? (
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {description}
              </p>
            ) : null}
          </div>
        </FadeIn>

        <div className="mt-12 space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={item.question} delay={index * 40}>
                <div
                  className={`overflow-hidden rounded-sm border transition-all duration-200 ${
                    isOpen
                      ? "border-gold/60 bg-white shadow-sm"
                      : "border-line bg-white/80 hover:border-gold/30 hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors sm:p-6"
                  >
                    <span className="font-display text-lg font-semibold text-navy sm:text-xl">
                      {item.question}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-base font-medium transition-all ${
                        isOpen
                          ? "border-gold bg-gold text-navy-deep rotate-45"
                          : "border-line bg-cream text-muted"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="border-t border-line/50 px-5 pt-3 pb-6 text-sm leading-relaxed text-muted sm:px-6 sm:text-base">
                      {item.answer}
                    </div>
                  ) : null}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

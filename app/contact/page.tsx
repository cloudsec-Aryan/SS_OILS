import type { Metadata } from "next";
import { EnquireButton } from "@/components/enquire-button";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { COMPANY_NAME, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${COMPANY_NAME} on ${PHONE_DISPLAY} to discuss edible oil or agricultural commodity requirements.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        copy="Have a requirement for edible oils, agricultural seeds or other commodities? Connect with us to discuss your trading requirement."
        image="/images/partnership.jpg"
      />

      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <div className="rounded-sm bg-white p-8 ring-1 ring-line md:p-12">
              <h2 className="font-display text-4xl text-navy">Speak with our team</h2>
              <p className="mt-4 max-w-xl text-muted">
                Share the commodity, quantity and preferred timeline. We will
                respond according to current trading conditions.
              </p>
              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="text-[0.72rem] font-semibold tracking-[0.18em] text-gold uppercase">
                    Phone
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="font-display text-4xl text-navy hover:text-brand-blue"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-10 flex flex-wrap gap-3">
                <EnquireButton className="btn btn-gold">Send Enquiry</EnquireButton>
                <EnquireButton className="btn btn-outline-dark">Contact Us</EnquireButton>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="rounded-sm bg-navy p-8 text-white md:p-12">
              <h2 className="font-display text-3xl">What to include</h2>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-white/75">
                <li>— Product or commodity of interest</li>
                <li>— Approximate quantity</li>
                <li>— Preferred delivery window</li>
                <li>— Company name and a reachable phone number</li>
              </ul>
              <p className="mt-8 text-sm text-white/60">
                Email and office address will be published here once they are
                confirmed.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

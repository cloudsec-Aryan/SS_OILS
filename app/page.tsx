import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { EnquireButton } from "@/components/enquire-button";
import { FadeIn } from "@/components/fade-in";
import { HomeEnquiryPrompt } from "@/components/home-enquiry-prompt";
import { productCategories } from "@/lib/site";

const stats = [
  { value: "40+ Years", label: "Industry Experience" },
  { value: "2nd Generation", label: "Trading Expertise" },
  { value: "Up to 15 Days", label: "Typical Supply Window" },
  { value: "Reliable", label: "Timely Supply" },
];

const sourcing = [
  { title: "Agricultural Procurement", image: "/images/farm.jpg" },
  { title: "Quality Selection", image: "/images/produce.jpg" },
  { title: "Market Trading", image: "/images/market.jpg" },
  { title: "Order Coordination", image: "/images/business.jpg" },
  { title: "Timely Dispatch", image: "/images/dispatch.jpg" },
];

const reasons = [
  {
    title: "Decades of Experience",
    copy: "Backed by approximately 26–40 years of working experience in the trading ecosystem.",
  },
  {
    title: "Second-Generation Expertise",
    copy: "Built on parental experience and continued through the second generation.",
  },
  {
    title: "Market Understanding",
    copy: "Strong understanding of market fluctuations, demand, supply and trading conditions.",
  },
  {
    title: "Timely Supply",
    copy: "We focus on coordinating deliveries according to agreed trading terms.",
  },
  {
    title: "Flexible Delivery",
    copy: "Supply timelines depend on the agreed bargain/deal and can range from current delivery to approximately 10–15 days.",
  },
  {
    title: "Reliable Business Approach",
    copy: "Professional communication, transparent dealing and long-term business relationships.",
  },
];

const trustCards = [
  { title: "Our Valued Customers", image: "/images/partnership.jpg" },
  { title: "Long-Term Business Relationships", image: "/images/business.jpg" },
  { title: "Trusted Trading Partnerships", image: "/images/warehouse.jpg" },
];

export default function HomePage() {
  return (
    <>
      <HomeEnquiryPrompt />
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-navy-deep sm:min-h-[88vh]">
        <Image
          src="/images/hero.jpg"
          alt="Golden edible oil being poured, representing oil and agricultural commodity trading"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy/30" />
        <div className="hero-copy container-page relative flex min-h-[100svh] flex-col justify-center py-20 sm:min-h-[88vh] sm:py-24">
          <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-gold uppercase sm:text-[0.75rem] sm:tracking-[0.28em]">
            Agricultural Commodity & Edible Oil Trading
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-[2rem] leading-[1.1] text-white sm:mt-4 sm:text-6xl lg:text-7xl">
            Trusted Trading in Edible Oils & Agricultural Commodities
          </h1>
          <p className="mt-4 max-w-xl text-base text-gold-soft sm:mt-5 sm:text-lg">
            Reliable sourcing. Competitive trading. Timely supply.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-base">
            With decades of market experience and second-generation expertise, we
            trade a wide range of edible oils and agricultural commodities with a
            strong focus on reliability, quality and timely delivery.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link href="/products" className="btn btn-gold w-full sm:w-auto">
              Explore Products
            </Link>
            <EnquireButton className="btn btn-outline w-full sm:w-auto">Contact Us</EnquireButton>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="container-page grid gap-6 py-7 sm:grid-cols-2 sm:gap-8 sm:py-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-gold/50 pl-4">
              <p className="font-display text-2xl text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[0.72rem] tracking-[0.16em] text-white/60 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <FadeIn>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Product Categories
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl text-navy md:text-5xl">
              Oils, seeds and food commodities for commercial trade
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {productCategories.map((category, index) => (
              <FadeIn key={category.title} delay={index * 80}>
                <article className="card-lift flex h-full flex-col overflow-hidden rounded-sm bg-white ring-1 ring-line">
                  <div className="img-zoom relative h-56">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-3xl text-navy">{category.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {category.description}
                    </p>
                    <ul className="mt-4 space-y-1 text-sm text-ink/80">
                      {category.items.slice(0, 5).map((item) => (
                        <li key={item}>— {item}</li>
                      ))}
                    </ul>
                    <Link href={category.href} className="btn btn-outline-dark mt-6 self-start">
                      View Products
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-page">
          <FadeIn>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Sourcing
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">
              Strong Agricultural Sourcing Network
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
              We work closely with suppliers and market participants to source
              agricultural commodities and edible oils according to trading
              requirements, market conditions and delivery schedules.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sourcing.map((item, index) => (
              <FadeIn key={item.title} delay={index * 60}>
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
                  <h3 className="p-4 text-sm font-semibold tracking-wide text-navy">
                    {item.title}
                  </h3>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <FadeIn>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">
              An established trading approach
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <FadeIn key={reason.title} delay={index * 50}>
                <article className="h-full rounded-sm bg-white p-7 ring-1 ring-line">
                  <p className="text-[0.7rem] tracking-[0.2em] text-gold uppercase">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-navy">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{reason.copy}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy-deep py-24">
        <Image
          src="/images/trucks.jpg"
          alt="Trucks used for commodity transportation and dispatch"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="container-page relative">
          <FadeIn>
            <h2 className="max-w-3xl font-display text-4xl text-white md:text-6xl">
              From Trade to Timely Delivery
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
              Our business is focused on delivering traded goods to customers
              through coordinated transportation and dispatch. Delivery schedules
              are planned according to the agreed terms of each transaction.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            {["Trade", "Confirm", "Dispatch", "Deliver"].map((step, index) => (
              <div key={step} className="border border-white/20 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-xs tracking-[0.2em] text-gold uppercase">
                  Step 0{index + 1}
                </p>
                <p className="mt-2 font-display text-3xl text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <FadeIn>
            <h2 className="font-display text-4xl text-navy md:text-5xl">
              Trusted by Our Customers
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              We work with businesses that value consistent communication and
              dependable trading relationships.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {trustCards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-sm bg-white ring-1 ring-line">
                <div className="img-zoom relative h-52">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <h3 className="p-5 font-display text-2xl text-navy">{card.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

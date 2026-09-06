import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { EnquireButton } from "@/components/enquire-button";
import { FadeIn } from "@/components/fade-in";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { edibleOils } from "@/lib/site";

export const metadata: Metadata = {
  title: "Edible Oils",
  description:
    "Trading in mustard oil, kachi ghani mustard oil, soya refined oil, cotton oils and rice bran oil.",
};

export default function EdibleOilsPage() {
  return (
    <>
      <PageHero
        eyebrow="Edible Oils"
        title="Edible Oils Trading"
        copy="We trade a diverse range of edible oils serving the requirements of businesses across the food and agricultural trading ecosystem."
        image="/images/oil-glass.jpg"
      />

      <section className="py-20">
        <div className="container-page">
          <FadeIn>
            <p className="max-w-3xl text-base leading-relaxed text-muted">
              Our edible-oil activity is focused on trading — matching buyer
              requirements with available supply, quality expectations and
              agreed delivery terms.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {edibleOils.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-12">
            <EnquireButton product="Mustard Oil" className="btn btn-gold">
              Enquire About Edible Oils
            </EnquireButton>
          </div>
        </div>
      </section>

      <CtaBand title="Need an edible oil parcel?" copy="Share the oil type, quantity and preferred timeline." />
    </>
  );
}

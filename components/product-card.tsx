"use client";

import Image from "next/image";
import type { ProductItem } from "@/lib/site";
import { useEnquiry } from "@/lib/enquiry-context";
import { WHATSAPP_URL } from "@/lib/site";

export function ProductCard({ product }: { product: ProductItem }) {
  const { openEnquiry } = useEnquiry();

  const productWhatsAppUrl = `${WHATSAPP_URL}&text=${encodeURIComponent(
    `Hello SS OIL AND FIBRES, please share current rate and availability for: ${product.name}`
  )}`;

  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-line transition-all duration-300 hover:shadow-lg hover:ring-gold/60">
      {/* Product Image Container */}
      <div className="img-zoom relative aspect-[4/3] bg-paper">
        <Image
          src={product.image}
          alt={`${product.name} wholesale bulk trading - SS OIL AND FIBRES`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.gradeBadge ? (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="badge-gold bg-cream/95 text-[0.62rem] font-bold shadow-xs backdrop-blur-xs">
              {product.gradeBadge}
            </span>
          </div>
        ) : null}
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl text-navy transition-colors group-hover:text-brand-blue">
          {product.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted">
          {product.description}
        </p>

        {product.packaging ? (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-ink/75">
            <span className="font-semibold text-navy">Packaging:</span>
            <span>{product.packaging}</span>
          </div>
        ) : null}

        {product.specs && product.specs.length > 0 ? (
          <ul className="mt-3 space-y-1 border-t border-line/60 pt-3 text-xs text-ink/80">
            {product.specs.map((spec) => (
              <li key={spec} className="flex items-center gap-1.5">
                <span className="text-gold">✔</span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {/* Action Buttons */}
        <div className="mt-auto pt-5 flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            className="btn btn-gold flex-1 py-2.5 text-xs"
            onClick={() => openEnquiry(product.name)}
          >
            Request Quote
          </button>

          <a
            href={productWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-emerald-600/30 bg-emerald-50 px-3 py-2.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-100"
            title="Ask rates on WhatsApp"
            aria-label={`Ask rate on WhatsApp for ${product.name}`}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}


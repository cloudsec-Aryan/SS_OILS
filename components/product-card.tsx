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
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-md sm:rounded-sm bg-white shadow-xs sm:shadow-sm ring-1 ring-line transition-all duration-300 hover:shadow-lg hover:ring-gold/60">
      {/* Product Image Container */}
      <div className="img-zoom relative aspect-[4/3] overflow-hidden bg-paper">
        <Image
          src={product.image}
          alt={`${product.name} wholesale bulk trading - SS OIL AND FIBRES`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.gradeBadge ? (
          <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 z-10">
            <span className="badge-gold bg-cream/95 px-1.5 py-0.5 text-[0.55rem] font-bold shadow-xs backdrop-blur-xs sm:px-2.5 sm:py-1 sm:text-[0.62rem]">
              {product.gradeBadge}
            </span>
          </div>
        ) : null}
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <h3 className="font-display text-sm font-bold leading-snug text-navy transition-colors group-hover:text-brand-blue sm:text-2xl">
          {product.name}
        </h3>

        <p className="mt-1 text-[0.72rem] leading-snug text-muted line-clamp-2 sm:mt-2 sm:text-sm sm:leading-relaxed sm:line-clamp-none">
          {product.description}
        </p>

        {product.packaging ? (
          <div className="mt-2 flex items-center gap-1 text-[0.68rem] text-ink/75 sm:mt-3 sm:gap-1.5 sm:text-xs">
            <span className="font-semibold text-navy">Pack:</span>
            <span className="truncate">{product.packaging}</span>
          </div>
        ) : null}

        {product.specs && product.specs.length > 0 ? (
          <ul className="mt-2 space-y-1 border-t border-line/60 pt-2 text-[0.68rem] text-ink/80 sm:mt-3 sm:space-y-1 sm:pt-3 sm:text-xs">
            {product.specs.slice(0, 3).map((spec) => (
              <li key={spec} className="flex items-center gap-1 sm:gap-1.5 truncate">
                <span className="text-gold shrink-0">✔</span>
                <span className="truncate">{spec}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {/* Action Buttons */}
        <div className="mt-auto pt-3 flex flex-col gap-1.5 sm:pt-5 sm:flex-row sm:gap-2">
          <button
            type="button"
            className="btn btn-gold w-full py-1.5 px-2 text-[0.68rem] font-bold sm:flex-1 sm:py-2.5 sm:text-xs"
            onClick={() => openEnquiry(product.name)}
          >
            Request Quote
          </button>

          <a
            href={productWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-emerald-600/30 bg-emerald-50 w-full py-1.5 px-2 text-[0.68rem] font-semibold text-emerald-800 hover:bg-emerald-100 sm:w-auto sm:px-3 sm:py-2.5 sm:text-xs text-center"
            title="Ask rates on WhatsApp"
            aria-label={`Ask rate on WhatsApp for ${product.name}`}
          >
            💬 <span className="sm:hidden">Quote</span><span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}


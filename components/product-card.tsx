"use client";

import Image from "next/image";
import type { ProductItem } from "@/lib/site";
import { useEnquiry } from "@/lib/enquiry-context";

export function ProductCard({ product }: { product: ProductItem }) {
  const { openEnquiry } = useEnquiry();

  return (
    <article className="card-lift overflow-hidden rounded-sm bg-white shadow-[0_8px_30px_rgba(11,45,85,0.06)] ring-1 ring-line">
      <div className="img-zoom relative aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl text-navy">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{product.description}</p>
        <button
          type="button"
          className="btn btn-outline-dark mt-5 px-4 py-2.5"
          onClick={() => openEnquiry(product.name)}
        >
          Enquire
        </button>
      </div>
    </article>
  );
}

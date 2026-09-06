"use client";

import { useEnquiry } from "@/lib/enquiry-context";

export function CtaBand({
  title = "Looking for a Reliable Trading Partner?",
  copy = "Discuss your edible oil or agricultural commodity requirement with our team.",
}: {
  title?: string;
  copy?: string;
}) {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="bg-navy">
      <div className="container-page flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-white md:text-5xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">{copy}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="btn btn-gold" onClick={() => openEnquiry()}>
            Send Enquiry
          </button>
          <button type="button" className="btn btn-outline" onClick={() => openEnquiry()}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

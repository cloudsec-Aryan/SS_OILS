"use client";

import { useEnquiry } from "@/lib/enquiry-context";

export function FloatingEnquiry() {
  const { openEnquiry } = useEnquiry();

  return (
    <button
      type="button"
      onClick={() => openEnquiry()}
      className="float-enquire fixed right-3 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 rounded-sm bg-gold px-3.5 py-2.5 text-[0.68rem] font-semibold tracking-[0.14em] text-navy-deep uppercase sm:right-6 sm:bottom-6 sm:px-4 sm:py-3 sm:text-[0.72rem]"
    >
      Enquire
    </button>
  );
}

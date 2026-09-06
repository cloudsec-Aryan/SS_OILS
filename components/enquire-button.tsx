"use client";

import { useEnquiry } from "@/lib/enquiry-context";

export function EnquireButton({
  children,
  product,
  className = "btn btn-primary",
}: {
  children: React.ReactNode;
  product?: string;
  className?: string;
}) {
  const { openEnquiry } = useEnquiry();
  return (
    <button type="button" className={className} onClick={() => openEnquiry(product)}>
      {children}
    </button>
  );
}

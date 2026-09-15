import type { Metadata } from "next";
import { TermsContent } from "./terms-content";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions | SS OIL AND FIBRES - Commercial Mandi Trading Terms",
  description:
    "Official commercial trading terms, vehicle dispatch policies, payment conditions, and Bhiwani Haryana court jurisdiction for SS OIL AND FIBRES.",
  alternates: {
    canonical: "https://ssoilandfibres.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions", href: "/terms" },
        ]}
      />

      <TermsContent />
    </>
  );
}

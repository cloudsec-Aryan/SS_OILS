"use client";

import { EnquiryProvider } from "@/lib/enquiry-context";
import { EnquiryModal } from "@/components/enquiry-modal";
import { FloatingEnquiry } from "@/components/floating-enquiry";
import { Header } from "@/components/header";
import { Preloader } from "@/components/preloader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EnquiryProvider>
      <Preloader />
      <Header />
      {children}
      <FloatingEnquiry />
      <EnquiryModal />
    </EnquiryProvider>
  );
}

"use client";

import { useEffect } from "react";
import { useEnquiry } from "@/lib/enquiry-context";

export function HomeEnquiryPrompt() {
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    if (sessionStorage.getItem("ss-enquiry-prompted")) return;
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("ss-enquiry-prompted", "1");
      openEnquiry();
    }, 45000);
    return () => window.clearTimeout(timer);
  }, [openEnquiry]);

  return null;
}

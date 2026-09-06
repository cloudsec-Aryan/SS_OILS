"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { COMPANY_NAME } from "@/lib/site";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const start = window.setTimeout(() => {
      setLeaving(true);
      window.setTimeout(() => setVisible(false), 520);
    }, 1700);
    return () => window.clearTimeout(start);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`preloader ${leaving ? "preloader-leave" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="preloader-orbit">
        <span className="preloader-ring" aria-hidden />
        <span className="preloader-photo">
          <Image
            src="/logo-circle.png"
            alt={COMPANY_NAME}
            width={900}
            height={900}
            priority
            unoptimized
          />
        </span>
      </div>
    </div>
  );
}

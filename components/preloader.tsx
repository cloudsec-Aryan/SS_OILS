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
      window.setTimeout(() => setVisible(false), 420);
    }, 1100);
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
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <div className="relative mb-5 flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
          {/* Crisp rotating golden ring */}
          <span
            className="absolute inset-0 rounded-full border-2 border-gold/20 border-t-gold border-r-navy animate-spin"
            aria-hidden
          />
          {/* Crisp Brand Mark */}
          <div className="relative h-20 w-20 p-2 sm:h-24 sm:w-24">
            <Image
              src="/logo-official.png"
              alt={COMPANY_NAME}
              fill
              priority
              className="object-contain"
              sizes="128px"
            />
          </div>
        </div>

        <p className="font-display text-lg font-bold tracking-wide text-navy sm:text-xl">
          SS OIL AND FIBRES
        </p>
        <p className="mt-1 text-[0.68rem] font-semibold tracking-[0.2em] text-gold uppercase sm:text-xs">
          Edible Oils & Agricultural Commodities • Mandi Trading
        </p>
      </div>
    </div>
  );
}

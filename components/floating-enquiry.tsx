"use client";

import { usePathname } from "next/navigation";
import { WHATSAPP_URL } from "@/lib/site";

export function FloatingEnquiry() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="fixed right-3.5 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 sm:right-6 sm:bottom-6">
      {/* WhatsApp Quick Chat */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl transition-transform hover:scale-110 active:scale-95 sm:h-13 sm:w-13"
        aria-label="Chat with SS OIL AND FIBRES on WhatsApp"
        title="WhatsApp Trading Rates"
      >
        <svg
          className="h-6 w-6 sm:h-7 sm:w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 2c-5.516 0-9.999 4.482-9.999 9.998 0 1.761.459 3.479 1.332 5l-1.364 4.986 5.127-1.344c1.464.798 3.117 1.22 4.904 1.22 5.516 0 9.998-4.482 9.998-9.998 0-5.516-4.482-9.998-9.998-9.998zm0 18.283c-1.524 0-3.018-.396-4.328-1.144l-.31-.177-3.213.842.858-3.131-.194-.312c-.822-1.319-1.258-2.846-1.258-4.404 0-4.57 3.717-8.286 8.288-8.286 4.568 0 8.285 3.717 8.285 8.286 0 4.57-3.718 8.286-8.286 8.286zm4.545-6.208c-.249-.125-1.472-.727-1.7-.81-.228-.083-.394-.125-.56.125-.166.249-.643.81-.788.976-.145.166-.29.187-.539.062-.249-.125-1.05-.387-2.001-1.235-.74-.66-1.24-1.476-1.385-1.725-.145-.249-.015-.384.109-.508.112-.111.249-.29.373-.435.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.125-.56-1.349-.768-1.847-.202-.485-.408-.419-.56-.427l-.477-.008c-.166 0-.436.062-.664.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.125.166 1.756 2.682 4.254 3.761.594.257 1.059.41 1.421.526.598.19 1.142.163 1.572.099.48-.072 1.472-.602 1.68-1.183.207-.581.207-1.079.145-1.183-.062-.104-.228-.166-.477-.291z" />
        </svg>
      </a>
    </div>
  );
}


import Image from "next/image";
import { COMPANY_NAME } from "@/lib/site";

export function BrandLogo({
  className = "h-[4.75rem] w-auto sm:h-24 md:h-[6.25rem]",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-official.png"
      alt={COMPANY_NAME}
      width={746}
      height={444}
      priority={priority}
      unoptimized
      className={`bg-transparent object-contain ${className}`}
    />
  );
}

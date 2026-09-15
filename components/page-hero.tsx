import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  image: string;
}) {
  return (
    <section className="relative isolate min-h-[35vh] overflow-hidden bg-navy-deep sm:min-h-[44vh] md:min-h-[48vh]">
      <Image
        src={image}
        alt={`${title} - SS OIL AND FIBRES B2B Trading`}
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/50 sm:bg-gradient-to-r sm:from-navy-deep/95 sm:via-navy-deep/80 sm:to-navy/40" />

      <div className="hero-copy container-page relative flex min-h-[35vh] flex-col justify-end py-10 sm:min-h-[44vh] sm:py-14 md:min-h-[48vh] md:py-16">
        {eyebrow ? (
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-gold uppercase sm:text-xs sm:tracking-[0.24em]">
              {eyebrow}
            </p>
          </div>
        ) : null}

        <h1 className="mt-2.5 max-w-4xl font-display text-3xl leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {copy ? (
          <p className="mt-3.5 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base md:text-lg">
            {copy}
          </p>
        ) : null}
      </div>
    </section>
  );
}


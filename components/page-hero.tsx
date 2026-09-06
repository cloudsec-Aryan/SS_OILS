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
    <section className="relative isolate min-h-[38vh] overflow-hidden bg-navy-deep sm:min-h-[46vh]">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy/70 to-navy/40" />
      <div className="hero-copy container-page relative flex min-h-[38vh] flex-col justify-end py-12 sm:min-h-[46vh] sm:py-16">
        {eyebrow ? (
          <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-gold uppercase sm:text-[0.72rem] sm:tracking-[0.24em]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-3xl leading-tight text-white sm:text-4xl md:text-6xl">
          {title}
        </h1>
        {copy ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base md:text-lg">
            {copy}
          </p>
        ) : null}
      </div>
    </section>
  );
}

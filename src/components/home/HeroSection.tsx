import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-primary overflow-hidden">
      <div className="text-center hero-animate">
        <Image
          src="/images/logo.png"
          alt="Sequence Studio"
          width={400}
          height={80}
          priority
          className="brightness-0 invert mx-auto w-[280px] sm:w-[360px] md:w-[400px]"
        />
        <p className="mt-6 text-white/60 text-sm tracking-[0.3em] font-[family-name:var(--font-montserrat)] hero-animate-delay">
          AI ART DIRECTION &amp; BRAND FILM
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hero-animate-delay">
        <div className="w-[1px] h-12 bg-white/30 mx-auto mb-2" />
        <span className="text-white/40 text-[10px] tracking-[0.2em] font-[family-name:var(--font-montserrat)]">
          SCROLL
        </span>
      </div>
    </section>
  );
}

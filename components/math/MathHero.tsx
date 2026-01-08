import Image from "next/image";

export default function MathHero() {
  return (
    <section className="relative w-full h-[740px]">
      <Image
        src="/math/math-hero.png"
        alt="Math hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white text-5xl font-semibold">Math</h1>
      </div>
    </section>
  );
}
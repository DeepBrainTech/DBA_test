'use client';

import Image from 'next/image';

const pills = [
  { icon: '💻', label: 'Project-Based Learning' },
  { icon: '🤖', label: 'AI & Machine Learning' },
  { icon: '🏆', label: 'USACO Competition Prep' },
  { icon: '🎓', label: 'Admissions Advantage' },
];

export default function ProgrammingHeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/programming/programming_hero_image.png"
          alt="Programming Background"
          fill
          className="object-cover"
          priority
        />
        {/* overlay*/}
        <div className="absolute inset-0 bg-gradient-to-b from-[#DBFBFF]/40 to-[#F9F9F4]/40" />
      </div>

      {/* Hero Content*/}
      <div className="relative z-10 max-w-[1920px] mx-auto px-[81px] py-[120px] flex-1 flex flex-col items-center justify-center text-center translate-y-[65px]">
        {/* Main Title */}
        <h1 className="text-[80px] font-bold text-[#333] leading-[140px] mb-[30px]">
          Programming
        </h1>

        {/* Subtitle */}
        <p className="text-[32px] text-black leading-[46px] mb-[80px] max-w-[900px] font-medium">
          Master Coding. Build the Future.
        </p>

        {/* Pills  */}
        <div className="flex items-start gap-[26px] mb-[80px] w-full max-w-[1759px]">
          {pills.map((p) => (
            <div
              key={p.label}
              className="bg-white/80 backdrop-blur-sm border border-[#E8F4FC] rounded-[20px] px-[27px] py-[20px] hover:shadow-lg transition cursor-pointer flex items-center gap-[20px] flex-1 h-[94px]"
            >
              <div className="text-[33px] leading-[46px] flex-shrink-0">
                {p.icon}
              </div>
              <div className="text-[23px] text-[#2C3E50] font-normal text-left leading-[33px]">
                {p.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom hint (Unlock + mouse) */}
        <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <p className="text-[14px] font-semibold text-white/90 drop-shadow">
            Unlock the Power of Programming
          </p>

          {/* mouse icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 backdrop-blur shadow">
            <div className="relative h-5 w-3 rounded-full border-2 border-teal-400">
              <div className="absolute left-1/2 top-1 -translate-x-1/2 h-1 w-1 rounded-full bg-teal-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import Image from 'next/image';
import { scrollToElement } from '@/lib/scroll';

export default function MathHero() {
  const cards = [
    { icon: '📚', title: 'Comprehensive Resources' },
    { icon: '🏛️', title: 'Top Universities' },
    { icon: '⭐', title: 'Ivy League Faculty' },
    { icon: '📊', title: 'Admissions Pathways' },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0">
        <Image
          src="/math/math_background.jpg"
          alt="Math background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0">
          <Image
            src="/math/background.png"
            alt="Blurred overlay"
            fill
            className="object-cover blur-sm opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-[81px] py-[120px] flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-[80px] font-bold text-[#333] leading-[140px] mb-[30px]">
          Math
        </h1>
        <p className="text-[32px] text-black leading-[46px] mb-[80px] max-w-[800px] font-medium">
          Beyond problem solving: Master the logic behind the numbers.
        </p>

        <div className="flex items-start gap-[26px] mb-[80px] w-full max-w-[1759px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-[#E8F4FC] rounded-[20px] px-[27px] py-[20px] hover:shadow-lg transition cursor-pointer flex items-center gap-[20px] flex-1 h-[94px]"
            >
              <div className="text-[33px] leading-[46px] flex-shrink-0">
                {card.icon}
              </div>
              <h3 className="text-[23px] text-[#2C3E50] font-normal text-left leading-[33px]">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollToElement('math-teaching')}
          className="px-[60px] h-[90px] bg-[#4CAF50] text-white text-[26px] rounded-[40px] hover:shadow-xl transition font-medium"
        >
          Unlock the World of Math
        </button>

        <div className="mt-[40px] w-[40px] h-[40px] rounded-full border-2 border-[#4CAF50] flex items-center justify-center animate-bounce cursor-pointer"
          onClick={() => scrollToElement('math-teaching')}
        >
          <svg className="w-5 h-5 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

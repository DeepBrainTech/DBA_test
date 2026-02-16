'use client';

import Image from 'next/image';
import { scrollToElement } from '@/lib/scroll';

export default function MathHero() {
  const cards = [
    { icon: '🎓', title: 'Comprehensive Resources' },
    { icon: '🏛️', title: 'Top Universities' },
    { icon: '⭐', title: 'Ivy League Faculty' },
    { icon: '📊', title: 'Admissions Pathways' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col">
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

      <div className="relative z-10 max-w-[1920px] mx-auto px-[81px] flex-1 flex flex-col text-center">
        <div className="pt-[320px]">
          <h1 className="text-[80px] font-bold text-[#333] leading-[100px] mb-[20px]">
            Math
          </h1>
          <p className="text-[32px] text-black leading-[46px] mb-[140px] max-w-[800px] font-bold mx-auto">
            Beyond problem solving: Master the logic behind the numbers.
          </p>

          <div className="flex items-start gap-[20px] w-full max-w-[1759px] mx-auto mb-[80px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm border border-[#E8F4FC] rounded-[20px] px-[20px] py-[24px] hover:shadow-lg transition cursor-pointer flex items-center gap-[15px] h-[94px] min-w-0 ${index === 0 ? 'flex-[1.5]' : index === 2 || index === 3 ? 'flex-[1.3]' : 'flex-1'}`}
              >
                <div className="text-[33px] leading-[33px] flex-shrink-0 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-[23px] text-[#2C3E50] font-normal text-left leading-[33px] flex items-center whitespace-nowrap">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

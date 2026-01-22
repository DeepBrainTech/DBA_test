'use client';

import Image from 'next/image';

type MiniCard = {
  title: string;
  desc: string;
  icon: string; 
  iconType?: 'emoji' | 'image';
};

const MINI_CARDS: MiniCard[] = [
  {
    title: 'Computational Thinking',
    desc: 'Breaking down complex challenges into solvable parts.',
    icon: '🧩',
    iconType: 'emoji',
  },
  {
    title: 'Creativity',
    desc: 'Turning abstract ideas into tangible products.',
    icon: '🎨',
    iconType: 'emoji',
  },
  {
    title: 'Future-Ready Skills',
    desc: 'Mastering the essential tools of the AI era.',
    icon: '⚡',
    iconType: 'emoji',
  },
];

function MiniFeatureCard({ title, desc, icon, iconType = 'emoji' }: MiniCard) {
  return (
    <div
      className="
        w-[406px] h-[165px]
        bg-white
        rounded-[20px]
        shadow-[0_8px_24px_rgba(0,0,0,0.06)]
        flex flex-col items-center justify-center
        px-[28px]
        text-center
        font-outfit
      "
    >
      {/* icon */}
      <div className="mb-[10px]">
        {iconType === 'image' ? (
          <Image src={icon} alt={title} width={28} height={28} className="h-[28px] w-[28px]" />
        ) : (
          <span className="text-[22px] leading-[22px]">{icon}</span>
        )}
      </div>

      {/* title */}
      <div className="text-[20px] leading-[28px] font-semibold text-[#4ECDC4]">
        {title}
      </div>

      {/* desc */}
      <div className="mt-[8px] text-[16px] leading-[24px] text-[#7C8B99]">
        {desc}
      </div>
    </div>
  );
}

export default function ProgrammingInnovators() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[1400px] pb-[80px]">
        {/* big blue panel */}
        <div
          className="
            relative
            w-full
            rounded-[28px]
            bg-gradient-to-b from-[#4ECDC4]/10 to-[#45B7D1]/10
            px-[80px]
            py-[60px]
            font-outfit
            overflow-hidden
          "
        >
          {/* quote mark (top-left) */}
          <div className="absolute left-[26px] top-[22px] text-[#CFEFF2] text-[64px] leading-[64px] select-none">
            “
          </div>

          {/* title */}
          <h3 className="text-center text-[30px] leading-[42px] font-semibold text-[#1F2937]">
            Cultivating Next-Generation Innovators
          </h3>

          {/* subtitle */}
          <p className="mt-[16px] mx-auto max-w-[980px] text-center text-[16px] leading-[26px] text-[#6B7280]">
            Our curriculum fosters logic, problem-solving, and creativity, empowering students to become the tech leaders of tomorrow.
          </p>

          {/* mini cards row */}
          <div className="mt-[44px] flex items-center justify-center gap-[34px]">
            {MINI_CARDS.map((c) => (
              <MiniFeatureCard key={c.title} {...c} />
            ))}
          </div>

          {/* footer text */}
          <div className="mt-[44px] text-center">
            <div className="text-[16px] leading-[24px] font-semibold text-[#1F2937]">
              DeepBrain Academy Coaching Team
            </div>
            <div className="mt-[6px] text-[15px] leading-[22px] text-[#6B7280]">
              Dedicated to the next generation of creators.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
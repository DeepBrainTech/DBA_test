'use client';

import Image from 'next/image';

type PillarCardData = {
  title: string;
  desc: string;
  iconSrc: string; // 透明背景的 icon（建议 svg 或裁切紧的 png）
};

const CARDS: PillarCardData[] = [
  {
    title: 'Digital-Age Literacy',
    desc: 'Coding is the fundamental language required to understand the modern world.',
    iconSrc: '/programming/digital-age.svg',
  },
  {
    title: 'Logical Reasoning',
    desc: 'Programming strengthens logical structures and enhances complex problem-solving abilities.',
    iconSrc: '/programming/logical.svg',
  },
  {
    title: 'Computational Thinking',
    desc: 'Develops critical skills including decomposition, pattern recognition, abstraction, and algorithm design.',
    iconSrc: '/programming/computational.svg',
  },
  {
    title: "The Innovator’s Mindset",
    desc: 'We empower students to transition from passive technology users to active creators.',
    iconSrc: '/programming/innovator.svg',
  },
];

function PillarCard({ title, desc, iconSrc }: PillarCardData) {
  return (
    <div
      className="
        w-[414px] h-[484px]
        rounded-[39.83px]
        bg-[#FBF8F3]
        shadow-[0_2px_12px_rgba(0,0,0,0.04)]
        flex flex-col items-center
        font-outfit
        overflow-hidden
      "
    >
      {/* icon background container (mint block) */}
      <div className="mt-[53.1px] w-[132.8px] h-[132.8px] rounded-[33.19px] bg-[#E7F6F6] flex items-center justify-center flex-shrink-0">
        {/* icon image (透明背景) */}
        <Image
          src={iconSrc}
          alt={title}
          width={64}
          height={64}
          className="h-[64px] w-[64px]"
        />
      </div>

        {/* title block: fixed area + center */}
        <div className="mt-[39.79px] w-[307.3px] h-[84px] flex items-center justify-center text-center">
        <div className="w-full font-semibold text-[#2C3E50] text-[25px] leading-[35px]">
            {title}
        </div>
        </div>

        {/* desc */}
        <div className="mt-[5px] w-[307.3px] text-center text-[#7A8A9A] text-[20px] leading-[30px]">
        {desc}
        </div>
    </div>
  );
}

export default function ProgrammingPillars() {
  return (
    <section className="w-full bg-white">
      {/* Figma 容器宽：1400 */}
      <div className="mx-auto w-[1400px] py-[60px]">
        {/* Learn to Code pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-[12px] rounded-[999px] bg-[#EAF7FF] px-[24px] py-[10px]">
            {/* 这里如果你有真实小图标，也可以换成 Image */}
            <span className="text-[18px]">💻</span>
            <span className="text-[14px] font-medium text-[#2AAED6] font-outfit">
              Learn to Code
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-[26px] text-center text-[44px] leading-[58px] font-bold text-[#1F2937] font-outfit">
          Coding Is the New Literacy
        </h2>

        {/* Subtitle */}
        <p className="mt-[14px] mx-auto max-w-[980px] text-center text-[18px] leading-[28px] text-[#6B7280] font-outfit">
          In the digital age, the ability to understand and command computers is as essential as reading,
          writing, and mathematics.
        </p>

        {/* Cards row */}
        <div className="mt-[50px] flex items-start justify-between gap-[26px]">
          {CARDS.map((c) => (
            <PillarCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
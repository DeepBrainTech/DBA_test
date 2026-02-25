/**
 * 文件用途：编程页面核心理念卡片区块 - 展示编程教育的四大核心价值
 * 依赖关系：next/image；布局风格参考 ChessPhilosophySection（Educational Value）
 * 注意事项：响应式布局，字号与 braingames Educational Value 保持一致
 */

import Image from 'next/image';

/** 单张理念卡数据结构 */
type PillarCardData = {
  title: string;
  desc: string;
  iconSrc: string;
};

/** 四大编程教育核心理念 */
const CARDS: PillarCardData[] = [
  {
    title: 'Digital-Age Literacy',
    desc: 'Coding is the fundamental language required to understand the modern world.',
    iconSrc: '/programming/learn_to_code/1.png',
  },
  {
    title: 'Logical Reasoning',
    desc: 'Programming strengthens logical structures and enhances complex problem-solving abilities.',
    iconSrc: '/programming/learn_to_code/2.png',
  },
  {
    title: 'Computational Thinking',
    desc: 'Develops critical skills including decomposition, pattern recognition, abstraction, and algorithm design.',
    iconSrc: '/programming/learn_to_code/3.png',
  },
  {
    title: "The Innovator's Mindset",
    desc: 'We empower students to transition from passive technology users to active creators.',
    iconSrc: '/programming/learn_to_code/4.png',
  },
];

/** 单张理念卡组件 - 样式与 ChessPhilosophySection 理念卡一致 */
function PillarCard({ title, desc, iconSrc }: PillarCardData) {
  return (
    <div className="rounded-3xl bg-[#FBF9F4] px-6 pt-9 pb-8 text-center flex flex-col items-center">
      {/* 图标容器：薄荷绿背景圆角方块 */}
      <div className="w-20 h-20 shrink-0 rounded-3xl bg-[#4ECDC4]/10 flex justify-center items-center">
        <Image
          src={iconSrc}
          alt=""
          width={40}
          height={40}
          className="object-contain"
          aria-hidden
        />
      </div>
      {/* 标题 - whitespace-nowrap 确保标题在同一行显示 */}
      <h3 className="mt-5 w-full text-center text-slate-700 text-xl md:text-2xl font-semibold font-['Outfit'] leading-tight whitespace-nowrap">
        {title}
      </h3>
      {/* 描述 */}
      <p className="mt-4 w-full max-w-[18rem] text-center text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-snug">
        {desc}
      </p>
    </div>
  );
}

export default function ProgrammingPillars() {
  return (
    <section id="programming-pillars" className="bg-white">
      <div className="mx-auto max-w-[1344px] px-9 py-24 flex flex-col gap-16">
        {/* 顶部：badge + 主标题 + 副标题（与 ChessPhilosophySection 结构一致） */}
        <div className="w-full flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-3xl bg-[#4ECDC4]/10 px-5 py-3.5">
            <Image
              src="/programming/learn_to_code/icon.png"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
              aria-hidden
            />
            <span className="text-[#4ECDC4] text-lg md:text-xl font-normal font-['Outfit'] leading-7">
              Learn to Code
            </span>
          </div>
          {/* 主标题 */}
          <h2 className="text-center text-slate-700 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight">
            Coding Is the New Literacy
          </h2>
          {/* 副标题 */}
          <p className="max-w-[892px] text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-relaxed text-center">
            In the digital age, the ability to understand and command computers is as essential as reading, writing, and mathematics.
          </p>
        </div>

        {/* 四张理念卡（响应式网格布局，与 ChessPhilosophySection 一致） */}
        <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <PillarCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

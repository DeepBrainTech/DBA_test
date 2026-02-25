/**
 * 文件用途：编程页面培养下一代创新者区块 - 展示三大核心能力培养方向
 * 依赖关系：next/image；布局风格参考 ChessPhilosophySection 引用面板
 * 注意事项：响应式布局，字号与 braingames Educational Value 底部引用面板一致
 */

import Image from 'next/image';

/** 能力卡片数据结构 */
type MiniCard = {
  title: string;
  desc: string;
  icon: string;
  iconType?: 'emoji' | 'image';
};

/** 三大核心能力培养 */
const MINI_CARDS: MiniCard[] = [
  {
    title: 'Computational Thinking',
    desc: 'Breaking down complex challenges into solvable parts.',
    icon: '/programming/learn_to_code/5.png',
    iconType: 'image',
  },
  {
    title: 'Creativity',
    desc: 'Turning abstract ideas into tangible products.',
    icon: '/programming/learn_to_code/6.png',
    iconType: 'image',
  },
  {
    title: 'Future-Ready Skills',
    desc: 'Mastering the essential tools of the AI era.',
    icon: '/programming/learn_to_code/7.png',
    iconType: 'image',
  },
];

/** 单张能力卡组件 - 样式与 ChessPhilosophySection quotePills 一致 */
function MiniFeatureCard({ title, desc, icon, iconType = 'emoji' }: MiniCard) {
  return (
    <div className="rounded-2xl bg-white px-6 py-5 md:px-8 md:py-6 text-center flex flex-col items-center">
      {/* 图标 */}
      <div className="mb-3">
        {iconType === 'image' ? (
          <Image src={icon} alt="" width={28} height={28} className="h-7 w-7 object-contain" aria-hidden />
        ) : (
          <span className="text-2xl leading-none">{icon}</span>
        )}
      </div>
      {/* 标题 */}
      <div className="text-[#4ECDC4] text-base md:text-lg font-semibold font-['Outfit'] leading-7">
        {title}
      </div>
      {/* 描述 */}
      <div className="mt-2 text-slate-500 text-base font-normal font-['Outfit'] leading-relaxed">
        {desc}
      </div>
    </div>
  );
}

export default function ProgrammingInnovators() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1344px] px-9 pb-24">
        {/* 渐变背景面板（与 ChessPhilosophySection 引用面板风格一致） */}
        <div className="w-full rounded-3xl bg-linear-to-b from-[#4ECDC4]/10 to-[#45B7D1]/10 px-6 py-10 md:px-14 md:py-14">
          <div className="relative">
            {/* 引号装饰 */}
            <div className="leading-none opacity-20 text-[#4ECDC4] text-5xl md:text-6xl font-normal font-['Outfit']" aria-hidden>
              &quot;
            </div>
            {/* 主标题 */}
            <h3 className="text-center text-slate-700 text-xl md:text-2xl font-semibold font-['Outfit'] leading-tight mt-2">
              Cultivating Next-Generation Innovators
            </h3>
            {/* 副标题 */}
            <p className="mx-auto mt-5 max-w-[925px] text-center text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-relaxed">
              Our curriculum fosters logic, problem-solving, and creativity, empowering students to become the tech leaders of tomorrow.
            </p>
            {/* 三张能力卡网格 */}
            <div className="mx-auto mt-12 grid max-w-[980px] grid-cols-1 gap-6 md:grid-cols-3">
              {MINI_CARDS.map((c) => (
                <MiniFeatureCard key={c.title} {...c} />
              ))}
            </div>
            {/* 底部署名 */}
            <div className="mt-10 text-center">
              <div className="text-slate-700 text-base font-normal font-['Outfit'] leading-7">
                DeepBrain Academy Coaching Team
              </div>
              <div className="mt-1 text-slate-500 text-base font-normal font-['Outfit'] leading-7">
                Dedicated to the next generation of creators.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

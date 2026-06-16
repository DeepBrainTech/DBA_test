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

/** 单张能力卡组件 */
function MiniFeatureCard({ title, desc, icon, iconType = 'emoji' }: MiniCard) {
  return (
    <div className="rounded-xl sm:rounded-2xl bg-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-center flex flex-col items-center">
      {/* 图标 */}
      <div className="mb-2 sm:mb-3">
        {iconType === 'image' ? (
          <Image src={icon} alt="" width={28} height={28} className="h-6 w-6 sm:h-7 sm:w-7 object-contain" aria-hidden />
        ) : (
          <span className="text-xl sm:text-2xl leading-none">{icon}</span>
        )}
      </div>
      {/* 标题 */}
      <div className="text-[#4ECDC4] text-sm sm:text-base md:text-lg font-semibold font-outfit">
        {title}
      </div>
      {/* 描述 */}
      <div className="mt-1.5 sm:mt-2 text-slate-500 text-xs sm:text-sm md:text-base font-normal font-outfit leading-relaxed">
        {desc}
      </div>
    </div>
  );
}

export default function ProgrammingInnovators() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1344px] px-4 sm:px-6 lg:px-9 pb-12 sm:pb-16 lg:pb-24">
        {/* 渐变背景面板 */}
        <div className="w-full rounded-2xl lg:rounded-3xl bg-linear-to-b from-[#4ECDC4]/10 to-[#45B7D1]/10 px-4 sm:px-6 md:px-14 py-6 sm:py-8 md:py-10 lg:py-14">
          <div className="relative">
            {/* 引号装饰 */}
            <div className="leading-none opacity-20 text-[#4ECDC4] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-outfit" aria-hidden>
              &quot;
            </div>
            {/* 主标题 */}
            <h3 className="text-center text-slate-700 text-lg sm:text-xl md:text-2xl font-semibold font-outfit leading-tight mt-1 sm:mt-2">
              Cultivating Next-Generation Innovators
            </h3>
            {/* 副标题 */}
            <p className="mx-auto mt-3 sm:mt-4 lg:mt-5 max-w-[925px] text-center text-slate-500 text-sm sm:text-base md:text-lg font-normal font-outfit leading-relaxed">
              Our curriculum fosters logic, problem-solving, and creativity, empowering students to become the tech leaders of tomorrow.
            </p>
            {/* 三张能力卡：移动端横向滚动 */}
            <div className="md:hidden mx-auto mt-6 sm:mt-8 overflow-x-auto pb-2 -mx-2 px-2">
              <div className="flex gap-4 w-max">
                {MINI_CARDS.map((c) => (
                  <div key={c.title} className="w-[200px] sm:w-[240px] flex-shrink-0">
                    <MiniFeatureCard {...c} />
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:grid mx-auto mt-12 max-w-[980px] grid-cols-3 gap-6">
              {MINI_CARDS.map((c) => (
                <MiniFeatureCard key={c.title} {...c} />
              ))}
            </div>
            {/* 底部署名 */}
            <div className="mt-6 sm:mt-8 lg:mt-10 text-center">
              <div className="text-slate-700 text-sm sm:text-base font-normal font-outfit">
                DeepBrain Academy Coaching Team
              </div>
              <div className="mt-1 text-slate-500 text-xs sm:text-sm md:text-base font-normal font-outfit">
                Dedicated to the next generation of creators.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

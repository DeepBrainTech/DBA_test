/**
 * 文件用途：关于我们页面的「DeepBrain 理念」区块，展示三大核心原则与教育哲学
 * 依赖关系：依赖 PhilosophyCard 组件；每条原则用同一组件，通过配置数组复用三次
 * 注意事项：圆圈、卡片、标题、描述均在 CARD_CONFIGS 中配置，便于统一调整
 */

import PhilosophyCard, { type PhilosophyCardProps } from './PhilosophyCard';

/** 单条原则的完整配置：文案 + 圆圈/卡片/标题/描述样式，直接传给 PhilosophyCard 复用 */
const CARD_CONFIGS: PhilosophyCardProps[] = [
  {
    index: 1,
    title: 'Non-linear growth is normal',
    detail: 'Late bloomers often become deep thinkers.',
    circleColor: '#9B8FD8',
    cardBg: 'linear-gradient(to bottom, #9B8FD81A, #9B8FD81A)',
    cardBorderColor: '#9B8FD81A',
    titleClassName: 'text-xl md:text-2xl font-bold text-[#2C3E50] mb-2',
    detailClassName: 'text-base text-[#7C8B99] leading-relaxed',
  },
  {
    index: 2,
    title: 'Whole-brain development matters',
    detail: 'Logic, creativity, memory, spatial reasoning, and metacognition must work together.',
    circleColor: '#6BB6FF',
    cardBg: '#6BB6FF20',
    cardBorderColor: '#6BB6FF20',
    titleClassName: 'text-xl md:text-2xl font-bold text-[#2C3E50] mb-2',
    detailClassName: 'text-base text-[#7C8B99] leading-relaxed',
  },
  {
    index: 3,
    title: 'Thinking skills come before content',
    detail: 'Strong thinking makes every subject easier—forever.',
    circleColor: '#F4A460',
    cardBg: '#F4A46020',
    cardBorderColor: '#F4A46020',
    titleClassName: 'text-xl md:text-2xl font-bold text-[#2C3E50] mb-2',
    detailClassName: 'text-base text-[#7C8B99] leading-relaxed',
  },
];

export default function DeepBrainApproachSection() {
  return (
    <section className="bg-white pt-12 pb-10 sm:pt-16 sm:pb-12 md:pt-28 md:pb-10">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-11">
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="w-[160px] h-[50px] sm:w-[180px] sm:h-[58px] md:w-[209px] md:h-[66px] rounded-[20px] sm:rounded-[24px] md:rounded-[27.57px] bg-[#FBF9F4] flex items-center justify-center gap-1.5 sm:gap-2">
            <span className="text-xl sm:text-2xl">🎓</span>
            <span className="text-[#6BB6FF] font-medium text-sm sm:text-base md:text-lg">Our Philosophy</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] text-center mb-3 sm:mb-4">
          The DeepBrain Approach
        </h2>
        <div className="h-4 sm:h-6" aria-hidden />

        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-4xl mx-auto">
          {CARD_CONFIGS.map((config) => (
            <PhilosophyCard key={config.index} {...config} />
          ))}
        </div>
      </div>
    </section>
  );
}

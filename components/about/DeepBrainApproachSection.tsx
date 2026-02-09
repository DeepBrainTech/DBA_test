/**
 * 文件用途：关于我们页面的「DeepBrain 理念」区块，展示三大核心原则与教育哲学
 * 依赖关系：依赖 PhilosophyCard 组件和数据文件；每条原则用同一组件，通过配置数组复用三次
 * 注意事项：数据已提取到 data/about.ts，便于统一管理和修改
 */

import PhilosophyCard from './PhilosophyCard';
import { philosophyCards } from '@/data/about';

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
          {philosophyCards.map((config) => (
            <PhilosophyCard key={config.index} {...config} />
          ))}
        </div>
      </div>
    </section>
  );
}

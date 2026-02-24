/**
 * 文件用途：Math 教学理念区块，含 Teaching Features 标签与四张理念卡（由 MathTeachingPhilosophyCard 渲染，数据来自 data/math）
 * 依赖关系：next/image、MathTeachingPhilosophyCard、data/math；顶部标签图标 public/math/hero/1.png，卡片图标 public/math/Teaching_Features
 */

import Image from 'next/image';

import MathTeachingPhilosophyCard from '@/components/math/MathTeachingPhilosophyCard';
import { mathPageData } from '@/data/math';

export default function MathTeachingPhilosophy() {
  const cards = mathPageData.teachingPhilosophyCards;

  return (
    <section id="math-teaching" className="py-24 bg-white">
      <div className="mx-auto w-full max-w-[1344px] px-9">
        <div className="flex flex-col items-center text-center mb-16">
          {/* 与 summer_camp Learning Strategies 区块 badge 样式一致：浅绿背景、药丸圆角、图标 1.png */}
          <div className="relative inline-flex items-center gap-3 rounded-3xl bg-[#E8F5E9] px-5 py-3.5 mb-6">
            <span className="relative block size-5 md:size-7 shrink-0">
              <Image src="/math/hero/1.png" alt="" fill className="object-contain" sizes="1.75rem" aria-hidden />
            </span>
            <span className="text-[#4CAF50] text-lg md:text-xl font-normal font-outfit leading-7">
              Teaching Features
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl leading-tight font-bold text-[#2C3E50] mb-4">
            Math Teaching Philosophy
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-[#2C3E50]/60">
            Our unique teaching methodology makes complex mathematical concepts easy to understand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <MathTeachingPhilosophyCard key={card.number} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

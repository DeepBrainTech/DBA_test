/**
 * 文件用途：荣誉墙区块组件
 * 依赖关系：依赖 types/program.ts 中的 StudentAchievement 类型、Next.js Image 组件
 * 注意事项：展示学生成就列表；默认只显示两行，点击 See All 展开全部（需 Client Component 做展开/收起交互）
 */

'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { StudentAchievement } from '@/types/program';

/** 默认展示的卡片数量（两行 × 两列） */
const DEFAULT_VISIBLE_COUNT = 4;

interface HonorWallProps {
  achievements: StudentAchievement[];
}

/**
 * 荣誉墙组件
 * @param achievements 学生成就数据数组
 */
export default function HonorWall({ achievements }: HonorWallProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleAchievements = showAll ? achievements : achievements.slice(0, DEFAULT_VISIBLE_COUNT);
  const hasMore = achievements.length > DEFAULT_VISIBLE_COUNT;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#E8F4FC]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
        {/* 标签与 KeyPrograms 区块的 Core Courses 标签保持同一尺寸与样式 */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <Image src="/home/section-icons/achievements.png" alt="Achievements" width={32} height={32} className="w-8 h-8 shrink-0" />
            <span className="text-lg md:text-xl text-[#6BB6FF]">Achievements</span>
          </div>
          {/* 主标题与 KeyPrograms 的 Key Programs 保持同一字号与样式 */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-3 leading-tight">
            Student Achievements
          </h2>
          <p className="text-base md:text-lg text-[#7C8B99] max-w-2xl mx-auto">
            Every award is a testament to our students&apos; dedication.
          </p>
        </div>

        {/* Student Achievements Grid */}
        <div className="rounded-2xl shadow-lg px-4 py-5 md:px-6 md:py-6 max-w-5xl mx-auto" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="flex items-center justify-between mb-5 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-[#2C3E50]">Where Our Students Go</h3>
            {hasMore && (
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="text-base md:text-lg text-[#6BB6FF] hover:underline"
              >
                {showAll ? 'Show Less' : 'Show more →'}
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {visibleAchievements.map((student, idx) => (
              <div key={idx} className="rounded-xl p-4 md:p-5 border border-gray-100 flex items-center gap-4 hover:shadow-lg transition" style={{ backgroundColor: '#FBF9F4' }}>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[rgba(255,215,0,0.2)] to-[rgba(255,165,0,0.2)] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {student.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg md:text-xl font-semibold text-[#2C3E50] mb-1">
                    {student.school}
                  </h4>
                  <p className="text-base text-[#7C8B99] mb-1">{student.name}</p>
                  <div className="flex gap-2">
                    <span className="text-sm text-[#7C8B99]">{student.level}</span>
                    <span className="text-sm text-[#7C8B99]">{student.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

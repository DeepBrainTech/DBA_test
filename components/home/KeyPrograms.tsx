/**
 * 文件用途：核心课程展示区块组件
 * 依赖关系：依赖 types/program.ts 中的 Program 类型和 Next.js Image 组件
 * 注意事项：展示4个课程卡片，每个卡片包含图标、标题、描述和特性列表
 */

import Image from 'next/image';
import Link from 'next/link';
import type { Program } from '@/types/program';

interface KeyProgramsProps {
  programs: Program[];
}

/**
 * 核心课程组件
 * @param programs 课程数据数组
 */
export default function KeyPrograms({ programs }: KeyProgramsProps) {
  return (
    <section className="py-14 md:py-18 bg-[#FBF9F4]">

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-14">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <Image src="/home/section-icons/core_course.png" alt="Core Courses" width={32} height={32} className="w-8 h-8 shrink-0" />
            <span className="text-lg md:text-xl text-[#6BB6FF]">Core Courses</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-3 leading-tight">
            Key Programs
          </h2>
          <p className="text-base md:text-lg text-[#7C8B99] max-w-2xl mx-auto">
            Focusing on children&apos;s intellectual development and international education, laying a solid foundation for children&apos;s future.
          </p>
        </div>

        {/* 小屏 1 列、中屏 2 列、大屏 4 列；max-w 控制整块宽度，加大后卡片更宽 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-8 max-w-[1350px] mx-auto">
          {programs.map((program, idx) => (
            <Link key={idx} href={`/${program.slug}`}>
            <div className={`relative bg-gradient-to-br ${program.bgGradient} rounded-2xl p-4 md:p-5 shadow-lg hover:shadow-xl transition flex flex-col h-full cursor-pointer`}>
              <div className="absolute top-4 right-4 w-9 h-9 bg-white/40 rounded-xl flex items-center justify-center text-lg font-bold" style={{ color: program.color }}>
                {idx + 1}
              </div>

              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-3 shrink-0`} style={{ backgroundColor: `${program.color}15` }}>
                <Image
                  src={program.iconSrc}
                  alt={`${program.title} icon`}
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10"
                  loading="lazy"
                />
              </div>

              {/* 每块内容使用固定 min-height，确保所有卡片同一部分开头在同一水平线 */}
              <div className="flex flex-col gap-1.5 flex-1 min-h-0 mb-2">
                {/* 主标题：固定两行高度，保证副标题起点在同一水平线 */}
                <div className="min-h-[3rem] md:min-h-[3.5rem]">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#2C3E50] leading-tight">
                    {program.title}
                  </h3>
                </div>
                {/* 副标题：固定两行高度，保证描述段落起点在同一水平线 */}
                <div className="min-h-[2.5rem] md:min-h-[2.875rem]">
                  <p className="text-base md:text-lg leading-snug" style={{ color: program.color }}>
                    {program.subtitle}
                  </p>
                </div>
                {/* 描述：固定约四行高度（与 line-clamp-4 一致），保证列表起点在同一水平线 */}
                <div className="min-h-[5.5rem] md:min-h-[6rem]">
                  <p className="text-base md:text-[16px] text-[#7C8B99] leading-snug line-clamp-4">
                    {program.description}
                  </p>
                </div>
              </div>

              <div className="space-y-1 mb-3 flex-shrink-0">
                {program.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 mt-1.5 rounded-full shrink-0" style={{ backgroundColor: program.color }} />
                    <span className="text-base md:text-[17px] text-[#2C3E50] leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto w-full h-10 md:h-11 bg-white rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition">
                <span className="text-base md:text-lg font-medium" style={{ color: program.color }}>Learn More</span>
                <svg className="w-5 h-5" style={{ color: program.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

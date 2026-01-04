/**
 * 文件用途：核心课程展示区块组件
 * 依赖关系：依赖 types/program.ts 中的 Program 类型和 Next.js Image 组件
 * 注意事项：展示4个课程卡片，每个卡片包含图标、标题、描述和特性列表
 */

import Image from 'next/image';
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
    <section className="py-[133px] bg-white">
      <div className="max-w-[1920px] mx-auto px-14">
        <div className="text-center mb-[53px]">
          <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-white rounded-[33px] mb-[27px] shadow-sm">
            <span className="text-[40px]">🎯</span>
            <span className="text-[26.5px] text-[#6BB6FF]">Core Courses</span>
          </div>
          <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
            Key Programs
          </h2>
          <p className="text-[26.5px] text-[#7C8B99]">
            Focusing on children's intellectual development and international education, laying a solid foundation for children's future.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-4 gap-[48px]">
          {programs.map((program, idx) => (
            <div key={idx} className={`relative bg-gradient-to-br ${program.bgGradient} rounded-[36px] p-[48px] shadow-lg hover:shadow-xl transition flex flex-col h-full`}>
              <div className="absolute top-8 right-8 w-[60px] h-[60px] bg-white/40 rounded-[18px] flex items-center justify-center text-[30px] font-bold" style={{ color: program.color }}>
                {idx + 1}
              </div>
                
              <div className={`w-[96px] h-[96px] rounded-[24px] flex items-center justify-center text-[48px] mb-[27px]`} style={{ backgroundColor: `${program.color}15` }}>
                <Image
                  src={program.iconSrc}
                  alt={`${program.title} icon`}
                  width={60}
                  height={60}
                />
              </div>
              
              {/* Top content block with fixed min height to align bullet start */}
              <div className="flex flex-col gap-[12px] min-h-[300px] mb-[18px]">
                <h3 className="text-[36px] font-semibold text-[#2C3E50]">
                  {program.title}
                </h3>
                {/* Keep subtitle + description same height to align bullet start */}
                <div className="min-h-[170px] flex flex-col gap-[12px]">
                  <p className="text-[22px]" style={{ color: program.color }}>
                    {program.subtitle}
                  </p>
                  <p className="text-[24px] text-[#7C8B99] leading-[1.6]">
                    {program.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-[12px] mb-[32px]">
                {program.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-[12px]">
                    <div className="w-[9px] h-[9px] mt-[11px] rounded-full" style={{ backgroundColor: program.color }}></div>
                    <span className="text-[21px] text-[#2C3E50] leading-[1.5]">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-auto w-full h-[74px] bg-white rounded-[24px] flex items-center justify-center gap-[12px] hover:shadow-lg transition">
                <span className="text-[24px]" style={{ color: program.color }}>Learn More</span>
                <svg className="w-[27px] h-[27px]" style={{ color: program.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


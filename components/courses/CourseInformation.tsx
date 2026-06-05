/**
 * 文件用途：Courses 页面课程信息区块，含分类筛选与课程详情
 * 依赖关系：依赖 types/courses 的 CourseInformationData，被 app/courses/page.tsx 使用
 */

'use client';

import React, { useState } from 'react';
import type { CourseInfoCategory, CourseInformationData } from '@/types/courses';

const CATEGORY_COLORS: Record<CourseInfoCategory, string> = {
  All: 'bg-[#2C3E50]',
  Physics: 'bg-[#EF6B83]',
  Math: 'bg-[#4ADE80]',
  Chess: 'bg-[#FDBA74]',
  Languages: 'bg-[#A78BFA]',
  AI: 'bg-[#60A5FA]',
};

const CATEGORY_TEXT_COLORS: Record<Exclude<CourseInfoCategory, 'All'>, string> = {
  Physics: 'text-[#EF6B83]',
  Math: 'text-[#4ADE80]',
  Chess: 'text-[#FDBA74]',
  Languages: 'text-[#A78BFA]',
  AI: 'text-[#60A5FA]',
};

interface CourseInformationProps {
  data: CourseInformationData;
}

export default function CourseInformation({ data }: CourseInformationProps) {
  const [activeTab, setActiveTab] = useState<CourseInfoCategory>('All');

  const displayedCourses = activeTab === 'All'
    ? data.courses
    : data.courses.filter((c) => c.cat === activeTab);

  return (
    <div className="w-full bg-[#FBF9F4] pb-16 md:pb-24">
      <div className="w-full max-w-[min(1400px,95vw)] mx-auto px-4 lg:px-9 flex flex-col items-center gap-8">
        <div className="w-full flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold font-['Outfit'] text-slate-800">
            {data.sectionTitle}
          </h2>
        </div>

        <div className="w-full bg-[#E5E7EB]/50 rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col gap-6 md:gap-8">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {data.categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`
                    px-5 py-2.5 md:px-8 md:py-3 rounded-full font-['Outfit'] font-bold text-sm md:text-base transition-all duration-300
                    ${CATEGORY_COLORS[cat]}
                    ${isActive ? 'text-white opacity-100 shadow-md' : 'text-white opacity-40 hover:opacity-70'}
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="w-full h-[600px] md:h-[700px] lg:h-[800px]">
            {activeTab === 'All' ? (
              <div className="flex flex-wrap justify-center content-start gap-3 md:gap-4 h-full overflow-y-auto custom-scrollbar pr-2 pb-4">
                {displayedCourses.map((course, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FCFBF8] border border-slate-100 shadow-sm rounded-xl px-4 py-3 flex items-center gap-3 h-fit"
                  >
                    <span className={`text-xs md:text-sm font-['Outfit'] font-medium ${CATEGORY_TEXT_COLORS[course.cat]}`}>
                      {course.cat}
                    </span>
                    <span className="text-sm md:text-base font-['Outfit'] font-bold text-slate-800">
                      {course.name}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full h-full overflow-y-auto pr-2 custom-scrollbar pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {displayedCourses.map((course, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FCFBF8] border border-slate-100 shadow-sm rounded-2xl p-5 md:p-6 flex flex-col gap-4 h-auto min-h-[220px]"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-['Outfit'] font-medium ${CATEGORY_TEXT_COLORS[course.cat]}`}>
                          {course.cat}
                        </span>
                        <span className="text-lg md:text-xl font-['Outfit'] font-bold text-slate-800">
                          {course.name}
                        </span>
                      </div>
                      <ul className="list-disc pl-5 text-sm md:text-[15px] font-['Outfit'] text-slate-500 space-y-2 leading-relaxed">
                        {course.desc.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full flex justify-center mt-4">
          <a
            href="https://docs.google.com/forms/d/1wnsEKekngdFdpt465K4BIvXLT1mKvM2VmEI2Kc0QvCQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 md:h-14 items-center justify-center gap-2 rounded-full bg-[#EF6B83] px-8 md:px-10 text-base md:text-lg font-bold font-['Outfit'] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#E55A72] no-underline"
          >
            <span>Register Now</span>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #CBD5E1;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}

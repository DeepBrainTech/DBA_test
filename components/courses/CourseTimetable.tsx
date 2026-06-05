/**
 * 文件用途：Courses 页面课程时间表区块
 * 依赖关系：依赖 types/courses 的 CourseTimetableData，被 app/courses/page.tsx 使用
 */

'use client';

import type { CourseTimetableData, TimetableCategory } from '@/types/courses';

const COLORS: Record<TimetableCategory, string> = {
  Physics: 'bg-[#EF6B83]',
  Math: 'bg-[#4ADE80]',
  Chess: 'bg-[#FDBA74]',
  Language: 'bg-[#A78BFA]',
  AI: 'bg-[#60A5FA]',
};

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DAY_LABELS: Record<string, string> = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday',
};

interface CourseTimetableProps {
  data: CourseTimetableData;
}

export default function CourseTimetable({ data }: CourseTimetableProps) {
  return (
    <div className="w-full bg-[#FBF9F4] mt-8 md:mt-12 pb-16">
      <div className="w-full max-w-[min(1400px,95vw)] mx-auto px-4 lg:px-9 flex flex-col justify-start items-center gap-8 sm:gap-12 lg:gap-16 pt-8 md:pt-12">
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-400/10 px-5 py-2">
            <span className="text-xl" aria-hidden>⏰</span>
            <span className="text-rose-400 font-medium font-['Outfit']">Schedule</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold font-['Outfit'] text-slate-800 text-center">
            {data.sectionTitle}
          </h2>
        </div>

        <div className="w-full bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 overflow-hidden flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 font-['Outfit'] text-center mb-6">
            {data.tableTitle}
          </h3>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-sm md:text-base font-['Outfit'] text-slate-500 font-medium">
            {(Object.keys(COLORS) as TimetableCategory[]).map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${COLORS[cat]}`} />
                <span>{cat}</span>
              </div>
            ))}
            <div className="flex items-center ml-2">
              <span>*Contest</span>
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-4" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="min-w-[1000px] w-full flex flex-col border border-slate-200 rounded-t-xl overflow-hidden">
              <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] bg-[#2C3E50] text-white">
                <div className="py-4 px-2 text-center text-sm md:text-base font-bold font-['Outfit']"></div>
                {DAYS.map((day) => (
                  <div key={day} className="py-4 px-2 text-center text-sm md:text-base font-bold font-['Outfit']">
                    {DAY_LABELS[day]}
                  </div>
                ))}
              </div>

              {data.scheduleRows.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] border-b border-slate-200 relative ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                  }`}
                >
                  <div className="py-6 px-2 flex items-center justify-center text-center font-['Outfit'] font-medium text-slate-500 text-sm border-r border-slate-200 whitespace-pre-wrap">
                    {row.time}
                  </div>

                  {DAYS.map((day, dIdx) => (
                    <div key={day} className={`p-3 flex flex-col gap-3 ${dIdx !== DAYS.length - 1 ? 'border-r border-slate-200' : ''}`}>
                      {row.days[day]?.map((course, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2">
                          <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${COLORS[course.cat]}`} />
                          <span className="font-['Outfit'] text-sm font-medium text-slate-700 leading-snug whitespace-pre-wrap">
                            {course.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

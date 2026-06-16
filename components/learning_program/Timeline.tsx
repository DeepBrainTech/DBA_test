/**
 * 文件用途：Learning Program 日程区块（Timeline & Schedule），含 Track A / Track B 两张课表
 * 依赖关系：data/learning_program schedule 数据、ScheduleTable 组件、types LearningProgramScheduleTable
 * 注意事项：流式与网格布局，无绝对定位
 */

import { ScheduleTable } from '@/components/learning_program/ScheduleTable';
import { learningProgramPageData } from '@/data/learning_program';
import type { LearningProgramScheduleTable } from '@/types/learning_program';

/** 单张课表卡片：标题 + 可选副标题 + 表格组件 */
function ScheduleTableCard({
  table,
  courseNameWeight,
  boldRowIndexes,
}: {
  table: LearningProgramScheduleTable;
  courseNameWeight?: 'normal' | 'semibold';
  boldRowIndexes?: number[];
}) {
  return (
    <div className="w-full px-3 sm:px-6 py-6 sm:py-9 md:px-9 bg-white rounded-2xl sm:rounded-3xl flex flex-col gap-6 sm:gap-8 lg:gap-10">
      <div className="w-full px-2 sm:px-4 md:px-8 flex flex-col items-center gap-2">
        <h3 className="text-center text-slate-700 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-outfit leading-tight">
          {table.title}
        </h3>
        {table.subtitle && (
          <p className="text-center text-slate-500 text-sm sm:text-base lg:text-lg xl:text-xl font-normal font-outfit leading-relaxed max-w-[942px]">
            {table.subtitle}
          </p>
        )}
      </div>
      <ScheduleTable
        columnHeaders={table.columnHeaders}
        rows={table.rows}
        courseNameWeight={courseNameWeight}
        boldRowIndexes={boldRowIndexes}
      />
    </div>
  );
}

export default function Timeline() {
  const { schedule } = learningProgramPageData;
  return (
    <div className="w-full px-4 sm:px-8 lg:px-14 py-12 sm:py-16 lg:py-24 bg-[#FBF9F4]">
      <div className="w-full max-w-[min(1280px,95vw)] mx-auto px-0 sm:px-4 lg:px-9 flex flex-col justify-start items-start gap-8 sm:gap-12 lg:gap-16">
        {/* 标题区 */}
        <div className="w-full flex flex-col items-center text-center gap-3 sm:gap-4 lg:gap-5">
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl bg-rose-400/10 px-4 sm:px-5 py-2.5 sm:py-3.5">
            <span className="text-slate-700 text-xl sm:text-2xl md:text-3xl font-normal font-outfit" aria-hidden>
              ⏰
            </span>
            <span className="text-rose-400 text-base sm:text-lg md:text-xl font-normal font-outfit">Schedule</span>
          </div>
          <h2 className="w-full text-slate-700 text-2xl sm:text-3xl md:text-4xl font-bold font-outfit leading-tight">
            {schedule.heading}
          </h2>
          <p className="w-full max-w-[950px] text-slate-500 text-sm sm:text-base lg:text-lg xl:text-xl font-normal font-outfit leading-relaxed text-center">
            {(() => {
              const boldRange = 'Jun 8th to Aug 28th';
              const idx = schedule.description.indexOf(boldRange);
              if (idx === -1) return schedule.description;
              return (
                <>
                  {schedule.description.slice(0, idx)}
                  <span className="font-bold">{boldRange}</span>
                  {schedule.description.slice(idx + boldRange.length)}
                </>
              );
            })()}
          </p>
        </div>

        {/* Track A 课表：课程名正常，Lecture/Workshop 在数据中通过 sessionType 加粗 */}
        <ScheduleTableCard table={schedule.trackATable} courseNameWeight="normal" />

        {/* Track B 课表 */}
        <ScheduleTableCard table={schedule.trackBTable} courseNameWeight="normal" />
      </div>
    </div>
  );
}

/**
 * 文件用途：Summer Camp 日程区块（Timeline & Schedule），含 Track A / Track B 两张课表
 * 依赖关系：data/summer_camp schedule 数据、ScheduleTable 组件、types SummerCampScheduleTable
 * 注意事项：流式与网格布局，无绝对定位
 */

import { ScheduleTable } from '@/components/summer_camp/ScheduleTable';
import { summerCampPageData } from '@/data/summer_camp';
import type { SummerCampScheduleTable } from '@/types/summer_camp';

/** 单张课表卡片：标题 + 可选副标题 + 表格组件 */
function ScheduleTableCard({
  table,
  courseNameWeight,
  boldRowIndexes,
}: {
  table: SummerCampScheduleTable;
  courseNameWeight?: 'normal' | 'semibold';
  boldRowIndexes?: number[];
}) {
  return (
    <div className="w-full px-6 py-9 md:px-9 bg-white rounded-3xl flex flex-col gap-10">
      <div className="w-full px-4 md:px-8 flex flex-col items-center gap-2">
        <h3 className="text-center text-slate-700 text-2xl md:text-3xl font-semibold font-['Outfit'] leading-10">
          {table.title}
        </h3>
        {table.subtitle && (
          <p className="text-center text-slate-500 text-lg md:text-xl font-normal font-['Outfit'] leading-7 max-w-[942px]">
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
  const { schedule } = summerCampPageData;
  return (
    <div className="w-full px-14 py-24 bg-stone-50">
      <div className="w-full max-w-[1280px] mx-auto px-9 flex flex-col justify-start items-start gap-16">
        {/* 标题区：Schedule 标签 + 主标题 + 描述 */}
        <div className="w-full flex flex-col items-center text-center gap-5">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-rose-400/10 px-5 py-3.5">
            <span className="text-slate-700 text-2xl md:text-3xl font-normal font-['Outfit'] leading-9" aria-hidden>
              ⏰
            </span>
            <span className="text-rose-400 text-lg md:text-xl font-normal font-['Outfit'] leading-7">Schedule</span>
          </div>
          <h2 className="w-full text-slate-700 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight">
            {schedule.heading}
          </h2>
          <p className="w-full max-w-[950px] text-slate-500 text-lg md:text-xl font-normal font-['Outfit'] leading-7 text-center">
            {schedule.description}
          </p>
        </div>

        {/* Track A 课表 */}
        <ScheduleTableCard table={schedule.trackATable} courseNameWeight="normal" boldRowIndexes={[1, 3]} />

        {/* Track B 课表 */}
        <ScheduleTableCard table={schedule.trackBTable} courseNameWeight="normal" />
      </div>
    </div>
  );
}

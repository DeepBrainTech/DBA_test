/**
 * 文件用途：单张课表的表格本体（表头 + 表体），供 ScheduleTableCard 使用
 * 依赖关系：types SummerCampScheduleRow / ScheduleCell / columnHeaders
 * 注意事项：课程名加粗策略可配置（按表/按行）
 */

import type { ScheduleCell, SummerCampScheduleRow } from '@/types/summer_camp';

/** 单格标签：blue 为 Online/年级等，pink 为 Onsite/Intermediate 等；支持多行时每行一个 */
function ScheduleTag({ tag, tagVariant }: { tag: string; tagVariant: 'blue' | 'pink' }) {
  const isPink = tagVariant === 'pink';
  return (
    <span
      className={`inline-flex justify-center items-center px-10 py-1 rounded-[19.91px] text-center text-lg font-normal font-['Outfit'] leading-6 ${
        isPink ? 'bg-rose-400/10 text-rose-400' : 'bg-[#45B7D11A] text-[#45B7D1]'
      }`}
    >
      {tag}
    </span>
  );
}

export interface ScheduleTableProps {
  /** 表头：Date & Time + 三个 session 日期范围 */
  columnHeaders: [string, string, string, string];
  /** 表体行数据 */
  rows: SummerCampScheduleRow[];
  /** 课程名整体字重（默认 normal）；Track A 可设为 semibold */
  courseNameWeight?: 'normal' | 'semibold';
  /** 需要加粗的行索引（从 0 开始）；用于精细控制“哪几行加粗” */
  boldRowIndexes?: number[];
}

/** 课表网格：表头 + 数据行（时间列 + 三列 session 课程名与标签） */
export function ScheduleTable({
  columnHeaders,
  rows,
  courseNameWeight = 'normal',
  boldRowIndexes,
}: ScheduleTableProps) {
  const [timeHeader, ...sessionHeaders] = columnHeaders;
  return (
    <div className="w-full overflow-hidden rounded-t-[10px] rounded-tr-[10px] flex flex-col">
      {/* 表头 */}
      <div className="grid grid-cols-4 gap-0 bg-slate-700 text-white border-b-2 border-indigo-50 min-h-16 items-center">
        <div className="pl-4 md:pl-8 py-4 text-xl font-bold font-['Outfit'] leading-7">{timeHeader}</div>
        {sessionHeaders.map((h, i) => (
          <div key={i} className="flex justify-center items-center py-4 text-xl font-bold font-['Outfit'] leading-7 text-center">
            {h}
          </div>
        ))}
      </div>
      {/* 表体 */}
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-4 gap-0 min-h-20 md:min-h-[5rem] border-b border-indigo-50 last:border-b-0"
        >
          <div className="pl-4 md:pl-8 py-4 flex flex-col justify-center items-center text-center text-lg md:text-xl font-bold font-['Outfit'] leading-6 text-[#7C8B99]">
            {(() => {
              const parts = row.timeSlot.split(' - ');
              if (parts.length === 2) {
                return (
                  <>
                    <span>{parts[0]}</span>
                    <span className="font-normal">-</span>
                    <span>{parts[1]}</span>
                  </>
                );
              }
              return <span className="text-left w-full">{row.timeSlot}</span>;
            })()}
          </div>
          {[row.session1, row.session2, row.session3].map((cell: ScheduleCell, i) => (
            <div key={i} className="inline-flex flex-col justify-start items-center gap-2 py-4 px-2 text-center">
              <span
                className={`text-slate-700 text-xl font-['Outfit'] leading-7 ${
                  courseNameWeight === 'semibold' || boldRowIndexes?.includes(rowIndex) ? 'font-semibold' : 'font-normal'
                }`}
              >
                {cell.courseName}
              </span>
              <ScheduleTag tag={cell.tag} tagVariant={cell.tagVariant} />
              {cell.tag2 != null && (
                <ScheduleTag tag={cell.tag2} tagVariant={cell.tag2Variant ?? cell.tagVariant} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

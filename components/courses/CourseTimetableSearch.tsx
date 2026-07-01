/**
 * 文件用途：课表 / 课程信息图例旁的课程名搜索框
 * 依赖关系：被 CourseTimetable、CourseInformation 使用；样式与 CourseCategoryLegend 图例 pill 对齐
 */

'use client';

import {
  LEGEND_CHIP_SHELL_CLASS,
  LEGEND_CHIP_TEXT_CLASS,
} from '@/components/courses/CourseCategoryLegend';

interface CourseTimetableSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CourseTimetableSearch({
  value,
  onChange,
}: CourseTimetableSearchProps) {
  return (
    <label
      className={`${LEGEND_CHIP_SHELL_CLASS} w-[190px] shrink-0 cursor-text justify-between gap-2.5`}
    >
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search..."
        aria-label="Search courses by name"
        className={`min-w-0 flex-1 bg-transparent ${LEGEND_CHIP_TEXT_CLASS} text-[#2C3E50] placeholder:text-[#7C8B99] outline-none`}
      />
      <svg
        className="size-5 shrink-0 text-[#7C8B99]"
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </label>
  );
}

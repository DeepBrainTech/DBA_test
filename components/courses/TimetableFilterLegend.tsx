/**
 * 文件用途：课表三行筛选图例（Subject / Type / Format）
 * 依赖关系：lib/courseCategories、CourseCategoryLegend 的 pill 样式
 * 注意事项：行内单选；行间可组合；All = 本维度不筛选
 */

'use client';

import type { ReactNode } from 'react';
import {
  NeutralLegendButton,
  LEGEND_CHIP_SHELL_CLASS,
  LEGEND_CHIP_TEXT_CLASS,
} from '@/components/courses/CourseCategoryLegend';
import {
  ALL_FILTER_CONFIG,
  CONTEST_FILTER_CONFIG,
  COURSE_CATEGORY_CONFIG,
  COURSE_FILTER_CATEGORIES,
  COURSE_FORMAT_CONFIG,
  COURSE_FORMAT_FILTERS,
  STANDARD_TEST_FILTER_CONFIG,
  type CourseCategory,
  type CourseFormatFilter,
  type CourseSpecialTag,
  type TimetableFormatFilter,
  type TimetableSubjectFilter,
  type TimetableTripleFilters,
  type TimetableTypeFilter,
} from '@/lib/courseCategories';

interface TimetableFilterLegendProps {
  filters: TimetableTripleFilters;
  onChange: (next: TimetableTripleFilters) => void;
  trailing?: ReactNode;
}

function RowLabel({ children }: { children: string }) {
  return (
    <span className="w-[88px] shrink-0 font-outfit text-base font-semibold text-[#7C8B99] md:w-[100px] md:text-lg">
      {children}
    </span>
  );
}

export default function TimetableFilterLegend({
  filters,
  onChange,
  trailing,
}: TimetableFilterLegendProps) {
  const setSubject = (subject: TimetableSubjectFilter) =>
    onChange({ ...filters, subject });
  const setType = (type: TimetableTypeFilter) => onChange({ ...filters, type });
  const setFormat = (format: TimetableFormatFilter) =>
    onChange({ ...filters, format });

  return (
    <div className="flex w-full flex-col items-stretch gap-3 md:gap-4">
      {/* Subject */}
      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        <RowLabel>Subject</RowLabel>
        <NeutralLegendButton
          label={ALL_FILTER_CONFIG.label}
          isActive={filters.subject === 'All'}
          onClick={() => setSubject('All')}
          activeStyle={ALL_FILTER_CONFIG}
        />
        {COURSE_FILTER_CATEGORIES.map((category: CourseCategory) => {
          const config = COURSE_CATEGORY_CONFIG[category];
          const isActive = filters.subject === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSubject(category)}
              aria-pressed={isActive}
              className={`
                ${LEGEND_CHIP_SHELL_CLASS} gap-2.5 transition-all duration-200
                ${isActive
                  ? 'border-2 font-bold text-[#2C3E50]'
                  : 'border border-[#7C8B99] bg-transparent font-normal text-[#7C8B99] hover:border-[#7C8B99]/80 hover:bg-slate-50/60'}
              `}
              style={
                isActive
                  ? {
                      borderColor: config.borderColor,
                      backgroundColor: config.activeBg,
                      boxShadow: `0 0 0 1px ${config.borderColor}33, 0 2px 8px ${config.borderColor}22`,
                    }
                  : undefined
              }
            >
              <span
                className="size-5 shrink-0 rounded-full"
                style={{ backgroundColor: config.dotColor }}
                aria-hidden
              />
              <span
                className={`${LEGEND_CHIP_TEXT_CLASS} ${isActive ? 'text-[#2C3E50]' : 'text-[#7C8B99]'}`}
              >
                {config.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Type */}
      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        <RowLabel>Type</RowLabel>
        <NeutralLegendButton
          label={ALL_FILTER_CONFIG.label}
          isActive={filters.type === 'All'}
          onClick={() => setType('All')}
          activeStyle={ALL_FILTER_CONFIG}
        />
        <NeutralLegendButton
          label={CONTEST_FILTER_CONFIG.label}
          isActive={filters.type === 'Contest'}
          onClick={() => setType('Contest' satisfies CourseSpecialTag)}
          activeStyle={CONTEST_FILTER_CONFIG}
        />
        <NeutralLegendButton
          label={STANDARD_TEST_FILTER_CONFIG.label}
          isActive={filters.type === 'StandardTest'}
          onClick={() => setType('StandardTest')}
          activeStyle={STANDARD_TEST_FILTER_CONFIG}
        />
      </div>

      {/* Format */}
      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        <RowLabel>Format</RowLabel>
        <NeutralLegendButton
          label={ALL_FILTER_CONFIG.label}
          isActive={filters.format === 'All'}
          onClick={() => setFormat('All')}
          activeStyle={ALL_FILTER_CONFIG}
        />
        {COURSE_FORMAT_FILTERS.map((format: CourseFormatFilter) => {
          const config = COURSE_FORMAT_CONFIG[format];
          return (
            <NeutralLegendButton
              key={format}
              label={config.label}
              isActive={filters.format === format}
              onClick={() => setFormat(format)}
              activeStyle={config}
            />
          );
        })}
        {trailing}
      </div>
    </div>
  );
}

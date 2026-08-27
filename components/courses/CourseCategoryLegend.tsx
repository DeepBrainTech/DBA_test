/**
 * 文件用途：Courses 页面可交互科目图例（课表、课程信息共用）
 * 依赖关系：依赖 lib/courseCategories
 */

'use client';

import type { ReactNode } from 'react';
import {
  ALL_FILTER_CONFIG,
  CONTEST_FILTER_CONFIG,
  COURSE_CATEGORY_CONFIG,
  COURSE_FILTER_CATEGORIES,
  STANDARD_TEST_FILTER_CONFIG,
  type CourseInformationFilter,
  type CourseLegendFilter,
} from '@/lib/courseCategories';

type TimetableLegendProps = {
  includeAll?: false;
  activeFilter: CourseLegendFilter | null;
  onFilterChange: (filter: CourseLegendFilter | null) => void;
};

type InformationLegendProps = {
  includeAll: true;
  activeFilter: CourseInformationFilter;
  onFilterChange: (filter: CourseInformationFilter) => void;
};

type CourseCategoryLegendProps = (TimetableLegendProps | InformationLegendProps) & {
  showContestFilter?: boolean;
  showStandardTestFilter?: boolean;
  trailing?: ReactNode;
};

/** 课表图例 pill 外壳（与搜索框共用） */
export const LEGEND_CHIP_SHELL_CLASS =
  'inline-flex items-center rounded-full border border-[#7C8B99] bg-transparent px-4 py-2';

/** 课表图例 pill 文案（与搜索框共用） */
export const LEGEND_CHIP_TEXT_CLASS =
  'font-outfit text-lg leading-none font-normal md:text-[22px]';

export function NeutralLegendButton({
  label,
  isActive,
  onClick,
  activeStyle,
  disabled = false,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  activeStyle: { borderColor: string; activeBg: string };
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={isActive}
      className={`
        ${LEGEND_CHIP_SHELL_CLASS} transition-all duration-200
        disabled:cursor-not-allowed disabled:opacity-40
        ${isActive
          ? 'border-2 font-bold text-[#2C3E50]'
          : 'border border-[#7C8B99] bg-transparent font-normal text-[#7C8B99] hover:border-[#7C8B99]/80 hover:bg-slate-50/60'}
      `}
      style={
        isActive
          ? {
              borderColor: activeStyle.borderColor,
              backgroundColor: activeStyle.activeBg,
              boxShadow: `0 0 0 1px ${activeStyle.borderColor}44, 0 2px 8px ${activeStyle.borderColor}22`,
            }
          : undefined
      }
    >
      <span className={`${LEGEND_CHIP_TEXT_CLASS} ${isActive ? 'text-[#2C3E50]' : 'text-[#7C8B99]'}`}>
        {label}
      </span>
    </button>
  );
}

export default function CourseCategoryLegend(props: CourseCategoryLegendProps) {
  const {
    showContestFilter = true,
    showStandardTestFilter = true,
    trailing,
  } = props;

  const handleCategoryClick = (category: CourseLegendFilter) => {
    if (props.includeAll) {
      props.onFilterChange(props.activeFilter === category ? 'All' : category);
      return;
    }
    props.onFilterChange(props.activeFilter === category ? null : category);
  };

  const isCategoryActive = (category: CourseLegendFilter) => {
    if (props.includeAll) return props.activeFilter === category;
    return props.activeFilter === category;
  };

  const isContestActive = props.activeFilter === 'Contest';
  const isStandardTestActive = props.activeFilter === 'StandardTest';

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
      {props.includeAll && (
        <NeutralLegendButton
          label={ALL_FILTER_CONFIG.label}
          isActive={props.activeFilter === 'All'}
          onClick={() => props.onFilterChange('All')}
          activeStyle={ALL_FILTER_CONFIG}
        />
      )}

      {COURSE_FILTER_CATEGORIES.map((category) => {
        const config = COURSE_CATEGORY_CONFIG[category];
        const isActive = isCategoryActive(category);

        return (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryClick(category)}
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
            <span className={`${LEGEND_CHIP_TEXT_CLASS} ${isActive ? 'text-[#2C3E50]' : 'text-[#7C8B99]'}`}>
              {config.label}
            </span>
          </button>
        );
      })}

      {showContestFilter && (
        <NeutralLegendButton
          label={CONTEST_FILTER_CONFIG.label}
          isActive={isContestActive}
          onClick={() => handleCategoryClick('Contest')}
          activeStyle={CONTEST_FILTER_CONFIG}
        />
      )}

      {showStandardTestFilter && (
        <NeutralLegendButton
          label={STANDARD_TEST_FILTER_CONFIG.label}
          isActive={isStandardTestActive}
          onClick={() => handleCategoryClick('StandardTest')}
          activeStyle={STANDARD_TEST_FILTER_CONFIG}
        />
      )}

      {trailing}
    </div>
  );
}

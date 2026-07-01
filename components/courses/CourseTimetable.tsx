/**
 * 文件用途：Courses / Schedule 页面课程时间表区块（含可交互科目图例筛选）
 * 依赖关系：依赖 types/courses、CourseCategoryLegend、lib/courseCategories
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import CourseCategoryLegend from '@/components/courses/CourseCategoryLegend';
import CourseTimetableSearch from '@/components/courses/CourseTimetableSearch';
import FilterTapHint from '@/components/courses/FilterTapHint';
import {
  COURSE_CATEGORY_CONFIG,
  isContestCourse,
  type CourseInformationFilter,
} from '@/lib/courseCategories';
import { matchesTimetableCourseSearch } from '@/lib/timetableSearch';
import type { CourseTimetableData, TimetableCategory } from '@/types/courses';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;
const DAY_LABELS: Record<(typeof DAYS)[number], string> = {
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
  hideHeader?: boolean;
  hideBadge?: boolean;
  /** Courses 页已在此 tab，隐藏「visit the Courses tab」引导文案 */
  hideCoursesTabDescription?: boolean;
  /** 作为同一页面区块内的子课表时，去掉独立背景与多余间距 */
  nested?: boolean;
  isLastInGroup?: boolean;
}

export default function CourseTimetable({
  data,
  hideHeader = false,
  hideBadge = false,
  hideCoursesTabDescription = false,
  nested = false,
  isLastInGroup = false,
}: CourseTimetableProps) {
  const [activeFilter, setActiveFilter] = useState<CourseInformationFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const isScheduleVariant = Boolean(data.badge);
  const sectionBg = nested ? 'bg-transparent' : (data.sectionClassName ?? 'bg-[#FBF9F4]');
  const outerPadding = nested ? (isLastInGroup ? 'pb-16' : 'pb-6') : 'pb-16';
  const innerPadding = nested ? 'pt-2 md:pt-4' : 'pt-6 md:pt-8';
  const cardVariant = data.cardVariant ?? 'elevated';
  const rowMinHeight = Math.round(136 * (data.rowMinHeightScale ?? 1));

  const filterCourses = (courses: { name: string; cat: TimetableCategory }[] | undefined) => {
    if (!courses) return [];

    let filtered = courses;

    if (activeFilter !== 'All') {
      if (activeFilter === 'Contest') {
        filtered = filtered.filter((course) => isContestCourse(course.name));
      } else {
        filtered = filtered.filter((course) => course.cat === activeFilter);
      }
    }

    if (searchQuery.trim().length > 0) {
      filtered = filtered.filter((course) =>
        matchesTimetableCourseSearch(course.name, searchQuery),
      );
    }

    return filtered;
  };

  return (
    <div className={`w-full ${outerPadding} ${sectionBg}`}>
      <div
        className={`mx-auto flex w-full max-w-[min(1440px,98vw)] flex-col items-center gap-6 px-2 sm:gap-10 sm:px-4 lg:gap-12 lg:px-6 ${innerPadding}`}
      >
        {!hideHeader && (
          <header className="flex flex-col items-center gap-4 sm:gap-6">
            {!hideBadge &&
              (data.badge ? (
              <div
                className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 sm:gap-3 sm:rounded-3xl sm:px-5 sm:py-3.5 ${
                  data.badge.className ?? 'bg-[#FBF9F4] text-slate-700'
                }`}
              >
                {data.badge.iconSrc ? (
                  <Image
                    src={data.badge.iconSrc}
                    alt=""
                    width={24}
                    height={24}
                    className="size-5 shrink-0 object-contain sm:size-6"
                    aria-hidden
                  />
                ) : (
                  <span className="text-[28px] leading-none" aria-hidden>
                    {data.badge.icon ?? '📅'}
                  </span>
                )}
                <span className="font-outfit text-base font-normal leading-7 sm:text-lg md:text-xl">
                  {data.badge.label}
                </span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2.5 rounded-[23px] bg-[rgba(89,156,237,0.1)] px-5 py-2.5">
                <span className="text-[28px] leading-none" aria-hidden>
                  ⏰
                </span>
                <span className="font-outfit text-xl text-[#599CED]">Schedule</span>
              </div>
            ))}
            <h2
              className={`text-center font-outfit font-bold text-slate-700 ${
                isScheduleVariant
                  ? 'text-2xl sm:text-3xl md:text-4xl'
                  : 'text-3xl text-[#2C3E50] md:text-4xl lg:text-[40px]'
              }`}
            >
              {data.sectionTitle}
            </h2>
            {!hideCoursesTabDescription &&
              (data.description || data.descriptionSuffix) && (
              <p className="max-w-3xl text-center font-outfit text-lg text-[#7C8B99] md:text-xl lg:text-[22px]">
                {data.description}
                {data.descriptionLink && (
                  <Link
                    href={data.descriptionLink.href}
                    className="font-semibold text-[#7C8B99] underline-offset-2 hover:underline"
                  >
                    {data.descriptionLink.label}
                  </Link>
                )}
                {data.descriptionSuffix ??
                  (data.descriptionLink ? ' tab.' : '')}
              </p>
            )}
          </header>
        )}

        <div
          className={
            cardVariant === 'flat'
              ? 'flex w-full flex-col items-center px-2 sm:px-4 md:px-6 lg:px-9'
              : cardVariant === 'white'
                ? 'flex w-full flex-col items-center rounded-3xl bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-9 md:pt-9'
                : 'flex w-full flex-col items-center rounded-[28px] border border-slate-100 bg-white px-4 py-6 shadow-sm md:px-6 md:py-9 lg:px-8 lg:py-10'
          }
        >
          {data.tableTitle && (
            <h3 className="mb-6 text-center font-outfit text-2xl font-semibold text-[#2C3E50] md:text-[28px]">
              {data.tableTitle}
            </h3>
          )}

          <div className="mb-8 flex w-full flex-col items-center gap-2">
            <FilterTapHint />
            <CourseCategoryLegend
              includeAll
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              trailing={
                <CourseTimetableSearch value={searchQuery} onChange={setSearchQuery} />
              }
            />
          </div>

          <div
            className="-mx-2 w-[calc(100%+1rem)] overflow-x-auto px-2 pb-4 sm:-mx-3 sm:w-[calc(100%+1.5rem)] sm:px-3 md:mx-0 md:w-full md:px-0"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="min-w-[1240px] w-full overflow-hidden rounded-t-[10px] border border-[#E8F4FC]">
              <div className="grid grid-cols-[110px_repeat(7,minmax(160px,1fr))] bg-[#2C3E50] text-white">
                <div className="py-2" />
                {DAYS.map((day) => (
                  <div
                    key={day}
                    className="px-2 py-2 text-center font-outfit text-base font-bold"
                  >
                    {DAY_LABELS[day]}
                  </div>
                ))}
              </div>

              {data.scheduleRows.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-[110px_repeat(7,minmax(160px,1fr))] border-b border-[#E8F4FC] ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
                  }`}
                >
                  <div
                    className="flex items-center justify-center border-r border-[#E8F4FC] px-2 py-2 text-center font-outfit text-base font-bold leading-5 text-[#7C8B99] whitespace-pre-wrap"
                    style={{ minHeight: rowMinHeight }}
                  >
                    {row.time}
                  </div>

                  {DAYS.map((day, dIdx) => {
                    const visibleCourses = filterCourses(row.days[day]);

                    return (
                      <div
                        key={day}
                        className={`flex flex-col justify-center gap-1 px-2 py-1.5 ${
                          dIdx !== DAYS.length - 1 ? 'border-r border-[#E8F4FC]' : ''
                        }`}
                        style={{ minHeight: rowMinHeight }}
                      >
                        {visibleCourses.map((course, cIdx) => {
                          const lines = course.name.split('\n');
                          const useTitleMetaLayout =
                            data.courseNameLayout === 'title-meta' && lines.length > 1;

                          return (
                            <div key={cIdx} className="flex items-start gap-1.5">
                              <span
                                className="mt-0.5 size-3.5 shrink-0 rounded-full"
                                style={{ backgroundColor: COURSE_CATEGORY_CONFIG[course.cat].dotColor }}
                                aria-hidden
                              />
                              {useTitleMetaLayout ? (
                                <span className="flex flex-col gap-0.5">
                                  <span className="font-outfit text-sm font-medium leading-4 text-slate-700">
                                    {lines[0]}
                                  </span>
                                  {lines.slice(1).map((line, lineIdx) => (
                                    <span
                                      key={lineIdx}
                                      className="font-outfit text-xs font-light leading-4 text-slate-700"
                                    >
                                      {line}
                                    </span>
                                  ))}
                                </span>
                              ) : (
                                <span
                                  className={`font-outfit text-sm leading-4 whitespace-pre-wrap ${
                                    isScheduleVariant
                                      ? 'font-medium text-slate-700'
                                      : 'font-medium text-[#2C3E50]'
                                  }`}
                                >
                                  {course.name}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

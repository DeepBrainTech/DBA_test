/**
 * 文件用途：Courses 页面课程信息区块，含图例筛选与可折叠课程卡片
 * 依赖关系：依赖 CourseCategoryLegend、CourseInfoCard、FilterTapHint、lib/courseCategories
 */

'use client';

import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import CourseCategoryLegend, {
  NeutralLegendButton,
} from '@/components/courses/CourseCategoryLegend';
import CourseInfoCard from '@/components/courses/CourseInfoCard';
import CourseTimetableSearch from '@/components/courses/CourseTimetableSearch';
import FilterTapHint from '@/components/courses/FilterTapHint';
import {
  CONTEST_FILTER_CONFIG,
  courseMatchesInformationFilter,
  getCourseCardId,
  type CourseInformationFilter,
} from '@/lib/courseCategories';
import { matchesCourseTitleSearch } from '@/lib/timetableSearch';
import type { CourseInformationData } from '@/types/courses';

type ExpandState =
  | { mode: 'all-collapsed' }
  | { mode: 'all-expanded' }
  | { mode: 'individual'; expandedIds: Set<string> };

interface CourseInformationProps {
  data: CourseInformationData;
}

function isCardExpanded(id: string, expandState: ExpandState): boolean {
  if (expandState.mode === 'all-collapsed') return false;
  if (expandState.mode === 'all-expanded') return true;
  return expandState.expandedIds.has(id);
}

export default function CourseInformation({ data }: CourseInformationProps) {
  const [activeFilter, setActiveFilter] = useState<CourseInformationFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandState, setExpandState] = useState<ExpandState>({ mode: 'all-collapsed' });
  const [panelHeight, setPanelHeight] = useState<number | null>(null);

  const panelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const displayedCourses = useMemo(
    () =>
      data.courses.filter(
        (course) =>
          courseMatchesInformationFilter(course, activeFilter) &&
          matchesCourseTitleSearch(course.name, searchQuery),
      ),
    [data.courses, activeFilter, searchQuery],
  );

  const displayedIds = useMemo(
    () => displayedCourses.map(getCourseCardId),
    [displayedCourses],
  );

  const allDisplayedExpanded =
    displayedIds.length > 0 &&
    displayedIds.every((id) => isCardExpanded(id, expandState));

  const measureCollapsedAllHeight = useCallback(() => {
    const panel = panelRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    if (!panel || !header || !grid) return;

    const styles = getComputedStyle(panel);
    const paddingY =
      parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
    const gap = parseFloat(styles.rowGap || styles.gap || '0');

    setPanelHeight(Math.ceil(header.offsetHeight + grid.offsetHeight + gap + paddingY));
  }, []);

  const isCollapsedAllBaseline =
    activeFilter === 'All' && expandState.mode === 'all-collapsed';

  useLayoutEffect(() => {
    if (!isCollapsedAllBaseline) return;
    measureCollapsedAllHeight();
  }, [isCollapsedAllBaseline, measureCollapsedAllHeight, data.courses]);

  useLayoutEffect(() => {
    if (!isCollapsedAllBaseline) return;

    const onResize = () => measureCollapsedAllHeight();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isCollapsedAllBaseline, measureCollapsedAllHeight]);

  const toggleCard = (id: string) => {
    setExpandState((prev) => {
      if (prev.mode === 'all-collapsed') {
        return { mode: 'individual', expandedIds: new Set([id]) };
      }

      if (prev.mode === 'all-expanded') {
        const expandedIds = new Set(displayedIds.filter((cardId) => cardId !== id));
        return expandedIds.size === 0
          ? { mode: 'all-collapsed' }
          : { mode: 'individual', expandedIds };
      }

      const expandedIds = new Set(prev.expandedIds);
      if (expandedIds.has(id)) expandedIds.delete(id);
      else expandedIds.add(id);

      if (expandedIds.size === 0) return { mode: 'all-collapsed' };
      if (displayedIds.every((cardId) => expandedIds.has(cardId))) {
        return { mode: 'all-expanded' };
      }
      return { mode: 'individual', expandedIds };
    });
  };

  const handleToggleAll = () => {
    setExpandState(allDisplayedExpanded ? { mode: 'all-collapsed' } : { mode: 'all-expanded' });
  };

  return (
    <div className="w-full bg-[#FBF9F4] pb-16 md:pb-24">
      <div className="mx-auto flex w-full max-w-[min(1440px,98vw)] flex-col items-center gap-8 px-4 lg:px-9">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="font-outfit text-3xl font-bold text-[#2C3E50] md:text-4xl lg:text-[40px]">
            {data.sectionTitle}
          </h2>
        </div>

        <div
          ref={panelRef}
          style={panelHeight ? { height: panelHeight } : undefined}
          className="flex w-full flex-col gap-5 rounded-3xl bg-[rgba(89,156,237,0.08)] p-4 md:gap-6 md:p-6 lg:gap-8 lg:p-8"
        >
          <div ref={headerRef} className="flex shrink-0 flex-col items-center gap-2">
            <FilterTapHint showCardExpand />
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
              <CourseCategoryLegend
                includeAll
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                trailing={
                  <CourseTimetableSearch value={searchQuery} onChange={setSearchQuery} />
                }
              />
              <NeutralLegendButton
                label={allDisplayedExpanded ? 'Collapse All' : 'Expand All'}
                isActive={false}
                onClick={handleToggleAll}
                activeStyle={CONTEST_FILTER_CONFIG}
                disabled={displayedCourses.length === 0}
              />
            </div>
          </div>

          <div
            className={`min-h-0 flex-1 ${panelHeight ? 'overflow-y-auto pr-1 course-info-scroll' : ''}`}
          >
            <div
              ref={gridRef}
              className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6"
            >
              {displayedCourses.map((course) => {
                const cardId = getCourseCardId(course);
                return (
                  <CourseInfoCard
                    key={cardId}
                    course={course}
                    isExpanded={isCardExpanded(cardId, expandState)}
                    onToggle={() => toggleCard(cardId)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex w-full shrink-0 justify-center">
          <a
            href="https://docs.google.com/forms/d/1wnsEKekngdFdpt465K4BIvXLT1mKvM2VmEI2Kc0QvCQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#599CED] px-8 text-base font-bold font-outfit text-white no-underline shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#4788D9] hover:shadow-xl md:h-14 md:px-10 md:text-lg"
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
        .course-info-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .course-info-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .course-info-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(89, 156, 237, 0.25);
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}

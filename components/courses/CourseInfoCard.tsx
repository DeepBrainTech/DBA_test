/**
 * 文件用途：Courses 页面可折叠课程信息卡片
 * 依赖关系：依赖 lib/courseCategories、types/courses
 */

'use client';

import {
  COURSE_CATEGORY_CONFIG,
  normalizeCourseInfoCategory,
} from '@/lib/courseCategories';
import type { CourseInfoItem } from '@/types/courses';

interface CourseInfoCardProps {
  course: CourseInfoItem;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function CourseInfoCard({ course, isExpanded, onToggle }: CourseInfoCardProps) {
  const categoryKey = normalizeCourseInfoCategory(course.cat);
  const categoryColor = categoryKey ? COURSE_CATEGORY_CONFIG[categoryKey].dotColor : '#7C8B99';
  const categoryLabel = categoryKey ? COURSE_CATEGORY_CONFIG[categoryKey].label : course.cat;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isExpanded}
      className={`
        w-full text-left rounded-2xl border border-white/80 bg-[#FCFBF8] shadow-sm
        transition-all duration-200 hover:shadow-md
        ${isExpanded ? 'p-5 pb-6 md:p-6 md:pb-7' : 'px-4 py-3.5 md:px-5 md:py-4'}
      `}
    >
      <div className={`flex items-center gap-2.5 ${isExpanded ? 'mb-4' : ''}`}>
        <span
          className="shrink-0 font-outfit text-sm font-medium md:text-base"
          style={{ color: categoryColor }}
        >
          {categoryLabel}
        </span>
        <span className="font-outfit text-base font-bold text-[#2C3E50] md:text-lg">
          {course.name}
        </span>
      </div>

      {isExpanded && (
        <ul className="list-disc space-y-2.5 pl-5 font-outfit text-sm leading-[1.65] text-[#7C8B99] md:text-[15px]">
          {course.desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </button>
  );
}

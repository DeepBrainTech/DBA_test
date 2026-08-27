/**
 * 文件用途：秋季 Online 课表静态数据
 * 依赖关系：types/courses
 * 注意事项：仅含 Online Only 课程；旧 online.ts（暑期）保留不动
 */

import type { CourseTimetableData } from '@/types/courses';

export const fallOnlineTimetableData: CourseTimetableData = {
  badge: {
    icon: '📅',
    label: 'Online Courses',
    className: 'bg-white text-slate-700',
  },
  sectionTitle: 'Online Course Timetable',
  description:
    'Explore our course options. For more information, please visit the ',
  descriptionLink: { label: 'Courses', href: '/courses' },
  descriptionSuffix:
    ' tab. The courses on this schedule are online-only.',
  sectionClassName: 'bg-[#FBF9F4]',
  cardVariant: 'white',
  rowMinHeightScale: 1.1,
  scheduleRows: [
    {
      time: '10:30 AM\n-\n12:00 PM',
      days: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [{ name: 'AP Biology Online', cat: 'Science', tags: ['StandardTest'] }],
        Sun: [],
      },
    },
    {
      time: '3:30 PM\n-\n5:00 PM',
      days: {
        Mon: [
          {
            name: 'PSAT Reading & Writing Online',
            cat: 'Language',
            tags: ['StandardTest'],
          },
        ],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
        Sun: [
          { name: 'AP Chemistry Online', cat: 'Science', tags: ['StandardTest'] },
        ],
      },
    },
  ],
};

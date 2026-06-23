/**
 * 文件用途：课表 C（Online Course Timetable）静态数据
 * 依赖关系：types/courses
 */

import type { CourseTimetableData } from '@/types/courses';

export const onlineTimetableData: CourseTimetableData = {
  badge: {
    icon: '📅',
    label: 'Summer Courses',
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
  scheduleRows: [
    {
      time: '9:00 AM\n-\n10:30 AM',
      days: {
        Mon: [{ name: 'Algebra 1', cat: 'Math' }],
        Tue: [{ name: 'Precalculus', cat: 'Math' }],
        Wed: [{ name: 'SAT Math', cat: 'Math' }],
        Thu: [{ name: 'AMC 8', cat: 'Math' }],
        Fri: [{ name: 'Algebra 2', cat: 'Math' }],
        Sat: [{ name: 'Calculus', cat: 'Math' }],
        Sun: [{ name: 'SAT Math', cat: 'Math' }],
      },
    },
    {
      time: '10:45 AM\n-\n12:15 PM',
      days: {
        Mon: [{ name: 'Geometry', cat: 'Math' }],
        Tue: [{ name: 'Calculus', cat: 'Math' }],
        Wed: [{ name: 'ISEE Math', cat: 'Math' }],
        Thu: [{ name: 'AMC 10', cat: 'Math' }],
        Fri: [{ name: 'College Algebra', cat: 'Math' }],
        Sat: [{ name: 'GRE Math', cat: 'Math' }],
        Sun: [{ name: 'Advanced Calculus', cat: 'Math' }],
      },
    },
    {
      time: '5:00 PM\n-\n6:30 PM',
      days: {
        Mon: [{ name: 'ACT Math', cat: 'Math' }],
        Tue: [{ name: 'Algebra 2', cat: 'Math' }],
        Wed: [{ name: 'PSAT Math', cat: 'Math' }],
        Thu: [{ name: 'Trigonometry', cat: 'Math' }],
        Fri: [{ name: 'AMC 8 Prep', cat: 'Math' }],
        Sat: [{ name: 'Calculus', cat: 'Math' }],
        Sun: [],
      },
    },
    {
      time: '6:45 PM\n-\n8:15 PM',
      days: {
        Mon: [{ name: 'Precalculus', cat: 'Math' }],
        Tue: [{ name: 'Integral Calculus', cat: 'Math' }],
        Wed: [{ name: 'Geometry', cat: 'Math' }],
        Thu: [{ name: 'AMC 12', cat: 'Math' }],
        Fri: [{ name: 'GMAT Math', cat: 'Math' }],
        Sat: [{ name: 'Competition Math', cat: 'Math' }],
        Sun: [],
      },
    },
    {
      time: '8:30 PM\n-\n10:00 PM',
      days: {
        Mon: [{ name: 'Linear Algebra', cat: 'Math' }],
        Tue: [{ name: 'Differential Equations', cat: 'Math' }],
        Wed: [{ name: 'College Algebra', cat: 'Math' }],
        Thu: [{ name: 'Multivariable Calculus', cat: 'Math' }],
        Fri: [{ name: 'Real Analysis', cat: 'Math' }],
        Sat: [{ name: 'Number Theory', cat: 'Math' }],
        Sun: [],
      },
    },
  ],
};

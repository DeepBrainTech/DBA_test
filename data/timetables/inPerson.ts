/**
 * 文件用途：线下课表（In-Person Course Timetable）静态数据
 * 依赖关系：types/courses
 * 注意事项：科目分类与 * Contest / * Standard Test 标签按秋季课程表映射
 */

import type { CourseTimetableData } from '@/types/courses';

export const inPersonTimetableData: CourseTimetableData = {
  badge: {
    icon: '📅',
    label: 'In-Person Courses',
    className: 'bg-white text-slate-700',
  },
  sectionTitle: 'In-Person Course Timetable',
  description:
    'Explore our course options. For more information, please visit the ',
  descriptionLink: { label: 'Courses', href: '/courses' },
  descriptionSuffix:
    ' tab. We offer both in-person and online options for courses.',
  sectionClassName: 'bg-[#FBF9F4]',
  cardVariant: 'white',
  rowMinHeightScale: 1.1,
  scheduleRows: [
    {
      time: '9:00 AM\n-\n10:30 AM',
      days: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [{ name: 'Chess I', cat: 'Chess' }],
        Sun: [{ name: 'Chess II', cat: 'Chess' }],
      },
    },
    {
      time: '10:30 AM\n-\n12:00 PM',
      days: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [{ name: 'Middle School ESL Intermediate', cat: 'Language' }],
        Sun: [],
      },
    },
    {
      time: '10:45 AM\n-\n12:15 PM',
      days: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
        Sun: [{ name: 'Chess II', cat: 'Chess' }],
      },
    },
    {
      time: '2:45 PM\n-\n4:15 PM',
      days: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [{ name: 'Math Clinics', cat: 'Math' }],
        Sun: [],
      },
    },
    {
      time: '3:30 PM\n-\n5:00 PM',
      days: {
        Mon: [],
        Tue: [
          { name: 'AoPS Prealgebra', cat: 'Math' },
          { name: 'Elementary ESL Beginner', cat: 'Language' },
        ],
        Wed: [
          { name: 'PSAT Math', cat: 'Math', tags: ['StandardTest'] },
          { name: 'Elementary ESL Intermediate', cat: 'Language' },
        ],
        Thu: [{ name: 'Spark Math P1', cat: 'Math' }],
        Fri: [
          { name: 'Spark Math P2', cat: 'Math' },
          { name: 'Middle School ESL Beginner', cat: 'Language' },
        ],
        Sat: [],
        Sun: [],
      },
    },
    {
      time: '4:30 PM\n-\n6:00 PM',
      days: {
        Mon: [{ name: 'Chinese', cat: 'Language' }],
        Tue: [{ name: 'Chinese', cat: 'Language' }],
        Wed: [{ name: 'Chinese', cat: 'Language' }],
        Thu: [{ name: 'Chinese', cat: 'Language' }],
        Fri: [{ name: 'Chinese', cat: 'Language' }],
        Sat: [{ name: 'Chinese', cat: 'Language' }],
        Sun: [],
      },
    },
    {
      time: '5:00 PM\n-\n6:30 PM',
      days: {
        Mon: [{ name: 'AMC 8 Beginner*', cat: 'Math', tags: ['Contest'] }],
        Tue: [{ name: 'Python 1 (Beginner)', cat: 'ProgrammingAI' }],
        Wed: [{ name: 'BCA Math', cat: 'Math' }],
        Thu: [
          { name: 'AMC 8 Advanced*', cat: 'Math', tags: ['Contest'] },
          { name: 'Spark Math P3', cat: 'Math' },
        ],
        Fri: [{ name: 'Math Kangaroo*', cat: 'Math', tags: ['Contest'] }],
        Sat: [],
        Sun: [{ name: 'AP Calculus AB/BC', cat: 'Math', tags: ['StandardTest'] }],
      },
    },
    {
      time: '7:00 PM\n-\n8:30 PM',
      days: {
        Mon: [{ name: 'Honor Physics', cat: 'Science' }],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
        Sun: [],
      },
    },
    {
      time: '7:30 PM\n-\n9:00 PM',
      days: {
        Mon: [],
        Tue: [{ name: 'AP Physics 1', cat: 'Science', tags: ['StandardTest'] }],
        Wed: [],
        Thu: [{ name: 'F=MA Competition*', cat: 'Science', tags: ['Contest'] }],
        Fri: [],
        Sat: [],
        Sun: [
          {
            name: 'AP Physics C – Mechanics',
            cat: 'Science',
            tags: ['StandardTest'],
          },
        ],
      },
    },
  ],
};

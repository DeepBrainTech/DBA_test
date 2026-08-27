/**
 * 文件用途：秋季合并课表（In-Person + Online）静态数据
 * 依赖关系：types/courses
 * 注意事项：无 InPersonOnly/OnlineOnly 标记的课程视为 Hybrid；旧 inPerson/fallOnline 可由本文件替代渲染
 */

import type { CourseTimetableData } from '@/types/courses';

export const fallTimetableData: CourseTimetableData = {
  badge: {
    icon: '📅',
    label: 'Fall Courses',
    className: 'bg-white text-slate-700',
  },
  sectionTitle: 'Fall Course Timetable',
  description:
    'Explore our course options. For more information, please visit the ',
  descriptionLink: { label: 'Courses', href: '/courses' },
  descriptionSuffix:
    ' tab. Filter by subject, type, and format (Hybrid / In-Person Only / Online Only).',
  sectionClassName: 'bg-[#FBF9F4]',
  cardVariant: 'white',
  rowMinHeightScale: 0.706,
  scheduleRows: [
    {
      time: '9:00 AM\n-\n10:30 AM',
      days: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [{ name: 'Chess I', cat: 'Chess', format: 'InPersonOnly' }],
        Sun: [{ name: 'Chess II', cat: 'Chess', format: 'InPersonOnly' }],
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
        Sat: [
          { name: 'Middle School ELO Intermediate', cat: 'Language' },
          {
            name: 'AP Biology',
            cat: 'Science',
            tags: ['StandardTest'],
            format: 'OnlineOnly',
          },
        ],
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
        Sun: [{ name: 'Chess II', cat: 'Chess', format: 'InPersonOnly' }],
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
        Mon: [
          {
            name: 'PSAT Reading & Writing',
            cat: 'Language',
            tags: ['StandardTest'],
            format: 'OnlineOnly',
          },
        ],
        Tue: [
          { name: 'AoPS Prealgebra', cat: 'Math' },
          { name: 'Elementary ELO Beginner', cat: 'Language' },
        ],
        Wed: [
          {
            name: 'PSAT Math',
            cat: 'Math',
            tags: ['StandardTest'],
            format: 'OnlineOnly',
          },
          { name: 'Elementary ELO Intermediate', cat: 'Language' },
        ],
        Thu: [{ name: 'Spark Math P1', cat: 'Math', format: 'InPersonOnly' }],
        Fri: [
          { name: 'Spark Math P2', cat: 'Math', format: 'InPersonOnly' },
          { name: 'Middle School ELO Beginner', cat: 'Language' },
        ],
        Sat: [],
        Sun: [
          {
            name: 'AP Chemistry',
            cat: 'Science',
            tags: ['StandardTest'],
            format: 'OnlineOnly',
          },
        ],
      },
    },
    {
      time: '4:30 PM\n-\n6:00 PM',
      days: {
        Mon: [{ name: 'Chinese', cat: 'Language', format: 'InPersonOnly' }],
        Tue: [{ name: 'Chinese', cat: 'Language', format: 'InPersonOnly' }],
        Wed: [{ name: 'Chinese', cat: 'Language', format: 'InPersonOnly' }],
        Thu: [{ name: 'Chinese', cat: 'Language', format: 'InPersonOnly' }],
        Fri: [{ name: 'Chinese', cat: 'Language', format: 'InPersonOnly' }],
        Sat: [{ name: 'Chinese', cat: 'Language', format: 'InPersonOnly' }],
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
          { name: 'Spark Math P3', cat: 'Math', format: 'InPersonOnly' },
        ],
        Fri: [{ name: 'Math Kangaroo G1–G2*', cat: 'Math', tags: ['Contest'] }],
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

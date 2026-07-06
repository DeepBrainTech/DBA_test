/**
 * 文件用途：课表 A（Current Timetable / Ongoing Courses）静态数据
 * 依赖关系：types/courses
 */

import type { CourseTimetableData } from '@/types/courses';

export const ongoingTimetableData: CourseTimetableData = {
  badge: {
    iconSrc: '/schedule/courses.png',
    label: 'Ongoing Courses',
    className: 'bg-[#FBF9F4] text-slate-700',
  },
  sectionTitle: 'Current Timetable',
  sectionClassName: 'bg-white',
  cardVariant: 'flat',
  courseNameLayout: 'title-meta',
  rowMinHeightScale: 1.32,
  scheduleRows: [
    {
      time: '9:00 AM\n-\n10:30 AM',
      days: {
        Mon: [
          { name: 'Physics Foundation\nDr. Cao | Grade 1-8', cat: 'Physics' },
          { name: 'BCA Writing\nEdward H.', cat: 'Language' },
        ],
        Tue: [{ name: 'BCA Writing\nEdward H.', cat: 'Language' }],
        Wed: [{ name: 'Physics Bowl\nDr. Cao', cat: 'Physics' }],
        Thu: [
          { name: 'Physics Foundation\nDr. Cao | Grade 1-8', cat: 'Physics' },
          { name: 'BCA Writing\nEdward H.', cat: 'Language' },
        ],
        Fri: [{ name: 'BCA Writing\nEdward H.', cat: 'Language' }],
        Sat: [],
        Sun: [{ name: 'Physics Bowl\nDr. Cao', cat: 'Physics' }],
      },
    },
    {
      time: '10:45 AM\n-\n12:15 PM',
      days: {
        Mon: [
          { name: 'BCA Math (G1)\nDr. Cao', cat: 'Math' },
          { name: 'Chess Beginner\n(10:30 AM - 12 PM)\nKamran. R', cat: 'Chess' },
        ],
        Tue: [
          { name: 'AoPS Geometry\nArielle A.', cat: 'Math' },
          { name: 'Chess Beginner\n(10:30 AM - 12 PM)\nKamran. R', cat: 'Chess' },
        ],
        Wed: [{ name: 'Chess Beginner\n(10:30 AM - 12 PM)\nKamran. R', cat: 'Chess' }],
        Thu: [
          { name: 'BCA Math (G1)\nDr. Cao', cat: 'Math' },
          { name: 'Chess Beginner\n(10:30 AM - 12 PM)\nKamran. R', cat: 'Chess' },
        ],
        Fri: [
          { name: 'AoPS Geometry\nArielle A.', cat: 'Math' },
          { name: 'Chess Beginner\n(10:30 AM - 12 PM)\nKamran. R', cat: 'Chess' },
        ],
        Sat: [
          { name: 'Multivariable Calculus\n(10 AM - 12 PM)\nDr. Cao', cat: 'Math' },
          { name: 'Chess Beginner\n(11 AM - 12:30 PM)\nDr. Chen | Grade 1-2', cat: 'Chess' },
        ],
        Sun: [],
      },
    },
    {
      time: '1:00 PM\n-\n2:30 PM',
      days: {
        Mon: [
          { name: 'Precalculus\nDr. Cao', cat: 'Math' },
          { name: 'Chinese\nYannie H.', cat: 'Language' },
        ],
        Tue: [
          { name: 'Physics C\nDr. Cao', cat: 'Physics' },
          { name: 'Chinese\nYannie H.', cat: 'Language' },
          { name: 'AI Beginner\nYani C.', cat: 'AI' },
        ],
        Wed: [
          { name: 'F=MA Physics Contest*\nDr. Cao', cat: 'Physics' },
          { name: 'Chinese\nYannie H.', cat: 'Language' },
        ],
        Thu: [
          { name: 'Precalculus\nDr. Cao', cat: 'Math' },
          { name: 'Chinese\nYannie H.', cat: 'Language' },
          { name: 'AI Intermediate\nYani C.', cat: 'AI' },
        ],
        Fri: [
          { name: 'Physics C\nDr. Cao', cat: 'Physics' },
          { name: 'Chinese\nYannie H.', cat: 'Language' },
        ],
        Sat: [
          { name: 'F=MA Physics Contest*\nDr. Cao', cat: 'Physics' },
          { name: 'Spanish Beginner\nJuan', cat: 'Language' },
        ],
        Sun: [],
      },
    },
    {
      time: '2:45 PM\n-\n4:15 PM',
      days: {
        Mon: [],
        Tue: [
          { name: 'Algebra 2\nDr. Cao', cat: 'Math' },
          { name: 'Go Beginner\nDr. Chen', cat: 'Chess' },
          { name: 'AI Beginner\nYani C.', cat: 'AI' },
        ],
        Wed: [],
        Thu: [{ name: 'AI Intermediate\nYani C.', cat: 'AI' }],
        Fri: [
          { name: 'Algebra 2\nDr. Cao', cat: 'Math' },
          { name: 'Go Beginner\nDr. Chen', cat: 'Chess' },
        ],
        Sat: [{ name: 'Mental Math\nDr. Chen', cat: 'Math' }],
        Sun: [],
      },
    },
    {
      time: '5:00 PM\n-\n6:30 PM',
      days: {
        Mon: [
          { name: 'AoPS PreAlgebra\n(4:30 - 6:00 PM)\nDr. Cao', cat: 'Math' },
          { name: 'AMC 10\nDr. Chen', cat: 'Math' },
        ],
        Tue: [{ name: 'AMC 8\nDr. Chen', cat: 'Math' }],
        Wed: [],
        Thu: [
          { name: 'AoPS PreAlgebra\n(4:30 - 6:00 PM)\nDr. Cao', cat: 'Math' },
          { name: 'AMC 10\nDr. Chen', cat: 'Math' },
        ],
        Fri: [{ name: 'AMC 8\nDr. Chen', cat: 'Math' }],
        Sat: [],
        Sun: [{ name: 'Physics\n(5 - 6:30 PM)\nDr. Cao', cat: 'Physics' }],
      },
    },
  ],
};

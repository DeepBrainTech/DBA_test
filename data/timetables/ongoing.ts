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
  scheduleRows: [
    {
      time: '11:00 AM\n-\n12:30 PM',
      days: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [
          {
            name: 'Chess Beginner\nDr. Chen\nGrade 1-2',
            cat: 'Chess',
          },
        ],
        Sun: [],
      },
    },
    {
      time: '1:00 PM\n-\n2:30 PM',
      days: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [
          {
            name: 'Pre-Algebra\nDr. Chen\nGrade 4-6',
            cat: 'Math',
          },
        ],
        Sun: [],
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
        Sat: [
          {
            name: 'Mental Math\nDr. Chen\nGrade 1-2 & 3-4',
            cat: 'Math',
          },
        ],
        Sun: [
          {
            name: 'AMC 10\n(3:00 - 4:30 PM)\nDr. Chen',
            cat: 'Math',
          },
        ],
      },
    },
    {
      time: '5:00 PM\n-\n6:30 PM',
      days: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
        Sun: [
          {
            name: 'Physics\nDr. Cao\nGrade 2-3',
            cat: 'Physics',
          },
        ],
      },
    },
  ],
};

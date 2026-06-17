/**
 * 文件用途：Schedule 页面静态数据源
 * 依赖关系：依赖 types/schedule、data/courses 夏季课表数据
 */

import { coursesPageData } from '@/data/courses';
import type { SchedulePageData } from '@/types/schedule';

export const schedulePageData: SchedulePageData = {
  heroTitle: 'Course Schedule',
  ongoingTimetable: {
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
              name: 'AMC 10 (3:00 PM - 4:30 PM)\nDr. Chen',
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
  },
  summerTimetable: {
    badge: {
      iconSrc: '/schedule/courses.png',
      label: 'Summer Courses',
      className: 'bg-white text-slate-700',
    },
    sectionTitle: 'Summer Course Timetable',
    description:
      'Explore our course options. For more information, please visit the ',
    descriptionLink: { label: 'Courses', href: '/courses' },
    sectionClassName: 'bg-[#FBF9F4]',
    cardVariant: 'white',
    scheduleRows: coursesPageData.timetable.scheduleRows,
  },
};

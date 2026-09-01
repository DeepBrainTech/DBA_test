/**
 * 文件用途：秋季合并课表（In-Person + Online）静态数据
 * 依赖关系：types/courses
 * 注意事项：无 InPersonOnly/OnlineOnly 标记的课程视为 Hybrid；教师名单同步自 Fall after-school academic enrichment program
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
        Sat: [
          { name: 'Chess I', teacher: 'Daniel', cat: 'Chess', format: 'InPersonOnly' },
        ],
        Sun: [
          { name: 'Chess II', teacher: 'Daniel', cat: 'Chess', format: 'InPersonOnly' },
        ],
      },
    },
    {
      time: '10:00 AM\n-\n11:30 AM',
      days: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
        Sun: [
          { name: 'Chess I', teacher: 'Kamran', cat: 'Chess', format: 'InPersonOnly' },
        ],
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
          {
            name: 'Middle School ELA Intermediate',
            teacher: 'Madiha',
            cat: 'Language',
            format: 'InPersonOnly',
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
        Sat: [
          {
            name: 'AP Pre-Calculus',
            teacher: 'Cao',
            cat: 'Math',
            tags: ['StandardTest'],
          },
        ],
        Sun: [
          { name: 'Chess II', teacher: 'Daniel', cat: 'Chess', format: 'InPersonOnly' },
        ],
      },
    },
    {
      time: '12:30 PM\n-\n2:00 PM',
      days: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
        Sun: [
          { name: 'Chess II', teacher: 'Kamran', cat: 'Chess', format: 'InPersonOnly' },
        ],
      },
    },
    {
      time: '1:30 PM\n-\n3:00 PM',
      days: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [
          { name: 'Chess II', teacher: 'Kamran', cat: 'Chess', format: 'InPersonOnly' },
        ],
        Sun: [],
      },
    },
    {
      time: '2:45 PM\n-\n4:15 PM',
      days: {
        Mon: [],
        Tue: [
          { name: 'AoPS Intermediate Algebra', teacher: 'Arielle', cat: 'Math', format: 'OnlineOnly' },
        ],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [{ name: 'Math Clinics', teacher: 'Cao', cat: 'Math' }],
        Sun: [],
      },
    },
    {
      time: '3:30 PM\n-\n5:00 PM',
      days: {
        Mon: [
          {
            name: 'PSAT Reading & Writing Online',
            teacher: 'Sarah',
            cat: 'Language',
            tags: ['StandardTest'],
            format: 'OnlineOnly',
          },
          { name: 'Physics Bowl', teacher: 'Cao', cat: 'Physics', tags: ['Contest'] },
          {
            name: 'AoPS Intro to Algebra',
            teacher: 'Arielle',
            cat: 'Math',
            format: 'OnlineOnly',
          },
        ],
        Tue: [
          { name: 'AoPS Prealgebra', teacher: 'Cao', cat: 'Math' },
          {
            name: 'Elementary ELA Beginner',
            teacher: 'Madiha',
            cat: 'Language',
            format: 'InPersonOnly',
          },
          {
            name: 'AP Biology Online',
            teacher: 'Sarah',
            cat: 'Science',
            tags: ['StandardTest'],
            format: 'OnlineOnly',
          },
        ],
        Wed: [
          {
            name: 'PSAT Math',
            teacher: 'Sarah',
            cat: 'Math',
            tags: ['StandardTest'],
            format: 'OnlineOnly',
          },
          {
            name: 'Elementary ELA Intermediate',
            teacher: 'Madiha',
            cat: 'Language',
            format: 'InPersonOnly',
          },
          { name: 'Algebra 1', teacher: 'Cao', cat: 'Math' },
          { name: 'Chess I', teacher: 'Kamran', cat: 'Chess', format: 'InPersonOnly' },
        ],
        Thu: [
          { name: 'Spark Math P1', teacher: 'Kaiwen', cat: 'Math', format: 'InPersonOnly' },
          { name: 'Algebra 2', teacher: 'Cao', cat: 'Math' },
          { name: 'AoPS Geometry', teacher: 'Arielle', cat: 'Math', format: 'OnlineOnly' },
        ],
        Fri: [
          { name: 'Spark Math P2', teacher: 'Kaiwen', cat: 'Math', format: 'InPersonOnly' },
          {
            name: 'Middle School ELA Beginner',
            teacher: 'Madiha',
            cat: 'Language',
            format: 'InPersonOnly',
          },
          { name: 'Geometry', teacher: 'Cao', cat: 'Math' },
        ],
        Sat: [],
        Sun: [
          {
            name: 'AP Chemistry Online',
            teacher: 'Sarah',
            cat: 'Science',
            tags: ['StandardTest'],
            format: 'OnlineOnly',
          },
          { name: 'AMC 10', teacher: 'Chen', cat: 'Math', tags: ['Contest'] },
        ],
      },
    },
    {
      time: '4:30 PM\n-\n6:00 PM',
      days: {
        Mon: [
          { name: 'Chinese', teacher: 'Yannie', cat: 'Language', format: 'InPersonOnly' },
          {
            name: 'SAT Reading & Writing',
            teacher: 'Nyamal',
            cat: 'Language',
            format: 'OnlineOnly',
          },
        ],
        Tue: [
          { name: 'Chinese', teacher: 'Yannie', cat: 'Language', format: 'InPersonOnly' },
          {
            name: 'SSAT Reading & Writing',
            teacher: 'Nyamal',
            cat: 'Language',
            format: 'OnlineOnly',
          },
        ],
        Wed: [
          { name: 'Chinese', teacher: 'Yannie', cat: 'Language', format: 'InPersonOnly' },
          { name: 'Creative Writing', teacher: 'Nyamal', cat: 'Language', format: 'OnlineOnly' },
        ],
        Thu: [
          { name: 'Chinese', teacher: 'Yannie', cat: 'Language', format: 'InPersonOnly' },
        ],
        Fri: [
          { name: 'Chinese', teacher: 'Yannie', cat: 'Language', format: 'InPersonOnly' },
        ],
        Sat: [
          { name: 'Chinese', teacher: 'Yannie', cat: 'Language', format: 'InPersonOnly' },
          { name: 'Math Kangaroo G3–G4', teacher: 'Cao', cat: 'Math', tags: ['Contest'] },
        ],
        Sun: [],
      },
    },
    {
      time: '5:00 PM\n-\n6:30 PM',
      days: {
        Mon: [{ name: 'AMC 8 Beginner', teacher: 'Cao', cat: 'Math', tags: ['Contest'] }],
        Tue: [{ name: 'Python 1', teacher: 'Cao', cat: 'ProgrammingAI' }],
        Wed: [{ name: 'BCA Math', teacher: 'Cao', cat: 'Math' }],
        Thu: [
          { name: 'AMC 8 Advanced', teacher: 'Chen', cat: 'Math', tags: ['Contest'] },
          { name: 'Spark Math P3', teacher: 'Kaiwen', cat: 'Math', format: 'InPersonOnly' },
        ],
        Fri: [
          { name: 'Math Kangaroo G5–G6', teacher: 'Chen', cat: 'Math', tags: ['Contest'] },
          { name: 'Math Kangaroo G1–G2', teacher: 'Cao', cat: 'Math', tags: ['Contest'] },
        ],
        Sat: [],
        Sun: [
          { name: 'AP Calculus AB/BC', teacher: 'Cao', cat: 'Math', tags: ['StandardTest'] },
        ],
      },
    },
    {
      time: '7:00 PM\n-\n8:30 PM',
      days: {
        Mon: [{ name: 'Honor Physics', teacher: 'Cao', cat: 'Science' }],
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
        Tue: [{ name: 'AP Physics 1', teacher: 'Cao', cat: 'Science', tags: ['StandardTest'] }],
        Wed: [],
        Thu: [{ name: 'F=MA Competition', teacher: 'Cao', cat: 'Science', tags: ['Contest'] }],
        Fri: [],
        Sat: [],
        Sun: [
          {
            name: 'AP Physics C – Mechanics',
            teacher: 'Cao',
            cat: 'Science',
            tags: ['StandardTest'],
          },
        ],
      },
    },
  ],
};

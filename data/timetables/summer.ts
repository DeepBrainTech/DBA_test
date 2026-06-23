/**
 * 文件用途：课表 B（Summer Course Timetable）静态数据
 * 依赖关系：types/courses
 */

import type { CourseTimetableData } from '@/types/courses';

export const summerTimetableData: CourseTimetableData = {
  badge: {
    icon: '📅',
    label: 'Summer Courses',
    className: 'bg-white text-slate-700',
  },
  sectionTitle: 'Summer Course Timetable',
  description:
    'Explore our course options. For more information, please visit the ',
  descriptionLink: { label: 'Courses', href: '/courses' },
  descriptionSuffix:
    ' tab. We offer both in-person and online options for courses in this timetable.',
  sectionClassName: 'bg-[#FBF9F4]',
  cardVariant: 'white',
  scheduleRows: [
    {
      time: '9:00 AM\n-\n10:30 AM',
      days: {
        Mon: [
          { name: 'Physics Foundation', cat: 'Physics' },
          { name: 'AoPS Prealgebra', cat: 'Math' },
          { name: 'BCA Writing', cat: 'Language' },
          { name: 'Chess Beginner', cat: 'Chess' },
        ],
        Tue: [
          { name: 'AP Physics 1', cat: 'Physics' },
          { name: 'AoPS Geometry', cat: 'Math' },
          { name: 'BCA Writing', cat: 'Language' },
          { name: 'Chess Beginner', cat: 'Chess' },
        ],
        Wed: [
          { name: 'Physics Bowl*', cat: 'Physics' },
          { name: 'Upper Elementary Math', cat: 'Math' },
          { name: 'ISEE English', cat: 'Language' },
          { name: 'Chess Beginner', cat: 'Chess' },
        ],
        Thu: [
          { name: 'Physics Foundation', cat: 'Physics' },
          { name: 'AoPS Prealgebra', cat: 'Math' },
          { name: 'BCA Writing', cat: 'Language' },
          { name: 'Chess Beginner', cat: 'Chess' },
        ],
        Fri: [
          { name: 'AP Physics 1', cat: 'Physics' },
          { name: 'AoPS Geometry', cat: 'Math' },
          { name: 'BCA Writing', cat: 'Language' },
          { name: 'Chess Beginner', cat: 'Chess' },
        ],
        Sat: [
          { name: 'Mental Math', cat: 'Math' },
          { name: 'Upper Elementary Math', cat: 'Math' },
          { name: 'ISEE English', cat: 'Language' },
        ],
        Sun: [{ name: 'Physics Bowl*', cat: 'Physics' }],
      },
    },
    {
      time: '10:45 AM\n-\n12:15 PM',
      days: {
        Mon: [
          { name: 'BCA Math', cat: 'Math' },
          { name: 'AoPS Introduction\nto Algebra', cat: 'Math' },
          { name: 'SAT Reading &\nWriting', cat: 'Language' },
          { name: 'Chess Advanced', cat: 'Chess' },
        ],
        Tue: [
          { name: 'AP Physics 2', cat: 'Physics' },
          { name: 'AoPS\nIntermediate\nAlgebra', cat: 'Math' },
          { name: 'PSAT English', cat: 'Language' },
          { name: 'Chess Advanced', cat: 'Chess' },
        ],
        Wed: [
          { name: 'Calculus BC', cat: 'Math' },
          { name: 'AoPS Prealgebra', cat: 'Math' },
          { name: 'ISEE Math', cat: 'Math' },
          { name: 'Chess Advanced', cat: 'Chess' },
        ],
        Thu: [
          { name: 'BCA Math', cat: 'Math' },
          { name: 'Algebra 1', cat: 'Math' },
          { name: 'SAT Reading &\nWriting', cat: 'Language' },
          { name: 'Chess Advanced', cat: 'Chess' },
        ],
        Fri: [
          { name: 'AP Physics 2', cat: 'Physics' },
          { name: 'Algebra 2', cat: 'Math' },
          { name: 'PSAT English', cat: 'Language' },
          { name: 'Chess Advanced', cat: 'Chess' },
        ],
        Sat: [
          { name: 'Calculus BC', cat: 'Math' },
          { name: 'ISEE Math', cat: 'Math' },
          { name: 'AoPS Prealgebra', cat: 'Math' },
        ],
        Sun: [{ name: 'Calculus BC', cat: 'Math' }],
      },
    },
    {
      time: '1:00 PM\n-\n2:30 PM',
      days: {
        Mon: [
          { name: 'BCA Writing', cat: 'Language' },
          { name: 'Interactive English', cat: 'Language' },
          { name: 'Chinese', cat: 'Language' },
          { name: 'Precalculus', cat: 'Math' },
        ],
        Tue: [
          { name: 'AP Physics C', cat: 'Physics' },
          { name: 'SAT Reading &\nWriting', cat: 'Language' },
          { name: 'Chinese', cat: 'Language' },
          { name: 'AI Beginner', cat: 'AI' },
          { name: 'Fog of War Chess\n& AI Thinking', cat: 'Chess' },
        ],
        Wed: [
          { name: 'F=MA Physics Contest*', cat: 'Physics' },
          { name: 'Chinese', cat: 'Language' },
          { name: 'Spanish Beginner', cat: 'Language' },
        ],
        Thu: [
          { name: 'Precalculus', cat: 'Math' },
          { name: 'Chinese', cat: 'Language' },
          { name: 'BCA Writing', cat: 'Language' },
          { name: 'AI Intermediate', cat: 'AI' },
        ],
        Fri: [
          { name: 'AP Physics C', cat: 'Physics' },
          { name: 'SAT Reading &\nWriting', cat: 'Language' },
          { name: 'Chinese', cat: 'Language' },
          { name: 'Fog of War Chess\n& AI Thinking', cat: 'Chess' },
        ],
        Sat: [
          { name: 'F=MA Physics Contest*', cat: 'Physics' },
          { name: 'SAT Math', cat: 'Math' },
          { name: 'Spanish Beginner', cat: 'Language' },
        ],
        Sun: [
          { name: 'Precalculus', cat: 'Math' },
          { name: 'SAT Math', cat: 'Math' },
        ],
      },
    },
    {
      time: '2:45 PM\n-\n4:15 PM',
      days: {
        Mon: [
          { name: 'BCA Math', cat: 'Math' },
          { name: 'Chinese', cat: 'Language' },
          { name: 'Vocabulary & Reading', cat: 'Language' },
        ],
        Tue: [
          { name: 'Algebra 2', cat: 'Math' },
          { name: 'AI Beginner\nProject', cat: 'AI' },
          { name: 'Go Beginner', cat: 'Chess' },
        ],
        Wed: [
          { name: 'Chinese', cat: 'Language' },
          { name: 'Spanish Intermediate', cat: 'Language' },
        ],
        Thu: [
          { name: 'BCA Math', cat: 'Math' },
          { name: 'Chinese', cat: 'Language' },
          { name: 'AI Intermediate\nProject', cat: 'AI' },
        ],
        Fri: [
          { name: 'Algebra 2', cat: 'Math' },
          { name: 'Go Beginner', cat: 'Chess' },
        ],
        Sat: [
          { name: 'Mental Math', cat: 'Math' },
          { name: 'Spanish Intermediate', cat: 'Language' },
        ],
        Sun: [{ name: 'Linear Algebra', cat: 'Math' }],
      },
    },
    {
      time: '4:30 PM\n-\n6:00 PM',
      days: {
        Mon: [
          { name: 'AoPS Prealgebra', cat: 'Math' },
          { name: 'AMC 10\n(5:00 - 6:30 PM)', cat: 'Math' },
        ],
        Tue: [
          { name: 'AoPS Introduction\nto Algebra', cat: 'Math' },
          { name: 'SparkEdu Math', cat: 'Math' },
          { name: 'AMC 8\n(5:00 - 6:30 PM)', cat: 'Math' },
        ],
        Wed: [{ name: 'Calculus AB', cat: 'Math' }],
        Thu: [
          { name: 'AoPS Prealgebra', cat: 'Math' },
          { name: 'SparkEdu Math', cat: 'Math' },
          { name: 'AMC 10\n(5:00 - 6:30 PM)', cat: 'Math' },
        ],
        Fri: [
          { name: 'AoPS Introduction\nto Algebra', cat: 'Math' },
          { name: 'AMC 8\n(5:00 - 6:30 PM)', cat: 'Math' },
        ],
        Sat: [{ name: 'Calculus AB', cat: 'Math' }],
        Sun: [{ name: 'Calculus AB', cat: 'Math' }],
      },
    },
    {
      time: '6:15 PM\n-\n7:45 PM',
      days: {
        Mon: [{ name: 'AoPS Geometry', cat: 'Math' }],
        Tue: [{ name: 'Multivariable\nCalculus', cat: 'Math' }],
        Wed: [{ name: 'SAT Math', cat: 'Math' }],
        Thu: [{ name: 'AoPS Geometry', cat: 'Math' }],
        Fri: [{ name: 'Multivariable\nCalculus', cat: 'Math' }],
        Sat: [{ name: 'Linear Algebra', cat: 'Math' }],
        Sun: [{ name: 'Multivariable\nCalculus', cat: 'Math' }],
      },
    },
  ],
};

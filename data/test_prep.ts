/**
 * 文件用途：提供 Test Prep 页面静态数据源
 * 依赖关系：依赖 types/test_prep.ts
 * 资源路径：
 *   - 封面与滚动图标：public/test_prep/hero/
 *   - Success Stories 截图：public/test_prep/success_stories/
 *   - 课程图标：public/test_prep/courses/icons/
 *   - 方法论图标：public/test_prep/growth/
 */

import type { TestPrepPageData } from '@/types/test_prep';

export const testPrepPageData: TestPrepPageData = {
  hero: {
    title: 'Test Prep',
    subtitle: 'Test Prep That Builds Scores, Skills, and Confidence',
    backgroundImage: '/test_prep/hero/cover.png',
    scrollIcon: '/test_prep/hero/5.svg',
    features: [
      { emoji: '🎓', label: 'College Admissions' },
      { emoji: '🏛️', label: 'University Exposure' },
      { emoji: '🏅', label: 'Ivy League Faculty' },
      { emoji: '📈', label: 'Portfolio Building' },
    ],
  },
  successStories: {
    badgeIcon: '📈',
    badgeText: 'Real Results',
    title: 'Success Stories',
    stories: [
      {
        title: 'SAT 1530',
        scoreImage: '/test_prep/success_stories/sat-1530.svg',
        studentInitial: 'J',
        studentName: 'Jerry W.',
        grade: '12th Grade',
      },
      {
        title: 'SAT 1460',
        titleSuffix: 'Super Score',
        scoreImage: '/test_prep/success_stories/sat-1460.svg',
        studentInitial: 'V',
        studentName: 'Vicky T.',
        grade: '12th Grade',
      },
    ],
    progressStory: {
      firstTestImage: '/test_prep/success_stories/sat-first-test.svg',
      secondTestImage: '/test_prep/success_stories/sat-second-test.svg',
      pointsGain: '+210 pts',
      duration: '5 months',
      quote:
        'Huge thanks to Professor Zhang for helping me elevate my SAT scores! He completely transformed the way I look at SAT math, and the experience has been incredibly rewarding.',
    },
  },
  courses: {
    badgeIcon: '📖️',
    badgeText: 'Programs',
    title: 'Test Prep Courses',
    subtitle:
      "Choose the pathway that matches your child's next goal. Each program includes diagnostic review, expert instruction, targeted homework, and regular parent feedback.",
    programs: [
      {
        index: 1,
        title: 'BCA Prep',
        description:
          'Specialized admissions preparation for Bergen County Academies and related selective high school pathways, built around advanced math, critical reading, writing, and interview readiness.',
        icon: '/test_prep/courses/icons/bca.svg',
        tags: ['BCA', 'Bergen Tech'],
      },
      {
        index: 2,
        title: 'SSAT/ISEE Prep',
        description:
          'Preparation for independent school entrance exams, including verbal reasoning, reading comprehension, quantitative reasoning, math achievement, and essay strategy.',
        icon: '/test_prep/courses/icons/ssat.svg',
        tags: ['Vocab', 'Reading', 'Math', 'Essay'],
      },
      {
        index: 3,
        title: 'AP Exam Prep',
        description:
          'Targeted AP review for high school students who want stronger unit mastery, better free-response execution, and a confident final push before May exams.',
        icon: '/test_prep/courses/icons/ap.svg',
        tags: ['Calculus AB/BC', 'Physics'],
      },
      {
        index: 4,
        title: 'SAT Prep',
        description:
          'Digital SAT preparation for grades 9-12, focused on Reading & Writing, Math, timing, question patterns, and adaptive test strategy.',
        icon: '/test_prep/courses/icons/sat.svg',
        tags: ['College Admission', 'National Merit', 'Superscore'],
      },
      {
        index: 5,
        title: 'ACT Prep',
        description:
          'ACT preparation for English, Math, Reading, Science, and optional Writing, designed for students whose strengths may fit the ACT format better than the SAT.',
        icon: '/test_prep/courses/icons/act.svg',
        tags: ['SAT vs. ACT', 'Data Interpretation'],
      },
      {
        index: 6,
        title: 'AMC Prep',
        description:
          'Master the creative problem-solving skills and advanced mathematical logic needed to excel on the AMC and qualify for the next level.',
        icon: '/test_prep/courses/icons/amc.svg',
        tags: ['AMC 8', 'AMC 10'],
      },
    ],
  },
  scoreGrowthSystem: {
    badgeIcon: '💡',
    badgeText: 'Our Method',
    title: 'DeepBrain Score Growth System',
    subtitle: 'We do not guess. We diagnose, teach, practice, review, and adjust.',
    steps: [
      {
        title: 'Diagnose',
        description:
          'We identify the strengths and weaknesses, then build a personalized roadmap.',
        icon: '/test_prep/growth/shield-ellipsis.svg',
      },
      {
        title: 'Teach',
        description:
          'Expert instructors teach the concepts behind the questions, not just shortcuts.',
        icon: '/test_prep/growth/file-chart-column-increasing.svg',
      },
      {
        title: 'Practice',
        description:
          'Students complete targeted drills, full-length practice tests, and homework aligned to their error patterns.',
        icon: '/test_prep/growth/git-compare-arrows.svg',
      },
      {
        title: 'Improve',
        description:
          'We adjust the plan based on performance data, confidence, pacing, and upcoming deadlines.',
        icon: '/test_prep/growth/trending-up.svg',
      },
    ],
  },
};

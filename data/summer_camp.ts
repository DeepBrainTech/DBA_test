/**
 * 文件用途：Summer Camp 页面数据
 * 依赖关系：依赖 types/summer_camp.ts 类型定义
 * 注意事项：文案与 2026 Summer Camp 宣传物料保持一致，集中管理便于维护
 */

import type { SummerCampPageData } from '@/types/summer_camp';

/**
 * Summer Camp 页面完整数据
 */
export const summerCampPageData: SummerCampPageData = {
  hero: {
    title: '2026 Summer Camp',
    subtitle: 'Give your child the edge to think, create, and succeed!',
    backgroundImage: '/summer_camp/hero/summer_camp_cover.png',
    features: [
      { label: 'Theory + Practice' },
      { label: 'Fun Experiments' },
      { label: 'Strategic Games' },
      { label: 'Confidence Building' },
    ],
    ctaText: 'Join Us This Summer',
    scrollTargetId: 'summer-camp-highlights',
    scrollIcon: '/summer_camp/hero/mouse.svg',
  },
  highlights: {
    badgeIcon: '/summer_camp/hightlights/hightlight.png',
    badgeText: 'Highlights',
    title: 'Program Highlights',
    subtitle: '5 Classes. One complete learning day.',
    cards: [
      {
        id: 'enrichment',
        title: '8-week Enrichment',
        description:
          "See your children's progress in the 8-week enrichment program.",
        iconSrc: '/summer_camp/hightlights/1.svg',
      },
      {
        id: 'session',
        title: '1.5 hr',
        description: 'Enjoy the 1.5 hr class session with fun, engaging courses',
        iconSrc: '/summer_camp/hightlights/2.svg',
      },
      {
        id: 'class-size',
        title: 'Small Class Size',
        description: 'Small class sizes ensure our teaching is effective and supportive.',
        iconSrc: '/summer_camp/hightlights/3.svg',
      },
      {
        id: 'growth',
        title: 'Personal Growth',
        description: 'Build skills today. Lead tomorrow.',
        iconSrc: '/summer_camp/hightlights/4.svg',
      },
    ],
  },
  program: {
    badgeIcon: '/summer_camp/program/program.png',
    badgeText: 'Program',
    title: 'Full-day Summer Camp Program',
    subtitle: 'Students rotate through all five core subjects every day!',
    subjects: [
      {
        id: 'chess',
        name: 'Chess',
        iconSrc: '/summer_camp/program/chess.svg',
        highlights: [
          'Strategic Thinking',
          'Problem Solving',
          'Pattern Recognition',
          'Focus & Patience',
          'Fun & Competition',
        ],
      },
      {
        id: 'mathematics',
        name: 'Mathematics',
        iconSrc: '/summer_camp/program/math.svg',
        highlights: [
          'Logical Reasoning',
          'Problem Solving',
          'Math Concepts',
          'Competition Prep',
          'Building Confidence',
        ],
      },
      {
        id: 'english',
        name: 'English',
        iconSrc: '/summer_camp/program/english.svg',
        highlights: [
          'Reading Comprehension',
          'Writing Skills',
          'Vocabulary Building',
          'Critical Thinking',
          'Communication',
        ],
      },
      {
        id: 'chinese-spanish',
        name: 'Chinese/Spanish',
        iconSrc: '/summer_camp/program/chinese.svg',
        highlights: [
          'Reading & Writing',
          'Language Fluency',
          'Cultural Exploration',
          'Communication',
          'Bilingual Advantage',
        ],
      },
      {
        id: 'robotics',
        name: 'Robotics',
        iconSrc: '/summer_camp/program/robot.svg',
        highlights: [
          'Robotics Building',
          'Engineering Design',
          'Coding Concepts',
          'Team Projects',
          'Innovation & Fun',
        ],
      },
    ],
    registerButtonText: 'Register Now',
    registerUrl: 'https://forms.gle/EZhgaiGQY8W9ZXWSA',
  },
};

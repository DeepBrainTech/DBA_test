/**
 * 文件用途：Summer Camp / Play Day 页面数据
 * 依赖关系：依赖 types/play_day.ts 类型定义
 * 注意事项：文案与 2026 Summer Camp 宣传物料保持一致，集中管理便于维护
 */

import type { PlayDayPageData } from '@/types/play_day';

/**
 * Summer Camp 页面完整数据
 */
export const playDayPageData: PlayDayPageData = {
  hero: {
    badge: '☀️ Summer Camp',
    title: '2026 Summer Camp',
    subtitle:
      'Think Deeply, Learn Deeply.\nThis summer, give your child the edge to think, create & succeed!',
  },
  intro: {
    title: 'Full-Day Summer Camp Program — Grades K–5',
    description:
      'An 8-week enrichment program starting the week of June 15, 2026. Students rotate through five core classes each day — 1.5 hours per class — in small groups designed for maximum growth. Build skills today. Lead tomorrow.',
  },
  subjects: [
    {
      name: 'Chess',
      highlights: [
        'Strategic Thinking',
        'Problem Solving',
        'Pattern Recognition',
        'Focus & Patience',
        'Fun & Competition',
      ],
    },
    {
      name: 'Mathematics',
      highlights: [
        'Logical Reasoning',
        'Problem Solving',
        'Math Concepts',
        'Competition Prep',
        'Building Confidence',
      ],
    },
    {
      name: 'English',
      highlights: [
        'Reading Comprehension',
        'Writing Skills',
        'Vocabulary Building',
        'Critical Thinking',
        'Communication',
      ],
    },
    {
      name: 'Chinese / Spanish',
      highlights: [
        'Reading & Writing',
        'Language Fluency',
        'Cultural Exploration',
        'Communication',
        'Bilingual Advantage',
      ],
    },
    {
      name: 'Robotics',
      highlights: [
        'Robotics Building',
        'Engineering Design',
        'Coding Concepts',
        'Team Projects',
        'Innovation & Fun',
      ],
    },
  ],
  whyChoose: {
    title: 'Why Families Choose DeepBrain',
    items: [
      'Experienced & Passionate Instructors',
      'Critical Thinking & Problem Solving Focus',
      'Integration of Chess, Math, Language, and STEM',
      'Small Class Sizes & Personalized Attention',
      'Focus on Building Confidence, Creativity & Future Leadership',
      'Safe, Supportive & Inspiring Learning Environment',
    ],
  },
  schedule: {
    timeRange: 'Full-Day Program · 5 Classes Daily · 1.5 Hours Each',
    dates: [
      {
        year: '2026',
        days: '8-week enrichment program, starting the week of June 15',
      },
    ],
  },
  offers: [
    'Registration Now Open!',
    'Early Bird Discount — Register Early & Save!',
    'Limited Spots Available — Reserve Your Spot Today!',
  ],
  location: {
    addresses: ['120 County Rd, Suite 100-101, Tenafly, NJ 07670'],
    phone: '914-488-4460',
    email: 'info@deepbrainacademy.org',
    qrCodeImage: '/play_day/wechat_qr.jpg',
    qrCodeText: 'Scan to Register Today!',
  },
  registerButtonText: 'Register Now',
  registerUrl: 'https://forms.gle/EZhgaiGQY8W9ZXWSA',
};

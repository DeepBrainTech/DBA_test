/**
 * 文件用途：Play Day 页面数据
 * 依赖关系：依赖 types/play_day.ts 类型定义
 * 注意事项：数据与设计稿保持一致，所有文案集中管理便于维护
 */

import type { PlayDayPageData } from '@/types/play_day';

/**
 * Play Day 页面完整数据
 */
export const playDayPageData: PlayDayPageData = {
  hero: {
    badge: '🎨 Play Day',
    title: 'Math Art Play Day',
    subtitle: 'Chess × Go x Math × Art × Sudoku\nDay Workshop For Young Thinkers',
  },
  intro: {
    title: 'Sharpen your mind through play!',
    description:
      'Join us for a day of strategic games and math/logic puzzles that build focus, creativity, and problem-solving skills - all while having fun with friends.',
  },
  schedule: {
    timeRange: '9:00 AM - 3:30 PM',
    dates: [
      {
        year: '2025',
        days: 'Dec 19, 26-31',
      },
      {
        year: '2026',
        days: 'Jan 2, 19; Feb 16-18; Mar 20; Apr 3, 6-10; May 25; Jun 19, 23-24',
      },
    ],
  },
  location: {
    addresses: [
      '120 County Rd, Suite 100-101, Tenafly, NJ'
    ],
    qrCodeImage: '/play_day/wechat_qr.jpg',
    qrCodeText: 'Scan to join our\nWeChat Community',
  },
  registerButtonText: 'Register Now',
};

/**
 * 文件用途：Schedule 页面 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule',
  description:
    'View DeepBrain Academy ongoing and summer course timetables for physics, math, chess, languages, and AI.',
  alternates: {
    canonical: '/schedule',
  },
  openGraph: {
    title: 'Course Schedule | DeepBrain Academy',
    description:
      'Current and summer class schedules for all DeepBrain Academy programs.',
    url: 'https://www.deepbrainacademy.org/schedule',
  },
};

export default function ScheduleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

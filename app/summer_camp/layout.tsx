/**
 * 文件用途：Summer Camp 页面 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 * 注意事项：页面内容由 summer_camp 数据与组件驱动
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Summer Camp',
  description:
    'DeepBrain Academy 2026 Summer Camp for grades K–5. Full-day program with chess, math, English, Chinese/Spanish, and robotics. Starting June 15, 2026.',
  alternates: {
    canonical: '/summer_camp',
  },
  openGraph: {
    title: 'Summer Camp | DeepBrain Academy',
    description:
      'A day of strategic games and math/logic puzzles that build focus, creativity, and problem-solving skills.',
    url: 'https://www.deepbrainacademy.org/summer_camp',
    images: [{ url: '/nav_footer/logo_with_text.png' }],
  },
};

export default function SummerCampLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

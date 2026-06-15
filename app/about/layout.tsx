/**
 * 文件用途：About Us 页面 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 * 注意事项：明确页面标题，避免搜索结果从 Logo 图片 alt 中抽取标题
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about DeepBrain Academy, our mission, whole-brain learning philosophy, and Tenafly, NJ learning center.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | DeepBrain Academy',
    description:
      'DeepBrain Academy helps students learn how to think, adapt, and grow with confidence.',
    url: 'https://www.deepbrainacademy.org/about',
    images: [{ url: '/nav_footer/logo_with_text.png' }],
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

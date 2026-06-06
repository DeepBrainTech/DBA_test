/**
 * 文件用途：Courses 页面 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 * 注意事项：标题避免被搜索结果误识别为旧 Summer Camp 页面
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courses',
  description:
    'Explore DeepBrain Academy courses in physics, math, chess, languages, AI, and academic enrichment for school-year and seasonal learning.',
  alternates: {
    canonical: '/courses',
  },
  openGraph: {
    title: 'Courses | DeepBrain Academy',
    description:
      'Course schedules and information for physics, math, chess, languages, and AI.',
    url: 'https://www.deepbrainacademy.org/courses',
  },
};

export default function CoursesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

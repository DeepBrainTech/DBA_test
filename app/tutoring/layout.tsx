/**
 * 文件用途：Tutoring 页面 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tutoring',
  description:
    'Connect with carefully selected instructors at DeepBrain Academy. Personalized tutoring for math, science, test prep, and more — curated by our academic team.',
  alternates: {
    canonical: '/tutoring',
  },
  openGraph: {
    title: 'Tutoring | DeepBrain Academy',
    description:
      'Personalized one-on-one tutoring for math, science, and test prep with carefully vetted instructors.',
    url: 'https://www.deepbrainacademy.org/tutoring',
  },
};

export default function TutoringLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

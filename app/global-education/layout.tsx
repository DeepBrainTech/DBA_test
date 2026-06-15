/**
 * 文件用途：Global Education 页面 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Education',
  description:
    'Top resources, prestigious institutions, Ivy League mentors, and direct admission pathways for students pursuing global education.',
  alternates: {
    canonical: '/global-education',
  },
  openGraph: {
    title: 'Global Education | DeepBrain Academy',
    description:
      'Comprehensive global education planning — profile building, admissions strategy, and mentorship for top universities.',
    url: 'https://www.deepbrainacademy.org/global-education',
    images: [{ url: '/global/Hero/cover.png' }],
  },
};

export default function GlobalEducationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

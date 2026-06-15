/**
 * 文件用途：Test Prep 页面 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test Prep',
  description:
    'Test prep that builds scores, skills, and confidence — SAT, ACT, SSAT/ISEE, AP, BCA, and AMC programs with expert instruction.',
  alternates: {
    canonical: '/test_prep',
  },
  openGraph: {
    title: 'Test Prep | DeepBrain Academy',
    description:
      'SAT, ACT, SSAT/ISEE, AP, BCA, and AMC test prep programs with proven score growth and expert instruction.',
    url: 'https://www.deepbrainacademy.org/test_prep',
    images: [{ url: '/test_prep/hero/cover.png' }],
  },
};

export default function TestPrepLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

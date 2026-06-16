/**
 * 文件用途：College Counseling 页面 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'College Counseling',
  description:
    'Top resources, prestigious institutions, Ivy League mentors, and direct admission pathways for students pursuing college counseling.',
  alternates: {
    canonical: '/college_counseling',
  },
  openGraph: {
    title: 'College Counseling | DeepBrain Academy',
    description:
      'Comprehensive college counseling — profile building, admissions strategy, and mentorship for top universities.',
    url: 'https://www.deepbrainacademy.org/college_counseling',
    images: [{ url: '/college_counseling/Hero/cover.png' }],
  },
};

export default function CollegeCounselingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

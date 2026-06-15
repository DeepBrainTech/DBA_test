/**
 * 文件用途：Programming 页面 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programming',
  description:
    'Master coding and build the future with DeepBrain Academy programming courses — from fundamentals to AI and real-world projects.',
  alternates: {
    canonical: '/programming',
  },
  openGraph: {
    title: 'Programming | DeepBrain Academy',
    description:
      'Structured coding curriculum for young innovators — learn to code, build projects, and develop computational thinking.',
    url: 'https://www.deepbrainacademy.org/programming',
    images: [{ url: '/programming/hero/1.png' }],
  },
};

export default function ProgrammingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

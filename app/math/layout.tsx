/**
 * 文件用途：Math 页面 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Math',
  description:
    'Beyond problem solving: master the logic behind the numbers with Olympiad math, PRE-AMC, and AMC programs at DeepBrain Academy.',
  alternates: {
    canonical: '/math',
  },
  openGraph: {
    title: 'Math | DeepBrain Academy',
    description:
      'Olympiad math, PRE-AMC, and AMC enrichment with visual concepts, small classes, and world-class coaching.',
    url: 'https://www.deepbrainacademy.org/math',
    images: [{ url: '/math/hero/math_background.jpg' }],
  },
};

export default function MathLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

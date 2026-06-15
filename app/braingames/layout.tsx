/**
 * 文件用途：Brain Games 页面 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brain Games',
  description:
    'Chess and Go programs that build focus, resilience, and strategic thinking — small board, big vision at DeepBrain Academy.',
  alternates: {
    canonical: '/braingames',
  },
  openGraph: {
    title: 'Brain Games | DeepBrain Academy',
    description:
      'Chess and Go training for brain development, concentration, decision-making, and skill certification.',
    url: 'https://www.deepbrainacademy.org/braingames',
    images: [{ url: '/braingames/hero/cover.png' }],
  },
};

export default function BrainGamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

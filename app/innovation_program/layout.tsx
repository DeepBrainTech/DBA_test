/**
 * 文件用途：Innovation Program 页面 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 * 注意事项：旧 summer_camp 页面已迁移到本路由，canonical 必须保持指向当前页面
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation Program',
  description:
    'DeepBrain Academy Project-Based Innovation Programs cultivate curiosity, creativity, STEM innovation, AI strategy, and real-world problem solving.',
  alternates: {
    canonical: '/innovation_program',
  },
  openGraph: {
    title: 'Innovation Program | DeepBrain Academy',
    description:
      'Project-based STEM innovation and AI strategy programs for young learners.',
    url: 'https://www.deepbrainacademy.org/innovation_program',
    images: [{ url: '/courses/hero/cover.png' }],
  },
};

export default function InnovationProgramLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

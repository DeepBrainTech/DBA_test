/**
 * 文件用途：Learning Program 页面 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 * 注意事项：旧 summer_camp 页面已迁移到本路由，canonical 必须保持指向当前页面
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning Program',
  description:
    'DeepBrain Academy Project-Based Learning Programs cultivate curiosity, creativity, STEM innovation, AI strategy, and real-world problem solving.',
  alternates: {
    canonical: '/learning_program',
  },
  openGraph: {
    title: 'Learning Program | DeepBrain Academy',
    description:
      'Project-based STEM innovation and AI strategy programs for young learners.',
    url: 'https://www.deepbrainacademy.org/learning_program',
  },
};

export default function LearningProgramLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

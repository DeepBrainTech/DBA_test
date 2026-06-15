/**
 * 文件用途：首页 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 * 注意事项：page.tsx 为 client 组件，metadata 须放在 layout 中
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DeepBrain Academy',
  description:
    'We offer math thinking, chess, programming, and global education support for ages 6-18, helping children learn with joy and grow through challenges.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DeepBrain Academy',
    description:
      'Math thinking, chess, programming, and global education support for ages 6-18.',
    url: 'https://www.deepbrainacademy.org',
    images: [{ url: '/nav_footer/logo_with_text.png' }],
  },
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

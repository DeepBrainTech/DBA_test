/**
 * 文件用途：Referral Program 页面 SEO 元数据配置
 * 依赖关系：依赖 Next.js Metadata 类型
 * 注意事项：页面内容仍由 page.tsx 负责，layout 只处理元数据
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Referral Program',
  description:
    'Invite a family to experience DeepBrain Academy and unlock exclusive benefits together through our Referral Program.',
  alternates: {
    canonical: '/referral',
  },
};

export default function ReferralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

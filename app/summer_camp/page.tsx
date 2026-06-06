/**
 * 文件用途：旧 Summer Camp 路由迁移页，引导搜索引擎和用户前往 Learning Program
 * 依赖关系：依赖 Next.js Metadata 类型和 Link 组件
 * 注意事项：静态导出无法在代码层提供真实 301，部署平台仍需配置永久重定向
 */

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Learning Program',
  description:
    'The former Summer Camp page has moved to DeepBrain Academy Learning Program.',
  alternates: {
    canonical: '/learning_program',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SummerCampRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/learning_program" />
      <main className="min-h-screen bg-[#FBF9F4] px-6 py-24 text-center text-[#2C3E50]">
        <h1 className="text-3xl font-bold">Learning Program</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-[#5F6F7E]">
          This page has moved. Please visit the updated Learning Program page.
        </p>
        <Link
          href="/learning_program"
          className="mt-8 inline-flex rounded-md bg-[#274777] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1F365C]"
        >
          Go to Learning Program
        </Link>
      </main>
    </>
  );
}

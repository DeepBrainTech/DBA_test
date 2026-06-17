/**
 * 文件用途：生成 sitemap.xml，帮助搜索引擎优先发现当前有效页面
 * 依赖关系：依赖 Next.js MetadataRoute 类型与 data/blog 的 blogSlugs
 */

import type { MetadataRoute } from 'next';

import { blogSlugs } from '@/data/blog';

export const dynamic = 'force-static';

const baseUrl = 'https://www.deepbrainacademy.org';

const staticRoutes = [
  '',
  '/innovation_program',
  '/summer_camp',
  '/courses',
  '/schedule',
  '/college_counseling',
  '/math',
  '/braingames',
  '/programming',
  '/test_prep',
  '/tutoring',
  '/about',
];

const blogRoutes = blogSlugs.map((slug) => `/blog/${slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...staticRoutes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/blog/') ? 0.6 : 0.8,
  }));
}

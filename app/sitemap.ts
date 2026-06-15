/**
 * 文件用途：生成 sitemap.xml，帮助搜索引擎优先发现当前有效页面
 * 依赖关系：依赖 Next.js MetadataRoute 类型
 */

import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const baseUrl = 'https://www.deepbrainacademy.org';
const lastModified = '2026-06-06';

const routes = [
  '',
  '/learning_program',
  '/summer_camp',
  '/courses',
  '/global-education',
  '/math',
  '/braingames',
  '/programming',
  '/tutoring',
  '/about',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}

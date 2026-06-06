/**
 * 文件用途：生成 robots.txt，告诉搜索引擎可抓取页面与站点地图位置
 * 依赖关系：依赖 Next.js MetadataRoute 类型
 * 注意事项：旧 summer_camp 已迁移，禁止继续抓取旧路径
 */

import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/summer_camp'],
    },
    sitemap: 'https://www.deepbrainacademy.org/sitemap.xml',
  };
}

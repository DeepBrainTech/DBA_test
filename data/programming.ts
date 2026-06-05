/**
 * 文件用途：提供 Programming 页面静态数据源
 * 依赖关系：依赖 types/programming.ts，被 components/programming/ProgrammingPage 等消费
 * 注意事项：英雄区与 learning_program 结构一致，图片位于 public/programming/hero/
 */

import type { ProgrammingHeroData } from '@/types/programming';

export const programmingHeroData: ProgrammingHeroData = {
  title: 'Programming',
  subtitle: 'Master Coding. Build the Future.',
  backgroundImage: '/programming/hero/cover.png',
  features: [
    { label: 'Project-Based Learning' },
    { label: 'AI & Machine Learning' },
    { label: 'USACO Competition Prep' },
    { label: 'Admissions Advantage' },
  ],
};

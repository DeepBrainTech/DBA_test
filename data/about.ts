/**
 * 文件用途：关于我们页面数据配置
 * 依赖关系：依赖 types/about.ts 中的类型定义
 * 注意事项：数据修改后需要确保类型匹配
 */

import type { PhilosophyCardConfig, Location, HeroContent } from '@/types/about';

/**
 * 首屏内容数据
 */
export const heroContent: HeroContent = {
  title: 'Our Mission',
  description:
    'DeepBrain Academy is not a test-prep factory. It was born from a desire to create a place where students learn how to think, not just what to memorize. We believe that true academic excellence is not determined by school labels, but by how the brain learns, adapts, and thinks.',
};

/**
 * 哲学原则卡片配置列表
 */
export const philosophyCards: PhilosophyCardConfig[] = [
  {
    index: 1,
    title: 'Non-linear growth is normal',
    detail: 'Late bloomers often become deep thinkers.',
    circleColor: '#9B8FD8',
    cardBg: 'linear-gradient(to bottom, #9B8FD81A, #9B8FD81A)',
    cardBorderColor: '#9B8FD81A',
    titleClassName: 'text-xl md:text-2xl font-bold text-[#2C3E50] mb-2',
    detailClassName: 'text-base text-[#7C8B99] leading-relaxed',
  },
  {
    index: 2,
    title: 'Whole-brain development matters',
    detail: 'Logic, creativity, memory, spatial reasoning, and metacognition must work together.',
    circleColor: '#6BB6FF',
    cardBg: '#6BB6FF20',
    cardBorderColor: '#6BB6FF20',
    titleClassName: 'text-xl md:text-2xl font-bold text-[#2C3E50] mb-2',
    detailClassName: 'text-base text-[#7C8B99] leading-relaxed',
  },
  {
    index: 3,
    title: 'Thinking skills come before content',
    detail: 'Strong thinking makes every subject easier—forever.',
    circleColor: '#F4A460',
    cardBg: '#F4A46020',
    cardBorderColor: '#F4A46020',
    titleClassName: 'text-xl md:text-2xl font-bold text-[#2C3E50] mb-2',
    detailClassName: 'text-base text-[#7C8B99] leading-relaxed',
  },
];

/**
 * 位置信息数据
 */
export const location: Location = {
  name: 'DeepBrain Academy',
  address: '120 County Rd, Suite 100-101, Tenafly, NJ 07670',
  phone: '914-488-4460',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6028.930857005808!2d-73.96620757921829!3d40.92746559425038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f1bfbdb0ab33%3A0xf426db7344911778!2s120%20County%20Rd%2C%20Tenafly%2C%20NJ%2007670!5e0!3m2!1sen!2sus!4v1769717629979!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
  googleMapsViewUrl: 'https://www.google.com/maps/search/?api=1&query=120+County+Rd+Tenafly+NJ+07670',
};

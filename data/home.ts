/**
 * 文件用途：首页数据配置
 * 依赖关系：依赖 types/program.ts 中的类型定义
 * 注意事项：数据修改后需要确保类型匹配
 */

import type { Program, TrustBadge, Advantage, StudentAchievement, NewsArticle } from '@/types/program';

/**
 * 核心课程列表
 */
export const programs: Program[] = [
  {
    icon: '📊',
    iconSrc: '/KeyPrograms/Math.svg',
    title: 'Math',
    subtitle: 'Build Logic · Spark Interest',
    description: 'Fun, structured learning that builds math thinking and problem-solving from basics to competitions.',
    features: ['Step-by-step curriculum', 'Mind map practice', 'Contest problem review', '1 on 1 support'],
    color: '#7EC97E',
    bgGradient: 'from-[rgba(126,201,126,0.1)] to-[rgba(107,184,107,0.1)]'
  },
  {
    icon: '♟️',
    iconSrc: '/KeyPrograms/Chess.svg',
    title: 'Chess',
    subtitle: 'Build Strategy · Perspective',
    description: 'Structured coaching from beginner to advanced levels develops strategic thinking and resilience.',
    features: ['Beginner to rank courses', 'Practice matches', 'Master game analysis', 'Online & offline competition'],
    color: '#F4A460',
    bgGradient: 'from-[rgba(244,164,96,0.1)] to-[rgba(232,148,81,0.1)]'
  },
  {
    icon: '🌍',
    iconSrc: '/KeyPrograms/Global_Education.svg',
    title: 'Global Education',
    subtitle: 'Plan Ahead · Go Global',
    description: 'One-step support for applications, language skills, and profile enhancement.',
    features: ['Personalized plans', 'Elite school guidance', 'Language improvement', 'Profile building'],
    color: '#9B8FD8',
    bgGradient: 'from-[rgba(155,143,216,0.1)] to-[rgba(138,126,199,0.1)]'
  },
  {
    icon: '💻',
    iconSrc: '/KeyPrograms/Programming.svg',
    title: 'Programming',
    subtitle: 'Learn to code · Develop the brain',
    description: "Don't just let children play games; teach them how to create games",
    features: ['Extensive programming experience', 'Learning Path Planning', 'Creative Projects', 'competition awards'],
    color: '#4ECDC4',
    bgGradient: 'from-[rgba(78,205,196,0.1)] to-[rgba(69,183,209,0.1)]'
  }
];

/**
 * 信任徽章数据
 */
export const trustBadges: TrustBadge[] = [
  { emoji: '👨‍🎓', title: '2,000+', desc: 'Past Students', color: '#7EC97E' },
  { emoji: '😊', title: '100%', desc: 'Parent Satisfaction', color: '#F4A460' },
  { emoji: '🏆', title: '200+', desc: 'Award winners', color: '#9B8FD8' },
  { emoji: '📚', title: '20 years', desc: 'Teaching Experience', color: '#6BB6FF' }
];

/**
 * 优势卡片数据
 */
export const advantages: Advantage[] = [
  {
    icon: '🎮',
    title: 'Engaging Learning Way',
    desc: 'Gamified learning allow children to acquire knowledge in a fun way and maintain their enthusiasm in the long run.',
    stat: '95%',
    label: 'Class Participation'
  },
  {
    icon: '👨‍🏫',
    title: 'Professional Coaching Team',
    desc: 'Experienced Tutors from top universities with strong international teaching backgrounds.',
    stat: '10ys+',
    label: 'Average teaching experience'
  },
  {
    icon: '👥',
    title: 'Personalized Support',
    desc: 'Small class let us to support each child\'s unique pace and provide tailored guidance.',
    stat: '1:6',
    label: 'Student-Teacher Ratio'
  },
  {
    icon: '📈',
    title: 'Visible Achievement',
    desc: 'A structure evaluation system with regular progress feedback ensures visible growth.',
    stat: 'Weekly',
    label: 'Study Report'
  }
];

/**
 * 学生成就数据
 */
export const studentAchievements: StudentAchievement[] = [
  { emoji: '👦', school: 'Harvard University · Early Action', name: 'Ethan L.', level: 'Undergraduate', year: 'Class of 2029' },
  { emoji: '👧', school: 'Duke University', name: 'Sophia W.', level: 'Undergraduate', year: 'Class of 2029' },
  { emoji: '👦', school: 'Yale University', name: 'Benjamin C.', level: 'Undergraduate', year: 'Class of 2029' },
  { emoji: '👦', school: 'Columbia University · Rabi Scholarship', name: 'Benjamin C.', level: 'Undergraduate', year: 'Class of 2029' },
  { emoji: '👦', school: 'Brown University', name: 'Benjamin C.', level: 'Undergraduate', year: 'Class of 2029' },
  { emoji: '👧', school: 'Dartmouth College', name: 'Charlotte Z.', level: 'Undergraduate', year: 'Class of 2029' },
  { emoji: '👧', school: 'Cornell University · Presidential Scholarship', name: 'Charlotte Z.', level: 'Undergraduate', year: 'Class of 2029' },
  { emoji: '👧', school: 'Williams College', name: 'Evelyn Z.', level: 'Undergraduate', year: 'Class of 2029' }
];

/**
 * 新闻文章数据
 */
export const newsArticles: NewsArticle[] = [
  {
    tag: 'Industry Insights',
    tagColor: '#7EC97E',
    title: 'Top 5 Trends in Children\'s Education 2024: Personalized Learning',
    excerpt: 'AI is transforming traditional teaching, making personalized learning paths possible for every child...',
    date: '2024.11.20',
    time: '5 min',
    image: '/education_1.svg'
  },
  {
    tag: 'Course Update',
    tagColor: '#F4A460',
    title: 'New Math thinking Course V3.0: More fun, More Effective',
    excerpt: 'After six months of testing, our Math Olympiad course is upgraded with more interactive and gamified features...',
    date: '2024.11.15',
    time: '3 min',
    image: '/education_2.svg'
  },
  {
    tag: 'Learning methods',
    tagColor: '#9B8FD8',
    title: 'How to Build Your Child\'s Interest in Chess: 5 Tips',
    excerpt: 'Chess strengthens logic, patience and focus. Here are practical tips parents can use at home...',
    date: '2024.11.10',
    time: '4 min',
    image: '/education_3.svg'
  }
];


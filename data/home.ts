/**
 * 文件用途：首页数据配置
 * 依赖关系：依赖 types/program.ts 中的类型定义
 * 注意事项：数据修改后需要确保类型匹配
 */

import type { Program, TrustBadge, Advantage, StudentAchievement, NewsArticle } from '@/types/program';

/**
 * 核心课程列表（图标存放在 public/home/key-programs/）
 */
export const programs: Program[] = [
  {
    icon: '📊',
    iconSrc: '/home/key-programs/Math.svg',
    title: 'Math',
    slug: 'math',
    subtitle: 'Build Logic · Spark Interest',
    description: 'Fun, structured learning that builds math thinking and problem-solving from basics to competitions.',
    features: ['Step-by-step curriculum', 'Mind map practice', 'Contest problem review', '1 on 1 support'],
    color: '#7EC97E',
    bgGradient: 'from-[rgba(126,201,126,0.1)] to-[rgba(107,184,107,0.1)]'
  },
  {
    icon: '♟️',
    iconSrc: '/home/key-programs/Chess.svg',
    title: 'Brain Games',
    slug: 'braingames',
    subtitle: 'Build Strategy · Perspective',
    description: 'Structured coaching from beginner to advanced levels develops strategic thinking and resilience.',
    features: ['Beginner to rank courses', 'Practice matches', 'Master game analysis', 'Online & offline competition'],
    color: '#F4A460',
    bgGradient: 'from-[rgba(244,164,96,0.1)] to-[rgba(232,148,81,0.1)]'
  },
  {
    icon: '🌍',
    iconSrc: '/home/key-programs/College_Counseling.svg',
    title: 'College Counseling',
    slug: 'college_counseling',
    subtitle: 'Plan Ahead · Go Global',
    description: 'One-step support for applications, language skills, and profile enhancement.',
    features: ['Personalized plans', 'Elite school guidance', 'Language improvement', 'Profile building'],
    color: '#9B8FD8',
    bgGradient: 'from-[rgba(155,143,216,0.1)] to-[rgba(138,126,199,0.1)]'
  },
  {
    icon: '💻',
    iconSrc: '/home/key-programs/Programming.svg',
    title: 'Programming',
    slug: 'programming',
    subtitle: 'Learn to code · Develop the brain',
    description: "Don't just let children play games; teach them how to create games",
    features: ['Project-Based Curriculum', 'Personalized Learning Roadmap', 'Creative Projects', 'Competition Prep & Awards'],
    color: '#4ECDC4',
    bgGradient: 'from-[rgba(78,205,196,0.1)] to-[rgba(69,183,209,0.1)]'
  }
];

/**
 * 信任徽章数据（图标存放在 public/home/trust-badges/；iconBg 可单独设置每个图标的外框背景）
 */
export const trustBadges: TrustBadge[] = [
  { iconSrc: '/home/trust-badges/trust-experience.png', iconBg: '#7EC97E20', title: '2,000+', desc: 'Past Students', color: '#7EC97E' },
  { iconSrc: '/home/trust-badges/trust-satisfaction.png', iconBg: '#F4A46020', title: '100%', desc: 'Parent Satisfaction', color: '#F4A460' },
  { iconSrc: '/home/trust-badges/trust-students.png', iconBg: '#9B8FD820', title: '80+', desc: 'Award winners', color: '#9B8FD8' },
  { iconSrc: '/home/trust-badges/trust-award.png', iconBg: '#6BB6FF20', title: '20 years+', desc: 'Teaching Experience', color: '#6BB6FF' }
];

/**
 * 优势卡片数据
 */
/** Why DeepBrain 区块四个优势卡片（图标存放在 public/home/why-deepbrain/） */
export const advantages: Advantage[] = [
  {
    icon: '🎮',
    iconSrc: '/home/why-deepbrain/interactive.png',
    title: 'Interactive Teaching Approach',
    desc: 'Gamified learning allows children to master concepts joyfully and sustain their enthusiasm long-term.',
    stat: '95%',
    label: 'Class Participation'
  },
  {
    icon: '👨‍🏫',
    iconSrc: '/home/why-deepbrain/instructors.png',
    title: 'World-Class Instructors',
    desc: 'Experienced Instructors from top universities with strong teaching backgrounds.',
    stat: '20yrs',
    label: 'Teaching experience'
  },
  {
    icon: '👥',
    iconSrc: '/home/why-deepbrain/personalized.png',
    title: 'Personalized Support',
    desc: 'Small class sizes allow us to accommodate each child\'s unique pace and provide tailored guidance.',
    stat: '1 on 1',
    label: 'Private Tutoring'
  },
  {
    icon: '📈',
    iconSrc: '/home/why-deepbrain/results.png',
    title: 'Tangible Results',
    desc: 'A structured assessment system with regular feedback ensures measurable progress.',
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
    tag: 'Learning methods',
    tagColor: '#9B8FD8',
    title: 'The Value of Learning Chess Is More Than Just "Becoming Smarter"',
    excerpt: 'Does playing chess actually make you smarter? Is learning Go or chess genuinely useful, or does it just sound...',
    date: '2025.11.30',
    time: '7 min',
    image: '/home/education/education_1.png',
    url: '/blog/value-of-learning-chess'
  },
  {
    tag: 'Learning methods',
    tagColor: '#9B8FD8',
    title: 'How Programming Education Shapes Thinking and Problem-Solving Skills',
    excerpt: 'When programming is mentioned, many people still think of it mainly in career terms. Is learning to code only useful if a child...',
    date: '2025.12.15',
    time: '8 min',
    image: '/home/education/education_2.png',
    url: '/blog/programming-shapes-thinking'
  },
  {
    tag: 'Industry Insights',
    tagColor: '#7EC97E',
    title: 'Beyond Test Scores: Why Go Keeps Appearing in the Background of Gaokao Top Performers',
    excerpt: 'In China, academic success is often measured by performance in the Gaokao, the national college entrance...',
    date: '2025.12.25',
    time: '6 min',
    image: '/home/education/education_3.png',
    url: '/blog/go-gaokao-top-performers'
  }
];


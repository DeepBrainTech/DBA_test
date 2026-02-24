/**
 * 文件用途：全球教育页面数据配置
 * 依赖关系：依赖 types/global-education.ts 中的类型定义
 * 注意事项：数据修改后需要确保类型匹配
 */

import type { Feature, Stat, Challenge, ServiceStep, GlobalAdvantage } from '@/types/global-education';

/**
 * 特性列表
 */
/** 英雄区四张卡片图标使用 public/global/Hero/ 下的 hero_1～hero_4.png */
export const features: Feature[] = [
  { icon: '/global/Hero/hero_1.png', title: 'Top Resources' },
  { icon: '/global/Hero/hero_2.png', title: 'Prestigious Institutions' },
  { icon: '/global/Hero/hero_3.png', title: 'Ivy League Mentors' },
  { icon: '/global/Hero/hero_4.png', title: 'Direct Admission Pathways' }
];

/**
 * 统计卡片列表（Stats 区块）
 */
export const stats: Stat[] = [
  {
    value: '7X',
    title: 'Acceptance Rate',
    description:
      'Our students are 7x more likely to get into the Ivy League and Top 15 colleges'
  },
  {
    value: '98%',
    title: 'Success Rate',
    description:
      '98% of our students are admitted to at least one of their Top 5 college choices'
  },
  {
    value: '4.9+',
    title: 'Trust Pilot Rating',
    description: 'One of the only consulting companies with a 4.9'
  }
];

/**
 * 挑战列表
 */
export const challenges: Challenge[] = [
  {
    icon: '/global/facing1.svg',
    iconBg: '#E8E3FF',
    iconColor: '#9B8FD8',
    title: 'Lacking Clear Direction',
    description: 'Choosing a major? Picking a school? Planning your career path?',
    items: [
      'Undecided on a major.',
      'Unsure which universities to target.',
      'Undefined career goals.'
    ]
  },
  {
    icon: '/global/facing2.svg',
    iconBg: '#E3F2FD',
    iconColor: '#6BB6FF',
    title: 'Building a Standout Profile',
    description: 'Average profile? Stand out anyway.',
    items: [
      'Limited Extracurricular Activities',
      'Lack of impactful extracurriculars',
      'Average Testing Scores'
    ]
  },
  {
    icon: '/global/facing3.svg',
    iconBg: '#FFE8D6',
    iconColor: '#F4A460',
    title: 'Weak Personal Statement',
    description: 'Story lacks impact.',
    items: [
      'Struggling to tell your story',
      'Essays lack originality and personal touch',
      'Struggling with native English nuances'
    ]
  },
  {
    icon: '/global/facing4.svg',
    iconBg: '#E8F5E9',
    iconColor: '#7EC97E',
    title: 'Navigating the Maze',
    description: 'Complex procedures, confusing requirements, high stress.',
    items: [
      'Unclear application process',
      'Key deadlines are easily missed',
      'Tight deadline'
    ]
  }
];

/**
 * 服务步骤列表
 */
export const serviceSteps: ServiceStep[] = [
  {
    step: '1',
    icon: '🔍',
    title: 'Analyze & Plan',
    duration: '1-2 mo.',
    description: 'Full profile review, clear goals, custom strategy.',
    color: '#9B8FD8',
    bgColor: 'linear-gradient(to bottom, #9B8FD81A, #8A7EC71A)',
    side: 'left',
    items: [
      'Comprehensive Evaluation',
      'Career Path Exploration',
      'Target School Selection',
      'Strategic Timeline Creation'
    ]
  },
  {
    step: '2',
    icon: '💡',
    title: 'Portfolio Development',
    duration: '6-12 mo.',
    description: 'Build standout strengths.',
    color: '#6BB6FF',
    bgColor: 'linear-gradient(to bottom, #6BB6FF1A, #4A9FEF1A)',
    side: 'right',
    items: [
      'Academic Guidance',
      'Impactful Opportunities',
      'Top Summer Schools',
      'Extracurricular Strategy'
    ]
  },
  {
    step: '3',
    icon: '📝',
    title: 'Strategic Application Prep',
    duration: '3-6 mo before application',
    description: 'Refining school lists and crafting standout essays.',
    color: '#F4A460',
    bgColor: 'linear-gradient(to bottom, #F4A4601A, #E894511A)',
    side: 'left',
    items: [
      'School & Major Selection',
      'Essay Ideation & Storytelling',
      'Essay Refinement',
      'Recommendation Letter'
    ]
  },
  {
    step: '4',
    icon: '✈️',
    title: 'Apply & Submit',
    duration: 'Application Season',
    description: 'Expert application walkthrough & mock interviews.',
    color: '#7EC97E',
    bgColor: 'linear-gradient(to bottom, #7EC97E1A, #6BB86B1A)',
    side: 'right',
    items: [
      'Application Support',
      'School Communication',
      'Status Tracking',
      'Mock Interviews & Feedback'
    ]
  },
  {
    step: '5',
    icon: '🎓',
    title: 'Post-Acceptance Transition',
    duration: 'Offer Received',
    description: 'Make the best choice, start strong abroad.',
    color: '#B19CD9',
    bgColor: 'linear-gradient(to bottom,#C4B5FD1A, #B4A5ED1A)',
    side: 'left',
    items: [
      'Decision Counseling & Analysis',
      'Visa Document Preparation',
      'Pre-Departure Guidance',
      'Alumni Networking'
    ]
  }
];

/**
 * 优势列表
 */
export const globalAdvantages: GlobalAdvantage[] = [
  {
    icon: '👥',
    title: 'Former Admissions Team',
    description: 'Gain insider insight with ex-admissions officers from Ivy League, Oxford, Cambridge, and more.',
    features: ['Former admissions', 'Decode admissions logic', 'Insider insights', 'Target ket factors']
  },
  {
    icon: '💼',
    title: '"Growth Portfolio" System',
    description: 'Dedicated platform: real-time tracking of applications and deadlines — keeping students and parents informed.',
    features: ['Cloud storage', 'Process tracking', 'Mobile end', 'History tracking']
  },
  {
    icon: '🎓',
    title: 'Major-Specific Mentor Matching',
    description: 'Connect with current top students in your target programs for genuine insider insights, major advice, and campus guidance.',
    features: ['Top university mentors', 'One-on-one sharing', 'School Life Sharing', 'Analyze major courses']
  },
  {
    icon: '📊',
    title: 'Data-driven School Selection',
    description: 'AI-powered school matching and risk analysis—smarter applications, higher success.',
    features: ['Admission database', 'AI algorithm', 'Risk evaluation', 'Dynamic strategy']
  }
];


/**
 * 文件用途：提供 Math 页面静态数据源
 * 依赖关系：依赖 types/math.ts；卡片左上角图标在 public/math/Teaching_Features
 */

import type { MathPageData } from '@/types/math';

export const mathPageData: MathPageData = {
  hero: {
    title: 'Math',
    subtitle: 'Beyond problem solving: Master the logic behind the numbers.',
    backgroundImage: '/math/hero/math_background.jpg',
    features: [
      { label: 'Comprehensive Resources' },
      { label: 'Top Universities' },
      { label: 'Ivy League Faculty' },
      { label: 'Admissions Pathways' },
    ],
  },
  teachingPhilosophyCards: [
    {
      number: 1,
      iconSrc: '/math/Teaching_Features/1.svg',
      iconBg: 'bg-[#E8F5E9]',
      title: '"Visualizing Concepts"',
      description:
        'By breaking down abstract Math problems, students can truly understand rather than just memorize. Through charts, animations, and real-life examples, complex concepts are made clear and easy to grasp.',
      tags: ['Mind maps', 'Process Demo', 'Multiple Solutions'],
      tagBg: 'bg-[#7EC97E15]',
      tagText: 'text-[#7EC97E]',
    },
    {
      number: 2,
      iconSrc: '/math/Teaching_Features/2.svg',
      iconBg: 'bg-[#6BB6FF20]',
      title: 'Interactive Small Classes',
      description:
        'We limit the number of students per class (no more than 8), ensuring that every student receives attention. With real-time questions and interactions, teachers can promptly identify and address individual questions.',
      tags: ['High Teacher-Student ratio', 'Live class', '1 on 1'],
      tagBg: 'bg-[#6BB6FF15]',
      tagText: 'text-[#6BB6FF]',
    },
    {
      number: 3,
      iconSrc: '/math/Teaching_Features/3.png',
      iconBg: 'bg-[#F4A46020]',
      title: 'World-Class Coaching Team',
      description:
        'Classes are taught personally by award-winning competition coaches, who share first-hand experience and techniques. They not only teach problem-solving but also how to maintain peak performance under pressure.',
      tags: ['Top Coaches', 'Expert Mentorship', 'Test Strategies'],
      tagBg: 'bg-[#F4A46015]',
      tagText: 'text-[#F4A460]',
    },
    {
      number: 4,
      iconSrc: '/math/Teaching_Features/4.png',
      iconBg: 'bg-[#9B8FD820]',
      title: 'Curated Problem Bank',
      description:
        'Master the AMC Exam. Our updated bank features thousands of precisely structured, recent problems across all core topics and difficulty levels. Every question includes a detailed, expert-written solution to teach critical thinking for competition success.',
      tags: ['Structured practice', 'Progress Tracking', 'AMC Exam'],
      tagBg: 'bg-[#9B8FD815]',
      tagText: 'text-[#9B8FD8]',
    },
  ],
  preAMCProgram: {
    badgeLabel: 'Our Programs',
    title: 'PRE-AMC Math Enrichment Program',
    subtitle: 'Designed for students in Grades 4-6 or equivalent level',
    features: [
      {
        iconBg: 'bg-green-400/10',
        iconSrc: '/math/preamc/1.png',
        title: 'Learning Objectives',
        description:
          'Foundations of pre-algebra with number theory, principle of inclusion-exclusion, etc.',
      },
      {
        iconBg: 'bg-blue-400/10',
        iconSrc: '/math/preamc/2.png',
        title: 'Small Group Format',
        description: 'Small-group format with personalized interaction and feedback',
      },
      {
        iconBg: 'bg-orange-300/10',
        iconSrc: '/math/preamc/3.png',
        title: 'Strategic Logic',
        description:
          'Integrates competition-style problems to strengthen logical reasoning and spatial thinking',
      },
      {
        iconBg: 'bg-violet-400/10',
        iconSrc: '/math/preamc/4.png',
        title: 'Merit Scholarship',
        description: 'Up to $200 Scholarship',
      },
    ],
    quoteText:
      'This class is designed to spark curiosity, build logical reasoning, and develop problem-solving skills, while laying a strong foundation for future math competitions like MATHCOUNTS, MOEMS, and AMC.',
    quoteAttribution: 'DeepBrain Academy Math Coaching Team',
    ctaWatchUrl: 'https://forms.gle/2mMzKoQkXHa2CVHe6',
    ctaRegisterUrl: 'https://forms.gle/2mMzKoQkXHa2CVHe6',
  },
  amc810Program: {
    badgeLabel: 'Our Programs',
    title: 'AMC 8/10 Math Enrichment Program',
    subtitle:
      'Designed for AMC 8/10 preparation, top high school aspirants, and those looking to strengthen their math skills.',
    features: [
      {
        cardBg: 'bg-white',
        iconBg: 'bg-green-400/10',
        iconSrc: '/math/preamc/1.png',
        title: 'Learning Objectives',
        description:
          'Covers Pre-algebra, Number Theory, Algebra, Geometry, and Combinatorics for math competitions.',
      },
      {
        cardBg: 'bg-white',
        iconBg: 'bg-blue-400/10',
        iconSrc: '/math/preamc/2.png',
        title: 'Small Group Format',
        description:
          'Classes utilize a small-group structure to ensure personalized interaction and feedback.',
      },
      {
        cardBg: 'bg-white',
        iconBg: 'bg-orange-300/10',
        iconSrc: '/math/preamc/3.png',
        title: 'Critical Thinking',
        description:
          'Integrates competition-style problems to strengthen logical reasoning and spatial thinking skills.',
      },
      {
        cardBg: 'bg-white',
        iconBg: 'bg-violet-400/10',
        iconSrc: '/math/preamc/4.png',
        title: 'Expert Instructors',
        description:
          'Led by Princeton PhDs and Harvard Faculty with extensive experience in teaching and mentoring.',
      },
    ],
  },
  sevenStepsMethod: {
    title: '7 Steps Learning Method',
    subtitle: 'AMC 8/10 Math program',
    ctaLabel: 'Course Overview',
    ctaUrl: 'https://forms.gle/2mMzKoQkXHa2CVHe6',
    steps: [
      { icon: '🔧', iconSrc: '/math/amc/1.png', title: 'Structured Curriculum', description: 'Comprehensive education in core math areas' },
      { icon: '📅', iconSrc: '/math/amc/2.png', title: 'Weekly Problem Sets', description: 'Regular practice with real exam questions' },
      { icon: '🧩', iconSrc: '/math/amc/3.png', title: 'Interactive Challenges', description: 'Engaging in group activities to enhance learning' },
      { icon: '🧠', iconSrc: '/math/amc/4.png', title: 'Logic Drills', description: 'Focused exercises centered on logic problems' },
      { icon: '📄', iconSrc: '/math/amc/5.png', title: 'Concept Review', description: 'Creating concise summaries for effective review' },
      { icon: '💯', iconSrc: '/math/amc/6.png', title: 'Full Mock Exams', description: 'Simulating real exam conditions for Preparation' },
      { icon: '🔍', iconSrc: '/math/amc/7.png', title: 'Correction & Review', description: 'Analyzing mistakes to improve performance' },
    ],
  },
  unlockPotential: {
    badgeText: 'Limited-time Offer',
    title: "Unlock Your Child's Math Potential",
    subtitle:
      "Don't let your child's talent go unnoticed. Join us to give your child a competitive edge in mathematics!",
    ensureTitle: 'We offer',
    ensureItems: [
      { text: 'Free Assessment Test' },
      { text: 'Free Trial Class' },
      { text: 'Personalized Learning Plan' },
    ],
    trustItems: [
      { icon: '🔒', label: 'Secure Information' },
      { icon: '⚡', label: 'Fast Response Time' },
      { icon: '🛡', label: 'Risk-free Guarantee' },
    ],
    cardTitle: 'Schedule Your Consultation',
    cardSubtitle: 'Submit your information, and we will contact you within 24 hours.',
    ctaLabel: 'Book Free Trial',
    ctaUrl: 'https://forms.gle/2mMzKoQkXHa2CVHe6',
    stats: [
      { value: '2,456', label: 'Sessions Booked' },
      { value: '100%', label: 'Satisfaction Rate' },
      { value: '24h', label: 'Response Time' },
    ],
    bottomQuote:
      "Join us and make mathematics your child's competitive edge! Every great mathematician started with a simple problem. 💪",
  },
};

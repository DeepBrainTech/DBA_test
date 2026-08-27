/**
 * 文件用途：提供 Courses 页面静态数据源
 * 依赖关系：依赖 types/courses.ts，被 app/courses/page.tsx 导入
 */

import type { CoursesPageData } from '@/types/courses';

export const coursesPageData: CoursesPageData = {
  hero: {
    title: '2026 Fall Courses',
    subtitle: 'Cultivating Curiosity, Creativity, and Real-World Problem Solving.',
    backgroundImage: '/courses/hero/cover.png',
    features: [
      { label: 'AP & Contest Prep' },
      { label: 'In-Person + Online' },
      { label: 'Small-Group Classes' },
      { label: 'Clear Learning Paths' },
    ],
    ctaText: 'Join us this fall',
  },
  explorePrograms: {
    badgeIcon: '⚙️',
    badgeText: 'Our Programs',
    title: 'Explore Our Programs',
    subtitle:
      'Each program area gives families a quick way to understand the learning goal before choosing a specific course.',
    programs: [
      {
        index: 1,
        title: 'Physics',
        description:
          'A clear pathway from middle school foundations to AP Physics, Physics Bowl, and F=MA contest.',
        icon: '/courses/icon/physics.svg',
        tags: ['AP', 'Physics Bowl', 'F=MA'],
      },
      {
        index: 2,
        title: 'Mathematics',
        description:
          'From elementary fluency to AoPS, AP Calculus, AMC, SAT Math, and BCA preparation.',
        icon: '/courses/icon/mathematics.svg',
        tags: ['AoPS', 'AP', 'AMC', 'SAT', 'BCA'],
      },
      {
        index: 3,
        title: 'Chinese',
        description:
          'Language learning through conversation, culture, reading, writing, and confidence-building practice.',
        icon: '/courses/icon/chinese.svg',
        tags: ['Speaking', 'Literacy'],
      },
      {
        index: 4,
        title: 'English Literacy',
        description:
          'Digital SAT Reading & Writing and BCA admissions writing with diagnostics and feedback.',
        icon: '/courses/icon/english.svg',
        tags: ['SAT', 'BCA', 'Reading', 'Writing'],
      },
      {
        index: 5,
        title: 'Chess & Go Strategy',
        description:
          'Level-based strategy training aligned with ICA-style progression from beginner to elite.',
        icon: '/courses/icon/chess.svg',
        tags: ['Chess', 'Go', 'AI', 'Fog of War'],
      },
      {
        index: 6,
        title: 'AI Learning',
        description:
          'Students learn to use AI wisely, build projects, and design agent-style workflows.',
        icon: '/courses/icon/ai.svg',
        tags: ['AI Agents', 'Projects'],
      },
    ],
  },
  courseInformation: {
    sectionTitle: 'Course Information',
    categories: ['All', 'Science', 'Math', 'Chess', 'Language', 'ProgrammingAI'],
    courses: [
  {
    cat: 'Science',
    name: 'AP Physics 1',
    tags: ['StandardTest'],
    desc: [
      'Emphasis on conceptual understanding alongside mathematical problem solving.',
      'Prepares students for both the AP exam and future physics coursework.',
      'Extensive practice with AP-style multiple choice and free-response questions.',
    ],
  },
  {
    cat: 'Science',
    name: 'AP Physics C – Mechanics',
    tags: ['StandardTest'],
    desc: [
      'Combines calculus and physics to model real systems with precision.',
      'Covers AP Physics C: Mechanics.',
      'Builds the problem-solving depth expected at top engineering and science programs.',
    ],
  },
  {
    cat: 'Science',
    name: 'AP Biology',
    tags: ['StandardTest'],
    desc: [
      'Covers core AP Biology topics including cell biology, genetics, evolution, ecology, and biological systems.',
      'Builds skills in data analysis, experimental reasoning, and interpreting scientific models and evidence.',
      'Includes targeted AP-style multiple-choice and free-response practice.',
    ],
  },
  {
    cat: 'Science',
    name: 'AP Chemistry',
    tags: ['StandardTest'],
    desc: [
      'Develops a strong understanding of chemical principles, quantitative reasoning, and laboratory-based concepts.',
      'Strengthens problem-solving skills in areas such as stoichiometry, thermodynamics, equilibrium, kinetics, and acids and bases.',
      'Includes focused AP-style practice for both multiple-choice and free-response questions.',
    ],
  },
  {
    cat: 'Science',
    name: 'Honor Physics',
    desc: [
      'Builds a strong foundation in core physics concepts through algebra-based problem solving and real-world applications.',
      'Develops deeper reasoning skills through multi-step problems, data analysis, and conceptual challenges.',
      'Prepares students for advanced high school physics courses, including AP Physics 1 and AP Physics C.',
    ],
  },
  {
    cat: 'Science',
    name: 'F=MA Competition*',
    tags: ['Contest'],
    desc: [
      'Deep, flexible mastery of Newtonian mechanics beyond AP-level expectations.',
      'Mathematical sophistication in applying calculus and vectors to physical systems.',
      'Problem-solving strategies for unfamiliar, multi-layered physics scenarios.',
    ],
  },
  {
    cat: 'Math',
    name: 'Spark Math P1',
    desc: [
      'Builds early number sense through counting, patterns, shapes, and basic addition and subtraction.',
      'Uses visual models and engaging problem-solving activities to make math concepts easier to understand.',
      'Develops confidence and logical thinking for future elementary math learning.',
    ],
  },
  {
    cat: 'Math',
    name: 'Spark Math P2',
    desc: [
      'Strengthens addition, subtraction, place value, measurement, and early problem-solving skills.',
      'Encourages students to explain their thinking and explore different ways to solve a problem.',
      'Builds the mathematical foundation needed for more advanced elementary-level concepts.',
    ],
  },
  {
    cat: 'Math',
    name: 'Spark Math P3',
    desc: [
      'Develops stronger skills in multiplication, division, fractions, geometry, and multi-step problem solving.',
      'Introduces students to more challenging reasoning questions that require careful planning and analysis.',
      'Prepares students for advanced elementary math and competition-style problem solving.',
    ],
  },
  {
    cat: 'Math',
    name: 'Math Kangaroo*',
    tags: ['Contest'],
    desc: [
      'Introduces young students to Math Kangaroo-style problems through patterns, logic, spatial reasoning, and number puzzles.',
      'Develops flexible problem-solving strategies beyond standard classroom exercises.',
      'Includes targeted practice with age-appropriate competition-style questions.',
    ],
  },
  {
    cat: 'Math',
    name: 'Math Clinics',
    desc: [
      "Provides targeted support based on each student's current math needs, skill gaps, and schoolwork.",
      'Reinforces key concepts through guided practice, problem-solving strategies, and individualized feedback.',
      'Helps students strengthen foundational skills, improve accuracy, and build confidence with challenging math topics.',
    ],
  },
  {
    cat: 'Math',
    name: 'AoPS Prealgebra',
    desc: [
      'Emphasizes reasoning, explanation, and problem-solving strategy.',
      'Uses challenging problems to develop persistence and mathematical creativity.',
      'Builds the habits students need before AoPS Introduction to Algebra.',
    ],
  },
  {
    cat: 'Math',
    name: 'AMC 8 Beginner*',
    tags: ['Contest'],
    desc: [
      'Focuses on the thinking behind AMC 8 problems, not just answer-getting.',
      'Helps student learn when to compute, draw, estimate, or look for structure.',
      'Builds a foundation for AMC 10 and higher-level contest math.',
    ],
  },
  {
    cat: 'Math',
    name: 'AMC 8 Advanced*',
    tags: ['Contest'],
    desc: [
      'Teacher students how to move beyond brute force.',
      'Builds speed without sacrificing mathematical depth.',
      'Provides a structured bridge from AMC 8 to AMC 10/12 and AIME preparation.',
    ],
  },
  {
    cat: 'Math',
    name: 'BCA Math',
    desc: [
      'Covers the math skills and reasoning habits needed for competitive school admissions.',
      'Help students read complex questions carefully and organize work under time pressure.',
      'Encourages flexible thinking when a problem does not match a familiar template.',
    ],
  },
  {
    cat: 'Math',
    name: 'AP Calculus AB/BC',
    tags: ['StandardTest'],
    desc: [
      'Use multiple representations: graphs, equations, tables, and verbal descriptions.',
      'Trains students to justify conclusions with clear mathematical reasoning.',
      'Includes targeted AP-style practice for both multiple-choice and free-response questions.',
    ],
  },
  {
    cat: 'Math',
    name: 'PSAT Math',
    tags: ['StandardTest'],
    desc: [
      'Reviews key PSAT math topics including algebra, advanced math, problem solving, data analysis, and geometry.',
      'Develops efficient problem-solving strategies for both calculator-supported and reasoning-based questions.',
      'Includes targeted PSAT-style practice to improve accuracy, pacing, and test-taking strategy.',
    ],
  },
  {
    cat: 'Chess',
    name: 'Chess I',
    desc: [
      'Uses beginner-friendly puzzles and mini-games before full games.',
      'Builds focus, patience, memory, and turn-based thinking.',
      'Helps students feel comfortable on the chessboard before introducing tactics.',
    ],
  },
  {
    cat: 'Chess',
    name: 'Chess II',
    desc: [
      'Turns rule knowledge into confident and playable chess.',
      'Introduces the idea that every move should have a reason.',
      'Build the discipline needed for longer games and future tournament preparation.',
    ],
  },
  {
    cat: 'Language',
    name: 'Elementary ELO Beginner',
    desc: [
      'Builds foundational English skills in vocabulary, reading comprehension, sentence structure, and written expression.',
      'Uses Wordly Wise as the primary learning material, with additional resources from Pearson, Oxford, and other age-appropriate materials when needed.',
      'Focuses on helping students understand new vocabulary in context and apply it through reading and writing activities.',
    ],
  },
  {
    cat: 'Language',
    name: 'Elementary ELO Intermediate',
    desc: [
      'Strengthens vocabulary, reading comprehension, grammar, and structured writing for students with an established English foundation.',
      'Uses Wordly Wise as the primary learning material, supported by Pearson, Oxford, and other selected resources.',
      "Develops students' ability to understand more complex texts, use academic vocabulary, and express ideas clearly in writing.",
    ],
  },
  {
    cat: 'Language',
    name: 'Middle School ELO Beginner',
    desc: [
      'Builds essential middle school English skills in vocabulary, reading comprehension, grammar, and paragraph writing.',
      'Introduces strategies for understanding unfamiliar vocabulary, identifying main ideas, and organizing written responses.',
      "Uses structured reading and language materials selected by the instructor based on students' needs.",
    ],
  },
  {
    cat: 'Language',
    name: 'Middle School ELO Intermediate',
    desc: [
      'Develops stronger academic vocabulary, reading analysis, grammar, and multi-paragraph writing skills.',
      'Helps students analyze more challenging texts, support ideas with evidence, and communicate with greater accuracy and clarity.',
      'Uses level-appropriate reading and language materials selected by the instructor to support continued academic growth.',
    ],
  },
  {
    cat: 'Language',
    name: 'PSAT Reading & Writing',
    tags: ['StandardTest'],
    desc: [
      'Strengthens reading comprehension, grammar, vocabulary in context, and evidence-based reasoning.',
      'Teaches efficient strategies for analyzing passages, identifying errors, and answering digital PSAT-style questions.',
      'Includes targeted practice to improve accuracy, pacing, and test-taking strategy.',
    ],
  },
  {
    cat: 'Language',
    name: 'Chinese',
    desc: [
      'Strengthen Chinese listening, speaking, reading, and writing skills.',
      'Build vocabulary, grammar, pronunciation, and cultural understanding.',
      'Support school learning, heritage language growth, and confident communication.',
    ],
  },
  {
    cat: 'ProgrammingAI',
    name: 'Python 1 (Beginner)',
    desc: [
      'Builds core programming skills through hands-on projects and coding challenges.',
      'Trains students to think logically, debug code, and break problems into clear steps.',
      'Develops computational thinking for future STEM learning.',
    ],
  },
],
  },
  pricing: {
    badgeIcon: '💎️',
    badgeText: 'Pricing',
    title: 'Fall Course Pricing',
    pdfUrl: '/courses/Fall_Pricing.pdf',
    discountsTitle: 'Special Discounts',
    discounts: [
      { label: 'Previous DBA students', discount: '10% Off' },
      { label: 'Sibling discount', discount: '10% Off' },
      {
        label:
          'If student choose an onsite course and would like to do it online, then there will be a 15% off discount',
        discount: '15% Off',
      },
      {
        label: 'Multi-course registration discount (second course and more)',
        discount: '5% Off',
      },
    ],
    ctaLabel: 'Enroll Now',
    ctaUrl:
      'https://docs.google.com/forms/d/1wnsEKekngdFdpt465K4BIvXLT1mKvM2VmEI2Kc0QvCQ/viewform',
  },
  bookFreeTrial: {
    badgeText: 'Limited offer',
    title: 'Empowering the next generation of thinkers and creators.',
    subtitle:
      'Book a free consultation with our advisor now to enjoy an early bird discount!',
    ensureTitle: 'We ensure:',
    ensureItems: [
      { icon: '🧑‍🏫', text: 'Small group instruction with supervision' },
      { icon: '📚', text: 'Course Materials' },
      { icon: '🔬', text: 'Strict laboratory safety protocols' },
      { icon: '💼', text: 'Weekly parent updates' },
    ],
    trustItems: [
      { icon: '🔒', label: 'Secure Information' },
      { icon: '⚡', label: 'Fast Response Time' },
      { icon: '💯', label: 'Risk-free Guarantee' },
    ],
    cardTitle: 'Schedule Your Consultation',
    cardSubtitle:
      'Submit your details and an advisor will contact you within 24h.',
    ctaLabel: 'Book Free Trial',
    ctaUrl:
      'https://docs.google.com/forms/d/1wnsEKekngdFdpt465K4BIvXLT1mKvM2VmEI2Kc0QvCQ/viewform',
    stats: [
      { value: '1,234', label: 'Sessions Booked' },
      { value: '100%', label: 'Satisfaction Rate' },
      { value: '24h', label: 'Response Time' },
    ],
    bottomQuote:
      'In the era of AI, we prepare students to lead by cultivating essential future-ready skills. 💻',
  },
};

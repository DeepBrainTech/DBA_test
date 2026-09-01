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
        title: 'Science',
        description:
          'Build a strong foundation in scientific concepts, reasoning, and real-world applications.',
        icon: '/courses/icon/physics.svg',
        tags: ['Physics', 'Biology', 'Chemistry'],
      },
      {
        index: 2,
        title: 'Mathematics',
        description:
          'Develop mathematical thinking, problem-solving skills, and confidence across different levels of study.',
        icon: '/courses/icon/mathematics.svg',
        tags: ['AoPS', 'Spark Math', 'BCA'],
      },
      {
        index: 3,
        title: 'Language',
        description:
          'Strengthen reading, writing, communication, and overall language proficiency.',
        icon: '/courses/icon/chinese.svg',
        tags: ['Chinese', 'ESL'],
      },
      {
        index: 4,
        title: 'Chess',
        description:
          'Improve strategic thinking, planning, concentration, and decision-making skills.',
        icon: '/courses/icon/chess.svg',
        tags: ['Chess'],
      },
      {
        index: 5,
        title: 'Programming & AI',
        description:
          'Develop coding, computational thinking, and practical skills with emerging technologies.',
        icon: '/courses/icon/ai.svg',
        tags: ['Python', 'AI'],
      },
      {
        index: 6,
        title: 'Contest Preparation',
        description:
          'Strengthen problem-solving, analytical thinking, and competition strategies for academic contests.',
        icon: '/courses/icon/mathematics.svg',
        tags: ['AMC', 'F=MA', 'Math Kangaroo'],
      },
      {
        index: 7,
        title: 'Standardized Test Preparation',
        description:
          'Build subject knowledge, test-taking strategies, and confidence for standardized exams.',
        icon: '/courses/icon/english.svg',
        tags: ['AP', 'PSAT'],
      },
    ],
  },
  courseInformation: {
    sectionTitle: 'Course Information',
    categories: ['All', 'Science', 'Physics', 'Math', 'Chess', 'Language', 'ProgrammingAI'],
    courses: [
  {
    cat: 'Science',
    name: 'AP Physics 1',
    format: 'Hybrid',
    tags: ['StandardTest'],
    desc: [
      'Emphasis on conceptual understanding alongside mathematical problem solving.',
      'Prepares students for both the AP exam and future physics coursework.',
      'Extensive practice with AP-style multiple choice and free-response questions',
    ],
  },
  {
    cat: 'Science',
    name: 'AP Physics C – Mechanics',
    format: 'Hybrid',
    tags: ['StandardTest'],
    desc: [
      'Combines calculus and physics to model real systems with precision.',
      'Covers AP Physics C: Mechanics',
      'Builds the problem-solving depth expected at top engineering and science programs',
    ],
  },
  {
    cat: 'Science',
    name: 'AP Biology',
    format: 'OnlineOnly',
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
    format: 'OnlineOnly',
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
    format: 'Hybrid',
    desc: [
      'Builds a strong foundation in core physics concepts through algebra-based problem solving and real-world applications.',
      'Develops deeper reasoning skills through multi-step problems, data analysis, and conceptual challenges.',
      'Prepares students for advanced high school physics courses, including AP Physics 1 and AP Physics C.',
    ],
  },
  {
    cat: 'Science',
    name: 'F=MA Competition',
    format: 'Hybrid',
    tags: ['Contest'],
    desc: [
      'Deep, flexible mastery of Newtonian mechanics beyond AP-level expectations.',
      'Mathematical sophistication in applying calculus and vectors to physical systems.',
      'Problem-solving strategies for unfamiliar, multi-layered physics scenarios.',
    ],
  },
  {
    cat: 'Physics',
    name: 'Physics Bowl',
    format: 'Hybrid',
    tags: ['Contest'],
    desc: [
      'Reviews core physics concepts through challenging conceptual and quantitative problems.',
      'Builds speed, accuracy, and flexible reasoning for physics competition questions.',
      'Strengthens the foundation needed for advanced physics coursework and contests.',
    ],
  },
  {
    cat: 'Math',
    name: 'Spark Math P1',
    format: 'InPersonOnly',
    desc: [
      'Builds early number sense through counting, patterns, shapes, and basic addition and subtraction.',
      'Uses visual models and engaging problem-solving activities to make math concepts easier to understand.',
      'Develops confidence and logical thinking for future elementary math learning.',
    ],
  },
  {
    cat: 'Math',
    name: 'Spark Math P2',
    format: 'InPersonOnly',
    desc: [
      'Strengthens addition, subtraction, place value, measurement, and early problem-solving skills.',
      'Encourages students to explain their thinking and explore different ways to solve a problem.',
      'Builds the mathematical foundation needed for more advanced elementary-level concepts.',
    ],
  },
  {
    cat: 'Math',
    name: 'Spark Math P3',
    format: 'InPersonOnly',
    desc: [
      'Develops stronger skills in multiplication, division, fractions, geometry, and multi-step problem solving.',
      'Introduces students to more challenging reasoning questions that require careful planning and analysis.',
      'Prepares students for advanced elementary math and competition-style problem solving.',
    ],
  },
  {
    cat: 'Math',
    name: 'Math Kangaroo G1-2',
    format: 'Hybrid',
    tags: ['Contest'],
    desc: [
      'Introduces early elementary students to Math Kangaroo-style problems through patterns, logic, and number puzzles.',
      'Develops flexible problem-solving strategies with age-appropriate visual and hands-on activities.',
      'Builds confidence and curiosity through accessible competition-style questions.',
    ],
  },
  {
    cat: 'Math',
    name: 'Math Kangaroo G3-4',
    format: 'Hybrid',
    tags: ['Contest'],
    desc: [
      'Strengthens number sense, spatial reasoning, patterns, and logical thinking through Math Kangaroo-style problems.',
      'Develops strategies for solving multi-step questions beyond standard classroom exercises.',
      'Provides focused practice with age-appropriate competition-style questions.',
    ],
  },
  {
    cat: 'Math',
    name: 'Math Kangaroo G5-6',
    format: 'Hybrid',
    tags: ['Contest'],
    desc: [
      'Builds deeper problem-solving skills through challenging Math Kangaroo-style logic, geometry, and number problems.',
      'Develops flexible strategies for unfamiliar and multi-step competition questions.',
      'Strengthens accuracy, persistence, and confidence for advanced elementary math contests.',
    ],
  },
  {
    cat: 'Math',
    name: 'Math Clinics',
    format: 'Hybrid',
    desc: [
      "Provides targeted support based on each student's current math needs, skill gaps, and schoolwork.",
      'Reinforces key concepts through guided practice, problem-solving strategies, and individualized feedback.',
      'Helps students strengthen foundational skills, improve accuracy, and build confidence with challenging math topics.',
    ],
  },
  {
    cat: 'Math',
    name: 'AoPS Prealgebra',
    format: 'Hybrid',
    desc: [
      'Emphasizes reasoning, explanation, and problem-solving strategy.',
      'Uses challenging problems to develop persistence and mathematical creativity.',
      'Builds the habits students need before AoPS Introduction to Algebra.',
    ],
  },
  {
    cat: 'Math',
    name: 'AoPS Intro to Algebra',
    format: 'OnlineOnly',
    desc: [
      'Builds algebraic reasoning through variables, equations, inequalities, functions, and problem-solving strategies.',
      'Uses challenging AoPS problems to develop persistence, precision, and mathematical creativity.',
      'Prepares students for more advanced algebra and contest mathematics.',
    ],
  },
  {
    cat: 'Math',
    name: 'AoPS Intermediate Algebra',
    format: 'OnlineOnly',
    desc: [
      'Develops advanced algebraic fluency through functions, polynomials, inequalities, sequences, and number theory.',
      'Emphasizes elegant solutions, proof-based reasoning, and solving unfamiliar problems.',
      'Prepares students for advanced contest math and higher-level coursework.',
    ],
  },
  {
    cat: 'Math',
    name: 'AoPS Geometry',
    format: 'OnlineOnly',
    desc: [
      'Develops geometric reasoning through angles, triangles, circles, transformations, and proof.',
      'Uses challenging problems to connect visual intuition with rigorous deductive thinking.',
      'Strengthens the foundation for advanced geometry and math competitions.',
    ],
  },
  {
    cat: 'Math',
    name: 'AMC 8 Beginner',
    format: 'Hybrid',
    tags: ['Contest'],
    desc: [
      'Focuses on the thinking behind AMC 8 problems, not just answer-getting.',
      'Helps student learn when to compute, draw, estimate, or look for structure.',
      'Builds a foundation for AMC 10 and higher-level contest math.',
    ],
  },
  {
    cat: 'Math',
    name: 'AMC 8 Advanced',
    format: 'Hybrid',
    tags: ['Contest'],
    desc: [
      'Teacher students how to move beyond brute force.',
      'Builds speed without sacrificing mathematical depth.',
      'Provides a structured bridge from AMC 8 to AMC 10/12 and AIME preparation.',
    ],
  },
  {
    cat: 'Math',
    name: 'AMC 10',
    format: 'Hybrid',
    tags: ['Contest'],
    desc: [
      'Develops the algebra, geometry, counting, and number theory skills needed for AMC 10 problems.',
      'Builds efficient strategies for multi-step contest questions and unfamiliar problem types.',
      'Strengthens accuracy, persistence, and confidence for competition mathematics.',
    ],
  },
  {
    cat: 'Math',
    name: 'BCA Math',
    format: 'Hybrid',
    desc: [
      'Covers the math skills and reasoning habits needed for competitive school admissions.',
      'Help students read complex questions carefully and organize work under time pressure.',
      'Encourages flexible thinking when a problem does not match a familiar template.',
    ],
  },
  {
    cat: 'Math',
    name: 'Algebra 1',
    format: 'Hybrid',
    desc: [
      'Builds fluency with expressions, equations, inequalities, functions, and graphing.',
      'Develops clear algebraic reasoning through multi-step problem solving.',
      'Establishes the foundation for geometry, Algebra 2, and advanced mathematics.',
    ],
  },
  {
    cat: 'Math',
    name: 'Algebra 2',
    format: 'Hybrid',
    desc: [
      'Extends algebraic reasoning through polynomial, rational, exponential, and logarithmic functions.',
      'Connects equations, graphs, tables, and real-world applications.',
      'Prepares students for precalculus, standardized tests, and higher-level math.',
    ],
  },
  {
    cat: 'Math',
    name: 'Geometry',
    format: 'Hybrid',
    desc: [
      'Develops spatial reasoning through angles, triangles, circles, transformations, and proof.',
      'Connects visual models with algebraic and deductive reasoning.',
      'Builds the confidence and precision needed for advanced geometry and contest problems.',
    ],
  },
  {
    cat: 'Math',
    name: 'AP Precalculus',
    format: 'Hybrid',
    tags: ['StandardTest'],
    desc: [
      'Builds strong skills in functions, polynomial and rational expressions, and trigonometry.',
      'Uses graphs, equations, and tables to analyze mathematical relationships.',
      'Includes AP-style practice and prepares students for calculus.',
    ],
  },
  {
    cat: 'Math',
    name: 'AP Calculus AB/BC',
    format: 'Hybrid',
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
    format: 'OnlineOnly',
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
    format: 'InPersonOnly',
    desc: [
      'Uses beginner-friendly puzzles and mini-games before full games.',
      'Builds focus, patience, memory, and turn-based thinking.',
      'Helps students feel comfortable on the chessboard before introducing tactics.',
    ],
  },
  {
    cat: 'Chess',
    name: 'Chess II',
    format: 'InPersonOnly',
    desc: [
      'Turns rule knowledge into confident and playable chess.',
      'Introduces the idea that every move should have a reason.',
      'Build the discipline needed for longer games and future tournament preparation.',
    ],
  },
  {
    cat: 'Language',
    name: 'Elementary ELA Beginner',
    format: 'InPersonOnly',
    desc: [
      'Builds foundational English skills in vocabulary, reading comprehension, sentence structure, and written expression.',
      'Uses Wordly Wise as the primary learning material, with additional resources from Pearson, Oxford, and other age-appropriate materials when needed.',
      'Focuses on helping students understand new vocabulary in context and apply it through reading and writing activities.',
    ],
  },
  {
    cat: 'Language',
    name: 'Elementary ELA Intermediate',
    format: 'InPersonOnly',
    desc: [
      'Strengthens vocabulary, reading comprehension, grammar, and structured writing for students with an established English foundation.',
      'Uses Wordly Wise as the primary learning material, supported by Pearson, Oxford, and other selected resources.',
      "Develops students' ability to understand more complex texts, use academic vocabulary, and express ideas clearly in writing.",
    ],
  },
  {
    cat: 'Language',
    name: 'Middle School ELA Beginner',
    format: 'InPersonOnly',
    desc: [
      'Builds essential middle school English skills in vocabulary, reading comprehension, grammar, and paragraph writing.',
      'Introduces strategies for understanding unfamiliar vocabulary, identifying main ideas, and organizing written responses.',
      "Uses structured reading and language materials selected by the instructor based on students' needs.",
    ],
  },
  {
    cat: 'Language',
    name: 'Middle School ELA Intermediate',
    format: 'InPersonOnly',
    desc: [
      'Develops stronger academic vocabulary, reading analysis, grammar, and multi-paragraph writing skills.',
      'Helps students analyze more challenging texts, support ideas with evidence, and communicate with greater accuracy and clarity.',
      'Uses level-appropriate reading and language materials selected by the instructor to support continued academic growth.',
    ],
  },
  {
    cat: 'Language',
    name: 'PSAT Reading & Writing',
    format: 'OnlineOnly',
    tags: ['StandardTest'],
    desc: [
      'Strengthens reading comprehension, grammar, vocabulary in context, and evidence-based reasoning.',
      'Teaches efficient strategies for analyzing passages, identifying errors, and answering digital PSAT-style questions.',
      'Includes targeted practice to improve accuracy, pacing, and test-taking strategy.',
    ],
  },
  {
    cat: 'Language',
    name: 'SAT Reading & Writing',
    format: 'OnlineOnly',
    desc: [
      'Strengthens reading comprehension, grammar, vocabulary in context, and evidence-based reasoning.',
      'Teaches efficient strategies for analyzing passages and answering digital SAT-style questions.',
      'Includes targeted practice to improve accuracy, pacing, and test-taking strategy.',
    ],
  },
  {
    cat: 'Language',
    name: 'SSAT Reading & Writing',
    format: 'OnlineOnly',
    desc: [
      'Builds reading comprehension, vocabulary, grammar, and written expression for the SSAT.',
      'Develops strategies for identifying main ideas, using context clues, and revising sentences.',
      'Provides focused practice to improve accuracy, pacing, and confidence on test-style questions.',
    ],
  },
  {
    cat: 'Language',
    name: 'Creative Writing',
    format: 'OnlineOnly',
    desc: [
      'Develops original ideas through storytelling, descriptive writing, poetry, and personal voice.',
      'Strengthens organization, word choice, sentence fluency, and revision skills.',
      'Encourages students to give and use feedback while building confidence as writers.',
    ],
  },
  {
    cat: 'Language',
    name: 'Chinese',
    format: 'InPersonOnly',
    desc: [
      'Strengthen Chinese listening, speaking, reading, and writing skills.',
      'Build vocabulary, grammar, pronunciation, and cultural understanding.',
      'Support school learning, heritage language growth, and confident communication.',
    ],
  },
  {
    cat: 'ProgrammingAI',
    name: 'Python 1 (Beginner)',
    format: 'Hybrid',
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
    // 每次覆盖 Fall_Pricing.pdf 后改这一项
    pdfVersion: '20260901-113211',
    discountsTitle: 'Special Discounts',
    discounts: [
      { label: 'Previous DBA students', discount: '10% Off' },
      { label: 'Sibling discount', discount: '10% Off' },
      {
        label: 'Switch from Onsite to Online',
        discount: '15% Off',
      },
      {
        label: 'Multi-course registration discount (second course and more)',
        discount: '5% Off',
      },
    ],
    ctaLabel: 'Enroll Now',
    ctaUrl: 'https://forms.gle/7Q1vHVNcJT3GnS2K7',
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
      'https://forms.gle/7Q1vHVNcJT3GnS2K7',
    stats: [
      { value: '1,234', label: 'Sessions Booked' },
      { value: '100%', label: 'Satisfaction Rate' },
      { value: '24h', label: 'Response Time' },
    ],
    bottomQuote:
      'In the era of AI, we prepare students to lead by cultivating essential future-ready skills. 💻',
  },
};

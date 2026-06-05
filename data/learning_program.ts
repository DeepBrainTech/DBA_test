/**
 * 文件用途：提供 Learning Program 页面静态数据源（文案与设计稿完全一致，不翻译）
 * 依赖关系：依赖 types/learning_program.ts，被 app/learning_program/page.tsx 导入
 * 注意事项：文字与设计稿一致，中英文按设计稿原文保留
 */

import type { LearningProgramPageData } from '@/types/learning_program';

export const learningProgramPageData: LearningProgramPageData = {
  hero: {
    title: 'Project-Based Learning Programs',
    subtitle: 'Cultivating Curiosity, Creativity, and Real-World Problem Solving.',
    backgroundImage: '/learning_program/hero/cover.png',
    features: [
      { label: 'Theory + Practice' },
      { label: 'University Exposure' },
      { label: 'Expert Mentorship' },
      { label: 'Portfolio Building' },
    ],
  },
  learningStrategies: {
    title: 'Learning Strategies',
    badgeIcon: '⚙️',
    introQuote: {
      text: 'Welcome to the DeepBrain Academy Project-Based Learning Program, a premier program (rolling enrollment) for young minds to explore, create, and innovate. We are more than just a tutoring center; we are a comprehensive learning institution dedicated to blending strong academic foundations with advanced strategic thinking. Our mission is to prepare students for the challenges of tomorrow by cultivating essential future-ready skills in an engaging and collaborative environment.\n\nThis summer, we invite your child to embark on an unforgettable journey of discovery. Whether they are diving into our STEM Innovation track to build functional prototypes or honing their strategic thinking skills in our Brain & Strategy camp, they will gain invaluable knowledge and experience. Join us and become part of a vibrant community of over 1,000 students who have benefited from our expert instruction and unique educational philosophy.',
      attribution: 'DeepBrain Academy Coaching Team',
    },
    heading: 'Beyond Traditional Learning',
    subtitle:
      'In the era of AI, we prepare students to lead by cultivating essential future-ready skills.',
    strategies: [
      {
        title: 'Identify',
        description:
          'Spot real-world problems and define the critical questions that drive innovation.',
        icon: 'identify.svg',
      },
      {
        title: 'Innovate',
        description:
          'Cross-disciplinary thinking across Math, Physics, Biology, and the Arts.',
        icon: 'innovate.svg',
      },
      {
        title: 'Prototype',
        description:
          'Hands-on creation, prototyping, and testing of creative solutions.',
        icon: 'prototype.svg',
      },
      {
        title: 'Present',
        description:
          'Presenting ideas with confidence, clarity, and persuasive impact.',
        icon: 'present.svg',
      },
    ],
    comparisonSection: {
      title: 'Tailored Programs for Every Learner',
      columnHeaders: {
        feature: 'Feature',
        trackA: 'Track A: STEM Innovation',
        trackB: 'Track B: AI & Strategy',
      },
      rows: [
        { feature: 'Target Grades', trackA: 'Grades 7 – 10', trackB: 'Grades 1 – 8' },
        {
          feature: 'Core Focus',
          trackA: 'Project-Based STEAM Exploration',
          trackB: 'Logic, Focus, & Structured Thinking',
        },
        {
          feature: 'Key Subjects',
          trackA: 'Physics, Robotics, Bionics, Math, Music',
          trackB: 'Chess, Go, Coding, Math, Chinese, AI',
        },
        {
          feature: 'Duration',
          trackA: '2 – 4 Weeks',
          trackB: '1 – 6 Weeks (Flexible Enrollment)',
        },
      ],
    },
  },
  trackA: {
    heading: 'Track A: STEM Innovation',
    description:
      'A 2 to 6-week, project-based STEAM exploration for the innovators of tomorrow.',
    features: [
      {
        title: 'Theory + Practice',
        description:
          'Deep dive into advanced scientific concepts followed by immediate hands-on application through building functional prototypes.',
        tag: 'Methodology',
      },
      {
        title: 'University Exposure',
        description:
          'Optional visits to university professor laboratories to experience real-world scientific research environments and advanced equipment.',
        tag: 'Experience',
      },
      {
        title: 'Expert Mentorship',
        description:
          'Opportunities for 1:1 mentorship and recommendation letters for top-performing students, provided by our distinguished faculty.',
        tag: 'Guidance',
      },
      {
        title: 'Portfolio Building',
        description:
          'Every student completes the track with a tangible outcome: a demo, a professional presentation, or a structured scientific report.',
        tag: 'Outcome',
      },
    ],
    quote: {
      text: '',
      attribution: 'DeepBrain Academy Coaching Team',
    },
    featuredProjects: {
      title: 'Featured Projects',
      subtitle: 'Key Subjects: Physics, Robotics, Bionics, Mathematics, Music, and more.',
      projects: [
        {
          title: 'Project 1 Spiral Wonders',
          image: '/learning_program/trackA/projects1.png',
          bullets: [
            'Explore bio-inspired structures like DNA and plant tendrils.',
            'Study mechanical anisotropy and geometric nonlinearity.',
            'Build self-forming spiral prototypes from flat bands.',
          ],
        },
        {
          title: 'Project 2 Art & Science of Origami',
          image: '/learning_program/trackA/projects2.png',
          bullets: [
            'Math meets Engineering: From solar panels to soft robotics.',
            'Computational origami and unfolding algorithms.',
            'Design magnetically driven origami grippers.',
          ],
        },
        {
          title: 'Project 3 Bionic Acoustic Engineering',
          image: '/learning_program/trackA/projects3.png',
          bullets: [
            'Build instruments and analyze sound waveforms.',
            'Design artificial vocal cords and mimic animal sounds.',
            'Innovate wearable devices using 3D modeling.',
          ],
        },
        {
          title: 'Project 4 The Science of Magic',
          image: '/learning_program/trackA/projects4.png',
          bullets: [
            'Reverse-engineer "magic" using physics, materials, and perception.',
            'Explore anti-gravity, invisibility, and non-Newtonian fluids.',
            'Design and perform a science-based magic show.',
          ],
        },
        {
          title: 'Project 5 Robotics & Biomimetics',
          image: '/learning_program/trackA/projects5.png',
          bullets: [
            'Analyze insect locomotion patterns and soft-body motion.',
            'Design biomimetic mechanical structures and flexible grippers.',
            'Build SMA-driven (Shape Memory Alloy) robots and artificial muscles.',
          ],
        },
        {
          title: 'Project 6 Bionic Organs Exploration',
          image: '/learning_program/trackA/projects6.png',
          bullets: [
            'Study human anatomy and organ function (heart, lungs, brain).',
            'Use micro-controller, muscle sensor, and servo motor to build prototypes.',
            'Build physical bionic organ models to explore medical device principles.',
          ],
        },
      ],
    },
    primaryCtaLabel: 'Course Overview',
    secondaryCtaLabel: 'Register Now',
  },
  trackB: {
    badge: { text: '📖️ Program' },
    heading: 'Track B: AI & Strategy Camp',
    description: 'A 1 to 6-week program focused on logic, focus, and structured thinking.',
    features: [
      {
        title: 'Critical Thinking',
        description:
          'Enhanced logical reasoning and problem-solving skills through real-world challenges.',
      },
      {
        title: 'Confidence',
        description:
          'Public speaking, research method, and group collaboration through presentation.',
      },
      {
        title: 'Interdisciplinary Mindset',
        description:
          'Seeing the deep connections between science, art, and strategic thinking.',
      },
      {
        title: 'Tangible Results',
        description:
          'A clear portfolio-style outcome to showcase their achievements to the world.',
      },
    ],
    quote: {
      text: 'This track is perfect for younger students who are eager to develop their cognitive skills and strategic thinking abilities. Through a combination of classic strategy games, coding projects, and engaging weekly themes, students will strengthen their logic, focus, and confidence. Our flexible enrollment allows you to choose the weeks that best fit your summer schedule.',
      attribution: 'DeepBrain Academy Coaching Team',
    },
    ctaLabel: 'Register Now',
  },
  schedule: {
    badge: { text: '⏰ Schedule' },
    heading: 'Timeline & Schedule',
    description:
      'Our summer camp runs from Jun 8th to Aug 28th, 2026. Each track is divided into three 2-week sessions. Students can choose to attend for the full day, or select either the morning or afternoon session.',
    trackATable: {
      title: 'Track A: STEM Innovation Schedule',
      columnHeaders: ['Date & Time', 'Jun 8 - Jun 19', 'Jun 22 - Jul 3', 'Jul 6 - Jul 17'],
      rows: [
        {
          timeSlot: '9:00 AM - 10:30 AM',
          session1: {
            courseName: 'Spiral Wonders',
            sessionType: 'Lecture',
            tag: 'Online',
            tagVariant: 'blue',
            tag2: 'Onsite',
            tag2Variant: 'pink',
          },
          session2: {
            courseName: 'Bionic Acoustic Engineering',
            sessionType: 'Lecture',
            tag: 'Online',
            tagVariant: 'blue',
            tag2: 'Onsite',
            tag2Variant: 'pink',
          },
          session3: {
            courseName: 'Robotics and Biomimetics',
            sessionType: 'Lecture',
            tag: 'Online',
            tagVariant: 'blue',
            tag2: 'Onsite',
            tag2Variant: 'pink',
          },
        },
        {
          timeSlot: '10:45 AM - 12:15 PM',
          session1: { courseName: 'Spiral Wonders', sessionType: 'Workshop', tag: 'Onsite', tagVariant: 'pink' },
          session2: { courseName: 'Bionic Acoustic Engineering', sessionType: 'Workshop', tag: 'Onsite', tagVariant: 'pink' },
          session3: { courseName: 'Robotics and Biomimetics', sessionType: 'Workshop', tag: 'Onsite', tagVariant: 'pink' },
        },
        {
          timeSlot: '1:15 PM - 2:45 PM',
          session1: {
            courseName: 'The Art and Science of Origami',
            sessionType: 'Lecture',
            tag: 'Online',
            tagVariant: 'blue',
            tag2: 'Onsite',
            tag2Variant: 'pink',
          },
          session2: {
            courseName: 'The Science of Magic',
            sessionType: 'Lecture',
            tag: 'Online',
            tagVariant: 'blue',
            tag2: 'Onsite',
            tag2Variant: 'pink',
          },
          session3: {
            courseName: 'Bionic Organs Exploration',
            sessionType: 'Lecture',
            tag: 'Online',
            tagVariant: 'blue',
            tag2: 'Onsite',
            tag2Variant: 'pink',
          },
        },
        {
          timeSlot: '3:00 PM - 4:30 PM',
          session1: { courseName: 'The Art and Science of Origami', sessionType: 'Workshop', tag: 'Onsite', tagVariant: 'pink' },
          session2: { courseName: 'The Science of Magic', sessionType: 'Workshop', tag: 'Onsite', tagVariant: 'pink' },
          session3: { courseName: 'Bionic Organs Exploration', sessionType: 'Workshop', tag: 'Onsite', tagVariant: 'pink' },
        },
      ],
    },
    trackBTable: {
      title: 'Track B: AI & Strategy Schedule',
      subtitle:
        'We offer online and onsite options for each module. If a module does not reach its minimum enrollment, Art courses will be offered instead, with two 90-minute sessions daily.',
      columnHeaders: ['Date & Time', 'Jul 20 - Jul 31', 'Aug 3 - Aug 14', 'Aug 17 - Aug 28'],
      rows: [
        {
          timeSlot: '9:00 AM - 10:30 AM',
          session1: [
            { courseName: 'Mental Math', tag: 'Grade 1-2', tagVariant: 'blue' },
            { courseName: 'Mental Math & Pre-Algebra', tag: 'Grade 3-4', tagVariant: 'blue' },
            { courseName: 'GO', tag: 'Intermediate', tagVariant: 'pink' },
          ],
          session2: [
            { courseName: 'Coding', tag: 'Beginner', tagVariant: 'blue' },
            { courseName: 'Chess', tag: 'Intermediate', tagVariant: 'pink' },
          ],
          session3: [
            { courseName: 'Chinese', tag: 'Beginner', tagVariant: 'blue' },
            { courseName: 'AI', tag: 'Intermediate', tagVariant: 'pink' },
          ],
        },
        {
          timeSlot: '10:45 AM - 12:15 PM',
          session1: [
            { courseName: 'GO', tag: 'Beginner', tagVariant: 'blue' },
            { courseName: 'AMC Math', tag: 'Grade 5-8', tagVariant: 'pink' },
          ],
          session2: [
            { courseName: 'Coding', tag: 'Beginner', tagVariant: 'blue' },
            { courseName: 'Chess', tag: 'Intermediate', tagVariant: 'pink' },
          ],
          session3: [
            { courseName: 'Chinese', tag: 'Beginner', tagVariant: 'blue' },
            { courseName: 'AI', tag: 'Intermediate', tagVariant: 'pink' },
          ],
        },
        {
          timeSlot: '1:15 PM - 2:45 PM',
          session1: [
            { courseName: 'Mental Math', tag: 'Grade 1-2', tagVariant: 'blue' },
            { courseName: 'Mental Math & Pre-Algebra', tag: 'Grade 3-4', tagVariant: 'blue' },
            { courseName: 'GO', tag: 'Intermediate', tagVariant: 'pink' },
          ],
          session2: [
            { courseName: 'Chess', tag: 'Beginner', tagVariant: 'blue' },
            { courseName: 'Coding', tag: 'Intermediate', tagVariant: 'pink' },
          ],
          session3: [
            { courseName: 'AI', tag: 'Beginner', tagVariant: 'blue' },
            { courseName: 'Chinese', tag: 'Intermediate', tagVariant: 'pink' },
          ],
        },
        {
          timeSlot: '3:00 PM - 4:30 PM',
          session1: [
            { courseName: 'GO', tag: 'Beginner', tagVariant: 'blue' },
            { courseName: 'AMC Math', tag: 'Grade 5-8', tagVariant: 'pink' },
          ],
          session2: [
            { courseName: 'Chess', tag: 'Beginner', tagVariant: 'blue' },
            { courseName: 'Coding', tag: 'Intermediate', tagVariant: 'pink' },
          ],
          session3: [
            { courseName: 'AI', tag: 'Beginner', tagVariant: 'blue' },
            { courseName: 'Chinese', tag: 'Intermediate', tagVariant: 'pink' },
          ],
        },
      ],
    },
  },
  pricing: {
    badge: { text: '💎️ Pricing' },
    heading: 'Flexible Pricing Options',
    description:
      "We've designed our pricing structure to offer maximum flexibility. Whether your child wants to explore a single project or dive into the full summer experience, we have options to fit your plans.",
    trackATitle: 'Track A: STEM Innovation Weekly Pricing',
    trackASubtitle: 'Flexible Options for Every Family • Per Week • 2 Week Per Session',
    trackAHeaders: ['Enrollment Option', 'Onsite', 'Online'],
    trackARows: [
      {
        optionName: 'Half Day',
        optionSubtitle: 'Morning OR Afternoon Project',
        onsite: { value: '725', isDiscount: true },
        online: '490',
      },
      {
        optionName: 'Full Day',
        optionSubtitle: 'Both Morning & Afternoon Projects',
        onsite: { value: '1350', isDiscount: true },
        online: '900',
      },
      {
        optionName: 'Extended Hours (4:30 PM - 6 PM)',
        onsite: '40/day',
        online: '-',
      },
    ],
    materialFootnote:
      '* Additional material fees may apply to specific project-based learning courses.',
    multiSessionSavings: {
      heading: 'Multi-Session Savings',
      offers: [
        { percent: '5-10% OFF', description: 'Enroll in 2 Sessions', savings: 'Save up to $340' },
        { percent: '10-15% OFF', description: 'Full Summer (3 Sessions)', savings: 'Save up to $765' },
      ],
    },
    trackBTitle: 'Track B: AI & Strategy Camp Weekly Pricing',
    trackBSubtitle: 'Flexible Options for Every Family • Per Week • 2 Week Per Session',
    trackBHeaders: ['Enrollment Option', 'Onsite', 'Online'],
    trackBRows: [
      { optionName: 'Go (Beginner)', onsite: { value: '315', isDiscount: true }, online: '280' },
      { optionName: 'Go (Intermediate)', onsite: { value: '350', isDiscount: true }, online: '310' },
      { optionName: 'Mental Math (Grade 1-2)', onsite: { value: '425', isDiscount: true }, online: '390' },
      { optionName: 'Mental Math & Pre-Algebra (Grade 3-4)', onsite: { value: '425', isDiscount: true }, online: '390' },
      { optionName: 'AMC 8/10(Grade 5-8)', onsite: { value: '490', isDiscount: true }, online: '450' },
      { optionName: 'Chess (Beginner)', onsite: { value: '330', isDiscount: true }, online: '290' },
      { optionName: 'Chess (Intermediate)', onsite: { value: '385', isDiscount: true }, online: '325' },
      { optionName: 'Coding (Beginner)', onsite: { value: '390', isDiscount: true }, online: '350' },
      { optionName: 'Coding (Intermediate)', onsite: { value: '435', isDiscount: true }, online: '390' },
      { optionName: 'Chinese (Beginner)', onsite: { value: '300', isDiscount: true }, online: '260' },
      { optionName: 'Chinese (Intermediate)', onsite: { value: '330', isDiscount: true }, online: '290' },
      { optionName: 'AI (Beginner)', onsite: { value: '410', isDiscount: true }, online: '360' },
      { optionName: 'AI (Intermediate)', onsite: { value: '460', isDiscount: true }, online: '410' },
      { optionName: 'Art', onsite: { value: '260', isDiscount: true }, online: '-' },
      { optionName: 'Extended Hours (4:30 PM - 6 PM)', onsite:{ value: '40/day', isDiscount: false }, online: '-' },
    ],
    limitedTimeOffer: {
      title: '⏱️ Limited Time Offer!',
      description:
        '**Save More by Booking Early!**\n\n\u00A0\u00A0\u00A0\u00A0• Early Bird (Ends 3/21): Take an **additional 5% off** (up to $200 savings)!\n\n\u00A0\u00A0\u00A0\u00A0 • Regular (Ends 4/15): Take an **additional 3% off** (up to $120 savings).\n\n\u00A0\u00A0\u00A0\u00A0 • Last Call (Starting 5/15): Standard pricing applies.\n\n\u00A0\u00A0\u00A0\u00A0 • Note: These savings apply to Track A only and can be stacked with our Multi-Session discount. Track B is excluded from this promotion.\n\n **Sibling Discount**: Enroll two or more siblings and receive **10% off** the second child\'s tuition.\n\n **Payment Plans:** Flexible payment plans are available for enrollments of 2 or more sessions.',
    },
    ctaLabel: 'Enroll Now',
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
    stats: [
      { value: '1,234', label: 'Sessions Booked' },
      { value: '100%', label: 'Satisfaction Rate' },
      { value: '24h', label: 'Response Time' },
    ],
    bottomQuote:
      'In the era of AI, we prepare students to lead by cultivating essential future-ready skills. 💻',
  },
};
 
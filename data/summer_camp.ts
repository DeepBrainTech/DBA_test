/**
 * 文件用途：提供 Summer Camp 页面静态数据源（文案与设计稿完全一致，不翻译）
 * 依赖关系：依赖 types/summer_camp.ts，被 app/summer_camp/page.tsx 导入
 * 注意事项：文字与设计稿一致，中英文按设计稿原文保留
 */

import type { SummerCampPageData } from '@/types/summer_camp';

export const summerCampPageData: SummerCampPageData = {
  hero: {
    title: '2026 Summer Camp',
    subtitle: 'Cultivating Curiosity, Creativity, and Real-World Problem Solving.',
    backgroundImage: '/summer_camp/hero/cover.png',
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
      text: 'Welcome to the DeepBrain Academy Summer Camp, a premier learning destination where young minds are inspired to explore, create, and innovate. We are more than just a tutoring center; we are a comprehensive learning institution dedicated to blending strong academic foundations with advanced strategic thinking. Our mission is to prepare students for the challenges of tomorrow by cultivating essential future-ready skills in an engaging and collaborative environment.\n\nThis summer, we invite your child to embark on an unforgettable journey of discovery. Whether they are diving into our STEM Innovation track to build functional prototypes or honing their strategic thinking skills in our Brain & Strategy camp, they will gain invaluable knowledge and experience. Join us and become part of a vibrant community of over 1,000 students who have benefited from our expert instruction and unique educational philosophy.',
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
        trackB: 'Track B: Brain & Strategy',
      },
      rows: [
        { feature: 'Target Grades', trackA: 'Grades 7 – 10', trackB: 'Grades 1 – 7' },
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
          image: '/summer_camp/trackA/projects1.png',
          bullets: [
            'Explore bio-inspired structures like DNA and plant tendrils.',
            'Study mechanical anisotropy and geometric nonlinearity.',
            'Build self-forming spiral prototypes from flat bands.',
          ],
        },
        {
          title: 'Project 2 Art & Science of Origami',
          image: '/summer_camp/trackA/projects2.png',
          bullets: [
            'Math meets Engineering: From solar panels to soft robotics.',
            'Computational origami and unfolding algorithms.',
            'Design magnetically driven origami grippers.',
          ],
        },
        {
          title: 'Project 3 Bionic Acoustic Engineering',
          image: '/summer_camp/trackA/projects3.png',
          bullets: [
            'Build instruments and analyze sound waveforms.',
            'Design artificial vocal cords and mimic animal sounds.',
            'Innovate wearable devices using 3D modeling.',
          ],
        },
        {
          title: 'Project 4 The Science of Magic',
          image: '/summer_camp/trackA/projects4.png',
          bullets: [
            'Reverse-engineer "magic" using physics, materials, and perception.',
            'Explore anti-gravity, invisibility, and non-Newtonian fluids.',
            'Design and perform a science-based magic show.',
          ],
        },
        {
          title: 'Project 5 Robotics & Biomimetics',
          image: '/summer_camp/trackA/projects5.png',
          bullets: [
            'Analyze insect locomotion patterns and soft-body motion.',
            'Design biomimetic mechanical structures and flexible grippers.',
            'Build SMA-driven (Shape Memory Alloy) robots and artificial muscles.',
          ],
        },
        {
          title: 'Project 6 Bionic Organs Exploration',
          image: '/summer_camp/trackA/projects6.png',
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
    heading: 'Track B: Brain & Strategy Camp',
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
          session1: { courseName: 'Spiral Wonders', tag: 'Online', tagVariant: 'blue' },
          session2: { courseName: 'Bionic Acoustic Engineering', tag: 'Online', tagVariant: 'blue' },
          session3: { courseName: 'Robotics and Biomimetics', tag: 'Online', tagVariant: 'blue' },
        },
        {
          timeSlot: '10:50 AM - 12:20 PM',
          session1: { courseName: 'Spiral Wonders', tag: 'Onsite', tagVariant: 'pink' },
          session2: { courseName: 'Bionic Acoustic Engineering', tag: 'Onsite', tagVariant: 'pink' },
          session3: { courseName: 'Robotics and Biomimetics', tag: 'Onsite', tagVariant: 'pink' },
        },
        {
          timeSlot: '1:20 PM - 2:50 PM',
          session1: { courseName: 'The Art and Science of Origami', tag: 'Online', tagVariant: 'blue' },
          session2: { courseName: 'The Science of Magic', tag: 'Online', tagVariant: 'blue' },
          session3: { courseName: 'Bionic Organs Exploration', tag: 'Online', tagVariant: 'blue' },
        },
        {
          timeSlot: '1:20 PM - 2:50 PM',
          session1: { courseName: 'The Art and Science of Origami', tag: 'Onsite', tagVariant: 'pink' },
          session2: { courseName: 'The Science of Magic', tag: 'Onsite', tagVariant: 'pink' },
          session3: { courseName: 'Bionic Organs Exploration', tag: 'Onsite', tagVariant: 'pink' },
        },
      ],
    },
    trackBTable: {
      title: 'Track B: Brain & Strategy Schedule',
      subtitle: 'We offer online and onsite options for each session.',
      columnHeaders: ['Date & Time', 'Jun 20 - Jun 31', 'Aug 3 - Aug 14', 'Aug 17 - Aug 28'],
      rows: [
        {
          timeSlot: '9:00 AM - 10:30 AM',
          session1: { courseName: 'AMC Math', tag: 'Grade 1-2', tagVariant: 'blue' },
          session2: { courseName: 'Coding', tag: 'Beginner', tagVariant: 'blue' },
          session3: { courseName: 'Chinese', tag: 'Beginner', tagVariant: 'blue' },
        },
        {
          timeSlot: '10:50 AM - 12:20 PM',
          session1: { courseName: 'GO', tag: 'Beginnner', tagVariant: 'blue' },
          session2: { courseName: 'Chess', tag: 'Beginner', tagVariant: 'blue' },
          session3: { courseName: 'AI', tag: 'Beginner', tagVariant: 'blue' },
        },
        {
          timeSlot: '1:20 PM - 2:50 PM',
          session1: { courseName: 'AMC Math', tag: 'Grade 3-5', tagVariant: 'pink', tag2: 'Grade 6-8', tag2Variant: 'pink' },
          session2: { courseName: 'Coding', tag: 'Intermediate', tagVariant: 'pink' },
          session3: { courseName: 'Chinese', tag: 'Intermediate', tagVariant: 'pink' },
        },
        {
          timeSlot: '3:10 PM - 4:40 PM',
          session1: { courseName: 'GO', tag: 'Intermediate', tagVariant: 'pink' },
          session2: { courseName: 'Chess', tag: 'Intermediate', tagVariant: 'pink' },
          session3: { courseName: 'AI', tag: 'Intermediate', tagVariant: 'pink' },
        },
      ],
    },
  },
  pricing: {
    badge: { text: '💎️ Pricing' },
    heading: 'Flexible Pricing Options',
    description:
      "We've designed our pricing structure to offer maximum flexibility. Whether your child wants to explore a single project or dive into the full summer experience, we have options to fit your plans.",
    trackATitle: 'Track A: STEM Innovation Pricing',
    trackAHeaders: ['Enrollment Option', '1 Session (2 weeks)', '2 Sessions (4 weeks)', '3 Sessions (6 weeks)'],
    trackARows: [
      {
        optionName: 'Morning/Afternoon Only\n(Onsite)',
        session1: '1450',
        session2: { value: '2799 ($100+ OFF)', isDiscount: true },
        session3: { value: '3999 ($350+ OFF)', isDiscount: true },
      },
      {
        optionName: 'Morning/Afternoon Only\n(Online)',
        session1: '980',
        session2: { value: '1899 ($70+ OFF)', isDiscount: true },
        session3: { value: '2699 ($240+ OFF)', isDiscount: true },
      },
      {
        optionName: 'Full Day (Onsite)',
        session1: '2,700',
        session2: { value: '4999 ($400+ OFF)', isDiscount: true },
        session3: { value: '7399 ($700+ OFF)', isDiscount: true },
      },
      {
        optionName: 'Full Day (Online)',
        session1: '1,800',
        session2: { value: '3399 ($200+ OFF)', isDiscount: true },
        session3: { value: '4899 ($500+ OFF)', isDiscount: true },
      },
    ],
    materialFootnote:
      '* Additional material fees may apply to specific project-based learning courses.',
    trackBTitle: 'Track B: Brain & Strategy Camp Pricing',
    trackBHeaders: ['Enrollment Option', 'Onsite', 'Online'],
    trackBRows: [
      { optionName: 'Go (Beginner)', onsite: { value: '630', isDiscount: true }, online: '560' },
      { optionName: 'Go (Intermediate)', onsite: { value: '700', isDiscount: true }, online: '620' },
      { optionName: 'AMC Math (Fundamental)', onsite: { value: '850', isDiscount: true }, online: '780' },
      { optionName: 'AMC Math (Advanced)', onsite: { value: '980', isDiscount: true }, online: '900' },
      { optionName: 'Chess (Beginner)', onsite: { value: '660', isDiscount: true }, online: '580' },
      { optionName: 'Chess (Intermediate)', onsite: { value: '730', isDiscount: true }, online: '650' },
      { optionName: 'Coding (Beginner)', onsite: { value: '780', isDiscount: true }, online: '700' },
      { optionName: 'Coding (Intermediate)', onsite: { value: '870', isDiscount: true }, online: '780' },
      { optionName: 'Chinese (Beginner)', onsite: { value: '600', isDiscount: true }, online: '520' },
      { optionName: 'Chinese (Intermediate)', onsite: { value: '660', isDiscount: true }, online: '580' },
      { optionName: 'AI (Beginner)', onsite: { value: '820', isDiscount: true }, online: '720' },
      { optionName: 'AI (Intermediate)', onsite: { value: '920', isDiscount: true }, online: '820' },
    ],
    limitedTimeOffer: {
      title: '⏱️ Limited Time Offer!',
      description:
        '**Save More by Booking Early!**\n\n\u00A0\u00A0\u00A0\u00A0• Early Bird (Ends 3/15): Take an **additional 5% off** (up to $200 savings)!\n\n\u00A0\u00A0\u00A0\u00A0 • Regular (Ends 4/15): Take an **additional 3% off** (up to $120 savings).\n\n\u00A0\u00A0\u00A0\u00A0 • Last Call (Starting 5/15): Standard pricing applies.\n\n\u00A0\u00A0\u00A0\u00A0 • Note: These savings apply to Track A only and can be stacked with our Multi-Session discount. Track B is excluded from this promotion.\n\n **Sibling Discount**: Enroll two or more siblings and receive **10% off** the second child\'s tuition.\n\n **Payment Plans:** Flexible payment plans are available for enrollments of 2 or more sessions.',
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
 
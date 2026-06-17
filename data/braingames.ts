import type { Feature, Course, ChessPhilosophyData, BraingamesHeroData, BraingamesPricingData, BraingamesBookFreeTrialData } from "@/types/braingames";

/** 英雄区数据（布局与 innovation_program Hero 一致） */
export const hero: BraingamesHeroData = {
    title: 'Brain Games',
    subtitle: 'Small Board, Big Vision',
    backgroundImage: '/braingames/hero/cover.png',
    features: [
        { label: 'Brain Training' },
        { label: 'Boost Concentration' },
        { label: 'Build Resilience' },
        { label: 'Skill Level Certification' },
    ],
};

export const features: Feature[] = [
    { icon: '🧠', title: 'Brain Training' },
    { icon: "🎯", title: "Boost Concentration" },
    { icon: "💪", title: "Build Resilience" },
    { icon: "🏆", title: "Skill Level Certification" }
];


export const chessPhilosophy: ChessPhilosophyData = {
    badgeText: "Educational Value",
    heading: "Mental Gymnastics",
    subheading:
        "We believe chess is the most powerful and impactful training ground for resilience and strategic thinking.",

    cards: [
        {
            id: "life",
            iconSrc: "/braingames/educational/1.png",
            title: "Simulation of Life",
            description: "Every game builds strategy and foresight.",
        },
        {
            id: "resilience",
            iconSrc: "/braingames/educational/2.png",
            title: "Resilience",
            description: "Learn from wins and losses, grow from setbacks.",
        },
        {
            id: "decision",
            iconSrc: "/braingames/educational/3.png",
            title: "Decision Making",
            description: "Each move teaches trade-offs.",
        },
        {
            id: "character",
            iconSrc: "/braingames/educational/4.png",
            title: "Character Building",
            description: "Grace under pressure.",
        },
    ],

    quoteHeading: "Connect Through Strategy, Grow Through Wisdom",
    quoteBody:
        "Go training nurtures focus, logic, creativity, and resilience, while building strategic vision, calmness under pressure, and the agility to shift perspectives.",

    quotePills: [
        { id: "planning", title: "Planning", description: "Strategic foresight." },
        { id: "tradeoffs", title: "Trade-offs", description: "Sacrifice to win." },
        {
            id: "resilience2",
            title: "Resilience",
            description: "Gracious in victory, resilient in defeat.",
        },
    ],

    footerLine1: "DeepBrain Academy | Brain Games Coaching Team",
    footerLine2: "Cultivating young minds and character.",
};

export const courses: Course[] = [
  {
    id: "chess",
    tag: "Featured Program",
    badgeIcon: "/braingames/FeaturedProgram-chess/feature_program_icon.png",
    title: "Beginner/Intermediate Chess Class",
    subtitle: "Learning chess: Engaging, effective, and insightful.",

    cards: [
        {
            id: "small-group",
            iconSrc: "/braingames/FeaturedProgram-chess/1.png",
            title: "Small Group Instruction",
            description: "High Teacher–Student Ratio (1:3 to 1:6); World-class instructor",
        },
        {
            id: "resilience",
            iconSrc: "/braingames/FeaturedProgram-chess/2.png",
            title: "Resilience",
            description: "Learn from wins and losses, grow from setbacks.",
        },
        {
            id: "math-thinking",
            iconSrc: "/braingames/FeaturedProgram-chess/3.png",
            title: "Mathematical Thinking",
            description:
                "Develops Math minds, strong logical reasoning, spatial visualization and creativity",
        },
        {
            id: "personalized",
            iconSrc: "/braingames/FeaturedProgram-chess/4.png",
            title: "Personalized Training",
            description: "Designed to prepare students for advanced Fog-of-War chess.",
        },
    ],

    ctaIcon: "♟",
    ctaIconSrc: "/braingames/FeaturedProgram-chess/5.png",
    ctaText: "Start Your Chess Journey",
    ctaDescription:
      "Equip your child to face life's challenges with confidence through the timeless wisdom of chess.",
    qrImage: "/braingames/qr-wechat.png",
  },

  {
    id: "go",
    tag: "Featured Program",
    badgeIcon: "/braingames/FeaturedProgram-go/feature_program_icon.png",
    title: "Mathematical Go Class",
    subtitle: "Elite Instruction, Open to All",

      cards: [
          {
              id: "small-group",
              iconSrc: "/braingames/FeaturedProgram-go/1.png",
              title: "Small Group Instruction",
              description: "Limited to 3–6 students with world-class instructors.",
          },
          {
              id: "top-curriculum",
              iconSrc: "/braingames/FeaturedProgram-go/2.png",
              title: "Top Curriculum",
              description:
                  "Expertly structured curriculum designed to unlock your child's potential.",
          },
          {
              id: "logical",
              iconSrc: "/braingames/FeaturedProgram-go/3.png",
              title: "Logical Reasoning",
              description:
                  "Develops logical reasoning, focus, spatial visualization, and creativity.",
          },
          {
              id: "personalized",
              iconSrc: "/braingames/FeaturedProgram-go/4.png",
              title: "Personalized Training",
              description: "A pathway to advanced class — Quantum Go.",
          },
      ],

    ctaIcon: "⚫",
    ctaText: "Start Your Go Journey",
    ctaDescription:
      "Build friendships and sharpen your mind through Go.",
    qrImage: "/braingames/qr-wechat.png",
    sectionBgClassName: "bg-[#FBF9F4]",
    cardBgClassName: "bg-white",
    ctaPanelBgClassName: "bg-[#FDF5EE]",
  },
];

/** Pricing 区块数据（限时优惠与 innovation_program 完全一致） */
export const pricing: BraingamesPricingData = {
  limitedTimeOffer: {
    title: '⏱️ Limited Time Offer!',
    description:
      '**暂未接入**',
  },
  ctaLabel: 'Enroll Now',
};

/** Book Free Trial 区块数据（与 innovation_program 一致：无表单，仅 CTA 跳转） */
export const bookFreeTrial: BraingamesBookFreeTrialData = {
  badgeText: 'Limited offer',
  title: 'Empowering the next generation of thinkers and creators.',
  subtitle:
    'Book a free consultation with our advisor now to enjoy an early bird discount!',
  ensureTitle: 'You"ll get:',
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
    'In the era of AI, we prepare students to lead by cultivating essential future-ready skills. ♟️',
};

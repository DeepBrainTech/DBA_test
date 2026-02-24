import type { Feature, Course, ChessPhilosophyData } from "@/types/braingames";

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
            iconSrc: "/braingames/brain.png",
            title: "Simulation of Life",
            description: "Every game builds strategy and foresight.",
        },
        {
            id: "resilience",
            iconSrc: "/braingames/heart.png",
            title: "Resilience",
            description: "Learn from wins and losses, grow from setbacks.",
        },
        {
            id: "decision",
            iconSrc: "/braingames/target.png",
            title: "Decision Making",
            description: "Each move teaches trade-offs.",
        },
        {
            id: "character",
            iconSrc: "/braingames/shield.png",
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
    title: "Beginner/Intermediate Chess Class",
    subtitle: "Learning chess: Engaging, effective, and insightful.",

    cards: [
        {
            id: "small-group",
            iconSrc: "/braingames/group.png",
            title: "Small Group Instruction",
            description: "High Teacher–Student Ratio (1:3 to 1:6); World-class instructor",
        },
        {
            id: "resilience",
            iconSrc: "/braingames/heart.png",
            title: "Resilience",
            description: "Learn from wins and losses, grow from setbacks.",
        },
        {
            id: "math-thinking",
            iconSrc: "/braingames/brain.png",
            title: "Mathematical Thinking",
            description:
                "Develops Math minds, strong logical reasoning, spatial visualization and creativity",
        },
        {
            id: "personalized",
            iconSrc: "/braingames/rocket.png",
            title: "Personalized Training",
            description: "Designed to prepare students for advanced Fog-of-War chess.",
        },
    ],

    ctaIcon: "♟",
    ctaText: "Start Your Chess Journey",
    ctaDescription:
      "Equip your child to face life's challenges with confidence through the timeless wisdom of chess.",
    qrImage: "/braingames/qr-chess.png",
  },

  {
    id: "go",
    tag: "Featured Program",
    title: "Mathematical Go Class",
    subtitle: "Elite Instruction, Open to All",

      cards: [
          {
              id: "small-group",
              iconSrc: "/braingames/group.png",
              title: "Small Group Instruction",
              description: "Limited to 3–6 students with world-class instructors.",
          },
          {
              id: "top-curriculum",
              iconSrc: "/braingames/bulb.png",
              title: "Top Curriculum",
              description:
                  "Expertly structured curriculum designed to unlock your child's potential.",
          },
          {
              id: "logical",
              iconSrc: "/braingames/brain.png",
              title: "Logical Reasoning",
              description:
                  "Develops logical reasoning, focus, spatial visualization, and creativity.",
          },
          {
              id: "personalized",
              iconSrc: "/braingames/rocket.png",
              title: "Personalized Training",
              description: "A pathway to advanced class — Quantum Go.",
          },
      ],

    ctaIcon: "⚫",
    ctaText: "Start Your Go Journey",
    ctaDescription:
      "Build friendships and sharpen your mind through Go.",
    qrImage: "/braingames/qr-go.png",
  },
];

/**
 * 文件用途：象棋页面数据配置
 * 依赖关系：依赖 types/chess.ts 中的类型定义
 * 注意事项：数据修改后需要确保类型匹配
 */

import type { Feature, ChessPhilosophyData, Course } from '@/types/chess';


/**
 * 特性列表
 */
export const features: Feature[] = [
    { icon: '🎓', title: 'Brain Traning' },
    { icon: '🏛️', title: 'Boost Concentraining' },
    { icon: '🏅', title: 'Build Resilience' },
    { icon: '📈', title: 'Still Level Certification' }
];

export const chessPhilosophy: ChessPhilosophyData = {
    badgeText: "Educational Value",
    heading: "Mental Gymnastics",
    subheading:
        "We believe chess is the most powerful and impactful training ground for resilience and strategic thinking.",

    cards: [
        {
            id: "life",
            iconSrc: "/chess/icons/brain.svg",
            title: "Simulation of Life",
            description: "Every game builds strategy and foresight.",
        },
        {
            id: "resilience",
            iconSrc: "/chess/icons/heart.svg",
            title: "Resilience",
            description: "Learn from wins and losses, grow from setbacks.",
        },
        {
            id: "decision",
            iconSrc: "/chess/icons/target.svg",
            title: "Decision Making",
            description: "Each move teaches trade-offs.",
        },
        {
            id: "character",
            iconSrc: "/chess/icons/shield.svg",
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
        tag: "Beginner / Intermediate",
        title: "Beginner / Intermediate Chess Class",
        subtitle: "Think Ahead · Build Strategy · Grow Resilience",
        features: [
            {
                icon: "♟",
                title: "Small Group Instruction",
                description: "Up to 6 students per class with focused guidance.",
            },
            {
                icon: "💪",
                title: "Resilience",
                description: "Learn to adapt and grow from both wins and losses.",
            },
            {
                icon: "🧠",
                title: "Mathematical Thinking",
                description: "Develop logic, foresight, and structured reasoning.",
            },
            {
                icon: "🎯",
                title: "Personalized Training",
                description: "Customized plans based on skill level and goals.",
            },
        ],
        ctaText: "Start Your Chess Journey",
        qrImage: "/chess/qr-chess.png",
    },
    {
        id: "go",
        tag: "Advanced Logic",
        title: "Mathematical Go Class",
        subtitle: "Abstract Thinking · Pattern Recognition · Strategy",
        features: [
            {
                icon: "⚫",
                title: "Small Group Instruction",
                description: "Deep conceptual teaching in small groups.",
            },
            {
                icon: "📘",
                title: "Top Curriculum",
                description: "Competition-oriented Go curriculum.",
            },
            {
                icon: "📐",
                title: "Logical Reasoning",
                description: "Train large-scale strategic thinking.",
            },
            {
                icon: "👤",
                title: "Personalized Training",
                description: "Individual feedback and growth tracking.",
            },
        ],
        ctaText: "Start Your Go Journey",
        qrImage: "/chess/qr-go.png",
    },
];
/**
 * 文件用途：Chess 页面入口，负责组装各个 Section 组件
 * 依赖关系：依赖 chess 相关 Section 组件与数据文件
 * 注意事项：页面只负责布局与组件组合，不包含业务逻辑
 */

/**
 * 文件用途：Chess 页面入口，负责组装各个 Section 组件
 * 依赖关系：依赖 chess 相关 Section 组件与数据文件
 * 注意事项：页面只负责布局与组件组合，不包含业务逻辑
 * Navigation 和 Footer 已在根 layout.tsx 中统一管理，无需在此导入
 */

import { Outfit } from "next/font/google";

import ChessHeroSection from "@/components/chess/ChessHeroSection";
import ChessPhilosophySection from "@/components/chess/ChessPhilosophySection";
import FacultySection from '@/components/chess/FacultySection';
import CourseSection from "@/components/chess/CourseSection";
import PricingSection from '@/components/chess/PricingSection';
import BookFreeSection from '@/components/chess/BookFreeSection';

import { features, courses, chessPhilosophy } from "@/data/chess";


const outfit = Outfit({ subsets: ["latin"] });

/**
 * Chess 页面组件
 */
export default function ChessPage() {
    return (
        <div className={`min-h-screen bg-[#FBF9F4] ${outfit.className}`}>
            {/*<ColorBoxSection />*/}
            {/* Hero Section */}
            <ChessHeroSection features={features} />

            {/* Philosophy / Educational Value */}
            <ChessPhilosophySection data={chessPhilosophy} />

            {/* FacultySection */}
            <FacultySection />

            {/* Courses (Chess + Go) */}
            {courses.map((course) => (
                <CourseSection key={course.id} course={course} />
            ))}

            {/* Pricing */}
            <PricingSection />

            {/*Booking*/}
            <BookFreeSection />
        </div>
    );
}

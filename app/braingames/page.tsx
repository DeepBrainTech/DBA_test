/**
 * 文件用途：Brain Games 页面入口，负责组装各个 Section 组件
 * 依赖关系：依赖 braingames 相关 Section 组件与数据文件
 * 注意事项：页面只负责布局与组件组合，不包含业务逻辑
 * Navigation 和 Footer 已在根 layout.tsx 中统一管理，无需在此导入
 */

import { Outfit } from "next/font/google";

import ChessHeroSection from "@/components/braingames/ChessHeroSection";
import ChessPhilosophySection from "@/components/braingames/ChessPhilosophySection";
import CourseSection from "@/components/braingames/CourseSection";
import PricingSection from '@/components/braingames/PricingSection';
import BookFreeSection from '@/components/braingames/BookFreeSection';

import { features, courses, chessPhilosophy } from "@/data/braingames";


const outfit = Outfit({ subsets: ["latin"] });

/**
 * Brain Games 页面组件
 */
export default function BraingamesPage() {
    return (
        <div className={`min-h-screen bg-[#FBF9F4] ${outfit.className}`}>
            {/*<ColorBoxSection />*/}
            {/* Hero Section */}
            <ChessHeroSection features={features} />

            {/* Philosophy / Educational Value */}
            <ChessPhilosophySection data={chessPhilosophy} />


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

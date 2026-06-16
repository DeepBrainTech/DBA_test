/**
 * 文件用途：Brain Games 页面入口，负责组装各个 Section 组件
 * 依赖关系：依赖 braingames 相关 Section 组件与数据文件
 * 注意事项：页面只负责布局与组件组合，不包含业务逻辑；字体由根布局统一管理
 */

import ChessHeroSection from "@/components/braingames/ChessHeroSection";
import ChessPhilosophySection from "@/components/braingames/ChessPhilosophySection";
import CourseSection from "@/components/braingames/CourseSection";
import PricingSection from '@/components/braingames/PricingSection';
import BookFreeSection from '@/components/braingames/BookFreeSection';

import { hero, courses, chessPhilosophy, bookFreeTrial } from "@/data/braingames";

/**
 * Brain Games 页面组件
 */
export default function BraingamesPage() {
    return (
        <div className="min-h-screen bg-[#FBF9F4]">
            <ChessHeroSection data={hero} />
            <ChessPhilosophySection data={chessPhilosophy} />
            {courses.map((course) => (
                <CourseSection key={course.id} course={course} />
            ))}
            <PricingSection />
            <BookFreeSection data={bookFreeTrial} />
        </div>
    );
}

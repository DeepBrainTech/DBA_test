/**
 * 文件用途：Chess  课程展示 Section
 * 依赖关系：依赖 types/chess.ts
 * 注意事项：纯展示组件，无业务逻辑
 */

import Image from "next/image";
import type { Course } from "@/types/chess";

interface CourseSectionProps {
    course: Course;
}

export default function CourseSection({ course }: CourseSectionProps) {
    return (
        <section className="bg-[#FBF9F4] py-24">
            <div className="mx-auto max-w-[1200px] px-6 text-center">
                {/* Tag */}
                <span className="inline-block rounded-full bg-[#F3EBDD] px-5 py-2 text-sm text-[#F4A460]">
                    {course.tag}
                </span>

                {/* Title */}
                <h2 className="mt-6 text-[36px] font-bold text-[#2C3E50] md:text-[42px]">
                    {course.title}
                </h2>

                {/* Subtitle */}
                <p className="mt-4 text-[16px] text-[#2C3E50]/65">
                    {course.subtitle}
                </p>

                {/* Features */}
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {course.features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-[24px] bg-white px-8 py-10 shadow-sm"
                        >
                            <div className="mb-6 text-[32px]">{feature.icon}</div>
                            <h3 className="text-[18px] font-semibold text-[#2C3E50]">
                                {feature.title}
                            </h3>
                            <p className="mt-3 text-[14px] text-[#2C3E50]/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 flex flex-col items-center gap-6">
                    <p className="text-[16px] font-medium text-[#2C3E50]">
                        {course.ctaText}
                    </p>

                    <Image
                        src={course.qrImage}
                        alt={`${course.title} QR Code`}
                        width={120}
                        height={120}
                    />

                    <button className="rounded-full bg-[#E0A96D] px-10 py-4 text-white hover:shadow-lg transition">
                        Register Now
                    </button>
                </div>
            </div>
        </section>
    );
}

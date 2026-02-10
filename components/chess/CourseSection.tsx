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
        <section className="py-24 bg-white ">
            <div className="mx-auto max-w-[1200px] px-6 ">
                <div className="text-center">
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

                {/* 4 cards */}
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {course.cards.map((c) => (
                        <div
                            key={c.id}
                            className="rounded-[26px] bg-[#FBF9F4] px-10 py-12 text-center"
                        >
                            {/* icon bubble */}
                            <div className="mx-auto mb-8 flex h-[86px] w-[86px] items-center justify-center rounded-[18px] bg-[#F3EBDD]">
                                <Image
                                    src={c.iconSrc}
                                    alt={c.title}
                                    width={36}
                                    height={36}
                                    className="opacity-80"
                                />
                            </div>

                            <h3 className="text-[18px] font-bold text-[#2C3E50] md:text-[20px]">
                                {c.title}
                            </h3>
                            <p className="mt-3 text-[14px] leading-relaxed text-[#2C3E50]/55">
                                {c.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA panel */}
            <div className="mt-[80px] rounded-[34px] bg-[#F7EBDD] px-10 py-10 md:px-12 md:py-12">
            <div className="flex flex-col md:flex-row gap-10  md:justify-between">
                {/* left */}
                <div className="max-w-[720px] text-left">
                    <div className="flex items-center gap-3">
                        <span className="text-[22px] text-[#2C3E50]">
                            {course.ctaIcon ?? "♟"}
                        </span>
                        <h4 className="text-[28px] font-semibold text-[#2C3E50]">
                            {course.ctaText}
                        </h4>
                    </div>

                    <p className="mt-5 text-[18px] leading-8 text-[#2C3E50]/55">
                        {course.ctaDescription ??
                            "Equip your child to face life's challenges with confidence through the timeless wisdom of chess."}
                    </p>
                </div>

                {/* right QR */}
                <div className="self-end md:ml-auto flex flex-col items-end">
                    <div className="relative h-[110px] w-[110px] overflow-hidden rounded-md bg-white">
                        <Image
                            src={course.qrImage}
                            alt={`${course.title} QR Code`}
                            width={110}
                            height={110}
                            className="object-contain"
                            priority
                        />
                    </div>

                    <p className="mt-3 text-right text-[14px] leading-6 text-[#2C3E50]/70">
                        Scan to join our <br />
                        WeChat Community
                    </p>
                </div>
            </div>
            </div>  

            {/* Register button (centered) */}
            <div className="mt-[46px] flex justify-center">
                <a href="https://forms.gle/2mMzKoQkXHa2CVHe6" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#FF9966] px-12 py-5 text-[18px] font-semibold text-black shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)]">
                    Register Now
                    <span className="">
                        →
                    </span>
                </a>
            </div>
           </div>
        </section>
    );
}

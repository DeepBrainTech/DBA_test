/**
 * 文件用途：Brain Games 课程展示 Section
 * 依赖关系：依赖 types/braingames.ts
 * 注意事项：布局结构与 Educational Value（ChessPhilosophySection）一致：badge+标题+副标题、四张卡、WeChat/CTA 区
 */

import Image from "next/image";
import type { Course } from "@/types/braingames";

interface CourseSectionProps {
    course: Course;
}

export default function CourseSection({ course }: CourseSectionProps) {
    return (
        <section className={`py-24 ${course.sectionBgClassName ?? 'bg-white'}`}>
            <div className="mx-auto max-w-[1344px] px-9 flex flex-col gap-16">
                {/* 顶部：badge + 主标题 + 副标题（与 Educational Value 一致） */}
                <div className="w-full flex flex-col items-center text-center gap-8">
                    <div className="inline-flex items-center gap-3 rounded-3xl bg-[#F4A460]/10 px-5 py-3.5">
                        {course.badgeIcon ? (
                            <Image
                                src={course.badgeIcon}
                                alt=""
                                width={30}
                                height={30}
                                className="w-5 h-5 md:w-7 md:h-8 object-contain shrink-0"
                                aria-hidden
                            />
                        ) : (
                            <span className="text-[#2C3E50] text-lg" aria-hidden>{course.ctaIcon ?? "♟"}</span>
                        )}
                        <span className="text-[#F4A460] text-lg md:text-xl font-normal font-['Outfit'] leading-7">
                            {course.tag}
                        </span>
                    </div>
                    <h2 className="text-center text-slate-700 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight">
                        {course.title}
                    </h2>
                    <p className="max-w-[892px] text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-relaxed text-center">
                        {course.subtitle}
                    </p>
                </div>

                {/* 4 张课程卡（与 Educational Value 理念卡同结构） */}
                <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {course.cards.map((c) => (
                        <div
                            key={c.id}
                            className={`rounded-3xl px-6 pt-9 pb-8 text-center flex flex-col items-center ${course.cardBgClassName ?? 'bg-[#FBF9F4]'}`}
                        >
                            <div className="w-20 h-20 shrink-0 rounded-3xl bg-[#F4A460]/10 flex justify-center items-center">
                                <Image
                                    src={c.iconSrc}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="mt-5 w-full text-center text-slate-700 text-xl md:text-2xl font-semibold font-['Outfit'] leading-tight whitespace-nowrap">
                                {c.title}
                            </h3>
                            <p className="mt-4 w-full max-w-[13rem] text-center text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-snug">
                                {c.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* WeChat / CTA 面板（与 Educational Value 底部面板风格一致） */}
                <div className={`w-full rounded-3xl px-6 py-10 md:px-14 md:py-12 ${course.ctaPanelBgClassName ?? 'bg-[#FBF2E8]'}`}>
                    <div className="flex flex-col md:flex-row gap-10 md:justify-between md:items-center">
                        <div className="max-w-[720px]">
                            <div className="flex items-center gap-3">
                                {course.ctaIconSrc ? (
                                    <Image
                                        src={course.ctaIconSrc}
                                        alt=""
                                        width={28}
                                        height={28}
                                        className="shrink-0 object-contain"
                                        aria-hidden
                                    />
                                ) : (
                                    <span className="text-[22px] text-[#2C3E50]">
                                        {course.ctaIcon ?? "♟"}
                                    </span>
                                )}
                                <h4 className="text-slate-700 text-xl md:text-2xl font-bold font-['Outfit'] leading-tight">
                                    {course.ctaText}
                                </h4>
                            </div>
                            <p className="mt-5 max-w-[28rem] text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-relaxed">
                                {course.ctaDescription ??
                                    "Equip your child to face life's challenges with confidence through the timeless wisdom of chess."}
                            </p>
                        </div>
                        <div className="flex flex-col items-start shrink-0 md:mr-16">
                            <div className="h-[110px] w-[110px] overflow-hidden rounded-lg bg-white shrink-0">
                                <Image
                                    src={course.qrImage}
                                    alt="WeChat QR Code"
                                    width={110}
                                    height={110}
                                    className="object-contain"
                                />
                            </div>
                            <p className="mt-3 text-left text-slate-500 text-base font-normal font-['Outfit'] leading-7">
                                <span className="block">Scan to join our</span>
                                <span className="block">WeChat Community</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Register 按钮 */}
                <div className="flex justify-center">
                    <a
                        href="https://forms.gle/2mMzKoQkXHa2CVHe6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center gap-6 md:gap-7 min-w-[150px] h-12 md:h-14 pl-16 pr-6 py-3 md:pl-20 md:pr-7 md:py-3.5 bg-[#F4A460] rounded-3xl text-white text-xl font-bold font-['Outfit'] leading-7 shadow-[0px_4.65px_6.97px_-4.65px_rgba(0,0,0,0.10)] shadow-[0px_11.62px_17.42px_-3.48px_rgba(0,0,0,0.10)] hover:bg-rose-500 transition-colors no-underline"
                    >
                        Register Now
                        <Image src="/braingames/FeaturedProgram-chess/registernow.svg" alt="" width={24} height={24} className="shrink-0 w-6 h-6" aria-hidden />
                    </a>
                </div>
            </div>
        </section>
    );
}

/**
 * 文件用途：Brain Games 教育理念 Section
 * 依赖关系：依赖 types/braingames.ts
 * 注意事项：按钮格式与字体字号与 learning_program LearningStrategies 一致
 */

import Image from "next/image";
import type { ChessPhilosophyData } from "@/types/braingames";

export default function ChessPhilosophySection({
    data,
}: {
    data: ChessPhilosophyData;
}) {
    return (
        <section id="educational-value" className="bg-white">
            <div className="mx-auto max-w-[1344px] px-4 sm:px-6 lg:px-9 py-12 sm:py-16 lg:py-24 flex flex-col gap-8 sm:gap-12 lg:gap-16">
                {/* 顶部 */}
                <div className="w-full flex flex-col items-center text-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="inline-flex items-center gap-2 sm:gap-3 rounded-2xl lg:rounded-3xl bg-[#F4A460]/10 px-4 sm:px-5 py-2.5 sm:py-3.5">
                        <Image
                            src="/braingames/educational/icon.png"
                            alt=""
                            width={30}
                            height={30}
                            className="w-5 h-5 md:w-7 md:h-8 object-contain shrink-0"
                            aria-hidden
                        />
                        <span className="text-[#F4A460] text-base sm:text-lg md:text-xl font-normal font-outfit">
                            {data.badgeText}
                        </span>
                    </div>
                    <h2 className="text-center text-slate-700 text-2xl sm:text-3xl md:text-4xl font-bold font-outfit leading-tight">
                        {data.heading}
                    </h2>
                    <p className="max-w-[892px] text-slate-500 text-sm sm:text-base md:text-lg font-normal font-outfit leading-relaxed text-center">
                        {data.subheading}
                    </p>
                </div>

                {/* 4 张理念卡：移动端横向滚动 */}
                <div className="lg:hidden w-full overflow-x-auto pb-4 -mx-2 px-2">
                    <div className="flex gap-4 w-max">
                        {data.cards.map((c) => (
                            <div
                                key={c.id}
                                className="w-[240px] sm:w-[280px] flex-shrink-0 rounded-2xl lg:rounded-3xl bg-[#FBF9F4] px-4 sm:px-6 pt-6 sm:pt-9 pb-5 sm:pb-8 text-center flex flex-col items-center"
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 rounded-2xl lg:rounded-3xl bg-[#F4A460]/10 flex justify-center items-center">
                                    <Image
                                        src={c.iconSrc}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                                    />
                                </div>
                                <h3 className="mt-3 sm:mt-4 lg:mt-5 w-full text-center text-slate-700 text-lg sm:text-xl md:text-2xl font-semibold font-outfit leading-tight">
                                    {c.title}
                                </h3>
                                <p className="mt-2 sm:mt-3 lg:mt-4 w-full text-center text-slate-500 text-sm sm:text-base md:text-lg font-normal font-outfit leading-snug">
                                    {c.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden lg:grid w-full grid-cols-4 gap-12">
                    {data.cards.map((c) => (
                        <div
                            key={c.id}
                            className="rounded-3xl bg-[#FBF9F4] px-6 pt-9 pb-8 text-center flex flex-col items-center"
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
                            <h3 className="mt-5 w-full text-center text-slate-700 text-xl md:text-2xl font-semibold font-outfit leading-tight">
                                {c.title}
                            </h3>
                            <p className="mt-4 w-full max-w-[18rem] text-center text-slate-500 text-base md:text-lg font-normal font-outfit leading-snug">
                                {c.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 引用 / 说明面板 */}
                <div className="w-full rounded-2xl lg:rounded-3xl bg-linear-to-r from-[#F4A4601A] to-[#E894511A] px-4 sm:px-6 md:px-14 py-6 sm:py-8 md:py-10 lg:py-14">
                    <div className="relative">
                        <div className="leading-none opacity-20 text-[#F4A460] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-outfit" aria-hidden>
                            &quot;
                        </div>
                        <h3 className="text-center text-slate-700 text-lg sm:text-xl md:text-2xl font-semibold font-outfit leading-tight mt-1 sm:mt-2">
                            {data.quoteHeading}
                        </h3>
                        <p className="mx-auto mt-3 sm:mt-4 lg:mt-5 max-w-[925px] text-center text-slate-500 text-sm sm:text-base md:text-lg font-normal font-outfit leading-relaxed">
                            {data.quoteBody}
                        </p>
                        {/* quotePills：移动端横向滚动 */}
                        <div className="md:hidden mx-auto mt-6 sm:mt-8 overflow-x-auto pb-2 -mx-2 px-2">
                            <div className="flex gap-4 w-max">
                                {data.quotePills.map((p) => (
                                    <div
                                        key={p.id}
                                        className="w-[200px] sm:w-[240px] flex-shrink-0 rounded-xl sm:rounded-2xl bg-white px-4 sm:px-6 py-4 sm:py-5 text-center"
                                    >
                                        <div className="text-[#F4A460] text-sm sm:text-base md:text-lg font-semibold font-outfit">
                                            {p.title}
                                        </div>
                                        <div className="mt-1.5 sm:mt-2 text-slate-500 text-xs sm:text-sm md:text-base font-normal font-outfit leading-relaxed">
                                            {p.description}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:grid mx-auto mt-12 max-w-[980px] grid-cols-3 gap-6">
                            {data.quotePills.map((p) => (
                                <div
                                    key={p.id}
                                    className="rounded-2xl bg-white px-6 py-5 md:px-8 md:py-6 text-center"
                                >
                                    <div className="text-[#F4A460] text-base md:text-lg font-semibold font-outfit leading-7">
                                        {p.title}
                                    </div>
                                    <div className="mt-2 text-slate-500 text-base font-normal font-outfit leading-relaxed">
                                        {p.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 sm:mt-8 lg:mt-10 text-center">
                            <div className="text-slate-700 text-sm sm:text-base font-normal font-outfit">
                                {data.footerLine1}
                            </div>
                            <div className="mt-1 text-slate-500 text-xs sm:text-sm md:text-base font-normal font-outfit">
                                {data.footerLine2}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

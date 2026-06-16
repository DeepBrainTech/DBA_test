/**
 * 文件用途：Schedule 页首屏标题区
 * 依赖关系：无外部组件依赖；纯展示
 * 注意事项：-mt-[106px] 与透明导航重叠，pt 保证标题在导航下方
 */

interface ScheduleHeroSectionProps {

  title: string;

}

export default function ScheduleHeroSection({ title }: ScheduleHeroSectionProps) {
  return (
    <section
      className="relative -mt-[106px] overflow-hidden bg-gradient-to-b from-[#E8F4FC] to-[#FBF9F4]"
      aria-label="Course Schedule"
    >
      <div className="mx-auto flex min-h-[min(45svh,320px)] max-w-[1344px] items-center justify-center px-4 pb-16 pt-[calc(106px+3.5rem)] sm:px-6 lg:px-9">
        <h1 className="text-center font-outfit text-4xl font-bold leading-tight text-zinc-800 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}

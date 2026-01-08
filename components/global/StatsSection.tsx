/**
 * 文件用途：统计数据展示组件（全球教育页面）
 * 依赖关系：无
 * 注意事项：展示3个统计卡片：录取率、成功率、评分
 */

export default function StatsSection() {
  const stats = [
    {
      value: '7X',
      title: 'Acceptance Rate',
      description: 'Our students are 7x more likely to get into the Ivy League and Top 15 colleges,'
    },
    {
      value: '98%',
      title: 'Success Rate',
      description: '98% of our students are admitted to at least 1 of their Top 5 college choices'
    },
    {
      value: '4.9+',
      title: 'Trust Pilot Rating',
      description: 'One of the only consulting companies with a 4.9'
    }
  ];

  return (
    <section id="stats" className="py-[80px] bg-[#F7F6FC]">
      <div className="max-w-[1920px] mx-auto px-[51px]">
        <div className="relative">
          {/* Quote marks */}
          <div className="absolute left-[40px] top-[40px] text-[100px] text-[#313131] opacity-10 leading-[100px]">
            "
          </div>
          <div className="absolute right-[40px] top-[85px] text-[100px] text-[#313131] opacity-10 leading-[100px] rotate-180">
            "
          </div>

          {/* Stats Cards Grid */}
          <div className="flex items-stretch gap-[40px] px-[93px]">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex-1 bg-white rounded-[27px] px-[40px] pt-[40px] pb-0 flex flex-col min-h-[337px]"
              >
                {/* Value */}
                <div className="text-center mb-[20px]">
                  <p className="text-[50px] font-semibold text-[#A195DA] leading-[60px]">
                    {stat.value}
                  </p>
                </div>

                {/* Title */}
                <div className="text-center mb-[27px]">
                  <h4 className="text-[30px] font-semibold text-[#313131] leading-[42px]">
                    {stat.title}
                  </h4>
                </div>

                {/* Description */}
                <div className="text-center flex-1 flex items-start">
                  <p className="text-[27px] text-[#7C8B99] font-light leading-[38px]">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/**
 * 文件用途：服务流程地图区块组件（全球教育页面）
 * 依赖关系：依赖 types/global-education.ts 中的 ServiceStep 类型
 * 注意事项：展示5个服务步骤的时间线布局和透明服务说明
 */

import type { ServiceStep } from '@/types/global-education';

interface ServiceMapSectionProps {
  serviceSteps: ServiceStep[];
}

/**
 * 服务流程地图组件
 * @param serviceSteps 服务步骤数据数组
 */
export default function ServiceMapSection({ serviceSteps }: ServiceMapSectionProps) {
  return (
    <section className="py-[133px] bg-[#FBF9F4]">
      <div className="max-w-[1920px] mx-auto px-14">
        <div className="text-center mb-[80px]">
          <div className="inline-flex items-center gap-[20px] px-[30px] py-[15px] bg-[#E8F4FC] rounded-[33px] mb-[27px]">
            <span className="text-[32px]">🗺️</span>
            <span className="text-[24px] text-[#6BB6FF] font-medium">Your Roadmap</span>
          </div>
          <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[20px] leading-[1.3]">
            From Potential to Extraordinary
          </h2>
          <p className="text-[26.5px] text-[#7C8B99]">
            A complete, systematic, and transparent service process.
          </p>
        </div>

        {/* Service Steps - Timeline Layout */}
        <div className="max-w-[1400px] mx-auto relative mb-[80px]">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#FFE5D0] transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-[100px]">
            {serviceSteps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Step Number Circle */}
                <div 
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full flex items-center justify-center text-[40px] font-bold text-white shadow-lg z-10"
                  style={{ backgroundColor: step.color }}
                >
                  {step.step}
                </div>

                {/* Content Card */}
                <div className="grid grid-cols-2 gap-[180px] items-center">
                  {step.side === 'left' ? (
                    <>
                      {/* Left Side - Card */}
                      <div 
                        className="rounded-[27px] p-[40px]"
                        style={{ backgroundColor: step.bgColor }}
                      >
                        {/* Icon & Title */}
                        <div className="flex items-start gap-[20px] mb-[20px]">
                          <div 
                            className="w-[66px] h-[66px] rounded-[16px] flex items-center justify-center text-[32px] flex-shrink-0"
                            style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
                          >
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="text-[32px] font-semibold text-[#2C3E50] mb-[8px]">
                              {step.title}
                            </h3>
                            <p className="text-[18px]" style={{ color: step.color }}>
                              {step.duration}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-[20px] text-[#7C8B99] leading-[1.6] mb-[27px]">
                          {step.description}
                        </p>

                        {/* Bullet Points - 2 columns */}
                        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[13px]">
                          {step.items.map((item, itemIdx) => (
                            <div 
                              key={itemIdx} 
                              className="flex items-center gap-[10px]"
                            >
                              <div 
                                className="w-[8px] h-[8px] rounded-full flex-shrink-0"
                                style={{ backgroundColor: step.color }}
                              ></div>
                              <span className="text-[17px] text-[#2C3E50]">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Right Side - Empty */}
                      <div></div>
                    </>
                  ) : (
                    <>
                      {/* Left Side - Empty */}
                      <div></div>
                      {/* Right Side - Card */}
                      <div 
                        className="rounded-[27px] p-[40px]"
                        style={{ backgroundColor: step.bgColor }}
                      >
                        {/* Icon & Title */}
                        <div className="flex items-start gap-[20px] mb-[20px]">
                          <div 
                            className="w-[66px] h-[66px] rounded-[16px] flex items-center justify-center text-[32px] flex-shrink-0"
                            style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
                          >
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="text-[32px] font-semibold text-[#2C3E50] mb-[8px]">
                              {step.title}
                            </h3>
                            <p className="text-[18px]" style={{ color: step.color }}>
                              {step.duration}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-[20px] text-[#7C8B99] leading-[1.6] mb-[27px]">
                          {step.description}
                        </p>

                        {/* Bullet Points - 2 columns */}
                        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[13px]">
                          {step.items.map((item, itemIdx) => (
                            <div 
                              key={itemIdx} 
                              className="flex items-center gap-[10px]"
                            >
                              <div 
                                className="w-[8px] h-[8px] rounded-full flex-shrink-0"
                                style={{ backgroundColor: step.color }}
                              ></div>
                              <span className="text-[17px] text-[#2C3E50]">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Service Section */}
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] transition-shadow p-[60px]">
            <div className="text-center mb-[60px]">
              <h3 className="text-[40px] font-bold text-[#2C3E50] mb-[20px]">
                Transparent Service
              </h3>
              <p className="text-[20px] text-[#7C8B99] leading-[1.6] max-w-[900px] mx-auto">
                Monitor progress, access documents, and review history any time via our "Growth Portfolio" system—transforming the application process into a transparent, guided journey.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-[40px]">
              <div className="text-center">
                <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#6BB6FF]/20 to-[#4A9FEF]/20 rounded-[20px] flex items-center justify-center text-[40px] mx-auto mb-[20px]">
                  📊
                </div>
                <h4 className="text-[24px] font-semibold text-[#2C3E50]">
                  Progress Tracking
                </h4>
              </div>

              <div className="text-center">
                <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#7EC97E]/20 to-[#6BB87B]/20 rounded-[20px] flex items-center justify-center text-[40px] mx-auto mb-[20px]">
                  ☁️
                </div>
                <h4 className="text-[24px] font-semibold text-[#2C3E50]">
                  Cloud Doc Storage
                </h4>
              </div>

              <div className="text-center">
                <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#F4A460]/20 to-[#E89451]/20 rounded-[20px] flex items-center justify-center text-[40px] mx-auto mb-[20px]">
                  💬
                </div>
                <h4 className="text-[24px] font-semibold text-[#2C3E50]">
                  24/7 Chat
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


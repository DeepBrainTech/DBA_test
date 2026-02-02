/**
 * 文件用途：荣誉墙区块组件
 * 依赖关系：依赖 types/program.ts 中的 StudentAchievement 类型
 * 注意事项：展示学生成就列表和吉祥物消息
 */

import type { StudentAchievement } from '@/types/program';

interface HonorWallProps {
  achievements: StudentAchievement[];
}

/**
 * 荣誉墙组件
 * @param achievements 学生成就数据数组
 */
export default function HonorWall({ achievements }: HonorWallProps) {
  return (
    <section className="py-[133px] bg-gradient-to-b from-white to-[#E8F4FC]">
      <div className="max-w-[1920px] mx-auto px-14">
        <div className="text-center mb-[53px]">
          <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-white rounded-[33px] mb-[27px] shadow-sm">
            <span className="text-[40px]">🏆</span>
            <span className="text-[26.5px] text-[#6BB6FF]">Achievements</span>
          </div>
          <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
            Student Achievements
          </h2>
          <p className="text-[26.5px] text-[#7C8B99]">
            Every award is a testament to our students' dedication.
          </p>
        </div>

        {/* Student Achievements Grid */}
        <div className="bg-white rounded-[40px] shadow-lg p-[53px]">
          <div className="flex items-center justify-between mb-[53px]">
            <h3 className="text-[40px] font-semibold text-[#2C3E50]">Where Our Students Go</h3>
            <button className="text-[26.5px] text-[#6BB6FF] hover:underline">See All →</button>
          </div>
          
          <div className="grid grid-cols-2 gap-[27px]">
            {achievements.map((student, idx) => (
              <div key={idx} className="bg-white rounded-[27px] p-[40px] border border-gray-100 flex items-center gap-[27px] hover:shadow-lg transition">
                <div className="w-[93px] h-[93px] bg-gradient-to-br from-[rgba(255,215,0,0.2)] to-[rgba(255,165,0,0.2)] rounded-[23px] flex items-center justify-center text-[40px] flex-shrink-0">
                  {student.emoji}
                </div>
                <div className="flex-1">
                  <h4 className="text-[30px] font-semibold text-[#2C3E50] mb-[7px]">
                    {student.school}
                  </h4>
                  <p className="text-[26.5px] text-[#7C8B99] mb-[7px]">{student.name}</p>
                  <div className="flex gap-[13px]">
                    <span className="text-[23px] text-[#7C8B99]">{student.level}</span>
                    <span className="text-[23px] text-[#7C8B99]">{student.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mascot Message */}
        <div className="flex items-center justify-center gap-[27px] mt-[80px]">
          <div className="w-[107px] h-[107px] bg-gradient-to-br from-[#A8D5FF] to-[#6BB6FF] rounded-[27px] flex items-center justify-center text-[50px] flex-shrink-0">
            🐧
          </div>
          <div className="bg-white rounded-[33px] rounded-tl-none p-[40px] shadow-lg">
            <p className="text-[26.5px] text-[#2C3E50]">
              You could be the next! Keep going! 💪
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



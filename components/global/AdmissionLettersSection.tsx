/**
 * 文件用途：录取通知书展示组件（全球教育页面）
 * 依赖关系：依赖 Next.js Image 组件
 * 注意事项：展示3个顶尖学校的录取案例
 */

import Image from 'next/image';

interface AdmissionLetter {
  school: string;
  studentName: string;
  studentClass: string;
  studentInitial: string;
  imagePath: string;
}

export default function AdmissionLettersSection() {
  const letters: AdmissionLetter[] = [
    {
      school: 'Stanford',
      studentName: 'Emma Z.',
      studentClass: 'Undergraduate Class of 2029',
      studentInitial: 'E',
      imagePath: '/global/admission1.png'
    },
    {
      school: 'HARVARD',
      studentName: 'Ethan L.',
      studentClass: 'Undergraduate Class of 2029',
      studentInitial: 'E',
      imagePath: '/global/admission2.png'
    },
    {
      school: 'Yale',
      studentName: 'Benjamin C.',
      studentClass: 'Undergraduate Class of 2027',
      studentInitial: 'B',
      imagePath: '/global/admission3.png'
    }
  ];

  return (
    <section className="pt-[5px] pb-[150px] bg-[#FFFFFF]">
      <div className="max-w-[1344px] mx-auto px-9">
        {/* Admission Letters Grid */}
        <div className="grid grid-cols-3 gap-[45px]">
          {letters.map((letter, idx) => (
            <div key={idx} className="flex flex-col bg-[#FBF9F4] rounded-[20px] p-[27px] hover:shadow-xl transition-shadow duration-300 ">
              {/* Card Title */}
              <div className="mb-[27px]">
                <h4 className="text-[32px] font-normal text-[#2C3E50] leading-[50px]">
                  Accepted to {letter.school}
                </h4>
              </div>

              {/* Admission Letter Image：文档流布局，不用 fill/绝对定位 */}
              <div className="w-full h-[300px] rounded-[20px] overflow-hidden mb-[36px] bg-white shadow-md">
                <Image
                  src={letter.imagePath}
                  alt={`${letter.school} Admission Letter`}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* 底部图标 + 学生信息：与设计稿一致 w-[462px] h-20、头像 w-16 h-16、文案 text-2xl，文档流实现 */}
              <div className="flex h-20 w-full max-w-[462px] items-center gap-[22px]">
                {/* 头像：w-16 h-16 rounded-2xl bg-zinc-200，首字母白色 */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-zinc-200">
                  <span className="font-outfit text-2xl font-normal leading-10 text-white">
                    {letter.studentInitial}
                  </span>
                </div>
                {/* 姓名 + 班级：text-xl，姓名 slate-700，班级 slate-500 */}
                <div className="flex flex-col justify-center gap-0.5">
                  <p className="font-outfit text-xl font-normal leading-8 text-slate-700">
                    {letter.studentName}
                  </p>
                  <p className="font-outfit text-xl font-normal leading-8 text-slate-500 whitespace-nowrap">
                    {letter.studentClass}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


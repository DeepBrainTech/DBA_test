/**
 * 文件用途：录取通知书展示组件（升学辅导页面）
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
      imagePath: '/college_counseling/admission1.png'
    },
    {
      school: 'HARVARD',
      studentName: 'Ethan L.',
      studentClass: 'Undergraduate Class of 2029',
      studentInitial: 'E',
      imagePath: '/college_counseling/admission2.png'
    },
    {
      school: 'Yale',
      studentName: 'Benjamin C.',
      studentClass: 'Undergraduate Class of 2027',
      studentInitial: 'B',
      imagePath: '/college_counseling/admission3.png'
    }
  ];

  return (
    <section className="pt-2 pb-16 sm:pb-24 lg:pb-[150px] bg-[#FFFFFF]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-9">
        {/* Admission Letters Grid：移动端单列，平板双列，桌面三列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[45px]">
          {letters.map((letter, idx) => (
            <div key={idx} className="flex flex-col bg-[#FBF9F4] rounded-xl lg:rounded-[20px] p-4 sm:p-6 lg:p-[27px] hover:shadow-xl transition-shadow duration-300">
              {/* Card Title */}
              <div className="mb-4 sm:mb-6 lg:mb-[27px]">
                <h4 className="text-1xl sm:text-2xl lg:text-2xl font-semibold text-[#2C3E50] leading-tight lg:leading-[50px]">
                  Accepted to {letter.school}
                </h4>
              </div>

              {/* Admission Letter Image：文档流布局，不用 fill/绝对定位 */}
              <div className="w-full h-48 sm:h-56 lg:h-[300px] rounded-xl lg:rounded-[20px] overflow-hidden mb-4 sm:mb-6 lg:mb-[36px] bg-white shadow-md">
                <Image
                  src={letter.imagePath}
                  alt={`${letter.school} Admission Letter`}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* 底部图标 + 学生信息 */}
              <div className="flex h-auto sm:h-20 w-full items-center gap-3 sm:gap-4 lg:gap-[22px]">
                {/* 头像 */}
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded-xl lg:rounded-2xl bg-zinc-200">
                  <span className="font-outfit text-lg sm:text-xl lg:text-2xl font-normal text-white">
                    {letter.studentInitial}
                  </span>
                </div>
                {/* 姓名 + 班级 */}
                <div className="flex flex-col justify-center gap-0.5">
                  <p className="font-outfit text-base sm:text-lg lg:text-1xl font-normal text-slate-700">
                    {letter.studentName}
                  </p>
                  <p className="font-outfit text-sm sm:text-base lg:text-1xl font-normal text-slate-500">
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


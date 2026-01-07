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
      imagePath: '/Global/admission1.png'
    },
    {
      school: 'HARVARD',
      studentName: 'Ethan L.',
      studentClass: 'Undergraduate Class of 2029',
      studentInitial: 'E',
      imagePath: '/Global/admission2.png'
    },
    {
      school: 'Yale',
      studentName: 'Benjamin C.',
      studentClass: 'Undergraduate Class of 2027',
      studentInitial: 'B',
      imagePath: '/Global/admission3.png'
    }
  ];

  return (
    <section className="py-[100px] bg-[#FBF9F4]">
      <div className="max-w-[1920px] mx-auto px-[60px]">
        {/* Admission Letters Grid */}
        <div className="grid grid-cols-3 gap-[51px]">
          {letters.map((letter, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-[20px] p-[27px] hover:shadow-xl transition-shadow duration-300">
              {/* Card Title */}
              <div className="mb-[27px]">
                <h4 className="text-[32px] font-normal text-[#2C3E50] leading-[50px]">
                  Accepted to {letter.school}
                </h4>
              </div>

              {/* Admission Letter Image */}
              <div className="relative w-full h-[424px] rounded-[20px] overflow-hidden mb-[36px] bg-white shadow-md">
                <Image 
                  src={letter.imagePath}
                  alt={`${letter.school} Admission Letter`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Student Info */}
              <div className="flex items-center gap-[20px]">
                {/* Student Avatar */}
                <div className="w-[66px] h-[66px] rounded-[17px] bg-[#E8E4F3] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#2C3E50] text-[27px] font-normal">
                    {letter.studentInitial}
                  </span>
                </div>

                {/* Student Details */}
                <div className="flex flex-col">
                  <p className="text-[27px] text-[#2C3E50] leading-[43px] mb-0">
                    {letter.studentName}
                  </p>
                  <p className="text-[27px] text-[#A195DA] leading-[43px]">
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


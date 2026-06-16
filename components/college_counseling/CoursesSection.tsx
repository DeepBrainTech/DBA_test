/**
 * 文件用途：课程展示组件
 * 依赖关系：无
 * 注意事项：展示课程列表和详细信息
 */

interface Course {
  title: string;
  description: string;
  duration?: string;
  price?: string;
  features?: string[];
  icon?: string;
}

const courses: Course[] = [
  {
    title: 'Course 1',
    description: 'Course description here',
    duration: 'Duration',
    price: 'Price',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    icon: '📚'
  },
  {
    title: 'Course 2',
    description: 'Course description here',
    duration: 'Duration',
    price: 'Price',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    icon: '📚'
  },
  {
    title: 'Course 3',
    description: 'Course description here',
    duration: 'Duration',
    price: 'Price',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    icon: '📚'
  }
];

export default function CoursesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 xl:py-[133px] bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-14">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-[80px]">
          <div className="inline-flex items-center gap-2 sm:gap-3 lg:gap-[20px] px-4 sm:px-5 lg:px-[30px] py-2.5 sm:py-3 lg:py-[15px] bg-[#F3F0FF] rounded-2xl lg:rounded-[33px] mb-4 sm:mb-6 lg:mb-[27px]">
            <span className="text-xl sm:text-2xl lg:text-[32px]">📚</span>
            <span className="text-base sm:text-lg lg:text-[24px] text-[#9B8FD8] font-medium">Our Courses</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[53px] font-bold text-[#2C3E50] mb-4 sm:mb-6 lg:mb-[27px] leading-tight">
            Course Title
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-[26.5px] text-[#7C8B99] max-w-[1200px] mx-auto">
            Course section description
          </p>
        </div>

        {/* Courses Grid：移动端单列，平板双列，桌面三列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[40px]">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-xl lg:rounded-[27px] border border-[#E8F4FC] p-5 sm:p-6 lg:p-[40px] hover:shadow-lg transition">
              <div className="text-3xl sm:text-4xl lg:text-[50px] mb-3 sm:mb-4 lg:mb-[20px]">{course.icon}</div>
              <h3 className="text-xl sm:text-2xl lg:text-[32px] font-semibold text-[#2C3E50] mb-2 sm:mb-3 lg:mb-[13px]">
                {course.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-[20px] text-[#7C8B99] mb-4 sm:mb-5 lg:mb-[27px]">
                {course.description}
              </p>
              {course.features && (
                <div className="space-y-2 sm:space-y-3 lg:space-y-[13px]">
                  {course.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 sm:gap-[10px]">
                      <span className="text-[#9B8FD8]">✓</span>
                      <span className="text-sm sm:text-base lg:text-[18px] text-[#5C6B7A]">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


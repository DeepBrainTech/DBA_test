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
    <section className="py-[133px] bg-white">
      <div className="max-w-[1920px] mx-auto px-14">
        {/* Header */}
        <div className="text-center mb-[80px]">
          <div className="inline-flex items-center gap-[20px] px-[30px] py-[15px] bg-[#F3F0FF] rounded-[33px] mb-[27px]">
            <span className="text-[32px]">📚</span>
            <span className="text-[24px] text-[#9B8FD8] font-medium">Our Courses</span>
          </div>
          <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
            Course Title
          </h2>
          <p className="text-[26.5px] text-[#7C8B99] max-w-[1200px] mx-auto">
            Course section description
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-3 gap-[40px]">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-[27px] border border-[#E8F4FC] p-[40px] hover:shadow-lg transition">
              <div className="text-[50px] mb-[20px]">{course.icon}</div>
              <h3 className="text-[32px] font-semibold text-[#2C3E50] mb-[13px]">
                {course.title}
              </h3>
              <p className="text-[20px] text-[#7C8B99] mb-[27px]">
                {course.description}
              </p>
              {course.features && (
                <div className="space-y-[13px]">
                  {course.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-[10px]">
                      <span className="text-[#9B8FD8]">✓</span>
                      <span className="text-[18px] text-[#5C6B7A]">{feature}</span>
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


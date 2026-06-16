/**
 * 文件用途：Test Prep 页面 Register Now 按钮（Figma 3674-734 样式）
 * 依赖关系：链接与 Courses 页 CourseInformation 一致
 */

import Image from 'next/image';

export const TEST_PREP_REGISTER_URL =
  'https://docs.google.com/forms/d/1wnsEKekngdFdpt465K4BIvXLT1mKvM2VmEI2Kc0QvCQ/viewform';

export default function TestPrepRegisterButton() {
  return (
    <a
      href={TEST_PREP_REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-12 items-center justify-center gap-2 rounded-[23px] bg-[#6B7AEF] px-7 text-[22px] font-bold font-outfit text-white no-underline shadow-[0px_12px_9px_rgba(0,0,0,0.1),0px_5px_4px_rgba(0,0,0,0.1)] transition-colors hover:bg-[#5A69DE] md:h-14 md:px-8"
    >
      <span>Register Now</span>
      <Image
        src="/math/registernow.svg"
        alt=""
        width={24}
        height={24}
        className="size-5 shrink-0 md:size-6"
        aria-hidden
      />
    </a>
  );
}

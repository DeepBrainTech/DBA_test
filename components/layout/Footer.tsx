/**
 * 文件用途：页脚组件（可在多个页面复用）
 * 依赖关系：依赖 Next.js Link 和 Image 组件
 * 注意事项：包含公司信息、链接和版权声明
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';

/**
 * 页脚组件
 */
export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-[106px]">
      <div className="max-w-[1920px] mx-auto px-14">
        <div className="grid grid-cols-6 gap-[60px] mb-[80px]">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center gap-5 mb-[40px]">
              <div className="w-20 h-20 bg-gradient-to-b from-[#A8D5FF] to-[#6BB6FF] rounded-[20px] flex items-center justify-center">
                <span className="text-[40px]">🧠</span>
              </div>
            </div>
            <p className="text-[22px] text-[#C8CFD6] leading-[1.6] mb-[40px]">
              We provide courses in Olympiad Math, Programming, Chess, and Global Education Planning to help children aged 6–18 learn happily, train their critical thinking, and build challenging skills.
            </p>
            <div className="space-y-[20px]">
              <div className="flex items-center gap-[20px]">
                <svg className="w-[27px] h-[27px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-[22px] text-white">914-488-4460</span>
              </div>
              <div className="flex items-center gap-[20px]">
                <svg className="w-[27px] h-[27px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[22px] text-white">chris@deepbraintechnology.com</span>
              </div>
              <div className="flex items-center gap-[20px]">
                <svg className="w-[27px] h-[27px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[22px] text-white">92 Massasoit St, Waltham, MA 02453</span>
              </div>
            </div>
          </div>

          {/* Course Center */}
          <div>
            <h4 className="text-[27px] font-semibold mb-[27px]">Course Center</h4>
            <div className="space-y-[20px]">
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Olympiad Math</Link>
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Chess</Link>
              <Link href="/global-education" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Global Education</Link>
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Programming</Link>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-[27px] font-semibold mb-[27px]">About Us</h4>
            <div className="space-y-[20px]">
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Our Company</Link>
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Our Team</Link>
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Contact Us</Link>
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Careers</Link>
            </div>
          </div>

          {/* Help Center */}
          <div>
            <h4 className="text-[27px] font-semibold mb-[27px]">Help Center</h4>
            <div className="space-y-[20px]">
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">FAQ</Link>
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Refund Policy</Link>
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Privacy Policy</Link>
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Terms of Service</Link>
            </div>
          </div>

          {/* Resource Center + 小红书 */}
          <div>
            <h4 className="text-[27px] font-semibold mb-[27px]">Resource Center</h4>
            <div className="space-y-[20px] mb-[40px]">
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Learning Materials</Link>
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Educational Blogs</Link>
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Successful Cases</Link>
              <Link href="#" className="block text-[20px] text-[#A8B5C3] hover:text-white transition">Events</Link>
            </div>
            
            {/* 小红书二维码 */}
            <div className="pt-[40px] border-t border-[#3D4F63]">
              <p className="text-[23px] text-[#A8B5C3] mb-[20px]">Follow Us</p>
              <div className="w-[240px] h-[240px] bg-[#3D4F63] rounded-[30px] flex items-center justify-center">
                <Image src="/xhs.svg" alt="小红书" width={180} height={180} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between pt-[40px] border-t border-[#3D4F63]">
          <p className="text-[23px] text-[#A8B5C3]">© 2025 DeepBrain Academy. All rights reserved.</p>
          <div className="flex items-center gap-[40px]">
            <Link href="#" className="text-[20px] text-[#A8B5C3] hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="text-[20px] text-[#A8B5C3] hover:text-white transition">Terms of Use</Link>
            <Link href="#" className="text-[20px] text-[#A8B5C3] hover:text-white transition">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


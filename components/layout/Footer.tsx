/**
 * 文件用途：页脚组件（可在多个页面复用）
 * 依赖关系：依赖 Next.js Link 和 Image 组件
 * 注意事项：包含公司信息、链接和版权声明
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import SocialIconWithQR from './SocialIconWithQR';

/**
 * 页脚组件
 * @param className 可选的额外样式类名
 */
export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer className={`bg-[#2C3E50] text-white pt-12 md:pt-16 pb-0 ${className}`}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-8 mb-8 md:mb-10">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                <Image
                  src="/nav_footer/logo.png"
                  alt="DeepBrain Academy"
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
              <Image
                src="/nav_footer/logo_with_text.png"
                alt="DeepBrain Academy - Deeper, Sharper, Brighter"
                width={263}
                height={49}
                className="h-8 w-auto md:h-10 object-contain object-left"
              />
            </div>
            <p className="text-base md:text-lg text-[#C8CFD6] leading-snug mb-6 md:mb-8">
              We provide expert instruction in Mathematics, Chess, AI & Coding, Languages, and Test Preparation, along with College Counseling services, helping K–12 students achieve academic excellence while developing critical thinking, problem-solving abilities, creativity, and a lifelong love of learning.
            </p>
            {/* 电话、邮箱、地址图标颜色：修改下方三个 svg 的 className 中的 text-[#xxx] 即可 */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0 text-[#6BB6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-base md:text-lg text-white font-normal">914-488-4460</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0 text-[#6BB6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-base md:text-lg text-white font-normal">info@deepbrainacademy.org</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0 text-[#6BB6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-base md:text-lg text-white font-normal">120 County Rd, Suite 100-101, Tenafly, NJ</span>
              </div>
            </div>
            
            {/* Follow Us 和二维码部分 */}
            <div className="pt-6 md:pt-8 border-t border-[#3D4F63] mt-6 md:mt-8">
              <p className="text-base md:text-lg text-[#A8B5C3] mb-3 md:mb-4">Follow Us</p>
              <div className="flex flex-row items-start gap-3 md:gap-4">
                {/* RedNote 图标 - 悬停显示二维码 */}
                <SocialIconWithQR 
                  iconSrc="/nav_footer/rednote_icon.svg"
                  qrCodeSrc="/nav_footer/rednote_qr.svg" 
                  platformName="RedNote" 
                />
                
                {/* Facebook Public Page 图标 - 悬停显示二维码 */}
                <SocialIconWithQR 
                  iconSrc="/nav_footer/facebook_icon.svg"
                  qrCodeSrc="/nav_footer/fb_public_qr.png" 
                  platformName="Facebook" 
                />
                
                {/* Instagram 图标 - 悬停显示二维码 */}
                <SocialIconWithQR 
                  iconSrc="/nav_footer/instgram_icon.svg"
                  qrCodeSrc="/nav_footer/ins_qr.png" 
                  platformName="Instagram" 
                />
                
                {/* WeChat 图标 - 悬停显示二维码 */}
                <SocialIconWithQR 
                  iconSrc="/nav_footer/wechat_icon.svg"
                  qrCodeSrc="/nav_footer/wechat_qr.jpg" 
                  platformName="WeChat" 
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-5">Navigation</h4>
            <div className="space-y-2 md:space-y-3">
              <Link href="/" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Home</Link>
              <Link href="/innovation_program" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Innovation Program</Link>
              <Link href="/summer_camp" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Summer Camp</Link>
              <Link href="/courses" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Courses</Link>
              <Link href="/schedule" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Schedule</Link>
              <Link href="/college_counseling" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">College Counseling</Link>
              <Link href="/math" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Math</Link>
              <Link href="/braingames" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Brain Games</Link>
              <Link href="/programming" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Programming</Link>
              <Link href="/test_prep" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Test Prep</Link>
              <Link href="/tutoring" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Tutoring</Link>
              <Link href="/about" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">About Us</Link>
            </div>
          </div>

          {/* Course Center */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-5">Course Center</h4>
            <div className="space-y-2 md:space-y-3">
              <Link href="/math" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Olympiad Math</Link>
              <Link href="/braingames" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Chess</Link>
              <Link href="/college_counseling" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">College Counseling</Link>
              <Link href="/programming" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Programming</Link>
            </div>
          </div>

          {/* Help Center */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-5">Help Center</h4>
            <div className="space-y-2 md:space-y-3">
              <Link href="#" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">FAQ</Link>
              <Link href="#" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Refund Policy</Link>
              <Link href="#" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Privacy Policy</Link>
              <Link href="#" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Terms of Service</Link>
            </div>
          </div>

          {/* Resource Center */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-5">Resource Center</h4>
            <div className="space-y-2 md:space-y-3">
              <Link href="#" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Learning Materials</Link>
              <Link href="/blog/value-of-learning-chess" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Educational Blogs</Link>
              <Link href="#" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Successful Cases</Link>
              <Link href="#" className="block text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Events</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar：整条背景色 #1F2D3D，内容仍受 max-w 与 px 约束 */}
      <div className="bg-[#1F2D3D]">
        <div className="mx-auto px-6 md:px-14 py-4 md:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm md:text-base text-[#A8B5C3] text-center sm:text-left">© 2025 DeepBrain Academy. All rights reserved.</p>
            <div className="flex items-center gap-4 md:gap-6">
              <Link href="#" className="text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Privacy Policy</Link>
              <Link href="#" className="text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Terms of Use</Link>
              <Link href="/sitemap.xml" className="text-sm md:text-base text-[#A8B5C3] hover:text-white transition">Site Map</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



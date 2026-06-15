/**
 * 文件用途：导航栏组件（可在多个页面复用）
 * 依赖关系：依赖 Next.js Link 和 Image 组件
 * 注意事项：需要根据当前路由高亮激活的链接；使用透明背景便于首屏大图延伸至顶部；导航在文档流顶部不固定，随页面滚动，仅滚回顶部时可见
 * 移动端使用汉堡菜单，点击展开/收起导航链接
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/**
 * 导航链接配置
 */
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/learning_program', label: 'Learning Program' },
  { href: '/summer_camp', label: 'Summer Camp' },
  { href: '/courses', label: 'Courses' },
  { href: '/test_prep', label: 'Test Prep' },
  { href: '/global-education', label: 'Global Education' },
  { href: '/math', label: 'Math' },
  { href: '/braingames', label: 'Brain Games' },
  { href: '/programming', label: 'Programming' },
  { href: '/tutoring', label: 'Tutoring' },
  { href: '/about', label: 'About Us' }
];

/** Learning Program 与 Courses 相邻，预加载封面避免切换时图片闪烁 */
const ADJACENT_HERO_COVERS = [
  '/learning_program/hero/cover.png',
  '/courses/hero/cover.png',
];

/**
 * 导航栏组件
 * @param className 可选的额外样式类名
 */
export default function Navigation({ className = '' }: { className?: string }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 在 Learning Program / Courses 间切换时预加载双方封面图
  useEffect(() => {
    if (pathname === '/learning_program' || pathname === '/courses') {
      ADJACENT_HERO_COVERS.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    }
  }, [pathname]);

  // 菜单打开时禁止页面滚动
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`relative top-0 left-0 right-0 z-50 bg-transparent shadow-[0_3.319px_10px_-3.319px_rgba(0,0,0,0.04)] ${className}`}>
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-11">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-[106px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center">
              <Image 
                src="/nav_footer/logo.png" 
                alt="DeepBrain Academy" 
                width={64} 
                height={64}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm lg:text-[16px] font-medium text-[#274777] tracking-wider lg:tracking-[25%]">DEEP BRAIN ACADEMY</span>
              <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-medium text-[rgba(19,28,72,0.5)] tracking-wider lg:tracking-[38%] hidden sm:block">DEEPER-SHARPER-BRIGHTER</span>
            </div>
          </Link>

          {/* 桌面端导航链接 */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-[38px] text-base 2xl:text-[21px] text-[#333]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`hover:text-black transition whitespace-nowrap ${isActive ? 'font-bold text-black' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* 汉堡菜单按钮（移动端/平板） */}
          <button
            type="button"
            className="xl:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={isMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-[#274777] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#274777] mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#274777] mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* 移动端菜单遮罩层 */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* 移动端侧边菜单 */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out xl:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* 菜单头部 */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="text-lg font-medium text-[#274777]">Menu</span>
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(false)}
            aria-label="关闭菜单"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 菜单链接 */}
        <div className="py-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-6 py-3 text-lg transition ${
                  isActive
                    ? 'font-bold text-[#274777] bg-blue-50 border-r-4 border-[#274777]'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#274777]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}


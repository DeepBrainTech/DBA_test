/**
 * 文件用途：导航栏组件（可在多个页面复用）
 * 依赖关系：依赖 Next.js Link 和 Image 组件
 * 注意事项：需要根据当前路由高亮激活的链接；使用透明背景便于首屏大图延伸至顶部；导航在文档流顶部不固定，随页面滚动，仅滚回顶部时可见
 * 移动端使用汉堡菜单，点击展开/收起导航链接
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavigationLink {
  href: string;
  label: string;
  hidden?: boolean;
}

/**
 * Programs 下拉菜单项
 */
const programsLinks: NavigationLink[] = [
  { href: '/innovation_program', label: 'Innovation Program' },
  { href: '/math', label: 'Math' },
  { href: '/programming', label: 'Programming' },
  { href: '/braingames', label: 'Brain Games' },
  { href: '/test_prep', label: 'Test Prep' },
];

/**
 * 顶级导航链接（Programs 单独处理为下拉）
 * hidden: 秋季暂时隐藏入口，页面路由与代码保留以便复用
 */
const navLinks: NavigationLink[] = [
  { href: '/', label: 'Home' },
  { href: '/summer_camp', label: 'Summer Camp', hidden: true },
  { href: '/courses', label: 'Courses' },
  { href: '/schedule', label: 'Schedule', hidden: true },
  { href: '/college_counseling', label: 'College Counseling' },
  { href: '/tutoring', label: 'Tutoring' },
  { href: '/about', label: 'About Us' },
];

const visibleProgramsLinks = programsLinks.filter((link) => !link.hidden);
const visibleNavLinks = navLinks.filter((link) => !link.hidden);

/** Innovation Program 与 Courses 相邻，预加载封面避免切换时图片闪烁 */
const ADJACENT_HERO_COVERS = [
  '/innovation_program/hero/cover.png',
  '/courses/hero/cover.png',
];

/**
 * 导航栏组件
 * @param className 可选的额外样式类名
 */
export default function Navigation({ className = '' }: { className?: string }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const programsRef = useRef<HTMLDivElement>(null);

  const isProgramsActive = visibleProgramsLinks.some((link) => pathname === link.href);

  // 导航发生时主动收起菜单，避免用 effect 同步重置本地状态
  const closeProgramsMenus = () => {
    setIsProgramsOpen(false);
    setIsMobileProgramsOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileProgramsOpen(false);
  };

  // 在 Innovation Program / Courses 间切换时预加载双方封面图
  useEffect(() => {
    if (pathname === '/innovation_program' || pathname === '/courses') {
      ADJACENT_HERO_COVERS.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    }
  }, [pathname]);

  // 点击外部关闭 Programs 下拉
  useEffect(() => {
    if (!isProgramsOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (programsRef.current && !programsRef.current.contains(event.target as Node)) {
        setIsProgramsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProgramsOpen]);

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
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-4"
            onClick={closeProgramsMenus}
          >
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
            {/* Home */}
            <Link
              href="/"
              className={`hover:text-black transition whitespace-nowrap ${pathname === '/' ? 'font-bold text-black' : ''}`}
              onClick={closeProgramsMenus}
            >
              Home
            </Link>

            {/* Programs 下拉 */}
            <div ref={programsRef} className="relative">
              <button
                type="button"
                className={`inline-flex items-center gap-1 hover:text-black transition whitespace-nowrap ${
                  isProgramsActive || isProgramsOpen ? 'font-bold text-black' : ''
                }`}
                onClick={() => setIsProgramsOpen((prev) => !prev)}
                aria-expanded={isProgramsOpen}
                aria-haspopup="true"
              >
                Programs
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isProgramsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isProgramsOpen && (
                <div className="absolute left-0 top-full mt-3 z-50 p-6 bg-white/80 rounded-2xl shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-slate-400/50 inline-flex flex-col justify-center items-start gap-5">
                  {visibleProgramsLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`justify-start text-xl font-normal font-outfit whitespace-nowrap transition hover:text-blue-400 ${
                          isActive ? 'text-blue-400' : 'text-zinc-800'
                        }`}
                        onClick={closeProgramsMenus}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {visibleNavLinks.slice(1).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`hover:text-black transition whitespace-nowrap ${isActive ? 'font-bold text-black' : ''}`}
                  onClick={closeProgramsMenus}
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
            onClick={closeMobileMenu}
            aria-label="关闭菜单"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 菜单链接 */}
        <div className="py-4">
          <Link
            href="/"
            className={`block px-6 py-3 text-lg transition ${
              pathname === '/'
                ? 'font-bold text-[#274777] bg-blue-50 border-r-4 border-[#274777]'
                : 'text-gray-700 hover:bg-gray-50 hover:text-[#274777]'
            }`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          {/* 移动端 Programs 折叠 */}
          <div>
            <button
              type="button"
              className={`w-full flex items-center justify-between px-6 py-3 text-lg transition ${
                isProgramsActive
                  ? 'font-bold text-[#274777] bg-blue-50 border-r-4 border-[#274777]'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-[#274777]'
              }`}
              onClick={() => setIsMobileProgramsOpen((prev) => !prev)}
              aria-expanded={isMobileProgramsOpen}
            >
              Programs
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${isMobileProgramsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMobileProgramsOpen && (
              <div className="bg-gray-50 py-2">
                {visibleProgramsLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block pl-10 pr-6 py-2.5 text-base transition ${
                        isActive
                          ? 'font-bold text-blue-400'
                          : 'text-gray-600 hover:text-blue-400'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {visibleNavLinks.slice(1).map((link) => {
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
                onClick={closeMobileMenu}
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


/**
 * 文件用途：导航栏组件（可在多个页面复用）
 * 依赖关系：依赖 Next.js Link 和 Image 组件
 * 注意事项：需要根据当前路由高亮激活的链接；使用透明背景便于首屏大图延伸至顶部；导航在文档流顶部不固定，随页面滚动，仅滚回顶部时可见
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/**
 * 导航链接配置
 */
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/summer_camp', label: 'Summer Camp' },
  { href: '/global-education', label: 'Global Education' },
  { href: '/math', label: 'Math' },
  { href: '/braingames', label: 'Brain Games' },
  { href: '/programming', label: 'Programming' },
  { href: '/about', label: 'About Us' }
];

/**
 * 导航栏组件
 * @param className 可选的额外样式类名
 */
export default function Navigation({ className = '' }: { className?: string }) {
  const pathname = usePathname();

  /* 导航在文档流顶部，随页面滚动；只有用户滚回页面最上面才能看到 */
    return (
    <nav className={`relative top-0 left-0 right-0 z-50 bg-transparent shadow-[0_3.319px_10px_-3.319px_rgba(0,0,0,0.04)] ${className}`}>
      <div className="max-w-[1920px] mx-auto px-11">
        <div className="flex items-center justify-between h-[106px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <Image 
                src="/nav_footer/logo.png" 
                alt="DeepBrain Academy Logo" 
                width={64} 
                height={64}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] font-medium text-[#274777] tracking-[25%]">DEEP BRAIN ACADEMY</span>
              <span className="text-[10px] font-medium text-[rgba(19,28,72,0.5)] tracking-[38%]">DEEPER-SHARPER-BRIGHTER</span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-[38px] text-[21px] text-[#333]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`hover:text-black transition ${isActive ? 'font-bold text-black' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}


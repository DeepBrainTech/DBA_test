/**
 * 文件用途：导航栏组件（可在多个页面复用）
 * 依赖关系：依赖 Next.js Link 组件
 * 注意事项：需要根据当前路由高亮激活的链接
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * 导航链接配置
 */
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/global-education', label: 'Global Education' },
  { href: '#', label: 'Math' },
  { href: '#', label: 'Chess' },
  { href: '#', label: 'Programming' },
  { href: '#', label: 'About Us' }
];

/**
 * 导航栏组件
 * @param className 可选的额外样式类名
 */
export default function Navigation({ className = '' }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm ${className}`}>
      <div className="max-w-[1920px] mx-auto px-14">
        <div className="flex items-center justify-between h-[133px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-5">
            <div className="w-20 h-20 bg-gradient-to-b from-[#A8D5FF] to-[#6BB6FF] rounded-[20px] flex items-center justify-center">
              <span className="text-[40px]">🧠</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[20px] font-medium text-[#274777] tracking-[25%]">DEEP BRAIN ACADEMY</span>
              <span className="text-[13px] font-medium text-[rgba(19,28,72,0.5)] tracking-[38%]">DEEPER-SHARPER-BRIGHTER</span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-[48px] text-[26px] text-[#333]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`hover:text-[#6BB6FF] transition ${isActive ? 'font-bold text-[#6BB6FF]' : ''}`}
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


/**
 * 文件用途：Summer Camp 页面入口，显示 Coming Soon 提示
 * 依赖关系：Navigation 和 Footer 已在根 layout.tsx 中统一管理
 * 注意事项：页面仅显示 Coming Soon 提示，后续可扩展为完整页面
 */

import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

/**
 * Summer Camp 页面组件
 * 当前显示 Coming Soon 提示
 */
export default function SummerCampPage() {
  return (
    <div className={`${outfit.variable} ${outfit.className} min-h-screen bg-[#FBF9F4] pt-[106px]`}>
      <div className="flex items-center justify-center min-h-[calc(100vh-106px)]">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#274777] mb-4">Coming Soon</h1>
        </div>
      </div>
    </div>
  );
}

/**
 * 文件用途：社交媒体图标组件（悬停显示二维码）
 * 依赖关系：依赖 Next.js Image 组件
 * 注意事项：默认显示图标，鼠标悬停时显示对应的二维码
 */

'use client';

import Image from 'next/image';
import { useState } from 'react';

/**
 * 社交媒体图标组件的属性
 * @param iconSrc 图标图片路径
 * @param qrCodeSrc 二维码图片路径
 * @param platformName 平台名称（如 "RedNote"、"Facebook"、"Instagram" 等）
 * @param alt 图片的 alt 文本，默认为平台名称
 */
interface SocialIconWithQRProps {
  iconSrc: string;
  qrCodeSrc: string;
  platformName: string;
  alt?: string;
}

/**
 * 社交媒体图标组件
 * 默认显示图标，鼠标悬停时显示二维码
 */
export default function SocialIconWithQR({ 
  iconSrc,
  qrCodeSrc, 
  platformName, 
  alt 
}: SocialIconWithQRProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 默认显示的图标 */}
      <div className="w-[60px] h-[60px] bg-[#3D4F63] rounded-[15px] flex items-center justify-center shadow-lg cursor-pointer transition-transform hover:scale-110">
        <Image 
          src={iconSrc} 
          alt={alt || platformName} 
          width={40} 
          height={40} 
        />
      </div>

      {/* 悬停时显示的二维码 - 在图标上方 */}
      <div 
        className={`absolute bottom-[70px] left-1/2 transform -translate-x-1/2 z-50 w-[180px] bg-[#3D4F63] rounded-[30px] flex flex-col items-center justify-center py-[20px] shadow-2xl transition-all duration-300 ${
          isHovered 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <Image 
          src={qrCodeSrc} 
          alt={`${platformName} QR Code`} 
          width={135} 
          height={135}
          className="object-contain"
        />
        <p className="text-[20px] text-[#A8B5C3] mt-[5px] text-center">
          {platformName}
        </p>
      </div>
    </div>
  );
}

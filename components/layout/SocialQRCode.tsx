/**
 * 文件用途：社交媒体二维码卡片组件（可复用）
 * 依赖关系：依赖 Next.js Image 组件
 * 注意事项：用于展示不同社交媒体的二维码和平台名称
 */

import Image from 'next/image';
import React from 'react';

/**
 * 社交媒体二维码卡片组件的属性
 * @param qrCodeSrc 二维码图片路径
 * @param platformName 平台名称（如 "RedNote"、"Facebook"、"Instagram" 等）
 * @param alt 图片的 alt 文本，默认为平台名称
 */
interface SocialQRCodeProps {
  qrCodeSrc: string;
  platformName: string;
  alt?: string;
}

/**
 * 社交媒体二维码卡片组件
 * 展示一个包含二维码和平台名称的卡片
 */
export default function SocialQRCode({ 
  qrCodeSrc, 
  platformName, 
  alt 
}: SocialQRCodeProps) {
  return (
    <div className="w-32 sm:w-40 lg:w-[180px] flex flex-col items-center justify-center py-3 sm:py-4 lg:py-[20px]">
      <Image 
        src={qrCodeSrc} 
        alt={alt || platformName} 
        width={135} 
        height={135}
        className="w-24 h-24 sm:w-28 sm:h-28 lg:w-[135px] lg:h-[135px]" 
      />
      <p className="text-sm sm:text-base lg:text-[20px] text-[#A8B5C3] mt-1 sm:mt-1.5 lg:mt-[5px] text-center">
        {platformName}
      </p>
    </div>
  );
}

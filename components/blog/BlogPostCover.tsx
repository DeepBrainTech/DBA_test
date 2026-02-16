/**
 * 文件用途：博客详情页主图（宽幅 16:9）
 * 依赖关系：依赖 Next.js Image
 * 注意事项：使用 priority 以优先加载首屏图片
 */

import Image from 'next/image';

export interface BlogPostCoverProps {
  /** 封面图路径 */
  image: string;
  /** 图片 alt（通常为文章标题） */
  alt: string;
}

export function BlogPostCover({ image, alt }: BlogPostCoverProps) {
  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-white mb-10">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

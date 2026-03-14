/**
 * 文件用途：Math 页「Free Trial」按钮，点击后弹窗展示试听课图片
 * 依赖关系：需 use client（弹窗开关状态）；lucide-react；next/image
 */

'use client';

import Image from 'next/image';
import { useState } from 'react';

import { ArrowRight, X } from 'lucide-react';

const FREE_TRIAL_IMAGE_SRC = '/math/Free_trial_class.png';

interface FreeTrialButtonProps {
  /** 按钮外层 className，与双 CTA 中另一按钮对齐用 */
  className?: string;
}

export default function FreeTrialButton({ className }: FreeTrialButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        aria-label="查看 Free Trial 试听课信息"
      >
        Free Trial
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={2.5} />
      </button>

      {/* 弹窗遮罩 + 图片；点击遮罩或关闭按钮关闭 */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Free Trial 试听课信息"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl rounded-xl overflow-hidden bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition"
              aria-label="关闭"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full aspect-[4/3] sm:aspect-video max-h-[90vh]">
              <Image
                src={FREE_TRIAL_IMAGE_SRC}
                alt="Free Trial 试听课信息"
                fill
                className="object-contain"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

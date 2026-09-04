/**
 * 文件用途：Referral Program FAQ 手风琴区块
 * 依赖关系：依赖 FAQ 数据与 Figma 导出的上下箭头 SVG
 * 注意事项：FAQ 展开状态只存在于客户端，所有卡片默认保持折叠
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';

import ReferralSectionHeader from '@/components/referral/ReferralSectionHeader';
import type { ReferralFaqItem } from '@/types/referral';

interface ReferralFaqSectionProps {
  /** 区块标签 */
  badge: string;
  /** 区块标题 */
  title: string;
  /** FAQ 列表 */
  items: ReferralFaqItem[];
}

export default function ReferralFaqSection({ badge, title, items }: ReferralFaqSectionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set());

  const toggleItem = (index: number) => {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#E8F4FC] px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32 lg:px-11 lg:pb-[170px] lg:pt-[160px]" aria-labelledby="referral-faq-title">
      <div className="mx-auto max-w-[1507px]">
        <div id="referral-faq-title">
          <ReferralSectionHeader badge={badge} title={title} />
        </div>

        <div className="mx-auto mt-12 flex max-w-[1269px] flex-col gap-3 sm:mt-14 lg:mt-16">
          {items.map((item, index) => {
            const isOpen = openItems.has(index);
            const contentId = `referral-faq-answer-${index}`;

            return (
              <div key={`${item.question}-${index}`} className="rounded-[21px] bg-white px-5 py-4 shadow-[0_8px_7px_rgba(0,0,0,0.1)] sm:px-8 sm:py-5 lg:px-10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 text-left"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="font-outfit text-base font-medium leading-7 text-[#2C3E50] sm:text-lg sm:leading-8 lg:text-xl">
                    {item.question}
                  </span>
                  <span className="relative size-6 shrink-0" aria-hidden="true">
                    <Image
                      src={isOpen ? '/referral/decor-line-1.svg' : '/referral/decor-line-3.svg'}
                      alt=""
                      fill
                      sizes="24px"
                    />
                  </span>
                </button>
                {isOpen ? (
                  <p id={contentId} className="mt-3 pr-2 font-outfit text-sm font-normal leading-6 text-[#2C3E50] sm:text-base sm:leading-7 lg:text-lg">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

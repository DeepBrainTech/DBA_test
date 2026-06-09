/**
 * 文件用途：图例筛选友好提示（课表、课程信息共用）
 */

interface FilterTapHintProps {
  showCardExpand?: boolean;
}

export default function FilterTapHint({ showCardExpand = false }: FilterTapHintProps) {
  return (
    <div className="flex flex-col items-center gap-0.5" role="note">
      <span className="font-['Outfit'] text-sm text-[#599CED] md:text-[15px]">
        ✨ Tap one to filter
        {showCardExpand ? ', tap one card to expand' : ''}
      </span>
      <svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        className="text-[#599CED]/65 motion-safe:animate-bounce"
        style={{ animationDuration: '2.2s' }}
        aria-hidden
      >
        <path
          d="M10 2C10 2 7 9 10 14C13 9 10 2 10 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 16L10 21L14 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

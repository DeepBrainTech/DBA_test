/**
 * 文件用途：PRE-AMC 可配置特色卡片，含图标区、标题、内容；容器/图标/标题/内容样式均可通过 props 覆盖
 * 依赖关系：next/image（当 iconSrc 传入时）；图标支持 ReactNode 或图片路径
 */

import Image from 'next/image';

import type { ReactNode } from 'react';

/** 卡片可配置项：容器、图标容器、图标（组件或图片路径）、标题、内容及各自样式类 */
export interface PreAMCProgramCardProps {
  /** 卡片根容器额外 className，与默认类合并（如仅传 bg-green-50 即只覆盖背景色） */
  cardClassName?: string;
  /** 图标外层容器额外 className（如背景色、圆角、尺寸） */
  iconContainerClassName?: string;
  /** 图标：传入 React 节点则直接渲染；与 iconSrc 二选一，优先使用 icon */
  icon?: ReactNode;
  /** 图标图片路径；未传 icon 时使用 Next Image 渲染 */
  iconSrc?: string;
  /** 卡片标题文案 */
  title: string;
  /** 标题元素额外 className */
  titleClassName?: string;
  /** 卡片正文/描述文案 */
  content: string;
  /** 正文元素额外 className */
  contentClassName?: string;
  /** 标题每行约多少字（1ch≈一个“0”的宽度），不传则不限制行宽 */
  titleMaxCh?: number;
  /** 正文每行约多少字（1ch≈一个“0”的宽度），不传则用默认 DEFAULT_CONTENT_MAX_CH */
  contentMaxCh?: number;
}

/** 描述区每行约多少字（仅在不传 contentMaxCh 时生效）；改大则每行更宽、行数更少 */
const DEFAULT_CONTENT_MAX_CH = 19;

const defaultCardClass =
  'flex flex-col items-center rounded-3xl bg-[#FBF9F4] px-5 py-8 text-center md:py-10';
const defaultIconContainerClass =
  'mb-6 flex size-16 shrink-0 items-center justify-center rounded-3xl md:size-20';
const defaultTitleClass = 'font-outfit text-3xl font-semibold text-slate-700 md:text-2xl';
const defaultContentClass = 'mt-4 font-outfit text-lg leading-relaxed text-slate-500 md:text-1xl';

export default function PreAMCProgramCard({
  cardClassName,
  iconContainerClassName,
  icon,
  iconSrc,
  title,
  titleClassName,
  content,
  contentClassName,
  titleMaxCh,
  contentMaxCh,
}: PreAMCProgramCardProps) {
  const showIconArea = icon != null || iconSrc != null;
  const rootClass = cardClassName != null ? `${defaultCardClass} ${cardClassName}`.trim() : defaultCardClass;
  const titleStyle = titleMaxCh != null ? { maxWidth: `${titleMaxCh}ch` } : undefined;
  const contentStyle = { maxWidth: `${contentMaxCh ?? DEFAULT_CONTENT_MAX_CH}ch` };

  return (
    <div className={rootClass}>
      {showIconArea && (
        <div
          className={
            iconContainerClassName != null
              ? `${defaultIconContainerClass} ${iconContainerClassName}`.trim()
              : defaultIconContainerClass
          }
        >
          {icon != null ? (
            icon
          ) : iconSrc != null ? (
            <div className="relative size-9">
              <Image
                src={iconSrc}
                alt=""
                fill
                className="object-contain"
                sizes="2.25rem"
              />
            </div>
          ) : null}
        </div>
      )}
      <h3 className={titleClassName ?? defaultTitleClass} style={titleStyle}>
        {title}
      </h3>
      <p className={contentClassName ?? defaultContentClass} style={contentStyle}>
        {content}
      </p>
    </div>
  );
}

/**
 * 文件用途：定义 Math 页面相关数据类型
 * 依赖关系：由 data/math.ts 提供数据，由 components/math/* 消费
 */

/** 英雄区特色亮点项（图标按顺序使用 public/math/hero/1.png–4.png） */
export interface MathHeroFeature {
  /** 文案，与设计稿一致 */
  label: string;
}

/** 英雄区数据 */
export interface MathHeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  /** 四个特色亮点 */
  features: MathHeroFeature[];
}

/** 教学理念单张卡片数据（左上角图标使用 public/math/Teaching_Features 下 1.svg–4.png） */
export interface MathTeachingPhilosophyCardData {
  number: number;
  /** 图标路径，如 /math/Teaching_Features/1.svg */
  iconSrc: string;
  iconBg: string;
  title: string;
  description: string;
  tags: string[];
  tagBg: string;
  tagText: string;
}

/** PRE-AMC 课程特色单条（卡片：图标区 + 标题 + 描述） */
export interface PreAMCFeature {
  /** 图标区背景 Tailwind 类，如 bg-green-400/10 */
  iconBg: string;
  /** 图标图片路径（可选；不传时由使用方传入 React 图标节点） */
  iconSrc?: string;
  /** 卡片整体背景 Tailwind 类（可选），如 bg-green-50、bg-blue-50，不传则用默认 bg-stone-50 */
  cardBg?: string;
  /** 标题颜色/样式 Tailwind 类（可选），如 text-green-800 */
  titleClassName?: string;
  /** 正文颜色/样式 Tailwind 类（可选），如 text-green-700 */
  contentClassName?: string;
  /** 标题每行约多少字（ch），不传则不限制；与 titleClassName 中的 max-w-[Nch] 二选一 */
  titleMaxCh?: number;
  /** 正文每行约多少字（ch），不传则不限制；与 contentClassName 中的 max-w-[Nch] 二选一 */
  contentMaxCh?: number;
  /** 卡片标题 */
  title: string;
  /** 卡片描述 */
  description: string;
}

/** Our Programs 课程区块数据（标题 + 四张卡；引用与 CTA 可选，仅 PRE-AMC 等需展示时提供） */
export interface PreAMCProgramData {
  /** 顶部标签文案，如 Our Programs */
  badgeLabel: string;
  /** 课程主标题 */
  title: string;
  /** 课程副标题 */
  subtitle: string;
  /** 四张特色卡片 */
  features: PreAMCFeature[];
  /** 课程理念引用正文（可选；不传则不渲染引用块） */
  quoteText?: string;
  /** 引用署名（可选；与 quoteText 同时使用） */
  quoteAttribution?: string;
  /** 观看介绍课链接（可选；不传则不渲染 CTA 区） */
  ctaWatchUrl?: string;
  /** 立即报名链接（可选；与 ctaWatchUrl 同时使用） */
  ctaRegisterUrl?: string;
}

/** 7 Steps Learning Method 单步数据 */
export interface SevenStepItem {
  /** 步骤图标（emoji），当 iconSrc 存在时仅作备用/无障碍 */
  icon: string;
  /** 步骤图标图片路径（可选），如 /math/amc/1.png；存在时优先展示图片 */
  iconSrc?: string;
  /** 步骤标题 */
  title: string;
  /** 步骤描述 */
  description: string;
}

/** 7 Steps Learning Method 区块数据 */
export interface SevenStepsMethodData {
  /** 区块主标题 */
  title: string;
  /** 副标题，如 AMC 8/10 Math program */
  subtitle: string;
  /** CTA 按钮文案 */
  ctaLabel: string;
  /** CTA 链接（可选） */
  ctaUrl?: string;
  /** 共 7 步，前 4 步左列、后 3 步右列 */
  steps: SevenStepItem[];
}

/** Unlock Potential / Book Free Trial 区块：保障项（左侧列表） */
export interface UnlockPotentialEnsureItem {
  /** 说明文案 */
  text: string;
}

/** Unlock Potential 区块：信任标签（如 Secure Information） */
export interface UnlockPotentialTrustItem {
  /** emoji 或图标文案，如 🔒、⚡ */
  icon: string;
  /** 标签文案 */
  label: string;
}

/** Unlock Potential 区块：卡片底部统计项 */
export interface UnlockPotentialStat {
  value: string;
  label: string;
}

/** Unlock Potential / Book Free Trial 区块数据（与 BookFreeTrialSection 结构一致） */
export interface UnlockPotentialData {
  /** 顶部徽标文案 */
  badgeText: string;
  /** 主标题 */
  title: string;
  /** 副标题 */
  subtitle: string;
  /** 保障列表标题，如 We ensure */
  ensureTitle: string;
  /** 保障列表项 */
  ensureItems: UnlockPotentialEnsureItem[];
  /** 信任标签：Secure / Fast Response / Risk-free */
  trustItems: UnlockPotentialTrustItem[];
  /** 右侧卡片标题 */
  cardTitle: string;
  /** 右侧卡片副标题 */
  cardSubtitle: string;
  /** 主按钮文案 */
  ctaLabel: string;
  /** 主按钮链接 */
  ctaUrl?: string;
  /** 卡片底部统计三项 */
  stats: UnlockPotentialStat[];
  /** 底部引用文案 */
  bottomQuote: string;
}

/** Class Time + WeChat 区块变体：第一处 PRE-AMC / 第二处 AMC 8/10 */
export type ClassTimeWeChatVariant = 'preamc' | 'amc';

/** Class Time + WeChat 区块单处数据（Schedule / Location 文案，支持多行） */
export interface ClassTimeWeChatItemData {
  /** Class Time 区块多行文案（每项一行） */
  scheduleLines: string[];
  /** Location 区块多行文案（每项一行） */
  locationLines: string[];
}

/** Class Time + WeChat 区块全局数据（两处共用二维码与说明，PRE-AMC / AMC 8/10 文案分开） */
export interface ClassTimeWeChatData {
  /** WeChat 二维码图片路径 */
  wechatQrSrc: string;
  /** 二维码下方说明，两行 */
  wechatCommunityLines: [string, string];
  /** PRE-AMC 区块文案 */
  preamc: ClassTimeWeChatItemData;
  /** AMC 8/10 区块文案 */
  amc: ClassTimeWeChatItemData;
}

/** Math 页面静态数据（按需扩展） */
export interface MathPageData {
  hero: MathHeroData;
  /** 教学理念区块四张卡片 */
  teachingPhilosophyCards: MathTeachingPhilosophyCardData[];
  /** PRE-AMC 课程区块（含引用与 CTA） */
  preAMCProgram: PreAMCProgramData;
  /** AMC 8/10 课程区块（布局同 PRE-AMC，仅标题 + 四卡） */
  amc810Program: PreAMCProgramData;
  /** 7 Steps Learning Method 区块 */
  sevenStepsMethod: SevenStepsMethodData;
  /** Class Time + WeChat 区块（双 CTA 上方两处），文案与二维码统一在此维护 */
  classTimeWeChat: ClassTimeWeChatData;
  /** Unlock Potential / Book Free Trial 区块 */
  unlockPotential: UnlockPotentialData;
}

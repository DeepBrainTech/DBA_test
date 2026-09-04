/**
 * 文件用途：Referral Program 页面使用的数据类型
 * 依赖关系：被 data/referral.ts 与 components/referral 下的展示组件使用
 * 注意事项：类型只描述页面内容，不耦合具体 UI，便于后续接入 API
 */

export interface ReferralHeroContent {
  /** Hero 主标题中保持深色的前半段 */
  titleLead: string;
  /** Hero 主标题中使用蓝色渐变的后半段 */
  titleAccent: string;
  /** Hero 副标题 */
  description: string;
}

export interface ReferralJourneyStep {
  /** 步骤序号 */
  number: number;
  /** 步骤标题 */
  title: string;
  /** 步骤说明 */
  description: string;
  /** 步骤圆点颜色 */
  accentColor: string;
}

export interface ReferralRewardValue {
  /** 可选的强调金额，例如 $50 或 $100 */
  amount?: string;
  /** 奖励正文 */
  text: string;
  /** 可选的补充说明 */
  note?: string;
}

export interface ReferralRewardRow {
  /** 奖励条件/权益名称 */
  benefit: string;
  /** 新家庭获得的权益 */
  newFamily: ReferralRewardValue;
  /** 推荐家庭获得的权益 */
  referringFamily: ReferralRewardValue;
}

export interface ReferralRewardsContent {
  /** 区块标签 */
  badge: string;
  /** 区块标题 */
  title: string;
  /** 奖励表格数据 */
  rows: ReferralRewardRow[];
  /** 奖励规则脚注 */
  notes: string[];
}

export interface ReferralAmbassadorContent {
  /** 区块标签 */
  badge: string;
  /** 区块标题 */
  title: string;
  /** 高亮文案前缀 */
  highlightLead: string;
  /** 高亮文案中的数字 */
  highlightAmount: string;
  /** 高亮文案后缀 */
  highlightTail: string;
  /** 说明段落 */
  description: string;
  /** 额外权益标题 */
  benefitsLead: string;
  /** 额外权益内容 */
  benefits: string;
}

export interface ReferralFaqItem {
  /** FAQ 问题 */
  question: string;
  /** FAQ 答案 */
  answer: string;
}

export interface ReferralFaqContent {
  /** 区块标签 */
  badge: string;
  /** 区块标题 */
  title: string;
  /** FAQ 列表 */
  items: ReferralFaqItem[];
}

export interface ReferralPageData {
  /** Hero 内容 */
  hero: ReferralHeroContent;
  /** Referral Journey 内容 */
  journey: {
    badge: string;
    title: string;
    steps: ReferralJourneyStep[];
  };
  /** Referral Rewards 内容 */
  rewards: ReferralRewardsContent;
  /** Academic Ambassador 内容 */
  ambassador: ReferralAmbassadorContent;
  /** FAQ 内容 */
  faq: ReferralFaqContent;
}

/**
 * 文件用途：Referral Program 页面文案与展示数据
 * 依赖关系：由 app/referral/page.tsx 读取后通过 props 传给页面组件
 * 注意事项：奖励金额、资格限制等业务文案集中维护，后续可替换为 API 数据
 */

import type { ReferralPageData } from '@/types/referral';

export const referralPageData: ReferralPageData = {
  hero: {
    titleLead: 'Invite. Assess.',
    titleAccent: 'Grow Together.',
    description:
      'Invite a family to experience our approach through an in-depth academic assessment. If they decide to join our community, both families receive exclusive benefits as they continue their academic journey together.',
  },
  journey: {
    badge: 'How It Works?',
    title: 'Your Referral Journey',
    steps: [
      {
        number: 1,
        title: 'Share',
        description: 'Share your personal referral code with a family or friend.',
        accentColor: '#9B8FD8',
      },
      {
        number: 2,
        title: 'Assess',
        description:
          'The new family uses your referral code to complete an in-depth academic assessment.',
        accentColor: '#6BB6FF',
      },
      {
        number: 3,
        title: 'Enroll',
        description:
          'When the new student enrolls and purchases an eligible course package, both families unlock additional benefits.',
        accentColor: '#F4A460',
      },
    ],
  },
  rewards: {
    badge: 'Why Join?',
    title: 'Referral Rewards',
    rows: [
      {
        benefit: 'Complete Assessment',
        newFamily: {
          text: 'Complimentary Assessment + Learning Pathway Report',
        },
        referringFamily: {
          text: 'Exclusive Calculation Training Workbook',
        },
      },
      {
        benefit: 'Enrolled in Eligible Course Package',
        newFamily: {
          amount: '$50',
          text: ' Welcome Tuition Credit',
        },
        referringFamily: {
          amount: '$100',
          text: ' Tuition Credit',
          note: '(May be exchanged for a $100 Amazon Gift Card within 60 days)',
        },
      },
      {
        benefit: 'Additional Benefit',
        newFamily: {
          text: 'One STEM / Logic Trial Class',
        },
        referringFamily: {
          text: 'Priority registration for select competition test centers or study pods',
        },
      },
    ],
    notes: [
      'Referral rewards are available for new families only.',
      'Siblings of current students are eligible for our Family Discount instead of Referral Rewards.',
    ],
  },
  ambassador: {
    badge: 'Top Referrer',
    title: 'Academic Ambassador',
    highlightLead: 'Refer',
    highlightAmount: '3+',
    highlightTail: ' New Students',
    description:
      'Families who successfully refer three or more new students may become an Academic Ambassador.',
    benefitsLead: 'Academic Ambassadors may receive:',
    benefits: '1-on-1 Long-Term Education Planning Session',
  },
  faq: {
    badge: 'FAQ',
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'When do I receive my $100 Tuition Credit?',
        answer:
          'The $100 Tuition Credit is issued after the referred student enrolls and purchases an eligible course package. A confirmation email will be sent to the email address on file once the enrollment is confirmed.',
      },
      {
        question: 'Can I exchange my Tuition Credit for something else?',
        answer:
          'Yes. You may exchange your $100 Tuition Credit for a $100 Amazon Gift Card within 60 days of issuance.',
      },
      {
        question: 'What happens after 60 days?',
        answer:
          'After 60 days, the reward can no longer be exchanged for an Amazon Gift Card. It will remain available as Tuition Credit and follow the standard expiration terms.',
      },
      {
        question: "Can I refer my child's sibling?",
        answer:
          'No. Siblings of current students are covered under our Family Discount and are not eligible for Referral Rewards.',
      },
      {
        question: 'Can I refer more than one family?',
        answer:
          'You are more than welcome. You may share your referral code with multiple families. Each qualifying new family can generate rewards according to the Referral Program terms. When you successfully refer 3+ families, you will become our Academic Ambassador, and more benefits will be unlocked!',
      },
    ],
  },
};

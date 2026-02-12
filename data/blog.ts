/**
 * 文件用途：博客详情页数据配置，供 /blog/[slug] 使用
 * 依赖关系：依赖 types/blog.ts 中的 BlogPost 类型
 * 注意事项：slug 与首页 newsArticles 的 url 路径一致；body 可后续替换为正式正文
 */

import type { BlogPost } from '@/types/blog';

/** 三篇博客文章（slug 用作路由简写） */
export const blogPosts: BlogPost[] = [
  {
    slug: 'value-of-learning-chess',
    tag: 'Learning Methods',
    tagColor: '#9B8FD8',
    title: 'The Value of Learning Chess Is More Than Just "Becoming Smarter"',
    excerpt:
      'Does playing chess actually make you smarter? Is learning Go or chess genuinely useful, or does it just sound...',
    date: '2025.11.30',
    dateDisplay: 'November 30th, 2025',
    time: '7 min',
    image: '/home/education/education_1.png',
    author: { name: 'Xi Lin', avatar: '/blog/author.jpg' },
    body: `Does playing chess actually make you smarter? Is learning Go or chess genuinely useful, or does it just sound impressive?

If we rely on intuition alone, this question is hard to answer. But when we look at findings from cognitive science and educational psychology, the picture becomes much clearer than most people expect.

Let's start with the conclusion first: chess is not a shortcut to intelligence, and it is not a magical add-on for the brain. However, it is a form of cognitive training whose benefits have been repeatedly supported by research.

When someone plays chess, the brain is not performing a single task. Every move simultaneously engages memory, reasoning, judgment, planning, and self-control. A player must keep track of the current position, anticipate possible responses, weigh trade-offs under limited time, and suppress impulsive or overly simple decisions. In psychology, these abilities are often grouped under the term core cognitive abilities, which are closely linked to intellectual development and learning capacity.

Among all board games, chess has been studied most extensively. In 2006, cognitive psychologists Fernand Gobet and Guillermo Campitelli published a comprehensive review in Psychological Science, analyzing a large body of research on chess education. They found that children who received long-term chess instruction tended to perform better on measures of fluid intelligence and complex problem-solving than their peers who did not receive chess training. Importantly, this advantage remained even after controlling for initial intelligence levels. This suggests that the effect is not simply due to smarter children choosing chess, but that chess learning itself contributes additional cognitive benefits.

If review studies can still be questioned as correlational, school-based experiments provide more direct evidence. Educational researcher Roberto Trinchero conducted a randomized controlled study in Italian elementary schools. One group of students received structured chess lessons for a fixed amount of time each week over an entire school year, while a control group did not. At the end of the year, students in the chess group showed significantly better performance in mathematical problem-solving and logical reasoning tasks. Notably, the improvement was especially pronounced among students who started at a lower academic level. This type of study matters because it points to causality: children did not improve because they were already more capable, but because chess training helped organize their thinking.

Research on Go, or Baduk, offers another interesting perspective. Go has an extremely large state space, and the consequences of a move are often not immediately visible. As a result, it places particularly high demands on long-term planning and global judgment. For this reason, researchers often use Go training to study executive functions. A study by Jung and colleagues, published in Frontiers in Psychology, found that children who received Go training showed significant improvements in executive function tasks, especially in inhibitory control and cognitive flexibility. These abilities are widely recognized as key factors in learning efficiency and self-regulation.

That said, it is important to be clear about the limits. Chess will not dramatically raise a child's IQ, nor is it an instant solution for learning difficulties. Earlier studies did suggest that the effects of chess training might remain largely domain-specific. However, more recent research indicates that during childhood and adolescence, sustained and guided chess learning can produce positive transfer to general cognitive abilities, especially when training goes beyond repetitive play.

In other words, the real value of chess lies not in winning or losing, but in analysis, reflection, and strategic explanation. When children are encouraged to explain why one move is better than another, or to review and understand their mistakes, the brain is practicing structured thinking. This process closely resembles the kind of reasoning used in mathematics, logic, and even writing.

From a practical standpoint, chess also has a less obvious but important advantage. Its sensory stimulation is low, but its cognitive demands are high. There are no rapid visual rewards or constant feedback loops, yet its effects accumulate over time. It does not rely on language or cultural background, and it requires minimal equipment. From a scientific perspective, it is not flashy, but it is remarkably clean.

If chess learning has a proper place, it is best understood as a long-term investment. It cannot guarantee the emergence of genius, but it quietly trains patience, logic, and self-control. These qualities may not produce immediate results, but over time, they tend to reveal their value both in learning and in life.`,
    references: [
      'Gobet, F., & Compitelli, G. (2006). Educational benefits of chess instruction: A critical review, Psychological Science.',
      'Trinchero, R. (2013). Can chess training improve mathematical problem-solving abilities? Educational Research Review.',
      'Jung, W. H., et al. (2014). The effect of Go (Baduk) training on executive functions. Frontiers in Psychology.'
    ]
  },
  {
    slug: 'programming-shapes-thinking',
    tag: 'Learning Methods',
    tagColor: '#9B8FD8',
    title: 'How Programming Education Shapes Thinking and Problem-Solving Skills',
    excerpt:
      'When programming is mentioned, many people still think of it mainly in career terms. Is learning to code only useful if a child...',
    date: '2025.12.15',
    dateDisplay: 'December 15th, 2025',
    time: '8 min',
    image: '/home/education/education_2.png',
    author: { name: 'Xi Lin', avatar: '/blog/author.jpg' },
    body: `When programming is mentioned, many people still think of it mainly in career terms. Is learning to code only useful if a child plans to become an engineer? If a student does not intend to pursue a technical path, does programming still matter? This way of thinking is understandable, but it overlooks the deeper value of programming in cognitive development.

When we shift the focus away from "job skills" and instead look at how the brain learns and thinks, programming begins to resemble a form of structured mental training that has been extensively studied in modern cognitive science, rather than a purely vocational skill.

To state the conclusion upfront: learning programming does not directly increase IQ scores, nor is it a shortcut to intelligence. However, research consistently shows that it can systematically train core cognitive abilities such as logical reasoning, problem decomposition, and executive control.

From a cognitive perspective, the essence of programming is not writing code, but translating a complex and often vague goal into clear, executable steps. To make a program work, learners must continuously clarify conditions, sequences, and cause–effect relationships. Any gap in logic or unfounded assumption is immediately reflected in the program's outcome. This highly explicit feedback makes programming an unusually "honest" thinking activity.

In psychological research, these abilities are closely associated with executive functions, working memory, and abstract reasoning. Executive functions refer to the ability to regulate attention, inhibit impulses, and organize actions toward a goal, and they are widely regarded as strong predictors of learning capacity and long-term academic performance.

A growing body of research suggests a stable relationship between programming education and the development of these abilities. In a widely cited review, Lye and Koh (2014) reported in Computers in Human Behavior that structured programming education supports the development of computational thinking, including problem decomposition, pattern recognition, and algorithmic reasoning. Importantly, these skills are not limited to computer science, but can transfer to mathematics and science learning.

Experimental studies with children and adolescents provide further support. In a study published in Computers & Education, Scherer and colleagues (2017) found that students who received programming instruction performed significantly better on tasks involving logical reasoning and problem solving than those in control groups. The researchers noted that these differences could not be explained solely by prior ability levels, but were closely related to the repeated practice of structured thinking inherent in programming activities.

Programming also influences how learners understand and respond to errors. Unlike traditional assignments, errors in a program are typically clear and traceable. Learners must revisit their reasoning, identify where the logic breaks down, and test alternative solutions. Educational psychology views this process as an important form of metacognitive training, helping individuals develop the ability to monitor and adjust their own thinking.

From a developmental perspective, programming places meaningful demands on sustained attention and delayed gratification. Programs are rarely completed in a single attempt, and results are not always immediate. Learners must remain goal-oriented through cycles of trial, revision, and refinement. This experience is believed to support the maturation of executive control.

It is also important to avoid a common misunderstanding: effective programming education is not defined by starting as early as possible or by increasing complexity too quickly. Research consistently emphasizes that successful programming learning depends on clear cognitive goals and developmentally appropriate task design. The focus should not be on memorizing syntax, but on understanding the underlying logical structures and decision-making processes.

From a practical standpoint, one of programming's most significant strengths lies in its high transferability. Regardless of whether a learner eventually works in a technical field, skills such as structured expression, problem decomposition, and systematic judgment recur across academic disciplines and everyday life. Programming simply provides a highly formalized environment with clear feedback for practicing these abilities.

If programming education is to be placed accurately, it is best understood as a form of modern "mental exercise." It does not guarantee any specific outcome, but over time it shapes how individuals approach complexity, uncertainty, and their own thinking processes. These effects are often subtle, yet they tend to persist.`,
    references: [
      'Lye, S. Y., & Koh, J. H. L. (2014). Review on teaching and learning of computational thinking through programming. Computers in Human Behavior.',
      'Scherer, R., Siddiq, F., & Sánchez Viveros, B. (2017). The cognitive benefits of learning computer programming. Computers & Education.'
    ]
  },
  {
    slug: 'go-gaokao-top-performers',
    tag: 'Industry Insights',
    tagColor: '#7EC97E',
    title: 'Beyond Test Scores: Why Go Keeps Appearing in the Background of Gaokao Top Performers',
    excerpt:
      'In China, academic success is often measured by performance in the Gaokao, the national college entrance...',
    date: '2025.12.25',
    dateDisplay: 'December 25th, 2025',
    time: '6 min',
    image: '/home/education/education_3.png',
    author: { name: 'Xi Lin', avatar: '/blog/author.jpg' },
    body: `In China, academic success is often measured by performance in the Gaokao, the national college entrance examination taken by nearly all students at the end of high school.

The Gaokao is a highly competitive, high-stakes exam that largely determines which universities students can attend, and in many cases, influences future educational and career opportunities. For students, it represents years of preparation under sustained pressure rather than a single test.

It is a pattern many teachers and parents quietly notice: among students who consistently achieve top scores in the Gaokao, it is not uncommon to find years of experience in the game of Go. This observation is often explained away as coincidence, talent, or family background. But research from psychology and education suggests a more grounded explanation. The skills cultivated through long-term Go training overlap in striking ways with the psychological demands of high-stakes academic performance.

Unlike many extracurricular activities, Go places children in repeated situations of uncertainty. Each game unfolds slowly, with incomplete information and irreversible decisions. Players must tolerate not knowing the outcome for hours while continuing to make rational choices. Studies in educational psychology have shown that such environments are particularly effective at training emotional regulation and delayed gratification, both of which are strongly correlated with academic persistence and exam performance.

One of the most visible traits of top exam performers is emotional stability under pressure. High-stakes exams are not only tests of knowledge but also tests of stress management. Research on competitive board games indicates that experienced Go players show lower impulsivity and more controlled emotional responses during challenging tasks. Neuropsychological studies have linked long-term Go practice with improved activity in brain regions associated with executive control and emotion regulation, especially in adolescents.

Go also trains a specific relationship with failure. Every Go player, no matter how skilled, loses frequently. Losses are concrete, personal, and difficult to rationalize away. Instead of offering instant rewards, Go demands post-game reflection, error analysis, and long-term adjustment. Educational studies have found that children who regularly engage in structured self-review develop stronger metacognitive skills, including the ability to evaluate their own strategies and adapt learning methods over time. These abilities closely resemble the study habits seen in high-achieving exam students.

Another less discussed factor is attentional endurance. A single game of Go can require sustained concentration for several hours, with penalties for even brief lapses in focus. Cognitive research has shown that long-duration attention tasks improve what psychologists call sustained attention capacity, a skill directly related to exam performance where concentration must be maintained across extended periods. This form of attention is different from short bursts of focus trained by fast-paced activities and is particularly relevant to written examinations.

Go also encourages a long-term perspective. Players learn early that short-term gains can lead to long-term disadvantages, and that restraint often outweighs aggression. Developmental psychology research suggests that children exposed to long-horizon decision-making environments develop stronger planning abilities and a greater tolerance for slow progress. These traits align closely with the multi-year preparation process required for success in the Gaokao.

Importantly, research does not suggest that Go directly causes academic excellence. Rather, it appears to cultivate a set of psychological and cognitive habits that make students better equipped to handle demanding academic systems. Emotional regulation, sustained attention, reflective learning, and long-term planning are not exam techniques, but they are the foundations upon which exam success is built.

Seen from this perspective, the presence of Go players among top Gaokao scorers is less mysterious. Go does not train students to answer exam questions faster. It trains them to remain calm when outcomes matter, to think clearly when mistakes are costly, and to continue working when rewards are distant. These qualities, quietly developed over years of play, happen to be exactly what high-stakes academic environments require.`,
    references: [
      'Jung, W. H., et al. (2014). The effect of Go (Baduk) training on executive functions. Frontiers in Psychology.',
      'Duckworth, A. L., et al. (2007). Grit: Perseverance and passion for long-term goals. Journal of Personality and Social Psychology.'
    ]
  }
];

/**
 * 根据 slug 获取单篇文章
 * @param slug 路由中的 slug
 * @returns 文章对象或 undefined
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** 所有 slug 列表，供 generateStaticParams 使用 */
export const blogSlugs = blogPosts.map((p) => p.slug);

/**
 * 获取当前文章的前一篇与下一篇 slug（按列表顺序）
 * @param slug 当前文章 slug
 * @returns prev 为上一篇 slug（第一篇无上一篇为 null），next 为下一篇 slug（最后一篇无下一篇为 null）
 */
export function getPrevNextSlugs(slug: string): { prev: string | null; next: string | null } {
  const idx = blogPosts.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? blogPosts[idx - 1].slug : null,
    next: idx < blogPosts.length - 1 ? blogPosts[idx + 1].slug : null
  };
}

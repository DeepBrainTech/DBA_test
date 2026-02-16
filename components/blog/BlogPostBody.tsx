/**
 * 文件用途：博客详情页正文区块（多段排版）
 * 依赖关系：无外部业务依赖
 * 注意事项：按双换行拆分为段落渲染；无 body 时由调用方不渲染本组件
 */

export interface BlogPostBodyProps {
  /** 正文内容（按 \n\n 拆段） */
  body: string;
}

export function BlogPostBody({ body }: BlogPostBodyProps) {
  return (
    <div className="prose prose-neutral max-w-none text-[#2C3E50] leading-relaxed mb-10">
      {body.split(/\n\n+/).map((para, i) => (
        <p key={i} className="mb-4">
          {para}
        </p>
      ))}
    </div>
  );
}

/**
 * 文件用途：博客详情页参考文献区块
 * 依赖关系：无外部业务依赖
 * 注意事项：由调用方在有 references 时渲染；空数组不展示
 */

export interface BlogPostReferencesProps {
  /** 参考文献列表 */
  references: string[];
}

export function BlogPostReferences({ references }: BlogPostReferencesProps) {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-semibold text-[#2C3E50] mb-3">References</h2>
      <ul className="list-none space-y-2 text-[#7C8B99] text-sm md:text-base leading-relaxed">
        {references.map((ref, i) => (
          <li key={i}>{ref}</li>
        ))}
      </ul>
    </section>
  );
}

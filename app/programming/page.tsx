/**
 * 文件用途：编程页面入口，负责组装编程相关组件
 * 依赖关系：依赖 ProgrammingPage 组件
 * 注意事项：页面只负责布局和组件组装，不包含业务逻辑
 * Navigation 和 Footer 已在根 layout.tsx 中统一管理，无需在此导入
 */

import ProgrammingPage from "@/components/programming/ProgrammingPage";

export default function Page() {
  return (
    <>
      <ProgrammingPage />
    </>
  );
}

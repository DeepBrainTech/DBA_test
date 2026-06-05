/**
 * 文件用途：根布局组件，统一管理所有页面的共享布局（Navigation 和 Footer）
 * 依赖关系：依赖 Navigation 和 Footer 组件
 * 注意事项：所有页面都会自动继承此布局，无需在各页面单独导入 Navigation 和 Footer
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** 导航和页脚统一使用 Outfit 字体；variable 供全站 font-outfit 工具类使用 */
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-outfit-family",
});

export const metadata: Metadata = {
  title: "DeepBrain Academy",
  description: "DeepBrain Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${outfit.className} antialiased`}
      >
        <Navigation className={outfit.className} />
        {children}
        <Footer className={outfit.className} />
      </body>
    </html>
  );
}

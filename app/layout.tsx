/**
 * 文件用途：根布局组件，统一管理所有页面的共享布局（Navigation 和 Footer）
 * 依赖关系：依赖 Navigation 和 Footer 组件
 * 注意事项：全站统一在 body 加载 Outfit；各页面无需重复 import 字体
 */

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

/** 全站唯一 Outfit 字体入口；variable 供 font-outfit 工具类使用 */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit-family",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deepbrainacademy.org"),
  title: {
    default: "DeepBrain Academy",
    template: "%s | DeepBrain Academy",
  },
  description:
    "We offer math thinking, chess, programming, and global education support for ages 6-18, helping children learn with joy and grow through challenges.",
  openGraph: {
    title: "DeepBrain Academy",
    description:
      "Math thinking, chess, programming, and global education support for ages 6-18.",
    url: "https://www.deepbrainacademy.org",
    siteName: "DeepBrain Academy",
    type: "website",
    images: [{ url: "/nav_footer/logo_with_text.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${outfit.className} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

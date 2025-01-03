import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer'
import ChatWidget from "../components/ChatWidget";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "可爱鲸科技 - 用智能体重塑企业未来 | AI Agents开发专家",
    template: "%s | 可爱鲸科技"
  },
  description: "可爱鲸科技专注于智能体(AI Agents)开发，融合大语言模型、RPA自动化、物联网技术，为企业提供智能化解决方案，助力数字化转型。",
  keywords: ["智能体", "AI Agents", "企业智能化", "RPA自动化", "智能客服", "数据分析"],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.coijing.com/',
    siteName: '可爱鲸科技',
    title: '可爱鲸科技 - 用智能体重塑企业未来',
    description: '专注智能体开发，助力企业智能化转型',
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}

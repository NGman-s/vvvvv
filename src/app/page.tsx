import React from 'react';
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, MousePointer2, Github } from "lucide-react";

const heroIllustrations = {
  left: {
    src: "/ScreenShot_2026-03-12_181602_111.png",
    alt: "VisionMark 左侧插画拼图",
  },
  right: {
    src: "/ScreenShot_2026-03-12_181613_256.png",
    alt: "VisionMark 右侧插画拼图",
  },
};

const problemCards = [
  {
    title: "长视频难快速看懂",
    desc: "视频越长、信息越密，用户越难快速判断这段内容是否值得继续看下去。",
    image: "/ScreenShot_2026-03-12_181621_452.png",
    alt: "红色矩形角色插画",
    imageClassName: "w-44",
  },
  {
    title: "重点与上下文分散",
    desc: "关键片段、知识点、热词和背景信息散落在整段视频里，想抓住重点往往需要反复回看。",
    image: "/ScreenShot_2026-03-12_181626_614.png",
    alt: "蓝色方形角色插画",
    imageClassName: "w-28",
  },
  {
    title: "低价值片段打断体验",
    desc: "广告、植入、片头片尾和重复铺垫会不断打断观看节奏，稀释真正有价值的内容。",
    image: "/ScreenShot_2026-03-12_181631_925.png",
    alt: "橙色三角角色插画",
    imageClassName: "w-32",
  },
];

export default function LandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-300">
      
      {/* 1. Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-18 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <span className="font-serif font-black text-2xl tracking-tighter">VisionMark</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm">
            <a href="#problem" className="hover:text-green-600 transition-colors">为什么需要</a>
            <a href="#solution" className="hover:text-green-600 transition-colors">它如何工作</a>
            <a href="#faq" className="hover:text-green-600 transition-colors">常见问题</a>
          </nav>
          <div className="flex items-center gap-6">
            <a href="#getstarted" className="bg-black text-white px-5 py-2.5 rounded-2xl text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              立即安装
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-white px-6 pt-20 pb-32">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="max-w-4xl mx-auto font-serif text-5xl leading-[1.05] tracking-tight font-black md:text-7xl lg:text-8xl">
            先理解视频，
            <br className="hidden md:block" />
            再更高效地观看
          </h1>
          <p className="mt-8 mx-auto max-w-3xl text-lg font-medium leading-8 text-slate-500 md:text-xl">
            VisionMark 通过 AI 总结、重点提炼、知识点、热词解释与片段跳过，
            把零散的观看辅助整合成一条更轻松、更高效的视频观看流程。
          </p>
          
          <div className="mt-10">
            <a href="#getstarted" className="bg-black text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-flex items-center gap-2">
              立即安装 <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>

        {/* Illustrations format */}
        <div className="pointer-events-none absolute -left-16 -top-2 z-0 hidden h-52 w-48 md:block lg:-left-20 lg:top-0 lg:h-72 lg:w-64">
          <Image
            src={heroIllustrations.left.src}
            alt={heroIllustrations.left.alt}
            fill
            priority
            className="object-contain object-left-top"
            sizes="(min-width: 1024px) 16rem, 12rem"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-[-3.75rem] z-0 hidden h-56 w-52 md:block lg:right-[-4.5rem] lg:h-80 lg:w-72">
          <Image
            src={heroIllustrations.right.src}
            alt={heroIllustrations.right.alt}
            fill
            priority
            className="object-contain object-right-bottom"
            sizes="(min-width: 1024px) 18rem, 13rem"
          />
        </div>
      </section>

      {/* 3. The Problem */}
      <section id="problem" className="bg-[#f1f0ee] px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 font-serif text-4xl font-black md:text-5xl">为什么你需要 VisionMark</h2>
            <p className="text-lg font-medium text-slate-500">当视频越来越长、信息越来越密集，单纯快进已经不够了。</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {problemCards.map((item, i) => (
              <div key={i} className="bg-white border-2 border-black rounded-3xl p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1">
                <div className="h-40 mb-6 flex items-center justify-center bg-slate-100 rounded-xl border-2 border-transparent">
                  <div className={`relative h-24 ${item.imageClassName}`}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-contain drop-shadow-md"
                      sizes="176px"
                    />
                  </div>
                </div>
                <div className="font-serif font-black text-3xl mb-4 border-b-2 border-black pb-4">{i + 1}.</div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Solution */}
      <section id="solution" className="py-24 px-6 bg-white border-y-2 border-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="mb-6 font-serif text-4xl font-black md:text-5xl">它如何工作</h2>
            <p className="mb-10 text-lg font-medium text-slate-500">
              VisionMark 先理解视频内容，再把分析结果转化成总结、提醒、定位和跳过等真实可用的观看辅助。
            </p>
            
            <Accordion defaultValue={["item-1"]} className="w-full">
              <AccordionItem value="item-1" className="border-b-2 border-black">
                <AccordionTrigger className="py-5 text-xl font-bold transition-colors hover:text-green-600">AI 先理解视频内容</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  插件会对视频进行内容分析，识别主题、片段结构与信息密度，为后续辅助能力建立统一的理解基础。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b-2 border-black">
                <AccordionTrigger className="py-5 text-xl font-bold transition-colors hover:text-green-600">输出结构化结果</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  在理解之后，VisionMark 会生成 AI 总结、视频分段、关键片段、知识点、热词和提醒建议，让内容从难以把握变成可定位、可提炼的信息。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b-2 border-black">
                <AccordionTrigger className="py-5 text-xl font-bold transition-colors hover:text-green-600">在观看过程中实时辅助</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  这些结果会直接变成侧边栏总结、时间轴定位、重点提醒、知识点提示和片段跳过，帮助你边看边理解、边看边筛选重点。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b-2 border-black border-b-0">
                <AccordionTrigger className="py-5 text-xl font-bold transition-colors hover:text-green-600">AI 分析与社区标注持续优化</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  用户标注与 AI 分析会互相补充，持续提升结果准确度，让 VisionMark 不只是一个工具，而是会不断成长的视频观看副驾驶。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="bg-slate-100 border-2 border-black rounded-[2rem] h-[500px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex items-center justify-center">
            <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-sm w-full z-10 mx-6 hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 border-2 border-black rounded-lg flex items-center justify-center text-white font-black text-sm">
                    L
                  </div>
                  <h4 className="font-black text-xl">Lovely projects</h4>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-slate-200 border-2 border-slate-300 rounded-full w-full"></div>
                <div className="h-4 bg-slate-200 border-2 border-slate-300 rounded-full w-3/4"></div>
                <div className="h-4 bg-slate-200 border-2 border-slate-300 rounded-full w-5/6"></div>
                <div className="h-10 bg-black border-2 border-black rounded-xl w-full mt-6"></div>
              </div>
            </div>
            
            <MousePointer2 className="absolute top-24 left-24 w-8 h-8 text-black fill-green-500 -rotate-12 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] animate-bounce" />
            <MousePointer2 className="absolute bottom-32 right-32 w-8 h-8 text-black fill-orange-500 rotate-12 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] animate-pulse" />
            <MousePointer2 className="absolute top-1/2 right-20 w-8 h-8 text-black fill-blue-500 rotate-45 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section id="faq" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="order-2 md:order-1 relative w-full aspect-square md:aspect-auto md:h-[600px]">
            <Image
              src="/ScreenShot_2026-03-12_181656_743.png"
              alt="VisionMark character grid collage"
              fill
              className="absolute inset-0 object-contain drop-shadow-xl"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="mb-4 font-serif text-4xl font-black md:text-5xl">常见问题</h2>
            <p className="mb-10 text-lg font-medium text-slate-500">关于 VisionMark、能力边界和产品方向，你最关心的内容都在这里。</p>
            
            <Accordion className="w-full">
              <AccordionItem value="faq-1" className="border-b-2 border-black">
                <AccordionTrigger className="py-5 text-left text-xl font-bold transition-colors hover:text-green-600">VisionMark 是什么？</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  VisionMark 是一个面向视频场景的综合 AI 浏览器插件。它会先理解视频内容，再把理解结果转化为总结、重点提醒、知识点提取、热词解释和片段跳过等辅助能力。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="border-b-2 border-black">
                <AccordionTrigger className="py-5 text-left text-xl font-bold transition-colors hover:text-green-600">它只是跳过工具吗？</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  不是。跳过只是 VisionMark 的一种结果形态。它的核心是视频理解，目标是帮助用户更快看懂内容、抓住重点，并更高效地完成整段观看。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="border-b-2 border-black">
                <AccordionTrigger className="py-5 text-left text-xl font-bold transition-colors hover:text-green-600">目前能提供哪些能力？</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  当前已明确验证的能力包括 AI 总结、视频分段、知识点提取、热词提取、重点提醒、片段跳过和社区标注。这些能力会围绕同一条观看流程协同工作，而不是彼此割裂的小功能。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="border-b-2 border-black border-b-0">
                <AccordionTrigger className="py-5 text-left text-xl font-bold transition-colors hover:text-green-600">社区标注有什么作用？</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  用户可以参与标注和共建，帮助系统识别哪些片段更重要、哪些内容更适合提醒或跳过。社区数据会和 AI 分析互相补充，让结果越来越准确。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* 6. Subscribe & Footer */}
      <footer className="bg-[#1a1a1a] text-white pt-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="mb-4 font-serif text-4xl font-black tracking-tight md:text-5xl">订阅产品更新</h2>
            <p className="max-w-md text-lg font-medium text-gray-400">第一时间获取 VisionMark 的产品进展、新能力发布和内测动态。</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="输入你的邮箱" 
              className="flex-1 bg-[#2a2a2a] border-2 border-black rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white focus:bg-[#333] transition-all"
            />
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all whitespace-nowrap">
              订阅更新
            </button>
          </div>
        </div>
        
        {/* Footer Bottom Bar */}
        <div className="bg-[#4ADE80] text-black border-t-2 border-black font-semibold">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8">
              <span className="font-serif font-black text-2xl tracking-tighter">VisionMark</span>
              <div className="hidden sm:flex gap-6 text-sm font-bold">
                <a href="#problem" className="hover:underline underline-offset-4">为什么需要</a>
                <a href="#solution" className="hover:underline underline-offset-4">它如何工作</a>
                <a href="#faq" className="hover:underline underline-offset-4">常见问题</a>
                <a href="#" className="hover:underline underline-offset-4">使用条款</a>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <span className="text-sm font-bold">© {currentYear} VisionMark</span>
              <div className="flex gap-4">
                <a href="#" className="hover:scale-110 transition-transform"><Github className="w-5 h-5 fill-current" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, MousePointer2, Github, Twitter, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-green-300">
      
      {/* 1. Header */}
      <header className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md border-b-2 border-transparent transition-all duration-300 w-full">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif font-black text-2xl tracking-tighter">Sparkles</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm">
            <a href="#problem" className="hover:text-green-600 transition-colors">Problem</a>
            <a href="#solution" className="hover:text-green-600 transition-colors">Solution</a>
            <a href="#faq" className="hover:text-green-600 transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-6">
            <a href="#signin" className="hidden md:block text-sm font-bold hover:text-green-600 transition-colors">Sign in</a>
            <a href="#getstarted" className="bg-black text-white px-5 py-2.5 rounded-2xl text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              Get started
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border-2 border-slate-200 bg-white px-4 py-1.5 rounded-full text-xs font-bold mb-8 shadow-sm">
            <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded text-[10px]">Y</span>
            Backed by Y Combinator
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-[1.05] tracking-tight max-w-4xl mx-auto">
            Make everyone on your team an engineer
          </h1>
          <p className="mt-8 text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Without breaking anything in prod.
          </p>
          
          <div className="mt-10">
            <a href="#getstarted" className="bg-black text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-flex items-center gap-2">
              Get started <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>

        {/* Illustrations format */}
        <div className="absolute top-24 left-10 md:left-[10%] w-32 h-32 hidden md:block animate-[bounce_3s_infinite]">
          <img src="/placeholder.png" alt="illustration-left" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-48 right-10 md:right-[10%] w-40 h-40 hidden md:block animate-[bounce_4s_infinite]">
          <img src="/placeholder.png" alt="illustration-right" className="w-full h-full object-contain" />
        </div>
      </section>

      {/* 3. The Problem */}
      <section id="problem" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">The problem</h2>
            <p className="text-lg text-slate-500 font-medium">Your business is moving faster than your engineering team can build.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { title: "Engineering bottleneck", desc: "Every time the business needs a change to the app, it creates a ticket and puts pressure on the dev team." },
              { title: "Context switching", desc: "Engineers spend hours building simple UI updates or tweaking configs instead of focusing on core architecture." },
              { title: "Risk of mistakes", desc: "Non-engineers trying to edit code outside their comfort zone often leads to broken builds and bugs in production." }
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-black rounded-3xl p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1">
                <div className="h-40 mb-6 flex items-center justify-center bg-slate-100 rounded-xl border-2 border-transparent">
                   {/* 预留给问题卡片的插图 */}
                   <img src="/placeholder.png" alt={`problem-${i+1}`} className="h-24 object-contain drop-shadow-md" />
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
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-6">The solution</h2>
            <p className="text-lg text-slate-500 font-medium mb-10">Sparkles gives your team a magical canvas to build and edit the app visually, safely, and collaboratively.</p>
            
            <Accordion defaultValue={["item-1"]} className="w-full">
              <AccordionItem value="item-1" className="border-b-2 border-black">
                <AccordionTrigger className="font-bold text-xl hover:text-green-600 transition-colors py-5">Connect your repository</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  Easily link your GitHub repository with one click. Sparkles automatically understands your code, design system, and components using advanced AI parsing. No complex setup or migration scripts needed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b-2 border-black">
                <AccordionTrigger className="font-bold text-xl hover:text-green-600 transition-colors py-5">Talk to Sparkles</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  Use natural language to tell Sparkles what you want to build or change. It instantly generates the corresponding React components.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b-2 border-black">
                <AccordionTrigger className="font-bold text-xl hover:text-green-600 transition-colors py-5">Make edits live</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  Visually tweak layouts, copy, and styles in a real-time preview environment without running a local server.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b-2 border-black border-b-0">
                <AccordionTrigger className="font-bold text-xl hover:text-green-600 transition-colors py-5">Push to GitHub</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  Once approved, changes are automatically pushed as clean, production-ready pull requests directly to your branch.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="bg-slate-100 border-2 border-black rounded-[2rem] h-[500px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex items-center justify-center">
            {/* Mock Code / UI Preview */}
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
            
            {/* Flying Cursors relative absolute */}
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
             {/* 预留给大型怪兽网格拼图的占位 */}
             <img src="/placeholder.png" alt="FAQ Monster Grid" className="absolute inset-0 w-full h-full object-contain drop-shadow-xl" />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">Frequently asked questions</h2>
            <p className="text-lg text-slate-500 font-medium mb-10">Everything you need to know about Sparkles.</p>
            
            <Accordion className="w-full">
              <AccordionItem value="faq-1" className="border-b-2 border-black">
                <AccordionTrigger className="font-bold text-xl hover:text-green-600 transition-colors py-5 text-left">What is Sparkles?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  Sparkles is an AI-powered UI editor that allows non-engineers to make visual changes to your application and generates clean React/Tailwind code directly to your codebase.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="border-b-2 border-black">
                <AccordionTrigger className="font-bold text-xl hover:text-green-600 transition-colors py-5 text-left">Do I need GitHub?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  Yes, currently we integrate exclusively with GitHub repositories to ensure a safe staging and PR review flow.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="border-b-2 border-black">
                <AccordionTrigger className="font-bold text-xl hover:text-green-600 transition-colors py-5 text-left">Is my data secure?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  We take security very seriously. We use OAuth with limited scopes, and we don't store your proprietary source code on our servers beyond what's needed for the active editing session.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="border-b-2 border-black border-b-0">
                <AccordionTrigger className="font-bold text-xl hover:text-green-600 transition-colors py-5 text-left">Can I use my own API keys?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base font-medium pb-6">
                  Yes, enterprise plans allow you to bring your own OpenAI or Anthropic API keys for billing optimization and data privacy.
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
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 tracking-tight">Subscribe to updates</h2>
            <p className="text-lg text-gray-400 font-medium max-w-md">Be the first to hear about new features, beta access, and product announcements.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-[#2a2a2a] border-2 border-black rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white focus:bg-[#333] transition-all"
            />
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
        
        {/* Footer Bottom Bar */}
        <div className="bg-[#4ADE80] text-black border-t-2 border-black font-semibold">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8">
              <span className="font-serif font-black text-2xl tracking-tighter">Sparkles</span>
              <div className="hidden sm:flex gap-6 text-sm font-bold">
                <a href="#problem" className="hover:underline underline-offset-4">Problem</a>
                <a href="#solution" className="hover:underline underline-offset-4">Solution</a>
                <a href="#faq" className="hover:underline underline-offset-4">FAQ</a>
                <a href="#" className="hover:underline underline-offset-4">Pricing</a>
                <a href="#" className="hover:underline underline-offset-4">Terms</a>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <span className="text-sm font-bold">© 2024 Sparkles, Inc.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:scale-110 transition-transform"><Twitter className="w-5 h-5 fill-current" /></a>
                <a href="#" className="hover:scale-110 transition-transform"><Github className="w-5 h-5 fill-current" /></a>
                <a href="#" className="hover:scale-110 transition-transform"><Linkedin className="w-5 h-5 fill-current" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

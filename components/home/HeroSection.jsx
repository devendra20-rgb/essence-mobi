"use client";
import React from 'react';
import { Sparkles, ArrowRight, TrendingUp, Zap, Globe, MousePointer2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full flex items-center overflow-hidden bg-[#fcfdff] pt-20 lg:pt-28 pb-10 lg:pb-16">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[0%] w-[500px] h-[500px] bg-purple-300/15 rounded-full blur-[100px] animate-pulse"></div>
        
        {/* Dot Mesh - Sized for better density */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1.2px, transparent 1.2px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-blue-100 text-blue-600 text-xs font-bold mb-6 animate-bounce-subtle">
              <Sparkles className="w-4 h-4 text-blue-500" />
              NEXT-GENERATION AD-TECH
            </div>

            <h1 className="text-5xl lg:text-[5.2rem] font-black text-slate-900 leading-[1.05] mb-6 tracking-tighter">
              Scale Your <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Profits
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-100/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                </svg>
              </span>
              <br /> Effortlessly.
            </h1>

            <p className="text-lg lg:text-xl text-slate-500 mb-8 leading-relaxed max-w-xl font-medium">
              Stop guessing, start growing. Use Essence Mobi's AI-driven 
              infrastructure to find high-converting traffic and 
              <span className="text-slate-900 font-bold"> skyrocket your ROI</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-7 rounded-2xl text-lg font-bold shadow-[0_15px_30px_-10px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services/">
                <Button size="lg" variant="ghost" className="px-8 py-7 rounded-2xl text-lg font-bold text-slate-600 hover:bg-slate-100">
                  How it Works
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative group lg:mt-0 mt-12">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[3rem] blur-2xl"></div>

            <div className="relative bg-white border border-slate-200/60 p-3 lg:p-4 rounded-[2.5rem] shadow-2xl backdrop-blur-sm">
              <div className="bg-slate-50/50 rounded-[2rem] p-6 lg:p-8 border border-white/40">
                
                <div className="flex items-center justify-between mb-8">
                   <div className="flex gap-1.5">
                     {[1,2,3].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>)}
                   </div>
                   <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div> LIVE STATS
                   </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between overflow-hidden relative group/card">
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Total Payout</p>
                        <p className="text-2xl lg:text-3xl font-black text-slate-900">$18,245.00</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                       <Zap className="text-orange-500 mb-2" size={18} />
                       <p className="text-xl font-black text-slate-900">98%</p>
                       <p className="text-[9px] font-bold text-slate-400 uppercase">Approval Rate</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm translate-y-3">
                       <Globe className="text-indigo-500 mb-2" size={18} />
                       <p className="text-xl font-black text-slate-900">60+</p>
                       <p className="text-[9px] font-bold text-slate-400 uppercase">Global Geos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-4 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-subtle z-20 hidden sm:flex">
               <div className="w-7 h-7 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                  <MousePointer2 size={16} />
               </div>
               <p className="text-[11px] font-bold text-slate-700">New conversion!</p>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
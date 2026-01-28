"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Rocket,
  Heart,
  Award,
  Zap,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Globe2,
  DollarSign,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#fcfdff]">
      {/* --- PREMIUM LIGHT HERO SECTION (Service Style) --- */}
      <section className="relative w-full overflow-hidden bg-[#fcfdff] pt-32 lg:pt-44 pb-12 lg:pb-16">
        {/* --- DYNAMIC BACKGROUND --- */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-5%] right-[0%] w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-[100px] animate-pulse"></div>

          {/* Grid Overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(#cbd5e1 1.2px, transparent 1.2px)",
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        <div className="container relative z-10 mx-auto px-5 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6 lg:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] lg:text-[11px] font-black tracking-widest uppercase shadow-sm">
              <Sparkles size={14} className="text-blue-600" />
              OUR LEGACY & FUTURE
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="max-w-5xl mx-auto mb-8 lg:mb-10">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-slate-900 tracking-tighter leading-[0.9] mb-6 lg:mb-8"
            >
              EMPOWERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600">
                DIGITAL GROWTH.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              More than just a network, we are a global{" "}
              <span className="text-slate-900 font-bold border-b-4 border-blue-400/30 text-nowrap">
                ecosystem
              </span>{" "}
              designed to bridge the gap between elite advertisers and
              high-performance publishers.
            </motion.p>
          </div>

          {/* Feature Badges - Margin mt-16 se mt-10 kar di hai */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-10"
          >
            {[
              { icon: ShieldCheck, text: "Proven Results", color: "blue" },
              { icon: Globe2, text: "Global Inventory", color: "indigo" },
              { icon: Zap, text: "Velocity Payments", color: "purple" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 lg:p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-${item.color}-50 flex items-center justify-center text-${item.color}-600`}
                >
                  <item.icon size={20} />
                </div>
                <span className="text-slate-900 font-bold text-sm uppercase tracking-wide">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- MISSION & VISION SECTION (Light Theme Optimized) --- */}
      <section className="py-24 relative bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
                  className="w-full h-[500px] object-cover"
                  alt="Team Collaboration"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-4xl font-black mb-1 text-white">100%</p>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-90">
                    Transparency Committed
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-[3rem] -z-10 hidden lg:block"></div>
            </div>

            <div className="lg:w-1/2 space-y-10">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  Redefining the <br />
                  <span className="text-blue-600">Performance Standards</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium italic">
                  "Founded on the principle of Quality over Quantity, we solve
                  the transparency issues plaguing the affiliate industry."
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Target,
                      title: "Our Mission",
                      desc: "To build the most secure environment for performance brands.",
                      color: "blue",
                    },
                    {
                      icon: Lightbulb,
                      title: "Our Vision",
                      desc: "To be the default platform for AI-optimized intelligence.",
                      color: "indigo",
                    },
                  ].map((box, i) => (
                    <div
                      key={i}
                      className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group"
                    >
                      <div
                        className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm text-${box.color}-600 group-hover:bg-${box.color}-600 group-hover:text-white transition-all`}
                      >
                        <box.icon size={24} />
                      </div>
                      <h4 className="font-black text-slate-900 mb-2">
                        {box.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        {box.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE PILLARS (Themed Dark Section for contrast, like Advertisers section in Service) --- */}
      <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 lg:mx-10 my-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 skew-x-12 translate-x-32"></div>
        <div className="container px-4 lg:px-16 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6 text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter">
                The Pillars of <br /> our success
              </h2>
              <p className="text-slate-400 text-lg font-medium">
                We don't just follow rules; we set the benchmark for the entire
                industry.
              </p>
            </div>
            {/* <div className="flex items-center gap-4 text-blue-400 font-bold group cursor-pointer">
              VIEW OUR PROCESS <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </div> */}
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-slate-800 rounded-[2rem] overflow-hidden">
            {[
              {
                icon: Shield,
                title: "Ironclad Security",
                desc: "Proprietary fraud detection that saves millions yearly.",
              },
              {
                icon: Zap,
                title: "Velocity Payments",
                desc: "The fastest payment cycles in the industry. Cash flow priority.",
              },
              {
                icon: Globe,
                title: "Global Inventory",
                desc: "Direct access to exclusive offers in 140+ countries.",
              },
              {
                icon: TrendingUp,
                title: "Smart Analytics",
                desc: "Real-time data visualization that lets you optimize instantly.",
              },
              {
                icon: Users,
                title: "Elite Support",
                desc: "Dedicated account managers who are experts in your niche.",
              },
              {
                icon: Award,
                title: "Proven Results",
                desc: "A track record of growing publishers into industry giants.",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-10 bg-slate-900 hover:bg-slate-800/50 transition-all border border-slate-800 group"
              >
                <pillar.icon className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TIMELINE & IMPACT --- */}
      {/* <section className="py-24 bg-white text-center">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-black mb-20 text-slate-900 tracking-tight">OUR EVOLUTION</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {[
              { year: '2020', label: 'The Spark', desc: 'Founded with a big idea.' },
              { year: '2021', label: 'Scaling Up', desc: 'Broke $5M payout milestone.' },
              { year: '2022', label: 'Tech Pivot', desc: 'Deployed AI Smart-Link tech.' },
              { year: '2023', label: 'Global Reach', desc: 'Hubs in 3 continents.' },
              { year: '2024', label: 'Frontier', desc: 'Redefining standards.' },
            ].map((step, i) => (
              <div key={i} className="relative group text-left">
                <div className="text-6xl font-black text-slate-50 group-hover:text-blue-50 transition-colors">{step.year}</div>
                <div className="absolute top-10 left-0 w-10 h-1 bg-blue-600"></div>
                <h4 className="font-black text-slate-900 mt-8 mb-2 uppercase text-sm">{step.label}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-bold">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* --- STATS SECTION (Clean & High Contrast) --- */}
      <section className="py-14">
        <div className="container px-4 mx-auto">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center relative z-10">
              <div>
                <p className="text-4xl lg:text-5xl font-black mb-1">60+</p>
                <p className="text-blue-100 font-bold tracking-widest text-[10px] uppercase">
                  Countries Active
                </p>
              </div>

              <div>
                <p className="text-4xl lg:text-5xl font-black mb-1">3K+</p>
                <p className="text-blue-100 font-bold tracking-widest text-[10px] uppercase">
                  Elite Campaigns
                </p>
              </div>

              <div>
                <p className="text-4xl lg:text-5xl font-black mb-1">24/7</p>
                <p className="text-blue-100 font-bold tracking-widest text-[10px] uppercase">
                  Tech Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

// Hum data ko bahar nikal rahe hain takki home page pe use kar sakein
export const servicesData = [
  {
    title: "App Revenue Acceleration",
    desc: "Grow your app with high-quality installs, better retention, and higher revenue optimization.",
    icon: "📱",
    color: "from-blue-600 to-blue-400",
    shadow: "shadow-blue-200/50",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070",
  },
  {
    title: "Conversion-Led Media Buying",
    desc: "Performance campaigns that are measurable and scalable with programmatic reach.",
    icon: "🌐",
    color: "from-indigo-600 to-indigo-400",
    shadow: "shadow-indigo-200/50",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyn7v4UbfW5xpfws0MIM2BUE8cI4DXN_Ydpg&s",
  },
  {
    title: "Brand Storytelling",
    desc: "Build brand awareness and drive results on social with influencer and content strategy.",
    icon: "📣",
    color: "from-purple-600 to-purple-400",
    shadow: "shadow-purple-200/50",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2074",
  },
  {
    title: "Lead Generation",
    desc: "Generate qualified leads that convert. We focus on lead quality and validation.",
    icon: "📈",
    color: "from-blue-700 to-indigo-500",
    shadow: "shadow-blue-300/50",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2026",
  },
  {
    title: "Performance Delivery",
    desc: "End-to-end campaign management from setup to daily optimization for scaling faster.",
    icon: "⚙️",
    color: "from-purple-700 to-pink-500",
    shadow: "shadow-purple-300/50",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
              Explore Our <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              Tailored growth strategies for modern digital brands.
            </p>
          </div>
          <Link href="/services" className="group flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors">
            View All Services <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Scroll Container */}
        <div className="flex overflow-x-auto pb-10 gap-6 no-scrollbar snap-x snap-mandatory -mx-5 px-5">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="min-w-[300px] md:min-w-[400px] snap-start"
            >
              <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 h-full flex flex-col group shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500">
                {/* Image Section */}
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-xl shadow-lg`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 font-medium mb-6 line-clamp-3">
                    {service.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <Link href="/services">
                      <button className={`flex items-center gap-2 font-black uppercase tracking-wider text-sm transition-all hover:gap-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        Read Full Strategy <ChevronRight size={18} className="text-slate-900" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
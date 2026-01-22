"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Light Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://picsum.photos/id/1018/1920/1080')", 
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/95 to-white/90"></div>

      <div className="container relative z-10 text-center mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <h2 className="text-[3rem] lg:text-[4.2rem] font-black tracking-[-0.04em] leading-[1.1] text-slate-900">
            GET AFFILIATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              WITH ESSENCE MOBI
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Join our premium affiliate network today. Get instant access to
            <span className="text-slate-900 font-bold"> high-converting offers</span>, 
            real-time analytics, and expert support.
          </p>

          {/* CTA Button Link */}
          <div className="mt-12">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-5 rounded-full text-lg font-bold shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 group"
            >
              GET STARTED
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Note */}
          <p className="text-xs font-semibold text-gray-400 mt-8 uppercase tracking-widest">
            No credit card required • Instant approval
          </p>
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-5 pointer-events-none"></div>
    </section>
  );
}
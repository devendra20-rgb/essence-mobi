"use client";

import React from "react";
import { ChevronRight, FileText } from "lucide-react";

export default function TermsOfUsePage() {
  return (
    <div className="bg-[#fcfdff] overflow-hidden min-h-screen">
      {/* Same background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[700px] h-[700px] bg-indigo-300/10 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <section className="relative pt-32 pb-20">
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600/5 border border-indigo-200 text-indigo-700 text-sm font-black tracking-wider uppercase mb-8 shadow-sm">
              <FileText size={16} className="animate-pulse" />
              Our Agreement
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-10">
              Terms of Use
            </h1>

            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Last updated: January 22, 2026
            </p>

            <div className="space-y-12 text-slate-700 text-lg leading-relaxed">
              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using essencemobi.com, our affiliate platform, smart-link tech, offers, or any services ("Services"), you agree to these Terms of Use ("Terms"). If you do not agree, do not use our Services.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">2. Eligibility & Accounts</h2>
                <p>You must be 18+ and provide accurate information. We reserve right to suspend/terminate accounts for fraud, policy violation, or illegal activity.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">3. Affiliate & Advertiser Obligations</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <ChevronRight className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
                    <span>Publishers: Promote offers compliantly (no spam, no fraud, follow ad network rules).</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <ChevronRight className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
                    <span>Advertisers: Provide valid offers, timely payments, accurate tracking.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <ChevronRight className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
                    <span>Prohibited: Fake traffic, cookie stuffing, brand bidding, incentivized traffic without approval.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">4. Commissions & Payments</h2>
                <p>Commissions based on verified conversions. Payouts weekly/bi-monthly after threshold. We deduct fees/taxes as applicable. Disputes must be raised within 30 days.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">5. Intellectual Property & Licenses</h2>
                <p>All content, tracking tech, offers are our property. Limited license granted for promotion only. No reverse engineering.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">6. Termination & Limitation of Liability</h2>
                <p>We may terminate anytime. Liability limited to direct damages, no consequential losses. Services provided "as is".</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">7. Governing Law & Disputes</h2>
                <p>Governed by laws of United Arab Emirates (Dubai jurisdiction). Disputes resolved via arbitration in Dubai or courts there.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">8. Changes & Contact</h2>
                <p>Terms may update – continued use = acceptance. Questions: hello@essencemobi.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
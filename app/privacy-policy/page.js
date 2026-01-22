"use client";

import React from "react";
import { ChevronRight, ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#fcfdff] overflow-hidden min-h-screen">
      {/* Background effects - same as Services */}
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
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600/5 border border-blue-200 text-blue-700 text-sm font-black tracking-wider uppercase mb-8 shadow-sm">
              <ShieldCheck size={16} className="animate-pulse" />
              Your Privacy Matters
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-10">
              Privacy Policy
            </h1>

            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Last updated: January 22, 2026
            </p>

            <div className="space-y-12 text-slate-700 text-lg leading-relaxed">
              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">1. Introduction</h2>
                <p>
                  Essence Mobi ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (essencemobi.com), use our services, or interact with us as publishers/advertisers in our affiliate ecosystem.
                </p>
                <p className="mt-4">
                  We operate in compliance with applicable laws including India's Digital Personal Data Protection Act (DPDP Act), UAE Federal Decree-Law No. 45/2021 on Personal Data Protection, and other relevant regulations.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">2. Information We Collect</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Personal Information:</strong> Name, email, phone, company details when you register, contact us, or join as publisher/advertiser.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Payment & Financial Data:</strong> Bank details, payout preferences (handled securely via third-party processors).</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Technical Data:</strong> IP address, browser type, device info, traffic source, cookies & tracking pixels for analytics & fraud prevention.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Usage Data:</strong> Campaigns viewed, clicks, conversions (anonymized where possible).</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">3. How We Use Your Information</h2>
                <p>To provide and improve our affiliate services, process payouts, prevent fraud (via Essence-Shield™), send updates/offers, comply with legal obligations, and optimize campaigns.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">4. Sharing & Disclosure</h2>
                <p>We share data with:</p>
                <ul className="space-y-3 mt-4">
                  <li>• Payment processors & banks</li>
                  <li>• Analytics & ad tech partners (Google, Meta, etc.) – anonymized</li>
                  <li>• Legal authorities when required</li>
                </ul>
                <p className="mt-4">We do not sell your personal data.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">5. Data Security</h2>
                <p>We implement industry-standard security (encryption, access controls, regular audits) and our proprietary Essence-Shield™ AI monitors for fraud in real-time.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">6. Your Rights</h2>
                <p>You have rights to access, correct, delete your data, withdraw consent, etc. Contact us at hello@essencemobi.com.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6">7. Changes & Contact</h2>
                <p>We may update this policy. Check back regularly. For questions: hello@essencemobi.com or our Dubai office.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
"use client";

import React from "react";
import { ChevronRight, ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative w-full overflow-x-hidden bg-slate-50">
      {/* BACKGROUND (SAME LOGIC AS CONTACT) */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/5 border border-blue-200 text-blue-700 text-xs font-black tracking-wider uppercase mb-6">
              <ShieldCheck size={14} />
              Your Privacy Matters
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              Privacy Policy
            </h1>

            <p className="text-slate-600 text-lg">
              Last updated: January 22, 2026
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl space-y-10">
            {/* SECTION CARD */}
            <PolicyCard title="1. Introduction">
              <p>
                Essence Mobi ("we", "us", "our") respects your privacy and is
                committed to protecting your personal data. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our website and services.
              </p>
              <p className="mt-4">
                We operate in compliance with applicable laws including India’s
                DPDP Act and UAE Federal Decree-Law No. 45/2021.
              </p>
            </PolicyCard>

            <PolicyCard title="2. Information We Collect">
              <ul className="space-y-4">
                {[
                  "Personal Information: Name, email, phone, company details.",
                  "Payment & Financial Data: Bank details and payout preferences.",
                  "Technical Data: IP address, browser, device info, cookies.",
                  "Usage Data: Campaign views, clicks, and conversions.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <ChevronRight className="text-blue-600 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </PolicyCard>

            <PolicyCard title="3. How We Use Your Information">
              <p>
                To provide and improve our services, process payouts, prevent
                fraud via Essence-Shield™, communicate updates, and comply with
                legal obligations.
              </p>
            </PolicyCard>

            <PolicyCard title="4. Sharing & Disclosure">
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment processors & banks</li>
                <li>Analytics & ad tech partners (anonymized)</li>
                <li>Legal authorities when required</li>
              </ul>
              <p className="mt-4 font-semibold">
                We do not sell your personal data.
              </p>
            </PolicyCard>

            <PolicyCard title="5. Data Security">
              <p>
                We implement encryption, access controls, regular audits, and
                real-time fraud monitoring to protect your data.
              </p>
            </PolicyCard>

            <PolicyCard title="6. Your Rights">
              <p>
                You may access, correct, delete your data, or withdraw consent
                at any time. Contact us at{" "}
                <span className="font-semibold text-slate-900">
                  partner@essencemobi.com
                </span>
                .
              </p>
            </PolicyCard>

            <PolicyCard title="7. Changes & Contact">
              <p>
                We may update this policy periodically. Please review it
                regularly. For questions, contact us at hello@essencemobi.com or
                our Dubai office.
              </p>
            </PolicyCard>
          </div>
        </div>
      </section>
    </div>
  );
}

/* REUSABLE CARD */
function PolicyCard({ title, children }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-xl">
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
        {title}
      </h2>
      <div className="text-slate-700 text-base md:text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
}

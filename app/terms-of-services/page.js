"use client";

import React from "react";
import { ChevronRight, FileText } from "lucide-react";

export default function TermsOfUsePage() {
  return (
    <div className="relative w-full overflow-x-hidden bg-slate-50">
      {/* BACKGROUND – SAME SYSTEM AS CONTACT / PRIVACY */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-[120px]" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600/5 border border-indigo-200 text-indigo-700 text-xs font-black tracking-wider uppercase mb-6">
              <FileText size={14} />
              Our Agreement
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              Terms of Use
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
            <TermsCard title="1. Acceptance of Terms">
              <p>
                By accessing or using essencemobi.com, our affiliate platform,
                smart-link technology, or related services ("Services"), you
                agree to these Terms of Use. If you do not agree, you must not
                use our Services.
              </p>
            </TermsCard>

            <TermsCard title="2. Eligibility & Accounts">
              <p>
                You must be at least 18 years old and provide accurate
                information. We reserve the right to suspend or terminate
                accounts involved in fraud, violations, or illegal activity.
              </p>
            </TermsCard>

            <TermsCard title="3. Affiliate & Advertiser Obligations">
              <ul className="space-y-4">
                {[
                  "Publishers must promote offers compliantly (no spam, no fraud, follow ad network rules).",
                  "Advertisers must provide valid offers, accurate tracking, and timely payments.",
                  "Prohibited activities include fake traffic, cookie stuffing, brand bidding, or unauthorized incentivized traffic.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <ChevronRight className="text-indigo-600 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TermsCard>

            <TermsCard title="4. Commissions & Payments">
              <p>
                Commissions are based on verified conversions. Payouts are made
                weekly or bi-monthly after reaching the minimum threshold.
                Disputes must be raised within 30 days.
              </p>
            </TermsCard>

            <TermsCard title="5. Intellectual Property">
              <p>
                All content, tracking technology, and materials are owned by
                Essence Mobi. A limited license is granted for promotion only.
                Reverse engineering or misuse is strictly prohibited.
              </p>
            </TermsCard>

            <TermsCard title="6. Termination & Liability">
              <p>
                We may terminate access at any time. Services are provided
                “as-is” and liability is limited to direct damages only.
              </p>
            </TermsCard>

            <TermsCard title="7. Governing Law">
              <p>
                These Terms are governed by the laws of the United Arab
                Emirates. Any disputes shall be resolved under Dubai
                jurisdiction.
              </p>
            </TermsCard>

            <TermsCard title="8. Changes & Contact">
              <p>
                Terms may be updated periodically. Continued use implies
                acceptance. For questions, contact{" "}
                <span className="font-semibold text-slate-900">
                  partner@essencemobi.com
                </span>
                .
              </p>
            </TermsCard>
          </div>
        </div>
      </section>
    </div>
  );
}

/* REUSABLE CARD */
function TermsCard({ title, children }) {
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

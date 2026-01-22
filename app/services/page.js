"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import {
  Target, Shield, Zap, Globe, BarChart, Headphones, Smartphone,
  ShieldAlert, CheckCircle2, Users, TrendingUp, DollarSign,
  MousePointer2, BrainCircuit, Megaphone, Settings2, ChevronRight,
  ArrowRight, X, User, Mail, MessageSquare, Phone
} from "lucide-react";

export default function ServicesPage() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  const coreServices = [
    {
      title: "App Growth & Monetization",
      desc: "Scale installs, engagement, and revenue with our data-driven mobile strategies. We ensure that your app doesn't just get downloads, but consistently generates active users and revenue.",
      features: [
        "User Acquisition via paid + organic channels",
        "LTV Optimization with predictive analytics",
        "In-App Monetization (IAP, subscriptions, ads hybrid)",
        "Retention & re-engagement strategies",
        "A/B testing for pricing & offers",
        "Churn reduction using behavioral data",
      ],
      icon: BrainCircuit,
      color: "blue",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070",
      align: "left",
    },
    {
      title: "Performance & Programmatic Advertising",
      desc: "Strategic media execution, fully managed. Our programmatic technology purchases the best inventory in real-time to ensure you receive maximum ROI for every dollar spent.",
      features: [
        "Real-time Bidding (RTB) & auction management",
        "Audience Targeting (1st-party + lookalike)",
        "Media Buying across display, video, CTV, DOOH",
        "Dynamic Creative Optimization (DCO)",
        "Cross-device & frequency capping",
        "Fraud detection & brand safety controls",
      ],
      icon: Globe,
      color: "indigo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyn7v4UbfW5xpfws0MIM2BUE8cI4DXN_Ydpg&s",
      align: "right",
    },
    {
      title: "Branding, Social & Influencer Marketing",
      desc: "Unified storytelling across channels. We project your brand's voice through social media and influencers to reach the right audience effectively.",
      features: [
        "Social Strategy & content calendar planning",
        "Influencer Outreach & partnership management",
        "Brand Identity development & guidelines",
        "UGC creation & amplification campaigns",
        "Community building on TikTok, IG, YouTube",
        "Performance tracking (engagement + sentiment)",
      ],
      icon: Megaphone,
      color: "purple",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2074",
      align: "left",
    },
    {
      title: "Lead Generation & Revenue Growth",
      desc: "From clicks to sales-ready leads. We don't just send traffic; we deliver potential customers who are ready to convert.",
      features: [
        "CPL Optimization across channels",
        "Funnel Building (TOFU → BOFU)",
        "Conversion Tracking & attribution modeling",
        "High-intent keyword & audience targeting",
        "Landing page A/B testing & personalization",
        "Revenue attribution dashboards",
      ],
      icon: TrendingUp,
      color: "blue",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2026",
      align: "right",
    },
    {
      title: "End to End Ad Operations",
      desc: "Operational excellence for every campaign. Our team handles your ad accounts, tracking, and optimization so you can focus entirely on your business.",
      features: [
        "Campaign Management & trafficking",
        "Technical Audit & pixel implementation",
        "ROI Reporting & custom dashboards",
        "Ad server & DSP/SSP integration",
        "Real-time issue resolution & QA",
        "Compliance & fraud monitoring",
      ],
      icon: Settings2,
      color: "purple",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070",
      align: "left",
    },
  ];

  return (
    <div className="bg-[#fcfdff] overflow-hidden">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full overflow-hidden bg-[#fcfdff] pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-5%] right-[0%] w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#cbd5e1 1.2px, transparent 1.2px)", backgroundSize: "32px 32px" }}></div>
        </div>

        <div className="container relative z-10 mx-auto px-5">
          <div className="flex justify-center mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] lg:text-[11px] font-black tracking-widest uppercase shadow-sm">
              <DollarSign size={14} className="text-blue-600" />
              Revenue-First Affiliate Ecosystem
            </div>
          </div>

          <div className="text-center max-w-5xl mx-auto mb-12 lg:mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-[5.2rem] font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
              Turn Your Traffic Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600">
                High-Yield Revenue.
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              Essence Mobi provides affiliates and advertisers with the{" "}
              <span className="text-slate-900 font-bold border-b-4 border-blue-400/30">exclusive offers</span>{" "}
              and <span className="text-slate-900 font-bold border-b-4 border-indigo-400/30">smart tracking</span> needed to scale global campaigns.
            </p>
          </div>

          <div className="flex items-center justify-center mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 rounded-2xl text-lg font-black shadow-xl transition-all hover:scale-105 flex items-center gap-3">
                Become a Publisher <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. THE 5 CORE SERVICES --- */}
      <section className="py-20 lg:py-24">
        <div className="container px-4 mx-auto">
          <div className="space-y-20 lg:space-y-28">
            {coreServices.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${service.align === "right" ? "lg:flex-row-reverse" : ""}`}>
                <div className="w-full lg:w-1/2 relative group">
                  <div className={`absolute -inset-3 bg-${service.color}-100 rounded-[2.5rem] group-hover:rotate-2 transition-transform duration-500`}></div>
                  <div className="relative h-[350px] lg:h-[450px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                    <img src={service.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={service.title} />
                    <div className={`absolute inset-0 bg-gradient-to-tr from-${service.color}-900/40 to-transparent`}></div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className={`w-14 h-14 bg-${service.color}-100 text-${service.color}-600 rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon size={28} />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">{service.title}</h2>
                  <p className="text-base lg:text-lg text-slate-600 mb-6 leading-relaxed italic">{service.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-800 font-bold text-sm lg:text-base">
                        <div className={`w-5 h-5 rounded-full bg-${service.color}-50 flex items-center justify-center text-${service.color}-600`}>
                          <ChevronRight size={12} />
                        </div>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. ADVERTISERS & PUBLISHERS SECTION --- */}
      <section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 blur-[100px]"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Advertiser Card */}
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 hover:border-blue-500/50 transition-all group">
              <Users className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-2xl font-black text-white mb-4 italic tracking-tight">FOR ADVERTISERS</h4>
              <p className="text-slate-400 mb-6 text-base leading-relaxed">Scale your brand across our premium publisher network with 100% transparency.</p>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                {["Access high-quality, fraud-free traffic sources", "Real-time campaign optimization & budget pacing", "Detailed ROI & attribution reporting", "Dedicated account management & strategy"].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1 flex-shrink-0" size={18} /> {text}
                  </li>
                ))}
              </ul>
              <button onClick={() => setActiveModal("advertiser")} className="text-blue-400 font-extrabold flex items-center gap-2 hover:gap-4 transition-all text-xl lg:text-2xl bg-transparent border-none p-0 cursor-pointer outline-none">
                Join as Advertiser <ChevronRight size={24} />
              </button>
            </div>

            {/* Publisher Card */}
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 hover:border-purple-500/50 transition-all group">
              <MousePointer2 className="text-purple-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-2xl font-black text-white mb-4 italic tracking-tight">FOR PUBLISHERS</h4>
              <p className="text-slate-400 mb-6 text-base leading-relaxed">Monetize your global traffic with the highest payouts and exclusive offers.</p>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                {["Highest CPA / CPL payouts in verticals", "Smart-link auto-optimization for max EPC", "Weekly / bi-monthly fast payouts", "Dedicated affiliate manager + tools access"].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-400 mt-1 flex-shrink-0" size={18} /> {text}
                  </li>
                ))}
              </ul>
              <button onClick={() => setActiveModal("publisher")} className="text-purple-400 font-bold flex items-center gap-2 hover:gap-4 transition-all text-xl lg:text-2xl bg-transparent border-none p-0 cursor-pointer outline-none">
                Join as Publisher <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. FRAUD PROTECTION STRIP --- */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex p-4 bg-indigo-50 text-indigo-600 rounded-2xl mb-6">
            <ShieldAlert size={32} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase">Essence-Shield™ Compliance</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Hamara proprietary AI har impression aur conversion ko 150+ parameters par check karta hai, taaki aapko mile sirf real results.
          </p>
        </div>
      </section>

      {/* --- MODAL POPUP COMPONENT --- */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
              <button onClick={closeModal} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors z-10">
                <X size={24} className="text-slate-500" />
              </button>

              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <h3 className={`text-3xl font-black mb-2 ${activeModal === 'advertiser' ? 'text-blue-600' : 'text-purple-600'}`}>
                    {activeModal === 'advertiser' ? 'Advertiser Inquiry' : 'Publisher Application'}
                  </h3>
                  <p className="text-slate-500 font-medium">Please fill out the form below and our team will contact you.</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input type="email" placeholder="Business Email" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input type="text" placeholder="Phone Number" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
                    </div>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input type="text" placeholder="Skype / Telegram ID" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
                    </div>
                  </div>

                  <div className="relative">
                    <Globe className="absolute left-4 top-4 text-slate-400" size={18} />
                    <textarea 
                      placeholder={activeModal === 'advertiser' ? "Tell us about your offers/brand..." : "Tell us about your traffic sources (Social, SEO, PPC)..."} 
                      rows={4} 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    ></textarea>
                  </div>

                  <Button className={`w-full py-8 rounded-2xl text-lg font-black shadow-xl transition-transform active:scale-95 ${activeModal === 'advertiser' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-200' : 'bg-purple-600 hover:bg-purple-700 shadow-purple-200'}`}>
                    Submit Application
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
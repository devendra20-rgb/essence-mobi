"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import {
  Target,
  Shield,
  Zap,
  Globe,
  BarChart,
  Headphones,
  Smartphone,
  ShieldAlert,
  CheckCircle2,
  Users,
  TrendingUp,
  DollarSign,
  MousePointer2,
  BrainCircuit,
  Megaphone,
  Settings2,
  ChevronRight,
  ArrowRight,
  X,
  User,
  Mail,
  MessageSquare,
  Phone,
  Building,
  Loader2,
} from "lucide-react";

export default function ServicesPage() {
  const [activeModal, setActiveModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const closeModal = () => {
    if (!loading) setActiveModal(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Type identify karne ke liye extra field
    data.type = activeModal;

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify({
          type: data.type,
          name: data.full_name,
          email: data.work_email,
          phone: data.phone,
          company: data.company_name,
          // Advertiser ya Publisher ke hisab se dynamic data mapping
          message1: activeModal === "advertiser" ? data.services : data.channels,
          message2: activeModal === "advertiser" ? data.verticals : data.geos,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        alert("Success! Your application has been sent.");
        setActiveModal(null);
      } else {
        alert("Failed to send. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const coreServices = [
    {
      title: "App Revenue Acceleration & Retention Growth",
      desc: "Grow your app with high-quality installs, better retention, and higher revenue. We run performance-driven app marketing and optimize post-install actions so every user delivers real value.",
      features: [
        "User Acquisition (UA) at scale: CPI/CPA campaigns to drive quality installs. ",
        "Event-based optimization: focus on signups, onboarding, purchases, and key in-app actions.",
        "ASO support: improve app store visibility and conversion with keyword and creative guidance.",
        "Monetization improvement: boost ROAS through subscriptions, in-app purchases, and funnel fixes. ",
        "Creative testing: test multiple ad formats and messages to improve CTR and LTV. ",
        "Traffic quality control: reduce fraud and maintain stable, clean performance.",
      ],
      icon: BrainCircuit,
      color: "blue",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070",
      align: "left",
    },
    {
      title: "Conversion-Led Media Buying",
      desc: "Run performance campaigns that are measurable and scalable. We combine outcome-based buying with programmatic reach to deliver conversions at the right cost. ",
      features: [
        "Performance models: CPL/CPA/CPI/CPS campaigns aligned to your KPIs.",
        "Programmatic buying: targeted reach using data-driven audience buying.",
        "Full-funnel planning: from awareness to conversion with clear goals at every stage.",
        "Landing page support: improve conversion with messaging and funnel optimization.",
        "Continuous testing: optimize creatives, placements, offers, and audiences.",
        "Clear reporting: transparent tracking, dashboards, and actionable insights.",
      ],
      icon: Globe,
      color: "indigo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyn7v4UbfW5xpfws0MIM2BUE8cI4DXN_Ydpg&s",
      align: "right",
    },
    {
      title: "Brand Storytelling & Social Performance",
      desc: "Build brand awareness and drive results on social. We create content and campaigns that increase reach, engagement, and traffic while keeping performance measurable.",
      features: [
        "Brand awareness campaigns: reach the right audience with strong visibility. ",
        "Social ads: campaigns designed for engagement, traffic, and conversions. ",
        "Influencer marketing: creator planning, coordination, and performance tracking.",
        "Content strategy: ad creatives aligned with your brand voice and audience behavior. ",
        "Measurable branding: track CTR, engagement, visits, and outcomes. ",
        "Consistent messaging: unified communication across social and digital channels.",
      ],
      icon: Megaphone,
      color: "purple",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2074",
      align: "left",
    },
    {
      title: "Conversion-Focused Lead Generation ",
      desc: "Generate qualified leads that convert. We focus on lead quality, validation, and performance tracking so your sales team gets real opportunities, not just volume.",
      features: [
        "Targeted lead acquisition: CPL campaigns built for your ideal customer. ",
        "Multi-channel leads: search, social, display, native, and affiliate traffic.",
        "Lead validation: filters to reduce fake, duplicate, and low-quality leads. ",
        "Form and landing page optimization: improve conversion rates and user experience.",
        "Lead performance tracking: monitor CPL, approval rate, and downstream results.",
        "Works across industries: finance, apps, e-commerce, services, and more.",
      ],
      icon: TrendingUp,
      color: "blue",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2026",
      align: "right",
    },
    {
      title: "Performance Delivery & Optimization",
      desc: "We manage campaigns end-to-end so you can scale faster with less effort. From setup to daily optimization, we keep performance stable, efficient, and growth focused. ",
      features: [
        "Campaign setup: planning, tracking setup, creatives coordination, and launch. ",
        "Daily optimization: pacing, performance monitoring, and improvements.",
        "Tracking and attribution: cleaner measurement for better scaling decisions.",
        "Partner management: publisher onboarding, coordination, and performance control.",
        "Compliance-first execution: structured processes and confidentiality in place. ",
        "Regular reporting: updates, insights, and clear next steps.",
      ],
      icon: Settings2,
      color: "purple",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070",
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
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(#cbd5e1 1.2px, transparent 1.2px)",
              backgroundSize: "32px 32px",
            }}
          ></div>
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
              <span className="text-slate-900 font-bold border-b-4 border-blue-400/30">
                exclusive offers
              </span>{" "}
              and{" "}
              <span className="text-slate-900 font-bold border-b-4 border-indigo-400/30">
                smart tracking
              </span>{" "}
              needed to scale global campaigns.
            </p>
          </div>

          <div className="flex items-center justify-center mt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 rounded-2xl text-lg font-black shadow-xl transition-all hover:scale-105 flex items-center gap-3"
              >
                Get Partnered With Us <ArrowRight size={20} />
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
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${service.align === "right" ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="w-full lg:w-1/2 relative group">
                  <div
                    className={`absolute -inset-3 bg-${service.color}-100 rounded-[2.5rem] group-hover:rotate-2 transition-transform duration-500`}
                  ></div>
                  <div className="relative h-[350px] lg:h-[450px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src={service.image}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={service.title}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr from-${service.color}-900/40 to-transparent`}
                    ></div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div
                    className={`w-14 h-14 bg-${service.color}-100 text-${service.color}-600 rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <service.icon size={28} />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-base lg:text-lg text-slate-600 mb-6 leading-relaxed italic">
                    {service.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-slate-800 font-bold text-sm lg:text-base"
                      >
                        <div
                          className={`w-5 h-5 rounded-full bg-${service.color}-50 flex items-center justify-center text-${service.color}-600`}
                        >
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
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Advertiser Card */}
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 hover:border-blue-500/50 transition-all group">
              <Users
                className="text-blue-400 mb-6 group-hover:scale-110 transition-transform"
                size={40}
              />
              <h4 className="text-2xl font-black text-white mb-4 italic tracking-tight">
                FOR ADVERTISERS
              </h4>
              <p className="text-slate-400 mb-6 text-base leading-relaxed">
                Scale your brand across our premium publisher network with 100%
                transparency.
              </p>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-blue-400 mt-1 flex-shrink-0"
                    size={18}
                  />
                  Access high-quality, fraud-free traffic sources
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-blue-400 mt-1 flex-shrink-0"
                    size={18}
                  />
                  Real-time campaign optimization & budget pacing
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-blue-400 mt-1 flex-shrink-0"
                    size={18}
                  />
                  Detailed ROI & attribution reporting
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-blue-400 mt-1 flex-shrink-0"
                    size={18}
                  />
                  Dedicated account management & strategy sessions
                </li>
              </ul>
              {/* <button
                onClick={() => setActiveModal("advertiser")}
                className="text-blue-400 font-extrabold flex items-center gap-2 hover:gap-4 transition-all text-xl lg:text-2xl bg-transparent border-none p-0 cursor-pointer outline-none"
              >
                Join as Advertiser <ChevronRight size={24} />
              </button> */}
            </div>

            {/* Publisher Card */}
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 hover:border-purple-500/50 transition-all group">
              <MousePointer2
                className="text-purple-400 mb-6 group-hover:scale-110 transition-transform"
                size={40}
              />
              <h4 className="text-2xl font-black text-white mb-4 italic tracking-tight">
                FOR PUBLISHERS
              </h4>
              <p className="text-slate-400 mb-6 text-base leading-relaxed">
                Monetize your global traffic with the highest payouts and
                exclusive offers.
              </p>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-purple-400 mt-1 flex-shrink-0"
                    size={18}
                  />
                  Highest CPA / CPL payouts in verticals
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-purple-400 mt-1 flex-shrink-0"
                    size={18}
                  />
                  Smart-link auto-optimization for max EPC
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-purple-400 mt-1 flex-shrink-0"
                    size={18}
                  />
                  Weekly / bi-monthly fast payouts
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-purple-400 mt-1 flex-shrink-0"
                    size={18}
                  />
                  Dedicated affiliate manager + tools access
                </li>
              </ul>
              {/* <button
                onClick={() => setActiveModal("publisher")}
                className="text-purple-400 font-bold flex items-center gap-2 hover:gap-4 transition-all text-xl lg:text-2xl bg-transparent border-none p-0 cursor-pointer outline-none"
              >
                Join as Publisher <ChevronRight size={24} />
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. FRAUD PROTECTION STRIP --- */}
      {/* <section className="py-20 bg-white">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex p-4 bg-indigo-50 text-indigo-600 rounded-2xl mb-6">
            <ShieldAlert size={32} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            Essence-Shield™ Compliance
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            
          </p>
        </div>
      </section> */}

      {/* --- MODAL POPUP COMPONENT --- */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar"
            >
              <button
                onClick={closeModal}
                disabled={loading}
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
              >
                <X size={24} className="text-slate-500" />
              </button>

              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <h3 className={`text-3xl font-black mb-2 ${activeModal === "advertiser" ? "text-blue-600" : "text-purple-600"}`}>
                    {activeModal === "advertiser" ? "Advertiser Inquiry" : "Publisher Application"}
                  </h3>
                  <p className="text-slate-500 font-medium italic">
                    {loading ? "Sending your details..." : "Please fill out the form below and our team will contact you."}
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        name="full_name"
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        name="work_email"
                        type="email"
                        placeholder="Work Email"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone / WhatsApp Number"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                  </div>

                  {/* Dynamic Fields */}
                  {activeModal === "advertiser" ? (
                    <>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          name="company_name"
                          type="text"
                          placeholder="Company Name"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                        />
                      </div>
                      <div className="relative">
                        <Target className="absolute left-4 top-4 text-slate-400" size={18} />
                        <textarea
                          name="services"
                          placeholder="Services Needed / Objective"
                          rows={3}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                        />
                      </div>
                      <div className="relative">
                        <BarChart className="absolute left-4 top-4 text-slate-400" size={18} />
                        <textarea
                          name="verticals"
                          placeholder="Interested Verticals"
                          rows={3}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          name="company_name"
                          type="text"
                          placeholder="Publisher Name"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                        />
                      </div>
                      <div className="relative">
                        <Zap className="absolute left-4 top-4 text-slate-400" size={18} />
                        <textarea
                          name="channels"
                          placeholder="Traffic Channels (FB, Google, SEO...)"
                          rows={3}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                        />
                      </div>
                      <div className="relative">
                        <Globe className="absolute left-4 top-4 text-slate-400" size={18} />
                        <textarea
                          name="geos"
                          placeholder="GEOs + Models (Tier-1, CPA...)"
                          rows={3}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                        />
                      </div>
                    </>
                  )}

                  <Button
                    disabled={loading}
                    className={`w-full py-8 rounded-2xl text-lg font-black shadow-xl transition-all flex items-center justify-center gap-2 ${
                      activeModal === "advertiser" ? "bg-blue-600 hover:bg-blue-700" : "bg-purple-600 hover:bg-purple-700"
                    }`}
                    type="submit"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" /> Processing...
                      </>
                    ) : (
                      "Submit Application"
                    )}
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

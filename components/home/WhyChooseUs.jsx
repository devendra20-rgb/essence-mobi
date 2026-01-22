import React from 'react';
import { Shield, Zap, Globe, TrendingUp, Award, Users, ArrowRight } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      desc: "Bank-level encryption and real-time fraud detection to keep your data safe.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      desc: "No long waiting periods. Get your account live and running in under 5 minutes.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Connect with premium advertisers and publishers across 100+ countries.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      desc: "Detailed reports and live tracking to optimize your campaigns on the fly.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT SIDE: Image/Visual Area */}
          <div className="w-full lg:w-1/2 relative">
            {/* Background Decorative Blob */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-70"></div>
            
            <div className="relative z-10 rounded-[2.5rem] border-8 border-gray-100/50 overflow-hidden shadow-2xl">
              {/* Image related to Affiliate/Tech Dashboard */}
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                alt="Affiliate Marketing Dashboard" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <span className="text-sm font-bold text-gray-800">Live Analytics</span>
                </div>
                <p className="text-xs text-gray-600">Tracking 1M+ conversions daily across the globe.</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Content Area */}
          <div className="w-full lg:w-1/2">
            <div className="mb-10">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                Why Essence Mobi
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
                Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Scale Globally</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide a powerful, all-in-one platform designed for high-performance affiliate marketing. Experience the difference with our cutting-edge technology.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.bgColor} ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* <div className="mt-10">
              <button className="flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors group">
                Learn more about our technology 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
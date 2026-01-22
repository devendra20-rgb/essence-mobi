import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { DollarSign, Users, Clock, Globe } from "lucide-react";

const Counter = ({ value }) => {
  const ref = useRef(null);
  
  // 'once: false' karne se ye har baar trigger hoga jab section screen par aayega
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      // Jab view mein aaye toh target number tak jao
      motionValue.set(numericValue);
    } else {
      // Jab view se bahar jaye toh wapas 0 kar do taaki next time phir se animation dikhe
      motionValue.set(0);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        const suffix = value.replace(/[0-9]/g, "");
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>0</span>;
};

const StatsSection = () => {
  const stats = [
    { icon: DollarSign, value: "$50M+", label: "Revenue Generated", desc: "Payouts distributed this year", color: "blue" },
    { icon: Users, value: "10K+", label: "Active Partners", desc: "Trusted publishers worldwide", color: "purple" },
    { icon: Clock, value: "99.8%", label: "Uptime", desc: "Reliable platform availability 24/7", color: "emerald" },
    { icon: Globe, value: "150+", label: "Countries", desc: "Global reach across all continents", color: "indigo" },
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-gray-200/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                {/* Icon with animated background */}
                <div className={`relative w-16 h-16 mb-6 flex items-center justify-center`}>
                   <div className={`absolute inset-0 bg-${stat.color}-100 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-70`}></div>
                   <div className={`relative bg-white p-4 rounded-2xl shadow-sm border border-${stat.color}-50`}>
                      <stat.icon className={`w-7 h-7 text-${stat.color}-600`} />
                   </div>
                </div>

                {/* Animated Number */}
                <h3 className="text-5xl font-black text-gray-900 tracking-tight mb-2">
                  <Counter value={stat.value} />
                </h3>

                <p className="font-bold text-gray-800 text-lg mb-2">{stat.label}</p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[180px]">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function BrandLogos() {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: false });

  const brands = [
    { name: "Spotify", logo: "/spotify.svg" },
    { name: "IBM", logo: "/ibm.svg" },
    { name: "Intel", logo: "/intel.svg" },
    { name: "Samsung", logo: "/samsung.svg" },
    { name: "CocaCola", logo: "/coca-cola-2021.svg" },
    { name: "Nike", logo: "/nike.svg" },
    { name: "Pepsi", logo: "/pepsi.svg" },
    { name: "Zoom", logo: "/zoom.svg" },
    { name: "Airbnb", logo: "/airbnb.svg" },
    { name: "Uber", logo: "/uber.svg" },
    { name: "PayPal", logo: "/paypal-3.svg" },
    { name: "Dell", logo: "/dell.svg" },
    { name: "Salesforce", logo: "/salesforce.svg" },
    { name: "LinkedIn", logo: "/linkedin.svg" },
    { name: "HP", logo: "/hp.svg" },
  ];

  const loopedBrands = [...brands, ...brands, ...brands];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth / 3;
    let scrollSpeed = 0.8;
    let animationFrameId;
    const autoScroll = () => {
      if (!el) return;
      el.scrollLeft += scrollSpeed;
      if (el.scrollLeft >= (el.scrollWidth / 3) * 2) {
        el.scrollLeft = el.scrollWidth / 3;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };
    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    // Padding py-24 se kam karke pt-20 pb-10 kar di hai
    <section className="pt-20 pb-10 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase block mb-3"
          >
            Trusted Network
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Global Partnerships
          </h2>
        </div>

        {/* Logo Scroller */}
        <div className="relative mb-12">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div
            ref={scrollRef}
            className="flex overflow-x-hidden gap-16 py-4 no-scrollbar items-center"
          >
            {loopedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 md:h-9 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- SPACE FILLER: Divider & Small Stats --- */}
        <div className="max-w-4xl mx-auto border-t border-gray-100 pt-8 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
                <p className="text-sm font-bold text-slate-900">24/7 Support</p>
                <p className="text-xs text-gray-400">Expert Assistance</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-100"></div>
            <div>
                <p className="text-sm font-bold text-slate-900">Instant Payouts</p>
                <p className="text-xs text-gray-400">Weekly Settlements</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-100"></div>
            <div>
                <p className="text-sm font-bold text-slate-900">Direct Offers</p>
                <p className="text-xs text-gray-400">Premium Advertisers</p>
            </div>
        </div>
      </div>
    </section>
  );
}
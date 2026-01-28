"use client";

import CTASection from "../components/home/CTASection";
import ServicesSection from "../components/home/AdvertiserPublisherSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import BrandLogos from "../components/home/BrandLogo";
import ServiceCards from "../components/home/ServiceCards";


export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Asymmetric Design */}
     <HeroSection />

      {/* Features Grid */}
      {/* <WhyChooseUs /> */}

      <ServiceCards />

      {/* Split Section - Advertisers & Publishers */}
      <ServicesSection />


      {/* <BrandLogos /> */}

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <CTASection />
      
    </div>
  );
}

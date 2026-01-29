"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  MapPin,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    // Removed min-h-screen to fix extra space issue
    <div className="relative w-full overflow-x-hidden bg-slate-50/50">
      
      {/* Background effects - Fixed positioning to stay within bounds */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-300/10 rounded-full blur-[120px]" />
        
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-20">
        
        {/* Hero Section - Reduced padding */}
        <section className="pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/5 border border-blue-200 text-blue-700 text-xs md:text-sm font-black tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles size={16} className="animate-pulse" />
            Let's Connect & Scale
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Get in Touch with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600">
              Essence Mobi
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Whether you're a publisher looking for high-payout offers or an
            advertiser seeking quality traffic - we're here to help.
          </p>
        </section>

        {/* Main Contact Section */}
        <section className="pb-12 md:pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Form Card */}
            <div className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-[2rem] p-6 md:p-10 shadow-xl flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                Send Your Message
              </h2>
              <p className="text-slate-600 mb-8 text-base md:text-lg">
                Our team usually responds within 4–12 hours.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">We'll get back to you very soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="h-14 rounded-xl border-slate-200 bg-white/50 focus:bg-white transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="h-14 rounded-xl border-slate-200 bg-white/50 focus:bg-white transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="rounded-xl border-slate-200 bg-white/50 focus:bg-white transition-all resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-16 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-200/50 transition-all hover:scale-[1.01] active:scale-[0.98]"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              )}
            </div>

            {/* Info Section */}
            <div className="flex flex-col gap-6">
              {/* Office Card */}
              <div className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all group">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Our Office</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Al Thanyah First - Barsha Heights<br />
                      Dubai - United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all group">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                  <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={28} />
                  </div>
                  <div className="overflow-hidden w-full">
                    <h3 className="text-xl font-black text-slate-900 mb-2">Email Us</h3>
                    <a href="mailto:partner@essencemobi.com" className="text-indigo-600 hover:text-indigo-700 font-bold text-lg md:text-xl truncate block transition-colors">
                      partner@essencemobi.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats Card - Changed to light theme */}
              <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[2rem] p-8 shadow-xl flex-grow flex flex-col justify-center hover:shadow-2xl transition-all">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                  Ready to Scale Your Revenue?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-100 hover:border-blue-200 backdrop-blur-sm group hover:scale-[1.02] transition-all">
                    <p className="text-3xl md:text-4xl font-black text-blue-600">24/7</p>
                    <p className="text-slate-700 font-semibold text-sm md:text-base mt-1">Expert Support</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl border border-indigo-100 hover:border-indigo-200 backdrop-blur-sm group hover:scale-[1.02] transition-all">
                    <p className="text-3xl md:text-4xl font-black text-indigo-600">2K+</p>
                    <p className="text-slate-700 font-semibold text-sm md:text-base mt-1">Global Partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - Reduced padding and made more compact */}
        <section className="pb-8 md:pb-12 -mx-4 sm:-mx-6 lg:-mx-8 mb-8 md:mb-12">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white mx-4 sm:mx-6 lg:mx-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.6702220455!2d55.1793!3d25.0887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b86c340a5e5%3A0x9f5d34107779f4c1!2sBarsha%20Heights%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              className="w-full h-[280px] md:h-[420px] lg:h-[400px]"
              loading="lazy"
              title="Essence Mobi Office"
            />
          </div>
        </section>

        {/* Added small footer spacing fix */}
        <div className="h-12 md:h-16" />
      </div>
    </div>
  );
}
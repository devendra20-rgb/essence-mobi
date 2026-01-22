import { useState } from "react";
import { TrendingUp, Users, CheckCircle2, ArrowRight, X, Mail, User, Phone, Globe, MessageSquare } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

const ServicesSection = () => {
  const [activeModal, setActiveModal] = useState(null); // 'advertiser' or 'publisher' or null

  const closeModal = () => setActiveModal(null);

  return (
    <section className="py-24 bg-[#fafafa] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-200/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-purple-200/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="text-center max-w-5xl mx-auto mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
            OUR EXPERTISE
          </div>

          <h2 className="text-5xl lg:text-[4.8rem] font-black text-slate-900 tracking-tighter leading-[1] mb-8">
            Tailored Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Your Growth
            </span>
          </h2>

          <div className="space-y-4">
            <p className="text-xl lg:text-2xl text-slate-500 font-semibold max-w-3xl mx-auto leading-relaxed">
              Everything you need to scale globally with precision and speed.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Advertisers Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-12 text-white shadow-xl transition-all duration-500 group-hover:-translate-y-2">
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-4 tracking-tight">For Advertisers</h3>
                <p className="text-blue-100/90 mb-10 text-lg leading-relaxed">Scale your brand with high-intent audiences and precision-targeted campaigns.</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {["Premium traffic", "Performance-based", "Smart Targeting", "Anti-fraud Tech", "Real-time Data", "Global Reach"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
                      <CheckCircle2 className="w-5 h-5 text-blue-300" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => setActiveModal('advertiser')}
                  size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 rounded-2xl px-8 py-7 text-lg font-bold shadow-lg group/btn">
                  Start Advertising <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Publishers Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-600 to-purple-700 p-8 md:p-12 text-white shadow-xl transition-all duration-500 group-hover:-translate-y-2">
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-4 tracking-tight">For Publishers</h3>
                <p className="text-purple-100/90 mb-10 text-lg leading-relaxed">Maximize your revenue with premium direct offers and industry-high payouts.</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {["Top Commission", "Weekly Payouts", "Exclusive Offers", "Free Resources", "24/7 Support", "Smart Links"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
                      <CheckCircle2 className="w-5 h-5 text-purple-300" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => setActiveModal('publisher')}
                  size="lg" className="w-full sm:w-auto bg-white text-purple-600 hover:bg-purple-50 rounded-2xl px-8 py-7 text-lg font-bold shadow-lg group/btn">
                  Join as Publisher <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
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
              className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
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

                <form className="space-y-4">
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

                  <Button 
                    className={`w-full py-8 rounded-2xl text-lg font-black shadow-xl transition-transform active:scale-95 ${
                      activeModal === 'advertiser' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-200' : 'bg-purple-600 hover:bg-purple-700 shadow-purple-200'
                    }`}
                  >
                    Submit Application
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
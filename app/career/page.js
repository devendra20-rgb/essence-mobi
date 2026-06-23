"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Sparkles, Send, CheckCircle2, Target, Trophy, Zap, Globe2, Clock, Upload, X } from "lucide-react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    message: "",
  });

  const [resume, setResume] = useState(null);
  const [resumeName, setResumeName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CAREER APPLICATION:", { ...formData, resume: resumeName });

    if (typeof window.gtag === "function") {
      window.gtag("event", "form_submit", { form_name: "career_application" });
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: "", email: "", phone: "", role: "", experience: "", message: "" });
      setResume(null);
      setResumeName("");
    }, 3000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should be less than 5MB");
        return;
      }
      setResume(file);
      setResumeName(file.name);
    }
  };

  const removeResume = () => {
    setResume(null);
    setResumeName("");
  };



  return (
    <div className="relative w-full overflow-x-hidden bg-slate-50/50">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/3 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-1/4 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "45px 45px" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-20">
        {/* Hero */}
        <section className="pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 text-blue-700 text-sm font-bold mb-6">
            <Sparkles size={18} className="animate-pulse" />
            WE ARE HIRING
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-none">
            Join the <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Growth Engine</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Be part of a high-performance team scaling digital marketing campaigns across the globe.
          </p>
        </section>

        {/* Why Join Us */}
        <section className="pb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900">Why Top Talent Chooses Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target size={32} />, title: "Real Impact", desc: "Work on multi-million dollar campaigns with direct P&L responsibility" },
              { icon: <Zap size={32} />, title: "Fast Growth", desc: "Promotions based on performance, not politics" },
              { icon: <Trophy size={32} />, title: "Top Compensation", desc: "Competitive salary + high performance bonuses" },
              { icon: <Clock size={32} />, title: "Flexibility", desc: "Hybrid work + flexible timings" },
            ].map((item, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 hover:-translate-y-1 transition-all">
                <div className="text-blue-600 mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form + Info */}
        <div className="grid lg:grid-cols-5 gap-8 pb-20">
          {/* Form */}
          <div className="lg:col-span-3 bg-white/70 backdrop-blur-xl border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
            <h2 className="text-4xl font-black mb-2">Apply For Your Dream Role</h2>
            <p className="text-slate-600 mb-10">Tell us about yourself. Our team usually replies within 24-48 hours.</p>

            {submitted ? (
              <div className="text-center py-20">
                <CheckCircle2 className="w-20 h-20 text-green-600 mx-auto mb-6" />
                <h3 className="text-3xl font-black mb-3">Application Submitted!</h3>
                <p className="text-lg text-slate-600">Thank you. We’ll get back to you very soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-2">Full Name *</label>
                    <Input
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Aarav Sharma"
                      className="h-14 rounded-2xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="h-14 rounded-2xl"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="h-14 rounded-2xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-2">Role Interested In *</label>
                    <Input
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="Media Buyer, Affiliate Manager..."
                      className="h-14 rounded-2xl"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 block mb-2">Years of Experience</label>
                  <Input
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="3+ years in Performance Marketing"
                    className="h-14 rounded-2xl"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="text-sm font-bold text-slate-700 block mb-2">Resume / CV *</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 hover:border-blue-400 transition-colors">
                    {resumeName ? (
                      <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4">
                        <div className="flex items-center gap-3">
                          <Upload className="text-blue-600" />
                          <div>
                            <p className="font-medium text-slate-900 truncate max-w-[300px]">{resumeName}</p>
                            <p className="text-xs text-slate-500">Selected</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeResume}
                          className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    ) : (
                      <label className="cursor-pointer flex flex-col items-center justify-center py-4">
                        <Upload className="w-10 h-10 text-slate-400 mb-3" />
                        <p className="font-medium text-slate-700">Click to upload your resume</p>
                        <p className="text-sm text-slate-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          required
                        />
                      </label>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 block mb-2">Why do you want to join Essence Mobi? *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="I'm really impressed with your growth in Tier-1 countries..."
                    rows={6}
                    className="rounded-2xl"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-16 text-lg font-bold rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  SUBMIT APPLICATION
                  <Send className="ml-2" />
                </Button>
              </form>
            )}
          </div>

          {/* Side Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-8">
              <h3 className="font-bold text-2xl mb-6">Ready to Grow With Us?</h3>
              <p className="text-slate-600 leading-relaxed">
                We are a fast-growing performance marketing company based in Dubai. 
                If you love data, scale, and high-stakes campaigns — this is the place for you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-8">
              <p className="text-sm opacity-75">EMAIL YOUR RESUME DIRECTLY</p>
              <a href="mailto:hr@essencemobi.com" className="block text-2xl font-bold mt-2 hover:underline">
                hr@essencemobi.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
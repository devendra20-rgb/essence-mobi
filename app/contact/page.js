'use client'

import { useState } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { MapPin, Mail, Send, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <div className="bg-[#fcfdff] overflow-hidden min-h-screen">
      {/* Background effects - same as Services page */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[700px] h-[700px] bg-indigo-300/10 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Hero Section - Services style */}
      <section className="relative pt-32 pb-24">
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600/5 border border-blue-200 text-blue-700 text-sm font-black tracking-wider uppercase mb-8 shadow-sm">
            <Sparkles size={16} className="animate-pulse" />
            Let's Connect & Scale
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            Get in Touch with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600">
              Essence Mobi
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Whether you're a publisher looking for high-payout offers or an advertiser seeking quality traffic — we're here to help you grow faster.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Form - Glassmorphism matching Services */}
            <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-4xl font-black text-slate-900 mb-6">Send Your Message</h2>
              <p className="text-slate-600 mb-10 text-lg">
                Our team usually responds within 4–12 hours. Drop your inquiry below.
              </p>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-slate-600 text-lg">We'll get back to you very soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-14 rounded-2xl border-slate-300 focus:border-blue-500 focus:ring-blue-200 text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-14 rounded-2xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-200 text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                    <Textarea
                      placeholder="Tell us about your project, partnership idea, or any question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="rounded-2xl border-slate-300 focus:border-purple-500 focus:ring-purple-200 text-lg resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xl py-7 rounded-2xl font-black shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
                  >
                    Send Message
                    <Send className="ml-3 w-6 h-6" />
                  </Button>
                </form>
              )}
            </div>

            {/* Info Cards - Matching Services style */}
            <div className="space-y-8">
              {/* Office */}
              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3">Our Office</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      NEST Dubai coworking space<br />
                      TRYP by Wyndham<br />
                      Al Thanyah First - Barsha Heights<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3">Email Us</h3>
                    <a
                      href="mailto:hello@essencemobi.com"
                      className="text-indigo-600 hover:text-indigo-700 text-2xl font-bold block mb-2 transition-colors"
                    >
                      hello@essencemobi.com
                    </a>
                    <p className="text-slate-600 text-lg">We usually reply within 4–12 hours</p>
                  </div>
                </div>
              </div>

              {/* Ready to Start */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border border-blue-100 shadow-xl">
                <h3 className="text-3xl font-black text-slate-900 mb-6">
                  Ready to Scale Your Revenue?
                </h3>
                <p className="text-slate-700 mb-8 text-lg">
                  Join publishers and advertisers already growing with exclusive offers & smart tracking.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/70 rounded-2xl border border-slate-200">
                    <p className="text-4xl font-black text-blue-600">24/7</p>
                    <p className="text-slate-600 mt-1">Support</p>
                  </div>
                  <div className="text-center p-6 bg-white/70 rounded-2xl border border-slate-200">
                    <p className="text-4xl font-black text-indigo-600">10K+</p>
                    <p className="text-slate-600 mt-1">Partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1953487127614!2d55.18469831501207!3d25.097419083944686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b3f3f3f3f3f%3A0x3f3f3f3f3f3f3f3f!2sBarsha%20Heights%20-%20Dubai!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Essence Mobi Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
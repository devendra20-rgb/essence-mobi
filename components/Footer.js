import Link from "next/link";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-slate-950 text-gray-400">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand / About Us */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/Fav-icon.png"
                alt="Essence Mobi Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Essence Mobi
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-xs">
              Next-generation affiliate marketing platform transforming digital
              growth worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                // { name: 'fb', icon: 'f' },
                // { name: 'tw', icon: 't' },
                // { name: 'in', icon: 'in' },
                // { name: 'yt', icon: 'yt' },
                { name: "li", icon: "in" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="https://www.linkedin.com/company/essencemobi/"
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                >
                  <span className="font-bold text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Photo Stream */}
          {/* <div>
            <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
              <span className="text-red-500">—</span> PHOTO STREAM
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                'https://picsum.photos/id/1015/200/200',
                'https://picsum.photos/id/180/200/200',
                'https://picsum.photos/id/201/200/200',
                'https://picsum.photos/id/1016/200/200',
                'https://picsum.photos/id/133/200/200',
                'https://picsum.photos/id/237/200/200'
              ].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl">
                  <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div> */}

          {/* Column 2: Office Location Map */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
              <span className="text-red-500">—</span> OUR LOCATION
            </h3>

            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <iframe
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1953487127614!2d55.18469831501207!3d25.097419083944686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b3f3f3f3f3f%3A0x3f3f3f3f3f3f3f3f!2sBarsha%20Heights%20-%20Dubai!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                src="https://www.google.com/maps?q=Barsha+Heights+Dubai&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Essence Mobi Office Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Barsha Heights, Dubai, UAE
            </p>
          </div>

          {/* Column 3: Why Choose Us */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
              <span className="text-red-500">—</span> WHY CHOOSE US?
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <div className="text-blue-400 mt-1">•</div>
                <span>High-quality traffic &amp; premium publishers</span>
              </li>
              <li className="flex gap-3">
                <div className="text-blue-400 mt-1">•</div>
                <span>Real-time analytics &amp; AI optimization</span>
              </li>
              <li className="flex gap-3">
                <div className="text-blue-400 mt-1">•</div>
                <span>Weekly payouts with no minimum</span>
              </li>
              <li className="flex gap-3">
                <div className="text-blue-400 mt-1">•</div>
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex gap-3">
                <div className="text-blue-400 mt-1">•</div>
                <span>Bank-level security &amp; fraud protection</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
              <span className="text-red-500">—</span> GET IN TOUCH
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Barsha Heights, Dubai, UAE</span>
              </li>
              {/* <li className="flex gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>+971 50 123 4567</span>
              </li> */}
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@essencemobi.com"
                  className="hover:text-white transition-colors"
                >
                  partner@essencemobi.com
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-xs text-gray-500 mb-1">LET'S TALK</p>
              <div className="text-white font-medium text-lg">
                We reply within 24 hours
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Essence Mobi. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-services"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            {/* <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

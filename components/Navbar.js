"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "../components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40); // Thoda late trigger taaki initial transparent zyada der rahe
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about/" },
    { name: "Services", href: "/services/" },
    { name: "Contact", href: "/contact/" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border-b border-slate-100/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Fixed height for consistency */}
          {/* LOGO */}
          <Link href="/" className="flex items-center group relative">
            <div className="relative w-32 h-14 sm:w-36 sm:h-16 transition-all duration-500">
              <Image
                src="/essence-logo.jpeg"
                alt="Essence Mobi Logo"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                priority
                quality={90}
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative text-[15px] lg:text-[16px] font-black text-slate-800 hover:text-blue-600 transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-400 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            <Link href="/contact/">
              <Button
                className={`rounded-2xl px-8 py-6 text-[15px] lg:text-[16px] font-black shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 ${
                  scrolled
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200/50"
                    : "bg-white/90 backdrop-blur-sm text-blue-700 border border-blue-200 hover:bg-blue-50"
                }`}
              >
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
              scrolled
                ? "bg-slate-100/80 backdrop-blur-sm shadow-sm"
                : "bg-white/30 backdrop-blur-md border border-white/40 shadow-sm"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-7 w-7 text-slate-900" />
            ) : (
              <Menu className="h-7 w-7 text-slate-900" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER - Improved positioning & shadow */}
      <div
        className={`fixed inset-x-0 top-[5rem] md:hidden z-[99] transition-all duration-500 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="mx-4 sm:mx-6 mt-4">
          <div
            className={`bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100/80 overflow-hidden transition-all duration-500 ${
              isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="p-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl px-6 py-5 text-[17px] font-bold text-slate-800 hover:bg-blue-50/80 hover:text-blue-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ArrowUpRight className="w-5 h-5 opacity-40" />
                </Link>
              ))}

              <div className="pt-4 pb-2">
                <Link href="/contact/" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl py-7 text-[17px] font-black shadow-xl shadow-blue-200/40 transition-all hover:shadow-2xl hover:-translate-y-1">
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
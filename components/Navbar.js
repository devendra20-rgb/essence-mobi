"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Languages } from "lucide-react";
import { Button } from "../components/ui/button";
import Image from "next/image";
import GoogleTranslate from "./GoogleTranslate";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* LOGO - Left Aligned with Glow Effect */}
          <Link
            href="/"
            className="flex items-center group relative -ml-2 lg:-ml-4 px-2 py-1"
          >
            <div
              className={`relative w-44 h-20 transition-all duration-500 rounded-2xl p-2 ${
                scrolled ? "bg-transparent" : "bg-transparent"
              }`}
            >

              <Image
                src="/e-m-logo.png"
                alt="Essence Mobi Logo"
                fill
                className="object-contain scale-125 transition-transform duration-500 group-hover:scale-130"
                priority
              />
            </div>
          </Link>

          {/* RIGHT SIDE: NAV + LANGUAGE + BUTTON */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <div className="flex items-center gap-6 lg:gap-8">
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

            {/* Language Selector - Visible Box Style */}
            <div
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-300 cursor-pointer ${
                scrolled
                  ? "bg-slate-50 border-slate-200"
                  : "bg-white/20 border-white/30 backdrop-blur-md"
              }`}
            >
              <Languages size={16} className="text-blue-600" />
              <GoogleTranslate />
            </div>

            <Link href="/contact/">
              {/* <Button
                className={`rounded-2xl px-6 lg:px-8 py-6 text-[15px] font-black shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 ${
                  scrolled
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200/50"
                    : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 shadow-xl"
                }`}
              >
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </Button> */}
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
              scrolled
                ? "bg-slate-100/80 shadow-sm"
                : "bg-white/30 backdrop-blur-md border border-white/40"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-7 w-7 text-slate-900" />
            ) : (
              <Menu className="h-7 w-7 text-slate-900" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-x-0 top-[5rem] md:hidden z-[99] transition-all duration-500 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="mx-4 mt-2">
          <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl px-6 py-4 text-[17px] font-bold text-slate-800 hover:bg-blue-50 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ArrowUpRight className="w-5 h-5 opacity-40" />
                </Link>
              ))}

              {/* Language Selector Mobile - High Visibility */}
              <div className="pt-4 border-t border-slate-100 px-4">
                <div className="bg-blue-50 rounded-2xl p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-blue-700 font-black text-xs uppercase tracking-widest">
                    <Languages size={16} /> Select Language
                  </div>
                  <div className="bg-white rounded-lg p-1 border border-blue-100">
                    <GoogleTranslate />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/contact/" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-blue-600 text-white rounded-2xl py-7 text-[17px] font-black shadow-xl">
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

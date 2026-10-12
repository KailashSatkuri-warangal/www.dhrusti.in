"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Play, Sparkles, ChevronDown, PhoneCall } from "lucide-react";
import InteractiveCamera3D from "@/components/3d/InteractiveCamera3D";
import SplitText from "@/components/animations/SplitText";
import Magnetic from "@/components/animations/Magnetic";
import { MOTION_EASING, MOTION_DURATION } from "@/lib/motionConfig";

export default function Cinematic360Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: "Advanced Security Solutions for Every Space",
      subtitle: "The best home and commercial security systems in Warangal, Hanamkonda & Kondapur combine AI-powered CCTV cameras, smart home integration, and 24/7 surveillance monitoring.",
      badge: "★ PIONEERING CCTV SINCE 2003"
    },
    {
      title: "CCTV Installation in Warangal, Hanamkonda & Hyderabad",
      subtitle: "Expert 4K CCTV installation, IP PoE systems, and Annual Maintenance Contracts (AMC) trusted by banks, police departments, and residential communities.",
      badge: "★ 50,000+ CAMERAS DEPLOYED"
    },
    {
      title: "Live 360° Mobile Access Anywhere, Anytime",
      subtitle: "Watch over your home and enterprise from your smartphone. Instant sub-second alerts, full-color night vision, and tamper-proof cloud hybrid storage.",
      badge: "★ 800+ CAMERAS NATIONAL GAMES GOA"
    }
  ];

  const current = heroSlides[activeSlide];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#f8fafc] text-slate-900 overflow-hidden pt-20 pb-12 sm:py-0">
      {/* Background Architectural Grid & Subtle Radial Ambient Light */}
      <div className="absolute inset-0 bg-security-grid-light opacity-75 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-sunlight pointer-events-none" />

      {/* Cybernetic Rotating Ambient Radar Ring */}
      <div className="absolute w-[800px] h-[800px] rounded-full border border-amber-500/10 pointer-events-none scanner-beam -top-40 -right-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Editorial Text Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Staggered Sub-Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: MOTION_EASING.smooth }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-200/80 shadow-sm text-amber-900 text-xs font-mono font-bold tracking-widest uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            {current.badge}
          </motion.div>

          {/* Staggered Large Editorial Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              <SplitText 
                key={activeSlide} 
                text={current.title} 
                mode="words" 
                delay={0.1}
                tag="span"
              />
            </h1>
          </div>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: MOTION_EASING.smooth }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            {current.subtitle}
          </motion.p>

          {/* Magnetic CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: MOTION_EASING.expo }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <Magnetic strength={0.3}>
              <Link
                href="/get-a-quote"
                className="px-8 py-4 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-amber-500/25 flex items-center gap-2.5"
              >
                Get Live Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>

            <Magnetic strength={0.3}>
              <Link
                href="/cctv-cameras"
                className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-amber-400 text-slate-900 font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
              >
                Inspect 360° Cameras
              </Link>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href="tel:+918984567456"
                className="p-4 rounded-2xl bg-slate-900 hover:bg-amber-600 text-white transition-colors shadow-md flex items-center justify-center"
                aria-label="Direct Hotline"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
              </a>
            </Magnetic>
          </motion.div>

          {/* Slide Switchers */}
          <div className="flex items-center justify-center lg:justify-start gap-2 pt-4">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeSlide === idx ? "w-8 bg-amber-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Right 3D Interactive Centerpiece (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: MOTION_EASING.expo }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-full max-w-[500px]">
            {/* 3D WebGL Camera Component */}
            <InteractiveCamera3D />
          </div>
        </motion.div>

      </div>

      {/* Subtle Scroll Cue at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none text-slate-400"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest font-semibold">
          Scroll to Explore
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-amber-600" />
      </motion.div>

    </section>
  );
}

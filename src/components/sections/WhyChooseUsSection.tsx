"use client";

import Image from "next/image";
import { 
  Headphones, 
  Settings2, 
  Smartphone, 
  Activity, 
  ShieldCheck 
} from "lucide-react";
import { Card3D, Reveal3D } from "@/components/ui/Motion3D";
import { ScrollSection, ParallaxLayer } from "@/components/scroll/ScrollPrimitives";

export default function WhyChooseUsSection() {
  const leftFeatures = [
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get round-the-clock CCTV service support in Warangal, Hanamkonda—chat, call, or email anytime."
    },
    {
      icon: Settings2,
      title: "Customized Solutions",
      description: "Tailored CCTV setup for homes, offices & shops, built to fit your exact security needs."
    }
  ];

  const rightFeatures = [
    {
      icon: Smartphone,
      title: "Remote Access",
      description: "Access CCTV cameras online anytime from mobile or PC in Warangal, Hanamkonda."
    },
    {
      icon: Activity,
      title: "Regular Monitoring",
      description: "24/7 CCTV monitoring to detect issues early and ensure nonstop security."
    }
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-200 overflow-hidden">
      <ScrollSection enterEffect="scale-reveal" exitEffect="parallax-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <Reveal3D direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Trusted CCTV Solutions in <span className="text-gradient-gold">Warangal &amp; Hanamkonda</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3">
              Industry-leading electronic security engineering with 20+ years of proven excellence and unmatched after-sales support.
            </p>
          </Reveal3D>

          {/* 3-Column Layout: Left Parallax Features | Center 3D Camera | Right Parallax Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Features (Positive Parallax Speed) */}
            <div className="lg:col-span-3 space-y-6">
              <ParallaxLayer speed={0.12}>
                <div className="space-y-6">
                  {leftFeatures.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Reveal3D key={idx} direction="left" delay={idx * 0.15}>
                        <Card3D>
                          <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-amber-100 group-hover:bg-amber-500 text-amber-800 group-hover:text-slate-950 flex items-center justify-center mb-4 transition-colors shadow-sm">
                              <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Card3D>
                      </Reveal3D>
                    );
                  })}
                </div>
              </ParallaxLayer>
            </div>

            {/* Center 3D Rotating Camera Spotlight (Depth Focus) */}
            <div className="lg:col-span-6 flex justify-center items-center py-6">
              <ParallaxLayer speed={-0.08}>
                <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                  {/* Animated Radar/Halo Rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-300/40 animate-[spin_40s_linear_infinite]" />
                  <div className="absolute inset-8 rounded-full border border-slate-200" />
                  <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-amber-50/50 via-slate-100/50 to-amber-100/30 blur-xl" />

                  {/* Floating 3D Camera Product Image */}
                  <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 animate-float-3d">
                    <Image
                      src="/images/cct2.png"
                      alt="Dhrusti 3D PTZ Smart Security Camera"
                      fill
                      className="object-contain drop-shadow-[0_20px_35px_rgba(217,119,6,0.25)] hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>

                  {/* Live Status Badge */}
                  <div className="absolute bottom-4 z-20 px-4 py-1.5 rounded-full bg-slate-900/90 text-amber-400 text-xs font-mono font-bold tracking-wider backdrop-blur-md border border-amber-500/30 shadow-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    24/7 AI ACTIVE SURVEILLANCE
                  </div>
                </div>
              </ParallaxLayer>
            </div>

            {/* Right Column Features (Counter Parallax Speed) */}
            <div className="lg:col-span-3 space-y-6">
              <ParallaxLayer speed={0.12}>
                <div className="space-y-6">
                  {rightFeatures.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Reveal3D key={idx} direction="right" delay={idx * 0.15}>
                        <Card3D>
                          <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-amber-100 group-hover:bg-amber-500 text-amber-800 group-hover:text-slate-950 flex items-center justify-center mb-4 transition-colors shadow-sm">
                              <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Card3D>
                      </Reveal3D>
                    );
                  })}
                </div>
              </ParallaxLayer>
            </div>

          </div>
        </div>
      </ScrollSection>
    </section>
  );
}

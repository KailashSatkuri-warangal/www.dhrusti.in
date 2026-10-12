"use client";

import Link from "next/link";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { 
  ScrollSection, 
  ParallaxLayer, 
  MaskRevealImage 
} from "@/components/scroll/ScrollPrimitives";
import { FadeInView } from "@/components/animations/AnimationPrimitives";
import { Card3D } from "@/components/ui/Motion3D";

export default function HomeAboutSection() {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200 overflow-hidden">
      <ScrollSection enterEffect="fade-rise" exitEffect="fade-back">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Authentic gap.jpg with Mask Reveal & Parallax Badge */}
            <div className="lg:col-span-6 relative">
              <Card3D>
                <div className="relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 p-4 shadow-xl">
                  <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden">
                    <MaskRevealImage
                      src="/images/gap.jpg"
                      alt="CCTV Camera in Warangal and Hanamkonda - Dhrusti IT Security"
                      shape="vertical"
                      priority
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating Experience Badge with Counter-Parallax Depth */}
                    <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-auto">
                      <ParallaxLayer speed={-0.15}>
                        <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center gap-4 transition-transform duration-300 hover:scale-[1.02]">
                          <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold text-xl font-mono shrink-0 shadow-md">
                            20+
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">Years of Security Excellence</h4>
                            <p className="text-xs text-slate-500">Pioneering CCTV since 2003 • Trademark Registered 2020</p>
                          </div>
                        </div>
                      </ParallaxLayer>
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>

            {/* Right Column: Synchronized Storytelling Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <FadeInView delay={0.1} y={20}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  About Us
                </div>
              </FadeInView>

              <FadeInView delay={0.18} y={25}>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  <span>CCTV Camera in Hanamkonda &amp; Warangal | </span>
                  <span className="text-gradient-gold">Securing Every Angle, Protecting Every Moment</span>
                </h2>
              </FadeInView>

              <FadeInView delay={0.25} y={20}>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>DHRUSTI IT SECURITY PRIVATE LIMITED</strong> is a Private Limited firm established in the year 2021 by <strong>Mr. Vidiyala Noothan Kumar</strong> from Warangal. Earlier, it was known as <strong>DHRUSTI IT &amp; SECURITY CENTRE</strong>, through which we started the CCTV business in Warangal in the year 2003.
                </p>
              </FadeInView>

              <FadeInView delay={0.3} y={20}>
                <p className="text-slate-700 text-sm leading-relaxed">
                  We were the <strong>first to start the CCTV business in Warangal</strong> and also the first to integrate CCTV systems with mobile phones, desktops, and laptops for remote access through the internet.
                </p>
              </FadeInView>

              <FadeInView delay={0.35} y={20}>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200 space-y-3 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Biometric attendance systems for organizations with user-friendly cloud &amp; on-premise software solutions.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Intercom &amp; EPABX systems for shopping malls, apartments, hospitals, hotels, and universities.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Security alarm and fire alarm systems for jewellery showrooms, gold shops, schools, and commercial premises.</span>
                  </div>
                </div>
              </FadeInView>

              <FadeInView delay={0.4} y={15}>
                <p className="text-xs font-mono text-amber-800 font-bold">
                  ★ Trademark Registration Received for Brand DHRUSTI in 2020.
                </p>
              </FadeInView>

              <FadeInView delay={0.45} y={15}>
                <div className="pt-2">
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    More About Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeInView>

            </div>
          </div>
        </div>
      </ScrollSection>
    </section>
  );
}

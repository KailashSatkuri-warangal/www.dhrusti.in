"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE_INFO, CERTIFICATIONS } from "@/lib/data/siteData";
import { 
  Award, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  MapPin, 
  Building2 
} from "lucide-react";
import { Card3D, Reveal3D } from "@/components/ui/Motion3D";

export default function FounderLegacySection() {
  return (
    <section className="py-24 bg-[#f8fafc] relative border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Founder Story & Credibility */}
          <Reveal3D direction="left" className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest shadow-sm">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              Founder & Legacy • Since 2003
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pioneering CCTV & Digital Security in <span className="text-gradient-gold">Telangana for 20+ Years</span>
            </h2>

            <p className="text-slate-700 text-sm leading-relaxed">
              <strong className="text-slate-900 font-bold">Mr. Vidiyala Noothan Kumar</strong>, Founder and Managing Director of Dhrusti IT Security Private Limited, began his technology journey in 1997 by establishing NEWWAY COMPUTERS—the first computer hardware training institute in Warangal.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Following 9+ years managing computerization, IT networking, and ATM security installations for the <strong className="text-slate-900 font-bold">State Bank of Hyderabad (SBH)</strong> across 10 districts, he founded Dhrusti in 2003. He was the <em>very first engineer in Warangal to integrate CCTV surveillance with mobile phones and laptops for remote streaming over the internet</em>.
            </p>

            {/* Key Historic Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-amber-800 font-mono text-xs uppercase font-bold mb-1">
                  • Mega Event Milestone
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">37th National Games Goa 2023</h4>
                <p className="text-xs text-slate-500">Deployed and managed over 800+ live CCTV surveillance cameras for the National Games.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-amber-800 font-mono text-xs uppercase font-bold mb-1">
                  • Government & Police Trust
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Warangal Police, KUDA & GWMC</h4>
                <p className="text-xs text-slate-500">Trusted technical partner for municipal security, temple jatharas, and police control rooms.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Read Complete Company History <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal3D>

          {/* Right Column: Founder Portrait & Official Certifications */}
          <Reveal3D direction="right" className="lg:col-span-5 space-y-6">
            <Card3D>
              <div className="relative rounded-3xl overflow-hidden bg-white p-6 border border-slate-200 shadow-xl">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 shadow-md">
                  <Image
                    src="/images/CCTV-Camera-Dealer-in-Warangal.jpg"
                    alt="Mr. Vidiyala Noothan Kumar - Founder Dhrusti IT Security"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest font-bold block">
                      FOUNDER & MANAGING DIRECTOR
                    </span>
                    <h4 className="text-lg font-bold text-white">Mr. Vidiyala Noothan Kumar</h4>
                    <p className="text-xs text-slate-200">Pioneer of Internet CCTV Surveillance in Telangana</p>
                  </div>
                </div>

                {/* Badges / Accreditation Mini-Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">CREDAI Member</span>
                      <span className="text-[10px] text-slate-500">Hyderabad Chapter</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <Award className="w-6 h-6 text-amber-600 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">CP Plus Certified</span>
                      <span className="text-[10px] text-slate-500">Authorized Partner</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </Reveal3D>
        </div>
      </div>
    </section>
  );
}

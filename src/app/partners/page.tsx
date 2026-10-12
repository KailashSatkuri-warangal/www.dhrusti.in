"use client";

import Image from "next/image";
import Link from "next/link";
import { PARTNERS } from "@/lib/data/clientsData";
import { Handshake, Award, ShieldCheck, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { Card3D } from "@/components/ui/Motion3D";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";
import { SITE_INFO } from "@/lib/data/siteData";

export default function PartnersPage() {
  return (
    <div className="py-16 md:py-24 bg-[#f8fafc] text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Handshake className="w-3.5 h-3.5 text-amber-600" />
            Authorized Technology Ecosystem
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Global OEM Brands & <span className="text-gradient-gold">Authorized Partners</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            We partner with the world's premier security equipment manufacturers to ensure 100% genuine warranties, direct OEM firmware updates, and wholesale price advantages for our clients.
          </p>
        </div>
      </div>

      {/* OEM Tier Status Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Direct OEM Authorization</h4>
              <p className="text-xs text-slate-500 mt-1">Official system integrator for CP PLUS, Hikvision, Dahua, Matrix, and Trueview.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">100% Genuine Hardware</h4>
              <p className="text-xs text-slate-500 mt-1">Direct from manufacturers with valid factory serial numbers and hassle-free warranty.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Bulk Wholesale Pricing</h4>
              <p className="text-xs text-slate-500 mt-1">Competitive distribution rates for enterprise buyers, builders, and corporate accounts.</p>
            </div>
          </div>
        </div>
      </div>

      <SectionTransitionDivider variant="amber-beam" className="mb-16" />

      {/* Partners Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS.map((partner, idx) => (
            <Card3D key={idx} className="h-full">
              <div
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between shadow-sm group h-full"
              >
                <div>
                  <div className="relative w-full h-28 mb-6 flex items-center justify-center p-3 bg-slate-50/50 rounded-2xl">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={180}
                      height={80}
                      className="max-h-20 max-w-[160px] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-md bg-amber-50 text-[10px] font-mono font-bold text-amber-800 uppercase mb-3">
                    {partner.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Authorized Partner
                  </span>
                  <Link 
                    href="/get-a-quote" 
                    className="text-amber-600 font-bold hover:underline"
                  >
                    Inquire Pricing &rarr;
                  </Link>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>

      <SectionTransitionDivider variant="grid-glow" className="mb-16" />

      {/* OEM Supply & Tender Consultation Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 md:p-10 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">
              • Enterprise & Wholesale Inquiries
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-white">
              Looking for Bulk OEM CCTV Procurement?
            </h3>
            <p className="text-xs text-slate-400 mt-2 max-w-lg leading-relaxed">
              We provide authorized dealer pricing, tender documentation, warranty certificates, and batch dispatch across Telangana and Andhra Pradesh.
            </p>
          </div>

          <Link
            href="/get-a-quote"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 shadow-lg"
          >
            Request OEM Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}


"use client";

import Image from "next/image";
import Link from "next/link";
import { CLIENTS } from "@/lib/data/clientsData";
import { useState } from "react";
import { Users, Award, ShieldCheck, ArrowRight, Landmark, Building2, ShoppingBag, HeartPulse, GraduationCap } from "lucide-react";
import { Card3D } from "@/components/ui/Motion3D";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";

export default function ClientsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", title: "All 38+ Premier Clients", count: CLIENTS.length },
    { id: "government", title: "Government & Police", count: CLIENTS.filter(c => c.category === "government").length },
    { id: "temple", title: "Temples & Cultural Jatharas", count: CLIENTS.filter(c => c.category === "temple").length },
    { id: "corporate", title: "Banking & Financial", count: CLIENTS.filter(c => c.category === "corporate").length },
    { id: "retail", title: "Jewellery & Shopping Malls", count: CLIENTS.filter(c => c.category === "retail").length },
    { id: "healthcare", title: "Hospitals & Healthcare", count: CLIENTS.filter(c => c.category === "healthcare").length },
    { id: "education", title: "Universities & Colleges", count: CLIENTS.filter(c => c.category === "education").length }
  ];

  const filtered = selectedCategory === "all"
    ? CLIENTS
    : CLIENTS.filter((c) => c.category === selectedCategory);

  return (
    <div className="py-16 md:py-24 bg-[#f8fafc] text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            Client Directory
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Trusted by 1,000+ <span className="text-gradient-gold">Government, Corporate & Retail Clients</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            Dhrusti IT Security has been the trusted surveillance partner for over two decades across Telangana, Andhra Pradesh, and National event venues in Goa.
          </p>
        </div>
      </div>

      {/* Featured National Games Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-amber-300 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-mono font-bold uppercase shadow-sm inline-flex items-center gap-1.5">
                ★ 37th National Games Goa (2023)
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                800+ Live High-Definition Cameras Deployed
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Contracted to provide complete turnkey security surveillance for the 37th National Games across multiple stadiums in Goa. Full live police control room feeds and 24/7 dedicated technician support.
              </p>
            </div>
            <div className="lg:col-span-4 text-center p-6 rounded-2xl bg-amber-50 border border-amber-200 shadow-sm">
              <span className="text-5xl font-extrabold text-gradient-gold font-mono block mb-1">800+</span>
              <span className="text-xs text-slate-700 font-bold uppercase tracking-wider">Live Cameras Deployed</span>
            </div>
          </div>
        </div>
      </div>

      <SectionTransitionDivider variant="amber-beam" className="mb-12" />

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-amber-600 text-white font-bold shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.title} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Clients Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((client, idx) => (
            <Card3D key={idx} className="h-full">
              <div
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col items-center justify-between text-center group shadow-sm h-full"
              >
                <div className="relative w-full h-24 mb-3 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all p-2">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={70}
                    className="max-h-16 max-w-[130px] object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {client.name}
                  </h4>
                  {client.highlight && (
                    <span className="text-[10px] font-mono text-slate-500 block mt-1">
                      {client.highlight}
                    </span>
                  )}
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>

      <SectionTransitionDivider variant="grid-glow" className="mb-16" />

      <TestimonialsSection />
    </div>
  );
}


"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CLIENTS, PARTNERS, GALLERY_ITEMS } from "@/lib/data/clientsData";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";
import { 
  Award, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  Image as ImageIcon, 
  Handshake, 
  Users,
  MapPin,
  ArrowRight
} from "lucide-react";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<"clients" | "gallery" | "partners">("clients");
  const [selectedClientCategory, setSelectedClientCategory] = useState<string>("all");

  const clientCategories = [
    { id: "all", title: "All 1,000+ Clients" },
    { id: "government", title: "Government & Police" },
    { id: "corporate", title: "Banking & Finance" },
    { id: "retail", title: "Jewellery & Retail" },
    { id: "healthcare", title: "Hospitals & Healthcare" },
    { id: "temple", title: "Temples & Cultural" }
  ];

  const filteredClients = selectedClientCategory === "all"
    ? CLIENTS
    : CLIENTS.filter((c) => c.category === selectedClientCategory);

  return (
    <div className="py-16 md:py-24 bg-[#f8fafc] text-slate-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            Proven Client & Partner Ecosystem
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Portfolio, Clients & <span className="text-gradient-gold">Authorized Partners</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            From deploying 800+ cameras for the 37th National Games in Goa to safeguarding landmark shrines, banks, and authorized OEM partnerships across Telangana & AP.
          </p>
        </div>
      </div>

      {/* Main Section Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="flex flex-wrap gap-3 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab("clients")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-mono text-xs uppercase tracking-wider transition-all ${
              activeTab === "clients"
                ? "bg-amber-600 text-white font-bold shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Users className="w-4 h-4" /> Clients (1,000+)
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-mono text-xs uppercase tracking-wider transition-all ${
              activeTab === "gallery"
                ? "bg-amber-600 text-white font-bold shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <ImageIcon className="w-4 h-4" /> On-Site Gallery
          </button>

          <button
            onClick={() => setActiveTab("partners")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-mono text-xs uppercase tracking-wider transition-all ${
              activeTab === "partners"
                ? "bg-amber-600 text-white font-bold shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Handshake className="w-4 h-4" /> Brand Partners
          </button>
        </div>
      </div>

      {/* TAB 1: CLIENTS */}
      {activeTab === "clients" && (
        <>
          {/* Featured National Games Hero Box */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-amber-300 relative overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <span className="px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-mono font-bold uppercase shadow-sm">
                    ★ Mega Event Milestone Project
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                    37th National Games Goa (2023)
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Contracted to provide complete turnkey security surveillance for the 37th National Games held across multiple stadiums in Goa in 2023. Over <strong className="text-amber-700 font-bold">800+ High-Definition CCTV cameras</strong> were deployed with dedicated command-and-control monitoring and live police feeds.
                  </p>
                </div>
                <div className="lg:col-span-4 text-center p-6 rounded-2xl bg-amber-50 border border-amber-200 shadow-sm">
                  <span className="text-5xl font-extrabold text-gradient-gold font-mono block mb-1">800+</span>
                  <span className="text-xs text-slate-700 font-bold uppercase tracking-wider">Live Cameras Deployed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Filter Pills */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
            <div className="flex flex-wrap gap-2">
              {clientCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedClientCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all ${
                    selectedClientCategory === cat.id
                      ? "bg-amber-100 text-amber-900 font-bold border border-amber-300"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Clients Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredClients.map((client, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col items-center justify-between text-center group shadow-sm"
                >
                  <div className="relative w-full h-20 mb-3 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={140}
                      height={60}
                      className="max-h-14 max-w-[120px] object-contain"
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
              ))}
            </div>
          </div>
        </>
      )}

      {/* TAB 2: GALLERY */}
      {activeTab === "gallery" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[10px] font-mono font-bold text-amber-800 uppercase shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-amber-700 font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5" /> {item.location}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: PARTNERS */}
      {activeTab === "partners" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between shadow-sm group"
              >
                <div>
                  <div className="relative w-full h-24 mb-4 flex items-center justify-center p-2">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={70}
                      className="max-h-16 max-w-[140px] object-contain"
                    />
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-amber-50 text-[10px] font-mono font-bold text-amber-800 uppercase mb-2">
                    {partner.category}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Testimonials & IPS Commendations */}
      <SectionTransitionDivider variant="amber-beam" className="my-16" />
      <TestimonialsSection />
    </div>
  );
}

"use client";

import { useState } from "react";
import { BRANCHES, BranchOffice } from "@/lib/data/siteData";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Navigation, 
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { Card3D, Reveal3D } from "@/components/ui/Motion3D";
import { ScrollSection } from "@/components/scroll/ScrollPrimitives";

export default function MultiBranchSection() {
  const [activeBranchId, setActiveBranchId] = useState<string>("warangal-hq");

  const currentBranch = BRANCHES.find((b) => b.id === activeBranchId) || BRANCHES[0];

  return (
    <section className="py-24 bg-[#f8fafc] relative border-t border-slate-200">
      <ScrollSection enterEffect="fade-rise" exitEffect="scale-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal3D direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            Physical Experience Centers
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Branches & <span className="text-gradient-gold">Support Centers</span>
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Visit our experience centers in Hyderabad and Warangal to test live 4K cameras, biometric door locks, and speak directly with our surveillance specialists.
          </p>
        </Reveal3D>

        {/* Branch Tabs */}
        <Reveal3D direction="up" delay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {BRANCHES.map((b) => (
            <button
              key={b.id}
              onClick={() => setActiveBranchId(b.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                activeBranchId === b.id
                  ? "bg-amber-50 border-amber-500 text-slate-900 shadow-md font-bold"
                  : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin className={`w-4 h-4 ${activeBranchId === b.id ? "text-amber-600" : "text-slate-400"}`} />
                <span className="text-xs font-bold font-mono tracking-wider">{b.city}</span>
              </div>
              <p className="text-xs font-semibold text-slate-900 line-clamp-1">{b.name}</p>
            </button>
          ))}
        </Reveal3D>

        {/* Active Branch Card + Embedded Map */}
        <Reveal3D direction="up" delay={0.2}>
          <Card3D>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl">
              <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-[11px] font-mono font-bold uppercase">
                    {currentBranch.type}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {currentBranch.name}
                  </h3>

                  <div className="space-y-3 text-xs text-slate-700">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{currentBranch.address}, {currentBranch.city}, {currentBranch.state} - {currentBranch.pincode}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                      <a href={`tel:${currentBranch.phone.replace(/\s+/g, '')}`} className="font-mono text-slate-900 hover:text-amber-700 transition-colors font-bold">
                        {currentBranch.phone} {currentBranch.altPhone && ` / ${currentBranch.altPhone}`}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                      <a href={`mailto:${currentBranch.email}`} className="text-slate-700 hover:text-amber-700 transition-colors">
                        {currentBranch.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="font-mono text-slate-600">{currentBranch.workingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${currentBranch.phone.replace(/\s+/g, '')}`}
                    className="px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Phone className="w-4 h-4" /> Call Branch
                  </a>

                  <a
                    href={`https://maps.google.com/?q=${currentBranch.lat},${currentBranch.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-xl bg-slate-100 border border-slate-300 hover:border-amber-500 text-slate-900 font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Navigation className="w-4 h-4" /> Get Directions <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="lg:col-span-7 h-80 lg:h-auto min-h-[320px] rounded-2xl overflow-hidden border border-slate-200 relative shadow-sm">
                <iframe
                  src={currentBranch.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${currentBranch.name} Location Map`}
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card3D>
        </Reveal3D>
        </div>
      </ScrollSection>
    </section>
  );
}

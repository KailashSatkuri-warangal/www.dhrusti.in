"use client";

import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data/servicesData";
import { 
  ShieldCheck, 
  Wrench, 
  Cpu, 
  Radio, 
  Video, 
  Clock, 
  MonitorCheck, 
  PhoneCall, 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  LucideIcon
} from "lucide-react";
import { Card3D, Reveal3D } from "@/components/ui/Motion3D";
import { ScrollSection } from "@/components/scroll/ScrollPrimitives";

const ICON_MAP: Record<string, LucideIcon> = {
  ShieldCheck,
  Wrench,
  Cpu,
  Radio,
  Video,
  Clock,
  MonitorCheck,
  PhoneCall,
};

export default function ServicesGridSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative border-t border-slate-200">
      <ScrollSection enterEffect="fade-rise" exitEffect="scale-down">
        {/* Decorative architectural grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <Reveal3D direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Comprehensive Surveillance Engineering
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our 9 Core <span className="text-gradient-gold">Security & IT Services</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
            From single-camera home security to municipal command centers, we provide end-to-end design, installation, 24/7 maintenance, and cloud intercom infrastructure.
          </p>
        </Reveal3D>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || ShieldCheck;
            return (
              <Reveal3D key={service.id} delay={index * 0.07} direction="up">
                <Card3D className="h-full">
                  <div className="h-full rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group">
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 bg-slate-100 border border-slate-200">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                        <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 flex items-center justify-center text-amber-600 shadow-md">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <span className="text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm">
                            Service #{String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Title & Desc */}
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-1.5 mb-6 pt-2 border-t border-slate-100">
                        {service.highlights.slice(0, 2).map((item, i) => (
                          <li key={i} className="text-[11px] text-slate-700 flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <Link
                        href={`/services#${service.id}`}
                        className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 group/link"
                      >
                        Explore Scope <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        href={`/get-a-quote?service=${service.id}`}
                        className="px-3.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-600 text-amber-900 hover:text-white border border-amber-200 hover:border-amber-600 text-xs font-semibold transition-all shadow-sm"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </Card3D>
              </Reveal3D>
            );
          })}
        </div>
      </div>
      </ScrollSection>
    </section>
  );
}

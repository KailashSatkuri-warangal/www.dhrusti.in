"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/data/servicesData";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ScrollSection, ZoomImage } from "@/components/scroll/ScrollPrimitives";

export default function ServicesClientList() {
  return (
    <div className="space-y-14 mb-24">
      {SERVICES.map((service, index) => (
        <ScrollSection
          key={service.id}
          enterEffect="fade-rise"
          exitEffect="scale-down"
          className="scroll-mt-28"
        >
          <div
            id={service.id}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-amber-400/60 transition-all duration-300 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-mono font-bold uppercase">
                  Service 0{index + 1}
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 group-hover:text-amber-800 transition-colors">
                  {service.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono text-amber-800 font-bold uppercase tracking-wider">
                      • Service Highlights:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {service.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono text-amber-800 font-bold uppercase tracking-wider">
                      • Scope of Execution:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {service.scopeOfWork.map((s, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href={`/get-a-quote?service=${service.id}`}
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Book Service / AMC <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/services/${service.slug}`}
                    className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-all duration-300 border border-slate-200"
                  >
                    View Details &amp; Tech Specs
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative w-full h-72 md:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <ZoomImage
                  src={service.image}
                  alt={service.title}
                  startScale={1.12}
                  endScale={1.0}
                  className="object-cover filter contrast-105"
                  containerClassName="relative w-full h-full"
                />
              </div>
            </div>
          </div>
        </ScrollSection>
      ))}
    </div>
  );
}

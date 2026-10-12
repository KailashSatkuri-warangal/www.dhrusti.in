"use client";

import Image from "next/image";
import Link from "next/link";
import { SECURITY_SOLUTIONS } from "@/lib/data/servicesData";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Card3D, Reveal3D } from "@/components/ui/Motion3D";

export default function SecuritySolutionsSection() {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal3D direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            Tailored Industry Architecture
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered For <span className="text-gradient-gold">Every Scale & Sector</span>
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Every environment has unique security threats. Our specialized packages combine smart cameras, access gates, and alarm integration.
          </p>
        </Reveal3D>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SECURITY_SOLUTIONS.map((sol, idx) => (
            <Reveal3D key={sol.id} delay={idx * 0.1} direction={idx % 2 === 0 ? "left" : "right"}>
              <Card3D className="h-full">
                <div
                  id={sol.id}
                  className="h-full rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl scroll-mt-28"
                >
                  <div className="relative w-full h-60 overflow-hidden">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-[10px] font-mono text-amber-300 uppercase font-bold tracking-widest block mb-1">
                        • Ideal For: {sol.idealFor}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {sol.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 pt-4 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {sol.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {sol.features.map((feat, i) => (
                          <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/get-a-quote?solution=${sol.id}`}
                      className="w-full py-3.5 rounded-xl bg-slate-100 border border-slate-200 group-hover:border-amber-500 text-slate-900 group-hover:bg-amber-600 group-hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-center shadow-sm cursor-pointer"
                    >
                      Configure Custom Plan <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Card3D>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}

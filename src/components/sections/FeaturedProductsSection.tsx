"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, Product } from "@/lib/data/productsData";
import { 
  Eye, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  RotateCw,
  Box,
  Sparkles
} from "lucide-react";
import Interactive3DModal from "@/components/ui/Interactive3DModal";
import { Card3D, Reveal3D } from "@/components/ui/Motion3D";
import Magnetic from "@/components/animations/Magnetic";
import { ScrollSection } from "@/components/scroll/ScrollPrimitives";

export default function FeaturedProductsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  // Filter 4-5 top featured flagship cameras & hardware
  const featuredIds = [
    "solar-4g-ptz-camera",
    "4k-ai-dome-camera",
    "full-color-night-bullet",
    "wireless-smart-ptz-camera",
    "32ch-ai-nvr"
  ];

  const featuredList = PRODUCTS.filter((p) => featuredIds.includes(p.id));
  const displayProducts = activeTab === "all"
    ? (featuredList.length > 0 ? featuredList : PRODUCTS.slice(0, 5))
    : PRODUCTS.filter((p) => p.category === activeTab).slice(0, 5);

  return (
    <section className="py-24 bg-white relative border-t border-slate-200 overflow-hidden">
      <ScrollSection enterEffect="perspective-reveal" exitEffect="fade-back">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <Reveal3D direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Featured 3D Camera Systems
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Featured 360° Cameras &amp; <span className="text-gradient-gold">Smart Hardware</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2 max-w-xl">
              Inspect our 5 flagship surveillance cameras in interactive 3D Orbit. From wire-free 4K solar PTZ cameras to AI neural dome optics.
            </p>
          </Reveal3D>

          {/* Filter Tabs */}
          <Reveal3D direction="down" className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Featured (5)" },
              { id: "cctv", label: "CCTV Cameras" },
              { id: "recorders", label: "AI NVRs" },
              { id: "access-control", label: "Access & VDP" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all uppercase cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-amber-600 text-white font-bold shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </Reveal3D>
        </div>

        {/* 4-5 Featured Cameras Grid with 3D Tilt Hover & Orbit Launcher */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {displayProducts.map((product, idx) => (
            <Reveal3D key={product.id} delay={idx * 0.08} direction="up">
              <Card3D className="h-full">
                <div className="h-full group rounded-3xl bg-[#f8fafc] border border-slate-200/90 hover:border-amber-400 hover:bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-sm hover:shadow-xl p-5">
                  
                  {/* Top Badge & 3D Interactive Button (Only for CCTV cameras) */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-1 rounded-md bg-amber-100 border border-amber-200 text-[10px] font-mono font-bold text-amber-900 uppercase">
                        {product.badge}
                      </span>
                      
                      {product.category === "cctv" ? (
                        <button
                          onClick={() => setModalProduct(product)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-200 hover:bg-amber-500 hover:text-white text-slate-800 text-[10px] font-mono font-bold transition-all shadow-sm cursor-pointer"
                          title="Open interactive 3D Orbit View"
                        >
                          <Box className="w-3 h-3 text-amber-600 group-hover:text-white" /> 3D View
                        </button>
                      ) : product.resolution ? (
                        <span className="text-[10px] font-mono text-slate-500 font-bold">
                          {product.resolution}
                        </span>
                      ) : null}
                    </div>

                    {/* Hardware Visual */}
                    <div 
                      onClick={() => product.category === "cctv" && setModalProduct(product)}
                      className={`relative w-full h-44 my-3 flex items-center justify-center p-3 bg-white rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow ${
                        product.category === "cctv" ? "cursor-pointer" : ""
                      }`}
                    >
                      <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Content & Specs */}
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-1 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-3">
                      {product.tagline}
                    </p>

                    <ul className="space-y-1 mb-4">
                      {product.keyFeatures.slice(0, 2).map((feat, i) => (
                        <li key={i} className="text-[10px] text-slate-600 flex items-start gap-1">
                          <CheckCircle2 className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-3 border-t border-slate-200/60">
                    {product.category === "cctv" && (
                      <button
                        onClick={() => setModalProduct(product)}
                        className="w-full py-2 rounded-xl bg-slate-100 hover:bg-amber-50 text-slate-800 hover:text-amber-800 border border-slate-200 text-[10px] font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <RotateCw className="w-3 h-3 text-amber-600" /> Orbit 360°
                      </button>
                    )}

                    <Link
                      href={`/get-a-quote?product=${product.id}`}
                      className={`w-full rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-[10px] tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 text-center shadow-sm ${
                        product.category === "cctv" ? "py-2" : "py-3"
                      }`}
                    >
                      Get Quote <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                </div>
              </Card3D>
            </Reveal3D>
          ))}
        </div>

        {/* View Full Catalog Link */}
        <div className="text-center mt-12">
          <Magnetic strength={0.25}>
            <Link
              href="/cctv-cameras"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-slate-100 border border-slate-200 hover:border-amber-500 text-slate-900 hover:text-amber-700 font-bold text-xs tracking-wider uppercase transition-all shadow-sm"
            >
              Explore Complete 13-Camera Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </Magnetic>
        </div>

      </div>
      </ScrollSection>

      {/* 3D Orbit Modal */}
      {modalProduct && (
        <Interactive3DModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
        />
      )}
    </section>
  );
}

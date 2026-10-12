"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, Product, CCTV_FAQS } from "@/lib/data/productsData";
import { Camera, CheckCircle2, ArrowRight, RotateCw, Box, ChevronDown, ShieldCheck, Cpu } from "lucide-react";
import Interactive3DModal from "@/components/ui/Interactive3DModal";
import { Card3D } from "@/components/ui/Motion3D";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";
import { ScrollSection } from "@/components/scroll/ScrollPrimitives";

export default function CCTVCamerasPage() {
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const cctvProducts = PRODUCTS.filter((p) => p.category === "cctv" || p.category === "recorders");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="py-16 md:py-24 bg-[#f8fafc] text-slate-900 min-h-screen">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            CCTV Cameras & Recorders Catalog
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            CCTV CAMERAS in <span className="text-gradient-gold">Hyderabad, Warangal & Hanamkonda</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            Get reliable CCTV Camera System Installation in Kondapur, Hyderabad, Warangal, and Hanamkonda with Dhrusti. High-definition 4K, 5MP, Solar 4G, and motorized 360° PTZ cameras engineered for round-the-clock defense.
          </p>
        </div>
      </div>

      {/* 13 Products Grid with 3D Interaction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cctvProducts.map((product) => (
            <Card3D key={product.id} className="h-full">
              <div className="rounded-3xl bg-white border border-slate-200 hover:border-amber-400 overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl h-full">
                <div>
                  <div className="p-5 pb-0 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-mono font-bold text-amber-800 uppercase">
                      {product.badge}
                    </span>
                    {product.category === "cctv" ? (
                      <button
                        onClick={() => setModalProduct(product)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-amber-500 hover:text-white border border-slate-200 text-slate-700 text-[10px] font-mono font-bold transition-all shadow-sm cursor-pointer"
                      >
                        <Box className="w-3 h-3 text-amber-600 group-hover:text-white" /> 3D View
                      </button>
                    ) : product.resolution ? (
                      <span className="text-[10px] font-mono text-slate-500 font-bold">
                        {product.resolution}
                      </span>
                    ) : null}
                  </div>

                  <div 
                    onClick={() => product.category === "cctv" && setModalProduct(product)}
                    className={`relative w-full h-52 flex items-center justify-center p-4 bg-slate-50/50 ${
                      product.category === "cctv" ? "cursor-pointer" : ""
                    }`}
                  >
                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      {product.keyFeatures.slice(0, 3).map((feat, i) => (
                        <div key={i} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 space-y-2">
                  {product.category === "cctv" && (
                    <button
                      onClick={() => setModalProduct(product)}
                      className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-amber-50 text-slate-800 hover:text-amber-900 border border-slate-200 text-[11px] font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <RotateCw className="w-3.5 h-3.5 text-amber-600" /> Interactive 3D Orbit
                    </button>
                  )}

                  <Link
                    href={`/get-a-quote?product=${product.id}`}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm text-center group-hover:bg-amber-600"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>

      <SectionTransitionDivider variant="amber-beam" className="mb-16" />

      {/* Comprehensive Original Article Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Professional CCTV Camera Systems: Unmatched Peace of Mind
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            When it comes to securing your property, nothing offers peace of mind quite like a
            reliable CCTV camera system. Today’s surveillance cameras do more than just record—they act as 
            a powerful deterrent, provide real-time monitoring, and capture high-definition footage that can be 
            accessed from anywhere. Whether it’s for your home, office, retail store, or warehouse, CCTV cameras
            are a critical layer of protection.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            We offer a wide range of CCTV camera types tailored to suit different environments—dome
            cameras for discreet indoor monitoring, bullet cameras for long-range coverage, PTZ (Pan-Tilt-Zoom)
            for flexible views, and thermal cameras for low-light or harsh environments. Each camera is equipped with
            features such as motion detection, night vision, cloud storage,
            and smart alerts to give you control even when you’re away.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our expert team ensures professional installation and optimal placement for maximum coverage and efficiency. With mobile app integration and easy-to-use interfaces, you can check live feeds, review recorded footage, and manage settings effortlessly.
            CCTV cameras are not just about watching—they’re about preventing. With smart surveillance, you gain the power to act before incidents happen. Protect what matters most with a system designed for modern-day threats.
          </p>
        </div>
      </div>

      <SectionTransitionDivider variant="grid-glow" className="mb-16" />

      {/* Frequently Asked Questions (FAQ) Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-24">
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-2">Frequently Asked Questions</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Got Questions Regarding CCTV Cameras?
          </h2>
        </div>

        <div className="space-y-4">
          {CCTV_FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  <span className="text-sm md:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3D Orbit Inspection Modal */}
      {modalProduct && (
        <Interactive3DModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
        />
      )}
    </div>
  );
}

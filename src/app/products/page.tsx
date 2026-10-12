"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, Product } from "@/lib/data/productsData";
import { 
  Camera, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  RotateCw,
  Box
} from "lucide-react";
import Interactive3DModal from "@/components/ui/Interactive3DModal";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const filtered = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 md:py-24 bg-[#f8fafc] text-slate-900 min-h-screen">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            Hardware &amp; Systems Catalog
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Advanced 360° Surveillance &amp; <span className="text-gradient-gold">Access Hardware</span>
          </h1>
          <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
            Every camera and access terminal is certified for 24/7 continuous operation, equipped with optical anti-tamper sensors, crystal night vision, and instant mobile pairing.
          </p>
        </motion.div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-white border border-slate-200 shadow-sm"
        >
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {[
              { id: "all", label: "All Products" },
              { id: "cctv", label: "CCTV Cameras" },
              { id: "access-control", label: "Biometrics & Access" },
              { id: "recorders", label: "NVR & Recorders" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-amber-600 text-white font-bold shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search camera or feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </motion.div>
      </div>

      {/* Product Catalog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filtered.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400 overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-2xl hover:-translate-y-1"
                data-cursor={product.category === "cctv" ? "explore" : undefined}
              >
                <div>
                  {/* Visual Header */}
                  <div className="p-6 pb-2 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-[10px] font-mono font-bold text-amber-800 uppercase">
                      {product.badge}
                    </span>
                    
                    {product.category === "cctv" ? (
                      <button
                        onClick={() => setModalProduct(product)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 hover:bg-amber-500 hover:text-white border border-amber-200 text-amber-800 text-[10px] font-mono font-bold transition-all shadow-sm cursor-pointer"
                        title="Open Interactive 3D Orbit View"
                      >
                        <Box className="w-3 h-3 text-amber-600 group-hover:text-white" /> 3D View
                      </button>
                    ) : product.resolution ? (
                      <span className="text-[11px] font-mono text-slate-500 font-bold">
                        {product.resolution}
                      </span>
                    ) : null}
                  </div>

                  <div 
                    onClick={() => product.category === "cctv" && setModalProduct(product)}
                    className={`relative w-full h-56 flex items-center justify-center p-4 ${
                      product.category === "cctv" ? "cursor-pointer" : ""
                    }`}
                  >
                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 pt-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      <span className="text-[10px] font-mono text-amber-800 uppercase font-bold tracking-wider block">
                        • Key Specifications:
                      </span>
                      {product.keyFeatures.map((feat, i) => (
                        <div key={i} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Spec Chips */}
                    {product.specs && Object.keys(product.specs).length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {Object.entries(product.specs).slice(0, 3).map(([key, val], sIdx) => (
                          <span key={sIdx} className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700">
                            {key}: <strong className="text-slate-900">{val}</strong>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 pt-0 space-y-2">
                  {product.category === "cctv" && (
                    <button
                      onClick={() => setModalProduct(product)}
                      className="w-full py-2 rounded-xl bg-slate-100 hover:bg-amber-50 text-slate-800 hover:text-amber-800 border border-slate-200 text-[11px] font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <RotateCw className="w-3.5 h-3.5 text-amber-600" /> Interactive 3D Orbit
                    </button>
                  )}

                  <Link
                    href={`/get-a-quote?product=${product.id}`}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm text-center hover:shadow-md"
                  >
                    Request Official Proposal <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <SectionTransitionDivider variant="amber-beam" className="mb-16" />

      {/* Hardware Guarantee & Demo Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest block mb-1">
              • Direct OEM Supply
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Want a Hands-On Camera Demonstration?
            </h3>
            <p className="text-xs text-slate-600 mt-1 max-w-md leading-relaxed">
              Visit our Warangal HQ or Kondapur Hyderabad experience centers to test live night vision, PTZ zoom, and AI motion tracking.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 shadow-sm"
          >
            Visit Experience Center <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 3D Model Modal */}
      {modalProduct && (
        <Interactive3DModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
        />
      )}
    </div>
  );
}

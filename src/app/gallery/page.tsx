"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/data/clientsData";
import { 
  Image as ImageIcon, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ZoomIn, 
  Award, 
  Tv, 
  Eye, 
  Building, 
  Users,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { Card3D } from "@/components/ui/Motion3D";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    { id: "all", title: "All 39 Project Photos", icon: ImageIcon },
    { id: "media", title: "Press & News (Eenadu, Sakshi)", icon: Tv },
    { id: "awards", title: "Awards & CP PLUS Trophies", icon: Award },
    { id: "monitoring", title: "24/7 Command Monitoring", icon: Eye },
    { id: "events", title: "National Games & Jatharas", icon: ShieldCheck },
    { id: "installations", title: "On-Site Deployments", icon: Building },
    { id: "team", title: "Leadership & Engineers", icon: Users }
  ];

  const filteredItems = selectedCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") setActiveLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, filteredItems]);

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  };

  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeLightboxIndex]);

  const currentItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="pt-10 pb-20 md:pt-16 md:pb-28 bg-[#f8fafc] text-slate-900 min-h-screen">
      {/* Header */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 mb-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <ImageIcon className="w-3.5 h-3.5 text-amber-600" />
            Field Operations & Media
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Installation, Award & <span className="text-gradient-gold">Press Gallery</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            Witness our on-site deployments, police department felicitations, newspaper coverage, and command room operations across Telangana and Goa.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 mb-10">
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveLightboxIndex(null);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? "bg-amber-600 text-white font-bold shadow-md shadow-amber-600/20"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.title}
              </button>
            );
          })}
        </div>
      </div>

      <SectionTransitionDivider variant="amber-beam" className="mb-12" />

      {/* 39 Gallery Photos Grid */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredItems.map((item, index) => (
            <Card3D 
              key={item.id} 
              className="h-full"
              onClick={() => setActiveLightboxIndex(index)}
            >
              <div 
                onClick={() => setActiveLightboxIndex(index)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer h-full"
              >
                {/* Image Container */}
                <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/60 text-[10px] font-mono font-bold text-amber-800 uppercase tracking-wider mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Photo #{index + 1}</span>
                    <span className="text-amber-600 group-hover:translate-x-0.5 transition-transform font-bold">
                      Click to expand &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>

      <SectionTransitionDivider variant="grid-glow" className="mb-16" />

      {/* On-Site Verification Consultation Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest block mb-1">
              • Field Proven Engineering
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Need a Site Visit For Your Facility?
            </h3>
            <p className="text-xs text-slate-600 mt-1 max-w-md leading-relaxed">
              We arrange comprehensive property surveys in Hyderabad, Warangal, and Hanamkonda with layout recommendations.
            </p>
          </div>
          <Link
            href="/get-a-quote"
            className="px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 shadow-md"
          >
            Request Free Survey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {currentItem && (
            <motion.div 
              key="gallery-lightbox-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[999999] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setActiveLightboxIndex(null)}
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLightboxIndex(null);
                }}
                aria-label="Close Lightbox"
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center transition-all shadow-xl z-50 cursor-pointer border border-slate-200 hover:scale-105"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous Image"
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center transition-all shadow-xl z-50 cursor-pointer border border-slate-200 hover:scale-105"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next Image"
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center transition-all shadow-xl z-50 cursor-pointer border border-slate-200 hover:scale-105"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* Main Content Modal Card */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 10 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-[55vh] max-h-[500px] bg-slate-100 flex items-center justify-center p-2">
                  <Image
                    src={currentItem.image}
                    alt={currentItem.title}
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
                <div className="p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 font-bold">
                      {currentItem.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold mt-1.5 text-slate-900">{currentItem.title}</h3>
                    <p className="text-xs text-slate-600 mt-1 max-w-xl leading-relaxed">{currentItem.description}</p>
                  </div>
                  <div className="text-right font-mono text-xs text-slate-500 shrink-0 font-bold">
                    {activeLightboxIndex! + 1} / {filteredItems.length}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}


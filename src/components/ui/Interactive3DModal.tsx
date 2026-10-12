"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import { Product } from "@/lib/data/productsData";
import { 
  X, 
  RotateCw, 
  Moon, 
  Sun, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const Realistic3DCameraCanvas = dynamic(
  () => import("@/components/hero/Realistic3DCameraCanvas"),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-80 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-amber-500/20 border-t-amber-600 rounded-full animate-spin" />
          <span className="text-xs font-mono text-slate-500 font-bold tracking-wider uppercase">Loading 3D Model...</span>
        </div>
      </div>
    )
  }
);

interface Interactive3DModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function Interactive3DModal({ product, onClose }: Interactive3DModalProps) {
  const [rotationDeg, setRotationDeg] = useState(0);
  const [isNightMode, setIsNightMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!product) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product || !mounted) return null;

  // Determine matching 3D model archetype
  let modelId = "solar-ptz";
  if (product.id.includes("dual") || product.id.includes("linkage")) {
    modelId = "dual-linkage";
  } else if (product.id.includes("bullet") || product.id.includes("sim") || product.id.includes("poe") || product.id.includes("ip")) {
    modelId = "bullet-ir";
  } else if (product.id.includes("dome") || product.id.includes("panoramic")) {
    modelId = "panoramic-dome";
  } else if (product.id.includes("wifi")) {
    modelId = "wifi-ptz";
  }

  const modalJSX = (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
          aria-label="Close 3D Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 3D WebGL Canvas Section */}
        <div className={`relative flex-1 min-h-[350px] md:min-h-[480px] flex flex-col justify-between p-6 transition-colors duration-500 ${
          isNightMode ? "bg-[#0b1329]" : "bg-[#f8fafc]"
        }`}>
          {/* Top Status */}
          <div className="flex items-center justify-between z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-slate-200 text-[11px] font-mono text-slate-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span className="font-bold text-amber-700">3D WEBGL ENGINE</span>
              <span className="text-slate-300">|</span>
              <span>{rotationDeg}°</span>
            </div>

            <button
              onClick={() => setIsNightMode(!isNightMode)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono uppercase tracking-wider transition-all shadow-sm ${
                isNightMode 
                  ? "bg-cyan-600 text-white font-bold border-cyan-500" 
                  : "bg-white text-slate-700 border-slate-200 hover:border-cyan-600"
              }`}
            >
              {isNightMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5 text-cyan-600" />}
              {isNightMode ? "Daylight Mode" : "Night IR Mode"}
            </button>
          </div>

          {/* 3D Camera Canvas */}
          <div className="relative w-full flex-1 flex items-center justify-center">
            <Realistic3DCameraCanvas
              rotationDeg={rotationDeg}
              isNightMode={isNightMode}
              fovScanning={true}
              modelId={modelId}
            />
          </div>

          {/* Bottom Controls Slider */}
          <div className="z-10 bg-white/90 border border-slate-200 rounded-2xl p-3 shadow-sm flex items-center gap-3">
            <RotateCw className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="text-[11px] font-mono text-slate-600 whitespace-nowrap font-bold">Orbit Angle:</span>
            <input
              type="range"
              min="0"
              max="360"
              value={rotationDeg}
              onChange={(e) => setRotationDeg(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer"
            />
            <span className="text-[11px] font-mono text-slate-900 font-bold w-12 text-right">{rotationDeg}°</span>
          </div>
        </div>

        {/* Right Info Section */}
        <div className="w-full md:w-80 lg:w-96 bg-white p-6 md:p-8 flex flex-col justify-between overflow-y-auto border-t md:border-t-0 md:border-l border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-mono uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              {product.badge}
            </div>

            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
              {product.name}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
              {product.description}
            </p>

            <div className="space-y-2 mb-6">
              <span className="text-[10px] font-mono text-amber-800 uppercase font-bold tracking-wider block">
                • Hardware Highlights:
              </span>
              {product.keyFeatures.map((feat, i) => (
                <div key={i} className="text-[11px] text-slate-600 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Specs List */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="space-y-1.5 mb-6">
                {Object.entries(product.specs).map(([k, v], idx) => (
                  <div key={idx} className="flex items-center justify-between text-[11px] font-mono p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-slate-500">{k}</span>
                    <strong className="text-slate-900 font-bold">{v}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-200">
            <Link
              href={`/get-a-quote?product=${product.id}`}
              onClick={onClose}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md text-center"
            >
              Request Quotation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );

  return createPortal(modalJSX, document.body);
}
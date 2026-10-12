"use client";

import { ShieldCheck } from "lucide-react";

interface SectionSkeletonProps {
  label?: string;
  minHeight?: string;
}

export default function SectionSkeleton({
  label = "INITIALIZING SURVEILLANCE GRID...",
  minHeight = "min-h-[420px]",
}: SectionSkeletonProps) {
  return (
    <div className={`w-full ${minHeight} flex flex-col items-center justify-center p-8 relative overflow-hidden bg-slate-50/60 border-y border-slate-200/50`}>
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* Shimmer sweep animation */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-amber-500/[0.04] to-transparent" />

      {/* Centered Loading Indicator */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center max-w-sm">
        <div className="w-12 h-12 rounded-2xl bg-white border border-amber-400/30 flex items-center justify-center text-amber-600 shadow-sm relative">
          <ShieldCheck className="w-6 h-6 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-500 animate-ping" />
        </div>
        <div>
          <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-slate-700 uppercase">
            {label}
          </p>
          <div className="w-36 h-1 bg-slate-200 rounded-full mx-auto mt-2.5 overflow-hidden">
            <div className="w-1/2 h-full bg-amber-500 rounded-full animate-[marquee_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}

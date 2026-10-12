"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#f8fafc] text-slate-900 px-4 py-16 relative overflow-hidden">
      {/* Background illumination */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)"
        }}
      />

      <div className="text-center max-w-md bg-white/95 backdrop-blur-md p-10 rounded-3xl border border-slate-200/90 shadow-2xl relative z-10">
        <div className="w-18 h-18 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <AlertCircle className="w-9 h-9 text-amber-600" />
        </div>

        <div className="font-mono text-xs text-amber-700 font-bold uppercase tracking-widest mb-1">
          Stream Disrupted
        </div>

        <h2 className="text-2xl font-extrabold mb-3 text-slate-900">
          Surveillance Stream Paused
        </h2>

        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          An unexpected network or rendering event occurred. Resetting the channel will reinitialize all camera sensors and components.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> Reset Channel
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-slate-200"
          >
            <Home className="w-4 h-4" /> Back to Safety
          </Link>
        </div>
      </div>
    </div>
  );
}

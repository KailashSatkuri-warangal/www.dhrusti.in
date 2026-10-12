import Link from "next/link";
import { ShieldAlert, ArrowLeft, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#f8fafc] text-slate-900 px-4 py-16 relative overflow-hidden">
      {/* Background glow and subtle grid */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)"
        }}
      />

      <div className="text-center max-w-lg bg-white/90 backdrop-blur-md p-10 rounded-3xl border border-slate-200/90 shadow-2xl relative z-10">
        <div className="w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
          <ShieldAlert className="w-10 h-10" />
        </div>

        <div className="font-mono text-xs text-amber-700 font-bold uppercase tracking-widest mb-1">
          Surveillance Blindspot • Code 404
        </div>

        <h1 className="text-5xl font-black text-slate-950 tracking-tight font-mono mb-3 animate-glitch">
          404
        </h1>

        <h2 className="text-2xl font-bold mb-3 text-slate-900">
          Security Feed Not Found
        </h2>

        <p className="text-sm text-slate-600 mb-8 leading-relaxed max-w-sm mx-auto">
          The channel, product catalog, or subpage you requested is out of camera range or has been upgraded to a new URL.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" /> Return to Command Hub
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-slate-200"
          >
            <Phone className="w-4 h-4 text-amber-600" /> Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

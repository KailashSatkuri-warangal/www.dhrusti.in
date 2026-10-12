import dynamic from "next/dynamic";
import SectionSkeleton from "@/components/ui/SectionSkeleton";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";
import { ShieldCheck } from "lucide-react";

const SecuritySolutionsSection = dynamic(
  () => import("@/components/sections/SecuritySolutionsSection"),
  {
    loading: () => <SectionSkeleton label="LOADING ARCHITECTURAL SOLUTIONS..." minHeight="min-h-[520px]" />
  }
);

const QuoteCalculator = dynamic(
  () => import("@/components/ui/QuoteCalculator"),
  {
    loading: () => <SectionSkeleton label="INITIALIZING INTERACTIVE ESTIMATOR..." minHeight="min-h-[420px]" />
  }
);

export const metadata = {
  title: "Security Solutions — Residential, Commercial & Industrial | Dhrusti",
  description: "Specialized security packages for luxury homes, retail jewelry stores, industrial factories, and municipal command centers across Telangana & AP."
};

export default function SolutionsPage() {
  return (
    <div className="py-16 md:py-24 bg-[#f8fafc] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            Specialized Architecture
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Tailored Security Solutions For <span className="text-gradient-gold">Every Industry</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            Custom engineered blueprints that address the specific threats of residential villas, multi-floor malls, jewelry stores, and industrial warehouse zones.
          </p>
        </div>
      </div>

      <SecuritySolutionsSection />

      <SectionTransitionDivider variant="amber-beam" className="my-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <QuoteCalculator />
      </div>
    </div>
  );
}

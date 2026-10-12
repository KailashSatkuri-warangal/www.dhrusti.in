import dynamic from "next/dynamic";
import { ShieldCheck, PhoneCall, CheckCircle2 } from "lucide-react";
import SectionSkeleton from "@/components/ui/SectionSkeleton";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";
import { SITE_INFO } from "@/lib/data/siteData";

const QuoteCalculator = dynamic(
  () => import("@/components/ui/QuoteCalculator"),
  {
    loading: () => <SectionSkeleton label="INITIALIZING INTERACTIVE ESTIMATOR..." minHeight="min-h-[480px]" />
  }
);

export const metadata = {
  title: "Get an Instant Quote & System Design — Dhrusti IT Security",
  description: "Calculate custom security camera, biometric, and AMC costs. Request a complimentary on-site survey anywhere in Hyderabad and Warangal."
};

export default function GetAQuotePage() {
  return (
    <div className="py-16 md:py-24 bg-[#f8fafc] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            Fast-Track Estimate
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Design Your <span className="text-gradient-gold">Security Infrastructure</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            Configure your property parameters below. Our senior security engineers will review your layout and provide an official quotation with a 3D coverage blueprint.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <QuoteCalculator />
      </div>

      <SectionTransitionDivider variant="amber-beam" className="mb-16" />

      {/* Free Site Survey Guarantee */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-lg">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Need an Immediate On-Site Property Survey?
            </h3>
            <p className="text-xs text-slate-600">
              Our technicians will visit your premises in Hyderabad, Warangal, Hanamkonda, or Kazipet to identify blind spots and design exact cable pathways.
            </p>
          </div>

          <a
            href={`tel:${SITE_INFO.phonePrimary.replace(/\s+/g, '')}`}
            className="px-6 py-3.5 rounded-xl bg-slate-100 border border-amber-300 hover:border-amber-500 text-amber-800 font-bold text-xs font-mono uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 shadow-sm"
          >
            <PhoneCall className="w-4 h-4 text-amber-600" />
            Call: {SITE_INFO.phonePrimary}
          </a>
        </div>
      </div>
    </div>
  );
}

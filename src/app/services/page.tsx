import dynamic from "next/dynamic";
import { Wrench } from "lucide-react";
import SectionSkeleton from "@/components/ui/SectionSkeleton";

const ServicesClientList = dynamic(
  () => import("@/components/sections/ServicesClientList"),
  {
    loading: () => <SectionSkeleton label="LOADING 9 CORE SURVEILLANCE SERVICES..." minHeight="min-h-[600px]" />
  }
);

export const metadata = {
  title: "CCTV Installation & Maintenance Services — Dhrusti IT Security",
  description: "Comprehensive CCTV Installation, 24/7 AMC Maintenance Contracts, AI System Upgrades, CCTV on Hire, and Intercom Services across Telangana & AP."
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 bg-[#f8fafc] text-slate-900">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Wrench className="w-3.5 h-3.5 text-amber-600" />
            Engineering &amp; Maintenance
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Comprehensive <span className="text-gradient-gold">Surveillance Services</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            From new property security layouts to 24/7 AMC emergency technician response, Dhrusti delivers unmatched technical competence across Warangal and Hyderabad.
          </p>
        </div>
      </div>

      {/* Services List Detailed Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ServicesClientList />
      </div>
    </div>
  );
}

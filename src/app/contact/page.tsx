import dynamic from "next/dynamic";
import { SITE_INFO } from "@/lib/data/siteData";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send } from "lucide-react";
import SectionSkeleton from "@/components/ui/SectionSkeleton";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";
import { Card3D } from "@/components/ui/Motion3D";

const MultiBranchSection = dynamic(
  () => import("@/components/sections/MultiBranchSection"),
  {
    loading: () => <SectionSkeleton label="MAPPING PHYSICAL EXPERIENCE CENTERS..." minHeight="min-h-[480px]" />
  }
);

export const metadata = {
  title: "Contact & Branches — Dhrusti IT Security | 4 Experience Centers",
  description: "Contact Dhrusti IT Security Private Limited. Visit our branches in Kondapur (Hyderabad), Warangal HQ, Hanamkonda, and Kazipet."
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 bg-[#f8fafc] text-slate-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            Connect with Our Engineers
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Contact Dhrusti & <span className="text-gradient-gold">Branch Dispatch</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            Have a question regarding new CCTV installation, urgent repair, or multi-site AMC contracts? Reach out directly to our central command or local branch.
          </p>
        </div>
      </div>

      {/* Direct Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card3D className="h-full">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all shadow-md h-full">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-6 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Phone & Hotline</h3>
              <p className="text-xs text-slate-500 mb-4">Immediate technical dispatch and quotation support.</p>
              <div className="space-y-1 font-mono text-sm font-bold text-amber-800">
                <a href="tel:+918688566688" className="block hover:underline">{SITE_INFO.phonePrimary}</a>
                <a href="tel:+919346105589" className="block hover:underline">{SITE_INFO.phoneWarangal} (Warangal)</a>
              </div>
            </div>
          </Card3D>

          <Card3D className="h-full">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all shadow-md h-full">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-6 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email Inquiries</h3>
              <p className="text-xs text-slate-500 mb-4">Send architecture RFQs, blueprints, and tenders.</p>
              <div className="font-mono text-sm font-bold text-amber-800">
                <a href="mailto:info@dhrusti.in" className="hover:underline">info@dhrusti.in</a>
              </div>
            </div>
          </Card3D>

          <Card3D className="h-full">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all shadow-md h-full">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-6 shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Working Hours</h3>
              <p className="text-xs text-slate-500 mb-4">Experience centers open all 7 days.</p>
              <div className="text-xs font-mono text-slate-700">
                <p>Mon - Sun: 10:00 AM – 7:30 PM</p>
                <p className="text-amber-800 font-bold mt-1">24/7 Emergency Dispatch Active</p>
              </div>
            </div>
          </Card3D>
        </div>
      </div>

      <SectionTransitionDivider variant="amber-beam" className="mb-12" />

      {/* Multi-Branch Map & Switcher Section */}
      <MultiBranchSection />
    </div>
  );
}

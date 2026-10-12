"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SITE_INFO } from "@/lib/data/siteData";
import { 
  Building2, 
  Home, 
  Store, 
  Factory, 
  Camera, 
  HardDrive, 
  ShieldCheck, 
  PhoneCall, 
  Send, 
  CheckCircle2, 
  Fingerprint,
  Video
} from "lucide-react";

export default function QuoteCalculator() {
  const [propertyType, setPropertyType] = useState<string>("villa");
  const [cameraCount, setCameraCount] = useState<number>(4);
  const [cameraType, setCameraType] = useState<string>("ip-poe");
  const [storageDays, setStorageDays] = useState<number>(30);
  const [includeBiometric, setIncludeBiometric] = useState<boolean>(false);
  const [includeVDP, setIncludeVDP] = useState<boolean>(true);
  const [includeAMC, setIncludeAMC] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  const [userPhone, setUserPhone] = useState<string>("");
  const [userCity, setUserCity] = useState<string>("Hyderabad");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const propertyTypes = [
    { id: "home", label: "Apartment / Flat", icon: Home, baseRec: 2 },
    { id: "villa", label: "Individual Villa / House", icon: Building2, baseRec: 4 },
    { id: "retail", label: "Retail Shop / Showroom", icon: Store, baseRec: 8 },
    { id: "commercial", label: "Office / Factory / Warehouse", icon: Factory, baseRec: 16 }
  ];

  const cameraOptions = [
    { id: "ip-poe", name: "4K AI IP PoE Cameras", desc: "Best for commercial & luxury homes, highest clarity", factor: 1.2 },
    { id: "solar-4g", name: "Solar 4G Wireless Cameras", desc: "100% wire-free, ideal for gates & remote sites", factor: 1.4 },
    { id: "hd-analog", name: "5MP Smart HD Cameras", desc: "Cost-effective, reliable 24/7 continuous coverage", factor: 1.0 },
    { id: "ptz-smart", name: "360° Pan-Tilt Smart Cameras", desc: "Motorized 360° rotation with active tracking", factor: 1.3 }
  ];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userPhone) return;

    const message = `*NEW CCTV SYSTEM ESTIMATE REQUEST - DHRUSTI IT SECURITY*%0A` +
      `---------------------------------------%0A` +
      `*Client Name:* ${userName}%0A` +
      `*Phone:* ${userPhone}%0A` +
      `*City / Location:* ${userCity}%0A` +
      `*Property Type:* ${propertyType.toUpperCase()}%0A` +
      `*Cameras Required:* ${cameraCount} Units%0A` +
      `*Camera Technology:* ${cameraOptions.find(c => c.id === cameraType)?.name}%0A` +
      `*Video Recording Storage:* ${storageDays} Days%0A` +
      `*Biometric Attendance / Access:* ${includeBiometric ? "YES" : "NO"}%0A` +
      `*Video Door Phone (VDP):* ${includeVDP ? "YES" : "NO"}%0A` +
      `*Annual Maintenance (AMC):* ${includeAMC ? "YES (Included)" : "NO"}%0A` +
      `---------------------------------------%0A` +
      `Please provide an official quote and schedule an on-site survey.`;

    window.open(`https://wa.me/${SITE_INFO.whatsapp}?text=${message}`, "_blank");
    setIsSubmitted(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-10 text-slate-900 relative overflow-hidden shadow-xl border border-slate-200">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono tracking-widest uppercase mb-4 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-amber-600" />
          Interactive System Estimator
        </div>
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Custom Security Plan Calculator
        </h3>
        <p className="text-slate-600 text-sm mt-2">
          Select your requirements below to instantly generate a tailored surveillance architecture and connect with a Dhrusti security engineer.
        </p>
      </div>

      <form onSubmit={handleWhatsAppSend} className="space-y-8">
        {/* Step 1: Property Type */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-amber-800 mb-3 font-bold">
            1. Select Your Premises Type
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {propertyTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = propertyType === type.id;
              return (
                <button
                  type="button"
                  key={type.id}
                  onClick={() => {
                    setPropertyType(type.id);
                    setCameraCount(type.baseRec);
                  }}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all ${
                    isSelected
                      ? "bg-amber-50 border-amber-500 text-amber-900 shadow-md font-bold"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-2 ${isSelected ? "text-amber-600" : "text-slate-500"}`} />
                  <span className="text-xs font-bold">{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Camera Count & Storage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <label className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold flex items-center gap-2">
                <Camera className="w-4 h-4 text-amber-600" />
                2. Number of Cameras: <span className="text-lg font-bold text-slate-900 ml-1">{cameraCount} Units</span>
              </label>
            </div>
            <input
              type="range"
              min="2"
              max="64"
              step="2"
              value={cameraCount}
              onChange={(e) => setCameraCount(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
              <span>2 Cameras</span>
              <span>16 Cameras</span>
              <span>64+ Enterprise</span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <label className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-amber-600" />
                3. Video Backup Storage: <span className="text-lg font-bold text-slate-900 ml-1">{storageDays} Days</span>
              </label>
            </div>
            <input
              type="range"
              min="7"
              max="90"
              step="7"
              value={storageDays}
              onChange={(e) => setStorageDays(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
              <span>7 Days</span>
              <span>30 Days (Standard)</span>
              <span>90 Days (Vault/Bank)</span>
            </div>
          </div>
        </div>

        {/* Step 3: Camera Tech Selection */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-amber-800 mb-3 font-bold">
            4. Choose Preferred Surveillance Technology
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {cameraOptions.map((opt) => {
              const isSelected = cameraType === opt.id;
              return (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => setCameraType(opt.id)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? "bg-amber-50 border-amber-500 shadow-sm"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="text-sm font-bold text-slate-900 mb-1 flex items-center justify-between">
                    {opt.name}
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{opt.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: Add-Ons */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-amber-800 mb-3 font-bold">
            5. Recommended Smart Add-Ons
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setIncludeBiometric(!includeBiometric)}
              className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                includeBiometric ? "bg-amber-50 border-amber-500 text-amber-900 shadow-sm" : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            >
              <Fingerprint className={`w-5 h-5 ${includeBiometric ? "text-amber-600" : "text-slate-500"}`} />
              <div className="text-left text-xs">
                <span className="font-bold text-slate-900 block">Biometric / Face Access</span>
                <span className="text-[11px] text-slate-500">Attendance & Smart Door Lock</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setIncludeVDP(!includeVDP)}
              className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                includeVDP ? "bg-amber-50 border-amber-500 text-amber-900 shadow-sm" : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            >
              <Video className={`w-5 h-5 ${includeVDP ? "text-amber-600" : "text-slate-500"}`} />
              <div className="text-left text-xs">
                <span className="font-bold text-slate-900 block">Video Door Phone (VDP)</span>
                <span className="text-[11px] text-slate-500">Mobile unlock & 2-way audio</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setIncludeAMC(!includeAMC)}
              className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                includeAMC ? "bg-amber-50 border-amber-500 text-amber-900 shadow-sm" : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            >
              <ShieldCheck className={`w-5 h-5 ${includeAMC ? "text-amber-600" : "text-slate-500"}`} />
              <div className="text-left text-xs">
                <span className="font-bold text-slate-900 block">1-Year Full AMC Warranty</span>
                <span className="text-[11px] text-slate-500">Quarterly audit & 24/7 fix</span>
              </div>
            </button>
          </div>
        </div>

        {/* Step 5: Contact Details */}
        <div className="pt-4 border-t border-slate-200">
          <label className="block text-xs font-mono uppercase tracking-wider text-amber-800 mb-3 font-bold">
            6. Where should we send your official design & proposal?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              required
              placeholder="Your Full Name *"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500"
            />
            <input
              type="tel"
              required
              placeholder="10-Digit Mobile No. *"
              pattern="[0-9]{10}"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500"
            />
            <select
              value={userCity}
              onChange={(e) => setUserCity(e.target.value)}
              className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500"
            >
              <option value="Hyderabad (Kondapur / Madhapur / Gachibowli)">Hyderabad (Kondapur / Hitec City / All Areas)</option>
              <option value="Warangal">Warangal</option>
              <option value="Hanamkonda">Hanamkonda</option>
              <option value="Kazipet">Kazipet</option>
              <option value="Other Telangana & AP">Other Telangana & AP Cities</option>
            </select>
          </div>
        </div>

        {/* Submit Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="text-xs text-slate-600 flex items-center gap-2 font-medium">
            <PhoneCall className="w-4 h-4 text-amber-600" />
            Direct Engineer Line: <span className="text-slate-900 font-mono font-bold">+91 86885 66688</span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Send Instant Estimate via WhatsApp
          </button>
        </div>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs text-center font-bold"
          >
            ✓ Request transmitted to Dhrusti Senior Security Engineer! We will connect with your custom design layout shortly.
          </motion.div>
        )}
      </form>
    </div>
  );
}

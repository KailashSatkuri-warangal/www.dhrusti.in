"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { CERTIFICATIONS } from "@/lib/data/siteData";
import { 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  MapPin,
  FileText,
  Users,
  Wrench,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Card3D } from "@/components/ui/Motion3D";
import { motion, AnimatePresence } from "framer-motion";
import { MaskRevealImage, ZoomImage, ParallaxLayer } from "@/components/scroll/ScrollPrimitives";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";

export default function AboutClientView() {
  const [activeCertIndex, setActiveCertIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeCertIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCertIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeCertIndex === null) return;
      if (e.key === "Escape") setActiveCertIndex(null);
      if (e.key === "ArrowRight") {
        setActiveCertIndex((prev) => (prev! + 1) % CERTIFICATIONS.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveCertIndex((prev) => (prev! - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCertIndex]);

  const previousInstallations = [
    "Banking Sector: State Bank of Hyderabad (SBH), APGVB, SBI",
    "TATA Goldplus (Warangal, Karimnagar & Bhimavaram)",
    "Hotel Ratna & Hotel Bilva Inn",
    "Mangalya Shopping Mall & Kalyana Laxmi Shopping Mall",
    "Mahboobabad Collectorate & Mulugu Collector Office",
    "Bhupalpalli DEO Office & GWMC Office Premises",
    "Elections 2019 – Strategic Check Posts",
    "Election Counting Centers in Mahboobabad & Warangal Urban District",
    "MLA Elections 2018 – Telangana State",
    "MP Elections April 2019 – 600+ Polling Booths (Warangal Police Commissionerate)",
    "KUDA Warangal & Municipality Yellandu",
    "Panchayat Raj Department & Revenue Department",
    "Social Welfare Schools & Educational Institutions",
    "Hospitals, Hotels, Shopping Malls & TSEWIDC"
  ];

  const coloniesList = [
    "Doctors Colony – 2", "Bank Colony – 2", "Mandibazar", "Ramnathapuri", 
    "Gayatri Colony", "Bhadrakali Area Cameras", "MGM Circle", "Warangal Bus Stand", 
    "Gangadevi Palli Village", "Wardhannapet Main Road", "Dharmaram Village", 
    "Keerthi Nagar Colony", "Girnibavi Chowrastha", "Navayuga Colony", "Pinnavari Street", 
    "Bullion Merchants", "Vishwakarma Street", "Medical Agencies Area PV Street", 
    "Kalyan Nagar", "Marrivenkataiah Colony", "Srinivasa Colony", "Ganesh Nagar", 
    "Teachers Colony", "URSU Gutta", "Sri Sai Nagar Colony", "Mamnoor RTO Junction", 
    "Reddy Palem Village", "Inavole Police Station", "Madikonda Police Station Limits", 
    "Excise Colony", "Satya Sai Nagar Colony"
  ];

  const hireBasisList = [
    "SI Selections & Constable Physical Selections",
    "Vinayaka Nimajjanam at Warangal, Nizamabad, Armoor",
    "Bathukamma & Dasara State Festivals",
    "Maha Shiva Rathri at Pilgrim Shrines",
    "Jatharas at Pilgrimage Places: Inavolu, Kommala, Mettugutta, Palakurthi",
    "Inavole Temple & Kommala Narasimha Swamy Temple",
    "Provided Cameras for CM Program in Prakash Reddy Peta",
    "SSC Board Examinations in 5 districts (2014, 2015, 2018, 2019)",
    "2023 MP, MLA & Municipal Elections",
    "Bus Shelters for Medaram Jatara",
    "Medaram Jatara Hundi Counting Centers",
    "37th National Games conducted in Goa in 2023 (800+ Cameras)"
  ];

  const hospitalsList = [
    "Gravid Homes", "Dolphin Children's Hospital", "Kids Care Hospital", 
    "Sigma Hospital", "Vishwas Hospital", "Kalyani Nursing Home", 
    "Sharanya Hospital", "Sri Sai Hospital Thorrur"
  ];

  const govtWorksList = [
    "KUDA Office Premises", "Yellandu Municipality DMF Fund", 
    "PR Warangal Rural CDP Fund for Shyampet", "Bhadrakali Fore Shore Bund", 
    "Warangal Municipality", "Jain Temple Heritage Security", 
    "Rural Collector Office", "GWMC Subedari Administrative Office", 
    "Madikonda Police Station", "Warangal MGM Hospital Critical Wards", 
    "24 Primary Health Centres (PHCs) DMHO Mahaboobabad", 
    "Main Road Bhupalpally TSEWIDC", "GWMC Heavy Vehicle Shed"
  ];

  return (
    <div className="py-16 md:py-24 bg-[#f8fafc] text-slate-900">
      {/* Header Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 mb-16"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            Company Legacy & Profile
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            CCTV Camera Dealer in <span className="text-gradient-gold">Kondapur, Warangal & Hyderabad</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            Dhrusti IT & Security Centre Pvt Ltd — Pioneering electronic security since 2003 with 50,000+ camera installations across Telangana, Andhra Pradesh, and National Games Goa.
          </p>
        </div>
      </motion.div>

      {/* Founder Spotlight & Biography */}
      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 mb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl">
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <MaskRevealImage
                src="/images/CCTV-Camera-Dealer-in-Warangal.jpg"
                alt="Mr. Vidiyala Noothan Kumar - CCTV Camera Dealer in Warangal"
                shape="vertical"
                priority
                className="object-cover object-top filter contrast-105"
                containerClassName="relative w-full h-full overflow-hidden"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-slate-900">Mr. Vidiyala Noothan Kumar</h3>
              <p className="text-xs text-amber-700 font-mono font-bold uppercase tracking-wider">Founder & Managing Director</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase">
              ★ Meet the Founder
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
              Pioneering CCTV & Computer Hardware in Warangal Since 1997
            </h2>

            <p className="text-slate-700 text-sm leading-relaxed">
              Mr. V. Noothan Kumar first began his business journey in early 1997 by starting a computer training institute in Warangal called <strong className="text-slate-900">NEWWAY COMPUTERS</strong>. It was the first organization in Warangal to offer specialized training in computer hardware.
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              He also worked with the <strong className="text-slate-900">State Bank of Hyderabad (SBH)</strong> for more than 9 years, across 10 different districts, handling various critical roles such as transitioning accounts from manual ledgers to computerized systems, branch networking, and ATM security installations.
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              In 2003, he founded Dhrusti in Warangal — becoming the first person to start the CCTV business in the region, and the first to integrate CCTV cameras to mobile phones and laptops remotely over the Internet.
            </p>

            <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-200 space-y-2 text-xs text-slate-700">
              <p>
                <strong>37th National Games Goa (2023):</strong> Arranged <strong>800+ live CCTV cameras</strong> across multiple stadiums with police feeds.
              </p>
              <p>
                <strong>E-Commerce & Digital Innovations:</strong> Launched <em>WARANGALADDA.COM</em> in 2007 for regional directory and student programs. In 2016, entered FMCG promoting Made-in-India brands, and today runs <em>SWADHESHMART.COM</em> with the national slogan: <strong className="text-amber-900">&quot;Be Indian, Buy Indian.&quot;</strong>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <SectionTransitionDivider variant="amber-beam" className="mb-16" />

      {/* 11 Official Certifications & Accreditations (with Lightbox) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-2">Government & OEM Accreditations</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Official Accreditations & <span className="text-gradient-gold">Certificates</span>
          </h2>
          <p className="text-xs text-slate-500 mt-2">Click any certificate to expand in high-definition view</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert, idx) => (
            <Card3D key={idx} className="h-full">
              <div 
                onClick={() => setActiveCertIndex(idx)}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-xl transition-all cursor-pointer group h-full"
              >
                <div className="relative w-full h-44 mb-3 rounded-xl overflow-hidden bg-slate-50 p-2 flex items-center justify-center">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {cert.description}
                  </p>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>

      <SectionTransitionDivider variant="grid-glow" className="mb-16" />

      {/* Vision & Mission Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our vision is to be Warangal’s most trusted name in IT and electronic security solutions, driving digital transformation through innovation and integrity. We aspire to lead the market with cutting-edge remote monitoring technologies, fire alarm systems, and smart automation, while also promoting Made in India products through our e-commerce platform Swadheshmart.com. We envision a safer, smarter, and more connected future for every Indian household and business.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              At Dhrusti IT & Security Centre Pvt Ltd, our mission is to provide top-quality CCTV surveillance systems, biometric attendance solutions, intercom systems, and security alarm installations in Warangal and surrounding regions. We aim to deliver smart, secure, and cost-effective technology solutions tailored to homes, offices, schools, hospitals, and commercial spaces. With a customer-first approach and over two decades of industry experience, we ensure reliable service, user-friendly software, and long-term support for every client.
            </p>
          </div>
        </div>
      </div>

      <SectionTransitionDivider variant="amber-beam" className="mb-16" />

      {/* Comprehensive Installations & Pillars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24 space-y-12">
        {/* Previous Installations */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-amber-600" /> Particulars Of Previous Key Installations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-slate-700">
            {previousInstallations.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 31 Colonies Under Warangal Police Commissionerate */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-amber-600" /> 31 Colonies Under Warangal Police Commissionerate
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs text-slate-700">
            {coloniesList.map((colony, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-amber-50/50 border border-amber-100 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>{colony}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cameras Arranged On Hire Basis */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-amber-600" /> Cameras Arranged On Hire Basis (Events & Elections)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-slate-700 mb-6">
            {hireBasisList.map((hire, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{hire}</span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200">
              <ZoomImage
                src="/images/vinayak.webp"
                alt="Lord Ganesh festival CCTV deployment"
                startScale={1.15}
                endScale={1.0}
                className="object-cover"
                containerClassName="relative w-full h-full"
              />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200">
              <ZoomImage
                src="/images/bathukamma.jpg"
                alt="Bathukamma festival CCTV setup"
                startScale={1.15}
                endScale={1.0}
                className="object-cover"
                containerClassName="relative w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Hospitals & Government Works */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Hospitals Served</h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {hospitalsList.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Government Works Undertaken</h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {govtWorksList.slice(0, 8).map((g, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> {g}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Equipment, AMC & Manpower Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-sm text-slate-900 mb-2">
              <Wrench className="w-4 h-4 text-amber-600" /> Details Of Equipment
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Owns all related specialized installation tools including heavy-duty Drilling Machines, Fiber Splicing Machines, Optical Power Meters, and safety Ladders.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-sm text-slate-900 mb-2">
              <FileText className="w-4 h-4 text-amber-600" /> Annual Maintenance (AMC)
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              1-Year 100% free warranty service for all equipment supplied and installed, followed by customized SLA renewal packages.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-sm text-slate-900 mb-2">
              <Users className="w-4 h-4 text-amber-600" /> Technical Manpower
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              15 Salary-based full-time engineers, 2 Certified Electricians, 2 Fiber Splicing Specialists, and 6 regular field technicians.
            </p>
          </div>
        </div>
      </div>

      {/* Certificate Lightbox Modal (Rendered in Portal directly on document.body for true viewport centering) */}
      {mounted && activeCertIndex !== null && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveCertIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveCertIndex(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center transition-all shadow-xl z-50 cursor-pointer border border-slate-200 hover:scale-105"
              aria-label="Close certificate"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveCertIndex((prev) => (prev! - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length);
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center transition-all shadow-xl z-50 cursor-pointer border border-slate-200 hover:scale-105"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveCertIndex((prev) => (prev! + 1) % CERTIFICATIONS.length);
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center transition-all shadow-xl z-50 cursor-pointer border border-slate-200 hover:scale-105"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Modal Card */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] max-h-[500px] bg-slate-50 p-6 flex items-center justify-center">
                <Image
                  src={CERTIFICATIONS[activeCertIndex].image}
                  alt={CERTIFICATIONS[activeCertIndex].title}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="p-6 bg-white border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{CERTIFICATIONS[activeCertIndex].title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{CERTIFICATIONS[activeCertIndex].description}</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 font-mono text-xs font-bold shrink-0">
                  {activeCertIndex + 1} / {CERTIFICATIONS.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

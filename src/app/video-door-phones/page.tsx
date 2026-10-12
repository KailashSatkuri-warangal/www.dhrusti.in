"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, VDP_FAQS } from "@/lib/data/productsData";
import { Video, CheckCircle2, ArrowRight, ShieldCheck, ChevronDown, Lock, PhoneCall, Sparkles } from "lucide-react";
import { Card3D } from "@/components/ui/Motion3D";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";

export default function VideoDoorPhonesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const accessProducts = PRODUCTS.filter((p) => p.category === "access-control");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="py-16 md:py-24 bg-[#f8fafc] text-slate-900 min-h-screen">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Video className="w-3.5 h-3.5 text-amber-600" />
            Doorstep Security & Access Automation
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            VIDEO DOOR PHONES & <span className="text-gradient-gold">ACCESS CONTROL</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            Explore Dhrusti's premier range of Video Door Phones, Biometric Attendance systems, and Digital Smart Locks across Warangal, Kondapur, and Hyderabad.
          </p>
        </div>
      </div>

      {/* 8 Product Grid with 3D Hover Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessProducts.map((product) => (
            <Card3D key={product.id} className="h-full">
              <div className="rounded-3xl bg-white border border-slate-200 hover:border-amber-400 overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl h-full">
                <div>
                  <div className="p-5 pb-0 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-mono font-bold text-amber-800 uppercase">
                      {product.badge}
                    </span>
                  </div>

                  <div className="relative w-full h-52 flex items-center justify-center p-4 bg-slate-50/50">
                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="space-y-1.5 mb-2">
                      {product.keyFeatures.slice(0, 3).map((feat, i) => (
                        <div key={i} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/get-a-quote?product=${product.id}`}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm text-center group-hover:bg-amber-600"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>

      <SectionTransitionDivider variant="amber-beam" className="mb-16" />

      {/* Comprehensive Original Article Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
              Smart Video Door Phones: Your First Line of Defense
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              In today’s world, knowing who’s at your door before opening it isn’t just a luxury—it’s a necessity.
              Video Door Phones provide an added layer of security by allowing you to see, hear, and speak to visitors at your doorstep, without
              ever having to open the door. Whether it’s a delivery, a guest, or an unknown visitor, you’re always in control.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              Our video door phone systems are designed to blend seamlessly into residential and commercial properties.
              With HD video clarity, two-way audio, and night vision capability, you can monitor and interact with visitors in real-time—day or night. Choose from wired or wireless models, 
              with sleek touchscreens, app-based remote access, and recording features to capture every visit.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              With integrated smart lock connectivity, you can even grant access remotely from your smartphone, ensuring your home is always secure—even when you’re miles away.
              Take control of your home’s security today with an advanced, easy-to-use Video Door Phone system.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
              Smart Access Control: Protection That Works Seamlessly
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              Securing your facility, assets, and personnel requires a modern approach to physical security.
              Our advanced Access Control solutions provide comprehensive protection and total control over entry points,
              ensuring that only authorized individuals gain access. Designed for both commercial and residential applications,
              our systems integrate cutting-edge technology with user-friendly interfaces, making security both effective and effortless.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              Imagine being able to manage your doors, gates, and other entryways from a single, intuitive platform. 
              Our Access Control systems offer multiple authentication methods—including key cards, biometric scanners,
              and mobile credentials—to suit your specific needs. Whether it's a corporate office,
              a gated community, or a small business, you can tailor the system to provide varying access levels for employees, visitors, or residents.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              Our technology not only restricts unauthorized access but also offers detailed reporting and real-time monitoring. 
              This means you can review access logs, track entry patterns, and receive instant alerts if any unusual activity is detected. Integration with existing CCTV
              and alarm systems creates a comprehensive security network that enhances safety across every corner of your facility.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Professional installation and ongoing support ensure that your system operates seamlessly, with minimal downtime and maximum reliability. With our Access Control solutions, you can safeguard assets, streamline operations, and enjoy peace of mind knowing that your environment is secure—every moment of every day.
              Upgrade your security strategy with our sophisticated, reliable Access Control systems—a smart investment in safety and efficiency.
            </p>
          </div>
        </div>
      </div>

      <SectionTransitionDivider variant="grid-glow" className="mb-16" />

      {/* Frequently Asked Questions (FAQ) Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-24">
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-2">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {VDP_FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  <span className="text-sm md:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

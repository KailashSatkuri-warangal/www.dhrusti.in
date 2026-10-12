"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data/clientsData";
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { ScrollSection } from "@/components/scroll/ScrollPrimitives";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <ScrollSection enterEffect="fade-rise" exitEffect="fade-back">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            Verified Trust &amp; Commendations
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Endorsed by <span className="text-gradient-gold">Law Enforcement &amp; Enterprise Leaders</span>
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Read testimonials from senior Indian Police Service (IPS) Commissioners and commercial clients who trust Dhrusti for 24/7 security.
          </p>
        </motion.div>

        {/* Featured Testimonial Spotlight */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto bg-slate-50 border border-slate-200/90 rounded-3xl p-8 md:p-12 relative shadow-lg overflow-hidden"
        >
          <Quote className="absolute top-8 right-8 w-16 h-16 text-amber-200 pointer-events-none" />

          <div className="min-h-[260px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col md:flex-row items-center gap-8"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-amber-500 shrink-0 shadow-md">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 text-center md:text-left space-y-4">
                  {current.badge && (
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-[11px] font-mono font-bold uppercase tracking-wider">
                      ★ {current.badge}
                    </span>
                  )}

                  <p className="text-slate-800 text-base md:text-lg italic leading-relaxed">
                    &ldquo;{current.text}&rdquo;
                  </p>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{current.name}</h4>
                    <p className="text-xs text-amber-700 font-mono font-bold">{current.role} • {current.designation}</p>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-center md:justify-end gap-3 mt-8 pt-6 border-t border-slate-200">
            <button
              onClick={handlePrev}
              className="p-3 rounded-2xl bg-white border border-slate-300 hover:border-amber-500 text-slate-700 hover:text-amber-700 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono font-bold text-slate-600">
              {currentIndex + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 rounded-2xl bg-white border border-slate-300 hover:border-amber-500 text-slate-700 hover:text-amber-700 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
        </div>
      </ScrollSection>
    </section>
  );
}

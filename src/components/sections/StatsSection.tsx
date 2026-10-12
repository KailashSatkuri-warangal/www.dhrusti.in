"use client";

import { motion } from "framer-motion";
import StatCounter from "@/components/ui/StatCounter";
import { STATS_DATA } from "@/lib/data/siteData";
import { ScrollSection, ParallaxLayer } from "@/components/scroll/ScrollPrimitives";

export default function StatsSection() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <ScrollSection enterEffect="scale-reveal" exitEffect="parallax-out">
        {/* Subtle grid and ambient illumination with Parallax Depth */}
        <ParallaxLayer speed={0.18} className="absolute inset-0 pointer-events-none">
          <div 
            className="w-full h-full opacity-10"
            style={{
              backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(217,119,6,0.18) 0%, transparent 70%)"
            }}
          />
        </ParallaxLayer>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14 space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[11px] uppercase tracking-widest font-semibold">
              Proven Scale &amp; Reliability
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              20+ Years Securing Telangana &amp; Andhra Pradesh
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              From smart homes to mega-sports events and high-security state government headquarters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS_DATA.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <StatCounter
                  value={stat.numeric}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollSection>
    </section>
  );
}

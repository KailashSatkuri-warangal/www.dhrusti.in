"use client";

import { motion } from "framer-motion";

interface SectionTransitionDividerProps {
  variant?: "amber-beam" | "grid-glow" | "subtle";
  className?: string;
}

export default function SectionTransitionDivider({
  variant = "amber-beam",
  className = "",
}: SectionTransitionDividerProps) {
  return (
    <div className={`relative w-full h-12 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}>
      {/* Horizontal subtle guide line */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {variant === "amber-beam" && (
        <>
          {/* Animated Center Glowing Dot & Flare */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{ scale: 1.2, opacity: 1 }}
            viewport={{ once: false, margin: "-20px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative w-48 h-4 rounded-full"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(217,119,6,0.25) 0%, transparent 70%)"
            }}
          />
          <span className="absolute w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(217,119,6,0.8)]" />
        </>
      )}

      {variant === "grid-glow" && (
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(15,23,42,0.15) 0%, transparent 70%)"
          }}
        />
      )}
    </div>
  );
}

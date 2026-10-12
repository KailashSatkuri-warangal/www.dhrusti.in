"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GRID_COUNT = 6;

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<"loading" | "done">("loading");

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem("dhrusti_preloader_seen");
    if (hasSeenPreloader) {
      setIsLoading(false);
      return;
    }

    // Fast ramp: 0 → 100 in ~550ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase("done");
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("dhrusti_preloader_seen", "true");
          }, 550);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 22) + 14, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: 0.72, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center p-6 overflow-hidden"
          aria-hidden="true"
        >
          {/* Ambient grid lines */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Radial amber glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(217,119,6,0.13) 0%, transparent 75%)",
            }}
          />

          {/* Scanning grid cells — cinematic atmosphere */}
          <div className="absolute inset-0 pointer-events-none grid grid-cols-6 opacity-20">
            {Array.from({ length: GRID_COUNT }).map((_, i) => (
              <motion.div
                key={i}
                className="border-r border-amber-500/10"
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>

          {/* Brand mark */}
          <motion.div
            initial={{ scale: 0.75, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-4 mb-10 z-10"
          >
            {/* Shield icon with glow */}
            <motion.div
              className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400"
              style={{ boxShadow: "0 0 40px rgba(245,158,11,0.25), 0 0 80px rgba(245,158,11,0.08)" }}
              animate={{ boxShadow: [
                "0 0 30px rgba(245,158,11,0.2), 0 0 60px rgba(245,158,11,0.06)",
                "0 0 50px rgba(245,158,11,0.35), 0 0 100px rgba(245,158,11,0.12)",
                "0 0 30px rgba(245,158,11,0.2), 0 0 60px rgba(245,158,11,0.06)",
              ]}}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ShieldCheck className="w-8 h-8" />
            </motion.div>

            <div className="text-center">
              <motion.h2
                className="text-xl font-extrabold tracking-widest uppercase font-mono text-white"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.5 }}
              >
                DHRUSTI{" "}
                <span className="text-amber-400">IT SECURITY</span>
              </motion.h2>
              <motion.p
                className="text-[10px] font-mono text-slate-400 tracking-[0.25em] uppercase mt-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32, duration: 0.5 }}
              >
                Pioneering 360° Surveillance Since 2003
              </motion.p>
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-64 max-w-full space-y-2 z-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <div className="flex items-center justify-between text-xs font-mono text-amber-400 font-bold">
              <span className="tracking-wider">
                {phase === "done" ? "READY" : "INITIALIZING 360° GRID"}
              </span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
            <div className="w-full h-[2px] bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #b45309, #f59e0b, #d97706)",
                  boxShadow: "0 0 8px rgba(245,158,11,0.6)",
                  width: `${Math.min(progress, 100)}%`,
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

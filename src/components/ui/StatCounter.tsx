"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Card3D } from "@/components/ui/Motion3D";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  description: string;
  duration?: number;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  description,
  duration = 2,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeProgress);

      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="h-full">
      <Card3D className="h-full">
        <div className="h-full relative p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-gradient-gold tracking-tight font-mono mb-2">
              {count.toLocaleString()}{suffix}
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors">
              {label}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="mt-4 h-[2px] w-full bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:via-amber-500 group-hover:to-amber-600 transition-all duration-500" />
        </div>
      </Card3D>
    </div>
  );
}

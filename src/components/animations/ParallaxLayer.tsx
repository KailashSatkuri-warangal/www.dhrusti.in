"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Positive moves slower/faster relative to scroll (e.g. 0.2, -0.2)
  offset?: [string, string]; // e.g. ["start end", "end start"]
}

export default function ParallaxLayer({
  children,
  className = "",
  speed = 0.2,
  offset = ["start end", "end start"],
}: ParallaxLayerProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: offset as any,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

  return (
    <div ref={targetRef} className={`relative overflow-visible ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

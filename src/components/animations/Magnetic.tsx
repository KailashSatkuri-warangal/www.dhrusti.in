"use client";

import React, { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { MOTION_EASING } from "@/lib/motionConfig";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number; // Distance pull multiplier (default: 0.35)
  active?: boolean;
}

export default function Magnetic({
  children,
  className = "",
  strength = 0.35,
  active = true,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!active || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={MOTION_EASING.magneticSpring}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

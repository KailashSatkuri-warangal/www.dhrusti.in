"use client";

import React, { useRef, useState, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  onClick?: () => void;
}

export function Card3D({
  children,
  className = "",
  intensity = 15,
  onClick,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * intensity;
    const rotY = ((x - centerX) / centerX) * intensity;

    setRotateX(rotX);
    setRotateY(rotY);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ perspective: 1000 }}
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full transition-transform duration-150 ease-out"
      >
        {children}

        {/* Dynamic 3D Glare Sheen Overlay */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(245, 158, 11, 0.25), transparent 60%)`,
            opacity: glarePosition.opacity,
          }}
        />
      </div>
    </div>
  );
}

interface Reveal3DProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function Reveal3D({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Reveal3DProps) {
  const initialVariants = {
    up: { opacity: 0, y: 40, rotateX: -15 },
    down: { opacity: 0, y: -40, rotateX: 15 },
    left: { opacity: 0, x: 40, rotateY: 15 },
    right: { opacity: 0, x: -40, rotateY: -15 },
  };

  return (
    <motion.div
      initial={initialVariants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Floating3D({
  children,
  className = "",
  duration = 4,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [-6, 6, -6],
        rotateZ: [-1, 1, -1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RadarScanLine({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        animate={{
          top: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_12px_rgba(245,158,11,0.8)]"
      />
    </div>
  );
}
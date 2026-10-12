"use client";

import React, { useRef, ReactNode } from "react";
import Image from "next/image";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useVelocity, 
  MotionValue 
} from "framer-motion";

// ─── 1. ScrollSection (Lifecycle: Enter, Active, Exit) ──────────────────────────
export interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  enterEffect?: "fade-rise" | "scale-reveal" | "blur-reveal" | "mask-reveal" | "perspective-reveal" | "side-left" | "side-right" | "none";
  exitEffect?: "fade-back" | "scale-down" | "parallax-out" | "none";
  threshold?: number;
}

export function ScrollSection({
  children,
  className = "",
  enterEffect = "fade-rise",
  exitEffect = "fade-back",
}: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Enter range: 0.0 → 0.25
  // Active range: 0.25 → 0.75
  // Exit range: 0.75 → 1.00

  // Opacity
  const opacityEnter = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const opacityExit = useTransform(scrollYProgress, [0.8, 1], [1, 0.4]);
  const opacityCombined = useTransform(scrollYProgress, (val) => {
    if (val < 0.2) {
      return val / 0.2;
    }
    if (val > 0.8) {
      if (exitEffect === "none") return 1;
      return 1 - ((val - 0.8) / 0.2) * 0.6;
    }
    return 1;
  });

  // Vertical Translation (Y)
  const yEnter = useTransform(scrollYProgress, [0, 0.22], [60, 0]);
  const yExit = useTransform(scrollYProgress, [0.8, 1], [0, -40]);
  const yCombined = useTransform(scrollYProgress, (val) => {
    if (val < 0.22) {
      if (enterEffect === "fade-rise") return (1 - val / 0.22) * 60;
      return 0;
    }
    if (val > 0.8) {
      if (exitEffect === "parallax-out") return -((val - 0.8) / 0.2) * 50;
      return 0;
    }
    return 0;
  });

  // Scale
  const scaleCombined = useTransform(scrollYProgress, (val) => {
    if (val < 0.22) {
      if (enterEffect === "scale-reveal") return 0.9 + (val / 0.22) * 0.1;
      return 1;
    }
    if (val > 0.8) {
      if (exitEffect === "scale-down") return 1 - ((val - 0.8) / 0.2) * 0.08;
      return 1;
    }
    return 1;
  });

  // Filter Blur
  const blurCombined = useTransform(scrollYProgress, (val) => {
    if (val < 0.2) {
      if (enterEffect === "blur-reveal") return `blur(${(1 - val / 0.2) * 12}px)`;
      return "blur(0px)";
    }
    return "blur(0px)";
  });

  // Perspective RotateX
  const rotateXCombined = useTransform(scrollYProgress, (val) => {
    if (val < 0.22 && enterEffect === "perspective-reveal") {
      return (1 - val / 0.22) * 8;
    }
    return 0;
  });

  // Smooth springs for fluid GPU performance
  const smoothY = useSpring(yCombined, { stiffness: 220, damping: 28 });
  const smoothScale = useSpring(scaleCombined, { stiffness: 220, damping: 28 });
  const smoothRotateX = useSpring(rotateXCombined, { stiffness: 200, damping: 25 });

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityCombined,
        y: smoothY,
        scale: smoothScale,
        filter: blurCombined,
        rotateX: smoothRotateX,
        perspective: 1200,
        willChange: "transform, opacity, filter",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── 2. ParallaxLayer (Multi-rate depth layer) ─────────────────────────────────
export interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number; // negative = counter-scroll, positive = moves with scroll
  className?: string;
  direction?: "vertical" | "horizontal";
}

export function ParallaxLayer({
  children,
  speed = 0.2,
  className = "",
  direction = "vertical",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const distance = speed * 150;
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const x = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const smoothY = useSpring(y, { stiffness: 180, damping: 26 });
  const smoothX = useSpring(x, { stiffness: 180, damping: 26 });

  return (
    <motion.div
      ref={ref}
      style={{
        y: direction === "vertical" ? smoothY : 0,
        x: direction === "horizontal" ? smoothX : 0,
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── 3. ZoomImage (Scroll-progress driven scale) ───────────────────────────────
export interface ZoomImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  startScale?: number;
  endScale?: number;
  priority?: boolean;
}

export function ZoomImage({
  src,
  alt,
  fill = true,
  width,
  height,
  className = "object-cover",
  containerClassName = "relative w-full h-full overflow-hidden",
  startScale = 1.15,
  endScale = 1.0,
  priority = false,
}: ZoomImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [startScale, endScale]);
  const smoothScale = useSpring(scale, { stiffness: 160, damping: 24 });

  return (
    <div ref={ref} className={containerClassName}>
      <motion.div
        style={{ scale: smoothScale, willChange: "transform" }}
        className="relative w-full h-full"
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={className}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={className}
          />
        )}
      </motion.div>
    </div>
  );
}

// ─── 4. MaskRevealImage (Dynamic clip-path expansion) ──────────────────────────
export interface MaskRevealImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  shape?: "vertical" | "horizontal" | "center" | "diagonal";
  priority?: boolean;
}

export function MaskRevealImage({
  src,
  alt,
  className = "object-cover",
  containerClassName = "relative w-full h-full overflow-hidden rounded-3xl",
  shape = "vertical",
  priority = false,
}: MaskRevealImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Progressive clip-path values
  const clipPath = useTransform(scrollYProgress, (progress) => {
    const p = Math.min(Math.max(progress, 0), 1) * 100;
    if (shape === "horizontal") {
      return `inset(0% ${100 - p}% 0% 0%)`;
    }
    if (shape === "center") {
      const margin = (100 - p) / 2;
      return `inset(${margin}% ${margin}% ${margin}% ${margin}% round 16px)`;
    }
    if (shape === "diagonal") {
      return `polygon(0 0, ${p}% 0, ${Math.max(0, p - 20)}% 100%, 0 100%)`;
    }
    // Vertical default: bottom to top
    return `inset(0% 0% ${100 - p}% 0%)`;
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0]);

  return (
    <div ref={ref} className={containerClassName}>
      <motion.div
        style={{
          clipPath,
          willChange: "clip-path",
        }}
        className="relative w-full h-full"
      >
        <motion.div style={{ scale }} className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={className}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── 5. PinnedStory (Sticky Visual + Scrolling Narrative) ──────────────────────
export interface PinnedStoryProps {
  visual: ReactNode;
  chapters: Array<{
    badge?: string;
    title: string;
    description: string;
    details?: string[];
  }>;
  className?: string;
}

export function PinnedStory({
  visual,
  chapters,
  className = "",
}: PinnedStoryProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sticky Visual Column */}
        <div className="lg:col-span-6 lg:sticky lg:top-28 z-20">
          <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-2xl">
            {visual}
          </div>
        </div>

        {/* Narrative Chapters Column */}
        <div className="lg:col-span-6 space-y-28 py-12">
          {chapters.map((chapter, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-120px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 p-8 rounded-3xl bg-white border border-slate-200 shadow-lg hover:border-amber-400/80 transition-colors"
            >
              {chapter.badge && (
                <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider">
                  {chapter.badge}
                </span>
              )}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {chapter.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {chapter.description}
              </p>
              {chapter.details && chapter.details.length > 0 && (
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {chapter.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs text-slate-700 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── 6. VelocityResponsive (Subtle scroll velocity reaction) ───────────────────
export interface VelocityResponsiveProps {
  children: ReactNode;
  maxSkew?: number;
  className?: string;
}

export function VelocityResponsive({
  children,
  maxSkew = 2.5,
  className = "",
}: VelocityResponsiveProps) {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  
  // Transform velocity into subtle skew (between -maxSkew and +maxSkew degrees)
  const skewY = useTransform(velocity, [-2000, 2000], [-maxSkew, maxSkew]);
  const smoothSkew = useSpring(skewY, { stiffness: 280, damping: 30 });

  return (
    <motion.div
      style={{ skewY: smoothSkew, willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

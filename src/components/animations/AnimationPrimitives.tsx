"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { VIEWPORT } from "@/lib/motionConfig";

// ─── FadeInView ───────────────────────────────────────────────────────────────
interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: boolean;
  once?: boolean;
  as?: "div" | "section" | "article" | "p" | "span" | "h1" | "h2" | "h3" | "ul" | "li";
}

export function FadeInView({
  children,
  className,
  delay = 0,
  duration = 0.65,
  y = 30,
  x = 0,
  scale = 1,
  blur = false,
  once = true,
  as = "div",
}: FadeInViewProps) {
  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;
  return (
    <MotionComponent
      className={className}
      initial={{
        opacity: 0,
        y,
        x,
        scale,
        ...(blur ? { filter: "blur(12px)" } : {}),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        ...(blur ? { filter: "blur(0px)" } : {}),
      }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionComponent>
  );
}

// ─── StaggerGroup ─────────────────────────────────────────────────────────────
interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: StaggerGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 32,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── ClipReveal ───────────────────────────────────────────────────────────────
interface ClipRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "bottom" | "top" | "left" | "right";
}

const clipMap = {
  bottom: {
    hidden: "inset(100% 0% 0% 0%)",
    visible: "inset(0% 0% 0% 0%)",
  },
  top: {
    hidden: "inset(0% 0% 100% 0%)",
    visible: "inset(0% 0% 0% 0%)",
  },
  left: {
    hidden: "inset(0% 100% 0% 0%)",
    visible: "inset(0% 0% 0% 0%)",
  },
  right: {
    hidden: "inset(0% 0% 0% 100%)",
    visible: "inset(0% 0% 0% 0%)",
  },
};

export function ClipReveal({
  children,
  className,
  delay = 0,
  direction = "bottom",
}: ClipRevealProps) {
  const { hidden, visible } = clipMap[direction];
  return (
    <motion.div
      className={className}
      initial={{ clipPath: hidden, opacity: 0 }}
      whileInView={{ clipPath: visible, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── WordReveal ───────────────────────────────────────────────────────────────
interface WordRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function WordReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.055,
  as = "h2",
}: WordRevealProps) {
  const words = text.split(" ");
  const MotionTag = motion[as] as typeof motion.h2;

  return (
    <MotionTag
      className={`overflow-hidden ${className ?? ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </MotionTag>
  );
}

// ─── CountUp ──────────────────────────────────────────────────────────────────
interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 2200,
  className,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const startedRef = useRef(false);

  const runCount = useCallback(() => {
    if (!ref.current || startedRef.current) return;
    startedRef.current = true;
    const startTime = performance.now();
    const step = (now: number) => {
      if (!ref.current) return;
      const progress = Math.min((now - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      ref.current.textContent =
        prefix +
        (decimals > 0
          ? current.toFixed(decimals)
          : Math.floor(current).toLocaleString()) +
        suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, suffix, prefix, decimals]);

  useEffect(() => {
    if (isInView) runCount();
  }, [isInView, runCount]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

// ─── MagneticButton ───────────────────────────────────────────────────────────
interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticWrapper({
  children,
  className,
  strength = 0.35,
}: MagneticProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

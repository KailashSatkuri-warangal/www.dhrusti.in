"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { MOTION_EASING, MOTION_DURATION } from "@/lib/motionConfig";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  effect?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "blur" | "mask-up" | "zoom-3d";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  effect = "fade-up",
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (effect) {
      case "mask-up":
        return {
          hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, y: 30 },
          visible: { 
            clipPath: "inset(0% 0% 0% 0%)", 
            opacity: 1, 
            y: 0,
            transition: { duration: MOTION_DURATION.slow, delay, ease: MOTION_EASING.expo }
          }
        };
      case "blur":
        return {
          hidden: { opacity: 0, filter: "blur(14px)", y: 30, scale: 0.97 },
          visible: { 
            opacity: 1, 
            filter: "blur(0px)", 
            y: 0, 
            scale: 1,
            transition: { duration: MOTION_DURATION.normal, delay, ease: MOTION_EASING.smooth }
          }
        };
      case "zoom-3d":
        return {
          hidden: { opacity: 0, scale: 0.85, rotateX: 15, y: 40 },
          visible: { 
            opacity: 1, 
            scale: 1, 
            rotateX: 0, 
            y: 0,
            transition: { duration: MOTION_DURATION.slow, delay, ease: MOTION_EASING.expo }
          }
        };
      case "fade-left":
        return {
          hidden: { opacity: 0, x: 40, filter: "blur(6px)" },
          visible: { 
            opacity: 1, 
            x: 0, 
            filter: "blur(0px)",
            transition: { duration: MOTION_DURATION.normal, delay, ease: MOTION_EASING.smooth }
          }
        };
      case "fade-right":
        return {
          hidden: { opacity: 0, x: -40, filter: "blur(6px)" },
          visible: { 
            opacity: 1, 
            x: 0, 
            filter: "blur(0px)",
            transition: { duration: MOTION_DURATION.normal, delay, ease: MOTION_EASING.smooth }
          }
        };
      case "fade-down":
        return {
          hidden: { opacity: 0, y: -35, filter: "blur(6px)" },
          visible: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: { duration: MOTION_DURATION.normal, delay, ease: MOTION_EASING.smooth }
          }
        };
      case "fade-up":
      default:
        return {
          hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
          visible: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: { duration: MOTION_DURATION.normal, delay, ease: MOTION_EASING.smooth }
          }
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

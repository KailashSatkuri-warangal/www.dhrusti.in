"use client";

import { motion } from "framer-motion";
import { MOTION_EASING } from "@/lib/motionConfig";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  mode?: "words" | "chars";
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  mode = "words",
  tag: Tag = "h1",
}: SplitTextProps) {
  if (mode === "chars") {
    const chars = text.split("");
    return (
      <Tag className={`overflow-hidden inline-flex flex-wrap ${className}`}>
        {chars.map((char, index) => (
          <span key={index} className="inline-block overflow-hidden">
            <motion.span
              initial={{ y: "110%", opacity: 0, rotateX: 45 }}
              whileInView={{ y: "0%", opacity: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.75,
                delay: delay + index * 0.02,
                ease: MOTION_EASING.expo,
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </Tag>
    );
  }

  const words = text.split(" ");
  return (
    <Tag className={`overflow-hidden inline-flex flex-wrap gap-x-[0.3em] ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: "110%", opacity: 0, filter: "blur(6px)" }}
            whileInView={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              duration: 0.85,
              delay: delay + index * 0.06,
              ease: MOTION_EASING.smooth,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const variant = cursorTarget.getAttribute("data-cursor") || "hover";
        let customText = cursorTarget.getAttribute("data-cursor-text") || "";
        if (!customText) {
          if (variant === "view") customText = "VIEW";
          else if (variant === "explore") customText = "EXPLORE";
          else if (variant === "drag") customText = "DRAG";
          else if (variant === "close") customText = "CLOSE";
        }
        setCursorText(customText);
        setCursorVariant(variant);
      } else if (target.closest("a, button, [role='button'], input, select, textarea")) {
        setCursorVariant("hover");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-amber-600 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-sm"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: cursorVariant === "hover" && cursorText ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center font-mono text-[10px] font-bold tracking-widest uppercase text-white -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-600/50 shadow-md"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: cursorText ? 76 : cursorVariant === "hover" ? 44 : 28,
          height: cursorText ? 76 : cursorVariant === "hover" ? 44 : 28,
          backgroundColor: cursorText ? "rgba(217, 119, 6, 0.95)" : cursorVariant === "hover" ? "rgba(217, 119, 6, 0.15)" : "rgba(217, 119, 6, 0.04)",
          backdropFilter: cursorText ? "blur(4px)" : "none",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.2 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center font-bold text-[10px] leading-tight select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}

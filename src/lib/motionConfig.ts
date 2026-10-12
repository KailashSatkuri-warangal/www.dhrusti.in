/**
 * Centralized Animation Tokens & Physics Constants
 * Dhrusti IT Security — Cinematic Web Experience
 * v2.0 — Full motion language system
 */

// ─── Easing Curves ────────────────────────────────────────────────────────────
export const MOTION_EASING = {
  // Ultra-smooth Apple-grade cubic-bezier
  smooth: [0.22, 1, 0.36, 1] as const,
  // Exponential fast-out slow-in (entrances)
  expo: [0.16, 1, 0.3, 1] as const,
  // Heavy cinematic entrance
  cinematic: [0.25, 1, 0.5, 1] as const,
  // Crisp tech transition
  tech: [0.4, 0, 0.2, 1] as const,
  // Standard ease-in-out
  standard: [0.4, 0, 0.2, 1] as const,
  // Bouncy spring (Framer Motion spring object)
  spring: { type: "spring", stiffness: 380, damping: 28 },
  // Gentle floating spring
  gentleSpring: { type: "spring", stiffness: 180, damping: 22 },
  // Magnetic button spring
  magneticSpring: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
  // Page transition spring
  pageSpring: { type: "spring", stiffness: 260, damping: 30 },
} as const;

// ─── Duration Tokens ──────────────────────────────────────────────────────────
export const MOTION_DURATION = {
  instant:   0.12,  // Micro feedback (button press)
  fast:      0.28,  // Dropdown, tooltip
  normal:    0.50,  // Standard / card entrance
  standard:  0.50,  // Card entrance, UI transitions
  slow:      0.80,  // Section reveals
  cinematic: 1.10,  // Hero elements, page transitions
  epic:      1.60,  // Full-screen cinematic moments
} as const;

// ─── Stagger Values ───────────────────────────────────────────────────────────
export const STAGGER_TIMING = {
  chars: 0.022,
  words: 0.055,
  items: 0.075,
  cards: 0.10,
  sections: 0.15,
} as const;

// ─── Viewport Margin for whileInView ─────────────────────────────────────────
export const VIEWPORT = {
  once: true,
  margin: "-60px",
} as const;

export const VIEWPORT_EARLY = {
  once: true,
  margin: "-20px",
} as const;

import type { Variants } from "framer-motion";

// ─── Page Transition Variants (route-aware) ───────────────────────────────────
export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: MOTION_EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: {
      duration: 0.2,
      ease: MOTION_EASING.standard,
    },
  },
};

// Route-specific identities (clean, fast, never break position:fixed)
export const routeTransitionMap: Record<string, Variants> = {
  "/": {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4, ease: MOTION_EASING.smooth } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: MOTION_EASING.standard } },
  },
  "/about-us": {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: MOTION_EASING.smooth } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.2, ease: MOTION_EASING.standard } },
  },
  "/services": {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: MOTION_EASING.smooth } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.2, ease: MOTION_EASING.standard } },
  },
  "/products": {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: MOTION_EASING.smooth } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.2, ease: MOTION_EASING.standard } },
  },
  "/contact": {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: MOTION_EASING.smooth } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.2, ease: MOTION_EASING.standard } },
  },
};

// ─── Section Entrance Variants ────────────────────────────────────────────────

/** Pattern A — Fade + Slide up */
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.slow, ease: MOTION_EASING.expo },
  },
};

/** Pattern B — Clip path reveal from bottom */
export const maskRevealVariants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0,
    y: 32,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.slow, ease: MOTION_EASING.expo },
  },
};

/** Pattern C — Cinematic: blur + scale + opacity + translate */
export const blurRevealVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(14px)",
    y: 30,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    scale: 1,
    transition: { duration: MOTION_DURATION.slow, ease: MOTION_EASING.smooth },
  },
};

/** Pattern D — Slide from left */
export const slideLeftVariants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: MOTION_DURATION.slow, ease: MOTION_EASING.expo },
  },
};

/** Pattern E — Slide from right */
export const slideRightVariants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: MOTION_DURATION.slow, ease: MOTION_EASING.expo },
  },
};

/** Pattern F — Scale + depth */
export const zoom3DVariants = {
  hidden: {
    opacity: 0,
    scale: 0.84,
    rotateX: 10,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: MOTION_DURATION.slow, ease: MOTION_EASING.expo },
  },
};

/** Pattern G — Stagger container */
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_TIMING.cards,
      delayChildren: 0.1,
    },
  },
};

/** Pattern H — Stagger item (used as child of staggerContainer) */
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: MOTION_DURATION.standard, ease: MOTION_EASING.expo },
  },
};

// ─── Card Hover Variants ──────────────────────────────────────────────────────
export const cardHoverVariants = {
  rest: { y: 0, boxShadow: "0 4px 16px -4px rgba(15,23,42,0.06)" },
  hover: {
    y: -7,
    boxShadow: "0 22px 40px -12px rgba(15,23,42,0.13)",
    transition: MOTION_EASING.spring,
  },
};

// ─── Button Hover Variants ────────────────────────────────────────────────────
export const primaryButtonVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -2, transition: MOTION_EASING.spring },
  tap: { scale: 0.97, y: 0, transition: { duration: 0.1 } },
};

export const secondaryButtonVariants = {
  rest: { x: 0 },
  hover: { x: 4, transition: MOTION_EASING.gentleSpring },
};

// ─── Text Reveal (word split) ─────────────────────────────────────────────────
export const wordRevealContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: STAGGER_TIMING.words },
  },
};

export const wordRevealItem = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.55, ease: MOTION_EASING.expo },
  },
};

// ─── Image Reveal ─────────────────────────────────────────────────────────────
export const imageRevealVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: MOTION_DURATION.slow, ease: MOTION_EASING.expo },
  },
};

// ─── Drawer / Panel ──────────────────────────────────────────────────────────
export const drawerVariants = {
  closed: { x: "100%", opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: MOTION_EASING.expo },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.35, ease: MOTION_EASING.tech },
  },
};

export const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

// ─── Accordion ───────────────────────────────────────────────────────────────
export const accordionVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.38, ease: MOTION_EASING.smooth },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: MOTION_EASING.tech },
  },
};

// ─── Mobile-specific reduced values ─────────────────────────────────────────
export const MOBILE_MOTION = {
  duration: { fast: 0.22, standard: 0.4, slow: 0.6 },
  stagger: { items: 0.055, cards: 0.08 },
  translate: { sm: 16, md: 24 }, // smaller y offsets on mobile
};

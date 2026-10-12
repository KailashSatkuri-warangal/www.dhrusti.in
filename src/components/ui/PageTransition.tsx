"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { routeTransitionMap, pageTransitionVariants } from "@/lib/motionConfig";

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * Global Page Transition Wrapper
 * Uses route pathname as AnimatePresence key.
 * Each route change triggers exit → enter animation sequence.
 * Route-specific variants from motionConfig.ts control each page identity.
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  // Resolve route-specific variant or fall back to default
  // Strip dynamic segments: /services/cctv-installation → /services
  const baseRoute = "/" + (pathname.split("/")[1] || "");
  const variants = routeTransitionMap[pathname] ?? routeTransitionMap[baseRoute] ?? pageTransitionVariants;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

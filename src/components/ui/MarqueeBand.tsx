"use client";

import Image from "next/image";
import { PARTNERS_LOGOS } from "@/lib/data/siteData";

export default function MarqueeBand() {
  const items = [...PARTNERS_LOGOS, ...PARTNERS_LOGOS, ...PARTNERS_LOGOS];

  return (
    <div className="w-full py-8 overflow-hidden bg-white border-y border-slate-200 relative shadow-sm">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <div className="flex gap-12 items-center animate-[marquee_25s_linear_infinite] whitespace-nowrap w-max">
        {items.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-500 hover:shadow-md transition-all shrink-0 group"
          >
            <div className="relative w-28 h-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={40}
                className="max-h-8 max-w-[100px] object-contain"
              />
            </div>
            <span className="text-xs font-bold text-slate-700 group-hover:text-amber-700 tracking-wider uppercase font-mono">
              {partner.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}

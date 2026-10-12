"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { 
  ShieldCheck, 
  RotateCw, 
  Wifi, 
  Sun, 
  Radio, 
  Eye, 
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Play,
  Pause,
  Moon,
  Layers,
  Box,
  Sliders,
  Crosshair,
  Maximize2
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Dynamic import of 3D WebGL Canvas with SSR disabled to prevent hydration freeze
const Realistic3DCameraCanvas = dynamic(
  () => import("./Realistic3DCameraCanvas"),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[380px] md:min-h-[500px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-amber-500/20 border-t-amber-600 rounded-full animate-spin" />
          <span className="text-xs font-mono text-slate-500 font-bold tracking-wider uppercase">Loading 3D Turntable...</span>
        </div>
      </div>
    )
  }
);

export default function Turntable360Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const cameraModels = [
    {
      id: "solar-ptz",
      name: "4K Solar 4G PTZ Camera",
      badge: "Flagship 360°",
      is3D: true,
      image: "/images/solare.jpg",
      resolution: "4K Ultra HD (8MP)",
      power: "Solar + 18,000mAh Battery",
      connectivity: "4G SIM / No WiFi Needed",
      sensor: "Sony Starvis Dual Lens + Volumetric IR",
      description: "Complete off-grid security with 355° motorized rotation, high-efficiency solar panel, and automatic humanoid laser tracking."
    },
    {
      id: "dual-linkage",
      name: "4G Dual-Lens Linkage Camera",
      badge: "Dual Screen AI",
      is3D: true,
      image: "/images/link.jpeg",
      resolution: "Dual 4MP+4MP (8MP Total)",
      power: "DC 12V / Solar Compatible",
      connectivity: "4G LTE Cellular",
      sensor: "Dual Optical + Telephoto Auto-Zoom",
      description: "Simultaneously view fixed wide 180° panoramic angle and auto-zoom track moving intruders with motorized lower PTZ head."
    },
    {
      id: "bullet-ir",
      name: "Long-Range Outdoor Bullet",
      badge: "Industrial IP67",
      is3D: true,
      image: "/images/bullet.jpeg",
      resolution: "5MP Super HD",
      power: "PoE / 12V DC",
      connectivity: "Gigabit Ethernet / Coaxial",
      sensor: "Array Infrared (60m Range) + Metal Visor",
      description: "Heavy-duty perimeter surveillance for gates, boundaries, and highway entrances with articulated 3-axis mounting arm."
    },
    {
      id: "panoramic-dome",
      name: "Indoor Panoramic Dome",
      badge: "Discreet Interior",
      is3D: true,
      image: "/images/dome.jpg",
      resolution: "4MP Crystal HD",
      power: "PoE 802.3af",
      connectivity: "IP Network",
      sensor: "115° Ultra-Wide Angle Lens",
      description: "Low-profile aesthetic dome camera for retail showrooms, luxury living rooms, and banks with smoked polycarbonate glass."
    },
    {
      id: "wifi-ptz",
      name: "Smart 360° WiFi PTZ Camera",
      badge: "Smart WiFi PTZ",
      is3D: true,
      image: "/images/wifi.jpeg",
      resolution: "3MP / 4MP Super HD",
      power: "5V USB / 12V DC",
      connectivity: "Dual-Band WiFi (2.4/5GHz)",
      sensor: "AI Humanoid Tracking + Privacy Mode",
      description: "Compact motorized desktop/wall camera with smooth pan-tilt, two-way audio, and instant smartphone swipe controls."
    }
  ];

  const [selectedModel, setSelectedModel] = useState(cameraModels[0]);
  const [rotationDeg, setRotationDeg] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isNightMode, setIsNightMode] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number>(0);
  const dragStartDeg = useRef<number>(0);

  // Dynamic Hotspots
  const hotspots = [
    {
      id: 1,
      angle: "Front Angle (0°)",
      title: `${selectedModel.resolution} Optical Sensor`,
      desc: `Equipped with ${selectedModel.sensor} delivering high color fidelity in Day/Night conditions.`,
      top: "42%",
      left: "48%",
      icon: Eye
    },
    {
      id: 2,
      angle: "Motor Axis (90°)",
      title: "Brushless 355° Pan Motor",
      desc: "Sub-millimeter servo control for precision tracking with zero mechanical noise.",
      top: "54%",
      left: "64%",
      icon: RotateCw
    },
    {
      id: 3,
      angle: "Power Unit (180°)",
      title: selectedModel.power,
      desc: "Engineered for 24/7 continuous uninterrupted uptime without overheating.",
      top: "24%",
      left: "56%",
      icon: Sun
    },
    {
      id: 4,
      angle: "Connectivity Hub (270°)",
      title: selectedModel.connectivity,
      desc: "Encrypted live streaming to Dhrusti Mobile App with 0.3-second latency.",
      top: "72%",
      left: "44%",
      icon: Radio
    }
  ];

  // Auto-rotate ticker
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setRotationDeg((prev) => (prev + 1) % 360);
    }, 35);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    dragStartX.current = e.clientX;
    dragStartDeg.current = rotationDeg;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX.current;
    const newDeg = (dragStartDeg.current + Math.round(deltaX * 0.7)) % 360;
    setRotationDeg(newDeg < 0 ? newDeg + 360 : newDeg);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Cinematic scroll-driven exit & depth parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);
  const cameraScale = useTransform(scrollYProgress, [0, 0.85], [1, 0.94]);
  const bgParallax = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const smoothHeroY = useSpring(heroY, { stiffness: 220, damping: 28 });
  const smoothBgY = useSpring(bgParallax, { stiffness: 180, damping: 26 });
  const smoothCameraScale = useSpring(cameraScale, { stiffness: 220, damping: 28 });

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full min-h-[720px] lg:min-h-[820px] overflow-hidden flex flex-col justify-between select-none transition-colors duration-500 ${
        isNightMode ? "bg-[#070d1e]" : "bg-[#f8fafc]"
      }`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Background Ambience & Clean Pattern with Depth Parallax */}
      <motion.div 
        style={{ y: smoothBgY }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className={`absolute inset-0 ${isNightMode ? "bg-security-grid opacity-30" : "bg-security-grid-light opacity-50"}`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full blur-3xl transition-opacity duration-700 ${
          isNightMode ? "bg-soft-blue-glow opacity-95" : "bg-radial-sunlight opacity-100"
        }`} />
      </motion.div>

      {/* Top Status HUD Bar */}
      <div className="relative z-20 pt-6 px-4 sm:px-8 lg:px-12 w-full max-w-[1720px] mx-auto flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] font-mono shadow-sm transition-colors ${
            isNightMode 
              ? "bg-slate-900/85 border-slate-700 text-slate-200" 
              : "bg-white/95 border-slate-200 text-slate-800"
          }`}>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
            <span className="font-bold tracking-wider text-amber-500">360° LIVE 3D INSPECTION</span>
            <span className={isNightMode ? "text-slate-600" : "text-slate-300"}>|</span>
            <span className={`font-bold ${isNightMode ? "text-cyan-400" : "text-slate-900"}`}>{rotationDeg}° ORBIT</span>
          </div>

          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[11px] font-mono uppercase tracking-wider transition-all shadow-sm ${
              isAutoRotating 
                ? "bg-amber-600 text-white font-bold border-amber-600 shadow-md" 
                : isNightMode
                  ? "bg-slate-900/80 text-slate-300 border-slate-700 hover:border-amber-500 hover:text-white"
                  : "bg-white text-slate-700 border-slate-200 hover:border-amber-500"
            }`}
          >
            {isAutoRotating ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            {isAutoRotating ? "Pause Spin" : "Auto Spin"}
          </button>
        </div>

        {/* Right Toggle: Simulation Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsNightMode(!isNightMode)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[11px] font-mono uppercase tracking-wider transition-all shadow-sm ${
              isNightMode 
                ? "bg-cyan-600 text-white font-bold border-cyan-500 shadow-md shadow-cyan-600/30" 
                : "bg-white text-slate-700 border-slate-200 hover:border-cyan-600"
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-cyan-200" />
            {isNightMode ? "Night IR Active" : "Simulate Night Mode"}
          </button>
        </div>
      </div>

      {/* Centerpiece: Real-Time 3D WebGL Camera & Editorial Showcase in Full-Width 3-Column Grid */}
      <motion.div 
        style={{ y: smoothHeroY, opacity: heroOpacity, scale: smoothCameraScale }}
        className="relative z-10 flex-1 flex items-center justify-center w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-6 lg:py-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 2xl:gap-16 items-center w-full">
          
          {/* Left Column: Editorial Typography, Model Selector & CTAs */}
          <div className="lg:col-span-4 xl:col-span-4 z-20 space-y-5 pointer-events-auto">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-[11px] font-mono uppercase tracking-widest shadow-sm ${
              isNightMode 
                ? "bg-amber-500/15 border-amber-500/30 text-amber-400" 
                : "bg-amber-50 border-amber-200 text-amber-800"
            }`}>
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              {selectedModel.badge} • Model #{selectedModel.id.toUpperCase()}
            </div>

            <h1 className={`text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.12] ${
              isNightMode ? "text-white" : "text-slate-900"
            }`}>
              {selectedModel.name}
            </h1>

            <p className={`text-xs sm:text-sm leading-relaxed font-normal max-w-lg ${
              isNightMode ? "text-slate-300" : "text-slate-600"
            }`}>
              {selectedModel.description}
            </p>

            {/* Model Switcher Buttons */}
            <div className={`p-4 rounded-2xl border shadow-sm space-y-2.5 ${
              isNightMode 
                ? "bg-slate-900/80 border-slate-800 shadow-xl backdrop-blur-md" 
                : "bg-white/95 border-slate-200"
            }`}>
              <span className={`text-[10px] font-mono uppercase tracking-widest block font-bold flex items-center gap-1.5 ${
                isNightMode ? "text-slate-400" : "text-slate-500"
              }`}>
                <Layers className="w-3.5 h-3.5 text-amber-500" /> Switch Active Camera Model:
              </span>
              <div className="flex flex-wrap gap-2">
                {cameraModels.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    className={`px-3 py-2 rounded-xl text-[11px] font-mono transition-all uppercase cursor-pointer ${
                      selectedModel.id === model.id
                        ? "bg-amber-600 text-white font-bold shadow-md shadow-amber-600/25"
                        : isNightMode
                          ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {model.badge}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={`/get-a-quote?product=${selectedModel.id}`}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Get Custom Quote <ChevronRight className="w-4 h-4" />
              </Link>

              <Link
                href="/products"
                className={`px-5 py-3.5 rounded-xl border font-semibold text-xs tracking-wider uppercase transition-all shadow-sm ${
                  isNightMode 
                    ? "bg-slate-900/80 border-slate-700 text-slate-200 hover:border-amber-500 hover:text-amber-400" 
                    : "bg-white border-slate-200 hover:border-amber-500 text-slate-800"
                }`}
              >
                Full Catalog
              </Link>
            </div>
          </div>

          {/* Center Column: Dedicated 3D WebGL Interactive Model Stage */}
          <div 
            onMouseDown={handleMouseDown}
            className="lg:col-span-5 xl:col-span-5 relative w-full h-[460px] sm:h-[520px] lg:h-[580px] xl:h-[640px] flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
          >
            {/* Ambient Circular Radar Grid behind Camera */}
            <div className={`absolute inset-0 max-w-[500px] max-h-[500px] m-auto rounded-full border animate-spin-slow pointer-events-none scale-110 ${
              isNightMode ? "border-amber-500/25" : "border-amber-500/20"
            }`} />
            <div className={`absolute inset-0 max-w-[360px] max-h-[360px] m-auto rounded-full border border-dashed pointer-events-none ${
              isNightMode ? "border-cyan-500/25" : "border-amber-500/15"
            }`} />

            {selectedModel.is3D ? (
              <Realistic3DCameraCanvas 
                rotationDeg={rotationDeg} 
                isNightMode={isNightMode} 
                fovScanning={true} 
                modelId={selectedModel.id}
              />
            ) : (
              <div 
                className="relative w-full h-full flex items-center justify-center transition-transform duration-75 ease-out"
                style={{
                  transform: `perspective(1000px) rotateY(${rotationDeg}deg) scale(${1 + Math.sin((rotationDeg * Math.PI) / 180) * 0.04})`,
                  filter: isNightMode ? "brightness(1.1) contrast(1.1) drop-shadow(0 15px 35px rgba(2,132,199,0.3))" : "drop-shadow(0 20px 40px rgba(15,23,42,0.12))"
                }}
              >
                <div className="relative w-[320px] h-[460px] md:w-[380px] md:h-[500px]">
                  <Image
                    src={selectedModel.image}
                    alt={selectedModel.name}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            {/* Interactive Hotspots */}
            {hotspots.map((spot) => {
              const Icon = spot.icon;
              const isCurrent = activeHotspot === spot.id;
              return (
                <div
                  key={spot.id}
                  style={{ top: spot.top, left: spot.left }}
                  className="absolute z-40 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(isCurrent ? null : spot.id);
                    }}
                    className="relative group p-2 focus:outline-none cursor-pointer"
                    aria-label={`Inspect ${spot.title}`}
                  >
                    <span className="absolute inset-0 rounded-full bg-amber-500/30 animate-ping" />
                    <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-amber-600 text-white font-bold border-2 border-white shadow-md transition-transform group-hover:scale-125">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                  </button>

                  {/* Hotspot Floating Tooltip */}
                  {isCurrent && (
                    <div className="absolute left-10 top-1/2 -translate-y-1/2 w-64 glass-panel-gold rounded-2xl p-4 text-left shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200">
                      <div className="text-[10px] font-mono text-amber-700 uppercase font-bold tracking-wider mb-1 flex items-center justify-between">
                        <span>{spot.angle}</span>
                        <button onClick={() => setActiveHotspot(null)} className="text-slate-400 hover:text-slate-700">✕</button>
                      </div>
                      <h5 className="text-xs font-bold text-slate-900 mb-1">{spot.title}</h5>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{spot.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Presets & Hardware Telemetry Cards */}
          <div className="lg:col-span-3 xl:col-span-3 z-20 space-y-3.5 pointer-events-auto">
            {/* Quick Angle Presets */}
            <div className={`rounded-2xl p-4 sm:p-5 space-y-3 shadow-sm border ${
              isNightMode 
                ? "bg-slate-900/80 border-slate-800 text-white backdrop-blur-md shadow-xl" 
                : "glass-panel-light"
            }`}>
              <span className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                isNightMode ? "text-amber-400" : "text-amber-800"
              }`}>
                • Quick Turntable Angles:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "0° Front Lens", deg: 0 },
                  { label: "90° Pan Axis", deg: 90 },
                  { label: "180° Solar Unit", deg: 180 },
                  { label: "270° SIM/Ports", deg: 270 },
                ].map((angle) => (
                  <button
                    key={angle.deg}
                    onClick={() => {
                      setIsAutoRotating(false);
                      setRotationDeg(angle.deg);
                    }}
                    className={`px-3 py-2 rounded-xl text-[10px] font-mono transition-all text-left cursor-pointer ${
                      rotationDeg === angle.deg
                        ? "bg-amber-600 text-white font-bold shadow-sm"
                        : isNightMode
                          ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {angle.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Stream Card */}
            <div className={`rounded-2xl p-4 sm:p-5 space-y-1.5 shadow-sm border ${
              isNightMode 
                ? "bg-slate-900/80 border-slate-800 text-white backdrop-blur-md shadow-xl" 
                : "glass-panel-light"
            }`}>
              <span className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                isNightMode ? "text-amber-400" : "text-amber-800"
              }`}>
                • Video Stream
              </span>
              <p className={`text-sm font-bold ${isNightMode ? "text-white" : "text-slate-900"}`}>{selectedModel.resolution}</p>
              <p className={`text-xs leading-relaxed ${isNightMode ? "text-slate-400" : "text-slate-500"}`}>Real-time low latency with AI humanoid object detection.</p>
            </div>

            {/* Power & Connectivity Card */}
            <div className={`rounded-2xl p-4 sm:p-5 space-y-1.5 shadow-sm border ${
              isNightMode 
                ? "bg-slate-900/80 border-slate-800 text-white backdrop-blur-md shadow-xl" 
                : "glass-panel-light"
            }`}>
              <span className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                isNightMode ? "text-amber-400" : "text-amber-800"
              }`}>
                • Power & Connectivity
              </span>
              <p className={`text-sm font-bold ${isNightMode ? "text-white" : "text-slate-900"}`}>{selectedModel.power}</p>
              <p className={`text-xs leading-relaxed ${isNightMode ? "text-slate-400" : "text-slate-500"}`}>{selectedModel.connectivity}</p>
            </div>

            {/* Optical Sensor Chip */}
            <div className={`rounded-2xl p-3.5 shadow-sm border flex items-center justify-between text-[11px] font-mono ${
              isNightMode 
                ? "bg-slate-900/80 border-slate-800 text-slate-300" 
                : "glass-panel-light text-slate-600"
            }`}>
              <span className={isNightMode ? "text-slate-500" : "text-slate-400"}>Sensor:</span>
              <span className={`font-bold truncate max-w-[180px] ${isNightMode ? "text-white" : "text-slate-800"}`}>{selectedModel.sensor}</span>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Bottom Hero Indicator */}
      <div className="relative z-20 pb-6 px-6 text-center pointer-events-none">
        <div className="inline-flex flex-col items-center gap-1.5">
          <span className={`text-[10px] font-mono tracking-widest uppercase flex items-center gap-2 ${
            isNightMode ? "text-slate-400" : "text-slate-500"
          }`}>
            <RotateCw className="w-3.5 h-3.5 text-amber-500 animate-spin" />
            Drag camera left/right or scroll to rotate 360°
          </span>
        </div>
      </div>
    </div>
  );
}

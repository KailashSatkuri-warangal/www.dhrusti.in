"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Eye, Sun, Moon, ShieldAlert, RotateCw, ZoomIn, ZoomOut } from "lucide-react";
import Magnetic from "@/components/animations/Magnetic";

interface InteractiveCamera3DProps {
  className?: string;
  autoRotate?: boolean;
}

export default function InteractiveCamera3D({
  className = "",
  autoRotate = true,
}: InteractiveCamera3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [visionMode, setVisionMode] = useState<"day" | "night" | "thermal">("day");
  const [panAngle, setPanAngle] = useState(0);
  const [tiltAngle, setTiltAngle] = useState(15);
  const [zoomLevel, setZoomLevel] = useState(1.0);
  const [isHovered, setIsHovered] = useState(false);

  // References for Three.js animation loop
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraGroupRef = useRef<THREE.Group | null>(null);
  const lensRingRef = useRef<THREE.Mesh | null>(null);
  const ledRef = useRef<THREE.PointLight | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffaed, 2.8);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xd97706, 2.0);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    const statusLed = new THREE.PointLight(0x10b981, 2, 4);
    statusLed.position.set(0, 0.9, 1.5);
    scene.add(statusLed);
    ledRef.current = statusLed;

    // 5. Build Procedural High-Tech CCTV Camera Model
    const cameraGroup = new THREE.Group();
    cameraGroupRef.current = cameraGroup;

    // Materials
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      metalness: 0.25,
      roughness: 0.35,
    });

    const darkTrimMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.8,
      roughness: 0.2,
    });

    const amberGoldMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.9,
      roughness: 0.2,
    });

    const opticalLensMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.85,
      ior: 1.52,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05
    });

    // Outer Dome / Bullet Shell
    const shellGeo = new THREE.CylinderGeometry(1.2, 1.1, 2.8, 48);
    shellGeo.rotateX(Math.PI / 2);
    const shellMesh = new THREE.Mesh(shellGeo, chassisMat);
    cameraGroup.add(shellMesh);

    // Front Bezel Ring
    const bezelGeo = new THREE.TorusGeometry(1.22, 0.08, 24, 64);
    bezelGeo.translate(0, 0, 1.4);
    const bezelMesh = new THREE.Mesh(bezelGeo, amberGoldMat);
    cameraGroup.add(bezelMesh);

    // Lens Barrel Outer
    const barrelGeo = new THREE.CylinderGeometry(0.85, 0.95, 0.6, 36);
    barrelGeo.rotateX(Math.PI / 2);
    barrelGeo.translate(0, 0, 1.35);
    const barrelMesh = new THREE.Mesh(barrelGeo, darkTrimMat);
    cameraGroup.add(barrelMesh);

    // Optical Glass Element
    const lensGeo = new THREE.SphereGeometry(0.75, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.45);
    lensGeo.rotateX(Math.PI / 2);
    lensGeo.translate(0, 0, 1.55);
    const lensMesh = new THREE.Mesh(lensGeo, opticalLensMat);
    cameraGroup.add(lensMesh);

    // IR LED Sensor Ring
    const irGeo = new THREE.RingGeometry(0.78, 1.05, 32);
    irGeo.translate(0, 0, 1.42);
    const irMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.5,
      roughness: 0.4
    });
    const irMesh = new THREE.Mesh(irGeo, irMat);
    cameraGroup.add(irMesh);
    lensRingRef.current = irMesh;

    // Mounting Bracket & Articulation Joint
    const jointGeo = new THREE.SphereGeometry(0.7, 24, 24);
    jointGeo.translate(0, 0, -1.3);
    const jointMesh = new THREE.Mesh(jointGeo, darkTrimMat);
    cameraGroup.add(jointMesh);

    const armGeo = new THREE.CylinderGeometry(0.28, 0.35, 1.4, 24);
    armGeo.translate(0, -1.2, -1.3);
    const armMesh = new THREE.Mesh(armGeo, chassisMat);
    cameraGroup.add(armMesh);

    const wallPlateGeo = new THREE.CylinderGeometry(1.0, 1.0, 0.15, 32);
    wallPlateGeo.translate(0, -1.9, -1.3);
    const wallPlateMesh = new THREE.Mesh(wallPlateGeo, darkTrimMat);
    cameraGroup.add(wallPlateMesh);

    scene.add(cameraGroup);

    // 6. Mouse Tracking & Window Resize
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);

    // 7. Render Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera orientation lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      if (cameraGroup) {
        if (autoRotate && !isHovered) {
          cameraGroup.rotation.y = Math.sin(elapsedTime * 0.6) * 0.45 + mouseRef.current.x * 0.6;
          cameraGroup.rotation.x = 0.15 + Math.cos(elapsedTime * 0.5) * 0.1 + mouseRef.current.y * 0.4;
        } else {
          cameraGroup.rotation.y = mouseRef.current.x * 0.9;
          cameraGroup.rotation.x = 0.15 + mouseRef.current.y * 0.5;
        }

        // Floating hover motion
        cameraGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08;

        // Angle readouts
        setPanAngle(Math.round((cameraGroup.rotation.y * 180) / Math.PI));
        setTiltAngle(Math.round((cameraGroup.rotation.x * 180) / Math.PI));
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [autoRotate, isHovered]);

  // Update Vision Shader Mode
  useEffect(() => {
    if (!ledRef.current) return;
    if (visionMode === "night") {
      ledRef.current.color.setHex(0xef4444); // Infrared Night Mode Red
      ledRef.current.intensity = 3.5;
    } else if (visionMode === "thermal") {
      ledRef.current.color.setHex(0xf59e0b); // Amber Thermal
      ledRef.current.intensity = 4.0;
    } else {
      ledRef.current.color.setHex(0x10b981); // Crisp Day Mode Emerald
      ledRef.current.intensity = 2.0;
    }
  }, [visionMode]);

  return (
    <div 
      className={`relative w-full aspect-square max-w-[540px] flex items-center justify-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseRef.current.targetX = 0;
        mouseRef.current.targetY = 0;
      }}
    >
      {/* 3D WebGL Canvas Host */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Cybernetic HUD Overlay & Telemetry Readout */}
      <div className="absolute top-4 left-4 pointer-events-none space-y-1 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-[10px] font-mono font-bold text-amber-400 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          OPTICAL 4K HDR • 60 FPS
        </div>
        <div className="text-[11px] font-mono text-slate-500 pl-1">
          PAN: <span className="text-slate-800 font-bold">{panAngle}°</span> | TILT: <span className="text-slate-800 font-bold">{tiltAngle}°</span>
        </div>
      </div>

      {/* Interactive Controls Pill */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 rounded-full bg-slate-900/85 backdrop-blur-xl border border-slate-700/80 shadow-2xl z-20">
        <Magnetic strength={0.2}>
          <button
            onClick={() => setVisionMode("day")}
            className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              visionMode === "day"
                ? "bg-amber-500 text-slate-950 shadow-md"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <Sun className="w-3.5 h-3.5" /> Day Optic
          </button>
        </Magnetic>

        <Magnetic strength={0.2}>
          <button
            onClick={() => setVisionMode("night")}
            className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              visionMode === "night"
                ? "bg-red-600 text-white shadow-md"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <Moon className="w-3.5 h-3.5" /> Night IR
          </button>
        </Magnetic>

        <Magnetic strength={0.2}>
          <button
            onClick={() => setVisionMode("thermal")}
            className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              visionMode === "thermal"
                ? "bg-amber-400 text-slate-950 shadow-md"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" /> AI Thermal
          </button>
        </Magnetic>
      </div>

      {/* Interactive Drag Hint */}
      <div className="absolute right-4 bottom-4 pointer-events-none hidden sm:block">
        <span className="text-[10px] font-mono text-slate-400 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200 shadow-sm">
          Drag to Orbit 360°
        </span>
      </div>
    </div>
  );
}

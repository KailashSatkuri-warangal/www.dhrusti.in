"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Realistic3DCameraProps {
  rotationDeg: number;
  isNightMode?: boolean;
  fovScanning?: boolean;
  modelId?: string;
}

export default function Realistic3DCameraCanvas({
  rotationDeg,
  isNightMode = false,
  fovScanning = true,
  modelId = "solar-ptz",
}: Realistic3DCameraProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraGroupRef = useRef<THREE.Group | null>(null);
  const lensGroupRef = useRef<THREE.Group | null>(null);
  const fovConesRef = useRef<THREE.Mesh[]>([]);
  const irLedsRef = useRef<THREE.Mesh[]>([]);
  const spotLightRef = useRef<THREE.SpotLight | null>(null);
  const lensGlowRef = useRef<THREE.PointLight | null>(null);
  const rayMeshesRef = useRef<THREE.Mesh[]>([]);
  const haloMeshRef = useRef<THREE.Mesh | null>(null);
  const targetRotationRef = useRef<number>(0);
  const currentRotationRef = useRef<number>(0);
  const mousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isVisibleRef = useRef<boolean>(true);

  useEffect(() => {
    targetRotationRef.current = (rotationDeg * Math.PI) / 180;
  }, [rotationDeg]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 520;
    const height = container.clientHeight || 520;

    // ── Scene ──────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 60);
    camera.position.set(0, 0.1, 4.6);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    rendererRef.current = renderer;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // ── Lighting ───────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

    // Front fill — lights the lens face toward viewer
    const frontFill = new THREE.DirectionalLight(0xfff6e8, 2.0);
    frontFill.position.set(0, 0.4, 7);
    scene.add(frontFill);

    // Top-left key (warm daylight)
    const keyLight = new THREE.DirectionalLight(0xfffbe8, 2.2);
    keyLight.position.set(-3, 5, 3);
    scene.add(keyLight);

    // Right fill (cool sky)
    const fillLight = new THREE.DirectionalLight(0xdbeafe, 1.0);
    fillLight.position.set(4, -1, 2);
    scene.add(fillLight);

    // Rim / backlight (warm amber edge)
    const rimLight = new THREE.DirectionalLight(0xf59e0b, 1.8);
    rimLight.position.set(0, 3, -5);
    scene.add(rimLight);

    // Lens center PointLight — inner glass glow, spills on bezel and IR LEDs
    const lensGlow = new THREE.PointLight(
      isNightMode ? 0xff2200 : 0xffaa30,
      isNightMode ? 5.5 : 4.5,
      2.6, 1.6
    );
    lensGlow.position.set(0, 0, 0.8);
    scene.add(lensGlow);
    lensGlowRef.current = lensGlow;

    // Optical spotlight through lens — forward projection beam
    const optSpot = new THREE.SpotLight(
      isNightMode ? 0xff2200 : 0xffb030,
      isNightMode ? 7.0 : 5.5,
      10.0,
      Math.PI / 9,   // ~20° half-angle
      0.5,
      1.9
    );
    optSpot.position.set(0, 0, 0.8);
    const spotTarget = new THREE.Object3D();
    spotTarget.position.set(0, 0, 8);
    scene.add(spotTarget);
    optSpot.target = spotTarget;
    scene.add(optSpot);
    spotLightRef.current = optSpot;

    // ── Wall Halo — canvas radial gradient texture ─────────────────────────
    const haloCanvas = document.createElement("canvas");
    haloCanvas.width = 512;
    haloCanvas.height = 512;
    const hCtx = haloCanvas.getContext("2d")!;
    const hGrad = hCtx.createRadialGradient(256, 256, 0, 256, 256, 256);
    if (isNightMode) {
      hGrad.addColorStop(0.0, "rgba(255, 40, 0, 0.92)");
      hGrad.addColorStop(0.3, "rgba(220, 10, 0, 0.55)");
      hGrad.addColorStop(0.65, "rgba(160, 0, 0, 0.18)");
      hGrad.addColorStop(1.0, "rgba(0, 0, 0, 0)");
    } else {
      hGrad.addColorStop(0.0, "rgba(255, 170, 30, 0.95)");
      hGrad.addColorStop(0.3, "rgba(255, 100, 0, 0.50)");
      hGrad.addColorStop(0.65, "rgba(255, 60, 0, 0.15)");
      hGrad.addColorStop(1.0, "rgba(0, 0, 0, 0)");
    }
    hCtx.fillStyle = hGrad;
    hCtx.fillRect(0, 0, 512, 512);
    const haloTex = new THREE.CanvasTexture(haloCanvas);

    const haloMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(4.2, 4.2),
      new THREE.MeshBasicMaterial({
        map: haloTex,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      })
    );
    haloMesh.position.set(0, 0.05, -1.7);
    scene.add(haloMesh);
    haloMeshRef.current = haloMesh;

    // ── PBR Materials ──────────────────────────────────────────────────────
    const pearlWhite = new THREE.MeshPhysicalMaterial({
      color: 0xeef2f7,
      metalness: 0.06,
      roughness: 0.2,
      clearcoat: 0.9,
      clearcoatRoughness: 0.07,
    });

    const darkMetal = new THREE.MeshStandardMaterial({
      color: 0x1a2436,
      metalness: 0.93,
      roughness: 0.13,
    });

    const obsidian = new THREE.MeshPhysicalMaterial({
      color: 0x060a12,
      metalness: 0.96,
      roughness: 0.04,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
    });

    const goldTrim = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.97,
      roughness: 0.09,
      emissive: 0xd97706,
      emissiveIntensity: 0.18,
    });

    // Glass lens — emissive inner glow + physical transmission
    const lensMat = new THREE.MeshPhysicalMaterial({
      color: isNightMode ? 0x1a0000 : 0x050d1a,
      emissive: isNightMode ? 0xff1500 : 0xff8c00,
      emissiveIntensity: isNightMode ? 3.0 : 2.0,
      metalness: 0.0,
      roughness: 0.0,
      transmission: 0.82,
      ior: 1.76,
      reflectivity: 0.99,
      clearcoat: 1.0,
      clearcoatRoughness: 0.0,
      thickness: 0.55,
    });

    const irLedMat = new THREE.MeshStandardMaterial({
      color: isNightMode ? 0xff2200 : 0xf59e0b,
      emissive: isNightMode ? 0xff2200 : 0xf59e0b,
      emissiveIntensity: isNightMode ? 2.8 : 1.8,
      roughness: 0.04,
      metalness: 0.1,
    });

    const fovConeMat = new THREE.MeshBasicMaterial({
      color: isNightMode ? 0xff2200 : 0xf59e0b,
      transparent: true,
      opacity: isNightMode ? 0.13 : 0.08,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    // Radial ray material — additive for glow effect
    const rayMatBase = new THREE.MeshBasicMaterial({
      color: isNightMode ? 0xff3030 : 0xffaa30,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const irLeds: THREE.Mesh[] = [];
    const fovCones: THREE.Mesh[] = [];
    const rayMeshes: THREE.Mesh[] = [];

    const createIrLed = (r = 0.032) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 12), irLedMat.clone());
      irLeds.push(m);
      return m;
    };

    const createFovCone = (radius = 1.35, length = 2.8) => {
      const cone = new THREE.Mesh(
        new THREE.ConeGeometry(radius, length, 48, 1, true),
        fovConeMat.clone()
      );
      // -PI/2 puts the apex (tip) at -Z (toward lens) and base (wide) at +Z (outward)
      // = realistic camera projection: narrow at source, widens as it projects forward
      cone.rotation.x = -Math.PI / 2;
      cone.position.set(0, 0, length / 2 + 0.25);
      fovCones.push(cone);
      return cone;
    };


    // ── Radial Starburst Laser Rays ────────────────────────────────────────
    // Fans out from lens face, each ray is a thin tapered cylinder.
    // spread = half-angle of fan from Z axis (radians)
    const createRadialRays = (
      parent: THREE.Group | THREE.Object3D,
      count = 20,
      rayLen = 2.2,
      spread = 0.44,
      zFace = 0.0
    ) => {
      const yAxis = new THREE.Vector3(0, 1, 0);
      for (let i = 0; i < count; i++) {
        const a = (i / count) * Math.PI * 2;

        // Vary length: alternating long / short rays like reference
        const varLen = rayLen * (i % 2 === 0 ? 1.0 : 0.62);

        // Direction: fan outward at 'spread' angle from +Z
        const dir = new THREE.Vector3(
          Math.cos(a) * Math.sin(spread),
          Math.sin(a) * Math.sin(spread),
          Math.cos(spread)
        ).normalize();

        const mat = rayMatBase.clone() as THREE.MeshBasicMaterial;
        // Stagger initial opacity for lively animation
        mat.opacity = 0.35 + 0.55 * ((i % 5) / 4);

        const ray = new THREE.Mesh(
          new THREE.CylinderGeometry(0.008, 0.001, varLen, 4),
          mat
        );

        // Orient the default Y-up cylinder along 'dir'
        const q = new THREE.Quaternion().setFromUnitVectors(yAxis, dir);
        ray.quaternion.copy(q);
        ray.position.copy(dir.clone().multiplyScalar(varLen / 2));
        ray.position.z += zFace;

        parent.add(ray);
        rayMeshes.push(ray);
      }
    };

    // Small glowing dot at tip of each ray (like reference image orbs)
    const createRayTips = (
      parent: THREE.Group | THREE.Object3D,
      count = 20,
      rayLen = 2.2,
      spread = 0.44,
      zFace = 0.0
    ) => {
      for (let i = 0; i < count; i++) {
        const a = (i / count) * Math.PI * 2;
        const varLen = rayLen * (i % 2 === 0 ? 1.0 : 0.62);
        const dir = new THREE.Vector3(
          Math.cos(a) * Math.sin(spread),
          Math.sin(a) * Math.sin(spread),
          Math.cos(spread)
        ).normalize();

        const tipMat = new THREE.MeshBasicMaterial({
          color: isNightMode ? 0xff5050 : 0xffcc60,
          transparent: true,
          opacity: 0.9,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const tip = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 8), tipMat);
        tip.position.copy(dir.clone().multiplyScalar(varLen));
        tip.position.z += zFace;
        parent.add(tip);
        rayMeshes.push(tip);
      }
    };

    const cameraGroup = new THREE.Group();
    cameraGroupRef.current = cameraGroup;
    scene.add(cameraGroup);

    let lensGroup: THREE.Group = new THREE.Group();

    // ======================================================================
    // 5 HIGH-FIDELITY 3D CAMERA MODELS
    // ======================================================================

    if (modelId === "dual-linkage" || modelId === "4g-linkage-dual-camera") {
      // ──────────────────────────────────────────────────────────────────────
      // MODEL 2: 4G Dual-Lens Linkage Camera
      // ──────────────────────────────────────────────────────────────────────
      cameraGroup.position.set(0, 0, 0);

      // Wall back-plate
      const basePlate = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.7, 0.1), darkMetal);
      basePlate.position.set(0, 0.2, -1.1);
      cameraGroup.add(basePlate);

      // Short arm
      const wallArm = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.5), darkMetal);
      wallArm.position.set(0, 0.2, -0.85);
      cameraGroup.add(wallArm);

      // Fixed panoramic upper housing (box with rounded look via clearcoat)
      const fixedBody = new THREE.Mesh(new THREE.BoxGeometry(1.22, 0.52, 0.7), pearlWhite);
      fixedBody.position.set(0, 0.68, -0.22);
      cameraGroup.add(fixedBody);

      // Dual fixed lenses — front face
      for (const offset of [-0.34, 0.34]) {
        const bezel = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.06, 24), obsidian);
        bezel.rotation.x = Math.PI / 2;
        bezel.position.set(offset, 0.68, 0.13);
        cameraGroup.add(bezel);

        const gold = new THREE.Mesh(new THREE.TorusGeometry(0.155, 0.012, 12, 24), goldTrim);
        gold.position.set(offset, 0.68, 0.16);
        cameraGroup.add(gold);

        const fixedLens = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), lensMat.clone());
        fixedLens.position.set(offset, 0.68, 0.15);
        cameraGroup.add(fixedLens);

        const cone = createFovCone(0.75, 1.8);
        cone.position.set(offset, 0.68, 1.0);
        cameraGroup.add(cone);
      }

      // 4G Antennas
      const antGeo = new THREE.CylinderGeometry(0.022, 0.03, 1.0, 16);
      for (const [x, rz] of [[-0.46, 0.18], [0.46, -0.18]] as [number, number][]) {
        const ant = new THREE.Mesh(antGeo, darkMetal);
        ant.position.set(x, 1.22, -0.22);
        ant.rotation.z = rz;
        cameraGroup.add(ant);
      }

      // PTZ pan joint
      const panJoint = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.12, 24), darkMetal);
      panJoint.position.set(0, 0.28, -0.22);
      cameraGroup.add(panJoint);

      // PTZ ball turret
      lensGroup = new THREE.Group();
      lensGroup.position.set(0, -0.18, -0.08);
      cameraGroup.add(lensGroup);

      lensGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.52, 32, 28), pearlWhite));

      const ptzFace = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.1, 28), obsidian);
      ptzFace.rotation.x = Math.PI / 2;
      ptzFace.position.set(0, 0, 0.44);
      lensGroup.add(ptzFace);

      const ptzGold = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.016, 16, 32), goldTrim);
      ptzGold.position.set(0, 0, 0.5);
      lensGroup.add(ptzGold);

      const ptzLens = new THREE.Mesh(new THREE.SphereGeometry(0.19, 20, 18), lensMat.clone());
      ptzLens.position.set(0, 0, 0.5);
      lensGroup.add(ptzLens);

      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        const led = createIrLed(0.03);
        led.position.set(Math.cos(a) * 0.27, Math.sin(a) * 0.27, 0.49);
        lensGroup.add(led);
      }

      lensGroup.add(createFovCone(1.25, 2.8));
      createRadialRays(lensGroup, 20, 2.0, 0.44, 0.5);
      createRayTips(lensGroup, 20, 2.0, 0.44, 0.5);

    } else if (
      modelId === "bullet-ir" ||
      modelId === "long-range-bullet-camera" ||
      modelId === "smart-sim-camera"
    ) {
      // ──────────────────────────────────────────────────────────────────────
      // MODEL 3: Long-Range Outdoor Bullet Camera
      // ──────────────────────────────────────────────────────────────────────
      cameraGroup.position.set(0, 0.05, -0.2);

      // Wall flange
      const flange = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.55, 0.1, 24), darkMetal);
      flange.rotation.x = Math.PI / 2;
      flange.position.set(0, 0.25, -1.25);
      cameraGroup.add(flange);

      // Articulated knuckle arm
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.75, 20), darkMetal);
      arm.rotation.x = 0.55;
      arm.position.set(0, -0.05, -0.9);
      cameraGroup.add(arm);

      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.2, 18, 18), darkMetal);
      ball.position.set(0, -0.32, -0.58);
      cameraGroup.add(ball);

      lensGroup = new THREE.Group();
      lensGroup.position.set(0, 0, -0.2);
      cameraGroup.add(lensGroup);

      // Main cylindrical body
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.46, 1.6, 32), pearlWhite);
      body.rotation.x = Math.PI / 2;
      lensGroup.add(body);

      // Cooling fins
      for (const z of [-0.45, -0.25, -0.05, 0.15]) {
        const fin = new THREE.Mesh(new THREE.TorusGeometry(0.505, 0.016, 10, 32), darkMetal);
        fin.position.set(0, 0, z);
        lensGroup.add(fin);
      }

      // Sunshield
      const shade = new THREE.Mesh(
        new THREE.CylinderGeometry(0.55, 0.55, 1.4, 24, 1, true, 0, Math.PI),
        pearlWhite
      );
      shade.rotation.x = Math.PI / 2;
      shade.rotation.y = Math.PI;
      shade.position.set(0, 0.1, 0.28);
      lensGroup.add(shade);

      // Front faceplate
      const face = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.1, 28), obsidian);
      face.rotation.x = Math.PI / 2;
      face.position.set(0, 0, 0.8);
      lensGroup.add(face);

      const bezel = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.018, 14, 32), goldTrim);
      bezel.position.set(0, 0, 0.85);
      lensGroup.add(bezel);

      const centerLens = new THREE.Mesh(new THREE.SphereGeometry(0.22, 22, 20), lensMat.clone());
      centerLens.position.set(0, 0, 0.84);
      lensGroup.add(centerLens);

      // 12-LED ring
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        const led = createIrLed(0.026);
        led.position.set(Math.cos(a) * 0.34, Math.sin(a) * 0.34, 0.85);
        lensGroup.add(led);
      }

      lensGroup.add(createFovCone(1.15, 3.2));
      createRadialRays(lensGroup, 22, 2.2, 0.42, 0.85);
      createRayTips(lensGroup, 22, 2.2, 0.42, 0.85);

    } else if (
      modelId === "panoramic-dome" ||
      modelId === "discreet-dome-camera" ||
      modelId === "4k-ai-dome-camera"
    ) {
      // ──────────────────────────────────────────────────────────────────────
      // MODEL 4: Indoor Panoramic Dome Camera
      // ──────────────────────────────────────────────────────────────────────
      cameraGroup.position.set(0, 0.25, 0);

      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.0, 0.2, 32), pearlWhite);
      base.position.set(0, 0.85, 0);
      cameraGroup.add(base);

      const trimRing = new THREE.Mesh(new THREE.TorusGeometry(0.96, 0.022, 12, 36), goldTrim);
      trimRing.rotation.x = Math.PI / 2;
      trimRing.position.set(0, 0.75, 0);
      cameraGroup.add(trimRing);

      lensGroup = new THREE.Group();
      lensGroup.position.set(0, 0.55, 0);
      cameraGroup.add(lensGroup);

      lensGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.58, 28, 24), obsidian));

      const fishLens = new THREE.Mesh(new THREE.SphereGeometry(0.28, 24, 20), lensMat.clone());
      fishLens.position.set(0, -0.36, 0.36);
      lensGroup.add(fishLens);

      const lensRing = new THREE.Mesh(new THREE.TorusGeometry(0.29, 0.016, 12, 28), goldTrim);
      lensRing.rotation.x = Math.PI / 4;
      lensRing.position.set(0, -0.35, 0.37);
      lensGroup.add(lensRing);

      // 6 covert IR LEDs
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const led = createIrLed(0.026);
        led.position.set(Math.cos(a) * 0.44, -0.29 + Math.sin(a) * 0.1, 0.34);
        lensGroup.add(led);
      }

      // Smoked glass dome shell
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0x38bdf8, transparent: true, opacity: 0.28,
        roughness: 0.03, metalness: 0.04, transmission: 0.85,
        ior: 1.5, clearcoat: 1.0,
      });
      const glassDome = new THREE.Mesh(
        new THREE.SphereGeometry(0.85, 36, 28, 0, Math.PI * 2, 0, Math.PI / 2),
        glassMat
      );
      glassDome.rotation.x = Math.PI;
      glassDome.position.set(0, 0.75, 0);
      cameraGroup.add(glassDome);

      const domeCone = createFovCone(1.85, 2.6);
      domeCone.rotation.x = -Math.PI / 3;
      domeCone.position.set(0, -0.4, 1.9);
      lensGroup.add(domeCone);

      // Dome rays fan downward (camera points at floor)
      const domeRayGroup = new THREE.Group();
      domeRayGroup.rotation.x = Math.PI / 2;
      createRadialRays(domeRayGroup, 18, 1.8, 0.38, 0);
      createRayTips(domeRayGroup, 18, 1.8, 0.38, 0);
      lensGroup.add(domeRayGroup);

    } else if (
      modelId === "wifi-ptz" ||
      modelId === "smart-wifi-ptz-camera" ||
      modelId === "wireless-smart-ptz-camera"
    ) {
      // ──────────────────────────────────────────────────────────────────────
      // MODEL 5: Smart Indoor 360° WiFi PTZ Camera
      // ──────────────────────────────────────────────────────────────────────
      cameraGroup.position.set(0, -0.15, 0);

      const deskBase = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.84, 0.3, 32), pearlWhite);
      deskBase.position.set(0, -0.9, 0);
      cameraGroup.add(deskBase);

      const baseRing = new THREE.Mesh(new THREE.TorusGeometry(0.82, 0.016, 12, 32), goldTrim);
      baseRing.rotation.x = Math.PI / 2;
      baseRing.position.set(0, -1.04, 0);
      cameraGroup.add(baseRing);

      const yoke = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.62, 0.55, 24), pearlWhite);
      yoke.position.set(0, -0.52, 0);
      cameraGroup.add(yoke);

      lensGroup = new THREE.Group();
      lensGroup.position.set(0, 0, 0);
      cameraGroup.add(lensGroup);

      lensGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.65, 32, 28), pearlWhite));

      const visor = new THREE.Mesh(
        new THREE.SphereGeometry(0.66, 24, 20, 0, Math.PI * 2, 0, Math.PI / 3),
        obsidian
      );
      visor.rotation.x = Math.PI / 2;
      visor.position.set(0, 0, 0.06);
      lensGroup.add(visor);

      const wifiLens = new THREE.Mesh(new THREE.SphereGeometry(0.2, 20, 18), lensMat.clone());
      wifiLens.position.set(0, 0, 0.64);
      lensGroup.add(wifiLens);

      const wifiGold = new THREE.Mesh(new THREE.TorusGeometry(0.21, 0.014, 12, 24), goldTrim);
      wifiGold.position.set(0, 0, 0.65);
      lensGroup.add(wifiGold);

      lensGroup.add(createFovCone(1.3, 2.4));
      createRadialRays(lensGroup, 20, 1.9, 0.42, 0.65);
      createRayTips(lensGroup, 20, 1.9, 0.42, 0.65);

    } else {
      // ──────────────────────────────────────────────────────────────────────
      // MODEL 1: Flagship — Classic Box Bullet CCTV Camera (like reference)
      // Rectangular body, rounded visor, circular wall mount, front lens
      // ──────────────────────────────────────────────────────────────────────
      cameraGroup.position.set(0, 0, 0);

      // Circular wall-mount disc (like the reference image mount)
      const mountDisc = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.5, 0.12, 32), darkMetal);
      mountDisc.rotation.x = Math.PI / 2;
      mountDisc.position.set(0, 0, -1.5);
      cameraGroup.add(mountDisc);

      // Gold ring accent on mount
      const mountRing = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.014, 12, 32), goldTrim);
      mountRing.position.set(0, 0, -1.44);
      cameraGroup.add(mountRing);

      // Short connecting arm from mount to body
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.42, 16), darkMetal);
      arm.rotation.x = Math.PI / 2;
      arm.position.set(0, 0, -1.25);
      cameraGroup.add(arm);

      // ── Main rectangular body ──
      const bodyGeo = new THREE.BoxGeometry(1.35, 0.82, 1.65);
      const mainBody = new THREE.Mesh(bodyGeo, pearlWhite);
      mainBody.position.set(0, 0, -0.2);
      cameraGroup.add(mainBody);

      // Sunshield / visor — larger box sitting on top, slightly overhanging front
      const visorShape = new THREE.Mesh(new THREE.BoxGeometry(1.42, 0.18, 1.82), pearlWhite);
      visorShape.position.set(0, 0.5, -0.12);
      cameraGroup.add(visorShape);

      // Slight curve trim along visor front edge
      const visorFront = new THREE.Mesh(
        new THREE.CylinderGeometry(0.09, 0.09, 1.42, 16),
        pearlWhite
      );
      visorFront.rotation.z = Math.PI / 2;
      visorFront.position.set(0, 0.5, 0.79);
      cameraGroup.add(visorFront);

      // Bottom edge grip rail
      const gripRail = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.06, 1.65), darkMetal);
      gripRail.position.set(0, -0.44, -0.2);
      cameraGroup.add(gripRail);

      // Side ventilation grooves (3 per side)
      for (const side of [-0.69, 0.69]) {
        for (let gz = -0.4; gz <= 0.4; gz += 0.4) {
          const groove = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.55, 0.06), darkMetal);
          groove.position.set(side, 0, gz - 0.2);
          cameraGroup.add(groove);
        }
      }

      // ── Front face assembly ──
      lensGroup = new THREE.Group();
      lensGroup.position.set(0, 0, 0.63);
      cameraGroup.add(lensGroup);

      // Deep obsidian front faceplate
      const faceplate = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 0.06, 32),
        obsidian
      );
      faceplate.rotation.x = Math.PI / 2;
      faceplate.position.set(0, 0, 0.02);
      lensGroup.add(faceplate);

      // Gold precision bezel ring
      const bezelRing = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.022, 16, 36), goldTrim);
      bezelRing.position.set(0, 0, 0.06);
      lensGroup.add(bezelRing);

      // Secondary inner bezel (depth effect)
      const innerBezel = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.01, 12, 32), goldTrim);
      innerBezel.position.set(0, 0, 0.07);
      lensGroup.add(innerBezel);

      // Main 4K optical glass lens
      const mainLens = new THREE.Mesh(new THREE.SphereGeometry(0.18, 28, 24), lensMat);
      mainLens.position.set(0, 0, 0.07);
      lensGroup.add(mainLens);

      // 8 IR illuminators in a ring around lens
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        const led = createIrLed(0.026);
        led.position.set(Math.cos(a) * 0.24, Math.sin(a) * 0.24, 0.06);
        lensGroup.add(led);
      }

      // Solar panel (solar PTZ variant)
      const solarGroup = new THREE.Group();
      solarGroup.position.set(0, 0.72, -0.55);
      solarGroup.rotation.x = -0.32;
      const solarFrame = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.05, 1.05), darkMetal);
      solarGroup.add(solarFrame);
      const solarCell = new THREE.Mesh(
        new THREE.BoxGeometry(1.44, 0.025, 0.96),
        new THREE.MeshPhysicalMaterial({
          color: 0x0a1e38, emissive: 0x0284c7,
          emissiveIntensity: 0.22, roughness: 0.12, metalness: 0.88, clearcoat: 0.9,
        })
      );
      solarCell.position.y = 0.03;
      solarGroup.add(solarCell);
      cameraGroup.add(solarGroup);

      // Dual 4G antennas
      const antGeo = new THREE.CylinderGeometry(0.022, 0.032, 0.88, 16);
      for (const [x, rz] of [[-0.6, 0.2], [0.6, -0.2]] as [number, number][]) {
        const ant = new THREE.Mesh(antGeo, obsidian);
        ant.position.set(x, 0.65, -0.3);
        ant.rotation.z = rz;
        cameraGroup.add(ant);
      }

      // FOV cone
      lensGroup.add(createFovCone(1.4, 3.0));

      // ── Radial starburst rays from lens face (exactly like reference) ──
      createRadialRays(lensGroup, 22, 2.3, 0.46, 0.08);
      createRayTips(lensGroup, 22, 2.3, 0.46, 0.08);
    }

    lensGroupRef.current = lensGroup;
    irLedsRef.current = irLeds;
    fovConesRef.current = fovCones;
    rayMeshesRef.current = rayMeshes;

    // ── IntersectionObserver ──────────────────────────────────────────────
    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // ── Mouse Parallax ────────────────────────────────────────────────────
    let lastMouseUpdate = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouseUpdate < 16) return;
      lastMouseUpdate = now;
      const rect = container.getBoundingClientRect();
      mousePositionRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -(((e.clientY - rect.top) / rect.height) * 2 - 1),
      };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || 520;
      const h = container.clientHeight || 520;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // ── Animation Loop ────────────────────────────────────────────────────
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisibleRef.current) return;

      const t = clock.getElapsedTime();

      // Camera group rotation + gentle float
      currentRotationRef.current +=
        (targetRotationRef.current - currentRotationRef.current) * 0.12;
      cameraGroup.rotation.y = currentRotationRef.current + 0.12;
      cameraGroup.rotation.x = -0.08;
      cameraGroup.position.y = Math.sin(t * 1.6) * 0.035;

      // Lens mouse parallax
      if (lensGroup) {
        lensGroup.rotation.x += (mousePositionRef.current.y * 0.18 - lensGroup.rotation.x) * 0.08;
        lensGroup.rotation.y += (mousePositionRef.current.x * 0.18 - lensGroup.rotation.y) * 0.08;

        // Track lens world position → move physics lights there
        const wPos = new THREE.Vector3();
        lensGroup.getWorldPosition(wPos);
        const wQuat = new THREE.Quaternion();
        lensGroup.getWorldQuaternion(wQuat);

        const fwdOffset = new THREE.Vector3(0, 0, 0.65).applyQuaternion(wQuat);
        const lightPos = wPos.clone().add(fwdOffset);
        lensGlow.position.copy(lightPos);
        optSpot.position.copy(lightPos);

        const fwdFar = new THREE.Vector3(0, 0, 9).applyQuaternion(wQuat);
        spotTarget.position.copy(wPos.clone().add(fwdFar));

        // Lens glow heartbeat pulse
        lensGlow.intensity = (isNightMode ? 5.5 : 4.5) + Math.sin(t * 2.6) * 0.8;

        // Wall halo position follows camera group
        if (haloMeshRef.current) {
          haloMeshRef.current.position.x = cameraGroup.position.x;
        }
      }

      // FOV cone pulse (gentle breathing)
      fovCones.forEach((cone) => {
        const m = cone.material as THREE.MeshBasicMaterial;
        const base = isNightMode ? 0.13 : 0.08;
        m.opacity = base + Math.sin(t * 1.9 + 0.5) * (base * 0.4);
      });

      // Radial ray staggered flicker animation
      rayMeshes.forEach((ray, i) => {
        const m = ray.material as THREE.MeshBasicMaterial;
        // Each ray has own phase offset for living, scintillating effect
        const phase = (i / rayMeshes.length) * Math.PI * 2;
        const flicker = 0.5 + 0.5 * Math.sin(t * 3.5 + phase);
        m.opacity = (isNightMode ? 0.55 : 0.65) * flicker + 0.2;
      });

      // Wall halo breathing pulse
      if (haloMeshRef.current) {
        const hm = haloMeshRef.current.material as THREE.MeshBasicMaterial;
        hm.opacity = 0.82 + Math.sin(t * 1.4) * 0.12;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (container && renderer.domElement) container.innerHTML = "";
    };
  }, [modelId]);

  // ── Night / Day Mode Dynamic Color Updates ─────────────────────────────
  useEffect(() => {
    fovConesRef.current.forEach((cone) => {
      const m = cone.material as THREE.MeshBasicMaterial;
      m.color.setHex(isNightMode ? 0xff2200 : 0xf59e0b);
      m.opacity = isNightMode ? 0.13 : 0.08;
    });

    irLedsRef.current.forEach((led) => {
      const m = led.material as THREE.MeshStandardMaterial;
      m.color.setHex(isNightMode ? 0xff2200 : 0xf59e0b);
      m.emissive.setHex(isNightMode ? 0xff2200 : 0xf59e0b);
      m.emissiveIntensity = isNightMode ? 2.8 : 1.8;
    });

    rayMeshesRef.current.forEach((ray) => {
      const m = ray.material as THREE.MeshBasicMaterial;
      m.color.setHex(isNightMode ? 0xff3030 : 0xffaa30);
    });

    if (spotLightRef.current) {
      spotLightRef.current.color.setHex(isNightMode ? 0xff2200 : 0xffb030);
      spotLightRef.current.intensity = isNightMode ? 7.0 : 5.5;
    }
    if (lensGlowRef.current) {
      lensGlowRef.current.color.setHex(isNightMode ? 0xff2200 : 0xffaa30);
      lensGlowRef.current.intensity = isNightMode ? 5.5 : 4.5;
    }
  }, [isNightMode]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[380px] md:min-h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      title="Interactive 3D Camera — Drag to orbit · Click mode buttons to switch"
    />
  );
}

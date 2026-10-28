"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Link } from "react-router-dom";
import { Container, ScrollReveal } from "../ui";
import * as THREE from "three";

// Vertex shader for Art-Directed 3D Dotted Sphere with fluid harmonic twist deformation & inner core flow
const DOTTED_SPHERE_VERTEX_SHADER = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uPixelRatio;

  attribute float aRandom;
  attribute float aScale;
  attribute vec3 aColor;
  attribute float aLayer; // 0.0 = outer deformed shell, 1.0 = inner vortex filament

  varying vec3 vColor;
  varying float vAlpha;
  varying float vDepth;

  void main() {
    vec3 pos = position;
    vec3 norm = normalize(pos);
    float baseRadius = length(pos);

    // Azimuthal angle around Y axis
    float phi = atan(norm.z, norm.x);

    vec3 finalPosition;

    if (aLayer < 0.5) {
      // 1. OUTER SCULPTURAL SHELL: Fluid twisted vortex and harmonic surface folds
      // Low-frequency continuous twist
      float twistAngle = norm.y * 1.35 + uTime * 0.10;
      float cosT = cos(twistAngle);
      float sinT = sin(twistAngle);
      vec3 twistedNorm = vec3(
        norm.x * cosT - norm.z * sinT,
        norm.y,
        norm.x * sinT + norm.z * cosT
      );

      // Low-order harmonic surface waves (creating fluid, fabric-like curved folds with pristine negative space)
      float wave1 = sin(phi * 2.5 + norm.y * 2.2 + uTime * 0.55) * 0.12;
      float wave2 = cos(phi * 1.8 - norm.y * 2.8 + uTime * 0.40) * 0.08;
      float wave3 = sin(norm.y * 3.6 + uTime * 0.70) * 0.04;

      // Subtle reactive pointer displacement wave
      float mouseDist = length(norm.xy - uMouse * 0.50);
      float mouseWave = sin(mouseDist * 3.2 - uTime * 1.2) * exp(-mouseDist * 1.8) * 0.07;

      float totalDisplacement = 1.0 + wave1 + wave2 + wave3 + mouseWave;
      finalPosition = twistedNorm * (baseRadius * totalDisplacement);
    } else {
      // 2. INNER FILAMENT CORE: Gentle interior spiral stream providing deep 3D volume
      float coreTime = uTime * 0.35;
      float twistCore = pos.y * 2.0 + coreTime;
      float cosC = cos(twistCore);
      float sinC = sin(twistCore);
      vec3 twistedCore = vec3(
        pos.x * cosC - pos.z * sinC,
        pos.y,
        pos.x * sinC + pos.z * cosC
      );
      float coreWobble = sin(pos.y * 3.0 + uTime * 0.75) * 0.04;
      finalPosition = twistedCore + vec3(coreWobble, 0.0, coreWobble * 0.5);
    }

    vec4 mvPosition = modelViewMatrix * vec4(finalPosition, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Perspective depth calculation (camera at z ~ 5.8)
    float depth = -mvPosition.z;
    vDepth = depth;

    // Depth factor: 0.0 at far back (~7.6), 1.0 at near front (~3.8)
    float depthFactor = smoothstep(7.6, 3.8, depth);

    // Precise particle size: foreground dots are crisp mathematical points (~4.5-6.5px),
    // background dots gracefully scale down (~1.5-2.2px)
    float sizeScale = mix(0.55, 1.15, depthFactor);
    float basePoint = (aLayer < 0.5 ? 26.0 : 16.0) * aScale * (uPixelRatio * 0.75 + 0.25);
    gl_PointSize = (basePoint / depth) * sizeScale;
    gl_PointSize = clamp(gl_PointSize, 1.4, 7.5);

    // Crest illumination: particles at prominent exterior peaks gleam with restrained teal
    vec3 dynamicColor = aColor;
    if (aLayer < 0.5) {
      float radialLen = length(finalPosition);
      if (radialLen > 2.0) {
        float crest = smoothstep(2.0, 2.22, radialLen);
        dynamicColor = mix(dynamicColor, vec3(0.125, 0.714, 0.647), crest * 0.70); // #20B6A5
      }
    }

    // Depth-attenuated luminance: distant particles softly recede into dark slate
    vColor = mix(vec3(0.15, 0.18, 0.16), dynamicColor, depthFactor);

    // Exponential opacity curve: background particles drop to ethereal whispers (0.05-0.08 alpha)
    // so they never create a hazy or noisy veil behind foreground waves
    float alphaCurve = pow(depthFactor, 1.35);
    vAlpha = (aLayer < 0.5 ? mix(0.06, 0.95, alphaCurve) : mix(0.03, 0.50, alphaCurve));
  }
`;

// Fragment shader producing razor-sharp, circular anti-aliased dot sprites
const DOTTED_SPHERE_FRAGMENT_SHADER = `
  precision highp float;

  varying vec3 vColor;
  varying float vAlpha;
  varying float vDepth;

  void main() {
    // Circular point sprite calculation
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);

    if (dist > 0.5) {
      discard;
    }

    // Crisp anti-aliased circular edge
    float edge = smoothstep(0.5, 0.34, dist);

    // Bright precision nucleus for pristine dot-matrix appearance
    float core = smoothstep(0.24, 0.0, dist) * 0.32;

    gl_FragColor = vec4(vColor + vec3(core), vAlpha * edge);
  }
`;

// The 3D Dotted-Sphere Particle Sculpture
function DottedSphereSculpture({
  mousePos,
  isPaused,
  particleCount = 2800,
}: {
  mousePos: { x: number; y: number };
  isPaused: boolean;
  particleCount?: number;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uPixelRatio: {
        value: typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1,
      },
    }),
    []
  );

  // Deterministic Dual-Layer Particle Generation (Outer Fibonacci Shell + Inner Vortex Filament)
  const geometry = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const randoms = new Float32Array(particleCount);
    const layers = new Float32Array(particleCount);

    const outerCount = Math.floor(particleCount * 0.82);
    const innerCount = particleCount - outerCount;

    const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ~2.39996323
    const baseRadius = 1.82; // Generous radius providing distinct negative space

    const silverColor = new THREE.Color("#DCE2DC"); // Crisp platinum silver
    const mutedSlate = new THREE.Color("#737D77");  // Muted secondary slate
    const tealColor = new THREE.Color("#20B6A5");   // Abhivox Primary Teal
    const cyanColor = new THREE.Color("#63E5D2");   // Secondary Cyan
    const yellowColor = new THREE.Color("#E9E65A"); // Warm Technical Yellow

    // 1. Generate Outer Shell Particles (Fibonacci Sphere with Isotropic Spacing)
    for (let i = 0; i < outerCount; i++) {
      const y = 1 - (i / (outerCount - 1)) * 2; // from 1 down to -1
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      positions[i * 3] = x * baseRadius;
      positions[i * 3 + 1] = y * baseRadius * 1.04; // Art-directed subtle vertical elongation
      positions[i * 3 + 2] = z * baseRadius;

      const pseudo = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
      const randVal = pseudo - Math.floor(pseudo);
      randoms[i] = randVal;
      scales[i] = 0.84 + randVal * 0.38;
      layers[i] = 0.0; // Outer layer

      // Color distribution:
      // ~78% platinum silver and muted slate
      // ~18% engineering teal / cyan along latitude ribbons
      // ~4% warm yellow technical accents
      const colorSample = new THREE.Color();
      const ribbonPhase = Math.sin(theta * 3.0 + y * 4.0);

      if (randVal > 0.96) {
        // Rare warm yellow glint
        colorSample.copy(yellowColor);
      } else if (randVal > 0.82 || (ribbonPhase > 0.72 && randVal > 0.65)) {
        // Restrained engineering teal highlight
        colorSample.lerpColors(tealColor, cyanColor, randVal);
      } else {
        // Elegant monochrome silver-gray spectrum
        colorSample.lerpColors(mutedSlate, silverColor, randVal);
      }

      colors[i * 3] = colorSample.r;
      colors[i * 3 + 1] = colorSample.g;
      colors[i * 3 + 2] = colorSample.b;
    }

    // 2. Generate Inner Core Filament Stream (Internal Double-Helix Parallax)
    for (let j = 0; j < innerCount; j++) {
      const idx = outerCount + j;
      const t = j / (innerCount - 1);
      const y = (t * 2 - 1) * 1.45; // Vertical span through center
      const spiralTheta = t * Math.PI * 6.0; // Helix rotation
      const rad = (Math.sin(t * Math.PI) * 0.55 + 0.12) * baseRadius;

      positions[idx * 3] = Math.cos(spiralTheta) * rad;
      positions[idx * 3 + 1] = y;
      positions[idx * 3 + 2] = Math.sin(spiralTheta) * rad;

      const pseudo = Math.sin(idx * 23.456 + 12.34) * 31415.92;
      const randVal = pseudo - Math.floor(pseudo);
      randoms[idx] = randVal;
      scales[idx] = 0.65 + randVal * 0.35;
      layers[idx] = 1.0; // Inner layer

      // Inner particles: deeper slate with selective subtle teal embers
      const colorSample = new THREE.Color();
      if (randVal > 0.85) {
        colorSample.copy(tealColor);
      } else {
        colorSample.lerpColors(new THREE.Color("#48524D"), mutedSlate, randVal);
      }

      colors[idx * 3] = colorSample.r;
      colors[idx * 3 + 1] = colorSample.g;
      colors[idx * 3 + 2] = colorSample.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    geo.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 1));
    geo.setAttribute("aLayer", new THREE.BufferAttribute(layers, 1));

    return geo;
  }, [particleCount]);

  // Explicit GPU Resource Cleanup
  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  useEffect(() => {
    const mat = materialRef.current;
    return () => {
      mat?.dispose();
    };
  }, []);

  useFrame((state, delta) => {
    if (isPaused) return;

    // Advance shader simulation time via Three.js material instance
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta * 0.60;
      materialRef.current.uniforms.uMouse.value.lerp(new THREE.Vector2(mousePos.x, mousePos.y), 0.04);
    }

    if (pointsRef.current) {
      // Art-directed default celestial posture (tilted on Z and X) with continuous gentle axial Y rotation
      pointsRef.current.rotation.y += delta * 0.045;
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        0.26 + mousePos.y * 0.12 + Math.sin(state.clock.elapsedTime * 0.20) * 0.015,
        0.035
      );
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(
        pointsRef.current.rotation.z,
        -0.22 - mousePos.x * 0.10,
        0.035
      );
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={DOTTED_SPHERE_VERTEX_SHADER}
        fragmentShader={DOTTED_SPHERE_FRAGMENT_SHADER}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

// Subtle Secondary Infrastructure Orbital Traces (Preserving Abhivox's Technical Context)
function SubtleOrbitalTraces({ isPaused }: { isPaused: boolean }) {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const satellite1Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (isPaused) return;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.035;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.025;
    }
    if (satellite1Ref.current) {
      const t = state.clock.elapsedTime * 0.20;
      const rad = 2.52;
      satellite1Ref.current.position.x = Math.cos(t) * rad;
      satellite1Ref.current.position.y = Math.sin(t) * (rad * 0.45);
      satellite1Ref.current.position.z = Math.sin(t * 1.5) * 0.35;
    }
  });

  return (
    <group rotation={[0.26, 0, -0.22]}>
      {/* Primary Thin Teal Orbital Ring */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3.4, Math.PI / 7, 0]}>
        <torusGeometry args={[2.52, 0.0055, 16, 128]} />
        <meshBasicMaterial color="#20B6A5" transparent={true} opacity={0.14} />
      </mesh>

      {/* Secondary Warm Yellow Orbital Ring */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, -Math.PI / 6, 0]}>
        <torusGeometry args={[2.76, 0.0045, 16, 128]} />
        <meshBasicMaterial color="#E9E65A" transparent={true} opacity={0.09} />
      </mesh>

      {/* Subtle Infrastructure Micro-Satellite Node */}
      <mesh ref={satellite1Ref}>
        <octahedronGeometry args={[0.055, 0]} />
        <meshBasicMaterial color="#20B6A5" />
      </mesh>
    </group>
  );
}

// Complete 3D Technical Visualization Scene
function TechnicalVisualizationScene({
  mousePos,
  isPaused,
  particleCount,
}: {
  mousePos: { x: number; y: number };
  isPaused: boolean;
  particleCount: number;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.8], fov: 36 }}
      dpr={[1, 2]}
      frameloop={isPaused ? "never" : "always"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    >
      {/* Subtle Technical Lighting */}
      <ambientLight color="#141816" intensity={0.6} />
      <directionalLight position={[5, 6, 5]} color="#F4F6F4" intensity={1.5} />
      <pointLight position={[0, 0, 0]} color="#20B6A5" intensity={8} distance={6} decay={2} />

      {/* Main Feature: 3D Dotted Sphere Particle Sculpture */}
      <DottedSphereSculpture mousePos={mousePos} isPaused={isPaused} particleCount={particleCount} />

      {/* Secondary Technical Infrastructure Orbit Traces */}
      <SubtleOrbitalTraces isPaused={isPaused} />
    </Canvas>
  );
}

// 2D SVG Dotted-Sphere Blueprint Fallback (when WebGL or reduced motion is active)
function TechnicalBlueprintFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 select-none" aria-hidden="true">
      <div className="relative w-80 h-80 rounded-full border border-[#252B28] flex items-center justify-center">
        {/* Concentric Dotted Particle Rings */}
        <div className="absolute inset-3 rounded-full border border-[#20B6A5]/25 border-dashed" />
        <div className="absolute inset-8 rounded-full border border-white/10" />
        <div className="absolute inset-14 rounded-full border border-[#E9E65A]/20 border-dotted" />
        <div className="absolute inset-20 rounded-full border border-[#20B6A5]/30" />
        <div className="absolute inset-28 rounded-full border border-white/15 border-dashed" />

        {/* Central Core Matrix Emblem */}
        <div className="w-20 h-20 rounded-2xl bg-[#141816] border border-[#20B6A5]/40 flex flex-col items-center justify-center shadow-lg">
          <div className="grid grid-cols-3 gap-1.5 p-2">
            {[...Array(9)].map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i === 4 ? "bg-[#E9E65A]" : i % 2 === 0 ? "bg-[#20B6A5]" : "bg-white/40"
                }`}
              />
            ))}
          </div>
          <span className="font-mono text-[9px] font-bold text-[#A6AEAA] mt-1">CORE</span>
        </div>

        {/* Outer Dot Matrix Markers */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#20B6A5]" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#E9E65A]" />
        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-[#20B6A5]" />
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-[#63E5D2]" />
      </div>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isTabVisible, setIsTabVisible] = useState(true);

  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  const [webGLSupported] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      const canvas = document.createElement("canvas");
      return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
    } catch {
      return false;
    }
  });

  const [particleCount, setParticleCount] = useState(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return 1600;
    }
    return 2800;
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motionHandler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    motionQuery.addEventListener("change", motionHandler);

    // 2. Pause when browser tab is hidden
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 3. Pause when hero section scrolls out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // 4. Subtle pointer parallax & viewport resize with smooth idle return
    let idleTimer: number | undefined;
    const isTouchDevice =
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0);

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouchDevice) return; // Keep mobile interaction calm and predictable
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth) * 2 - 1,
        y: -(e.clientY / innerHeight) * 2 + 1,
      });

      if (idleTimer) window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        setMousePos({ x: 0, y: 0 });
      }, 2400);
    };

    const handleMouseLeave = () => {
      if (idleTimer) window.clearTimeout(idleTimer);
      setMousePos({ x: 0, y: 0 });
    };

    const handleResize = () => {
      setParticleCount(window.innerWidth < 768 ? 1600 : 2800);
    };

    if (!isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.addEventListener("mouseleave", handleMouseLeave);
    }
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      if (idleTimer) window.clearTimeout(idleTimer);
      motionQuery.removeEventListener("change", motionHandler);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
      if (!isTouchDevice) {
        window.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isPaused = !isHeroVisible || !isTabVisible || reduceMotion;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#080A09] text-[#F4F6F4] overflow-hidden border-b border-[#252B28]"
      aria-labelledby="hero-heading"
    >
      {/* Background Architectural Grid & Subtle Radial Illumination */}
      <div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/3 right-1/4 w-[540px] h-[540px] rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #20B6A5 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography, Hierarchy, and CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Technical Eyebrow */}
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141816] border border-[#252B28] text-xs font-mono tracking-wider text-[#A6AEAA] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#20B6A5] animate-pulse" />
                <span className="text-[#F4F5F1] font-semibold">ABHIVOX TECHNOLOGIES</span>
                <span className="text-white/20">|</span>
                <span className="text-[#20B6A5]">SOFTWARE · CLOUD · AI · AUTOMATION</span>
              </div>
            </ScrollReveal>

            {/* Primary Headline with Controlled Stagger and Hierarchy */}
            <ScrollReveal delay={80}>
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#F4F5F1] max-w-2xl"
              >
                Complex Technology.
                <br />
                <span className="text-[#E9E65A] inline-block mt-1">Clear Business Outcomes.</span>
              </h1>
            </ScrollReveal>

            {/* Supporting Copy */}
            <ScrollReveal delay={160}>
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#A6AEAA] leading-relaxed max-w-xl">
                We engineer software, cloud infrastructure, and intelligent automation that help businesses operate with greater efficiency, reliability, and control.
              </p>
            </ScrollReveal>

            {/* Direct CTAs */}
            <ScrollReveal delay={240}>
              <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="btn btn-primary-teal btn-lg group shadow-[0_0_24px_rgba(32,182,165,0.2)] justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20B6A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A09]"
                >
                  <span>Discuss Your Project</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#080A09]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  to="/case-studies"
                  className="btn btn-secondary-dark btn-lg group justify-center border-[#252B28] hover:border-[#20B6A5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20B6A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A09]"
                >
                  <span>Explore Our Work</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            {/* Brand Positioning Statement */}
            <ScrollReveal delay={320}>
              <div className="mt-12 pt-8 border-t border-[#252B28] flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono text-[#A6AEAA]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-sm bg-[#20B6A5]" />
                  <span className="text-[#F4F5F1] font-semibold tracking-wider">YOUR VISION</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-sm bg-[#E9E65A]" />
                  <span className="text-[#F4F5F1] font-semibold tracking-wider">OUR INNOVATION</span>
                </div>
                <div className="hidden sm:block text-white/20">/</div>
                <div className="text-[11px] text-[#A6AEAA]">Enterprise Engineering &amp; Digital Transformation</div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3D Visualization Container (5 cols) */}
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[450px] lg:h-[500px] xl:h-[540px] flex items-center justify-center">
            {/* Visual Frame Card */}
            <div
              className="relative w-full h-full rounded-2xl bg-[#141816] border border-[#252B28] overflow-hidden shadow-2xl"
              role="region"
              aria-label="Interactive 3D particle sphere visualization representing engineering topology"
            >
              {/* Minimalist Engineering Framing Annotations */}
              <div className="absolute top-4 left-4 flex items-center gap-2 z-20 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#20B6A5] animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-[#A6AEAA] uppercase">
                  COMPUTATIONAL FIELD // TOPOLOGY
                </span>
              </div>
              <div className="absolute top-4 right-4 text-[10px] font-mono text-[#A6AEAA] z-20 pointer-events-none">
                SYSTEMS ENGINEERING
              </div>
              <div className="absolute bottom-4 left-4 text-[10px] font-mono text-[#A6AEAA] z-20 pointer-events-none">
                HARMONIC DISPLACEMENT
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-[#20B6A5] z-20 pointer-events-none font-semibold">
                YOUR VISION · OUR INNOVATION
              </div>

              {/* Corner Engineering Tick Marks */}
              <span className="absolute top-2 left-2 text-[9px] font-mono text-white/15 pointer-events-none">+</span>
              <span className="absolute top-2 right-2 text-[9px] font-mono text-white/15 pointer-events-none">+</span>
              <span className="absolute bottom-2 left-2 text-[9px] font-mono text-white/15 pointer-events-none">+</span>
              <span className="absolute bottom-2 right-2 text-[9px] font-mono text-white/15 pointer-events-none">+</span>

              {/* Technical Crosshairs Grid Lines */}
              <div className="absolute inset-0 pointer-events-none border border-white/[0.03] m-2 rounded-xl" />

              {/* 3D Scene or 2D Fallback */}
              {webGLSupported && !reduceMotion ? (
                <TechnicalVisualizationScene
                  mousePos={mousePos}
                  isPaused={isPaused}
                  particleCount={particleCount}
                />
              ) : (
                <TechnicalBlueprintFallback />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

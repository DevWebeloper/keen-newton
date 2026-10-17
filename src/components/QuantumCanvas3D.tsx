"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export type ShaderMode = "aura" | "silicon" | "globe" | "wireframe";

interface QuantumCanvas3DProps {
  shaderMode: ShaderMode;
  accentColor: string;
  blurIntensity: number;
  onFpsUpdate?: (fps: number) => void;
  pulseTrigger?: number;
}

const MONOLITH_VERTEX_SHADER = `
  uniform float uTime;
  uniform float uPulse;
  uniform float uMorph;
  uniform vec2 uMouse;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec3 vWorldPos;
  varying vec2 vUv;
  varying float vResonance;

  // Sharp brutalist acoustic wave interference
  float resonanceWave(vec3 p) {
    return sin(p.y * 6.0 - uTime * 2.2) * cos(p.x * 4.5 + uTime * 1.4);
  }

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);

    vec3 pos = position;
    float wave = resonanceWave(pos);
    float disp = wave * (0.025 + uPulse * 0.22 + abs(uMorph) * 0.04);

    // Architectural shear along Y axis when pulsed
    pos += normal * disp;
    pos.x += uMouse.x * 0.08 * pos.y;
    pos.z += uMouse.y * 0.08 * pos.y;

    vResonance = wave;
    vWorldPos = pos;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const MONOLITH_FRAGMENT_SHADER = `
  uniform float uTime;
  uniform float uPulse;
  uniform vec3 uAccent;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec3 vWorldPos;
  varying vec2 vUv;
  varying float vResonance;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);

    // Sharp Fresnel rim lighting
    float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 3.0);

    // Obsidian brutalist base + Crimson Resonance + Sodium Vapor Amber
    vec3 obsidian = vec3(0.03, 0.03, 0.04);
    vec3 slate = vec3(0.09, 0.09, 0.12);
    vec3 primaryResonance = uAccent; // Crimson or Amber depending on reality state
    vec3 amberLight = vec3(0.96, 0.62, 0.04);

    // Brutalist horizontal strata lines etched into the pyramid
    float strata = smoothstep(0.92, 0.98, abs(sin(vWorldPos.y * 18.0 - uTime * 1.5)));

    // Acoustic resonance vein glow
    float vein = smoothstep(0.45, 0.95, vResonance * 0.5 + 0.5);

    vec3 surface = mix(obsidian, slate, abs(normal.y) * 0.6);
    vec3 rimGlow = mix(primaryResonance, amberLight, normal.x * 0.5 + 0.5);

    // Combine dark monolithic interior with razor-sharp glowing edges and strata
    vec3 color = surface;
    color += rimGlow * (fresnel * 1.15);
    color += primaryResonance * strata * (0.35 + uPulse * 0.9);
    color += amberLight * vein * uPulse * 0.75;

    // Hard directional flashlight specular highlight
    vec3 lightDir = normalize(vec3(2.5, 3.0, 4.0));
    vec3 halfVec = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfVec), 0.0), 64.0);
    color += vec3(1.0, 0.96, 0.9) * spec * 0.85;

    gl_FragColor = vec4(color, 0.95);
  }
`;

export const QuantumCanvas3D: React.FC<QuantumCanvas3DProps> = ({
  shaderMode,
  accentColor,
  blurIntensity,
  onFpsUpdate,
  pulseTrigger = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const modeRef = useRef<ShaderMode>(shaderMode);
  const accentRef = useRef<string>(accentColor);
  const blurRef = useRef<number>(blurIntensity);
  const pulseValueRef = useRef<number>(0);

  useEffect(() => {
    modeRef.current = shaderMode;
  }, [shaderMode]);

  useEffect(() => {
    accentRef.current = accentColor;
  }, [accentColor]);

  useEffect(() => {
    blurRef.current = blurIntensity;
  }, [blurIntensity]);

  useEffect(() => {
    if (pulseTrigger > 0) {
      pulseValueRef.current = 1.0;
    }
  }, [pulseTrigger]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    const updateRootOffset = () => {
      const isWide = window.innerWidth >= 1024;
      rootGroup.position.x = isWide ? 1.65 : 0;
      rootGroup.position.y = isWide ? 0.1 : -0.15;
    };
    updateRootOffset();
    scene.add(rootGroup);

    // Dramatic Brutalist Volumetric Lighting
    const ambientLight = new THREE.AmbientLight(0xf4f4f0, 0.45);
    scene.add(ambientLight);
    const crimsonLight = new THREE.PointLight(0xe11d48, 6, 25);
    crimsonLight.position.set(3.5, 3, 4);
    scene.add(crimsonLight);
    const amberLight = new THREE.PointLight(0xf59e0b, 4.5, 25);
    amberLight.position.set(-4, -2.5, 3.5);
    scene.add(amberLight);

    // ------------------------------------------------------------------
    // 1. THE INVERTED OBSIDIAN PYRAMID & SHIFTING BRUTALIST MONOLITHS
    // ------------------------------------------------------------------
    const monolithGroup = new THREE.Group();
    rootGroup.add(monolithGroup);

    // 4-sided pyramid (ConeGeometry with 4 radial segments) inverted upside down
    const pyramidGeo = new THREE.ConeGeometry(1.55, 2.65, 4, 28);
    const shaderUniforms = {
      uTime: { value: 0 },
      uPulse: { value: 0 },
      uMorph: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uAccent: { value: new THREE.Color(accentColor) },
    };

    const pyramidMat = new THREE.ShaderMaterial({
      vertexShader: MONOLITH_VERTEX_SHADER,
      fragmentShader: MONOLITH_FRAGMENT_SHADER,
      uniforms: shaderUniforms,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const invertedPyramid = new THREE.Mesh(pyramidGeo, pyramidMat);
    invertedPyramid.rotation.x = Math.PI; // Inverted apex pointing down
    invertedPyramid.rotation.y = Math.PI / 4;
    monolithGroup.add(invertedPyramid);

    // Razor-sharp wireframe edge highlight around the Inverted Pyramid
    const pyrEdgesGeo = new THREE.EdgesGeometry(new THREE.ConeGeometry(1.58, 2.68, 4, 1));
    const pyrEdgesMat = new THREE.LineBasicMaterial({
      color: 0xe11d48,
      transparent: true,
      opacity: 0.7,
    });
    const pyrEdges = new THREE.LineSegments(pyrEdgesGeo, pyrEdgesMat);
    pyrEdges.rotation.x = Math.PI;
    pyrEdges.rotation.y = Math.PI / 4;
    monolithGroup.add(pyrEdges);

    // 6 Levitating Brutalist Concrete Monolith Slabs orbiting the Pyramid
    const slabsGroup = new THREE.Group();
    monolithGroup.add(slabsGroup);
    const slabs: { mesh: THREE.Mesh; basePos: THREE.Vector3; speed: number }[] = [];

    const slabConfigs = [
      { pos: [-1.85, 0.7, -0.6], size: [0.38, 1.35, 0.14], speed: 1.2 },
      { pos: [1.85, -0.5, -0.5], size: [0.42, 1.5, 0.14], speed: 1.5 },
      { pos: [-1.3, -1.1, 0.7], size: [0.32, 0.95, 0.12], speed: 1.8 },
      { pos: [1.4, 1.05, 0.6], size: [0.35, 1.1, 0.12], speed: 1.35 },
      { pos: [0, 1.75, -0.9], size: [1.2, 0.24, 0.14], speed: 1.1 },
      { pos: [0, -1.75, -0.8], size: [0.9, 0.2, 0.14], speed: 1.6 },
    ];

    slabConfigs.forEach((cfg, idx) => {
      const sGeo = new THREE.BoxGeometry(cfg.size[0], cfg.size[1], cfg.size[2]);
      const sMat = new THREE.MeshStandardMaterial({
        color: 0x121318,
        roughness: 0.35,
        metalness: 0.6,
      });
      const slabMesh = new THREE.Mesh(sGeo, sMat);
      const baseVec = new THREE.Vector3(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      slabMesh.position.copy(baseVec);

      const sEdgeGeo = new THREE.EdgesGeometry(sGeo);
      const sEdgeMat = new THREE.LineBasicMaterial({
        color: idx % 2 === 0 ? 0xe11d48 : 0xf59e0b,
        transparent: true,
        opacity: 0.55,
      });
      slabMesh.add(new THREE.LineSegments(sEdgeGeo, sEdgeMat));

      slabsGroup.add(slabMesh);
      slabs.push({ mesh: slabMesh, basePos: baseVec, speed: cfg.speed });
    });

    // Eclipse / Threshold Halo Ring behind the Pyramid
    const haloGeo = new THREE.TorusGeometry(2.15, 0.014, 16, 128);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xe11d48,
      transparent: true,
      opacity: 0.45,
    });
    const haloRing = new THREE.Mesh(haloGeo, haloMat);
    monolithGroup.add(haloRing);

    const outerHaloGeo = new THREE.TorusGeometry(2.45, 0.006, 16, 128);
    const outerHaloMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.25,
    });
    const outerHalo = new THREE.Mesh(outerHaloGeo, outerHaloMat);
    outerHalo.rotation.x = Math.PI / 6;
    monolithGroup.add(outerHalo);

    // ------------------------------------------------------------------
    // 2. HEDRON POLYHEDRAL RESONANCE CATALYST ("silicon" mode)
    // ------------------------------------------------------------------
    const hedronGroup = new THREE.Group();
    hedronGroup.visible = false;
    rootGroup.add(hedronGroup);

    const dodecaGeo = new THREE.DodecahedronGeometry(1.75, 0);
    const dodecaEdges = new THREE.EdgesGeometry(dodecaGeo);
    const dodecaLine = new THREE.LineSegments(
      dodecaEdges,
      new THREE.LineBasicMaterial({ color: 0xf4f4f0, transparent: true, opacity: 0.65 })
    );
    hedronGroup.add(dodecaLine);

    const icosaGeo = new THREE.IcosahedronGeometry(1.25, 1);
    const icosaMat = new THREE.MeshStandardMaterial({
      color: 0x14151c,
      roughness: 0.25,
      metalness: 0.85,
      flatShading: true,
    });
    const icosaMesh = new THREE.Mesh(icosaGeo, icosaMat);
    const icosaWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(icosaGeo),
      new THREE.LineBasicMaterial({ color: 0xe11d48, transparent: true, opacity: 0.85 })
    );
    icosaMesh.add(icosaWire);
    hedronGroup.add(icosaMesh);

    // 3 Resonance Containment Rings
    const hedronRings: THREE.Mesh[] = [];
    [1.95, 2.2, 2.45].forEach((radius, i) => {
      const rGeo = new THREE.TorusGeometry(radius, 0.015, 12, 96);
      const rMat = new THREE.MeshBasicMaterial({
        color: i === 1 ? 0xf59e0b : 0xe11d48,
        transparent: true,
        opacity: 0.5,
      });
      const rMesh = new THREE.Mesh(rGeo, rMat);
      rMesh.rotation.set(i * 0.8, i * 0.5, 0);
      hedronGroup.add(rMesh);
      hedronRings.push(rMesh);
    });

    // ------------------------------------------------------------------
    // 3. GLOBAL CONTAINMENT & FIELD NETWORK ("globe" mode)
    // ------------------------------------------------------------------
    const globeGroup = new THREE.Group();
    globeGroup.visible = false;
    rootGroup.add(globeGroup);

    const sphereGeo = new THREE.SphereGeometry(1.85, 28, 28);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0xf4f4f0,
      wireframe: true,
      transparent: true,
      opacity: 0.11,
    });
    globeGroup.add(new THREE.Mesh(sphereGeo, sphereMat));

    // Fibonacci Point Matrix
    const globeDotsCount = 600;
    const globeDotsPos = new Float32Array(globeDotsCount * 3);
    for (let i = 0; i < globeDotsCount; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / globeDotsCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 1.87;
      globeDotsPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      globeDotsPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      globeDotsPos[i * 3 + 2] = r * Math.cos(phi);
    }
    const globeDotsGeo = new THREE.BufferGeometry();
    globeDotsGeo.setAttribute("position", new THREE.BufferAttribute(globeDotsPos, 3));
    const globePoints = new THREE.Points(
      globeDotsGeo,
      new THREE.PointsMaterial({ color: 0xe11d48, size: 0.036, transparent: true, opacity: 0.75 })
    );
    globeGroup.add(globePoints);

    // 5 Field Deployment Beacons + Vector Arcs
    const beaconCoords = [
      new THREE.Vector3(0.5, 1.4, 1.12),   // Oslo
      new THREE.Vector3(0.3, 1.1, 1.48),   // Geneva
      new THREE.Vector3(0.2, 1.15, 1.45),  // Paris / Nantes
      new THREE.Vector3(-1.1, 0.95, 1.15), // NYC
      new THREE.Vector3(1.1, 0.6, 1.38),   // MENA / Global
    ];

    beaconCoords.forEach((vec, idx) => {
      const pos = vec.clone().normalize().multiplyScalar(1.9);
      const beacon = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.08, 0),
        new THREE.MeshBasicMaterial({ color: idx % 2 === 0 ? 0xe11d48 : 0xf59e0b })
      );
      beacon.position.copy(pos);
      globeGroup.add(beacon);

      const nextVec = beaconCoords[(idx + 1) % beaconCoords.length]
        .clone()
        .normalize()
        .multiplyScalar(1.9);
      const midPoint = pos
        .clone()
        .add(nextVec)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(2.45);
      const curve = new THREE.QuadraticBezierCurve3(pos, midPoint, nextVec);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(32));
      const arcLine = new THREE.Line(
        arcGeo,
        new THREE.LineBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.65 })
      );
      globeGroup.add(arcLine);
    });

    // ------------------------------------------------------------------
    // 4. FLOATING ASH / THRESHOLD MOTES PARTICLE FIELD
    // ------------------------------------------------------------------
    const particleCount = 380;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0xe11d48,
      size: 0.03,
      transparent: true,
      opacity: 0.45,
    });
    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // ------------------------------------------------------------------
    // MOUSE & SCROLL CHOREOGRAPHY
    // ------------------------------------------------------------------
    const mouseTarget = new THREE.Vector2(0, 0);
    const mouseCurrent = new THREE.Vector2(0, 0);
    let scrollY = window.scrollY || 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseTarget.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseTarget.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      updateRootOffset();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    let frameCount = 0;
    let lastFpsTime = performance.now();
    let reqId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      frameCount++;
      const now = performance.now();
      if (now - lastFpsTime >= 1000) {
        onFpsUpdate?.(Math.min(60, Math.round((frameCount * 1000) / (now - lastFpsTime))));
        frameCount = 0;
        lastFpsTime = now;
      }

      mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.06;
      mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.06;
      pulseValueRef.current *= 0.92;

      // Update GLSL Uniforms
      shaderUniforms.uTime.value = elapsedTime;
      shaderUniforms.uPulse.value = pulseValueRef.current;
      shaderUniforms.uMouse.value.copy(mouseCurrent);
      shaderUniforms.uAccent.value.set(accentRef.current);
      shaderUniforms.uMorph.value = (blurRef.current - 16) / 16.0;

      // Sync accent color across lights and rings
      pyrEdgesMat.color.set(accentRef.current);
      haloMat.color.set(accentRef.current);
      particlesMat.color.set(accentRef.current);
      crimsonLight.color.set(accentRef.current);

      const currentMode = modeRef.current;
      monolithGroup.visible = currentMode === "aura" || currentMode === "wireframe";
      hedronGroup.visible = currentMode === "silicon";
      globeGroup.visible = currentMode === "globe";

      pyramidMat.wireframe = currentMode === "wireframe";

      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

      const isWide = window.innerWidth >= 1024;
      const heroBlend = Math.max(0, 1 - scrollY / 900);
      rootGroup.position.x = isWide ? 1.65 * heroBlend : 0;
      rootGroup.position.y = (isWide ? 0.1 : -0.15) + Math.sin(elapsedTime * 0.9) * 0.07;
      rootGroup.position.z = -scrollProgress * 1.3;

      rootGroup.rotation.y = mouseCurrent.x * 0.38 + scrollProgress * Math.PI * 1.2;
      rootGroup.rotation.x = -mouseCurrent.y * 0.25 + scrollProgress * 0.35;

      // Inverted Pyramid slow ominous rotation
      invertedPyramid.rotation.y = Math.PI / 4 + elapsedTime * 0.18;
      pyrEdges.rotation.y = invertedPyramid.rotation.y;

      // Levitating Brutalist Slabs shift vertically & expand outward on pulse
      slabs.forEach((s, idx) => {
        const expand = 1 + pulseValueRef.current * 0.35;
        s.mesh.position.x = s.basePos.x * expand;
        s.mesh.position.y =
          s.basePos.y * expand + Math.sin(elapsedTime * s.speed + idx) * 0.16;
        s.mesh.position.z = s.basePos.z * expand;
        s.mesh.rotation.y = Math.sin(elapsedTime * 0.5 + idx) * 0.15;
      });

      haloRing.rotation.z = elapsedTime * 0.25;
      outerHalo.rotation.y = -elapsedTime * 0.2;

      if (hedronGroup.visible) {
        dodecaLine.rotation.y = elapsedTime * 0.3;
        dodecaLine.rotation.x = elapsedTime * 0.2;
        icosaMesh.rotation.y = -elapsedTime * 0.45;
        const scalePulse = 1 + pulseValueRef.current * 0.22;
        icosaMesh.scale.set(scalePulse, scalePulse, scalePulse);
        hedronRings.forEach((r, idx) => {
          r.rotation.x += 0.008 * (idx + 1);
          r.rotation.y -= 0.006 * (idx + 1);
        });
      }

      if (globeGroup.visible) {
        globeGroup.rotation.y = elapsedTime * 0.25;
      }

      particleSystem.rotation.y = elapsedTime * 0.02 - mouseCurrent.x * 0.08;
      particleSystem.rotation.x = mouseCurrent.y * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [onFpsUpdate]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

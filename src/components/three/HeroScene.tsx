"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

/**
 * Hero backdrop: a slowly-rotating Earth floating above a giant open palm made
 * of thousands of stars.
 *   • Earth — a dotted globe; continents/oceans/ice are picked out by procedural
 *     3-D noise, wrapped in a soft fresnel atmosphere, spinning on a tilted axis.
 *   • Hand — a procedural point cloud: a cupped open palm, five curling fingers
 *     and a tapering wrist, all glowing additive star sprites.
 */

/* ── helpers ─────────────────────────────────────────────────────────────── */

// quadratic bezier point — traces each curling finger
function bezier(
  p0: number[],
  p1: number[],
  p2: number[],
  t: number
): [number, number, number] {
  const mt = 1 - t;
  const a = mt * mt;
  const b = 2 * mt * t;
  const c = t * t;
  return [
    a * p0[0] + b * p1[0] + c * p2[0],
    a * p0[1] + b * p1[1] + c * p2[1],
    a * p0[2] + b * p1[2] + c * p2[2],
  ];
}

// soft round star sprite (radial gradient), shared by Earth dots + hand
function makeStarTexture() {
  const s = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = s;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,0.85)");
  g.addColorStop(0.7, "rgba(255,255,255,0.3)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

/* ── deterministic 3-D value noise → continents ──────────────────────────── */

function hash3(x: number, y: number, z: number) {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453123;
  return n - Math.floor(n);
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function vnoise(x: number, y: number, z: number) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const zi = Math.floor(z);
  const xf = x - xi;
  const yf = y - yi;
  const zf = z - zi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const w = zf * zf * (3 - 2 * zf);
  const c = (a: number, b: number, d: number) => hash3(xi + a, yi + b, zi + d);
  const x00 = lerp(c(0, 0, 0), c(1, 0, 0), u);
  const x10 = lerp(c(0, 1, 0), c(1, 1, 0), u);
  const x01 = lerp(c(0, 0, 1), c(1, 0, 1), u);
  const x11 = lerp(c(0, 1, 1), c(1, 1, 1), u);
  return lerp(lerp(x00, x10, v), lerp(x01, x11, v), w);
}
function fbm(x: number, y: number, z: number) {
  let f = 0;
  let amp = 0.5;
  let freq = 1;
  for (let o = 0; o < 4; o++) {
    f += amp * vnoise(x * freq, y * freq, z * freq);
    freq *= 2.07;
    amp *= 0.5;
  }
  return f;
}

/* ── Earth (dotted globe + atmosphere) ───────────────────────────────────── */

function generateEarth() {
  const count = 14000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const ocean = new THREE.Color("#0e63c8");
  const oceanDeep = new THREE.Color("#0a3f86");
  const land = new THREE.Color("#2fae5a"); // emerald
  const landDry = new THREE.Color("#9c8b3e"); // arid/desert
  const ice = new THREE.Color("#e6f3ff");
  const golden = (1 + Math.sqrt(5)) / 2;

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    // even fibonacci-sphere distribution
    const yy = 1 - (i + 0.5) / count * 2;
    const r = Math.sqrt(1 - yy * yy);
    const theta = 2 * Math.PI * i / golden;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;

    positions[i3] = x;
    positions[i3 + 1] = yy;
    positions[i3 + 2] = z;

    const n = fbm(x * 1.7 + 4.2, yy * 1.7 + 4.2, z * 1.7 + 4.2);
    const isLand = n > 0.52;
    let c: THREE.Color;
    if (Math.abs(yy) > 0.86) {
      c = ice.clone(); // polar caps
    } else if (isLand) {
      c = land.clone().lerp(landDry, Math.min(1, (n - 0.52) * 4));
    } else {
      c = ocean.clone().lerp(oceanDeep, (0.52 - n) * 1.6);
    }
    const b = 0.75 + Math.random() * 0.4;
    colors[i3] = c.r * b;
    colors[i3 + 1] = c.g * b;
    colors[i3 + 2] = c.b * b;
  }
  return { positions, colors };
}

function Earth({ reducedMotion }: { reducedMotion: boolean }) {
  const spin = useRef<THREE.Points>(null);
  const tex = useMemo(makeStarTexture, []);
  const { positions, colors } = useMemo(generateEarth, []);

  useFrame((_, delta) => {
    if (spin.current && !reducedMotion) spin.current.rotation.y += delta * 0.12;
  });

  return (
    // tilted axis, floating above the palm
    <group position={[0, 0.7, 0.3]} scale={1.25} rotation={[0.36, 0, 0.12]}>
      <points ref={spin}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          sizeAttenuation
          map={tex}
          alphaMap={tex}
          alphaTest={0.4}
          vertexColors
          depthWrite
          toneMapped={false}
        />
      </points>

      {/* soft atmosphere glow (fresnel rim, additive) */}
      <mesh scale={1.18}>
        <sphereGeometry args={[1, 48, 48]} />
        <shaderMaterial
          transparent
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          uniforms={{ uColor: { value: new THREE.Color("#5cc0ff") } }}
          vertexShader={`
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec3 vNormal;
            uniform vec3 uColor;
            void main() {
              float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
              intensity = clamp(intensity, 0.0, 1.0);
              gl_FragColor = vec4(uColor, intensity);
            }
          `}
        />
      </mesh>
    </group>
  );
}

/* ── star hand (open, supporting palm) ───────────────────────────────────── */

function generateHand() {
  const pos: number[] = [];
  const col: number[] = [];
  const warm = new THREE.Color("#fff1d6");
  const cool = new THREE.Color("#bcd4ff");

  const push = (x: number, y: number, z: number, bright = 0) => {
    pos.push(x, y, z);
    const c = warm.clone().lerp(cool, Math.random() * 0.55);
    const b = 0.65 + Math.random() * 0.45 + bright * 0.25;
    col.push(c.r * b, c.g * b, c.b * b);
  };

  // palm — a gently upward-opening bowl
  const palmHalfW = 1.35;
  const palmHalfD = 1.4;
  for (let i = 0; i < 3400; i++) {
    const a = Math.random() * Math.PI * 2;
    const rr = Math.sqrt(Math.random());
    const x = Math.cos(a) * rr * palmHalfW;
    const z = Math.sin(a) * rr * palmHalfD;
    const y = -0.12 + rr * rr * 0.45 + (Math.random() - 0.5) * 0.12;
    push(x, y, z);
  }

  // four fingers — open, rising with only a soft inward lean (supporting, not gripping)
  const fingers = [
    { x: -1.05, z: 1.15, len: 2.0, r: 0.17 }, // pinky
    { x: -0.36, z: 1.32, len: 2.45, r: 0.19 }, // ring
    { x: 0.36, z: 1.32, len: 2.6, r: 0.19 }, // middle
    { x: 1.05, z: 1.15, len: 2.2, r: 0.18 }, // index
  ];
  for (const f of fingers) {
    const baseY = 0.22;
    const p0 = [f.x, baseY, f.z];
    const p1 = [f.x * 0.96, baseY + f.len * 0.52, f.z * 0.9];
    const p2 = [f.x * 0.82, baseY + f.len * 0.9, f.z * 0.55];
    for (let i = 0; i < 900; i++) {
      const t = Math.sqrt(Math.random());
      const b = bezier(p0, p1, p2, t);
      const rad = f.r * (1 - 0.6 * t);
      const a = Math.random() * Math.PI * 2;
      const rr = Math.sqrt(Math.random()) * rad;
      push(b[0] + Math.cos(a) * rr, b[1] + (Math.random() - 0.5) * rad, b[2] + Math.sin(a) * rr, t);
    }
  }

  // thumb — off the side, angled up & out
  {
    const p0 = [-1.4, 0.08, -0.1];
    const p1 = [-1.85, 0.85, 0.45];
    const p2 = [-1.35, 1.45, 0.75];
    for (let i = 0; i < 720; i++) {
      const t = Math.sqrt(Math.random());
      const b = bezier(p0, p1, p2, t);
      const rad = 0.2 * (1 - 0.55 * t);
      const a = Math.random() * Math.PI * 2;
      const rr = Math.sqrt(Math.random()) * rad;
      push(b[0] + Math.cos(a) * rr, b[1] + (Math.random() - 0.5) * rad, b[2] + Math.sin(a) * rr, t);
    }
  }

  // wrist — tapers down & back behind the palm
  for (let i = 0; i < 950; i++) {
    const t = Math.random();
    const x = (Math.random() - 0.5) * 1.5 * (1 - 0.3 * t);
    const y = -0.18 - t * 1.5;
    const z = -palmHalfD - t * 0.9 + (Math.random() - 0.5) * 0.3;
    push(x, y, z);
  }

  return { positions: new Float32Array(pos), colors: new Float32Array(col) };
}

function StarHand({ reducedMotion }: { reducedMotion: boolean }) {
  const g = useRef<THREE.Group>(null);
  const tex = useMemo(makeStarTexture, []);
  const { positions, colors } = useMemo(generateHand, []);

  useFrame((state) => {
    if (!g.current || reducedMotion) return;
    const t = state.clock.elapsedTime;
    g.current.position.y = -2.5 + Math.sin(t * 0.5) * 0.09; // slow breathing lift
    g.current.rotation.y = Math.sin(t * 0.18) * 0.05; // faint sway
  });

  return (
    <group ref={g} position={[0, -2.5, 0.5]} rotation={[-0.16, 0, 0]} scale={1.3}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          sizeAttenuation
          map={tex}
          alphaMap={tex}
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
          opacity={0.95}
        />
      </points>
    </group>
  );
}

/* ── pointer parallax rig ────────────────────────────────────────────────── */

function Rig({ children }: { children: React.ReactNode }) {
  const g = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!g.current) return;
    g.current.rotation.y = THREE.MathUtils.lerp(g.current.rotation.y, state.pointer.x * 0.1, 0.04);
    g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, -state.pointer.y * 0.07, 0.04);
  });
  return <group ref={g}>{children}</group>;
}

/* ── scene ───────────────────────────────────────────────────────────────── */

export default function HeroScene({ reducedMotion = false }: { reducedMotion?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={reducedMotion ? "demand" : "always"}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        {/* lighting only matters for the atmosphere shell; points are self-lit */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 3, 5]} intensity={1.2} color="#dbeeff" />

        {/* deep-space starfield */}
        <Stars
          radius={60}
          depth={30}
          count={2200}
          factor={3.5}
          saturation={0}
          fade
          speed={reducedMotion ? 0 : 0.4}
        />

        <Rig>
          <Earth reducedMotion={reducedMotion} />
          <StarHand reducedMotion={reducedMotion} />
        </Rig>
      </Suspense>
    </Canvas>
  );
}

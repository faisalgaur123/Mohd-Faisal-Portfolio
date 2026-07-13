import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Html } from "@react-three/drei";
import * as THREE from "three";

const TECH_NODES = [
  {
    text: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    text: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    text: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    text: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    text: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

function Scene() {
  const groupRef = useRef(null);
  const coreRef = useRef(null);

  const TEAL = "#00e5c7";
  const INDIGO = "#6e7bff";

  const nodes = useMemo(() =>
    TECH_NODES.map((t, i) => {
      const angle = (i / TECH_NODES.length) * Math.PI * 2;
      const radius = 1.95 + (i % 2 === 0 ? 0.05 : 0.1);
      const speed = 0.14 + i * 0.012;
      const yOff = (i % 3 === 0 ? 0.3 : i % 3 === 1 ? -0.4 : 0.05);
      return { ...t, angle, radius, speed, yOff };
    }), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current && coreRef.current) {
      groupRef.current.rotation.y = t * 0.1;
      coreRef.current.rotation.x = t * 0.15;
      coreRef.current.rotation.y = t * 0.08;
      const mx = (state.pointer.x * Math.PI) / 10;
      const my = (state.pointer.y * Math.PI) / 10;
      groupRef.current.rotation.z += (mx - groupRef.current.rotation.z) * 0.05;
      groupRef.current.rotation.x += (-my - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group position={[4.5, 0, -1.2]}>
      <group ref={groupRef}>
        {/* Core wireframe globe */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.7, 2]} />
          <meshBasicMaterial color={TEAL} wireframe transparent opacity={0.3} />
        </mesh>
        {/* Inner glow */}
        <mesh>
          <icosahedronGeometry args={[1.68, 2]} />
          <meshBasicMaterial color={INDIGO} transparent opacity={0.07} />
        </mesh>
        {/* Orbiting icon nodes */}
        {nodes.map((node, i) => (
          <OrbitNode key={i} data={node} />
        ))}
      </group>
    </group>
  );
}

function OrbitNode({ data }) {
  const meshRef = useRef(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const a = data.angle + t * data.speed;
    const x = Math.cos(a) * data.radius;
    const z = Math.sin(a) * data.radius;
    const y = data.yOff + Math.sin(t * 0.6 + data.angle) * 0.3;
    if (meshRef.current) meshRef.current.position.set(x, y, z);
  });

  return (
    <group>
      {/* Icon node */}
      <group ref={meshRef}>
        <Html
          center
          distanceFactor={6}
          style={{ pointerEvents: "none" }}
        >
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            userSelect: "none",
          }}>
            <div style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "rgba(14,17,26,0.85)",
              border: "1.5px solid rgba(110,123,255,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 12px rgba(110,123,255,0.3)",
              backdropFilter: "blur(6px)",
            }}>
              <img
                src={data.icon}
                alt={data.text}
                width={22}
                height={22}
                style={{ display: "block" }}
              />
            </div>
            <span style={{
              color: "#cfe9ff",
              fontSize: "9px",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
              textShadow: "0 0 8px rgba(110,123,255,0.8)",
            }}>
              {data.text}
            </span>
          </div>
        </Html>
      </group>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 55 }}>
      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      <Scene />
    </Canvas>
  );
}

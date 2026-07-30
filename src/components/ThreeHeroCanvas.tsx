import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points for floating dust particles
function DustParticles({ count = 800 }) {
  const ref = useRef<THREE.Points>(null);
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;      // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;  // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;  // z
    }
    return pos;
  });

  useFrame((_, delta) => {
    if (!ref.current) return;
    // Slow drifting animation
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x += delta * 0.01;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.35}
      />
    </Points>
  );
}

// Light beam representing a cinematic projector lamp
function ProjectorBeam() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Track mouse pointer coordinate vector with smooth physics delay
    const targetX = -state.pointer.y * 0.4;
    const targetY = (state.pointer.x * 0.4) + Math.PI / 4;
    
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.05);
  });

  return (
    <mesh ref={meshRef} position={[-4, 4, -5]} rotation={[0, Math.PI / 4, 0]}>
      {/* Cylinder representing the volumetric light cone */}
      <cylinderGeometry args={[0.1, 4, 12, 32, 1, true]} />
      <meshBasicMaterial
        transparent
        color="#f43f5e"
        opacity={0.08}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

export function ThreeHeroCanvas() {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    // Check for WebGL capability before rendering
    try {
      const canvas = document.createElement('canvas');
      const supported = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      setWebGLSupported(supported);
    } catch (e) {
      setWebGLSupported(false);
    }
  }, []);

  if (!webGLSupported) {
    // Elegant CSS-only radial gradient fallback if WebGL is unavailable
    return (
      <div className="absolute inset-0 bg-studio-black pointer-events-none">
        <div className="projector-glow" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#020202]">
      {/* Light spotlight beam layer */}
      <div className="projector-glow" />
      
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[1, 1, 1]} intensity={0.4} />
        <ProjectorBeam />
        <DustParticles count={600} />
      </Canvas>
    </div>
  );
}
export default ThreeHeroCanvas;

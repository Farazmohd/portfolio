import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNetwork() {
  const count = 50;
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < count; i++) {
      p.push(new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      ));
    }
    return p;
  }, []);

  const pointsRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.05;
    pointsRef.current.rotation.x = t * 0.02;
    
    // Animate camera subtly for parallax
    state.camera.position.x = Math.sin(t * 0.2) * 0.5;
    state.camera.position.y = Math.cos(t * 0.2) * 0.5;
    state.camera.lookAt(0, 0, 0);
  });

  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dist = points[i].distanceTo(points[j]);
        if (dist < 4) {
          pos.push(points[i].x, points[i].y, points[i].z);
          pos.push(points[j].x, points[j].y, points[j].z);
        }
      }
    }
    return new THREE.Float32BufferAttribute(pos, 3);
  }, [points]);

  return (
    <group ref={pointsRef}>
      <Points positions={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))} stride={3}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.12}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" {...positions} />
        </bufferGeometry>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.2} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

function ParticleUniverse() {
  const count = 1000;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 25;
      p[i * 3 + 1] = (Math.random() - 0.5) * 25;
      p[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return p;
  }, []);

  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-[#020617]">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
        <fog attach="fog" args={['#020617', 10, 25]} />
        
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <NeuralNetwork />
        <ParticleUniverse />
        
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
          <mesh position={[0, 0, -12]}>
            <sphereGeometry args={[5, 64, 64]} />
            <meshBasicMaterial color="#1e1b4b" wireframe transparent opacity={0.1} />
          </mesh>
        </Float>
      </Canvas>
      
      <div className="absolute inset-0 pointer-events-none bg-radial-vignette opacity-50 z-1" />
    </div>
  );
}

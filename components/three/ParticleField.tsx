'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense } from 'react';

interface ParticleFieldProps {
  count?: number;
  speed?: number;
  spread?: number;
  size?: number;
  color?: string;
}

function ParticlesContent({
  count = 5000,
  speed = 0.5,
  spread = 100,
  size = 0.7,
  color = '#00d4ff',
}: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const { camera } = useThree();

  // Create particles
  const particlesPosition = useRef(new Float32Array(count * 3));
  const particlesVelocity = useRef(new Float32Array(count * 3));

  useEffect(() => {
    const positions = particlesPosition.current;
    const velocities = particlesVelocity.current;

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * spread;
      positions[i + 1] = (Math.random() - 0.5) * spread;
      positions[i + 2] = (Math.random() - 0.5) * spread;

      velocities[i] = (Math.random() - 0.5) * speed;
      velocities[i + 1] = (Math.random() - 0.5) * speed;
      velocities[i + 2] = (Math.random() - 0.5) * speed;
    }
  }, [count, speed, spread]);

  useFrame(() => {
    if (!pointsRef.current) return;

    const positions = particlesPosition.current;
    const velocities = particlesVelocity.current;

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] += velocities[i];
      positions[i + 1] += velocities[i + 1];
      positions[i + 2] += velocities[i + 2];

      // Bounce off boundaries
      const boundary = spread / 2;
      if (Math.abs(positions[i]) > boundary) velocities[i] *= -1;
      if (Math.abs(positions[i + 1]) > boundary) velocities[i + 1] *= -1;
      if (Math.abs(positions[i + 2]) > boundary) velocities[i + 2] *= -1;
    }

    if (pointsRef.current.geometry) {
      (pointsRef.current.geometry as any).attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef} positions={particlesPosition.current} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function ParticleFieldFallback() {
  return null;
}

export function ParticleField(props: ParticleFieldProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <Suspense fallback={<ParticleFieldFallback />}>
          <ParticlesContent {...props} />
        </Suspense>
      </Canvas>
    </div>
  );
}

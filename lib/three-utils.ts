import * as THREE from 'three';

// Particle configuration interface
export interface ParticleConfig {
  count: number;
  size: number;
  speed: number;
  spread: number;
  color: string | number;
}

// Create particle geometry and material
export const createParticleSystem = (config: ParticleConfig) => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(config.count * 3);

  for (let i = 0; i < config.count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * config.spread;
    positions[i + 1] = (Math.random() - 0.5) * config.spread;
    positions[i + 2] = (Math.random() - 0.5) * config.spread;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    size: config.size,
    color: config.color,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(geometry, material);
  return { particles, geometry, material };
};

// Generate random positions in 3D space
export const generateRandomPositions = (
  count: number,
  spread: number
): Float32Array => {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * spread;
    positions[i + 1] = (Math.random() - 0.5) * spread;
    positions[i + 2] = (Math.random() - 0.5) * spread;
  }

  return positions;
};

// Generate random velocities
export const generateRandomVelocities = (
  count: number,
  speed: number
): Float32Array => {
  const velocities = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    velocities[i] = (Math.random() - 0.5) * speed;
    velocities[i + 1] = (Math.random() - 0.5) * speed;
    velocities[i + 2] = (Math.random() - 0.5) * speed;
  }

  return velocities;
};

// Create wireframe geometry
export const createWireframeBox = (size: number = 1) => {
  const geometry = new THREE.BoxGeometry(size, size, size);
  const material = new THREE.LineBasicMaterial({ color: 0x00d4ff });
  const wireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    material
  );
  return wireframe;
};

// Create wireframe sphere
export const createWireframeSphere = (radius: number = 1) => {
  const geometry = new THREE.SphereGeometry(radius, 32, 32);
  const material = new THREE.LineBasicMaterial({ color: 0xc000ff });
  const wireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    material
  );
  return wireframe;
};

// Create wireframe torus
export const createWireframeTorus = (radius: number = 1, tube: number = 0.4) => {
  const geometry = new THREE.TorusGeometry(radius, tube, 16, 100);
  const material = new THREE.LineBasicMaterial({ color: 0xff006e });
  const wireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    material
  );
  return wireframe;
};

// Create gradient material
export const createGradientMaterial = (
  colorStart: string,
  colorEnd: string
) => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;

  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.MeshBasicMaterial({ color: 0xffffff });

  const gradient = ctx.createLinearGradient(0, 0, 256, 256);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);

  const texture = new THREE.CanvasTexture(canvas);
  return new THREE.MeshBasicMaterial({ map: texture });
};

// Calculate distance between two 3D points
export const distance3D = (
  p1: THREE.Vector3,
  p2: THREE.Vector3
): number => {
  return p1.distanceTo(p2);
};

// Normalize a value to a range
export const normalize = (
  value: number,
  min: number,
  max: number
): number => {
  return (value - min) / (max - min);
};

// Lerp (linear interpolation) between two values
export const lerp = (a: number, b: number, t: number): number => {
  return a + (b - a) * t;
};

// Create a simple light setup
export const createLightSetup = (scene: THREE.Scene) => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 7);
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0x00d4ff, 0.5);
  pointLight.position.set(-5, 5, 5);
  scene.add(pointLight);

  return { ambientLight, directionalLight, pointLight };
};

// Apply fog to scene
export const applyFog = (
  scene: THREE.Scene,
  color: number = 0x000000,
  near: number = 1,
  far: number = 1000
) => {
  scene.fog = new THREE.Fog(color, near, far);
};

// Create grid helper (useful for debugging)
export const createGridHelper = (
  size: number = 100,
  divisions: number = 10
): THREE.GridHelper => {
  return new THREE.GridHelper(size, divisions);
};

// Handle canvas resizing
export const handleCanvasResize = (
  canvas: HTMLCanvasElement,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer
) => {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  const needsResize =
    canvas.width !== width || canvas.height !== height;

  if (needsResize) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  return needsResize;
};

// Create texture from canvas
export const createCanvasTexture = (
  width: number = 512,
  height: number = 512,
  drawFunction: (ctx: CanvasRenderingContext2D) => void
): THREE.CanvasTexture => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (ctx) {
    drawFunction(ctx);
  }

  return new THREE.CanvasTexture(canvas);
};

// Dispose of Three.js resources
export const disposeScene = (scene: THREE.Scene) => {
  scene.traverse((object) => {
    if ((object as any).geometry) {
      (object as any).geometry.dispose();
    }
    if ((object as any).material) {
      const material = (object as any).material;
      if (Array.isArray(material)) {
        material.forEach((m: THREE.Material) => m.dispose());
      } else {
        material.dispose();
      }
    }
  });
};

// Create a simple orbit camera controls setup
export const createOrbitControls = (
  camera: THREE.PerspectiveCamera,
  domElement: HTMLElement
) => {
  let isMouseDown = false;
  let previousMousePosition = { x: 0, y: 0 };

  const rotationSpeed = 0.005;

  domElement.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  domElement.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;

    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    // Apply rotation based on mouse movement
    camera.position.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      deltaX * rotationSpeed
    );
    camera.position.applyAxisAngle(
      new THREE.Vector3(1, 0, 0),
      deltaY * rotationSpeed
    );

    camera.lookAt(0, 0, 0);
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  domElement.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  domElement.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });
};

// Create points that connect if within distance
export const createConnectedPoints = (
  positions: Float32Array,
  connectionDistance: number = 100
): THREE.LineSegments => {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const linePositions: number[] = [];

  // Find connected points
  for (let i = 0; i < positions.length; i += 3) {
    for (let j = i + 3; j < positions.length; j += 3) {
      const dx = positions[j] - positions[i];
      const dy = positions[j + 1] - positions[i + 1];
      const dz = positions[j + 2] - positions[i + 2];

      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (distance < connectionDistance) {
        linePositions.push(positions[i], positions[i + 1], positions[i + 2]);
        linePositions.push(positions[j], positions[j + 1], positions[j + 2]);
      }
    }
  }

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array(linePositions), 3)
  );

  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x00d4ff,
    transparent: true,
    opacity: 0.3,
  });

  return new THREE.LineSegments(lineGeometry, lineMaterial);
};

// Generate noise-based height map (for wave effects)
export const generateHeightMap = (
  width: number,
  height: number,
  scale: number = 0.1
): Float32Array => {
  const heightMap = new Float32Array(width * height);

  for (let i = 0; i < width * height; i++) {
    const x = i % width;
    const y = Math.floor(i / width);

    // Simple Perlin-like noise (sine-based)
    const noise =
      Math.sin((x * scale) / 10) * Math.cos((y * scale) / 10) * 0.5 + 0.5;
    heightMap[i] = noise;
  }

  return heightMap;
};

// Create a simple plane geometry with displacement
export const createDisplacedPlane = (
  width: number,
  height: number,
  widthSegments: number,
  heightSegments: number,
  displacementScale: number = 0.5
) => {
  const geometry = new THREE.PlaneGeometry(
    width,
    height,
    widthSegments,
    heightSegments
  );
  const positions = geometry.attributes.position.array as Float32Array;

  // Apply displacement
  for (let i = 2; i < positions.length; i += 3) {
    const height = Math.sin((positions[i - 2] * Math.PI) / width) * displacementScale;
    positions[i] += height;
  }

  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();

  return geometry;
};

// Color utilities
export const hexToRgb = (hex: string): [number, number, number] | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};

export const rgbToHex = (r: number, g: number, b: number): string => {
  return `#${[r, g, b].map((x) => {
    const hex = x.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }).join('')}`;
};

// Create performance monitoring
export const createPerformanceMonitor = () => {
  let lastTime = performance.now();
  let frames = 0;
  let fps = 0;

  return {
    update: () => {
      frames++;
      const currentTime = performance.now();
      const elapsed = currentTime - lastTime;

      if (elapsed >= 1000) {
        fps = frames;
        frames = 0;
        lastTime = currentTime;
      }

      return fps;
    },
    getFps: () => fps,
  };
};

'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  intensity?: number;
  width?: number;
  height?: number;
}

gsap.registerPlugin(ScrollTrigger);

export function ParallaxImage({
  src,
  alt,
  className = '',
  intensity = 0.5,
  width = 600,
  height = 400,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    gsap.to(imageRef.current, {
      y: (index, target) => {
        return gsap.utils.unitize(
          (1 - gsap.getProperty(target, 'y', 'px') / window.innerHeight) * intensity * 100
        );
      },
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [intensity]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg ${className}`}
    >
      <div ref={imageRef} className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover"
          priority={false}
        />
      </div>
    </div>
  );
}

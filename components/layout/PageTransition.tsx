'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    // Timeline for page entry
    const tl = gsap.timeline();

    // Overlay enters from bottom (scaleY)
    tl.from(
      overlay,
      {
        duration: 0.6,
        scaleY: 0,
        transformOrigin: 'bottom',
        ease: 'power4.inOut',
      },
      0
    );

    // Content fades in
    tl.from(
      'main',
      {
        duration: 0.4,
        opacity: 0,
      },
      0.2
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* Page transition overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 top-0 left-0 h-screen w-full bg-background z-40 origin-bottom pointer-events-none"
      />
      {children}
    </>
  );
}

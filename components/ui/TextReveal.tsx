'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface TextRevealProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  duration?: number;
  stagger?: number;
  trigger?: boolean; // Whether to use scroll trigger
}

gsap.registerPlugin(ScrollTrigger);

export function TextReveal({
  text,
  className = '',
  as: Component = 'p',
  duration = 0.8,
  stagger = 0.05,
  trigger = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const linesRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lines = Array.from(container.querySelectorAll('[data-line]'));

    if (lines.length === 0) {
      // If no lines, animate the whole element
      gsap.from(container, {
        scrollTrigger: trigger
          ? {
              trigger: container,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          : undefined,
        duration,
        opacity: 0,
        y: 20,
      });
      return;
    }

    gsap.from(lines, {
      scrollTrigger: trigger
        ? {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        : undefined,
      duration,
      opacity: 0,
      y: 20,
      stagger,
    });
  }, [duration, stagger, trigger]);

  // Split text into lines
  const lines = text.split('\n');

  return (
    <Component ref={containerRef} className={className}>
      {lines.map((line, idx) => (
        <div key={idx} data-line>
          {line}
        </div>
      ))}
    </Component>
  );
}

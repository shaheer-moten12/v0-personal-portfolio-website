'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface CountUpProps {
  target: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  useScrollTrigger?: boolean;
}

gsap.registerPlugin(ScrollTrigger);

export function CountUp({
  target,
  duration = 2,
  decimals = 0,
  suffix = '',
  prefix = '',
  className = '',
  useScrollTrigger = true,
}: CountUpProps) {
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!displayRef.current) return;

    const obj = { value: 0 };
    const element = displayRef.current;

    const animationConfig: any = {
      value: target,
      duration,
      snap: { value: decimals },
      onUpdate: () => {
        element.innerText = `${prefix}${obj.value.toLocaleString()}${suffix}`;
      },
      ease: 'power2.out',
    };

    if (useScrollTrigger) {
      animationConfig.scrollTrigger = {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      };
    }

    gsap.to(obj, animationConfig);
  }, [target, duration, decimals, suffix, prefix, useScrollTrigger]);

  return <span ref={displayRef} className={className} />;
}

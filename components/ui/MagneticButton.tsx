'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function MagneticButton({
  children,
  onClick,
  className = '',
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = 100; // Magnetic distance in pixels
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

    // Only apply magnetic effect if mouse is within distance
    if (
      Math.abs(e.clientX - centerX) < distance &&
      Math.abs(e.clientY - centerY) < distance
    ) {
      const strength = 1 - Math.hypot(e.clientX - centerX, e.clientY - centerY) / distance;
      setPosition({
        x: Math.cos(angle) * strength * 20,
        y: Math.sin(angle) * strength * 20,
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={position}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={`transition-all duration-200 ${className}`}
    >
      {children}
    </motion.button>
  );
}

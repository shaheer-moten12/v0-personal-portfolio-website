'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { CountUp } from '@/components/ui/CountUp';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'Years Experience', value: 6, suffix: '+' },
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'Happy Clients', value: 30, suffix: '+' },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('[data-stat-card]');

    gsap.from(cards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
      duration: 0.6,
      opacity: 0,
      y: 30,
      stagger: 0.1,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            By The Numbers
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A glimpse into my professional journey and the impact of my work
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-stat-card
              className="glass rounded-lg p-8 text-center hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
            >
              <div className="mb-4">
                <div className="text-4xl sm:text-5xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                  <CountUp target={stat.value} duration={2} suffix={stat.suffix} />
                </div>
              </div>
              <p className="text-foreground/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

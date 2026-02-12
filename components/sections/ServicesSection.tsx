'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  Code,
  ShoppingCart,
  Palette,
  Smartphone,
  Zap,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-8 h-8" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-8 h-8" />,
};

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('[data-service-card]');

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
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Services I Offer
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Comprehensive web development services tailored to bring your vision to life
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <div
              key={service.id}
              data-service-card
              className="glass rounded-lg p-8 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {iconMap[service.icon] || <Code className="w-8 h-8" />}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/60 text-sm mb-6 line-clamp-2">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2 mb-6 text-sm">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-foreground/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="outline"
                className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                size="sm"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

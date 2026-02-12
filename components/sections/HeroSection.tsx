'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { TextReveal } from '@/components/ui/TextReveal';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();

    // Hero title animation
    tl.from(titleRef.current, {
      duration: 0.8,
      y: 30,
      opacity: 0,
    });

    // Subtitle animation
    tl.from(
      subtitleRef.current,
      {
        duration: 0.8,
        y: 20,
        opacity: 0,
      },
      '-=0.4'
    );

    // Buttons animation
    tl.from(
      buttonsRef.current?.querySelectorAll('button'),
      {
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.1,
      },
      '-=0.4'
    );

    // Scroll indicator animation
    gsap.to('.scroll-indicator', {
      duration: 1,
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-950/10 -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 -z-10 grid-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Main heading */}
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl"
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">Alex Johnson</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-foreground/70 max-w-2xl leading-relaxed"
          >
            Full-Stack Developer & Creative Technologist crafting beautiful,
            performant web experiences with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mt-8">
            <MagneticButton>
              <Button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-6 text-lg hover:shadow-lg hover:shadow-purple-500/50">
                View My Work
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
              >
                Download CV
              </Button>
            </MagneticButton>
          </div>

          {/* Social links */}
          <div className="flex gap-6 mt-12">
            {personalInfo.socialLinks.github && (
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            )}
            {personalInfo.socialLinks.linkedin && (
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            )}
            {personalInfo.socialLinks.twitter && (
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            )}
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2">
            <ArrowDown className="h-6 w-6 text-foreground/50 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

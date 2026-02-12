'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/services', label: 'Services' },
  { href: '/certificates', label: 'Certificates' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const navRef = useRef<HTMLNavElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Hide/show navbar on scroll
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      onUpdate: (self) => {
        if (self.getDirection() === -1) {
          gsap.to(nav, { y: 0, duration: 0.3, overwrite: 'auto' });
        } else {
          gsap.to(nav, { y: -100, duration: 0.3, overwrite: 'auto' });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border glass"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              Alex
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="h-10 w-10"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              )}

              {/* CTA Button */}
              <Button className="hidden sm:inline-flex bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/50">
                Hire Me
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden h-10 w-10"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="px-2 py-3 border-t border-border">
                <Button className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white">
                  Hire Me
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
}

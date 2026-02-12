'use client';

import Link from 'next/link';
import { GitHub, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 backdrop-blur-md border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-2">Alex Johnson</h3>
            <p className="text-sm text-foreground/60">
              Full-Stack Developer & Creative Technologist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-foreground/60 hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/60 hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="flex gap-4">
              {personalInfo.socialLinks.github && (
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub className="h-5 w-5" />
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
                  <Linkedin className="h-5 w-5" />
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
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Copyright */}
          <div className="text-center text-sm text-foreground/50">
            <p>
              © {currentYear} Alex Johnson. All rights reserved. | Built with{' '}
              <span className="text-cyan-400">Next.js</span> and{' '}
              <span className="text-purple-500">GSAP</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

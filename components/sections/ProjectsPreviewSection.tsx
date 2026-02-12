'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export function ProjectsPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('[data-project-card]');

    gsap.from(cards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
      duration: 0.6,
      opacity: 0,
      y: 40,
      stagger: 0.15,
    });
  }, []);

  const featuredProjects = projects.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-foreground/60 max-w-xl">
              A selection of recent projects showcasing my expertise in full-stack development,
              UI/UX implementation, and innovative web solutions.
            </p>
          </div>
          <Link href="/projects" className="flex-shrink-0">
            <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <TiltCard
              key={project.id}
              data-project-card
              className="group h-full"
            >
              <div className="glass rounded-lg overflow-hidden h-full flex flex-col hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/20 text-cyan-400 mb-2">
                      {project.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/60 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-foreground/50">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors ml-auto"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

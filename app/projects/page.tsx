'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/Badge'
import { TiltCard } from '@/components/ui/TiltCard'
import { projects } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  'all',
  'web-app',
  'mobile',
  'full-stack',
  'open-source',
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('[data-project-card]')
    if (cards) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        duration: 0.6,
        opacity: 0,
        y: 40,
        stagger: 0.1,
      })
    }
  }, [selectedCategory])

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory)

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Link href="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Projects</h1>
        <p className="text-foreground/60 max-w-2xl">
          A showcase of my recent work across various technologies and platforms
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white'
                  : 'glass text-foreground/70 hover:text-foreground'
              }`}
            >
              {category === 'all' ? 'All Projects' : category.replace('-', ' ').toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
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

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/20 text-cyan-400 mb-3">
                      {project.category.replace('-', ' ')}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/60 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <p className="text-xs text-foreground/50 font-semibold mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-foreground/60 line-clamp-1">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <Badge key={idx} variant="cyan" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
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
                        className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        Live
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors ml-auto"
                      >
                        Code
                        <Github className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60">No projects found in this category.</p>
          </div>
        )}
      </div>
    </>
  )
}

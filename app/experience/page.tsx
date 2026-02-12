import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { experiences } from '@/lib/data'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Experience - Alex Johnson',
  description: 'Professional experience and work history of Alex Johnson',
}

export default function ExperiencePage() {
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
        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Work Experience</h1>
        <p className="text-foreground/60 max-w-2xl">
          My professional journey and contributions across different organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 md:transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className={`relative ml-8 md:ml-0 ${idx % 2 === 0 ? 'md:mr-auto md:w-1/2 md:pr-12' : 'md:ml-auto md:w-1/2 md:pl-12'}`}>
                {/* Timeline dot */}
                <div className={`absolute -left-12 md:left-1/2 top-0 w-8 h-8 rounded-full bg-background border-2 border-cyan-400 md:transform md:-translate-x-1/2 flex items-center justify-center`}>
                  <div className="w-3 h-3 rounded-full bg-cyan-400" />
                </div>

                {/* Card */}
                <div className="glass rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                    {exp.isCurrent && (
                      <Badge variant="cyan" className="whitespace-nowrap">
                        Current
                      </Badge>
                    )}
                  </div>

                  {/* Duration */}
                  <p className="text-sm text-foreground/60 mb-4">
                    {exp.startDate} - {exp.isCurrent ? 'Present' : exp.endDate} • {exp.duration}
                  </p>

                  {/* Description */}
                  <p className="text-foreground/80 text-sm mb-4">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground/60 mb-2">Key Responsibilities:</p>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm text-foreground/70 line-clamp-1">
                          • {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className="text-xs font-semibold text-foreground/60 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="purple" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

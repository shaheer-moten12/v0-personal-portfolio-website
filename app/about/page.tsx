import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { personalInfo, education } from '@/lib/data'
import { TextReveal } from '@/components/ui/TextReveal'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Me - Alex Johnson',
  description: 'Learn more about Alex Johnson, a full-stack developer passionate about creating beautiful and performant web experiences.',
}

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Link href="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>

      {/* Page content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative h-96">
              <Image
                src={personalInfo.imageUrl}
                alt={personalInfo.name}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            {/* Content */}
            <div>
              <TextReveal
                text={`About Me\nMy Journey in Web Development`}
                as="h1"
                className="text-4xl sm:text-5xl font-bold gradient-text mb-6 space-y-2"
              />

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with {new Date().getFullYear() - 2018} years of
                  experience building web applications that solve real-world problems. My journey in
                  technology started with curiosity and has evolved into a career dedicated to creating
                  exceptional digital experiences.
                </p>

                <p>
                  Throughout my career, I've had the privilege of working with diverse teams and
                  leading projects that pushed the boundaries of modern web development. I specialize
                  in React, Node.js, and cloud technologies, always staying at the forefront of
                  industry trends.
                </p>

                <p>
                  Beyond coding, I'm passionate about mentoring junior developers, contributing to
                  open-source projects, and sharing knowledge through blogs and technical discussions.
                  I believe in continuous learning and the power of collaboration.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white">
                  Download CV
                </Button>
                <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-20 border-t border-border">
          <h2 className="text-3xl font-bold gradient-text mb-12">Education</h2>

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={edu.id} className="glass rounded-lg p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-cyan-400 font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-foreground/60 whitespace-nowrap">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>

                <p className="text-foreground/70 text-sm mb-3">{edu.fieldOfStudy}</p>
                {edu.gpa && <p className="text-foreground/60 text-sm">GPA: {edu.gpa}</p>}
                {edu.description && (
                  <p className="text-foreground/60 text-sm mt-3">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Personal details */}
        <section className="py-20 border-t border-border">
          <h2 className="text-3xl font-bold gradient-text mb-12">Key Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-lg p-6">
              <h3 className="text-sm font-semibold text-foreground/60 mb-2">Location</h3>
              <p className="text-lg text-foreground">{personalInfo.location}</p>
              <p className="text-sm text-foreground/60">{personalInfo.timezone}</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-sm font-semibold text-foreground/60 mb-2">Availability</h3>
              <p className="text-lg text-foreground">{personalInfo.availability}</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-sm font-semibold text-foreground/60 mb-2">Email</h3>
              <a href={`mailto:${personalInfo.email}`} className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors">
                {personalInfo.email}
              </a>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-sm font-semibold text-foreground/60 mb-2">Rate</h3>
              <p className="text-lg text-foreground">{personalInfo.hourlyRate}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

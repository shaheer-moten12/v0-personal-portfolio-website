import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { skills } from '@/lib/data'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Skills - Alex Johnson',
  description: 'Technical skills and expertise of Alex Johnson',
}

const skillCategories = [
  { id: 'frontend', label: 'Frontend Development', color: 'cyan' },
  { id: 'backend', label: 'Backend Development', color: 'purple' },
  { id: 'database', label: 'Databases', color: 'green' },
  { id: 'devops', label: 'DevOps & Cloud', color: 'pink' },
  { id: 'tools', label: 'Tools & Platforms', color: 'cyan' },
  { id: 'languages', label: 'Languages', color: 'purple' },
]

export default function SkillsPage() {
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
        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Skills & Expertise</h1>
        <p className="text-foreground/60 max-w-2xl">
          Technologies and tools I'm proficient in, organized by category
        </p>
      </div>

      {/* Skills grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-12">
          {skillCategories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category.id)

            return (
              <div key={category.id}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{category.label}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="glass rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                    >
                      {/* Skill name and proficiency */}
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-foreground">{skill.name}</h3>
                        <Badge
                          variant={category.color as any}
                          className="text-xs"
                        >
                          {skill.proficiency}/10
                        </Badge>
                      </div>

                      {/* Proficiency bar */}
                      <div className="mb-4">
                        <div className="w-full bg-foreground/10 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-500"
                            style={{ width: `${(skill.proficiency / 10) * 100}%` }}
                          />
                        </div>
                      </div>

                      {/* Years of experience */}
                      <p className="text-sm text-foreground/60">
                        {skill.yearsExperience} year{skill.yearsExperience !== 1 ? 's' : ''} of experience
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional stats */}
        <div className="mt-20 border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Skills Summary</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-lg p-6 text-center">
              <p className="text-3xl font-bold gradient-text mb-2">
                {skills.length}+
              </p>
              <p className="text-foreground/60 text-sm">Total Skills</p>
            </div>

            <div className="glass rounded-lg p-6 text-center">
              <p className="text-3xl font-bold gradient-text mb-2">
                {Math.max(...skills.map((s) => s.proficiency))}
              </p>
              <p className="text-foreground/60 text-sm">Max Proficiency</p>
            </div>

            <div className="glass rounded-lg p-6 text-center">
              <p className="text-3xl font-bold gradient-text mb-2">
                {Math.max(...skills.map((s) => s.yearsExperience))}+
              </p>
              <p className="text-foreground/60 text-sm">Years in Top Skill</p>
            </div>

            <div className="glass rounded-lg p-6 text-center">
              <p className="text-3xl font-bold gradient-text mb-2">
                {skillCategories.length}
              </p>
              <p className="text-foreground/60 text-sm">Categories</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
